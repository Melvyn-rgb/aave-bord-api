import { Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { UiIncentiveDataProviderV3, UiIncentiveDataProviderV3Interface } from './IUiIncentiveDataProviderV3';
export declare class UiIncentiveDataProviderV3__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getFullReservesIncentiveData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionPerSecond";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "incentivesLastUpdateTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionEndTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "precision";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]";
                    readonly name: "rewardsTokenInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.IncentiveData";
                readonly name: "aIncentiveData";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionPerSecond";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "incentivesLastUpdateTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionEndTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "precision";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]";
                    readonly name: "rewardsTokenInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.IncentiveData";
                readonly name: "vIncentiveData";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IUiIncentiveDataProviderV3.AggregatedReserveIncentiveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "userUnclaimedRewards";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesUserIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.UserRewardInfo[]";
                    readonly name: "userRewardsInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData";
                readonly name: "aTokenIncentivesUserData";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "userUnclaimedRewards";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesUserIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.UserRewardInfo[]";
                    readonly name: "userRewardsInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData";
                readonly name: "vTokenIncentivesUserData";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IUiIncentiveDataProviderV3.UserReserveIncentiveData[]";
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
        readonly name: "getReservesIncentivesData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionPerSecond";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "incentivesLastUpdateTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionEndTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "precision";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]";
                    readonly name: "rewardsTokenInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.IncentiveData";
                readonly name: "aIncentiveData";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionPerSecond";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "incentivesLastUpdateTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "emissionEndTimestamp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "precision";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]";
                    readonly name: "rewardsTokenInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.IncentiveData";
                readonly name: "vIncentiveData";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IUiIncentiveDataProviderV3.AggregatedReserveIncentiveData[]";
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
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserReservesIncentivesData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "userUnclaimedRewards";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesUserIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.UserRewardInfo[]";
                    readonly name: "userRewardsInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData";
                readonly name: "aTokenIncentivesUserData";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "incentiveControllerAddress";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "rewardTokenSymbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardOracleAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "rewardTokenAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "userUnclaimedRewards";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tokenIncentivesUserIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "rewardPriceFeed";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "priceFeedDecimals";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "rewardTokenDecimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct IUiIncentiveDataProviderV3.UserRewardInfo[]";
                    readonly name: "userRewardsInformation";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData";
                readonly name: "vTokenIncentivesUserData";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IUiIncentiveDataProviderV3.UserReserveIncentiveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): UiIncentiveDataProviderV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UiIncentiveDataProviderV3;
}
//# sourceMappingURL=IUiIncentiveDataProviderV3__factory.d.ts.map