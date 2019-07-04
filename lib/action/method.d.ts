import { Account } from "../account/account";
import { IAction, IRpcMethod } from "../rpc-method/types";
import { Envelop, SealedEnvelop } from "./envelop";
import { ClaimFromRewardingFund, Execution, Transfer } from "./types";
export interface SignerPlugin {
  signAndSend?(envelop: Envelop): Promise<string>;
  signOnly?(envelop: Envelop): Promise<SealedEnvelop>;
  getAccount?(address: string): Promise<Account>;
}
export declare type AbstractMethodOpts = {
  signer?: SignerPlugin | undefined;
};
export declare class AbstractMethod {
  client: IRpcMethod;
  account: Account;
  signer?: SignerPlugin;
  constructor(client: IRpcMethod, account: Account, opts?: AbstractMethodOpts);
  baseEnvelop(gasLimit?: string, gasPrice?: string): Promise<Envelop>;
  signAction(envelop: Envelop): Promise<SealedEnvelop>;
  sendAction(envelop: Envelop): Promise<string>;
}
export declare class TransferMethod extends AbstractMethod {
  transfer: Transfer;
  constructor(
    client: IRpcMethod,
    account: Account,
    transfer: Transfer,
    opts?: AbstractMethodOpts
  );
  execute(): Promise<string>;
}
export declare class ExecutionMethod extends AbstractMethod {
  execution: Execution;
  constructor(
    client: IRpcMethod,
    account: Account,
    execution: Execution,
    opts?: AbstractMethodOpts
  );
  execute(): Promise<string>;
  sign(): Promise<IAction>;
}
export declare class ClaimFromRewardingFundMethod extends AbstractMethod {
  claimFronRewardFund: ClaimFromRewardingFund;
  constructor(
    client: IRpcMethod,
    account: Account,
    claim: ClaimFromRewardingFund,
    opts?: AbstractMethodOpts
  );
  execute(): Promise<string>;
  sign(): Promise<IAction>;
}
