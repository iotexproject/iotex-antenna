import actionPb from "../../protogen/proto/types/action_pb";
import { hash256b } from "../crypto/hash";
import {
  ITransfer,
  IVote,
  IExecution,
  IStartSubChain,
  IStopSubChain,
  IPutBlock,
  ICreateDeposit,
  ISettleDeposit,
  ICreatePlumChain,
  ITerminatePlumChain,
  IPlumPutBlock,
  IPlumCreateDeposit,
  IPlumStartExit,
  IPlumChallengeExit,
  IPlumResponseChallengeExit,
  IPlumFinalizeExit,
  IPlumSettleDeposit,
  IPlumTransfer,
  IDepositToRewardingFund,
  IClaimFromRewardingFund,
  IGrantReward,
  IPutPollResult,
  toActionTransfer,
  toActionVote,
  toActionExecution,
  toActionStartSubChain,
  toActionStopSubChain,
  toActionPutBlock,
  toActionCreateDeposit,
  toActionSettleDeposit,
  toActionCreatePlumChain,
  toActionTerminatePlumChain,
  toActionPlumPutBlock,
  toActionPlumCreateDeposit,
  toActionPlumStartExit,
  toActionPlumChallengeExit,
  toActionPlumResponseChallengeExit,
  toActionPlumFinalizeExit,
  toActionPlumSettleDeposit,
  toActionPlumTransfer,
  toActionDepositToRewardingFund,
  toActionClaimFromRewardingFund,
  toActionGrantReward
} from "../rpc-method/types";

export class Envelop {
  public version: number;
  public nonce: string;
  public gasLimit: string;
  public gasPrice: string;

  // optional fields
  public transfer?: ITransfer | undefined;
  public vote?: IVote | undefined;
  public execution?: IExecution | undefined;
  public startSubChain?: IStartSubChain | undefined;
  public stopSubChain?: IStopSubChain | undefined;
  public putBlock?: IPutBlock | undefined;
  public createDeposit?: ICreateDeposit | undefined;
  public settleDeposit?: ISettleDeposit | undefined;
  public createPlumChain?: ICreatePlumChain | undefined;
  public terminatePlumChain?: ITerminatePlumChain | undefined;
  public plumPutBlock?: IPlumPutBlock | undefined;
  public plumCreateDeposit?: IPlumCreateDeposit | undefined;
  public plumStartExit?: IPlumStartExit | undefined;
  public plumChallengeExit?: IPlumChallengeExit | undefined;
  public plumResponseChallengeExit?: IPlumResponseChallengeExit | undefined;
  public plumFinalizeExit?: IPlumFinalizeExit | undefined;
  public plumSettleDeposit?: IPlumSettleDeposit | undefined;
  public plumTransfer?: IPlumTransfer | undefined;
  public depositToRewardingFund?: IDepositToRewardingFund | undefined;
  public claimFromRewardingFund?: IClaimFromRewardingFund | undefined;
  public grantReward?: IGrantReward | undefined;
  public putPollResult?: IPutPollResult | undefined;

  constructor(
    version: number,
    nonce: string,
    gasLimit: string,
    gasPrice: string
  ) {
    this.version = version;
    this.nonce = nonce;
    this.gasLimit = gasLimit;
    this.gasPrice = gasPrice;
  }

  public core(): actionPb.ActionCore {
    const pbActionCore = new actionPb.ActionCore();
    pbActionCore.setVersion(this.version);
    pbActionCore.setNonce(Number(this.nonce));
    pbActionCore.setGaslimit(Number(this.gasLimit));
    pbActionCore.setGasprice(this.gasPrice);
    pbActionCore.setTransfer(toActionTransfer(this.transfer));
    pbActionCore.setVote(toActionVote(this.vote));
    pbActionCore.setExecution(toActionExecution(this.execution));
    pbActionCore.setStartsubchain(toActionStartSubChain(this.startSubChain));
    pbActionCore.setStopsubchain(toActionStopSubChain(this.stopSubChain));
    pbActionCore.setPutblock(toActionPutBlock(this.putBlock));
    pbActionCore.setCreatedeposit(toActionCreateDeposit(this.createDeposit));
    pbActionCore.setSettledeposit(toActionSettleDeposit(this.settleDeposit));
    pbActionCore.setCreateplumchain(
      toActionCreatePlumChain(this.createPlumChain)
    );
    pbActionCore.setTerminateplumchain(
      toActionTerminatePlumChain(this.terminatePlumChain)
    );
    pbActionCore.setPlumputblock(toActionPlumPutBlock(this.plumPutBlock));
    pbActionCore.setPlumcreatedeposit(
      toActionPlumCreateDeposit(this.plumCreateDeposit)
    );
    pbActionCore.setPlumstartexit(toActionPlumStartExit(this.plumStartExit));
    pbActionCore.setPlumchallengeexit(
      toActionPlumChallengeExit(this.plumChallengeExit)
    );
    pbActionCore.setPlumresponsechallengeexit(
      toActionPlumResponseChallengeExit(this.plumResponseChallengeExit)
    );
    pbActionCore.setPlumfinalizeexit(
      toActionPlumFinalizeExit(this.plumFinalizeExit)
    );
    pbActionCore.setPlumsettledeposit(
      toActionPlumSettleDeposit(this.plumSettleDeposit)
    );
    pbActionCore.setPlumtransfer(toActionPlumTransfer(this.plumTransfer));
    pbActionCore.setDeposittorewardingfund(
      toActionDepositToRewardingFund(this.depositToRewardingFund)
    );
    pbActionCore.setClaimfromrewardingfund(
      toActionClaimFromRewardingFund(this.claimFromRewardingFund)
    );
    pbActionCore.setGrantreward(toActionGrantReward(this.grantReward));

    return pbActionCore;
  }

  public bytestream(): Uint8Array {
    return this.core().serializeBinary();
  }
}

export class SealedEnvelop {
  public act: Envelop;
  public senderPubKey: Buffer;
  public signature: Buffer;

  constructor(act: Envelop, senderPubKey: Buffer, signature: Buffer) {
    this.act = act;
    this.senderPubKey = senderPubKey;
    this.signature = signature;
  }

  public bytestream(): Uint8Array {
    const pbActionCore = this.act.core();
    const pbAction = new actionPb.Action();
    pbAction.setCore(pbActionCore);
    pbAction.setSenderpubkey(this.senderPubKey);
    pbAction.setSignature(this.signature);
    return pbAction.serializeBinary();
  }

  public hash(): string {
    return Buffer.from(hash256b(this.bytestream())).toString("hex");
  }
}
