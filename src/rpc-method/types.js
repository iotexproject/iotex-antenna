// @flow
import apiPb from '../proto/api_pb';
import actionPb from '../proto/action_pb';

/** Properties of a Timestamp. */
export interface ITimestamp {
  /** Timestamp seconds */
  seconds?: number | null,

  /** Timestamp nanos */
  nanos?: number | null,
}

// interface for get account
/** Properties of a GetAccountRequest. */
export interface IGetAccountRequest {
  /** GetAccountRequest address */
  address?: string | null
}

/** Properties of an AccountMeta. */
export interface IAccountMeta {
  /** AccountMeta address */
  address?: string | null,

  /** AccountMeta balance */
  balance?: string | null,

  /** AccountMeta nonce */
  nonce?: number | null,

  /** AccountMeta pendingNonce */
  pendingNonce?: number | null,
}

/** Properties of a GetAccountResponse. */
export interface IGetAccountResponse {
  /** GetAccountResponse accountMeta */
  accountMeta?: IAccountMeta | null
}

export class GetAccountRequest {
  static to(req: IGetAccountRequest): any {
    const pbReq = new apiPb.GetAccountRequest();
    pbReq.setAddress(req.address);
    return pbReq;
  }

  static from(pbRes: any): IGetAccountResponse {
    const meta = pbRes.getAccountmeta();
    const res = {
      accountMeta: meta,
    };
    if (meta) {
      res.accountMeta = {
        address: meta.getAddress(),
        balance: meta.getBalance(),
        nonce: meta.getNonce(),
        pendingNonce: meta.getPendingnonce(),
      };
    }
    return res;
  }
}

// interface for get chain meta
export interface IEpochData {
  num?: number | null,
  height?: number | null,
  beaconChainHeight?: number | null,
}

export interface IChainMeta {
  height?: string | null,
  supply?: string | null,
  numActions?: string | null,
  tps?: string | null,
  epoch?: IEpochData | null,
}

export interface IGetChainMetaRequest {
}

export interface IGetChainMetaResponse {
  chainMeta?: IChainMeta | null
}

export class GetChainMetaRequest {
  static to(req: IGetChainMetaRequest): any {
    return new apiPb.GetChainMetaRequest();
  }

  static from(pbRes: any): IGetChainMetaResponse {
    const meta = pbRes.getChainmeta();
    const res = {
      chainMeta: meta,
    };
    if (meta) {
      const epochData = meta.Epoch;
      res.chainMeta = {
        height: meta.getHeight(),
        supply: meta.getSupply(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        epoch: epochData,
      };
    }
    return res;
  }
}

// interface for get block metas
/** Properties of a GetBlockMetasByIndexRequest. */
export interface IGetBlockMetasByIndexRequest {
  /** GetBlockMetasByIndexRequest start*/
  start?: number | null,

  /** GetBlockMetasByIndexRequest count*/
  count?: number | null,
}

/** Properties of a GetBlockMetasByHashRequest. */
export interface IGetBlockMetasByHashRequest {
  /** GetBlockMetasByHashRequest address */
  blkHash?: string | null
}

/** Properties of a GetBlockMetasRequest. */
export interface IGetBlockMetasRequest {
  /** GetBlockMetasRequest byIndex */
  byIndex?: IGetBlockMetasByIndexRequest | null,

  /** GetBlockMetasRequest byHash */
  byHash?: IGetBlockMetasByHashRequest | null,
}

/** Properties of an blockMeta. */
export interface IBlockMeta {
  /** BlockMeta hash */
  hash?: string | null,

  /** BlockMeta height */
  height?: number | null,

  /** BlockMeta timestamp */
  timestamp?: number | null,

  /** BlockMeta numActions */
  numActions?: number | null,

  /** BlockMeta producerAddress */
  producerAddress?: string | null,

  /** BlockMeta transferAmount */
  transferAmount?: string | null,

  /** BlockMeta txRoot */
  txRoot?: string | null,

  /** BlockMeta receiptRoot */
  receiptRoot?: string | null,

  /** BlockMeta deltaStateDigest */
  deltaStateDigest?: string | null,
}

/** Properties of a GetBlockMetasResponse. */
export interface IGetBlockMetasResponse {
  /** GetBlockMetasResponse blockMetas */
  blkMetas?: IBlockMeta[] | null,
}

export class GetBlockMetasRequest {
  static to(req: IGetBlockMetasRequest): any {
    const pbReq = new apiPb.GetBlockMetasRequest();
    if (req.byIndex) {
      const pbReqByIndex = new apiPb.GetBlockMetasByIndexRequest();
      if (req.byIndex.start) {
        pbReqByIndex.setStart(req.byIndex.start);
      }
      if (req.byIndex.count) {
        pbReqByIndex.setCount(req.byIndex.count);
      }
      pbReq.setByindex(pbReqByIndex);
    } else if (req.byHash) {
      const pbReqByHash = new apiPb.GetBlockMetaByHashRequest();
      pbReqByHash.setBlkhash(req.byHash.blkHash);
      pbReq.setByhash(pbReqByHash);
    }
    return pbReq;
  }

  static from(pbRes: any): IGetBlockMetasResponse {
    const metas = pbRes.getBlkmetasList();
    const res = {
      blkMetas: metas,
    };
    if (metas) {
      const parsedMetas = [];
      for (let i = 0; i < metas.length; i++) {
        parsedMetas[i] = {
          hash: metas[i].getHash(),
          height: metas[i].getHeight(),
          timestamp: metas[i].getTimestamp(),
          numActions: metas[i].getNumactions(),
          producerAddress: metas[i].getProduceraddress(),
          transferAmount: metas[i].getTransferamount(),
          txRoot: metas[i].getTxroot(),
          receiptRoot: metas[i].getReceiptroot(),
          deltaStateDigest: metas[i].getDeltastatedigest(),
        };
      }
      res.blkMetas = parsedMetas;
    }
    return res;
  }
}

// interface for get actions
/** Properties of a GetActionsByIndexRequest. */
export interface IGetActionsByIndexRequest {
  /** GetActionsByIndexRequest start */
  start?: number | null,

  /** GetActionsByIndexRequest count */
  count?: number | null,
}

/** Properties of a GetActionsByHashRequest. */
export interface IGetActionsByHashRequest {
  /** GetActionsByHashRequest actionHash */
  actionHash?: string | null,

