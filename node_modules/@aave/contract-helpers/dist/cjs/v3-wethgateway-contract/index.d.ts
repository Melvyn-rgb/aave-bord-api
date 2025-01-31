import { PopulatedTransaction, providers } from 'ethers';
import { BaseDebtTokenInterface } from '../baseDebtToken-contract';
import BaseService from '../commons/BaseService';
import { EthereumTransactionTypeExtended, tEthereumAddress } from '../commons/types';
import { IERC20ServiceInterface } from '../erc20-contract';
import { WrappedTokenGatewayV3, WrappedTokenGatewayV3Interface } from './typechain/WrappedTokenGatewayV3';
export declare type WETHDepositParamsType = {
    lendingPool: tEthereumAddress;
    user: tEthereumAddress;
    amount: string;
    onBehalfOf?: tEthereumAddress;
    referralCode?: string;
};
export declare type WETHWithdrawParamsType = {
    lendingPool: tEthereumAddress;
    user: tEthereumAddress;
    amount: string;
    aTokenAddress: tEthereumAddress;
    onBehalfOf?: tEthereumAddress;
};
export declare type WETHRepayParamsType = {
    lendingPool: tEthereumAddress;
    user: tEthereumAddress;
    amount: string;
    onBehalfOf?: tEthereumAddress;
};
export declare type WETHBorrowParamsType = {
    lendingPool: tEthereumAddress;
    user: tEthereumAddress;
    amount: string;
    debtTokenAddress?: tEthereumAddress;
    referralCode?: string;
};
export interface WETHGatewayInterface {
    generateDepositEthTxData: (args: WETHDepositParamsType) => PopulatedTransaction;
    generateBorrowEthTxData: (args: WETHBorrowParamsType) => PopulatedTransaction;
    generateRepayEthTxData: (args: WETHRepayParamsType) => PopulatedTransaction;
    depositETH: (args: WETHDepositParamsType) => EthereumTransactionTypeExtended[];
    withdrawETH: (args: WETHWithdrawParamsType) => Promise<EthereumTransactionTypeExtended[]>;
    repayETH: (args: WETHRepayParamsType) => EthereumTransactionTypeExtended[];
    borrowETH: (args: WETHBorrowParamsType) => Promise<EthereumTransactionTypeExtended[]>;
}
export declare class WETHGatewayService extends BaseService<WrappedTokenGatewayV3> implements WETHGatewayInterface {
    readonly wethGatewayAddress: string;
    readonly baseDebtTokenService: BaseDebtTokenInterface;
    readonly erc20Service: IERC20ServiceInterface;
    readonly wethGatewayInstance: WrappedTokenGatewayV3Interface;
    generateDepositEthTxData: (args: WETHDepositParamsType) => PopulatedTransaction;
    generateBorrowEthTxData: (args: WETHBorrowParamsType) => PopulatedTransaction;
    generateRepayEthTxData: (args: WETHRepayParamsType) => PopulatedTransaction;
    constructor(provider: providers.Provider, erc20Service: IERC20ServiceInterface, wethGatewayAddress?: string);
    depositETH({ lendingPool, user, amount, onBehalfOf, referralCode, }: WETHDepositParamsType): EthereumTransactionTypeExtended[];
    borrowETH({ lendingPool, user, amount, debtTokenAddress, referralCode, }: WETHBorrowParamsType): Promise<EthereumTransactionTypeExtended[]>;
    withdrawETH({ lendingPool, user, amount, onBehalfOf, aTokenAddress, }: WETHWithdrawParamsType): Promise<EthereumTransactionTypeExtended[]>;
    repayETH({ lendingPool, user, amount, onBehalfOf }: WETHRepayParamsType): EthereumTransactionTypeExtended[];
}
//# sourceMappingURL=index.d.ts.map