/* tslint:disable:no-any */

import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import actionPb from "../proto/generated/action_pb";
import apiPb from "../proto/generated/api_pb";

// Properties of a Timestamp.
export interface ITimestamp {
  // Timestamp seconds
  seconds: number;

  // Timestamp nanos
  nanos: number;
}

// interface for get account
// Properties of a GetAccountRequest.
export interface IGetAccountRequest {
  // GetAccountRequest address
  address: string;
}

// Properties of an AccountMeta.
export interface IAccountMeta {
  // AccountMeta address
  address: string;

  // AccountMeta balance
  balance: string;

  // AccountMeta nonce
  nonce: number;

  // AccountMeta pendingNonce
  pendingNonce: number;
}

// Properties of a GetAccountResponse.
export interface IGetAccountResponse {
  // GetAccountResponse accountMeta
  accountMeta: IAccountMeta;
}

export const GetAccountRequest = {
  to(req: IGetAccountRequest): any {
    const pbReq = new apiPb.GetAccountRequest();
    pbReq.setAddress(req.address);
    return pbReq;
  },

  from(pbRes: any): IGetAccountResponse {
    const meta = pbRes.getAccountmeta();
    const res = {
      accountMeta: meta
    };
    if (meta) {
      res.accountMeta = {
        address: meta.getAddress(),
        balance: meta.getBalance(),
        nonce: meta.getNonce(),
        pendingNonce: meta.getPendingnonce()
      };
    }
    return res;
  }
};

// interface for get chain meta
export interface IEpochData {
  num: number;
  height: number;
  beaconChainHeight: number;
}

export interface IChainMeta {
  height: string;
  numActions: string;
  tps: string;
  epoch: IEpochData;
}

export interface IGetChainMetaRequest {}

export interface IGetChainMetaResponse {
  chainMeta: IChainMeta;
}

export const GetChainMetaRequest = {
  // @ts-ignore
  to(req: IGetChainMetaRequest): any {
    return new apiPb.GetChainMetaRequest();
  },

  from(pbRes: any): IGetChainMetaResponse {
    const meta = pbRes.getChainmeta();
    const res = {
      chainMeta: meta
    };
    if (meta) {
      const epochData = meta.Epoch;
      res.chainMeta = {
        height: meta.getHeight(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        epoch: epochData
      };
    }
    return res;
  }
};

// interface for get block metas
// Properties of a GetBlockMetasByIndexRequest.
export interface IGetBlockMetasByIndexRequest {
  // GetBlockMetasByIndexRequest start
  start: number;

  // GetBlockMetasByIndexRequest count
  count: number;
}

// Properties of a GetBlockMetasByHashRequest.
export interface IGetBlockMetasByHashRequest {
  // GetBlockMetasByHashRequest address
  blkHash: string;
}

// Properties of a GetBlockMetasRequest.
export interface IGetBlockMetasRequest {
  // GetBlockMetasRequest byIndex
  byIndex: IGetBlockMetasByIndexRequest;

  // GetBlockMetasRequest byHash
  byHash: IGetBlockMetasByHashRequest;
}

// Properties of an blockMeta.
export interface IBlockMeta {
  // BlockMeta hash
  hash: string;

  // BlockMeta height
  height: number;

  // BlockMeta timestamp
  timestamp: number;

  // BlockMeta numActions
  numActions: number;

  // BlockMeta producerAddress
  producerAddress: string;

  // BlockMeta transferAmount
  transferAmount: string;

  // BlockMeta txRoot
  txRoot: string;

  // BlockMeta receiptRoot
  receiptRoot: string;

  // BlockMeta deltaStateDigest
  deltaStateDigest: string;
}

// Properties of a GetBlockMetasResponse.
export interface IGetBlockMetasResponse {
  // GetBlockMetasResponse blockMetas
  blkMetas: Array<IBlockMeta>;
}

export const GetBlockMetasRequest = {
  to(req: IGetBlockMetasRequest): any {
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
  },

  from(pbRes: any): IGetBlockMetasResponse {
    const metas = pbRes.getBlkmetasList();
    const res = {
      blkMetas: metas
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
          deltaStateDigest: metas[i].getDeltastatedigest()
        };
      }
      res.blkMetas = parsedMetas;
    }
    return res;
  }
};

// interface for get actions
// Properties of a GetActionsByIndexRequest.
export interface IGetActionsByIndexRequest {
  // GetActionsByIndexRequest start
  start: number;

  // GetActionsByIndexRequest count
  count: number;
}

// Properties of a GetActionsByHashRequest.
export interface IGetActionsByHashRequest {
  // GetActionsByHashRequest actionHash
  actionHash: string;

  // GetActionsByHashRequest checkingPending
  checkingPending: boolean;
}

// Properties of a GetActionsByAddressRequest.
export interface IGetActionsByAddressRequest {
  // GetActionsByAddressRequest address
  address: string;

  // GetActionsByAddressRequest start
  start: number;

  // GetActionsByAddressRequest count
  count: number;
}

// Properties of a GetUnconfirmedActionsByAddressRequest.
export interface IGetUnconfirmedActionsByAddressRequest {
  // GetUnconfirmedActionsByAddressRequest address
  address: string;

  // GetUnconfirmedActionsByAddressRequest start
  start: number;

  // GetUnconfirmedActionsByAddressRequest count
  count: number;
}

// Properties of a GetActionsByBlockRequest.
export interface IGetActionsByBlockRequest {
  // GetActionsByBlockRequest blkHash
  blkHash: string;

  // GetActionsByBlockRequest start
  start: number;

  // GetActionsByBlockRequest count
  count: number;
}

