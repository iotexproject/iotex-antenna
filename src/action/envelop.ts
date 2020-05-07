import actionPb from "../../protogen/proto/types/action_pb";
import { makeSigner } from "../crypto/crypto";
import { hash256b } from "../crypto/hash";
import {
  GetActionsRequest,
  IAction,
  ICandidateBasicInfo,
  ICandidateRegister,
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
  IStakeAddDeposit,
  IStakeChangeCandidate,
  IStakeCreate,
  IStakeReclaim,
  IStakeRestake,
  IStakeTransferOwnership,
  IStartSubChain,
  IStopSubChain,
  ITerminatePlumChain,
  ITransfer,
  toActionCandidateBasicInfo,
  toActionCandidateRegister,
  toActionClaimFromRewardingFund,
  toActionCreateDeposit,
  toActionCreatePlumChain,
  toActionDepositToRewardingFund,
  toActionExecution,
  toActionGrantReward,
  toActionPlumChallengeExit,
  toActionPlumCreateDeposit,
  toActionPlumFinalizeExit,
  toActionPlumPutBlock,
  toActionPlumResponseChallengeExit,
  toActionPlumSettleDeposit,
  toActionPlumStartExit,
  toActionPlumTransfer,
  toActionPutBlock,
  toActionSettleDeposit,
  toActionStakeAddDeposit,
  toActionStakeChangeCandidate,
  toActionStakeCreate,
  toActionStakeReclaim,
  toActionStakeRestake,
  toActionStakeTransferOwnership,
  toActionStartSubChain,
  toActionStopSubChain,
  toActionTerminatePlumChain,
  toActionTransfer
} from "../rpc-method/types";

export class Envelop {
  public version: number;
  public nonce: string;
  public gasLimit?: string | undefined;
  public gasPrice?: string | undefined;

  // optional fields
  public transfer?: ITransfer | undefined;
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
  public stakeCreate?: IStakeCreate | undefined;
  public stakeUnstake?: IStakeReclaim | undefined;
  public stakeWithdraw?: IStakeReclaim | undefined;
  public stakeAddDeposit?: IStakeAddDeposit | undefined;
  public stakeRestake?: IStakeRestake | undefined;
  public stakeChangeCandidate?: IStakeChangeCandidate | undefined;
  public stakeTransferOwnership?: IStakeTransferOwnership | undefined;
  public candidateRegister?: ICandidateRegister | undefined;
  public candidateUpdate?: ICandidateBasicInfo | undefined;
  public putPollResult?: IPutPollResult | undefined;

  constructor(
    version: number,
    nonce: string,
    gasLimit?: string,
    gasPrice?: string
  ) {
    this.version = version;
    this.nonce = nonce;
    this.gasLimit = gasLimit;
    this.gasPrice = gasPrice;
  }

