import {
  IAccessTuple,
  IBlobTxData,
  ISetCodeAuthorization
} from "./rpc-method/types";
import { ABIDefinition } from "./contract/abi";

// Typed-tx options shared by sendTransfer, deployContract, executeContract.
// Set txType (0/1/2/3/4) plus the corresponding fee fields to route through
// the TX_CONTAINER signing path instead of the iotex protobuf path.
export interface TypedTxOptions {
  // Eth tx envelope type: 0 legacy, 1 access-list (EIP-2930),
  // 2 dynamic-fee (EIP-1559), 3 blob (EIP-4844), 4 set-code (EIP-7702).
  txType?: number;
  // Eth chain id. Required when txType is set.
  chainID?: number;
  // EIP-1559 / blob / setcode fees.
  gasTipCap?: string;
  gasFeeCap?: string;
  // EIP-2930 access list.
  accessList?: IAccessTuple[];
  // EIP-4844 blob data (executeContract only).
  blobTxData?: IBlobTxData;
  // EIP-7702 auth list (executeContract only).
  setCodeAuthList?: ISetCodeAuthorization[];
}

export interface Log {
  address: string;
  data: string;
  topics: Array<string>;
  logIndex: number;
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
}

export interface EventLog {
  event: string;
  address: string;
  // tslint:disable-next-line:no-any
  returnValues: any;
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
  raw?: { data: string; topics: Array<string> };
}

export interface TransactionReceipt {
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
  from: string;
  to: string;
  contractAddress: string;
  cumulativeGasUsed: number;
  gasUsed: number;
  logs?: Array<Log>;
  events?: {
    [eventName: string]: EventLog;
  };
  status: boolean;
}

export interface TransferRequest extends TypedTxOptions {
  from: string;
  to: string;
  value: string;
  payload?: string;
  gasLimit?: string;
  gasPrice?: string;
}

export interface ContractRequest extends TypedTxOptions {
  from: string;
  amount?: string;
  abi: Array<ABIDefinition> | string;
  // contract bytecode
  data: Buffer;
  gasLimit?: string;
  gasPrice?: string;
}

export interface ExecuteContractRequest extends TypedTxOptions {
  from: string;
  amount?: string;
  abi: Array<ABIDefinition> | string;
  contractAddress: string;
  method: string;
  gasLimit?: string;
  gasPrice?: string;
}

export interface ClaimFromRewardingFundRequset {
  from: string;
  amount: string;
  data: Buffer;
  gasLimit?: string;
  gasPrice?: string;
}

export interface DepositToRewardingFundRequset {
  from: string;
  amount: string;
  data: Buffer;
  gasLimit?: string;
  gasPrice?: string;
}