// Properties of a GetActionsRequest.
export interface IGetActionsRequest {
  // GetActionsRequest byIndex
  byIndex: IGetActionsByIndexRequest;

  // GetActionsRequest byHash
  byHash: IGetActionsByHashRequest;

  // GetActionsRequest byAddr
  byAddr: IGetActionsByAddressRequest;

  // GetUnconfirmedActionsByAddressRequest unconfirmedByAddr
  unconfirmedByAddr: IGetUnconfirmedActionsByAddressRequest;

  // GetActionsByBlockRequest byBlk
  byBlk: IGetActionsByBlockRequest;
}

// Properties of a Transfer.
export interface ITransfer {
  // Transfer amount
  amount: string;

  // Transfer recipient
  recipient: string;

  // Transfer payload
  payload: Uint8Array;
}

// Properties of a Vote.
export interface IVote {
  // Vote timestamp
  timestamp: ITimestamp;

  // Vote voteeAddress
  voteeAddress: string;
}

// Properties of a Execution.
export interface IExecution {
  // Execution amount
  amount: string;

  // Execution contract
  contract: string;

  // Execution data
  data: Uint8Array;
}

// Properties of a StartSubChain.
export interface IStartSubChain {
  // StartSubChain chainID
  chainID: number;

  // StartSubChain securityDeposit
  securityDeposit: string;

  // StartSubChain operationDeposit
  operationDeposit: string;

  // StartSubChain startHeight
  startHeight: number;

  // StartSubChain parentHeightOffset
  parentHeightOffset: number;
}

// Properties of a StopSubChain.
export interface IStopSubChain {
  // StopSubChain chainID
  chainID: number;

  // StopSubChain stopHeight
  stopHeight: number;

  // StopSubChain subChainAddress
  subChainAddress: string;
}

// Properties of a MerkleRoot.
export interface IMerkleRoot {
  // MerkleRoot name
  name: string;

  // MerkleRoot value
  value: Uint8Array;
}

// Properties of a PutBlock.
export interface IPutBlock {
  // PutBlock subChainAddress
  subChainAddress: string;

  // PutBlock height
  height: number;

  // PutBlock roots
  roots: Array<IMerkleRoot>;
}

// Properties of a CreateDeposit.
export interface ICreateDeposit {
  // CreateDeposit chainID
  chainID: number;

  // CreateDeposit amount
  amount: string;

  // CreateDeposit receipt
  recipient: string;
}

// Properties of a SettleDeposit.
export interface ISettleDeposit {
  // SettleDeposit amount
  amount: string;

  // SettleDeposit recipient
  recipient: string;

  // SettleDeposit index
  index: number;
}

// Properties of a CreatePlumChain.
export interface ICreatePlumChain {}

// Properties of a TerminatePlumChain.
export interface ITerminatePlumChain {
  // TerminatePlumChain subChainAddress
  subChainAddress: string;
}

// Properties of a PlumPutBlock.
export interface IPlumPutBlock {
  // PlumPutBlock subChainAddress
  subChainAddress: string;

  // PlumPutBlock height
  height: number;

  // PlumPutBlock height
  roots: Map<string, Uint8Array>;
}

// Properties of a PlumCreateDeposit.
export interface IPlumCreateDeposit {
  // PlumCreateDeposit subChainAddress
  subChainAddress: string;

  // PlumCreateDeposit amount
  amount: string;

  // PlumCreateDeposit recipient
  recipient: string;
}

// Properties of a PlumStartExit.
export interface IPlumStartExit {
  // PlumStartExit subChainAddress
  subChainAddress: string;

  // PlumStartExit previousTransfer
  previousTransfer: Uint8Array;

  // PlumStartExit previousTransferBlockProof
  previousTransferBlockProof: Uint8Array;

  // PlumStartExit previousTransferBlockHeight
  previousTransferBlockHeight: number;

  // PlumStartExit exitTransfer
  exitTransfer: Uint8Array;

  // PlumStartExit exitTransferBlockProof
  exitTransferBlockProof: Uint8Array;

  // PlumStartExit exitTransferBlockHeight
  exitTransferBlockHeight: number;
}

// Properties of a PlumChallengeExit.
export interface IPlumChallengeExit {
  // PlumChallengeExit subChainAddress
  subChainAddress: string;

  // PlumChallengeExit chainID
  coinID: number;

  // PlumChallengeExit challengeTransfer
  challengeTransfer: Uint8Array;

  // PlumChallengeExit challengeTransferBlockProof
  challengeTransferBlockProof: Uint8Array;

  // PlumChallengeExit challengeTransferBlockHeight
  challengeTransferBlockHeight: number;
}

// Properties of a PlumResponseChallengeExit.
export interface IPlumResponseChallengeExit {
  // PlumResponseChallengeExit subChainAddress
  subChainAddress: string;

  // PlumResponseChallengeExit coinID
  coinID: number;

  // PlumResponseChallengeExit challengeTransfer
  challengeTransfer: Uint8Array;

  // PlumResponseChallengeExit responseTransfer
  responseTransfer: Uint8Array;

  // PlumResponseChallengeExit responseTransferBlockProof
  responseTransferBlockProof: Uint8Array;

  // PlumResponseChallengeExit previousTransferBlockHeight
  previousTransferBlockHeight: number;
}

// Properties of a PlumFinalizeExit.
export interface IPlumFinalizeExit {
  // PlumFinalizeExit subChainAddress
  subChainAddress: string;

  // PlumFinalizeExit coinID
  coinID: number;
}

// plum sub chain APIs
// Properties of a PlumSettleDeposit.
export interface IPlumSettleDeposit {
  // PlumSettleDeposit coinID
  coinID: number;
}

// Properties of a PlumTransfer.
export interface IPlumTransfer {
  // PlumTransfer coinID
  coinID: number;

