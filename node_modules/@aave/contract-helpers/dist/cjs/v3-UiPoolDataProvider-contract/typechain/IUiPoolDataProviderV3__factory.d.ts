import { Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { UiPoolDataProviderV3, UiPoolDataProviderV3Interface } from './IUiPoolDataProviderV3';
export declare class UiPoolDataProviderV3__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEACAggregatorProxy";
            readonly name: "_networkBaseTokenPriceInUsdProxyAggregator";
            readonly type: "address";
        }, {
            readonly internalType: "contract IEACAggregatorProxy";
            readonly name: "_marketReferenceCurrencyPriceInUsdProxyAggregator";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETH_CURRENCY_UNIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MKR_ADDRESS";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_bytes32";
            readonly type: "bytes32";
        }];
        readonly name: "bytes32ToString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly name: "getEModes";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "id";
                readonly type: "uint8";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint16";
                    readonly name: "ltv";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "liquidationThreshold";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "liquidationBonus";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "collateralBitmap";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "string";
                    readonly name: "label";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "borrowableBitmap";
                    readonly type: "uint128";
                }];
                readonly internalType: "struct DataTypes.EModeCategory";
                readonly name: "eMode";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IUiPoolDataProviderV3.Emode[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly name: "getReservesData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "decimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseLTVasCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveLiquidationThreshold";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveLiquidationBonus";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "usageAsCollateralEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "borrowingEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isActive";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isFrozen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "liquidityIndex";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "variableBorrowIndex";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "liquidityRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "variableBorrowRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint40";
                readonly name: "lastUpdateTimestamp";
                readonly type: "uint40";
            }, {
                readonly internalType: "address";
                readonly name: "aTokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "variableDebtTokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "interestRateStrategyAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "availableLiquidity";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalScaledVariableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceInMarketReferenceCurrency";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "priceOracle";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "variableRateSlope1";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "variableRateSlope2";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseVariableBorrowRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "optimalUsageRatio";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isPaused";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSiloedBorrowing";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "accruedToTreasury";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "unbacked";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "isolationModeTotalDebt";
                readonly type: "uint128";
            }, {
                readonly internalType: "bool";
                readonly name: "flashLoanEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "debtCeiling";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "debtCeilingDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowCap";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "supplyCap";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "borrowableInIsolation";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "virtualAccActive";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "virtualUnderlyingBalance";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IUiPoolDataProviderV3.AggregatedReserveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "marketReferenceCurrencyUnit";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "marketReferenceCurrencyPriceInUsd";
                readonly type: "int256";
            }, {
                readonly internalType: "int256";
                readonly name: "networkBaseTokenPriceInUsd";
                readonly type: "int256";
            }, {
                readonly internalType: "uint8";
                readonly name: "networkBaseTokenPriceDecimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly name: "getReservesList";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserReservesData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "scaledATokenBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "usageAsCollateralEnabledOnUser";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "scaledVariableDebt";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IUiPoolDataProviderV3.UserReserveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "marketReferenceCurrencyPriceInUsdProxyAggregator";
        readonly outputs: readonly [{
            readonly internalType: "contract IEACAggregatorProxy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "networkBaseTokenPriceInUsdProxyAggregator";
        readonly outputs: readonly [{
            readonly internalType: "contract IEACAggregatorProxy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): UiPoolDataProviderV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UiPoolDataProviderV3;
}
//# sourceMappingURL=IUiPoolDataProviderV3__factory.d.ts.map