  /** GetActionsByHashRequest checkingPending */
  checkingPending?: boolean | null,
}

/** Properties of a GetActionsByAddressRequest. */
export interface IGetActionsByAddressRequest {
  /** GetActionsByAddressRequest address */
  address?: string | null,

  /** GetActionsByAddressRequest start */
  start?: number | null,

  /** GetActionsByAddressRequest count */
  count?: number | null,
}

/** Properties of a GetUnconfirmedActionsByAddressRequest. */
export interface IGetUnconfirmedActionsByAddressRequest {
  /** GetUnconfirmedActionsByAddressRequest address */
  address?: string | null,

  /** GetUnconfirmedActionsByAddressRequest start */
  start?: number | null,

  /** GetUnconfirmedActionsByAddressRequest count */
  count?: number | null,
}

/** Properties of a GetActionsByBlockRequest. */
export interface IGetActionsByBlockRequest {
  /** GetActionsByBlockRequest blkHash */
  blkHash?: string | null,

  /** GetActionsByBlockRequest start */
  start?: number | null,

  /** GetActionsByBlockRequest count */
  count?: number | null,
}

/** Properties of a GetActionsRequest. */
export interface IGetActionsRequest {
  /** GetActionsRequest byIndex */
  byIndex?: IGetActionsByIndexRequest | null,

  /** GetActionsRequest byHash */
  byHash?: IGetActionsByHashRequest | null,

  /** GetActionsRequest byAddr */
  byAddr?: IGetActionsByAddressRequest | null,

  /** GetUnconfirmedActionsByAddressRequest unconfirmedByAddr */
  unconfirmedByAddr?: IGetUnconfirmedActionsByAddressRequest | null,

  /** GetActionsByBlockRequest byBlk */
  byBlk?: IGetActionsByBlockRequest | null,
}

/** Properties of a Transfer. */
export interface ITransfer {
  /** Transfer amount */
  amount?: Uint8Array | null,

  /** Transfer recipient */
  recipient?: string | null,

  /** Transfer payload */
  payload?: Uint8Array | null,
}

/** Properties of a Vote. */
export interface IVote {
  /** Vote timestamp */
  timestamp?: ITimestamp | null,

  /** Vote voteeAddress */
  voteeAddress?: string | null,
}

/** Properties of a Execution. */
export interface IExecution {
  /** Execution amount */
  amount?: Uint8Array | null,

  /** Execution contract */
  contract?: string | null,

  /** Execution data */
  data?: Uint8Array | null,
}

/** Properties of a StartSubChain. */
export interface IStartSubChain {
  /** StartSubChain chainID */
  chainID?: number | null,

  /** StartSubChain securityDeposit */
  securityDeposit?: Uint8Array | null,

  /** StartSubChain operationDeposit */
  operationDeposit?: Uint8Array | null,

  /** StartSubChain startHeight */
  startHeight?: number | null,

  /** StartSubChain parentHeightOffset */
  parentHeightOffset?: number | null,
}

/** Properties of a StopSubChain. */
export interface IStopSubChain {
  /** StopSubChain chainID */
  chainID?: number | null,

  /** StopSubChain stopHeight */
  stopHeight?: number | null,

  /** StopSubChain subChainAddress */
  subChainAddress?: string | null,
}

/** Properties of a MerkleRoot. */
export interface IMerkleRoot {
  /** MerkleRoot name */
  name?: string | null,

  /** MerkleRoot value */
  value?: Uint8Array | null,
}

/** Properties of a PutBlock. */
export interface IPutBlock {
  /** PutBlock subChainAddress */
  subChainAddress?: string | null,

  /** PutBlock height */
  height?: number | null,

  /** PutBlock roots */
  roots?: IMerkleRoot[] | null,
}

/** Properties of a CreateDeposit. */
export interface ICreateDeposit {
  /** CreateDeposit chainID */
  chainID?: number | null,

  /** CreateDeposit amount */
  amount?: Uint8Array | null,

  /** CreateDeposit receipt */
  recipient?: string | null,
}

/** Properties of a SettleDeposit. */
export interface ISettleDeposit {
  /** SettleDeposit amount */
  amount?: Uint8Array | null,

  /** SettleDeposit recipient */
  recipient?: string | null,

  /** SettleDeposit index */
  index?: number | null,
}

/** Properties of a CreatePlumChain. */
export interface ICreatePlumChain {
}

/** Properties of a TerminatePlumChain. */
export interface ITerminatePlumChain {
  /** TerminatePlumChain subChainAddress */
  subChainAddress?: string | null,
}

/** Properties of a PlumPutBlock. */
export interface IPlumPutBlock {
  /** PlumPutBlock subChainAddress */
  subChainAddress?: string | null,

  /** PlumPutBlock height */
  height?: number | null,

  /** PlumPutBlock height */
  roots?: Map<string, Uint8Array> | null,
}

/** Properties of a PlumCreateDeposit. */
export interface IPlumCreateDeposit {
  /** PlumCreateDeposit subChainAddress */
  subChainAddress?: string | null,

  /** PlumCreateDeposit amount */
  amount?: Uint8Array | null,

  /** PlumCreateDeposit recipient */
  recipient?: string | null,
}

/** Properties of a PlumStartExit. */
export interface IPlumStartExit {
  /** PlumStartExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumStartExit previousTransfer */
  previousTransfer?: Uint8Array | null,

  /** PlumStartExit previousTransferBlockProof */
  previousTransferBlockProof?: Uint8Array | null,

  /** PlumStartExit previousTransferBlockHeight */
  previousTransferBlockHeight?: number | null,

  /** PlumStartExit exitTransfer */
  exitTransfer?: Uint8Array | null,

  /** PlumStartExit exitTransferBlockProof */
  exitTransferBlockProof?: Uint8Array | null,

  /** PlumStartExit exitTransferBlockHeight */
  exitTransferBlockHeight?: number | null,
}

/** Properties of a PlumChallengeExit. */
export interface IPlumChallengeExit {
  /** PlumChallengeExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumChallengeExit chainID */
  coinID?: number | null,

  /** PlumChallengeExit challengeTransfer */
  challengeTransfer?: Uint8Array | null,

  /** PlumChallengeExit challengeTransferBlockProof */
  challengeTransferBlockProof?: Uint8Array | null,