  // PlumTransfer denomination
  denomination: Uint8Array;

  // PlumTransfer owner
  owner: string;

  // PlumTransfer recipient
  recipient: string;
}

// //////////////////////////////////////////////////////////////////////////////////////////////////
// BELOW ARE DEFINITIONS FOR BLOCK PRODUCER PROTOCOL
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Properties of a DepositToRewardingFund.
export interface IDepositToRewardingFund {
  // DepositToRewardingFund amount
  amount: string;

  // DepositToRewardingFund data
  data: Uint8Array;
}

// Properties of a ClaimFromRewardingFund.
export interface IClaimFromRewardingFund {
  // ClaimFromRewardingFund amount
  amount: string;

  // ClaimFromRewardingFund data
  data: Uint8Array;
}

export interface RewardType {
  BlockReward: 0;
  EpochReward: 1;
}

// Properties of a SetReward.
export interface ISetReward {
  // SetReward amount
  amount: string;

  // SetReward data
  data: Uint8Array;

  // SetReward type
  type: number;
}

// Properties of a GrantReward.
export interface IGrantReward {
  // GrantReward type
  type: number;
}

// Properties of an ActionCore.
export interface IActionCore {
  // ActionCore version
  version: number;

  // ActionCore nonce
  nonce: number;

  // ActionCore gasLimit
  gasLimit: number;

  // ActionCore gasPrice
  gasPrice: string;

  // Action detail fields
  // ActionCore transfer
  transfer: ITransfer;
  // ActionCore vote
  vote: IVote;
  // ActionCore execution
  execution: IExecution;

  // FedChain
  // ActionCore startSubChain
  startSubChain: IStartSubChain;
  // ActionCore stopSubChain
  stopSubChain: IStopSubChain;
  // ActionCore putBlock
  putBlock: IPutBlock;
  // ActionCore createDeposit
  createDeposit: ICreateDeposit;
  // ActionCore settleDeposit
  settleDeposit: ISettleDeposit;

  // PlumChain
  // ActionCore createPlumChain
  createPlumChain: ICreatePlumChain;
  // ActionCore terminatePlumChain
  terminatePlumChain: ITerminatePlumChain;
  // ActionCore plumPutBlock
  plumPutBlock: IPlumPutBlock;
  // ActionCore plumCreateDeposit
  plumCreateDeposit: IPlumCreateDeposit;
  // ActionCore plumStartExit
  plumStartExit: IPlumStartExit;
  // ActionCore plumChallengeExit
  plumChallengeExit: IPlumChallengeExit;
  // ActionCore plumResponseChallengeExit
  plumResponseChallengeExit: IPlumResponseChallengeExit;
  // ActionCore plumFinalizeExit
  plumFinalizeExit: IPlumFinalizeExit;
  // ActionCore plumSettleDeposit
  plumSettleDeposit: IPlumSettleDeposit;
  // ActionCore plumTransfer
  plumTransfer: IPlumTransfer;

  // Rewarding protocol actions
  // ActionCore depositToRewardingFund
  depositToRewardingFund: IDepositToRewardingFund;
  // ActionCore claimFromRewardingFund
  claimFromRewardingFund: IClaimFromRewardingFund;
  // ActionCore setReward
  setReward: ISetReward;
  // ActionCore grantReward
  grantReward: IGrantReward;
}

// Properties of an Action.
export interface IAction {
  // Action core
  core: IActionCore;

  // Action senderPubkey
  senderPubKey: Uint8Array;

  // Action signature
  signature: Uint8Array;
}

export function toActionTransfer(req: ITransfer): any {
  if (!req) {
    return null;
  }
  const pbTransfer = new actionPb.Transfer();
  pbTransfer.setAmount(req.amount);
  pbTransfer.setRecipient(req.recipient);
  pbTransfer.setPayload(req.payload);
  return pbTransfer;
}

function toTimestamp(timestamp: ITimestamp): Timestamp {
  const ts = new Timestamp();
  if (timestamp) {
    ts.setSeconds(timestamp.seconds);
    ts.setNanos(timestamp.nanos);
  }
  return ts;
}

export function toActionVote(req: IVote): any {
  if (!req) {
    return null;
  }
  const pbVote = new actionPb.Vote();
  const ts = new Timestamp();
  ts.setSeconds(req.timestamp.seconds);
  pbVote.setTimestamp(toTimestamp(req.timestamp));
  pbVote.setVoteeaddress(req.voteeAddress);
  return pbVote;
}

export function toActionExecution(req: IExecution): any {
  if (!req) {
    return null;
  }
  const pbExecution = new actionPb.Execution();
  pbExecution.setAmount(req.amount);
  pbExecution.setContract(req.contract);
  pbExecution.setData(req.data);
  return pbExecution;
}

export function toActionStartSubChain(req: IStartSubChain): any {
  if (!req) {
    return null;
  }

  const pbStartSubChain = new actionPb.StartSubChain();
  pbStartSubChain.setChainid(req.chainID);
  pbStartSubChain.setSecuritydeposit(req.securityDeposit);
  pbStartSubChain.setOperationdeposit(req.operationDeposit);
  pbStartSubChain.setStartheight(req.startHeight);
  pbStartSubChain.setParentheightoffset(req.parentHeightOffset);
  return pbStartSubChain;
}

export function toActionStopSubChain(req: IStopSubChain): any {
  if (!req) {
    return null;
  }
  const pbStopSubChain = new actionPb.StopSubChain();
  // @ts-ignore
  pbStopSubChain.setChainid(req.chainID);
  // @ts-ignore
  pbStopSubChain.setStopheight(req.stopHeight);
  // @ts-ignore
  pbStopSubChain.setSubchainaddress(req.subChainAddress);
  return pbStopSubChain;
}

