import { __decorate, __metadata, __param } from "tslib";
import BaseService from '../commons/BaseService';
import { UiIncentiveDataProviderValidator } from '../commons/validators/methodValidators';
import { isEthAddress } from '../commons/validators/paramValidators';
import { UiIncentiveDataProviderV3__factory } from './typechain/IUiIncentiveDataProviderV3__factory';
export * from './types';
export class UiIncentiveDataProvider extends BaseService {
    /**
     * Constructor
     * @param context The ui incentive data provider context
     */
    constructor({ provider, uiIncentiveDataProviderAddress, chainId, }) {
        super(provider, UiIncentiveDataProviderV3__factory);
        this.uiIncentiveDataProviderAddress = uiIncentiveDataProviderAddress;
        this.chainId = chainId;
    }
    /**
     *  Get the full reserve incentive data for the lending pool and the user
     * @param user The user address
     */
    async getFullReservesIncentiveData({ user, lendingPoolAddressProvider }) {
        const uiIncentiveContract = this.getContractInstance(this.uiIncentiveDataProviderAddress);
        return uiIncentiveContract.getFullReservesIncentiveData(lendingPoolAddressProvider, user);
    }
    /**
     *  Get the reserve incentive data for the lending pool
     */
    async getReservesIncentivesData({ lendingPoolAddressProvider }) {
        const uiIncentiveContract = this.getContractInstance(this.uiIncentiveDataProviderAddress);
        return uiIncentiveContract.getReservesIncentivesData(lendingPoolAddressProvider);
    }
    /**
     *  Get the reserve incentive data for the user
     * @param user The user address
     */
    async getUserReservesIncentivesData({ user, lendingPoolAddressProvider }) {
        const uiIncentiveContract = this.getContractInstance(this.uiIncentiveDataProviderAddress);
        return uiIncentiveContract.getUserReservesIncentivesData(lendingPoolAddressProvider, user);
    }
    async getReservesIncentivesDataHumanized({ lendingPoolAddressProvider }) {
        const response = await this.getReservesIncentivesData({ lendingPoolAddressProvider });
        return response.map(r => ({
            id: `${this.chainId}-${r.underlyingAsset}-${lendingPoolAddressProvider}`.toLowerCase(),
            underlyingAsset: r.underlyingAsset.toLowerCase(),
            aIncentiveData: this._formatIncentiveData(r.aIncentiveData),
            vIncentiveData: this._formatIncentiveData(r.vIncentiveData),
        }));
    }
    async getUserReservesIncentivesDataHumanized({ user, lendingPoolAddressProvider }) {
        const response = await this.getUserReservesIncentivesData({
            user,
            lendingPoolAddressProvider,
        });
        return response.map(r => ({
            id: `${this.chainId}-${user}-${r.underlyingAsset}-${lendingPoolAddressProvider}`.toLowerCase(),
            underlyingAsset: r.underlyingAsset.toLowerCase(),
            aTokenIncentivesUserData: this._formatUserIncentiveData(r.aTokenIncentivesUserData),
            vTokenIncentivesUserData: this._formatUserIncentiveData(r.vTokenIncentivesUserData),
        }));
    }
    _formatIncentiveData(data) {
        return {
            tokenAddress: data.tokenAddress,
            incentiveControllerAddress: data.incentiveControllerAddress,
            rewardsTokenInformation: data.rewardsTokenInformation.map((rawRewardInfo) => ({
                precision: rawRewardInfo.precision,
                rewardTokenAddress: rawRewardInfo.rewardTokenAddress,
                rewardTokenDecimals: rawRewardInfo.rewardTokenDecimals,
                emissionPerSecond: rawRewardInfo.emissionPerSecond.toString(),
                incentivesLastUpdateTimestamp: rawRewardInfo.incentivesLastUpdateTimestamp.toNumber(),
                tokenIncentivesIndex: rawRewardInfo.tokenIncentivesIndex.toString(),
                emissionEndTimestamp: rawRewardInfo.emissionEndTimestamp.toNumber(),
                rewardTokenSymbol: rawRewardInfo.rewardTokenSymbol,
                rewardOracleAddress: rawRewardInfo.rewardOracleAddress,
                rewardPriceFeed: rawRewardInfo.rewardPriceFeed.toString(),
                priceFeedDecimals: rawRewardInfo.priceFeedDecimals,
            })),
        };
    }
    _formatUserIncentiveData(data) {
        return {
            tokenAddress: data.tokenAddress,
            incentiveControllerAddress: data.incentiveControllerAddress,
            userRewardsInformation: data.userRewardsInformation.map((userRewardInformation) => ({
                rewardTokenAddress: userRewardInformation.rewardTokenAddress,
                rewardTokenDecimals: userRewardInformation.rewardTokenDecimals,
                tokenIncentivesUserIndex: userRewardInformation.tokenIncentivesUserIndex.toString(),
                userUnclaimedRewards: userRewardInformation.userUnclaimedRewards.toString(),
                rewardTokenSymbol: userRewardInformation.rewardTokenSymbol,
                rewardOracleAddress: userRewardInformation.rewardOracleAddress,
                rewardPriceFeed: userRewardInformation.rewardPriceFeed.toString(),
                priceFeedDecimals: userRewardInformation.priceFeedDecimals,
            })),
        };
    }
}
__decorate([
    UiIncentiveDataProviderValidator,
    __param(0, isEthAddress('user')),
    __param(0, isEthAddress('lendingPoolAddressProvider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiIncentiveDataProvider.prototype, "getFullReservesIncentiveData", null);
__decorate([
    UiIncentiveDataProviderValidator,
    __param(0, isEthAddress('lendingPoolAddressProvider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiIncentiveDataProvider.prototype, "getReservesIncentivesData", null);
__decorate([
    UiIncentiveDataProviderValidator,
    __param(0, isEthAddress('user')),
    __param(0, isEthAddress('lendingPoolAddressProvider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiIncentiveDataProvider.prototype, "getUserReservesIncentivesData", null);
__decorate([
    UiIncentiveDataProviderValidator,
    __param(0, isEthAddress('lendingPoolAddressProvider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiIncentiveDataProvider.prototype, "getReservesIncentivesDataHumanized", null);
__decorate([
    UiIncentiveDataProviderValidator,
    __param(0, isEthAddress('user')),
    __param(0, isEthAddress('lendingPoolAddressProvider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiIncentiveDataProvider.prototype, "getUserReservesIncentivesDataHumanized", null);
//# sourceMappingURL=index.js.map