  // tslint:disable-next-line:cyclomatic-complexity
  public core(): actionPb.ActionCore {
    const gasLimit = this.gasLimit || "0";
    const gasPrice = this.gasPrice || "0";

    const pbActionCore = new actionPb.ActionCore();
    pbActionCore.setVersion(this.version);
    pbActionCore.setNonce(Number(this.nonce));
    pbActionCore.setGaslimit(Number(gasLimit));
    pbActionCore.setGasprice(gasPrice);

    // oneof action
    if (this.transfer) {
      pbActionCore.setTransfer(toActionTransfer(this.transfer));
    } else if (this.execution) {
      pbActionCore.setExecution(toActionExecution(this.execution));
    } else if (this.startSubChain) {
      pbActionCore.setStartsubchain(toActionStartSubChain(this.startSubChain));
    } else if (this.stopSubChain) {
      pbActionCore.setStopsubchain(toActionStopSubChain(this.stopSubChain));
    } else if (this.putBlock) {
      pbActionCore.setPutblock(toActionPutBlock(this.putBlock));
    } else if (this.createDeposit) {
      pbActionCore.setCreatedeposit(toActionCreateDeposit(this.createDeposit));
    } else if (this.settleDeposit) {
      pbActionCore.setSettledeposit(toActionSettleDeposit(this.settleDeposit));
    } else if (this.createPlumChain) {
      pbActionCore.setCreateplumchain(
        toActionCreatePlumChain(this.createPlumChain)
      );
    } else if (this.terminatePlumChain) {
      pbActionCore.setTerminateplumchain(
        toActionTerminatePlumChain(this.terminatePlumChain)
      );
    } else if (this.plumPutBlock) {
      pbActionCore.setPlumputblock(toActionPlumPutBlock(this.plumPutBlock));
    } else if (this.plumCreateDeposit) {
      pbActionCore.setPlumcreatedeposit(
        toActionPlumCreateDeposit(this.plumCreateDeposit)
      );
    } else if (this.plumStartExit) {
      pbActionCore.setPlumstartexit(toActionPlumStartExit(this.plumStartExit));
    } else if (this.plumChallengeExit) {
      pbActionCore.setPlumchallengeexit(
        toActionPlumChallengeExit(this.plumChallengeExit)
      );
    } else if (this.plumResponseChallengeExit) {
      pbActionCore.setPlumresponsechallengeexit(
        toActionPlumResponseChallengeExit(this.plumResponseChallengeExit)
      );
    } else if (this.plumFinalizeExit) {
      pbActionCore.setPlumfinalizeexit(
        toActionPlumFinalizeExit(this.plumFinalizeExit)
      );
    } else if (this.plumSettleDeposit) {
      pbActionCore.setPlumsettledeposit(
        toActionPlumSettleDeposit(this.plumSettleDeposit)
      );
    } else if (this.plumTransfer) {
      pbActionCore.setPlumtransfer(toActionPlumTransfer(this.plumTransfer));
    } else if (this.depositToRewardingFund) {
      pbActionCore.setDeposittorewardingfund(
        toActionDepositToRewardingFund(this.depositToRewardingFund)
      );
    } else if (this.claimFromRewardingFund) {
      pbActionCore.setClaimfromrewardingfund(
        toActionClaimFromRewardingFund(this.claimFromRewardingFund)
      );
    } else if (this.grantReward) {
      pbActionCore.setGrantreward(toActionGrantReward(this.grantReward));
    } else if (this.stakeCreate) {
      pbActionCore.setStakecreate(toActionStakeCreate(this.stakeCreate));
    } else if (this.stakeUnstake) {
      pbActionCore.setStakeunstake(toActionStakeReclaim(this.stakeUnstake));
    } else if (this.stakeWithdraw) {
      pbActionCore.setStakewithdraw(toActionStakeReclaim(this.stakeWithdraw));
    } else if (this.stakeAddDeposit) {
      pbActionCore.setStakeadddeposit(
        toActionStakeAddDeposit(this.stakeAddDeposit)
      );
    } else if (this.stakeRestake) {
      pbActionCore.setStakerestake(toActionStakeRestake(this.stakeRestake));
    } else if (this.stakeChangeCandidate) {
      pbActionCore.setStakechangecandidate(
        toActionStakeChangeCandidate(this.stakeChangeCandidate)
      );
    } else if (this.stakeTransferOwnership) {
      pbActionCore.setStaketransferownership(
        toActionStakeTransferOwnership(this.stakeTransferOwnership)
      );
    } else if (this.candidateRegister) {
      pbActionCore.setCandidateregister(
        toActionCandidateRegister(this.candidateRegister)
      );
    } else if (this.candidateUpdate) {
      pbActionCore.setCandidateupdate(
        toActionCandidateBasicInfo(this.candidateUpdate)
      );
    }
    return pbActionCore;
  }

  public bytestream(): Uint8Array {
    return this.core().serializeBinary();
  }

