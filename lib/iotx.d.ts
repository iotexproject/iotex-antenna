import { Accounts } from "./account/accounts";
import RpcMethod from "./rpc-method";
import { IRpcMethod } from "./rpc-method/types";
import {
  ClaimFromRewardingFundRequset,
  ContractRequest,
  ExecuteContractRequest,
  TransferRequest
} from "./types";
export declare class Iotx extends RpcMethod {
  accounts: Accounts;
  constructor(hostname: string);
  currentProvider(): IRpcMethod;
  sendTransfer(req: TransferRequest): Promise<string>;
  deployContract(req: ContractRequest, ...args: any[]): Promise<string>;
  executeContract(req: ExecuteContractRequest, ...args: any[]): Promise<string>;
  readContractByMethod(
    req: ExecuteContractRequest,
    ...args: any[]
  ): Promise<string>;
  claimFromRewardingFund(req: ClaimFromRewardingFundRequset): Promise<string>;
}