  /** PlumChallengeExit challengeTransferBlockHeight */
  challengeTransferBlockHeight?: number | null,
}

/** Properties of a PlumResponseChallengeExit. */
export interface IPlumResponseChallengeExit {
  /** PlumResponseChallengeExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumResponseChallengeExit coinID */
  coinID?: number | null,

  /** PlumResponseChallengeExit challengeTransfer */
  challengeTransfer?: Uint8Array | null,

  /** PlumResponseChallengeExit responseTransfer */
  responseTransfer?: Uint8Array | null,

  /** PlumResponseChallengeExit responseTransferBlockProof */
  responseTransferBlockProof?: Uint8Array | null,

  /** PlumResponseChallengeExit previousTransferBlockHeight */
  previousTransferBlockHeight?: number | null,
}

/** Properties of a PlumFinalizeExit. */
export interface IPlumFinalizeExit {
  /** PlumFinalizeExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumFinalizeExit coinID */
  coinID?: number | null,
}

// plum sub chain APIs
/** Properties of a PlumSettleDeposit. */
export interface IPlumSettleDeposit {
  /** PlumSettleDeposit coinID */
  coinID?: number | null,
}

/** Properties of a PlumTransfer. */
export interface IPlumTransfer {
  /** PlumTransfer coinID */
  coinID?: number | null,

  /** PlumTransfer denomination */
  denomination?: Uint8Array | null,

  /** PlumTransfer owner */
  owner?: string | null,

  /** PlumTransfer recipient */
  recipient?: string | null,
}

// //////////////////////////////////////////////////////////////////////////////////////////////////
// BELOW ARE DEFINITIONS FOR BLOCK PRODUCER PROTOCOL
// //////////////////////////////////////////////////////////////////////////////////////////////////

/** Properties of a DepositToRewardingFund. */
export interface IDepositToRewardingFund {
  /** DepositToRewardingFund amount */
  amount?: Uint8Array | null,

  /** DepositToRewardingFund data */
  data?: Uint8Array | null,
}

/** Properties of a ClaimFromRewardingFund. */
export interface IClaimFromRewardingFund {
  /** ClaimFromRewardingFund amount */
  amount?: Uint8Array | null,

  /** ClaimFromRewardingFund data */
  data?: Uint8Array | null,
}

/* export RewardType {
  BlockReward: 0,
  EpochReward: 1,
}*/

/** Properties of a SetReward. */
export interface ISetReward {
  /** SetReward amount */
  amount?: Uint8Array | null,

  /** SetReward data */
  data?: Uint8Array | null,

  /** SetReward type */
  type?: number | null,
}

/** Properties of a GrantReward. */
export interface IGrantReward {
  /** GrantReward type */
  type?: number | null,
}

/** Properties of an ActionCore. */
export interface IActionCore {
  /** ActionCore version */
  version?: number | null,

  /** ActionCore nonce */
  nonce?: number | null,

  /** ActionCore gasLimit */
  gasLimit?: number | null,

  /** ActionCore gasPrice */
  gasPrice?: Uint8Array | null,

  // Action detail fields
  /** ActionCore transfer */
  transfer?: ITransfer | null,
  /** ActionCore vote */
  vote?: IVote | null,
  /** ActionCore execution */
  execution?: IExecution | null,

  // FedChain
  /** ActionCore startSubChain */
  startSubChain?: IStartSubChain | null,
  /** ActionCore stopSubChain */
  stopSubChain?: IStopSubChain | null,
  /** ActionCore putBlock */
  putBlock?: IPutBlock | null,
  /** ActionCore createDeposit */
  createDeposit?: ICreateDeposit | null,
  /** ActionCore settleDeposit */
  settleDeposit?: ISettleDeposit | null,

// PlumChain
  /** ActionCore createPlumChain */
  createPlumChain?: ICreatePlumChain | null,
  /** ActionCore terminatePlumChain */
  terminatePlumChain?: ITerminatePlumChain | null,
  /** ActionCore plumPutBlock */
  plumPutBlock?: IPlumPutBlock | null,
  /** ActionCore plumCreateDeposit */
  plumCreateDeposit?: IPlumCreateDeposit | null,
  /** ActionCore plumStartExit */
  plumStartExit?: IPlumStartExit | null,
  /** ActionCore plumChallengeExit */
  plumChallengeExit?: IPlumChallengeExit | null,
  /** ActionCore plumResponseChallengeExit */
  plumResponseChallengeExit?: IPlumResponseChallengeExit | null,
  /** ActionCore plumFinalizeExit */
  plumFinalizeExit?: IPlumFinalizeExit | null,
  /** ActionCore plumSettleDeposit */
  plumSettleDeposit?: IPlumSettleDeposit | null,
  /** ActionCore plumTransfer */
  plumTransfer?: IPlumTransfer | null,

  // Rewarding protocol actions
  /** ActionCore depositToRewardingFund */
  depositToRewardingFund?: IDepositToRewardingFund | null,
  /** ActionCore claimFromRewardingFund */
  claimFromRewardingFund?: IClaimFromRewardingFund | null,
  /** ActionCore setReward */
  setReward?: ISetReward | null,
  /** ActionCore grantReward */
  grantReward?: IGrantReward | null,
}

/** Properties of an Action. */
export interface IAction {
  /** Action core */
  core?: IActionCore | null,

  /** Action senderPubkey */
  senderPubKey?: Uint8Array | null,