  public static deserialize(bytes: Uint8Array): Envelop {
    const pbActionCore = actionPb.ActionCore.deserializeBinary(bytes);
    const envelop = new Envelop(
      pbActionCore.getVersion(),
      String(pbActionCore.getNonce()),
      String(pbActionCore.getGaslimit()),
      pbActionCore.getGasprice()
    );
    envelop.transfer = GetActionsRequest.fromTransfer(
      pbActionCore.getTransfer()
    );
    envelop.execution = GetActionsRequest.fromExecution(
      pbActionCore.getExecution()
    );
    envelop.claimFromRewardingFund = GetActionsRequest.fromClaimFromRewardingFund(
      pbActionCore.getClaimfromrewardingfund()
    );
    envelop.stakeCreate = GetActionsRequest.fromStakeCreate(
      pbActionCore.getStakecreate()
    );
    envelop.stakeUnstake = GetActionsRequest.fromStakeReclaim(
      pbActionCore.getStakeunstake()
    );
    envelop.stakeWithdraw = GetActionsRequest.fromStakeReclaim(
      pbActionCore.getStakewithdraw()
    );
    envelop.stakeAddDeposit = GetActionsRequest.fromStakeAddDeposit(
      pbActionCore.getStakeadddeposit()
    );
    envelop.stakeRestake = GetActionsRequest.fromStakeRestake(
      pbActionCore.getStakerestake()
    );
    envelop.stakeChangeCandidate = GetActionsRequest.fromStakeChangeCandidate(
      pbActionCore.getStakechangecandidate()
    );
    envelop.stakeTransferOwnership = GetActionsRequest.fromStakeTransferOwnership(
      pbActionCore.getStaketransferownership()
    );
    envelop.candidateRegister = GetActionsRequest.fromCandidateRegister(
      pbActionCore.getCandidateregister()
    );
    envelop.candidateUpdate = GetActionsRequest.fromCandidateUpdate(
      pbActionCore.getCandidateupdate()
    );
    // TODO(tian): add more fields
    return envelop;
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

  public action(): IAction {
    const gasLimit = this.act.gasLimit || "0";
    const gasPrice = this.act.gasPrice || "0";

    return {
      core: {
        version: this.act.version,
        nonce: this.act.nonce,
        gasLimit: gasLimit,
        gasPrice: gasPrice,
        transfer: this.act.transfer,
        execution: this.act.execution,
        startSubChain: this.act.startSubChain,
        stopSubChain: this.act.stopSubChain,
        putBlock: this.act.putBlock,
        createDeposit: this.act.createDeposit,
        settleDeposit: this.act.settleDeposit,
        createPlumChain: this.act.createPlumChain,
        terminatePlumChain: this.act.terminatePlumChain,
        plumPutBlock: this.act.plumPutBlock,
        plumCreateDeposit: this.act.plumCreateDeposit,
        plumStartExit: this.act.plumStartExit,
        plumChallengeExit: this.act.plumChallengeExit,
        plumResponseChallengeExit: this.act.plumResponseChallengeExit,
        plumFinalizeExit: this.act.plumFinalizeExit,
        plumSettleDeposit: this.act.plumSettleDeposit,
        plumTransfer: this.act.plumTransfer,
        depositToRewardingFund: this.act.depositToRewardingFund,
        claimFromRewardingFund: this.act.claimFromRewardingFund,
        grantReward: this.act.grantReward,
        stakeCreate: this.act.stakeCreate,
        stakeUnstake: this.act.stakeUnstake,
        stakeWithdraw: this.act.stakeWithdraw,
        stakeAddDeposit: this.act.stakeAddDeposit,
        stakeRestake: this.act.stakeRestake,
        stakeChangeCandidate: this.act.stakeChangeCandidate,
        stakeTransferOwnership: this.act.stakeTransferOwnership,
        candidateRegister: this.act.candidateRegister,
        candidateUpdate: this.act.candidateUpdate,
        putPollResult: this.act.putPollResult
      },
      senderPubKey: this.senderPubKey,
      signature: this.signature
    };
  }

  public static sign(
    privateKey: string,
    publicKey: string,
    act: Envelop
  ): SealedEnvelop {
    const h = hash256b(act.bytestream());
    const sign = Buffer.from(
      makeSigner(0)(h.toString("hex"), privateKey),
      "hex"
    );
    return new SealedEnvelop(act, Buffer.from(publicKey, "hex"), sign);
  }
}
