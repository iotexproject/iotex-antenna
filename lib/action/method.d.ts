import { Account } from "../account/account";
import { IAction, IRpcMethod } from "../rpc-method/types";
import { Envelop, SealedEnvelop } from "./envelop";
import { ClaimFromRewardingFund, Execution, Transfer } from "./types";
export declare class AbstractMethod {
  client: IRpcMethod;
  account: Account;
  constructor(client: IRpcMethod, account: Account);
  baseEnvelop(gasLimit?: string, gasPrice?: string): Promise<Envelop>;
  signAction(envelop: Envelop): Promise<SealedEnvelop>;
  sendAction(envelop: Envelop): Promise<string>;
}
export declare class TransferMethod extends AbstractMethod {
  transfer: Transfer;
  constructor(client: IRpcMethod, account: Account, transfer: Transfer);
  execute(): Promise<string>;
}
export declare class ExecutionMethod extends AbstractMethod {
  execution: Execution;
  constructor(client: IRpcMethod, account: Account, execution: Execution);
  execute(): Promise<string>;
  sign(): Promise<IAction>;
}
export declare class ClaimFromRewardingFundMethod extends AbstractMethod {
  claimFronRewardFund: ClaimFromRewardingFund;
  constructor(
    client: IRpcMethod,
    account: Account,
    claim: ClaimFromRewardingFund
  );
  execute(): Promise<string>;
  sign(): Promise<IAction>;
}
