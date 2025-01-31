import { providers } from 'ethers';
import BaseService from '../commons/BaseService';
import { ReservesHelperInput, UserReservesHelperInput } from '../index';
import { UiIncentiveDataProviderV3 } from './typechain/IUiIncentiveDataProviderV3';
import { FullReservesIncentiveDataResponse, ReservesIncentiveData, ReservesIncentiveDataHumanized, UserReservesIncentivesData, UserReservesIncentivesDataHumanized } from './types';
export * from './types';
export interface UiIncentiveDataProviderInterface {
    getFullReservesIncentiveData: (args: UserReservesHelperInput) => Promise<FullReservesIncentiveDataResponse>;
    getReservesIncentivesData: (args: ReservesHelperInput) => Promise<ReservesIncentiveData[]>;
    getUserReservesIncentivesData: (args: UserReservesHelperInput) => Promise<UserReservesIncentivesData[]>;
    getReservesIncentivesDataHumanized: (args: ReservesHelperInput) => Promise<ReservesIncentiveDataHumanized[]>;
    getUserReservesIncentivesDataHumanized: (args: UserReservesHelperInput) => Promise<UserReservesIncentivesDataHumanized[]>;
}
export interface FeedResultSuccessful {
    rewardTokenAddress: string;
    answer: string;
    updatedAt: number;
    decimals: number;
}
export interface UiIncentiveDataProviderContext {
    uiIncentiveDataProviderAddress: string;
    provider: providers.Provider;
    chainId: number;
}
export declare class UiIncentiveDataProvider extends BaseService<UiIncentiveDataProviderV3> implements UiIncentiveDataProviderInterface {
    readonly uiIncentiveDataProviderAddress: string;
    readonly chainId: number;
    /**
     * Constructor
     * @param context The ui incentive data provider context
     */
    constructor({ provider, uiIncentiveDataProviderAddress, chainId, }: UiIncentiveDataProviderContext);
    /**
     *  Get the full reserve incentive data for the lending pool and the user
     * @param user The user address
     */
    getFullReservesIncentiveData({ user, lendingPoolAddressProvider }: UserReservesHelperInput): Promise<FullReservesIncentiveDataResponse>;
    /**
     *  Get the reserve incentive data for the lending pool
     */
    getReservesIncentivesData({ lendingPoolAddressProvider }: ReservesHelperInput): Promise<ReservesIncentiveData[]>;
    /**
     *  Get the reserve incentive data for the user
     * @param user The user address
     */
    getUserReservesIncentivesData({ user, lendingPoolAddressProvider }: UserReservesHelperInput): Promise<UserReservesIncentivesData[]>;
    getReservesIncentivesDataHumanized({ lendingPoolAddressProvider }: ReservesHelperInput): Promise<ReservesIncentiveDataHumanized[]>;
    getUserReservesIncentivesDataHumanized({ user, lendingPoolAddressProvider }: UserReservesHelperInput): Promise<UserReservesIncentivesDataHumanized[]>;
    private _formatIncentiveData;
    private _formatUserIncentiveData;
}
//# sourceMappingURL=index.d.ts.map