  /** Action signature */
  signature?: Uint8Array | null,
}

export function toActionTransfer(req?: ITransfer): any {
  let pbTransfer = req;
  if (req) {
    pbTransfer = new actionPb.Transfer();
    pbTransfer.setAmount(req.amount);
    pbTransfer.setRecipient(req.recipient);
    pbTransfer.setPayload(req.payload);
  }
  return pbTransfer;
}

export function toActionVote(req?: IVote): any {
  let pbVote = req;
  if (req) {
    pbVote = new actionPb.Vote();
    pbVote.setTimestamp(req.timestamp);
    pbVote.setVoteeaddress(req.voteeAddress);
  }
  return pbVote;
}

export function toActionExecution(req?: IExecution): any {
  let pbExecution = req;
  if (req) {
    pbExecution = new actionPb.Execution();
    pbExecution.setAmount(req.amount);
    pbExecution.setContract(req.contract);
    pbExecution.setData(req.data);
  }
  return pbExecution;
}

export function toActionStartSubChain(req?: IStartSubChain): any {
  let pbStartSubChain = req;
  if (req) {
    pbStartSubChain = new actionPb.StartSubChain();
    pbStartSubChain.setChainid(req.chainID);
    pbStartSubChain.setSecuritydeposit(req.securityDeposit);
    pbStartSubChain.setOperationdeposit(req.operationDeposit);
    pbStartSubChain.setStartheight(req.startHeight);
    pbStartSubChain.setParentheightoffset(req.parentHeightOffset);
  }
  return pbStartSubChain;
}

export function toActionStopSubChain(req?: IStopSubChain): any {
  let pbStopSubChain = req;
  if (req) {
    pbStopSubChain = new actionPb.StopSubChain();
    pbStopSubChain.setChainid(req.chainID);
    pbStopSubChain.setStopheight(req.stopHeight);
    pbStopSubChain.setSubchainaddress(req.subChainAddress);
  }
  return pbStopSubChain;
}

export function toActionPutBlock(req?: IPutBlock): any {
  let pbPutBlock = req;
  if (req) {
    const roots = req.roots;
    if (req.roots && roots) {
      for (let i = 0; i < req.roots.length; i++) {
        const rootItem = req.roots && req.roots[i];
        const mkroot = new actionPb.MerkleRoot();
        mkroot.setName(rootItem.name);
        mkroot.setValue(rootItem.value);
        roots[i] = mkroot;
      }
    }
    pbPutBlock = new actionPb.PutBlock();
    pbPutBlock.setSubchainaddress(req.subChainAddress);
    pbPutBlock.setHeight(req.height);
    pbPutBlock.setRoots(roots);
  }
  return pbPutBlock;
}

export function toActionCreateDeposit(req?: ICreateDeposit): any {
  let pbCreateDeposit = req;
  if (req) {
    pbCreateDeposit = new actionPb.CreateDeposit();
    pbCreateDeposit.setChainid(req.chainID);
    pbCreateDeposit.setAmount(req.amount);
    pbCreateDeposit.setRecipient(req.recipient);
  }
  return pbCreateDeposit;
}

export function toActionSettleDeposit(req?: ISettleDeposit): any {
  let pbSettleDeposit = req;
  if (req) {
    pbSettleDeposit = new actionPb.SettleDeposit();
    pbSettleDeposit.setAmount(req.amount);
    pbSettleDeposit.setRecipient(req.recipient);
    pbSettleDeposit.setIndex(req.index);
  }
  return pbSettleDeposit;
}

export function toActionCreatePlumChain(req?: ICreatePlumChain): any {
  let pbCreatePlumChain = req;
  if (req) {
    pbCreatePlumChain = new actionPb.CreatePlumChain();
  }
  return pbCreatePlumChain;
}

export function toActionTerminatePlumChain(req?: ITerminatePlumChain): any {
  let pbTerminatePlumChain = req;
  if (req) {
    pbTerminatePlumChain = new actionPb.TerminatePlumChain();
    pbTerminatePlumChain.setSubchainaddress(req.subChainAddress);
  }
  return pbTerminatePlumChain;
}

export function toActionPlumPutBlock(req?: IPlumPutBlock): any {
  let pbPlumPutBlock = req;
  if (req) {
    pbPlumPutBlock = new actionPb.PlumPutBlock();
    pbPlumPutBlock.setSubchainaddress(req.subChainAddress);
    pbPlumPutBlock.setHeight(req.height);
    pbPlumPutBlock.setRoots(req.roots);
  }
  return pbPlumPutBlock;
}

export function toActionPlumCreateDeposit(req?: IPlumCreateDeposit): any {
  let pbPlumCreateDeposit = req;
  if (req) {
    pbPlumCreateDeposit = new actionPb.PlumCreateDeposit();
    pbPlumCreateDeposit.setSubchainaddress(req.subChainAddress);
    pbPlumCreateDeposit.setAmount(req.amount);
    pbPlumCreateDeposit.setRecipient(req.recipient);
  }
  return pbPlumCreateDeposit;
}

export function toActionPlumStartExit(req?: IPlumStartExit): any {
  let pbPlumStartExit = req;
  if (req) {
    pbPlumStartExit = new actionPb.PlumStartExit();
    pbPlumStartExit.setSubchainaddress(req.subChainAddress);
    pbPlumStartExit.setPrevioustransfer(req.previousTransfer);
    pbPlumStartExit.setPrevioustransferblockproof(req.previousTransferBlockProof);
    pbPlumStartExit.setPrevioustransferblockheight(req.previousTransferBlockHeight);
    pbPlumStartExit.setExittransfer(req.exitTransfer);
    pbPlumStartExit.setExittransferblockproof(req.exitTransferBlockProof);
    pbPlumStartExit.setExittransferblockheight(req.exitTransferBlockHeight);
  }
  return pbPlumStartExit;
}

export function toActionPlumChallengeExit(req?: IPlumChallengeExit): any {
  let pbPlumChallengeExit = req;
  if (req) {
    pbPlumChallengeExit = new actionPb.PlumChallengeExit();
    pbPlumChallengeExit.setSubchainaddress(req.subChainAddress);
    pbPlumChallengeExit.setCoinid(req.coinID);
    pbPlumChallengeExit.setChallengetransfer(req.challengeTransfer);
    pbPlumChallengeExit.setChallengetransferblockproof(req.challengeTransferBlockProof);
    pbPlumChallengeExit.setChallengetransferblockheight(req.challengeTransferBlockHeight);
  }
  return pbPlumChallengeExit;
}

export function toActionPlumResponseChallengeExit(req?: IPlumResponseChallengeExit): any {
  let pbPlumResponseChallengeExit = req;
  if (req) {
    pbPlumResponseChallengeExit = new actionPb.PlumResponseChallengeExit();
    pbPlumResponseChallengeExit.setSubchainaddress(req.subChainAddress);
    pbPlumResponseChallengeExit.setCoinid(req.coinID);
    pbPlumResponseChallengeExit.setChallengetransfer(req.challengeTransfer);
    pbPlumResponseChallengeExit.setResponsetransfer(req.responseTransfer);
    pbPlumResponseChallengeExit.setResponsetransferblockproof(req.responseTransferBlockProof);
  }
  return pbPlumResponseChallengeExit;
}

export function toActionPlumFinalizeExit(req?: IPlumFinalizeExit): any {
  let pbPlumFinalizeExit = req;
  if (req) {
    pbPlumFinalizeExit = new actionPb.PlumFinalizeExit();
    pbPlumFinalizeExit.setSubchainaddress(req.subChainAddress);
    pbPlumFinalizeExit.setCoinid(req.coinID);
  }
  return pbPlumFinalizeExit;
}

export function toActionPlumSettleDeposit(req?: IPlumSettleDeposit): any {
  let pbPlumSettleDeposit = req;
  if (req) {
    pbPlumSettleDeposit = new actionPb.PlumSettleDeposit();
    pbPlumSettleDeposit.setCoinid(req.coinID);
  }
  return pbPlumSettleDeposit;
}

export function toActionPlumTransfer(req?: IPlumTransfer): any {
  let pbPlumTransfer = req;
  if (req) {
    pbPlumTransfer = new actionPb.PlumTransfer();
    pbPlumTransfer.setCoinid(req.coinID);
    pbPlumTransfer.setDenomination(req.denomination);
    pbPlumTransfer.setOwner(req.owner);
    pbPlumTransfer.setRecipient(req.recipient);
  }
  return pbPlumTransfer;
}

export function toActionDepositToRewardingFund(req?: IDepositToRewardingFund): any {
  let pbDepositToRewardingFund = req;
  if (req) {
    pbDepositToRewardingFund = new actionPb.DepositToRewardingFund();
    pbDepositToRewardingFund.setAmount(req.amount);
    pbDepositToRewardingFund.setData(req.data);
  }
  return pbDepositToRewardingFund;
}

export function toActionClaimFromRewardingFund(req?: IClaimFromRewardingFund): any {
  let pbClaimFromRewardingFund = req;
  if (req) {
    pbClaimFromRewardingFund = new actionPb.ClaimFromRewardingFund();
    pbClaimFromRewardingFund.setAmount(req.amount);
    pbClaimFromRewardingFund.setData(req.data);
  }
  return pbClaimFromRewardingFund;
}

export function toActionSetReward(req?: ISetReward): any {
  let pbSetReward = req;
  if (req) {
    pbSetReward = new actionPb.SetReward();
    pbSetReward.setAmount(req.amount);
    pbSetReward.setData(req.data);
    pbSetReward.setType(req.type);
  }
  return pbSetReward;
}

export function toActionGrantReward(req?: IGrantReward): any {
  let pbGrantReward = req;
  if (req) {
    pbGrantReward = new actionPb.GrantReward();
    pbGrantReward.setType(req.type);
  }
  return pbGrantReward;
}

export function toAction(req: IAction): any {
  const pbActionCore = new actionPb.ActionCore();

  const core = req && req.core;
  if (core) {
    pbActionCore.setVersion(core.version);
    pbActionCore.setNonce(core.nonce);
    pbActionCore.setGaslimit(core.gasLimit);
    pbActionCore.setGasprice(core.gasPrice);
    pbActionCore.setTransfer(toActionTransfer(core.transfer));
    pbActionCore.setVote(toActionVote(core.vote));
    pbActionCore.setExecution(toActionExecution(core.execution));
    pbActionCore.setStartsubchain(toActionStartSubChain(core.startSubChain));
    pbActionCore.setStopsubchain(toActionStopSubChain(core.stopSubChain));
    pbActionCore.setPutblock(toActionPutBlock(core.putBlock));
    pbActionCore.setCreatedeposit(toActionCreateDeposit(core.createDeposit));
    pbActionCore.setSettledeposit(toActionSettleDeposit(core.settleDeposit));
    pbActionCore.setCreateplumchain(toActionCreatePlumChain(core.createPlumChain));
    pbActionCore.setTerminateplumchain(toActionTerminatePlumChain(core.terminatePlumChain));
    pbActionCore.setPlumputblock(toActionPlumPutBlock(core.plumPutBlock));
    pbActionCore.setPlumcreatedeposit(toActionPlumCreateDeposit(core.plumCreateDeposit));
    pbActionCore.setPlumstartexit(toActionPlumStartExit(core.plumStartExit));
    pbActionCore.setPlumchallengeexit(toActionPlumChallengeExit(core.plumChallengeExit));
    pbActionCore.setPlumresponsechallengeexit(toActionPlumResponseChallengeExit(core.plumResponseChallengeExit));
    pbActionCore.setPlumfinalizeexit(toActionPlumFinalizeExit(core.plumFinalizeExit));
    pbActionCore.setPlumsettledeposit(toActionPlumSettleDeposit(core.plumSettleDeposit));
    pbActionCore.setPlumtransfer(toActionPlumTransfer(core.plumTransfer));
    pbActionCore.setDeposittorewardingfund(toActionDepositToRewardingFund(core.depositToRewardingFund));
    pbActionCore.setClaimfromrewardingfund(toActionClaimFromRewardingFund(core.claimFromRewardingFund));
    pbActionCore.setSetreward(toActionSetReward(core.setReward));
    pbActionCore.setGrantreward(toActionGrantReward(core.grantReward));
  }

  const pbAction = new actionPb.Action();
  pbAction.setCore(pbActionCore);
  // $FlowFixMe
  pbAction.setSenderpubkey(req.senderPubKey);
  // $FlowFixMe
  pbAction.setSignature(req.signature);

  return pbAction;
}

/** Properties of a GetActionsResponse. */
export interface IGetActionsResponse {
  /** GetActionsResponse actions */
  actions?: IAction[] | null
}

export class GetActionsRequest {
  static byAddrTo(byAddr: IGetActionsByAddressRequest): any {
    const pbReqByAddr = new apiPb.GetActionsByAddressRequest();
    if (byAddr.address) {
      pbReqByAddr.setAddress(byAddr.address);
    }
    if (byAddr.start) {
      pbReqByAddr.setStart(byAddr.start);
    }
    if (byAddr.count) {
      pbReqByAddr.setCount(byAddr.count);
    }
    return pbReqByAddr;
  }