export function toActionPutBlock(req: IPutBlock): any {
  if (!req) {
    return null;
  }
  const roots = req.roots;
  const rootList = [];
  if (req.roots && roots) {
    for (let i = 0; i < req.roots.length; i++) {
      const rootItem = req.roots && req.roots[i];
      const mkroot = new actionPb.MerkleRoot();
      mkroot.setName(rootItem.name);
      mkroot.setValue(rootItem.value);
      rootList[i] = mkroot;
    }
  }
  const pbPutBlock = new actionPb.PutBlock();
  pbPutBlock.setSubchainaddress(req.subChainAddress);
  pbPutBlock.setHeight(req.height);
  pbPutBlock.setRootsList(rootList);
  return pbPutBlock;
}

export function toActionCreateDeposit(req: ICreateDeposit): any {
  if (!req) {
    return null;
  }
  const pbCreateDeposit = new actionPb.CreateDeposit();
  pbCreateDeposit.setChainid(req.chainID);
  pbCreateDeposit.setAmount(req.amount);
  pbCreateDeposit.setRecipient(req.recipient);
  return pbCreateDeposit;
}

export function toActionSettleDeposit(req: ISettleDeposit): any {
  if (!req) {
    return null;
  }
  const pbSettleDeposit = new actionPb.SettleDeposit();
  pbSettleDeposit.setAmount(req.amount);
  pbSettleDeposit.setRecipient(req.recipient);
  pbSettleDeposit.setIndex(req.index);
  return pbSettleDeposit;
}

export function toActionCreatePlumChain(req: ICreatePlumChain): any {
  if (!req) {
    return null;
  }
  return new actionPb.CreatePlumChain();
}

export function toActionTerminatePlumChain(req: ITerminatePlumChain): any {
  if (!req) {
    return null;
  }
  const pbTerminatePlumChain = new actionPb.TerminatePlumChain();
  pbTerminatePlumChain.setSubchainaddress(req.subChainAddress);
  return pbTerminatePlumChain;
}

export function toActionPlumPutBlock(req: IPlumPutBlock): any {
  if (!req) {
    return null;
  }
  const pbPlumPutBlock = new actionPb.PlumPutBlock();
  pbPlumPutBlock.setSubchainaddress(req.subChainAddress);
  pbPlumPutBlock.setHeight(req.height);
  return pbPlumPutBlock;
}

export function toActionPlumCreateDeposit(req: IPlumCreateDeposit): any {
  if (!req) {
    return null;
  }

  const pbPlumCreateDeposit = new actionPb.PlumCreateDeposit();
  // @ts-ignore
  pbPlumCreateDeposit.setSubchainaddress(req.subChainAddress);
  // @ts-ignore
  pbPlumCreateDeposit.setAmount(req.amount);
  // @ts-ignore
  pbPlumCreateDeposit.setRecipient(req.recipient);
  return pbPlumCreateDeposit;
}

export function toActionPlumStartExit(req: IPlumStartExit): any {
  if (!req) {
    return null;
  }

  const pbPlumStartExit = new actionPb.PlumStartExit();
  pbPlumStartExit.setSubchainaddress(req.subChainAddress);
  pbPlumStartExit.setPrevioustransfer(req.previousTransfer);
  pbPlumStartExit.setPrevioustransferblockproof(req.previousTransferBlockProof);
  pbPlumStartExit.setPrevioustransferblockheight(
    req.previousTransferBlockHeight
  );
  pbPlumStartExit.setExittransfer(req.exitTransfer);
  pbPlumStartExit.setExittransferblockproof(req.exitTransferBlockProof);
  pbPlumStartExit.setExittransferblockheight(req.exitTransferBlockHeight);
  return pbPlumStartExit;
}

export function toActionPlumChallengeExit(req: IPlumChallengeExit): any {
  if (!req) {
    return null;
  }

  const pbPlumChallengeExit = new actionPb.PlumChallengeExit();
  pbPlumChallengeExit.setSubchainaddress(req.subChainAddress);
  pbPlumChallengeExit.setCoinid(req.coinID);
  pbPlumChallengeExit.setChallengetransfer(req.challengeTransfer);
  pbPlumChallengeExit.setChallengetransferblockproof(
    req.challengeTransferBlockProof
  );
  pbPlumChallengeExit.setChallengetransferblockheight(
    req.challengeTransferBlockHeight
  );
  return pbPlumChallengeExit;
}

export function toActionPlumResponseChallengeExit(
  req: IPlumResponseChallengeExit
): any {
  if (!req) {
    return null;
  }

  const pbPlumResponseChallengeExit = new actionPb.PlumResponseChallengeExit();
  pbPlumResponseChallengeExit.setSubchainaddress(req.subChainAddress);
  pbPlumResponseChallengeExit.setCoinid(req.coinID);
  pbPlumResponseChallengeExit.setChallengetransfer(req.challengeTransfer);
  pbPlumResponseChallengeExit.setResponsetransfer(req.responseTransfer);
  pbPlumResponseChallengeExit.setResponsetransferblockproof(
    req.responseTransferBlockProof
  );
  return pbPlumResponseChallengeExit;
}

export function toActionPlumFinalizeExit(req: IPlumFinalizeExit): any {
  if (!req) {
    return null;
  }
  const pbPlumFinalizeExit = new actionPb.PlumFinalizeExit();
  pbPlumFinalizeExit.setSubchainaddress(req.subChainAddress);
  pbPlumFinalizeExit.setCoinid(req.coinID);
  return pbPlumFinalizeExit;
}

