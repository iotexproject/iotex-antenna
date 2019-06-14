/// <reference types="node" />
import actionPb from "../../protogen/proto/types/action_pb";
import { IAccount } from "../account/account";
import {
  IAction,
  IClaimFromRewardingFund,
  ICreateDeposit,
  ICreatePlumChain,
  IDepositToRewardingFund,
  IExecution,
  IGrantReward,
  IPlumChallengeExit,
  IPlumCreateDeposit,
  IPlumFinalizeExit,
  IPlumPutBlock,
  IPlumResponseChallengeExit,
  IPlumSettleDeposit,
  IPlumStartExit,
  IPlumTransfer,
  IPutBlock,
  IPutPollResult,
  ISettleDeposit,
  IStartSubChain,
  IStopSubChain,
  ITerminatePlumChain,
  ITransfer
} from "../rpc-method/types";
export declare class Envelop {
  version: number;
  nonce: string;
  gasLimit?: string | undefined;
  gasPrice?: string | undefined;
  transfer?: ITransfer | undefined;
  execution?: IExecution | undefined;
  startSubChain?: IStartSubChain | undefined;
  stopSubChain?: IStopSubChain | undefined;
  putBlock?: IPutBlock | undefined;
  createDeposit?: ICreateDeposit | undefined;
  settleDeposit?: ISettleDeposit | undefined;
  createPlumChain?: ICreatePlumChain | undefined;
  terminatePlumChain?: ITerminatePlumChain | undefined;
  plumPutBlock?: IPlumPutBlock | undefined;
  plumCreateDeposit?: IPlumCreateDeposit | undefined;
  plumStartExit?: IPlumStartExit | undefined;
  plumChallengeExit?: IPlumChallengeExit | undefined;
  plumResponseChallengeExit?: IPlumResponseChallengeExit | undefined;
  plumFinalizeExit?: IPlumFinalizeExit | undefined;
  plumSettleDeposit?: IPlumSettleDeposit | undefined;
  plumTransfer?: IPlumTransfer | undefined;
  depositToRewardingFund?: IDepositToRewardingFund | undefined;
  claimFromRewardingFund?: IClaimFromRewardingFund | undefined;
  grantReward?: IGrantReward | undefined;
  putPollResult?: IPutPollResult | undefined;
  constructor(
    version: number,
    nonce: string,
    gasLimit?: string,
    gasPrice?: string
  );
  core(): actionPb.ActionCore;
  bytestream(): Uint8Array;
}
export declare class SealedEnvelop {
  act: Envelop;
  senderPubKey: Buffer;
  signature: Buffer;
  constructor(act: Envelop, senderPubKey: Buffer, signature: Buffer);
  bytestream(): Uint8Array;
  hash(): string;
  action(): IAction;
  static sign(account: IAccount, act: Envelop): Promise<SealedEnvelop>;
}