  static byBlkTo(byBlk: IGetActionsByBlockRequest): any {
    const pbReqByBlk = new apiPb.GetActionsByBlockRequest();
    if (byBlk.blkHash) {
      pbReqByBlk.setBlkhash(byBlk.blkHash);
    }
    if (byBlk.start) {
      pbReqByBlk.setStart(byBlk.start);
    }
    if (byBlk.count) {
      pbReqByBlk.setCount(byBlk.count);
    }
    return pbReqByBlk;
  }

  static byHashTo(byHash: IGetActionsByHashRequest): any {
    const pbReqByHash = new apiPb.GetActionsByHashRequest();
    if (byHash.actionHash) {
      pbReqByHash.setActionhash(byHash.actionHash);
    }
    if (byHash.checkingPending) {
      pbReqByHash.setCheckingpending(byHash.checkingPending);
    }
    return pbReqByHash;
  }

  static byIndexTo(byIndex: IGetActionsByIndexRequest): any {
    const pbReqByIndex = new apiPb.GetActionsByIndexRequest();
    if (byIndex.start) {
      pbReqByIndex.setStart(byIndex.start);
    }
    if (byIndex.count) {
      pbReqByIndex.setCount(byIndex.count);
    }
    return pbReqByIndex;
  }

  static unconfirmedByAddrTo(unconfirmedByAddr: IGetUnconfirmedActionsByAddressRequest): any {
    const pbReqUnconfirmedByAddr = new apiPb.GetUnconfirmedActionsByAddressRequest();
    if (unconfirmedByAddr.start) {
      pbReqUnconfirmedByAddr.setStart(unconfirmedByAddr.start);
    }
    if (unconfirmedByAddr.count) {
      pbReqUnconfirmedByAddr.setCount(unconfirmedByAddr.count);
    }
    if (unconfirmedByAddr.address) {
      pbReqUnconfirmedByAddr.setAddress(unconfirmedByAddr.address);
    }
    return pbReqUnconfirmedByAddr;
  }