export function toActionPlumSettleDeposit(req: IPlumSettleDeposit): any {
  if (!req) {
    return null;
  }
  const pbPlumSettleDeposit = new actionPb.PlumSettleDeposit();
  pbPlumSettleDeposit.setCoinid(req.coinID);
  return pbPlumSettleDeposit;
}

export function toActionPlumTransfer(req: IPlumTransfer): any {
  if (!req) {
    return null;
  }
  const pbPlumTransfer = new actionPb.PlumTransfer();
  pbPlumTransfer.setCoinid(req.coinID);
  pbPlumTransfer.setDenomination(req.denomination);
  pbPlumTransfer.setOwner(req.owner);
  pbPlumTransfer.setRecipient(req.recipient);
  return pbPlumTransfer;
}

export function toActionDepositToRewardingFund(
  req: IDepositToRewardingFund
): any {
  if (!req) {
    return null;
  }
  const pbDepositToRewardingFund = new actionPb.DepositToRewardingFund();
  pbDepositToRewardingFund.setAmount(req.amount);
  pbDepositToRewardingFund.setData(req.data);
  return pbDepositToRewardingFund;
}

export function toActionClaimFromRewardingFund(
  req: IClaimFromRewardingFund
): any {
  if (!req) {
    return null;
  }
  const pbClaimFromRewardingFund = new actionPb.ClaimFromRewardingFund();
  // @ts-ignore
  pbClaimFromRewardingFund.setAmount(req.amount);
  // @ts-ignore
  pbClaimFromRewardingFund.setData(req.data);
  return pbClaimFromRewardingFund;
}

export function toActionGrantReward(req: IGrantReward): any {
  if (!req) {
    return null;
  }
  const pbGrantReward = new actionPb.GrantReward();
  pbGrantReward.setType(req.type);
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
    // @ts-ignore
    pbActionCore.setVote(toActionVote(core.vote));
    // @ts-ignore
    pbActionCore.setExecution(toActionExecution(core.execution));
    // @ts-ignore
    pbActionCore.setStartsubchain(toActionStartSubChain(core.startSubChain));
    // @ts-ignore
    pbActionCore.setStopsubchain(toActionStopSubChain(core.stopSubChain));
    // @ts-ignore
    pbActionCore.setPutblock(toActionPutBlock(core.putBlock));
    // @ts-ignore
    pbActionCore.setCreatedeposit(toActionCreateDeposit(core.createDeposit));
    // @ts-ignore
    pbActionCore.setSettledeposit(toActionSettleDeposit(core.settleDeposit));
    // @ts-ignore
    pbActionCore.setCreateplumchain(
      toActionCreatePlumChain(core.createPlumChain)
    );
    // @ts-ignore
    pbActionCore.setTerminateplumchain(
      toActionTerminatePlumChain(core.terminatePlumChain)
    );
    // @ts-ignore
    pbActionCore.setPlumputblock(toActionPlumPutBlock(core.plumPutBlock));
    // @ts-ignore
    pbActionCore.setPlumcreatedeposit(
      toActionPlumCreateDeposit(core.plumCreateDeposit)
    );
    // @ts-ignore
    pbActionCore.setPlumstartexit(toActionPlumStartExit(core.plumStartExit));
    // @ts-ignore
    pbActionCore.setPlumchallengeexit(
      toActionPlumChallengeExit(core.plumChallengeExit)
    );
    // @ts-ignore
    pbActionCore.setPlumresponsechallengeexit(
      toActionPlumResponseChallengeExit(core.plumResponseChallengeExit)
    );
    // @ts-ignore
    pbActionCore.setPlumfinalizeexit(
      toActionPlumFinalizeExit(core.plumFinalizeExit)
    );
    // @ts-ignore
    pbActionCore.setPlumsettledeposit(
      toActionPlumSettleDeposit(core.plumSettleDeposit)
    );
    pbActionCore.setPlumtransfer(toActionPlumTransfer(core.plumTransfer));
    // @ts-ignore
    pbActionCore.setDeposittorewardingfund(
      toActionDepositToRewardingFund(core.depositToRewardingFund)
    );
    // @ts-ignore
    pbActionCore.setClaimfromrewardingfund(
      toActionClaimFromRewardingFund(core.claimFromRewardingFund)
    );
    // @ts-ignore
    pbActionCore.setGrantreward(toActionGrantReward(core.grantReward));
  }

  const pbAction = new actionPb.Action();
  pbAction.setCore(pbActionCore);

  pbAction.setSenderpubkey(req.senderPubKey);

  pbAction.setSignature(req.signature);

  return pbAction;
}

// Properties of a GetActionsResponse.
export interface IGetActionsResponse {
  // GetActionsResponse actions
  actions: Array<IAction>;
}

