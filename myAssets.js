import express from 'express';
import { ethers } from 'ethers';
import {
  UiPoolDataProvider,
  ChainId,
} from '@aave/contract-helpers';
import * as markets from '@bgd-labs/aave-address-book';

const chainProviders = {
  ethereum: 'https://eth-mainnet.public.blastapi.io',
  polygon: 'https://polygon-mainnet.public.blastapi.io',
  avalanche: 'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
  base: 'https://base-mainnet.public.blastapi.io',
  arbitrum: 'https://arbitrum-one.public.blastapi.io',
  optimism: 'https://optimism-mainnet.public.blastapi.io',
};

// Token list URLs for different networks
const tokenListUrls = {
  ethereum: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  polygon: 'https://unpkg.com/quickswap-default-token-list@1.3.27/build/quickswap-default.tokenlist.json',
  avalanche: 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/joe.tokenlist.json',
  arbitrum: 'https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json',
  optimism: 'https://static.optimism.io/optimism.tokenlist.json',
  base: 'https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json'
};

// Network metadata including logos
const networkMetadata = {
  ethereum: {
    name: 'Ethereum',
    image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png'
  },
  polygon: {
    name: 'Polygon',
    image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png'
  },
  avalanche: {
    name: 'Avalanche',
    image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png'
  },
  base: {
    name: 'Base',
    image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png'
  },
  arbitrum: {
    name: 'Arbitrum',
    image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png'
  },
  optimism: {
    name: 'Optimism',
    image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png'
  }
};

// Cache for token lists
const tokenListCache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

async function fetchTokenList(networkName) {
  try {
    const cachedData = tokenListCache.get(networkName);
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return cachedData.data;
    }

    const response = await fetch(tokenListUrls[networkName]);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const tokenList = await response.json();
    
    // Create a map of symbol to token data for quick lookup
    const tokenMap = new Map();
    tokenList.tokens.forEach(token => {
      tokenMap.set(token.symbol.toUpperCase(), {
        name: token.name,
        symbol: token.symbol,
        image_url: token.logoURI
      });
    });

    tokenListCache.set(networkName, {
      data: tokenMap,
      timestamp: Date.now()
    });

    return tokenMap;
  } catch (error) {
    console.warn(`Could not fetch token list for ${networkName}, using fallback or empty list`);
    return new Map(); // Prevent the error from breaking the entire process
  }
}

function normalizeBalance(balance, decimals = 18) {
  return parseFloat(ethers.utils.formatUnits(balance, decimals));
}

async function fetchContractData(chain, provider) {
  try {
    const chainKey = `AaveV3${chain.charAt(0).toUpperCase() + chain.slice(1)}`;
    const poolDataProviderContract = new UiPoolDataProvider({
      uiPoolDataProviderAddress: markets[chainKey].UI_POOL_DATA_PROVIDER,
      provider,
      chainId: ChainId[chain],
    });

    const userReservesResult = await poolDataProviderContract.getUserReservesHumanized({
      lendingPoolAddressProvider: markets[chainKey].POOL_ADDRESSES_PROVIDER,
      user: '0x640dcF8E66e06723f565C637a1a09aCca45e65fc',
    });

    const reservesResult = await poolDataProviderContract.getReservesHumanized({
      lendingPoolAddressProvider: markets[chainKey].POOL_ADDRESSES_PROVIDER,
    });

    const tokenList = await fetchTokenList(chain);

    const assets = await Promise.all(
      userReservesResult.userReserves
        .filter(reserve => parseFloat(reserve.scaledATokenBalance) > 0)
        .map(async reserve => {
          const reserveData = reservesResult.reservesData.find(
            r => r.underlyingAsset.toLowerCase() === reserve.underlyingAsset.toLowerCase()
          );

          if (!reserveData) {
            console.log(`No reserve data found for ${reserve.underlyingAsset}`);
            return null;
          }

          const scaledBalance = ethers.BigNumber.from(reserve.scaledATokenBalance);
          const liquidityIndex = ethers.BigNumber.from(reserveData.liquidityIndex);
          const decimals = reserveData.decimals;

          const rawBalance = scaledBalance.mul(liquidityIndex).div(ethers.BigNumber.from(10).pow(27));
          const normalizedBalance = normalizeBalance(rawBalance, decimals);

          const priceInUSD = normalizeBalance(reserveData.priceInMarketReferenceCurrency, 8);
          const balanceInUSD = normalizedBalance * priceInUSD;
          const liquidityRateAPR = parseFloat(reserveData.liquidityRate) / 1e27 * 100;
          const liquidityRateAPY = (Math.pow((1 + liquidityRateAPR / 100 / 365), 365) - 1) * 100;

          // Get token metadata from token list
          const tokenMetadata = tokenList.get(reserveData.symbol.toUpperCase()) || {
            name: reserveData.symbol,
            symbol: reserveData.symbol,
            image_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0000000000000000000000000000000000000000/logo.png'
          };

          return {
            underlyingAsset: reserve.underlyingAsset,
            symbol: reserveData.symbol,
            name: tokenMetadata.name,
            tokenBalance: normalizedBalance,
            priceInUSD: priceInUSD,
            balanceInUSD: balanceInUSD,
            liquidityRate: liquidityRateAPY,
            image_url: tokenMetadata.image_url,
          };
        })
    );

    return assets.filter(Boolean).length > 0
      ? {
          network: chain,
          networkName: networkMetadata[chain].name,
          networkImage: networkMetadata[chain].image_url,
          assets: assets.filter(Boolean),
          totalBalanceUSD: assets.reduce((sum, asset) => sum + asset.balanceInUSD, 0),
        }
      : null;
  } catch (error) {
    console.error(`Error fetching contract data for ${chain}:`, error);
    return null;
  }
}

const app = express();
const port = 3000;

app.get('/api/liquidity-rates', async (req, res) => {
  try {
    const results = [];
    console.log("REQ");

    for (const [chain, rpcUrl] of Object.entries(chainProviders)) {
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      const chainData = await fetchContractData(chain, provider);
      if (chainData) {
        results.push(chainData);
      }
    }

    res.json(results);
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});