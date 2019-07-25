import { ABIDefinition } from "./contract/abi";

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

export interface TransferRequest {
  from: string;
  to: string;
  value: string;
  payload?: string;
  gasLimit?: string;
  gasPrice?: string;
}

export interface ContractRequest {
  from: string;
  amount?: string;
  abi: Array<ABIDefinition> | string;
  // contract bytecode
  data: Buffer;
  gasLimit?: string;
  gasPrice?: string;
}

export interface ExecuteContractRequest {
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