  static to(req: IGetActionsRequest): any {
    const pbReq = new apiPb.GetActionsRequest();
    if (req.byAddr) {
      pbReq.setByaddr(this.byAddrTo(req.byAddr));
    }
    if (req.byBlk) {
      pbReq.setByblk(this.byBlkTo(req.byBlk));
    }
    if (req.byHash) {
      pbReq.setByhash(this.byHashTo(req.byHash));
    }
    if (req.byIndex) {
      pbReq.setByindex(this.byIndexTo(req.byIndex));
    }
    if (req.unconfirmedByAddr) {
      pbReq.setUnconfirmedbyaddr(this.unconfirmedByAddrTo(req.unconfirmedByAddr));
    }
    return pbReq;
  }

  static fromTransfer(pbRes?: any): any {
    let transferData = pbRes;
    if (pbRes) {
      transferData = {
        amount: pbRes.getAmount(),
        recipient: pbRes.getRecipient(),
        payload: pbRes.getPayload(),
      };
    }
    return transferData;
  }

  static fromVote(pbRes: any): any {
    let voteData = pbRes;
    if (voteData) {
      voteData = {
        timestamp: pbRes.getTimestamp(),
        voteeAddress: pbRes.getVoteeaddress(),
      };
    }
    return voteData;
  }

  static fromExecution(pbRes: any): any {
    let executionData = pbRes;
    if (executionData) {
      executionData = {
        amount: pbRes.getAmount(),
        contract: pbRes.getContract(),
        data: pbRes.getData(),
      };
    }
    return executionData;
  }

  static fromStartSubChain(pbRes: any): any {
    let startSubChainData = pbRes;
    if (startSubChainData) {
      startSubChainData = {
        chainID: pbRes.chainID,
        securityDeposit: pbRes.securityDeposit,
        operationDeposit: pbRes.operationDeposit,
        startHeight: pbRes.startHeight,
        parentHeightOffset: pbRes.parentHeightOffset,
      };
    }
    return startSubChainData;
  }

  static fromStopSubChain(pbRes: any): any {
    let stopSubChainData = pbRes;
    if (stopSubChainData) {
      stopSubChainData = {
        chainID: pbRes.chainID,
        stopHeight: pbRes.stopHeight,
        subChainAddress: pbRes.subChainAddress,
      };
    }
    return stopSubChainData;
  }

  static fromPutBlock(pbRes: any): any {
    let putBlockData = pbRes;
    if (putBlockData) {
      const rootsData = pbRes.roots;
      if (rootsData) {
        for (let i = 0; i < pbRes.roots.length; i++) {
          rootsData[i] = {
            name: pbRes.roots[i].name,
            value: pbRes.roots[i].value,
          };
        }
      }
      putBlockData = {
        subChainAddress: pbRes.subChainAddress,
        height: pbRes.height,
        roots: rootsData,
      };
    }
    return putBlockData;
  }

  static fromCreateDeposit(pbRes: any): any {
    let createDepositData = pbRes;
    if (createDepositData) {
      createDepositData = {
        chainID: pbRes.chainID,
        amount: pbRes.amount,
        recipient: pbRes.recipient,
      };
    }
    return createDepositData;
  }

  static fromSettleDeposit(pbRes: any): any {
    let settleDepositData = pbRes;
    if (settleDepositData) {
      settleDepositData = {
        amount: pbRes.amount,
        recipient: pbRes.recipient,
        index: pbRes.index,
      };
    }
    return settleDepositData;
  }

  static fromCreatePlumChain(pbRes: any): any {
    let createPlumChainData = pbRes;
    if (createPlumChainData) {
      createPlumChainData = {};
    }
    return createPlumChainData;
  }

  static fromTerminatePlumChain(pbRes: any): any {
    let terminatePlumChainData = pbRes;
    if (terminatePlumChainData) {
      terminatePlumChainData = {
        subChainAddress: pbRes.subChainAddress,
      };
    }
    return terminatePlumChainData;
  }

  static fromPlumPutBlock(pbRes: any): any {
    let plumPutBlockData = pbRes;
    if (plumPutBlockData) {
      plumPutBlockData = {
        subChainAddress: pbRes.subChainAddress,
        height: pbRes.height,
        roots: pbRes.roots,
      };
    }
    return plumPutBlockData;
  }

  static fromPlumCreateDeposit(pbRes: any): any {
    let plumCreateDepositData = pbRes;
    if (plumCreateDepositData) {
      plumCreateDepositData = {
        subChainAddress: pbRes.subChainAddress,
        amount: pbRes.amount,
        recipient: pbRes.recipient,
      };
    }
    return plumCreateDepositData;
  }

