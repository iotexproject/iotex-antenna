import { Account } from "./account/account";
import { Accounts } from "./account/accounts";
import { SignerPlugin } from "./action/method";
import RpcMethod from "./rpc-method";
import { IRpcMethod } from "./rpc-method/types";
import {
  ClaimFromRewardingFundRequset,
  ContractRequest,
  ExecuteContractRequest,
  TransferRequest
} from "./types";
declare type IotxOpts = {
  signer?: SignerPlugin;
};
export declare class Iotx extends RpcMethod {
  accounts: Accounts;
  signer?: SignerPlugin;
  constructor(hostname: string, opts?: IotxOpts);
  tryGetAccount(address: string): Promise<Account>;
  currentProvider(): IRpcMethod;
  sendTransfer(req: TransferRequest): Promise<string>;
  deployContract(req: ContractRequest, ...args: any[]): Promise<string>;
  executeContract(req: ExecuteContractRequest, ...args: any[]): Promise<string>;
  readContractByMethod(
    req: ExecuteContractRequest,
    ...args: Array<any>
  ): Promise<any | Array<any>>;
  claimFromRewardingFund(req: ClaimFromRewardingFundRequset): Promise<string>;
}
export {};