export const GetActionsRequest = {
  byAddrTo(byAddr: IGetActionsByAddressRequest): any {
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
  },

  byBlkTo(byBlk: IGetActionsByBlockRequest): any {
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
  },

  byHashTo(byHash: IGetActionsByHashRequest): any {
    const pbReqByHash = new apiPb.GetActionByHashRequest();
    if (byHash.actionHash) {
      pbReqByHash.setActionhash(byHash.actionHash);
    }
    if (byHash.checkingPending) {
      pbReqByHash.setCheckpending(byHash.checkingPending);
    }
    return pbReqByHash;
  },

  byIndexTo(byIndex: IGetActionsByIndexRequest): any {
    const pbReqByIndex = new apiPb.GetActionsByIndexRequest();
    if (byIndex.start) {
      pbReqByIndex.setStart(byIndex.start);
    }
    if (byIndex.count) {
      pbReqByIndex.setCount(byIndex.count);
    }
    return pbReqByIndex;
  },

  unconfirmedByAddrTo(
    unconfirmedByAddr: IGetUnconfirmedActionsByAddressRequest
  ): any {
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
  },
  to(req: IGetActionsRequest): any {
    const pbReq = new apiPb.GetActionsRequest();
    if (req.byAddr) {
      pbReq.setByaddr(GetActionsRequest.byAddrTo(req.byAddr));
    }
    if (req.byBlk) {
      pbReq.setByblk(GetActionsRequest.byBlkTo(req.byBlk));
    }
    if (req.byHash) {
      pbReq.setByhash(GetActionsRequest.byHashTo(req.byHash));
    }
    if (req.byIndex) {
      pbReq.setByindex(GetActionsRequest.byIndexTo(req.byIndex));
    }
    if (req.unconfirmedByAddr) {
      pbReq.setUnconfirmedbyaddr(
        GetActionsRequest.unconfirmedByAddrTo(req.unconfirmedByAddr)
      );
    }
    return pbReq;
  },

  fromTransfer(pbRes: any): any {
    let transferData = pbRes;
    if (pbRes) {
      transferData = {
        amount: pbRes.getAmount(),
        recipient: pbRes.getRecipient(),
        payload: pbRes.getPayload()
      };
    }
    return transferData;
  },

  fromVote(pbRes: any): any {
    let voteData = pbRes;
    if (voteData) {
      voteData = {
        timestamp: pbRes.getTimestamp(),
        voteeAddress: pbRes.getVoteeaddress()
      };
    }
    return voteData;
  },

  fromExecution(pbRes: any): any {
    let executionData = pbRes;
    if (executionData) {
      executionData = {
        amount: pbRes.getAmount(),
        contract: pbRes.getContract(),
        data: pbRes.getData()
      };
    }
    return executionData;
  },

  fromStartSubChain(pbRes: any): any {
    let startSubChainData = pbRes;
    if (startSubChainData) {
      startSubChainData = {
        chainID: pbRes.chainID,
        securityDeposit: pbRes.securityDeposit,
        operationDeposit: pbRes.operationDeposit,
        startHeight: pbRes.startHeight,
        parentHeightOffset: pbRes.parentHeightOffset
      };
    }
    return startSubChainData;
  },

  fromStopSubChain(pbRes: any): any {
    let stopSubChainData = pbRes;
    if (stopSubChainData) {
      stopSubChainData = {
        chainID: pbRes.chainID,
        stopHeight: pbRes.stopHeight,
        subChainAddress: pbRes.subChainAddress
      };
    }
    return stopSubChainData;
  },

  fromPutBlock(pbRes: any): any {
    let putBlockData = pbRes;
    if (putBlockData) {
      const rootsData = pbRes.roots;
      if (rootsData) {
        for (let i = 0; i < pbRes.roots.length; i++) {
          rootsData[i] = {
            name: pbRes.roots[i].name,
            value: pbRes.roots[i].value
          };
        }
      }
      putBlockData = {
        subChainAddress: pbRes.subChainAddress,
        height: pbRes.height,
        roots: rootsData
      };
    }
    return putBlockData;
  },

  fromCreateDeposit(pbRes: any): any {
    let createDepositData = pbRes;
    if (createDepositData) {
      createDepositData = {
        chainID: pbRes.chainID,
        amount: pbRes.amount,
        recipient: pbRes.recipient
      };
    }
    return createDepositData;
  },

  fromSettleDeposit(pbRes: any): any {
    let settleDepositData = pbRes;
    if (settleDepositData) {
      settleDepositData = {
        amount: pbRes.amount,
        recipient: pbRes.recipient,
        index: pbRes.index
      };
    }
    return settleDepositData;
  },

  fromCreatePlumChain(pbRes: any): any {
    let createPlumChainData = pbRes;
    if (createPlumChainData) {
      createPlumChainData = {};
    }
    return createPlumChainData;
  },

  fromTerminatePlumChain(pbRes: any): any {
    let terminatePlumChainData = pbRes;
    if (terminatePlumChainData) {
      terminatePlumChainData = {
        subChainAddress: pbRes.subChainAddress
      };
    }
    return terminatePlumChainData;
  },

  fromPlumPutBlock(pbRes: any): any {
    let plumPutBlockData = pbRes;
    if (plumPutBlockData) {
      plumPutBlockData = {
        subChainAddress: pbRes.subChainAddress,
        height: pbRes.height,
        roots: pbRes.roots
      };
    }
    return plumPutBlockData;
  },

  fromPlumCreateDeposit(pbRes: any): any {
    let plumCreateDepositData = pbRes;
    if (plumCreateDepositData) {
      plumCreateDepositData = {
        subChainAddress: pbRes.subChainAddress,
        amount: pbRes.amount,
        recipient: pbRes.recipient
      };
    }
    return plumCreateDepositData;
  },

  fromPlumStartExit(pbRes: any): any {
    let plumStartExitData = pbRes;
    if (plumStartExitData) {
      plumStartExitData = {
        subChainAddress: pbRes.subChainAddress,
        previousTransfer: pbRes.previousTransfer,
        previousTransferBlockProof: pbRes.previousTransferBlockProof,
        previousTransferBlockHeight: pbRes.previousTransferBlockHeight,
        exitTransfer: pbRes.exitTransfer,
        exitTransferBlockProof: pbRes.exitTransferBlockProof,
        exitTransferBlockHeight: pbRes.exitTransferBlockHeight
      };
    }
    return plumStartExitData;
  },

  fromPlumChallengeExit(pbRes: any): any {
    let plumChallengeExitData = pbRes;
    if (plumChallengeExitData) {
      plumChallengeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
        challengeTransfer: pbRes.challengeTransfer,
        challengeTransferBlockProof: pbRes.challengeTransferBlockProof,
        challengeTransferBlockHeight: pbRes.challengeTransferBlockHeight
      };
    }
    return plumChallengeExitData;
  },

  fromPlumResponseChallengeExit(pbRes: any): any {
    let plumResponseChallengeExitData = pbRes;
    if (plumResponseChallengeExitData) {
      plumResponseChallengeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
        challengeTransfer: pbRes.challengeTransfer,
        responseTransfer: pbRes.responseTransfer,
        responseTransferBlockProof: pbRes.responseTransferBlockProof,
        previousTransferBlockHeight: pbRes.previousTransferBlockHeight
      };
    }
    return plumResponseChallengeExitData;
  },

  fromPlumFinalizeExit(pbRes: any): any {
    let plumFinalizeExitData = pbRes;
    if (plumFinalizeExitData) {
      plumFinalizeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID
      };
    }
    return plumFinalizeExitData;
  },

  fromPlumSettleDeposit(pbRes: any): any {
    let plumSettleDepositData = pbRes;
    if (plumSettleDepositData) {
      plumSettleDepositData = {
        coinID: pbRes.coinID
      };
    }
    return plumSettleDepositData;
  },

  fromPlumTransfer(pbRes: any): any {
    let plumTransferData = pbRes;
    if (plumTransferData) {
      plumTransferData = {
        coinID: pbRes.coinID,
        denomination: pbRes.denomination,
        owner: pbRes.owner,
        recipient: pbRes.recipient
      };
    }
    return plumTransferData;
  },

  fromDepositToRewardingFund(pbRes: any): any {
    let depositToRewardingFundData = pbRes;
    if (depositToRewardingFundData) {
      depositToRewardingFundData = {
        amount: pbRes.amount,
        data: pbRes.data
      };
    }
    return depositToRewardingFundData;
  },

  fromClaimFromRewardingFund(pbRes: any): any {
    let claimFromRewardingFundData = pbRes;
    if (claimFromRewardingFundData) {
      claimFromRewardingFundData = {
        amount: pbRes.amount,
        data: pbRes.data
      };
    }
    return claimFromRewardingFundData;
  },

  fromSetReward(pbRes: any): any {
    let setRewardData = pbRes;
    if (setRewardData) {
      setRewardData = {
        amount: pbRes.amount,
        data: pbRes.data,
        type: pbRes.type
      };
    }
    return setRewardData;
  },

  fromGrantReward(pbRes: any): any {
    let grantRewardData = pbRes;
    if (grantRewardData) {
      grantRewardData = {
        type: pbRes.type
      };
    }
    return grantRewardData;
  },

  // tslint:disable-next-line:max-func-body-length
  from(pbRes: any): IGetActionsResponse {
    const rawActions = pbRes.getActionsList();
    const res = {
      actions: rawActions
    };
    if (rawActions) {
      const parsedActions = [];
      for (let i = 0; i < rawActions.length; i++) {
        let actionCore = rawActions[i].getCore();
        if (actionCore) {
          let executionData = rawActions[i].getCore().getExecution();
          if (executionData) {
            executionData = {
              amount: rawActions[i]
                .getCore()
                .getExecution()
                .getAmount(),
              contract: rawActions[i]
                .getCore()
                .getExecution()
                .getContract(),
              data: rawActions[i]
                .getCore()
                .getExecution()
                .getData()
            };
          }

          actionCore = {
            version: rawActions[i].getCore().getVersion(),
            nonce: rawActions[i].getCore().getNonce(),
            gasLimit: rawActions[i].getCore().getGaslimit(),
            gasPrice: rawActions[i].getCore().getGasprice(),
            transfer: GetActionsRequest.fromTransfer(
              rawActions[i].getCore().getTransfer()
            ),
            vote: GetActionsRequest.fromVote(rawActions[i].getCore().getVote()),
            execution: GetActionsRequest.fromExecution(
              rawActions[i].getCore().getExecution()
            ),
            startSubChain: GetActionsRequest.fromStartSubChain(
              rawActions[i].getCore().getStartsubchain()
            ),
            stopSubChain: GetActionsRequest.fromStopSubChain(
              rawActions[i].getCore().getStopsubchain()
            ),
            putBlock: GetActionsRequest.fromPutBlock(
              rawActions[i].getCore().getPutblock()
            ),
            createDeposit: GetActionsRequest.fromCreateDeposit(
              rawActions[i].getCore().getCreatedeposit()
            ),
            settleDeposit: GetActionsRequest.fromSettleDeposit(
              rawActions[i].getCore().getSettledeposit()
            ),
            createPlumChain: GetActionsRequest.fromCreatePlumChain(
              rawActions[i].getCore().getCreateplumchain()
            ),
            terminatePlumChain: GetActionsRequest.fromTerminatePlumChain(
              rawActions[i].getCore().getTerminateplumchain()
            ),
            plumPutBlock: GetActionsRequest.fromPlumPutBlock(
              rawActions[i].getCore().getPlumputblock()
            ),
            plumCreateDeposit: GetActionsRequest.fromPlumCreateDeposit(
              rawActions[i].getCore().getPlumcreatedeposit()
            ),
            plumStartExit: GetActionsRequest.fromPlumStartExit(
              rawActions[i].getCore().getPlumstartexit()
            ),
            plumChallengeExit: GetActionsRequest.fromPlumChallengeExit(
              rawActions[i].getCore().getPlumchallengeexit()
            ),
            plumResponseChallengeExit: GetActionsRequest.fromPlumResponseChallengeExit(
              rawActions[i].getCore().getPlumresponsechallengeexit()
            ),
            plumFinalizeExit: GetActionsRequest.fromPlumFinalizeExit(
              rawActions[i].getCore().getPlumfinalizeexit()
            ),
            plumSettleDeposit: GetActionsRequest.fromPlumSettleDeposit(
              rawActions[i].getCore().getPlumsettledeposit()
            ),
            plumTransfer: GetActionsRequest.fromPlumTransfer(
              rawActions[i].getCore().getPlumtransfer()
            ),
            depositToRewardingFund: GetActionsRequest.fromDepositToRewardingFund(
              rawActions[i].getCore().getDeposittorewardingfund()
            ),
            claimFromRewardingFund: GetActionsRequest.fromClaimFromRewardingFund(
              rawActions[i].getCore().getClaimfromrewardingfund()
            ),
            grantReward: GetActionsRequest.fromGrantReward(
              rawActions[i].getCore().getGrantreward()
            )
          };
        }
        parsedActions[i] = {
          core: actionCore,
          senderPubKey: rawActions[i].getSenderpubkey(),
          signature: rawActions[i].getSignature()
        };
      }
      res.actions = parsedActions;
    }
    return res;
  }
};

