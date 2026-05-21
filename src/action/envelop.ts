import actionPb from "../../protogen/proto/types/action_pb";
import { makeSigner } from "../crypto/crypto";
import { hash256b } from "../crypto/hash";
import {
  GetActionsRequest,
  IAccessTuple,
  IAction,
  IActionEncoding,
  IBlobTxData,
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
  ISetCodeAuthorization,
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
import {
  extractEthTxSig,
  IAccessTuple as ITypedAccessTuple,
  IBlobData as ITypedBlobData,
  ISetCodeAuthorization as ITypedSetCodeAuthorization,
  ITypedTxFields,
  signTypedTx,
  txContainerHash,
  TX_TYPE_LEGACY
} from "./typed-tx";

export class Envelop {
  public version: number;
  public nonce: string;
  public gasLimit?: string | undefined;
  public gasPrice?: string | undefined;
  public chainID: number;

  // Eth typed-tx fields. Set txType != 0 (or call setTxType) to route through
  // the TX_CONTAINER signing path instead of the iotex protobuf path.
  public txType?: number | undefined;
  public gasTipCap?: string | undefined;
  public gasFeeCap?: string | undefined;
  public accessList?: IAccessTuple[] | undefined;
  public blobTxData?: IBlobTxData | undefined;
  public setCodeAuthList?: ISetCodeAuthorization[] | undefined;

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
    chainID: number,
    gasLimit?: string,
    gasPrice?: string
  ) {
    this.version = version;
    this.nonce = nonce;
    this.gasLimit = gasLimit;
    this.gasPrice = gasPrice;
    this.chainID = chainID;
  }

  // tslint:disable:max-func-body-length
  // tslint:disable-next-line:cyclomatic-complexity
  public core(): actionPb.ActionCore {
    const gasLimit = this.gasLimit || "0";
    const gasPrice = this.gasPrice || "0";

    const pbActionCore = new actionPb.ActionCore();
    pbActionCore.setVersion(this.version);
    pbActionCore.setNonce(Number(this.nonce));
    pbActionCore.setGaslimit(Number(gasLimit));
    pbActionCore.setGasprice(gasPrice);
    pbActionCore.setChainid(this.chainID);

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
      pbActionCore.getChainid(),
      String(pbActionCore.getGaslimit()),
      pbActionCore.getGasprice()
    );
    envelop.transfer = GetActionsRequest.fromTransfer(
      pbActionCore.getTransfer()
    );
    envelop.execution = GetActionsRequest.fromExecution(
      pbActionCore.getExecution()
    );
    envelop.depositToRewardingFund = GetActionsRequest.fromDepositToRewardingFund(
      pbActionCore.getDeposittorewardingfund()
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

function toTypedAccessList(
  list: IAccessTuple[] | undefined
): ITypedAccessTuple[] | undefined {
  if (!list || list.length === 0) {
    return undefined;
  }
  return list.map(at => ({
    address: at.address,
    storageKeys: at.storageKeys
  }));
}

function toTypedBlobData(
  d: IBlobTxData | undefined
): ITypedBlobData | undefined {
  if (!d) {
    return undefined;
  }
  const hashes = d.blobHashes.map(h => {
    const buf = Buffer.from(h);
    return `0x${buf.toString("hex")}`;
  });
  const out: ITypedBlobData = {
    blobFeeCap: d.blobFeeCap,
    blobHashes: hashes
  };
  if (d.blobTxSidecar) {
    out.sidecar = {
      blobs: d.blobTxSidecar.blobs.map(b => Buffer.from(b)),
      commitments: d.blobTxSidecar.commitments.map(c => Buffer.from(c)),
      proofs: d.blobTxSidecar.proofs.map(p => Buffer.from(p))
    };
  }
  return out;
}

function toTypedAuthList(
  list: ISetCodeAuthorization[] | undefined
): ITypedSetCodeAuthorization[] | undefined {
  if (!list || list.length === 0) {
    return undefined;
  }
  return list.map(a => ({
    chainID: a.chainID,
    address: `0x${Buffer.from(a.address).toString("hex")}`,
    nonce: a.nonce,
    v: Number(a.v),
    r: `0x${Buffer.from(a.r).toString("hex")}`,
    s: `0x${Buffer.from(a.s).toString("hex")}`
  }));
}

export class SealedEnvelop {
  public act: Envelop;
  public senderPubKey: Buffer;
  public signature: Buffer;
  // When set, the action is encoded as TX_CONTAINER (raw eth tx bytes).
  public rawEthTx?: Buffer;
  public ethTxHash?: Buffer;
  public encoding?: IActionEncoding;

  constructor(act: Envelop, senderPubKey: Buffer, signature: Buffer) {
    this.act = act;
    this.senderPubKey = senderPubKey;
    this.signature = signature;
  }

  public bytestream(): Uint8Array {
    const pbActionCore = this.act.core();
    if (this.rawEthTx) {
      const tc = new actionPb.TxContainer();
      tc.setRaw(this.rawEthTx);
      pbActionCore.setTxcontainer(tc);
    }
    const pbAction = new actionPb.Action();
    pbAction.setCore(pbActionCore);
    pbAction.setSenderpubkey(this.senderPubKey);
    pbAction.setSignature(this.signature);
    if (this.encoding !== undefined) {
      pbAction.setEncoding(this.encoding as number);
    }
    return pbAction.serializeBinary();
  }

  public hash(): string {
    if (this.ethTxHash) {
      // TX_CONTAINER: the action hash is keccak256 of the raw signed eth tx.
      return this.ethTxHash.toString("hex");
    }
    return Buffer.from(hash256b(this.bytestream())).toString("hex");
  }

  public action(): IAction {
    const gasLimit = this.act.gasLimit || "0";
    const gasPrice = this.act.gasPrice || "0";

    const out: IAction = {
      core: {
        version: this.act.version,
        nonce: this.act.nonce,
        gasLimit: gasLimit,
        gasPrice: gasPrice,
        chainID: this.act.chainID,
        txType: this.act.txType,
        gasTipCap: this.act.gasTipCap,
        gasFeeCap: this.act.gasFeeCap,
        accessList: this.act.accessList,
        blobTxData: this.act.blobTxData,
        setCodeAuthList: this.act.setCodeAuthList,
        transfer: this.act.transfer,
        execution: this.act.execution,
        txContainer: this.rawEthTx ? { raw: this.rawEthTx } : undefined,
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
    if (this.encoding !== undefined) {
      out.encoding = this.encoding;
    }
    return out;
  }

  public static sign(
    privateKey: string,
    publicKey: string,
    act: Envelop
  ): SealedEnvelop {
    if (act.txType !== undefined && act.txType !== TX_TYPE_LEGACY) {
      return SealedEnvelop.signTxContainer(privateKey, publicKey, act);
    }
    const h = hash256b(act.bytestream());
    const sign = Buffer.from(
      makeSigner(0)(h.toString("hex"), privateKey),
      "hex"
    );
    return new SealedEnvelop(act, Buffer.from(publicKey, "hex"), sign);
  }

  // signTxContainer builds an Ethereum typed tx out of the envelop's typed
  // fields plus its transfer/execution payload, signs it, and wraps the raw
  // bytes in a TX_CONTAINER. The Action.signature is set to the 65-byte
  // [R||S||V] the node extracts from the raw tx so the two match.
  public static signTxContainer(
    privateKey: string,
    publicKey: string,
    act: Envelop
  ): SealedEnvelop {
    if (!act.chainID) {
      throw new Error("typed eth tx requires chainID");
    }
    const txType = act.txType !== undefined ? act.txType : TX_TYPE_LEGACY;

    let to: string | undefined;
    let value = "0";
    let data: Buffer | undefined;
    if (act.transfer) {
      to = act.transfer.recipient;
      value = act.transfer.amount;
      if (act.transfer.payload) {
        data = Buffer.from(act.transfer.payload as Uint8Array);
      }
    } else if (act.execution) {
      to = act.execution.contract || undefined;
      value = act.execution.amount;
      if (act.execution.data) {
        data = Buffer.from(act.execution.data as Uint8Array);
      }
    } else {
      throw new Error(
        "typed eth tx requires transfer or execution action payload"
      );
    }

    const fields: ITypedTxFields = {
      txType,
      chainID: act.chainID,
      nonce: act.nonce,
      gasLimit: act.gasLimit || "0",
      gasPrice: act.gasPrice,
      gasTipCap: act.gasTipCap,
      gasFeeCap: act.gasFeeCap,
      to,
      value,
      data,
      accessList: toTypedAccessList(act.accessList),
      blobTxData: toTypedBlobData(act.blobTxData),
      setCodeAuthList: toTypedAuthList(act.setCodeAuthList)
    };

    const signedTx = signTypedTx(fields, privateKey);
    const raw = Buffer.from(signedTx.serialized.replace(/^0x/, ""), "hex");
    const actionSig = extractEthTxSig(signedTx);
    const hash = txContainerHash(signedTx);

    const selp = new SealedEnvelop(
      act,
      Buffer.from(publicKey, "hex"),
      actionSig
    );
    selp.rawEthTx = raw;
    selp.ethTxHash = hash;
    selp.encoding = IActionEncoding.TX_CONTAINER;
    return selp;
  }
}