  static fromPlumStartExit(pbRes: any): any {
    let plumStartExitData = pbRes;
    if (plumStartExitData) {
      plumStartExitData = {
        subChainAddress: pbRes.subChainAddress,
        previousTransfer: pbRes.previousTransfer,
        previousTransferBlockProof: pbRes.previousTransferBlockProof,
        previousTransferBlockHeight: pbRes.previousTransferBlockHeight,
        exitTransfer: pbRes.exitTransfer,
        exitTransferBlockProof: pbRes.exitTransferBlockProof,
        exitTransferBlockHeight: pbRes.exitTransferBlockHeight,
      };
    }
    return plumStartExitData;
  }

  static fromPlumChallengeExit(pbRes: any): any {
    let plumChallengeExitData = pbRes;
    if (plumChallengeExitData) {
      plumChallengeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
        challengeTransfer: pbRes.challengeTransfer,
        challengeTransferBlockProof: pbRes.challengeTransferBlockProof,
        challengeTransferBlockHeight: pbRes.challengeTransferBlockHeight,
      };
    }
    return plumChallengeExitData;
  }

  static fromPlumResponseChallengeExit(pbRes: any): any {
    let plumResponseChallengeExitData = pbRes;
    if (plumResponseChallengeExitData) {
      plumResponseChallengeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
        challengeTransfer: pbRes.challengeTransfer,
        responseTransfer: pbRes.responseTransfer,
        responseTransferBlockProof: pbRes.responseTransferBlockProof,
        previousTransferBlockHeight: pbRes.previousTransferBlockHeight,
      };
    }
    return plumResponseChallengeExitData;
  }

  static fromPlumFinalizeExit(pbRes: any): any {
    let plumFinalizeExitData = pbRes;
    if (plumFinalizeExitData) {
      plumFinalizeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
      };
    }
    return plumFinalizeExitData;
  }

  static fromPlumSettleDeposit(pbRes: any): any {
    let plumSettleDepositData = pbRes;
    if (plumSettleDepositData) {
      plumSettleDepositData = {
        coinID: pbRes.coinID,
      };
    }
    return plumSettleDepositData;
  }

  static fromPlumTransfer(pbRes: any): any {
    let plumTransferData = pbRes;
    if (plumTransferData) {
      plumTransferData = {
        coinID: pbRes.coinID,
        denomination: pbRes.denomination,
        owner: pbRes.owner,
        recipient: pbRes.recipient,
      };
    }
    return plumTransferData;
  }

  static fromDepositToRewardingFund(pbRes: any): any {
    let depositToRewardingFundData = pbRes;
    if (depositToRewardingFundData) {
      depositToRewardingFundData = {
        amount: pbRes.amount,
        data: pbRes.data,
      };
    }
    return depositToRewardingFundData;
  }

  static fromClaimFromRewardingFund(pbRes: any): any {
    let claimFromRewardingFundData = pbRes;
    if (claimFromRewardingFundData) {
      claimFromRewardingFundData = {
        amount: pbRes.amount,
        data: pbRes.data,
      };
    }
    return claimFromRewardingFundData;
  }

  static fromSetReward(pbRes: any): any {
    let setRewardData = pbRes;
    if (setRewardData) {
      setRewardData = {
        amount: pbRes.amount,
        data: pbRes.data,
        type: pbRes.type,
      };
    }
    return setRewardData;
  }

  static fromGrantReward(pbRes: any): any {
    let grantRewardData = pbRes;
    if (grantRewardData) {
      grantRewardData = {
        type: pbRes.type,
      };
    }
    return grantRewardData;
  }

  static from(pbRes: any): IGetActionsResponse {
    const rawActions = pbRes.getActionsList();
    const res = {
      actions: rawActions,
    };
    if (rawActions) {
      const parsedActions = [];
      for (let i = 0; i < rawActions.length; i++) {
        let actionCore = rawActions[i].getCore();
        if (actionCore) {
          let executionData = rawActions[i].getCore().getExecution();
          if (executionData) {
            executionData = {
              amount: rawActions[i].getCore().getExecution().getAmount(),
              contract: rawActions[i].getCore().getExecution().getContract(),
              data: rawActions[i].getCore().getExecution().getData(),
            };
          }

          actionCore = {
            version: rawActions[i].getCore().getVersion(),
            nonce: rawActions[i].getCore().getNonce(),
            gasLimit: rawActions[i].getCore().getGaslimit(),
            gasPrice: rawActions[i].getCore().getGasprice(),
            transfer: this.fromTransfer(rawActions[i].getCore().getTransfer()),
            vote: this.fromVote(rawActions[i].getCore().getVote()),
            execution: this.fromExecution(rawActions[i].getCore().getExecution()),
            startSubChain: this.fromStartSubChain(rawActions[i].getCore().getStartsubchain()),
            stopSubChain: this.fromStopSubChain(rawActions[i].getCore().getStopsubchain()),
            putBlock: this.fromPutBlock(rawActions[i].getCore().getPutblock()),
            createDeposit: this.fromCreateDeposit(rawActions[i].getCore().getCreatedeposit()),
            settleDeposit: this.fromSettleDeposit(rawActions[i].getCore().getSettledeposit()),
            createPlumChain: this.fromCreatePlumChain(rawActions[i].getCore().getCreateplumchain()),
            terminatePlumChain: this.fromTerminatePlumChain(rawActions[i].getCore().getTerminateplumchain()),
            plumPutBlock: this.fromPlumPutBlock(rawActions[i].getCore().getPlumputblock()),
            plumCreateDeposit: this.fromPlumCreateDeposit(rawActions[i].getCore().getPlumcreatedeposit()),
            plumStartExit: this.fromPlumStartExit(rawActions[i].getCore().getPlumstartexit()),
            plumChallengeExit: this.fromPlumChallengeExit(rawActions[i].getCore().getPlumchallengeexit()),
            plumResponseChallengeExit: this.fromPlumResponseChallengeExit(rawActions[i].getCore().getPlumresponsechallengeexit()),
            plumFinalizeExit: this.fromPlumFinalizeExit(rawActions[i].getCore().getPlumfinalizeexit()),
            plumSettleDeposit: this.fromPlumSettleDeposit(rawActions[i].getCore().getPlumsettledeposit()),
            plumTransfer: this.fromPlumTransfer(rawActions[i].getCore().getPlumtransfer()),
            depositToRewardingFund: this.fromDepositToRewardingFund(rawActions[i].getCore().getDeposittorewardingfund()),
            claimFromRewardingFund: this.fromClaimFromRewardingFund(rawActions[i].getCore().getClaimfromrewardingfund()),
            setReward: this.fromSetReward(rawActions[i].getCore().getSetreward()),
            grantReward: this.fromGrantReward(rawActions[i].getCore().getGrantreward()),
          };
        }
        parsedActions[i] = {
          core: actionCore,
          senderPubKey: rawActions[i].getSenderpubkey(),
          signature: rawActions[i].getSignature(),
        };
      }
      res.actions = parsedActions;
    }
    return res;
  }
}