// Properties of a SuggestGasPrice Request.
export interface ISuggestGasPriceRequest {}

// Properties of a SuggestGasPriceResponse.
export interface ISuggestGasPriceResponse {
  // SuggestGasPriceResponse gasPrice
  gasPrice: number;
}

export const SuggestGasPriceRequest = {
  // @ts-ignore
  to(req: ISuggestGasPriceRequest): any {
    return new apiPb.SuggestGasPriceRequest();
  },

  from(pbRes: any): ISuggestGasPriceResponse {
    const gasPrice = pbRes.getGasprice();
    return {
      gasPrice
    };
  }
};

// Properties of a GetReceiptByActionRequest.
export interface IGetReceiptByActionRequest {
  // GetReceiptByActionRequest actionHash
  actionHash: string;
}

// Properties of an Log.
export interface ILog {
  // Log address
  address: string;

  // Log topics
  topics: Array<Uint8Array>;

  // Log data
  data: Uint8Array;

  // Log blockNumber
  blockNumber: number;

  // Log txnHash
  txnHash: Uint8Array;

  // Log index
  index: number;
}

// Properties of an Receipt.
export interface IReceipt {
  // Receipt returnValue
  returnValue: Uint8Array;

  // Receipt status
  status: number;

  // Receipt actHash
  actHash: Uint8Array;

  // Receipt gasConsumed
  gasConsumed: number;

  // Receipt contractAddress
  contractAddress: string;

  // Receipt logs
  logs: Array<ILog>;
}

// Properties of a GetReceiptByActionResponse.
export interface IGetReceiptByActionResponse {
  // GetReceiptByActionResponse receipt
  receipt: IReceipt;
}

export const GetReceiptByActionRequest = {
  to(req: IGetReceiptByActionRequest): any {
    const pbReq = new apiPb.GetReceiptByActionRequest();
    if (req.actionHash) {
      pbReq.setActionhash(req.actionHash);
    }
    return pbReq;
  },

  from(pbRes: any): IGetReceiptByActionResponse {
    const receiptData = pbRes.getReceiptByAction();
    const res = {
      receipt: receiptData
    };
    if (receiptData) {
      const logsData = receiptData.getLogs();
      res.receipt = {
        returnValue: receiptData.getReturnValue(),
        status: receiptData.getStatus(),
        actHash: receiptData.getActHash(),
        gasConsumed: receiptData.getGasConsumed(),
        contractAddress: receiptData.getContractAddress(),
        logs: logsData
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
            index: logsData[i].getIndex()
          };
        }
        res.receipt.logs = parsedLogsData;
      }
    }
    return res;
  }
};

// Properties of a ReadContractRequest.
export interface IReadContractRequest {
  // ReadContractRequest action
  action: IAction;
}

// Properties of a ReadContractResponse.
export interface IReadContractResponse {
  data: string;
}

export const ReadContractRequest = {
  to(req: IReadContractRequest): any {
    const pbReq = new apiPb.ReadContractRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  },

  from(pbRes: any): IReadContractResponse {
    const data = pbRes.getData();
    return {
      data
    };
  }
};

// Properties of a SendActionRequest.
export interface ISendActionRequest {
  // SendActionRequest action
  action: IAction;
}

// Properties of a SendActionResponse.
export interface ISendActionResponse {}

export const SendActionRequest = {
  to(req: ISendActionRequest): any {
    const pbReq = new apiPb.SendActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  },

  // TODO: to be implemented
  // tslint:disable-next-line
  from(_: any): ISendActionResponse {
    return {};
  }
};

// Properties of a EstimateGasForActionRequest.
export interface IEstimateGasForActionRequest {
  action: IAction;
}

// Properties of a EstimateGasForActionResponse.
export interface IEstimateGasForActionResponse {
  gas: number;
}

export const EstimateGasForActionRequest = {
  to(req: IEstimateGasForActionRequest): any {
    const pbReq = new apiPb.EstimateGasForActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  },
  from(pbRes: any): IEstimateGasForActionResponse {
    return { gas: pbRes.getGas() };
  }
};

export interface IRpcMethod {
  getAccount(req: IGetAccountRequest): Promise<IGetAccountResponse>;

  getBlockMetas(req: IGetBlockMetasRequest): Promise<IGetBlockMetasResponse>;

  getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse>;

  getActions(req: IGetActionsRequest): Promise<IGetActionsResponse>;

  suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse>;

  getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse>;

  readContract(req: IReadContractRequest): Promise<IReadContractResponse>;

  sendAction(req: ISendActionRequest): Promise<ISendActionResponse>;

  estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse>;
}