/** Properties of a SuggestGasPrice Request. */
export interface ISuggestGasPriceRequest {
}

/** Properties of a SuggestGasPriceResponse. */
export interface ISuggestGasPriceResponse {
  /** SuggestGasPriceResponse gasPrice */
  gasPrice?: number | null
}

export class SuggestGasPriceRequest {
  static to(req: ISuggestGasPriceRequest): any {
    return new apiPb.SuggestGasPriceRequest();
  }

  static from(pbRes: any): ISuggestGasPriceResponse {
    const gasPrice = pbRes.getGasprice();
    return {
      gasPrice,
    };
  }
}

/** Properties of a GetReceiptByActionRequest. */
export interface IGetReceiptByActionRequest {
  /** GetReceiptByActionRequest actionHash */
  actionHash?: string | null,
}

/** Properties of an Log. */
export interface ILog {
  /** Log address */
  address?: string | null,

  /** Log topics */
  topics: Uint8Array[],

  /** Log data */
  data?: Uint8Array | null,

  /** Log blockNumber */
  blockNumber?: number | null,

  /** Log txnHash */
  txnHash?: Uint8Array | null,

  /** Log index */
  index?: number | null,
}

/** Properties of an Receipt. */
export interface IReceipt {
  /** Receipt returnValue */
  returnValue?: Uint8Array | null,

  /** Receipt status */
  status?: number | null,

  /** Receipt actHash */
  actHash?: Uint8Array | null,

  /** Receipt gasConsumed */
  gasConsumed?: number | null,

  /** Receipt contractAddress */
  contractAddress?: string | null,

  /** Receipt logs */
  logs?: ILog[] | null,
}

/** Properties of a GetReceiptByActionResponse. */
export interface IGetReceiptByActionResponse {
  /** GetReceiptByActionResponse receipt */
  receipt?: IReceipt | null,
}

export class GetReceiptByActionRequest {
  static to(req: IGetReceiptByActionRequest): any {
    const pbReq = new apiPb.GetReceiptByActionRequest();
    if (req.actionHash) {
      pbReq.setActionhash(req.actionHash);
    }
    return pbReq;
  }

  static from(pbRes: any): IGetReceiptByActionResponse {
    const receiptData = pbRes.getReceiptByAction();
    const res = {
      receipt: receiptData,
    };
    if (receiptData) {
      const logsData = receiptData.getLogs();
      res.receipt = {
        returnValue: receiptData.getReturnValue(),
        status: receiptData.getStatus(),
        actHash: receiptData.getActHash(),
        gasConsumed: receiptData.getGasConsumed(),
        contractAddress: receiptData.getContractAddress(),
        logs: logsData,
      };
      if (logsData) {
        const parsedLogsData = [];
        for (let i = 0; i < logsData.length; i++) {
          parsedLogsData[i] = {
            address: logsData[i].getAddress(),
            topics: logsData[i].getTopics(),
            data: logsData[i].getData(),
            blockNumber: logsData[i].getBlockNumber(),
            txnHash: logsData[i].getTxnHash(),
            index: logsData[i].getIndex(),
          };
        }
        res.receipt.logs = parsedLogsData;
      }
    }
    return res;
  }
}

/** Properties of a ReadContractRequest. */
export interface IReadContractRequest {
  /** ReadContractRequest action */
  action?: IAction | null,
}

/** Properties of a ReadContractResponse. */
export interface IReadContractResponse {
  data?: string | null,
}

export class ReadContractRequest {
  static to(req: IReadContractRequest): any {
    const pbReq = new apiPb.ReadContractRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  }

  static from(pbRes: any): IReadContractResponse {
    const data = pbRes.getData();
    return {
      data,
    };
  }
}

/** Properties of a SendActionRequest. */
export interface ISendActionRequest {
  /** SendActionRequest action */
  action?: IAction | null,
}

/** Properties of a SendActionResponse. */
export interface ISendActionResponse {
}

export class SendActionRequest {
  static to(req: ISendActionRequest): any {
    const pbReq = new apiPb.SendActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  }

  static from(pbRes: any): ISendActionResponse {
    return {};
  }
}

/** Properties of a EstimateGasForActionRequest. */
export interface IEstimateGasForActionRequest {
  action?: IAction,
}

/** Properties of a EstimateGasForActionResponse. */
export interface IEstimateGasForActionResponse {
  gas?: number | null,
}

export class EstimateGasForActionRequest {
  static to(req: IEstimateGasForActionRequest): any {
    const pbReq = new apiPb.EstimateGasForActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  }

  static from(pbRes: any): IEstimateGasForActionResponse {
    return {gas: pbRes.getGas()};
  }
}

export interface IRpcMethod {
  constructor(hostname: string): void;
  getAccount(req: IGetAccountRequest): Promise<IGetAccountResponse>;
  getBlockMetas(req: IGetBlockMetasRequest): Promise<IGetBlockMetasResponse>;
  getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse>;
  getActions(req: IGetActionsRequest): Promise<IGetActionsResponse>;
  suggestGasPrice(req: ISuggestGasPriceRequest): Promise<ISuggestGasPriceResponse>;
  getReceiptByAction(req: IGetReceiptByActionRequest): Promise<IGetReceiptByActionResponse>;
  readContract(req: IReadContractRequest): Promise<IReadContractResponse>;
  sendAction(req: ISendActionRequest): Promise<ISendActionResponse>;
  estimateGasForAction(req: IEstimateGasForActionRequest): Promise<IEstimateGasForActionResponse>;
}
