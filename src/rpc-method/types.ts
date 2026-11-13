/* tslint:disable:no-any */
import { EventEmitter } from "events";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import * as grpcWeb from "grpc-web";
import apiPb, {
  BlockInfo,
  GetAccountResponse,
  GetActionsResponse,
  GetLogsResponse,
  GetReceiptByActionResponse,
  GetServerMetaResponse,
  ReadStateResponse,
  Topics
} from "../../protogen/proto/api/api_pb";
import {
  PaginationParam,
  ReadStakingDataMethod,
  ReadStakingDataRequest
} from "../../protogen/proto/api/read_state_pb";
import actionPb, {
  Execution,
  Log,
  PutPollResult,
  Receipt
} from "../../protogen/proto/types/action_pb";
import {
  Block,
  BlockBody,
  BlockFooter,
  BlockHeader,
  BlockHeaderCore
} from "../../protogen/proto/types/blockchain_pb";
import { Endorsement } from "../../protogen/proto/types/endorsement_pb";
import { fromEvmChainId, toEvmChainId } from "../action/typed-tx";

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

  // AccountMeta nonce. Type is string in node but number in browser.
  nonce: string | number;

  // AccountMeta pendingNonce. Type is string in node but number in browser.
  pendingNonce: string | number;

  // AccountMeta numActions related to the account. Type is string in node but number in browser.
  numActions: string | number;
}

// Properties of a GetAccountResponse.
export interface IGetAccountResponse {
  // GetAccountResponse accountMeta
  accountMeta: IAccountMeta | undefined;
}

export const GetAccountRequest = {
  to(req: IGetAccountRequest): any {
    const pbReq = new apiPb.GetAccountRequest();
    pbReq.setAddress(req.address);
    return pbReq;
  },

  from(pbRes: GetAccountResponse): IGetAccountResponse {
    const meta = pbRes.getAccountmeta();
    if (!meta) {
      return {
        accountMeta: undefined
      };
    }

    return {
      accountMeta: {
        address: meta.getAddress(),
        balance: meta.getBalance(),
        nonce: meta.getNonce(),
        pendingNonce: meta.getPendingnonce(),
        numActions: meta.getNumactions()
      }
    };
  }
};

// interface for get chain meta
export interface IEpochData {
  num: number;
  height: number;
  gravityChainStartHeight: number | string;
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
      const epochData = meta.getEpoch();
      res.chainMeta = {
        height: meta.getHeight(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        epoch: {
          num: epochData && epochData.getNum(),
          height: epochData && epochData.getHeight(),
          gravityChainStartHeight:
            epochData && epochData.getGravitychainstartheight()
        }
      };
    }
    return res;
  }
};

// interface for get server metas
export interface IServerMeta {
  packageVersion: string;
  packageCommitID: string;
  gitStatus: string;
  goVersion: string;
  buildTime: string;
}

export interface IGetServerMetaRequest {}

export interface IGetServerMetaResponse {
  serverMeta: IServerMeta | undefined;
}
// @ts-ignore
export const GetServerMetaRequest = {
  // @ts-ignore
  to(req: IGetServerMetaRequest): apiPb.GetServerMetaRequest {
    return new apiPb.GetServerMetaRequest();
  },

  from(pbRes: GetServerMetaResponse): IGetServerMetaResponse {
    const meta = pbRes.getServermeta();
    if (!meta) {
      return {
        serverMeta: undefined
      };
    }

    return {
      serverMeta: {
        packageVersion: meta.getPackageversion(),
        packageCommitID: meta.getPackagecommitid(),
        gitStatus: meta.getGitstatus(),
        goVersion: meta.getGoversion(),
        buildTime: meta.getBuildtime()
      }
    };
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
  byIndex?: IGetBlockMetasByIndexRequest;

  // GetBlockMetasRequest byHash
  byHash?: IGetBlockMetasByHashRequest;
}

// Properties of an blockMeta.
export interface IBlockMeta {
  // BlockMeta hash
  hash: string;

  // BlockMeta height
  height: number;

  // BlockMeta timestamp
  timestamp: ITimestamp;

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
  total: number;
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
      blkMetas: metas,
      total: pbRes.getTotal()
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

  // GetActionsByHashRequest checkPending
  checkPending: boolean;
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
  byIndex?: IGetActionsByIndexRequest;

  // GetActionsRequest byHash
  byHash?: IGetActionsByHashRequest;

  // GetActionsRequest byAddr
  byAddr?: IGetActionsByAddressRequest;

  // GetUnconfirmedActionsByAddressRequest unconfirmedByAddr
  unconfirmedByAddr?: IGetUnconfirmedActionsByAddressRequest;

  // GetActionsByBlockRequest byBlk
  byBlk?: IGetActionsByBlockRequest;
}

// Properties of a Transfer.
export interface ITransfer {
  // Transfer amount
  amount: string;

  // Transfer recipient
  recipient: string;

  // Transfer payload
  payload: Buffer | string;
}

// Properties of a Execution.
export interface IExecution {
  // Execution amount
  amount: string;

  // Execution contract
  contract: string;

  // Execution data
  data: Buffer | string;
}

// create stake
export interface IStakeCreate {
  candidateName: string;
  stakedAmount: string;
  stakedDuration: number;
  autoStake: boolean;
  payload: Buffer | string;
}

// unstake or withdraw
export interface IStakeReclaim {
  bucketIndex: number;
  payload: Buffer | string;
}

// add the amount of bucket
export interface IStakeAddDeposit {
  bucketIndex: number;
  amount: string;
  payload: Buffer | string;
}

// restake the duration and autoStake flag of bucket
export interface IStakeRestake {
  bucketIndex: number;
  stakedDuration: number;
  autoStake: boolean;
  payload: Buffer | string;
}

// move the bucket to vote for another candidate or transfer the ownership of bucket to another voters
export interface IStakeChangeCandidate {
  bucketIndex: number;
  candidateName: string;
  payload: Buffer | string;
}

export interface IStakeTransferOwnership {
  bucketIndex: number;
  voterAddress: string;
  payload: Buffer | string;
}

export interface ICandidateBasicInfo {
  name: string;
  operatorAddress: string;
  rewardAddress: string;
  // BLS12-381 public key of the candidate (IIP-52), optional
  blsPubKey?: Uint8Array | Buffer;
  // BLS proof-of-possession: 96-byte BLS signature over the domain-separated
  // hash of blsPubKey and the owner address. Required by the node (post
  // EnforceBLSPoP fork) whenever blsPubKey is introduced or rotated.
  blsPop?: Uint8Array | Buffer;
}

export interface ICandidateRegister {
  candidate: ICandidateBasicInfo;
  stakedAmount: string;
  stakedDuration: number;
  autoStake: boolean;
  ownerAddress: string;
  payload: Buffer | string;
}

// activate the candidate with a self-stake bucket
export interface ICandidateActivate {
  bucketIndex: number;
}

// CandidateEndorsementOp mirrors iotex-core action.CandidateEndorsementOp
export enum CandidateEndorsementOp {
  // LEGACY uses the deprecated `endorse` bool field
  LEGACY = 0,
  ENDORSE = 1,
  INTENT_TO_REVOKE = 2,
  REVOKE = 3
}

export interface ICandidateEndorsement {
  bucketIndex: number;
  // deprecated, only meaningful when op is LEGACY
  endorse?: boolean;
  op: CandidateEndorsementOp | number;
}

export interface ICandidateTransferOwnership {
  newOwnerAddress: string;
  payload: Buffer | string;
}

// CandidateDeactivateOp mirrors iotex-core action.CandidateDeactivateOp.
// NOTE: the values start at 1 on the wire (iota offset in iotex-core).
export enum CandidateDeactivateOp {
  REQUEST = 1,
  CONFIRM = 2
}

export interface ICandidateDeactivate {
  op: CandidateDeactivateOp | number;
}

// system action generated by block producers, decode only
export interface IScheduleCandidateDeactivation {
  delegate: string;
}

// migrate a native staking bucket to the system staking contract
export interface IStakeMigrate {
  bucketIndex: number;
}

// IIP-59: commission rate in basis points (0-10000)
export interface ISetCommissionRate {
  rate: number;
}

// IIP-59: delegate enables protocol-native voter reward distribution (one-way)
export interface ISetVoterRewardOptIn {}

// IIP-59: voter selects the account receiving direct voter reward payouts.
// recipient is the 20-byte address; empty clears the override.
export interface ISetVoterRewardDestination {
  recipient: Uint8Array | Buffer;
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
  value: Buffer;
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
  roots: Map<string, Buffer | {}>;
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
  previousTransfer: Buffer;

  // PlumStartExit previousTransferBlockProof
  previousTransferBlockProof: Buffer;

  // PlumStartExit previousTransferBlockHeight
  previousTransferBlockHeight: number;

  // PlumStartExit exitTransfer
  exitTransfer: Buffer | string;

  // PlumStartExit exitTransferBlockProof
  exitTransferBlockProof: Buffer | string;

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
  challengeTransfer: Buffer | string;

  // PlumChallengeExit challengeTransferBlockProof
  challengeTransferBlockProof: Buffer | string;

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
  challengeTransfer: Buffer;

  // PlumResponseChallengeExit responseTransfer
  responseTransfer: Buffer;

  // PlumResponseChallengeExit responseTransferBlockProof
  responseTransferBlockProof: Buffer;

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
  denomination: Buffer;

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
  data: Buffer | string;
}

// Properties of a ClaimFromRewardingFund.
export interface IClaimFromRewardingFund {
  // ClaimFromRewardingFund amount
  amount: string;

  // ClaimFromRewardingFund data
  data: Buffer | string;

  // address to claim the reward for, empty means the sender (IIP-27)
  address?: string;
}

export interface RewardType {
  BlockReward: 0;
  EpochReward: 1;
  VoterRewardChunk: 2;
}

// Properties of a SetReward.
export interface ISetReward {
  // SetReward amount
  amount: string;

  // SetReward data
  data: Buffer | {};

  // SetReward type
  type: number;
}

// Properties of a GrantReward.
export interface IGrantReward {
  // GrantReward type
  type: number;
  height: number | string;
}

export interface ICandidate {
  address: string;
  votes: Buffer | {};
  pubKey: Buffer | {};
  rewardAddress: string;
  blsPubKey?: Buffer | {};
  identity?: string;
  // IIP-59 commission rate snapshot (basis points)
  commissionRate?: number;
}

export interface ICandidateList {
  candidates: Array<ICandidate>;
}

export interface IPutPollResult {
  height: number | string;
  candidates: ICandidateList | undefined;
}

// Properties of an iotex TxContainer (raw eth tx bytes).
export interface ITxContainer {
  raw: Uint8Array;
}

// Properties of an iotex AccessTuple (eth EIP-2930).
export interface IAccessTuple {
  address: string;
  storageKeys: Array<string>;
}

// Properties of an iotex BlobTxSidecar (eth EIP-4844).
export interface IBlobTxSidecar {
  blobs: Array<Uint8Array | Buffer>;
  commitments: Array<Uint8Array | Buffer>;
  proofs: Array<Uint8Array | Buffer>;
}

// Properties of an iotex BlobTxData (eth EIP-4844).
export interface IBlobTxData {
  blobFeeCap: string;
  blobHashes: Array<Uint8Array | Buffer>;
  blobTxSidecar?: IBlobTxSidecar;
}

// Properties of an iotex SetCodeAuthorization (eth EIP-7702).
export interface ISetCodeAuthorization {
  chainID: number;
  address: Uint8Array | Buffer;
  nonce: number | string;
  v: number | string;
  r: Uint8Array | Buffer;
  s: Uint8Array | Buffer;
}

// Properties of an ActionCore.
export interface IActionCore {
  // ActionCore version
  version: number;

  // ActionCore nonce
  nonce: string;

  // ActionCore gasLimit
  gasLimit: string;

  // ActionCore gasPrice
  gasPrice: string;

  // ActionCore chainID
  chainID: number;

  // Eth typed-tx fields. Present only when the action is signed as TX_CONTAINER.
  txType?: number;
  gasTipCap?: string;
  gasFeeCap?: string;
  accessList?: Array<IAccessTuple>;
  blobTxData?: IBlobTxData;
  setCodeAuthList?: Array<ISetCodeAuthorization>;

  // Action detail fields
  // ActionCore transfer
  transfer?: ITransfer | undefined;
  // ActionCore execution
  execution?: IExecution | undefined;
  // ActionCore txContainer (raw signed eth tx bytes, used with Encoding=TX_CONTAINER)
  txContainer?: ITxContainer | undefined;

  // FedChain
  // ActionCore startSubChain
  startSubChain?: IStartSubChain | undefined;
  // ActionCore stopSubChain
  stopSubChain?: IStopSubChain | undefined;
  // ActionCore putBlock
  putBlock?: IPutBlock | undefined;
  // ActionCore createDeposit
  createDeposit?: ICreateDeposit | undefined;
  // ActionCore settleDeposit
  settleDeposit?: ISettleDeposit | undefined;

  // PlumChain
  // ActionCore createPlumChain
  createPlumChain?: ICreatePlumChain | undefined;
  // ActionCore terminatePlumChain
  terminatePlumChain?: ITerminatePlumChain | undefined;
  // ActionCore plumPutBlock
  plumPutBlock?: IPlumPutBlock | undefined;
  // ActionCore plumCreateDeposit
  plumCreateDeposit?: IPlumCreateDeposit | undefined;
  // ActionCore plumStartExit
  plumStartExit?: IPlumStartExit | undefined;
  // ActionCore plumChallengeExit
  plumChallengeExit?: IPlumChallengeExit | undefined;
  // ActionCore plumResponseChallengeExit
  plumResponseChallengeExit?: IPlumResponseChallengeExit | undefined;
  // ActionCore plumFinalizeExit
  plumFinalizeExit?: IPlumFinalizeExit | undefined;
  // ActionCore plumSettleDeposit
  plumSettleDeposit?: IPlumSettleDeposit | undefined;
  // ActionCore plumTransfer
  plumTransfer?: IPlumTransfer | undefined;

  // Rewarding protocol actions
  // ActionCore depositToRewardingFund
  depositToRewardingFund?: IDepositToRewardingFund | undefined;
  // ActionCore claimFromRewardingFund
  claimFromRewardingFund?: IClaimFromRewardingFund | undefined;
  // ActionCore grantReward
  grantReward?: IGrantReward | undefined;

  // Native staking
  stakeCreate?: IStakeCreate | undefined;
  stakeUnstake?: IStakeReclaim | undefined;
  stakeWithdraw?: IStakeReclaim | undefined;
  stakeAddDeposit?: IStakeAddDeposit | undefined;
  stakeRestake?: IStakeRestake | undefined;
  stakeChangeCandidate?: IStakeChangeCandidate | undefined;
  stakeTransferOwnership?: IStakeTransferOwnership | undefined;
  candidateRegister?: ICandidateRegister | undefined;
  candidateUpdate?: ICandidateBasicInfo | undefined;
  candidateActivate?: ICandidateActivate | undefined;
  candidateEndorsement?: ICandidateEndorsement | undefined;
  candidateTransferOwnership?: ICandidateTransferOwnership | undefined;
  stakeMigrate?: IStakeMigrate | undefined;
  candidateDeactivate?: ICandidateDeactivate | undefined;
  scheduleCandidateDeactivation?: IScheduleCandidateDeactivation | undefined;
  setCommissionRate?: ISetCommissionRate | undefined;
  setVoterRewardOptIn?: ISetVoterRewardOptIn | undefined;
  setVoterRewardDestination?: ISetVoterRewardDestination | undefined;

  putPollResult?: IPutPollResult | undefined;
}

// Encoding mirrors iotextypes.Encoding. Defaults to IOTEX_PROTOBUF=0 when
// omitted, which is the historical wire format.
export enum IActionEncoding {
  IOTEX_PROTOBUF = 0,
  ETHEREUM_EIP155 = 1,
  ETHEREUM_RLP = 1,
  ETHEREUM_UNPROTECTED = 2,
  TX_CONTAINER = 128
}

// Properties of an Action.
export interface IAction {
  // Action core
  core: IActionCore | undefined;

  // Action senderPubkey
  senderPubKey: Uint8Array | string;

  // Action signature
  signature: Uint8Array | string;

  // Action encoding. Optional for backwards compatibility (defaults to IOTEX_PROTOBUF).
  encoding?: IActionEncoding | number;
}

// read state
export interface IPaginationParam {
  offset: number;
  limit: number;
}

export enum IReadStakingDataMethodName {
  INVALID = 0,
  BUCKETS = 1,
  BUCKETS_BY_VOTER = 2,
  BUCKETS_BY_CANDIDATE = 3,
  CANDIDATES = 4,
  CANDIDATE_BY_NAME = 5,
  BUCKETS_BY_INDEXES = 6,
  CANDIDATE_BY_ADDRESS = 7,
  TOTAL_STAKING_AMOUNT = 8,
  BUCKETS_COUNT = 9,
  // composite = native staking + contract staking (system staking contracts)
  COMPOSITE_BUCKETS = 20,
  COMPOSITE_BUCKETS_BY_VOTER = 21,
  COMPOSITE_BUCKETS_BY_CANDIDATE = 22,
  COMPOSITE_BUCKETS_BY_INDEXES = 23,
  COMPOSITE_BUCKETS_COUNT = 24,
  COMPOSITE_TOTAL_STAKING_AMOUNT = 25,
  CONTRACT_STAKING_BUCKET_TYPES = 26
}

export interface IReadStakingDataMethod {
  method: IReadStakingDataMethodName;
}

export interface IReadStakingDataRequestVoteBuckets {
  pagination: IPaginationParam;
}

export interface IReadStakingDataRequestVoteBucketsByVoter {
  voterAddress: string;
  pagination: IPaginationParam;
}

export interface IReadStakingDataRequestVoteBucketsByCandidate {
  candName: string;
  pagination: IPaginationParam;
}

export interface IReadStakingDataRequestCandidates {
  candName: string;
  pagination: IPaginationParam;
}

export interface IReadStakingDataRequestCandidateByName {
  candName: string;
}

export interface IReadStakingDataRequestCandidateByAddress {
  ownerAddr: string;
  // candidate identity, used to look up a candidate after owner transfer
  id?: string;
}

export interface IReadStakingDataRequestVoteBucketsByIndexes {
  index: Array<number>;
}

export interface IReadStakingDataRequestTotalStakingAmount {}

export interface IReadStakingDataRequestBucketsCount {}

export interface IReadStakingDataRequestContractStakingBucketTypes {
  contractAddress: string;
}

export interface IReadStakingDataRequest {
  buckets?: IReadStakingDataRequestVoteBuckets;
  bucketsByVoter?: IReadStakingDataRequestVoteBucketsByVoter;
  bucketsByCandidate?: IReadStakingDataRequestVoteBucketsByCandidate;
  bucketsByIndexes?: IReadStakingDataRequestVoteBucketsByIndexes;
  candidates?: IReadStakingDataRequestCandidates;
  candidateByName?: IReadStakingDataRequestCandidateByName;
  candidateByAddress?: IReadStakingDataRequestCandidateByAddress;
  totalStakingAmount?: IReadStakingDataRequestTotalStakingAmount;
  bucketsCount?: IReadStakingDataRequestBucketsCount;
  contractStakingBucketTypes?: IReadStakingDataRequestContractStakingBucketTypes;
}

export function toActionTransfer(req: ITransfer | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbTransfer = new actionPb.Transfer();
  pbTransfer.setAmount(req.amount);
  pbTransfer.setRecipient(req.recipient);
  pbTransfer.setPayload(req.payload);
  return pbTransfer;
}

export function toTimestamp(timestamp: ITimestamp): Timestamp {
  const ts = new Timestamp();
  if (timestamp) {
    ts.setSeconds(timestamp.seconds);
    ts.setNanos(timestamp.nanos);
  }
  return ts;
}

export function toActionExecution(
  req: IExecution | undefined
): actionPb.Execution | undefined {
  if (!req) {
    return undefined;
  }
  const pbExecution = new actionPb.Execution();
  pbExecution.setAmount(req.amount);
  pbExecution.setContract(req.contract);
  pbExecution.setData(req.data);
  return pbExecution;
}

export function toActionStartSubChain(req: IStartSubChain | undefined): any {
  if (!req) {
    return undefined;
  }

  const pbStartSubChain = new actionPb.StartSubChain();
  pbStartSubChain.setChainid(req.chainID);
  pbStartSubChain.setSecuritydeposit(req.securityDeposit);
  pbStartSubChain.setOperationdeposit(req.operationDeposit);
  pbStartSubChain.setStartheight(req.startHeight);
  pbStartSubChain.setParentheightoffset(req.parentHeightOffset);
  return pbStartSubChain;
}

export function toActionStopSubChain(req: IStopSubChain | undefined): any {
  if (!req) {
    return undefined;
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

export function toActionPutBlock(req: IPutBlock | undefined): any {
  if (!req) {
    return undefined;
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

export function toActionCreateDeposit(req: ICreateDeposit | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbCreateDeposit = new actionPb.CreateDeposit();
  pbCreateDeposit.setChainid(req.chainID);
  pbCreateDeposit.setAmount(req.amount);
  pbCreateDeposit.setRecipient(req.recipient);
  return pbCreateDeposit;
}

export function toActionSettleDeposit(req: ISettleDeposit | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbSettleDeposit = new actionPb.SettleDeposit();
  pbSettleDeposit.setAmount(req.amount);
  pbSettleDeposit.setRecipient(req.recipient);
  pbSettleDeposit.setIndex(req.index);
  return pbSettleDeposit;
}

export function toActionCreatePlumChain(
  req: ICreatePlumChain | undefined
): any {
  if (!req) {
    return undefined;
  }
  return new actionPb.CreatePlumChain();
}

export function toActionTerminatePlumChain(
  req: ITerminatePlumChain | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbTerminatePlumChain = new actionPb.TerminatePlumChain();
  pbTerminatePlumChain.setSubchainaddress(req.subChainAddress);
  return pbTerminatePlumChain;
}

export function toActionPlumPutBlock(req: IPlumPutBlock | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbPlumPutBlock = new actionPb.PlumPutBlock();
  pbPlumPutBlock.setSubchainaddress(req.subChainAddress);
  pbPlumPutBlock.setHeight(req.height);
  return pbPlumPutBlock;
}

export function toActionPlumCreateDeposit(
  req: IPlumCreateDeposit | undefined
): any {
  if (!req) {
    return undefined;
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

export function toActionPlumStartExit(req: IPlumStartExit | undefined): any {
  if (!req) {
    return undefined;
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

export function toActionPlumChallengeExit(
  req: IPlumChallengeExit | undefined
): any {
  if (!req) {
    return undefined;
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
  req: IPlumResponseChallengeExit | undefined
): any {
  if (!req) {
    return undefined;
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

export function toActionPlumFinalizeExit(
  req: IPlumFinalizeExit | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbPlumFinalizeExit = new actionPb.PlumFinalizeExit();
  pbPlumFinalizeExit.setSubchainaddress(req.subChainAddress);
  pbPlumFinalizeExit.setCoinid(req.coinID);
  return pbPlumFinalizeExit;
}

export function toActionPlumSettleDeposit(
  req: IPlumSettleDeposit | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbPlumSettleDeposit = new actionPb.PlumSettleDeposit();
  pbPlumSettleDeposit.setCoinid(req.coinID);
  return pbPlumSettleDeposit;
}

export function toActionPlumTransfer(req: IPlumTransfer | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbPlumTransfer = new actionPb.PlumTransfer();
  pbPlumTransfer.setCoinid(req.coinID);
  pbPlumTransfer.setDenomination(req.denomination);
  pbPlumTransfer.setOwner(req.owner);
  pbPlumTransfer.setRecipient(req.recipient);
  return pbPlumTransfer;
}

export function toActionDepositToRewardingFund(
  req: IDepositToRewardingFund | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbDepositToRewardingFund = new actionPb.DepositToRewardingFund();
  pbDepositToRewardingFund.setAmount(req.amount);
  pbDepositToRewardingFund.setData(req.data);
  return pbDepositToRewardingFund;
}

export function toActionClaimFromRewardingFund(
  req: IClaimFromRewardingFund | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbClaimFromRewardingFund = new actionPb.ClaimFromRewardingFund();
  pbClaimFromRewardingFund.setAmount(req.amount);
  pbClaimFromRewardingFund.setData(req.data);
  if (req.address) {
    pbClaimFromRewardingFund.setAddress(req.address);
  }
  return pbClaimFromRewardingFund;
}

export function toActionGrantReward(req: IGrantReward | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbGrantReward = new actionPb.GrantReward();
  pbGrantReward.setType(req.type);
  if (req.height !== undefined) {
    pbGrantReward.setHeight(Number(req.height));
  }
  return pbGrantReward;
}

export function toActionStakeCreate(req: IStakeCreate | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbStakeCreate = new actionPb.StakeCreate();
  pbStakeCreate.setCandidatename(req.candidateName);
  pbStakeCreate.setStakedamount(req.stakedAmount);
  pbStakeCreate.setStakedduration(req.stakedDuration);
  pbStakeCreate.setAutostake(req.autoStake);
  pbStakeCreate.setPayload(req.payload);
  return pbStakeCreate;
}

export function toActionStakeReclaim(req: IStakeReclaim | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbStakeReclaim = new actionPb.StakeReclaim();
  pbStakeReclaim.setBucketindex(req.bucketIndex);
  pbStakeReclaim.setPayload(req.payload);
  return pbStakeReclaim;
}

export function toActionStakeAddDeposit(
  req: IStakeAddDeposit | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbStakeAddDeposit = new actionPb.StakeAddDeposit();
  pbStakeAddDeposit.setBucketindex(req.bucketIndex);
  pbStakeAddDeposit.setAmount(req.amount);
  pbStakeAddDeposit.setPayload(req.payload);
  return pbStakeAddDeposit;
}

export function toActionStakeRestake(req: IStakeRestake | undefined): any {
  if (!req) {
    return undefined;
  }
  const pbStakeRestake = new actionPb.StakeRestake();
  pbStakeRestake.setBucketindex(req.bucketIndex);
  pbStakeRestake.setStakedduration(req.stakedDuration);
  pbStakeRestake.setAutostake(req.autoStake);
  pbStakeRestake.setPayload(req.payload);
  return pbStakeRestake;
}

export function toActionStakeChangeCandidate(
  req: IStakeChangeCandidate | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbStakeChangeCandidate = new actionPb.StakeChangeCandidate();
  pbStakeChangeCandidate.setBucketindex(req.bucketIndex);
  pbStakeChangeCandidate.setCandidatename(req.candidateName);
  pbStakeChangeCandidate.setPayload(req.payload);
  return pbStakeChangeCandidate;
}

export function toActionStakeTransferOwnership(
  req: IStakeTransferOwnership | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbStakeTransferOwnership = new actionPb.StakeTransferOwnership();
  pbStakeTransferOwnership.setBucketindex(req.bucketIndex);
  pbStakeTransferOwnership.setVoteraddress(req.voterAddress);
  pbStakeTransferOwnership.setPayload(req.payload);
  return pbStakeTransferOwnership;
}

export function toActionCandidateBasicInfo(
  req: ICandidateBasicInfo | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbCandidateBasicInfo = new actionPb.CandidateBasicInfo();
  pbCandidateBasicInfo.setName(req.name);
  pbCandidateBasicInfo.setOperatoraddress(req.operatorAddress);
  pbCandidateBasicInfo.setRewardaddress(req.rewardAddress);
  if (req.blsPubKey && req.blsPubKey.length > 0) {
    pbCandidateBasicInfo.setBlspubkey(new Uint8Array(req.blsPubKey));
  }
  if (req.blsPop && req.blsPop.length > 0) {
    pbCandidateBasicInfo.setBlspop(new Uint8Array(req.blsPop));
  }
  return pbCandidateBasicInfo;
}

export function toActionCandidateRegister(
  req: ICandidateRegister | undefined
): any {
  if (!req) {
    return undefined;
  }
  const pbCandidateRegister = new actionPb.CandidateRegister();
  pbCandidateRegister.setCandidate(toActionCandidateBasicInfo(req.candidate));
  pbCandidateRegister.setStakedamount(req.stakedAmount);
  pbCandidateRegister.setStakedduration(req.stakedDuration);
  pbCandidateRegister.setAutostake(req.autoStake);
  pbCandidateRegister.setOwneraddress(req.ownerAddress);
  pbCandidateRegister.setPayload(req.payload);
  return pbCandidateRegister;
}

export function toActionCandidateActivate(
  req: ICandidateActivate | undefined
): actionPb.CandidateActivate | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.CandidateActivate();
  pb.setBucketindex(req.bucketIndex);
  return pb;
}

export function toActionCandidateEndorsement(
  req: ICandidateEndorsement | undefined
): actionPb.CandidateEndorsement | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.CandidateEndorsement();
  pb.setBucketindex(req.bucketIndex);
  pb.setOp(Number(req.op));
  if (req.endorse !== undefined) {
    pb.setEndorse(req.endorse);
  }
  return pb;
}

export function toActionCandidateTransferOwnership(
  req: ICandidateTransferOwnership | undefined
): actionPb.CandidateTransferOwnership | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.CandidateTransferOwnership();
  pb.setNewowneraddress(req.newOwnerAddress);
  if (req.payload) {
    pb.setPayload(req.payload);
  }
  return pb;
}

export function toActionStakeMigrate(
  req: IStakeMigrate | undefined
): actionPb.StakeMigrate | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.StakeMigrate();
  pb.setBucketindex(req.bucketIndex);
  return pb;
}

export function toActionCandidateDeactivate(
  req: ICandidateDeactivate | undefined
): actionPb.CandidateDeactivate | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.CandidateDeactivate();
  pb.setOp(Number(req.op));
  return pb;
}

export function toActionScheduleCandidateDeactivation(
  req: IScheduleCandidateDeactivation | undefined
): actionPb.ScheduleCandidateDeactivation | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.ScheduleCandidateDeactivation();
  pb.setDelegate(req.delegate);
  return pb;
}

export function toActionSetCommissionRate(
  req: ISetCommissionRate | undefined
): actionPb.SetCommissionRate | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.SetCommissionRate();
  pb.setRate(req.rate);
  return pb;
}

export function toActionSetVoterRewardOptIn(
  req: ISetVoterRewardOptIn | undefined
): actionPb.SetVoterRewardOptIn | undefined {
  if (!req) {
    return undefined;
  }
  return new actionPb.SetVoterRewardOptIn();
}

export function toActionSetVoterRewardDestination(
  req: ISetVoterRewardDestination | undefined
): actionPb.SetVoterRewardDestination | undefined {
  if (!req) {
    return undefined;
  }
  const pb = new actionPb.SetVoterRewardDestination();
  if (req.recipient && req.recipient.length > 0) {
    pb.setRecipient(new Uint8Array(req.recipient));
  }
  return pb;
}

type PayloadSetter = (pb: actionPb.ActionCore, value: any) => void;

// ACTION_PAYLOAD_SETTERS lists every `oneof action` body of ActionCore the SDK
// can encode, in priority order. Only the first body present is written.
const ACTION_PAYLOAD_SETTERS: Array<[keyof IActionCore, PayloadSetter]> = [
  ["transfer", (pb, v) => pb.setTransfer(toActionTransfer(v))],
  ["execution", (pb, v) => pb.setExecution(toActionExecution(v))],
  ["startSubChain", (pb, v) => pb.setStartsubchain(toActionStartSubChain(v))],
  ["stopSubChain", (pb, v) => pb.setStopsubchain(toActionStopSubChain(v))],
  ["putBlock", (pb, v) => pb.setPutblock(toActionPutBlock(v))],
  ["createDeposit", (pb, v) => pb.setCreatedeposit(toActionCreateDeposit(v))],
  ["settleDeposit", (pb, v) => pb.setSettledeposit(toActionSettleDeposit(v))],
  [
    "createPlumChain",
    (pb, v) => pb.setCreateplumchain(toActionCreatePlumChain(v))
  ],
  [
    "terminatePlumChain",
    (pb, v) => pb.setTerminateplumchain(toActionTerminatePlumChain(v))
  ],
  ["plumPutBlock", (pb, v) => pb.setPlumputblock(toActionPlumPutBlock(v))],
  [
    "plumCreateDeposit",
    (pb, v) => pb.setPlumcreatedeposit(toActionPlumCreateDeposit(v))
  ],
  ["plumStartExit", (pb, v) => pb.setPlumstartexit(toActionPlumStartExit(v))],
  [
    "plumChallengeExit",
    (pb, v) => pb.setPlumchallengeexit(toActionPlumChallengeExit(v))
  ],
  [
    "plumResponseChallengeExit",
    (pb, v) =>
      pb.setPlumresponsechallengeexit(toActionPlumResponseChallengeExit(v))
  ],
  [
    "plumFinalizeExit",
    (pb, v) => pb.setPlumfinalizeexit(toActionPlumFinalizeExit(v))
  ],
  [
    "plumSettleDeposit",
    (pb, v) => pb.setPlumsettledeposit(toActionPlumSettleDeposit(v))
  ],
  ["plumTransfer", (pb, v) => pb.setPlumtransfer(toActionPlumTransfer(v))],
  [
    "depositToRewardingFund",
    (pb, v) => pb.setDeposittorewardingfund(toActionDepositToRewardingFund(v))
  ],
  [
    "claimFromRewardingFund",
    (pb, v) => pb.setClaimfromrewardingfund(toActionClaimFromRewardingFund(v))
  ],
  ["grantReward", (pb, v) => pb.setGrantreward(toActionGrantReward(v))],
  ["stakeCreate", (pb, v) => pb.setStakecreate(toActionStakeCreate(v))],
  ["stakeUnstake", (pb, v) => pb.setStakeunstake(toActionStakeReclaim(v))],
  ["stakeWithdraw", (pb, v) => pb.setStakewithdraw(toActionStakeReclaim(v))],
  [
    "stakeAddDeposit",
    (pb, v) => pb.setStakeadddeposit(toActionStakeAddDeposit(v))
  ],
  ["stakeRestake", (pb, v) => pb.setStakerestake(toActionStakeRestake(v))],
  [
    "stakeChangeCandidate",
    (pb, v) => pb.setStakechangecandidate(toActionStakeChangeCandidate(v))
  ],
  [
    "stakeTransferOwnership",
    (pb, v) => pb.setStaketransferownership(toActionStakeTransferOwnership(v))
  ],
  [
    "candidateRegister",
    (pb, v) => pb.setCandidateregister(toActionCandidateRegister(v))
  ],
  [
    "candidateUpdate",
    (pb, v) => pb.setCandidateupdate(toActionCandidateBasicInfo(v))
  ],
  [
    "candidateActivate",
    (pb, v) => pb.setCandidateactivate(toActionCandidateActivate(v))
  ],
  [
    "candidateEndorsement",
    (pb, v) => pb.setCandidateendorsement(toActionCandidateEndorsement(v))
  ],
  [
    "candidateTransferOwnership",
    (pb, v) =>
      pb.setCandidatetransferownership(toActionCandidateTransferOwnership(v))
  ],
  ["stakeMigrate", (pb, v) => pb.setStakemigrate(toActionStakeMigrate(v))],
  [
    "candidateDeactivate",
    (pb, v) => pb.setCandidatedeactivate(toActionCandidateDeactivate(v))
  ],
  [
    "scheduleCandidateDeactivation",
    (pb, v) =>
      pb.setSchedulecandidatedeactivation(
        toActionScheduleCandidateDeactivation(v)
      )
  ],
  [
    "setCommissionRate",
    (pb, v) => pb.setSetcommissionrate(toActionSetCommissionRate(v))
  ],
  [
    "setVoterRewardOptIn",
    (pb, v) => pb.setSetvoterrewardoptin(toActionSetVoterRewardOptIn(v))
  ],
  [
    "setVoterRewardDestination",
    (pb, v) =>
      pb.setSetvoterrewarddestination(toActionSetVoterRewardDestination(v))
  ]
];

// fillActionCorePayload writes the action body (the `oneof action` of
// ActionCore) from src onto pb. Only the first body present is written.
export function fillActionCorePayload(
  pb: actionPb.ActionCore,
  src: Partial<IActionCore>
): void {
  for (const [key, set] of ACTION_PAYLOAD_SETTERS) {
    const value = src[key];
    if (value) {
      set(pb, value);
      return;
    }
  }
}

function toActionAccessList(
  list: Array<IAccessTuple> | undefined
): Array<actionPb.AccessTuple> {
  if (!list || list.length === 0) {
    return [];
  }
  return list.map(at => {
    const pb = new actionPb.AccessTuple();
    pb.setAddress(at.address);
    pb.setStoragekeysList(at.storageKeys);
    return pb;
  });
}

function toActionBlobTxData(
  d: IBlobTxData | undefined
): actionPb.BlobTxData | undefined {
  if (!d) {
    return undefined;
  }
  const pb = new actionPb.BlobTxData();
  pb.setBlobfeecap(d.blobFeeCap);
  pb.setBlobhashesList(d.blobHashes.map(h => new Uint8Array(h)));
  if (d.blobTxSidecar) {
    const sc = new actionPb.BlobTxSidecar();
    sc.setBlobsList(d.blobTxSidecar.blobs.map(b => new Uint8Array(b)));
    sc.setCommitmentsList(
      d.blobTxSidecar.commitments.map(c => new Uint8Array(c))
    );
    sc.setProofsList(d.blobTxSidecar.proofs.map(p => new Uint8Array(p)));
    pb.setBlobtxsidecar(sc);
  }
  return pb;
}

function toActionSetCodeAuthList(
  list: Array<ISetCodeAuthorization> | undefined
): Array<actionPb.SetCodeAuthorization> {
  if (!list || list.length === 0) {
    return [];
  }
  return list.map(a => {
    const pb = new actionPb.SetCodeAuthorization();
    pb.setChainid(toEvmChainId(a.chainID));
    pb.setAddress(new Uint8Array(a.address));
    pb.setNonce(Number(a.nonce));
    pb.setV(Number(a.v));
    pb.setR(new Uint8Array(a.r));
    pb.setS(new Uint8Array(a.s));
    return pb;
  });
}

export function toAction(req: IAction): any {
  const pbActionCore = new actionPb.ActionCore();

  const core = req && req.core;
  if (core) {
    pbActionCore.setVersion(core.version);
    pbActionCore.setNonce(Number(core.nonce));
    pbActionCore.setGaslimit(Number(core.gasLimit));
    pbActionCore.setGasprice(core.gasPrice);
    pbActionCore.setChainid(core.chainID);
    if (core.txType !== undefined) {
      pbActionCore.setTxtype(core.txType);
    }
    if (core.gasTipCap !== undefined) {
      pbActionCore.setGastipcap(core.gasTipCap);
    }
    if (core.gasFeeCap !== undefined) {
      pbActionCore.setGasfeecap(core.gasFeeCap);
    }
    const accessList = toActionAccessList(core.accessList);
    if (accessList.length > 0) {
      pbActionCore.setAccesslistList(accessList);
    }
    const blob = toActionBlobTxData(core.blobTxData);
    if (blob) {
      pbActionCore.setBlobtxdata(blob);
    }
    const authList = toActionSetCodeAuthList(core.setCodeAuthList);
    if (authList.length > 0) {
      pbActionCore.setSetcodeauthlistList(authList);
    }
    // When the action body is a TX_CONTAINER (raw signed eth tx), it lives in
    // the same `oneof action` as transfer/execution. Setting the body fields
    // afterwards would clear the txContainer, so we short-circuit and skip
    // the rest of the oneof setters.
    if (core.txContainer) {
      const tc = new actionPb.TxContainer();
      tc.setRaw(core.txContainer.raw);
      pbActionCore.setTxcontainer(tc);
    } else {
      fillActionCorePayload(pbActionCore, core);
    }
  }

  const pbAction = new actionPb.Action();
  pbAction.setCore(pbActionCore);

  if (req.senderPubKey) {
    pbAction.setSenderpubkey(req.senderPubKey);
  }

  if (req.signature) {
    pbAction.setSignature(req.signature);
  }

  if (req.encoding !== undefined) {
    pbAction.setEncoding(req.encoding);
  }

  return pbAction;
}

export interface IActionInfo {
  action: IAction;
  actHash: string;
  blkHash: string;
  timestamp: ITimestamp;
}

export interface IGetActionsResponse {
  actionInfo: Array<IActionInfo>;
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
    if (byHash.checkPending) {
      pbReqByHash.setCheckpending(byHash.checkPending);
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

  fromExecution(pbRes: Execution | undefined): IExecution | undefined {
    if (!pbRes) {
      return;
    }
    return {
      amount: pbRes.getAmount(),
      contract: pbRes.getContract(),
      // @ts-ignore
      data: Buffer.from(pbRes.getData())
    };
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
        amount: pbRes.getAmount(),
        data: pbRes.getData()
      };
    }
    return depositToRewardingFundData;
  },

  fromClaimFromRewardingFund(pbRes: any): any {
    let claimFromRewardingFundData = pbRes;
    if (claimFromRewardingFundData) {
      claimFromRewardingFundData = {
        amount: pbRes.getAmount(),
        data: pbRes.getData(),
        address: pbRes.getAddress()
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

  fromGrantReward(
    pbRes: actionPb.GrantReward | undefined
  ): IGrantReward | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      type: pbRes.getType(),
      height: pbRes.getHeight()
    };
  },

  fromStakeCreate(
    pbRes: actionPb.StakeCreate | undefined
  ): IStakeCreate | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      candidateName: pbRes.getCandidatename(),
      stakedAmount: pbRes.getStakedamount(),
      stakedDuration: pbRes.getStakedduration(),
      autoStake: pbRes.getAutostake(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromStakeReclaim(
    pbRes: actionPb.StakeReclaim | undefined
  ): IStakeReclaim | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      bucketIndex: pbRes.getBucketindex(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromStakeAddDeposit(
    pbRes: actionPb.StakeAddDeposit | undefined
  ): IStakeAddDeposit | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      bucketIndex: pbRes.getBucketindex(),
      amount: pbRes.getAmount(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromStakeRestake(
    pbRes: actionPb.StakeRestake | undefined
  ): IStakeRestake | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      bucketIndex: pbRes.getBucketindex(),
      stakedDuration: pbRes.getStakedduration(),
      autoStake: pbRes.getAutostake(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromStakeChangeCandidate(
    pbRes: actionPb.StakeChangeCandidate | undefined
  ): IStakeChangeCandidate | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      bucketIndex: pbRes.getBucketindex(),
      candidateName: pbRes.getCandidatename(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromStakeTransferOwnership(
    pbRes: actionPb.StakeTransferOwnership | undefined
  ): IStakeTransferOwnership | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      bucketIndex: pbRes.getBucketindex(),
      voterAddress: pbRes.getVoteraddress(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromCandidateRegister(
    pbRes: actionPb.CandidateRegister | undefined
  ): ICandidateRegister | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      candidate: GetActionsRequest.fromCandidateUpdate(
        pbRes.getCandidate()
      ) as ICandidateBasicInfo,
      stakedAmount: pbRes.getStakedamount(),
      stakedDuration: pbRes.getStakedduration(),
      autoStake: pbRes.getAutostake(),
      ownerAddress: pbRes.getOwneraddress(),
      // @ts-ignore
      payload: Buffer.from(pbRes.getPayload())
    };
  },

  fromCandidateUpdate(
    pbRes: actionPb.CandidateBasicInfo | undefined
  ): ICandidateBasicInfo | undefined {
    if (!pbRes) {
      return undefined;
    }
    const res: ICandidateBasicInfo = {
      name: pbRes.getName(),
      operatorAddress: pbRes.getOperatoraddress(),
      rewardAddress: pbRes.getRewardaddress()
    };
    const blsPubKey = pbRes.getBlspubkey_asU8();
    if (blsPubKey.length > 0) {
      res.blsPubKey = Buffer.from(blsPubKey);
    }
    const blsPop = pbRes.getBlspop_asU8();
    if (blsPop.length > 0) {
      res.blsPop = Buffer.from(blsPop);
    }
    return res;
  },

  fromCandidateActivate(
    pbRes: actionPb.CandidateActivate | undefined
  ): ICandidateActivate | undefined {
    if (!pbRes) {
      return undefined;
    }
    return { bucketIndex: pbRes.getBucketindex() };
  },

  fromCandidateEndorsement(
    pbRes: actionPb.CandidateEndorsement | undefined
  ): ICandidateEndorsement | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      bucketIndex: pbRes.getBucketindex(),
      endorse: pbRes.getEndorse(),
      op: pbRes.getOp()
    };
  },

  fromCandidateTransferOwnership(
    pbRes: actionPb.CandidateTransferOwnership | undefined
  ): ICandidateTransferOwnership | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {
      newOwnerAddress: pbRes.getNewowneraddress(),
      payload: Buffer.from(pbRes.getPayload_asU8())
    };
  },

  fromStakeMigrate(
    pbRes: actionPb.StakeMigrate | undefined
  ): IStakeMigrate | undefined {
    if (!pbRes) {
      return undefined;
    }
    return { bucketIndex: pbRes.getBucketindex() };
  },

  fromCandidateDeactivate(
    pbRes: actionPb.CandidateDeactivate | undefined
  ): ICandidateDeactivate | undefined {
    if (!pbRes) {
      return undefined;
    }
    return { op: pbRes.getOp() };
  },

  fromScheduleCandidateDeactivation(
    pbRes: actionPb.ScheduleCandidateDeactivation | undefined
  ): IScheduleCandidateDeactivation | undefined {
    if (!pbRes) {
      return undefined;
    }
    return { delegate: pbRes.getDelegate() };
  },

  fromSetCommissionRate(
    pbRes: actionPb.SetCommissionRate | undefined
  ): ISetCommissionRate | undefined {
    if (!pbRes) {
      return undefined;
    }
    return { rate: pbRes.getRate() };
  },

  fromSetVoterRewardOptIn(
    pbRes: actionPb.SetVoterRewardOptIn | undefined
  ): ISetVoterRewardOptIn | undefined {
    if (!pbRes) {
      return undefined;
    }
    return {};
  },

  fromSetVoterRewardDestination(
    pbRes: actionPb.SetVoterRewardDestination | undefined
  ): ISetVoterRewardDestination | undefined {
    if (!pbRes) {
      return undefined;
    }
    return { recipient: Buffer.from(pbRes.getRecipient_asU8()) };
  },

  getPutPollResult(req: PutPollResult | undefined): IPutPollResult | undefined {
    if (!req) {
      return undefined;
    }
    let candidateList: ICandidateList | undefined;
    const rawCandidates = req.getCandidates();
    if (rawCandidates) {
      candidateList = {
        candidates: []
      };
      const rawCandidatesList = rawCandidates.getCandidatesList();
      if (rawCandidatesList) {
        for (const rawCandidate of rawCandidatesList) {
          candidateList.candidates.push({
            address: rawCandidate.getAddress(),
            votes: rawCandidate.getVotes(),
            pubKey: rawCandidate.getPubkey(),
            rewardAddress: rawCandidate.getRewardaddress(),
            blsPubKey: rawCandidate.getBlspubkey(),
            identity: rawCandidate.getIdentity(),
            commissionRate: rawCandidate.getCommissionrate()
          });
        }
      }
    }
    return {
      height: req.getHeight(),
      candidates: candidateList
    };
  },

  from(pbRes: GetActionsResponse): IGetActionsResponse {
    const res = ({
      actionInfo: []
    } as any) as IGetActionsResponse;
    const rawActionInfoList = pbRes.getActioninfoList();
    if (!rawActionInfoList) {
      return res;
    }

    for (const rawActionInfo of rawActionInfoList) {
      const actionInfo = ({
        actHash: rawActionInfo.getActhash(),
        blkHash: rawActionInfo.getBlkhash(),
        timestamp: rawActionInfo.getTimestamp()
      } as any) as IActionInfo;

      const rawAction = rawActionInfo.getAction();
      if (rawAction) {
        actionInfo.action = fromPbAction(rawAction);
      }

      res.actionInfo.push(actionInfo);
    }

    return res;
  }
};

// bytesToBuffer normalizes a jspb bytes value (Uint8Array or base64 string).
function bytesToBuffer(v: Uint8Array | string): Buffer {
  return typeof v === "string" ? Buffer.from(v, "base64") : Buffer.from(v);
}

function fromPbAccessList(
  list: Array<actionPb.AccessTuple>
): Array<IAccessTuple> | undefined {
  if (list.length === 0) {
    return undefined;
  }
  return list.map(at => ({
    address: at.getAddress(),
    storageKeys: at.getStoragekeysList()
  }));
}

function fromPbBlobTxData(
  pb: actionPb.BlobTxData | undefined
): IBlobTxData | undefined {
  if (!pb) {
    return undefined;
  }
  const res: IBlobTxData = {
    blobFeeCap: pb.getBlobfeecap(),
    blobHashes: pb.getBlobhashesList().map(bytesToBuffer)
  };
  const sc = pb.getBlobtxsidecar();
  if (sc) {
    res.blobTxSidecar = {
      blobs: sc.getBlobsList().map(bytesToBuffer),
      commitments: sc.getCommitmentsList().map(bytesToBuffer),
      proofs: sc.getProofsList().map(bytesToBuffer)
    };
  }
  return res;
}

function fromPbSetCodeAuthList(
  list: Array<actionPb.SetCodeAuthorization>
): Array<ISetCodeAuthorization> | undefined {
  if (list.length === 0) {
    return undefined;
  }
  return list.map(a => ({
    chainID: fromEvmChainId(a.getChainid()),
    address: Buffer.from(a.getAddress_asU8()),
    nonce: a.getNonce(),
    v: a.getV(),
    r: Buffer.from(a.getR_asU8()),
    s: Buffer.from(a.getS_asU8())
  }));
}

// fromPbActionCore converts a protobuf ActionCore into IActionCore, including
// the eth typed-tx fields and every action body known to iotex-core.
// tslint:disable-next-line:max-func-body-length
export function fromPbActionCore(raw: actionPb.ActionCore): IActionCore {
  const core: IActionCore = {
    version: raw.getVersion(),
    nonce: String(raw.getNonce()),
    chainID: raw.getChainid(),
    gasLimit: String(raw.getGaslimit()),
    gasPrice: raw.getGasprice(),
    txType: raw.getTxtype(),
    transfer: GetActionsRequest.fromTransfer(raw.getTransfer()),
    execution: GetActionsRequest.fromExecution(raw.getExecution()),
    startSubChain: GetActionsRequest.fromStartSubChain(raw.getStartsubchain()),
    stopSubChain: GetActionsRequest.fromStopSubChain(raw.getStopsubchain()),
    putBlock: GetActionsRequest.fromPutBlock(raw.getPutblock()),
    createDeposit: GetActionsRequest.fromCreateDeposit(raw.getCreatedeposit()),
    settleDeposit: GetActionsRequest.fromSettleDeposit(raw.getSettledeposit()),
    createPlumChain: GetActionsRequest.fromCreatePlumChain(
      raw.getCreateplumchain()
    ),
    terminatePlumChain: GetActionsRequest.fromTerminatePlumChain(
      raw.getTerminateplumchain()
    ),
    plumPutBlock: GetActionsRequest.fromPlumPutBlock(raw.getPlumputblock()),
    plumCreateDeposit: GetActionsRequest.fromPlumCreateDeposit(
      raw.getPlumcreatedeposit()
    ),
    plumStartExit: GetActionsRequest.fromPlumStartExit(raw.getPlumstartexit()),
    plumChallengeExit: GetActionsRequest.fromPlumChallengeExit(
      raw.getPlumchallengeexit()
    ),
    plumResponseChallengeExit: GetActionsRequest.fromPlumResponseChallengeExit(
      raw.getPlumresponsechallengeexit()
    ),
    plumFinalizeExit: GetActionsRequest.fromPlumFinalizeExit(
      raw.getPlumfinalizeexit()
    ),
    plumSettleDeposit: GetActionsRequest.fromPlumSettleDeposit(
      raw.getPlumsettledeposit()
    ),
    plumTransfer: GetActionsRequest.fromPlumTransfer(raw.getPlumtransfer()),
    depositToRewardingFund: GetActionsRequest.fromDepositToRewardingFund(
      raw.getDeposittorewardingfund()
    ),
    claimFromRewardingFund: GetActionsRequest.fromClaimFromRewardingFund(
      raw.getClaimfromrewardingfund()
    ),
    grantReward: GetActionsRequest.fromGrantReward(raw.getGrantreward()),
    stakeCreate: GetActionsRequest.fromStakeCreate(raw.getStakecreate()),
    stakeUnstake: GetActionsRequest.fromStakeReclaim(raw.getStakeunstake()),
    stakeWithdraw: GetActionsRequest.fromStakeReclaim(raw.getStakewithdraw()),
    stakeAddDeposit: GetActionsRequest.fromStakeAddDeposit(
      raw.getStakeadddeposit()
    ),
    stakeRestake: GetActionsRequest.fromStakeRestake(raw.getStakerestake()),
    stakeChangeCandidate: GetActionsRequest.fromStakeChangeCandidate(
      raw.getStakechangecandidate()
    ),
    stakeTransferOwnership: GetActionsRequest.fromStakeTransferOwnership(
      raw.getStaketransferownership()
    ),
    candidateRegister: GetActionsRequest.fromCandidateRegister(
      raw.getCandidateregister()
    ),
    candidateUpdate: GetActionsRequest.fromCandidateUpdate(
      raw.getCandidateupdate()
    ),
    candidateActivate: GetActionsRequest.fromCandidateActivate(
      raw.getCandidateactivate()
    ),
    candidateEndorsement: GetActionsRequest.fromCandidateEndorsement(
      raw.getCandidateendorsement()
    ),
    candidateTransferOwnership: GetActionsRequest.fromCandidateTransferOwnership(
      raw.getCandidatetransferownership()
    ),
    stakeMigrate: GetActionsRequest.fromStakeMigrate(raw.getStakemigrate()),
    candidateDeactivate: GetActionsRequest.fromCandidateDeactivate(
      raw.getCandidatedeactivate()
    ),
    scheduleCandidateDeactivation: GetActionsRequest.fromScheduleCandidateDeactivation(
      raw.getSchedulecandidatedeactivation()
    ),
    setCommissionRate: GetActionsRequest.fromSetCommissionRate(
      raw.getSetcommissionrate()
    ),
    setVoterRewardOptIn: GetActionsRequest.fromSetVoterRewardOptIn(
      raw.getSetvoterrewardoptin()
    ),
    setVoterRewardDestination: GetActionsRequest.fromSetVoterRewardDestination(
      raw.getSetvoterrewarddestination()
    ),
    putPollResult: GetActionsRequest.getPutPollResult(raw.getPutpollresult())
  };
  if (raw.getGastipcap()) {
    core.gasTipCap = raw.getGastipcap();
  }
  if (raw.getGasfeecap()) {
    core.gasFeeCap = raw.getGasfeecap();
  }
  core.accessList = fromPbAccessList(raw.getAccesslistList());
  core.blobTxData = fromPbBlobTxData(raw.getBlobtxdata());
  core.setCodeAuthList = fromPbSetCodeAuthList(raw.getSetcodeauthlistList());
  const tc = raw.getTxcontainer();
  if (tc) {
    core.txContainer = { raw: tc.getRaw_asU8() };
  }
  return core;
}

// fromPbAction converts a protobuf Action into IAction.
export function fromPbAction(raw: actionPb.Action): IAction {
  const rawCore = raw.getCore();
  return {
    core: rawCore ? fromPbActionCore(rawCore) : undefined,
    senderPubKey: raw.getSenderpubkey(),
    signature: raw.getSignature(),
    encoding: raw.getEncoding()
  };
}

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
  contractAddress: string;

  // Log topics
  topics: Array<Buffer | {}>;

  // Log data
  data: Buffer | {};

  // Log blkHeight
  blkHeight: number;

  // Log txnHash
  actHash: Buffer | {};

  // Log index
  index: number;

  // Log blkHash
  blkHash?: Buffer | {};

  // index of the action in the block
  txIndex?: number;
}

export enum ReceiptStatus {
  Failure = 0,
  Success = 1,
  //1xx for EVM ErrorCode
  ErrUnknown = 100,
  ErrOutOfGas = 101,
  ErrCodeStoreOutOfGas = 102,
  ErrDepth = 103,
  ErrContractAddressCollision = 104,
  ErrNoCompatibleInterpreter = 105,
  ErrExecutionReverted = 106,
  ErrMaxCodeSizeExceeded = 107,
  ErrWriteProtection = 108,
  ErrInvalidSubroutineEntry = 109,
  ErrInsufficientBalance = 110,
  ErrInvalidJump = 111,
  ErrReturnDataOutOfBounds = 112,
  ErrGasUintOverflow = 113,
  ErrInvalidRetsub = 114,
  ErrReturnStackExceeded = 115,
  ErrInvalidCode = 116,

  //2xx for Staking ErrorCode
  ErrLoadAccount = 200,
  ErrNotEnoughBalance = 201,
  ErrInvalidBucketIndex = 202,
  ErrUnauthorizedOperator = 203,
  ErrInvalidBucketType = 204,
  ErrCandidateNotExist = 205,
  ErrReduceDurationBeforeMaturity = 206,
  ErrUnstakeBeforeMaturity = 207,
  ErrWithdrawBeforeUnstake = 208,
  ErrWithdrawBeforeMaturity = 209,
  ErrCandidateAlreadyExist = 210,
  ErrCandidateConflict = 211,
  ErrInvalidBucketAmount = 212,
  ErrWriteAccount = 213,
  ErrWriteBucket = 214,
  ErrWriteCandidate = 215
}

// Properties of an Receipt.
export interface IReceipt {
  // Receipt status
  status: ReceiptStatus;

  // blkHeight
  blkHeight: number;

  // Receipt actHash
  actHash: Buffer | {};

  // Receipt gasConsumed
  gasConsumed: number;

  // Receipt contractAddress
  contractAddress: string;

  // Receipt logs
  logs: Array<ILog> | undefined;

  // revert reason when the execution failed
  executionRevertMsg?: string;

  // index of the action in the block
  txIndex?: number;

  // EIP-4844 blob gas used / blob gas price
  blobGasUsed?: number;
  blobGasPrice?: string;

  // gas price actually paid (base fee + tip for dynamic fee tx)
  effectiveGasPrice?: string;
}

// Properties of an Receipt.
export interface IReceiptInfo {
  // Receipt
  receipt: IReceipt | undefined;

  // blkHash
  blkHash: string;
}

// Properties of a GetReceiptByActionResponse.
export interface IGetReceiptByActionResponse {
  // GetReceiptByActionResponse receiptInfo
  receiptInfo: IReceiptInfo | undefined;
}

function fromPbReceiptInfo(
  pbReceiptInfo: apiPb.ReceiptInfo | undefined
): IReceiptInfo | undefined {
  if (!pbReceiptInfo) {
    return undefined;
  }
  return {
    receipt: fromPbReceipt(pbReceiptInfo.getReceipt()),
    blkHash: pbReceiptInfo.getBlkhash()
  };
}

export const GetReceiptByActionRequest = {
  to(req: IGetReceiptByActionRequest): any {
    const pbReq = new apiPb.GetReceiptByActionRequest();
    if (req.actionHash) {
      pbReq.setActionhash(req.actionHash);
    }
    return pbReq;
  },

  from(pbRes: GetReceiptByActionResponse): IGetReceiptByActionResponse {
    return {
      receiptInfo: fromPbReceiptInfo(pbRes.getReceiptinfo())
    };
  }
};

export function fromPbReceipt(
  pbReceipt: actionPb.Receipt | undefined
): IReceipt | undefined {
  if (!pbReceipt) {
    return undefined;
  }
  return {
    status: pbReceipt.getStatus(),
    blkHeight: pbReceipt.getBlkheight(),
    actHash: pbReceipt.getActhash(),
    gasConsumed: pbReceipt.getGasconsumed(),
    contractAddress: pbReceipt.getContractaddress(),
    logs: fromPbLogList(pbReceipt.getLogsList()),
    executionRevertMsg: pbReceipt.getExecutionrevertmsg(),
    txIndex: pbReceipt.getTxindex(),
    blobGasUsed: pbReceipt.getBlobgasused(),
    blobGasPrice: pbReceipt.getBlobgasprice(),
    effectiveGasPrice: pbReceipt.getEffectivegasprice()
  };
}

function fromPbLog(log: Log): ILog {
  return {
    contractAddress: log.getContractaddress(),
    topics: log.getTopicsList(),
    data: log.getData(),
    blkHeight: log.getBlkheight(),
    actHash: log.getActhash(),
    index: log.getIndex(),
    blkHash: log.getBlkhash(),
    txIndex: log.getTxindex()
  };
}

function fromPbLogList(
  pbLogList: Array<actionPb.Log> | undefined
): Array<ILog> | undefined {
  if (!pbLogList) {
    return undefined;
  }
  return pbLogList.map(fromPbLog);
}

// Properties of a ReadContractRequest.
export interface IReadContractRequest {
  execution: IExecution;
  callerAddress: string;
}

// Properties of a ReadContractResponse.
export interface IReadContractResponse {
  data: string;
  receipt: IReceipt | undefined;
}

export const ReadContractRequest = {
  to(req: IReadContractRequest): any {
    const pbReq = new apiPb.ReadContractRequest();
    pbReq.setCalleraddress(req.callerAddress);
    if (req.execution) {
      pbReq.setExecution(toActionExecution(req.execution));
    }
    return pbReq;
  },

  from(pbRes: apiPb.ReadContractResponse): IReadContractResponse {
    return {
      data: pbRes.getData(),
      receipt: fromPbReceipt(pbRes.getReceipt())
    };
  }
};

// Properties of a SendActionRequest.
export interface ISendActionRequest {
  // SendActionRequest action
  action: IAction;
}

// Properties of a SendActionResponse.
export interface ISendActionResponse {
  actionHash: string;
}

export const SendActionRequest = {
  to(req: ISendActionRequest): any {
    const pbReq = new apiPb.SendActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  }
};

export const SendActionResponse = {
  from(resp: apiPb.SendActionResponse): ISendActionResponse {
    return {
      actionHash: resp.getActionhash()
    };
  }
};

// Properties of a EstimateGasForActionRequest.
export interface IEstimateGasForActionRequest {
  action: IAction;
}

// Properties of a EstimateGasForActionResponse.
export interface IEstimateGasForActionResponse {
  gas: string;
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

export interface IReadStateRequest {
  protocolID: Buffer;
  methodName: Buffer;
  arguments: Array<Buffer>;
  height: string | undefined;
}

export interface IReadStateResponse {
  data: Buffer | {};
}

export const ReadStateRequest = {
  to(req: IReadStateRequest): apiPb.ReadStateRequest {
    const pbReq = new apiPb.ReadStateRequest();
    pbReq.setProtocolid(req.protocolID);
    pbReq.setMethodname(req.methodName);
    pbReq.setArgumentsList(req.arguments);
    if (req.height) {
      pbReq.setHeight(req.height);
    }
    return pbReq;
  },
  from(pbRes: ReadStateResponse): IReadStateResponse {
    return {
      data: pbRes.getData()
    };
  }
};

// Properties of a BlockProducerInfo.
export interface IBlockProducerInfo {
  // BlockProducerInfo address
  address: string;

  // BlockProducerInfo votes
  votes: string;

  // BlockProducerInfo active
  active: boolean;

  // BlockProducerInfo production
  production: number;
}

// Properties of a GetEpochMetaRequest.
export interface IGetEpochMetaRequest {
  epochNumber: number;
}

// Properties of a GetEpochMetaResponse.
export interface IGetEpochMetaResponse {
  // GetEpochMetaResponse epochData
  epochData: IEpochData;

  // GetEpochMetaResponse totalBlocks
  totalBlocks: number;

  // GetEpochMetaResponse blockProducersInfo
  blockProducersInfo: Array<IBlockProducerInfo>;
}

export const GetEpochMetaRequest = {
  to(req: IGetEpochMetaRequest): any {
    const pbReq = new apiPb.GetEpochMetaRequest();
    if (req.epochNumber) {
      pbReq.setEpochnumber(req.epochNumber);
    }
    return pbReq;
  },
  from(pbRes: any): IGetEpochMetaResponse {
    const epoch = pbRes.getEpochdata();
    const bpInfo = pbRes.getBlockproducersinfoList();
    const res = {
      epochData: {
        num: epoch.getNum(),
        height: epoch.getHeight(),
        gravityChainStartHeight: epoch.getGravitychainstartheight()
      },
      totalBlocks: pbRes.getTotalblocks(),
      blockProducersInfo: bpInfo
    };
    if (bpInfo) {
      const parsedBpinfo = [];
      for (let i = 0; i < bpInfo.length; i++) {
        parsedBpinfo[i] = {
          address: bpInfo[i].getAddress(),
          votes: bpInfo[i].getVotes(),
          active: bpInfo[i].getActive(),
          production: bpInfo[i].getProduction()
        };
      }
      res.blockProducersInfo = parsedBpinfo;
    }

    return res;
  }
};

export interface ITopics {
  topic: Array<Buffer>;
}

export interface ILogsFilter {
  address: Array<string>;
  topics: Array<ITopics>;
}

export interface IGetLogsByBlock {
  blockHash: Buffer;
}

export interface IGetLogsByRange {
  fromBlock: number;
  toBlock: number;
  paginationSize: number;
  count: number;
}

export interface IGetLogsRequest {
  filter: ILogsFilter;
  byBlock?: IGetLogsByBlock | undefined;
  byRange?: IGetLogsByRange | undefined;
}

export interface IGetLogsResponse {
  logs: Array<ILog> | undefined;
}

export const GetLogsRequest = {
  to(req: IGetLogsRequest): any {
    const pbReq = new apiPb.GetLogsRequest();
    if (req.filter) {
      const filter = new apiPb.LogsFilter();
      filter.setAddressList(req.filter.address);
      const topics = [] as Array<Topics>;
      for (let i = 0; i < req.filter.topics.length; i++) {
        const topic = new apiPb.Topics();
        topic.setTopicList(req.filter.topics[i].topic);
        topics.push(topic);
      }
      filter.setTopicsList(topics);
      pbReq.setFilter(filter);
    }
    if (req.byBlock) {
      const byBlock = new apiPb.GetLogsByBlock();
      byBlock.setBlockhash(req.byBlock.blockHash);
      pbReq.setByblock(byBlock);
    }
    if (req.byRange) {
      const byRange = new apiPb.GetLogsByRange();
      byRange.setFromblock(req.byRange.fromBlock);
      byRange.setToblock(req.byRange.toBlock);
      byRange.setPaginationsize(req.byRange.paginationSize);
      pbReq.setByrange(byRange);
    }
    return pbReq;
  },

  from(pbRes: GetLogsResponse): IGetLogsResponse {
    return {
      logs: fromPbLogList(pbRes.getLogsList())
    };
  }
};

export interface IEstimateActionGasConsumptionRequest {
  transfer?: ITransfer | undefined;
  execution?: IExecution | undefined;
  stakeCreate?: IStakeCreate | undefined;
  stakeUnstake?: IStakeReclaim | undefined;
  stakeWithdraw?: IStakeReclaim | undefined;
  stakeAddDeposit?: IStakeAddDeposit | undefined;
  stakeRestake?: IStakeRestake | undefined;
  stakeChangeCandidate?: IStakeChangeCandidate | undefined;
  stakeTransferOwnership?: IStakeTransferOwnership | undefined;
  candidateRegister?: ICandidateRegister | undefined;
  candidateUpdate?: ICandidateBasicInfo | undefined;
  candidateActivate?: ICandidateActivate | undefined;
  candidateEndorsement?: ICandidateEndorsement | undefined;
  candidateTransferOwnership?: ICandidateTransferOwnership | undefined;
  stakeMigrate?: IStakeMigrate | undefined;
  candidateDeactivate?: ICandidateDeactivate | undefined;
  callerAddress: string;
  gasPrice?: string;
}

export interface IEstimateActionGasConsumptionResponse {
  gas: number;
}

export const EstimateActionGasConsumptionRequest = {
  to(req: IEstimateActionGasConsumptionRequest): any {
    const pbReq = new apiPb.EstimateActionGasConsumptionRequest();
    if (req.transfer) {
      pbReq.setTransfer(toActionTransfer(req.transfer));
    }
    if (req.execution) {
      pbReq.setExecution(toActionExecution(req.execution));
    }
    if (req.stakeCreate) {
      pbReq.setStakecreate(toActionStakeCreate(req.stakeCreate));
    }
    if (req.stakeUnstake) {
      pbReq.setStakeunstake(toActionStakeReclaim(req.stakeUnstake));
    }
    if (req.stakeWithdraw) {
      pbReq.setStakewithdraw(toActionStakeReclaim(req.stakeWithdraw));
    }
    if (req.stakeAddDeposit) {
      pbReq.setStakeadddeposit(toActionStakeAddDeposit(req.stakeAddDeposit));
    }
    if (req.stakeRestake) {
      pbReq.setStakerestake(toActionStakeRestake(req.stakeRestake));
    }
    if (req.stakeChangeCandidate) {
      pbReq.setStakechangecandidate(
        toActionStakeChangeCandidate(req.stakeChangeCandidate)
      );
    }
    if (req.stakeTransferOwnership) {
      pbReq.setStaketransferownership(
        toActionStakeTransferOwnership(req.stakeTransferOwnership)
      );
    }
    if (req.candidateRegister) {
      pbReq.setCandidateregister(
        toActionCandidateRegister(req.candidateRegister)
      );
    }
    if (req.candidateUpdate) {
      pbReq.setCandidateupdate(toActionCandidateBasicInfo(req.candidateUpdate));
    }
    if (req.candidateActivate) {
      pbReq.setCandidateactivate(
        toActionCandidateActivate(req.candidateActivate)
      );
    }
    if (req.candidateEndorsement) {
      pbReq.setCandidateendorsement(
        toActionCandidateEndorsement(req.candidateEndorsement)
      );
    }
    if (req.candidateTransferOwnership) {
      pbReq.setCandidatetransferownership(
        toActionCandidateTransferOwnership(req.candidateTransferOwnership)
      );
    }
    if (req.stakeMigrate) {
      pbReq.setStakemigrate(toActionStakeMigrate(req.stakeMigrate));
    }
    if (req.candidateDeactivate) {
      pbReq.setCandidatedeactivate(
        toActionCandidateDeactivate(req.candidateDeactivate)
      );
    }
    pbReq.setCalleraddress(req.callerAddress);
    if (req.gasPrice) {
      pbReq.setGasprice(req.gasPrice);
    }
    return pbReq;
  },

  from(
    pbRes: apiPb.EstimateActionGasConsumptionResponse
  ): IEstimateActionGasConsumptionResponse {
    return { gas: pbRes.getGas() };
  }
};

export interface IBlockHeaderCore {
  version: number;
  height: number;
  timestamp: ITimestamp | undefined;
  prevBlockHash: Buffer;
  txRoot: Buffer;
  deltaStateDigest: Buffer;
  receiptRoot: Buffer;
  logsBloom: Buffer;
  gasUsed?: number;
  // EIP-1559 base fee (big-endian bytes of the integer), empty before the fork
  baseFee?: Buffer;
  blobGasUsed?: number;
  excessBlobGas?: number;
}

export interface IBlockHeader {
  core: IBlockHeaderCore | undefined;
  producerPubkey: Buffer;
  signature: Buffer;
}

export interface IBlockBody {
  actions: Array<IAction>;
}

export interface IEndorsement {
  timestamp: ITimestamp | undefined;
  endorser: Buffer;
  signature: Buffer;
}

export interface IBlockFooter {
  endorsements: Array<IEndorsement>;
  timestamp: ITimestamp | undefined;
}

export interface IBlock {
  header: IBlockHeader | undefined;
  body: IBlockBody | undefined;
  footer: IBlockFooter | undefined;
}

export interface IBlockInfo {
  block: IBlock | undefined;
  receipts: Array<IReceipt>;
}

export interface IStreamBlocksRequest {}
export interface IStreamBlocksResponse {
  block: IBlockInfo | undefined;
}

function fromPbTimestamp(
  timestamp: Timestamp | undefined
): ITimestamp | undefined {
  if (timestamp) {
    return {
      seconds: timestamp.getSeconds(),
      nanos: timestamp.getNanos()
    };
  }
  return undefined;
}

function fromPbBlockHeaderCore(
  blockHeaderCore: BlockHeaderCore | undefined
): IBlockHeaderCore | undefined {
  if (blockHeaderCore) {
    return {
      version: blockHeaderCore.getVersion(),
      height: blockHeaderCore.getHeight(),
      timestamp: fromPbTimestamp(blockHeaderCore.getTimestamp()),
      prevBlockHash: Buffer.from(blockHeaderCore.getPrevblockhash_asU8()),
      txRoot: Buffer.from(blockHeaderCore.getTxroot_asU8()),
      deltaStateDigest: Buffer.from(blockHeaderCore.getDeltastatedigest_asU8()),
      receiptRoot: Buffer.from(blockHeaderCore.getReceiptroot_asU8()),
      logsBloom: Buffer.from(blockHeaderCore.getLogsbloom_asU8()),
      gasUsed: blockHeaderCore.getGasused(),
      baseFee: Buffer.from(blockHeaderCore.getBasefee_asU8()),
      blobGasUsed: blockHeaderCore.getBlobgasused(),
      excessBlobGas: blockHeaderCore.getExcessblobgas()
    };
  }
  return undefined;
}

function fromPbBlockHeader(
  blockHeader: BlockHeader | undefined
): IBlockHeader | undefined {
  if (blockHeader) {
    return {
      core: fromPbBlockHeaderCore(blockHeader.getCore()),
      producerPubkey: Buffer.from(blockHeader.getProducerpubkey_asU8()),
      signature: Buffer.from(blockHeader.getSignature_asU8())
    };
  }
  return undefined;
}

function fromPbBlockBody(
  blockBody: BlockBody | undefined
): IBlockBody | undefined {
  if (blockBody) {
    return {
      actions: blockBody.getActionsList().map(fromPbAction)
    };
  }
  return undefined;
}

function fromPbEndorsements(
  endorsements: Array<Endorsement>
): Array<IEndorsement> {
  const res = [] as Array<IEndorsement>;
  for (const endorsement of endorsements) {
    res.push({
      timestamp: fromPbTimestamp(endorsement.getTimestamp()),
      endorser: Buffer.from(endorsement.getEndorser_asU8()),
      signature: Buffer.from(endorsement.getSignature_asU8())
    });
  }
  return res;
}

function fromPbBlockFooter(
  blockFooter: BlockFooter | undefined
): IBlockFooter | undefined {
  if (blockFooter) {
    return {
      endorsements: fromPbEndorsements(blockFooter.getEndorsementsList()),
      timestamp: fromPbTimestamp(blockFooter.getTimestamp())
    };
  }
  return undefined;
}

function fromPbBlock(block: Block | undefined): IBlock | undefined {
  if (block) {
    return {
      header: fromPbBlockHeader(block.getHeader()),
      body: fromPbBlockBody(block.getBody()),
      footer: fromPbBlockFooter(block.getFooter())
    };
  }
  return undefined;
}

function fromPbReceipts(receipts: Array<Receipt>): Array<IReceipt> {
  return receipts.map(r => fromPbReceipt(r) as IReceipt);
}

function fromPbBlockInfo(
  blockInfo: BlockInfo | undefined
): IBlockInfo | undefined {
  if (blockInfo) {
    return {
      block: fromPbBlock(blockInfo.getBlock()),
      receipts: fromPbReceipts(blockInfo.getReceiptsList())
    };
  }
  return undefined;
}

export const StreamBlocksRequest = {
  // @ts-ignore
  to(req: IStreamBlocksRequest): any {
    return new apiPb.StreamBlocksRequest();
  },

  from(pbRes: apiPb.StreamBlocksResponse): IStreamBlocksResponse {
    return {
      block: fromPbBlockInfo(pbRes.getBlock())
    };
  }
};

export interface IStreamLogsRequest {
  filter: ILogsFilter;
}
export interface IStreamLogsResponse {
  log: ILog | undefined;
}

export const StreamLogsRequest = {
  // @ts-ignore
  to(req: IStreamLogsRequest): any {
    const pbReq = new apiPb.StreamLogsRequest();
    if (req.filter) {
      const filter = new apiPb.LogsFilter();
      filter.setAddressList(req.filter.address);
      const topics = [] as Array<Topics>;
      for (let i = 0; i < req.filter.topics.length; i++) {
        const topic = new apiPb.Topics();
        topic.setTopicList(req.filter.topics[i].topic);
        topics.push(topic);
      }
      filter.setTopicsList(topics);
      pbReq.setFilter(filter);
    }
    return pbReq;
  },

  fromPbLog(log: Log | undefined): ILog | undefined {
    return log ? fromPbLog(log) : undefined;
  },

  from(pbRes: apiPb.StreamLogsResponse): IStreamLogsResponse {
    return {
      log: StreamLogsRequest.fromPbLog(pbRes.getLog())
    };
  }
};

// @ts-ignore
export interface ClientReadableStream<Response> {
  on(
    type: "error",
    callback: (err: Error) => void
  ): ClientReadableStream<Response>;
  on(
    type: "status",
    callback: (status: any) => void
  ): ClientReadableStream<Response>;
  on(
    type: "data",
    callback: (response: Response) => void
  ): ClientReadableStream<Response>;
  on(type: "end", callback: () => void): ClientReadableStream<Response>;
  cancel(): void;
}

// @ts-ignore
export class ClientReadableStream<Response> extends EventEmitter {
  private readonly origin: grpcWeb.ClientReadableStream<any>;

  constructor(origin: grpcWeb.ClientReadableStream<any>, type: string) {
    super();

    this.origin = origin;
    origin.on("error", (err: any) => {
      this.emit("error", err);
    });
    origin.on("status", (status: any) => {
      this.emit("status", status);
    });
    origin.on("data", (response: Response) => {
      if (type === "StreamBlocks") {
        // @ts-ignore
        this.emit("data", StreamBlocksRequest.from(response));
      }
      if (type === "StreamLogs") {
        // @ts-ignore
        this.emit("data", StreamLogsRequest.from(response));
      }
    });
    origin.on("end", () => {
      this.emit("end");
    });
  }

  public cancel(): void {
    this.origin.cancel();
  }
}

export const IReadStakingDataMethodToBuffer = (
  req: IReadStakingDataMethod
): Buffer => {
  const method = req.method.valueOf();
  const known = Object.keys(ReadStakingDataMethod.Name).map(
    k =>
      ReadStakingDataMethod.Name[k as keyof typeof ReadStakingDataMethod.Name]
  ) as Array<number>;
  if (known.indexOf(method) < 0) {
    throw new Error(`unknow method ${req.method}`);
  }
  const pbObj = new ReadStakingDataMethod();
  pbObj.setMethod(method as ReadStakingDataMethod.Name);
  return Buffer.from(pbObj.serializeBinary());
};

export const IReadStakingDataRequestToBuffer = (
  req: IReadStakingDataRequest
): Buffer => {
  const pbObj = new ReadStakingDataRequest();
  if (req.buckets) {
    const buckets = new ReadStakingDataRequest.VoteBuckets();
    const pagination = new PaginationParam();
    pagination.setOffset(req.buckets.pagination.offset);
    pagination.setLimit(req.buckets.pagination.limit);
    buckets.setPagination(pagination);
    pbObj.setBuckets(buckets);
  }
  if (req.bucketsByVoter) {
    const bucketsByVoter = new ReadStakingDataRequest.VoteBucketsByVoter();
    const pagination = new PaginationParam();
    pagination.setOffset(req.bucketsByVoter.pagination.offset);
    pagination.setLimit(req.bucketsByVoter.pagination.limit);
    bucketsByVoter.setPagination(pagination);
    bucketsByVoter.setVoteraddress(req.bucketsByVoter.voterAddress);
    pbObj.setBucketsbyvoter(bucketsByVoter);
  }
  if (req.bucketsByCandidate) {
    const bucketsByCandidate = new ReadStakingDataRequest.VoteBucketsByCandidate();
    const pagination = new PaginationParam();
    pagination.setOffset(req.bucketsByCandidate.pagination.offset);
    pagination.setLimit(req.bucketsByCandidate.pagination.limit);
    bucketsByCandidate.setPagination(pagination);
    bucketsByCandidate.setCandname(req.bucketsByCandidate.candName);
    pbObj.setBucketsbycandidate(bucketsByCandidate);
  }
  if (req.candidates) {
    const candidates = new ReadStakingDataRequest.Candidates();
    const pagination = new PaginationParam();
    pagination.setOffset(req.candidates.pagination.offset);
    pagination.setLimit(req.candidates.pagination.limit);
    candidates.setPagination(pagination);
    pbObj.setCandidates(candidates);
  }
  if (req.candidateByName) {
    const candidateByName = new ReadStakingDataRequest.CandidateByName();
    candidateByName.setCandname(req.candidateByName.candName);
    pbObj.setCandidatebyname(candidateByName);
  }
  if (req.bucketsByIndexes) {
    const bucketsByIndexes = new ReadStakingDataRequest.VoteBucketsByIndexes();
    bucketsByIndexes.setIndexList(req.bucketsByIndexes.index);
    pbObj.setBucketsbyindexes(bucketsByIndexes);
  }
  if (req.candidateByAddress) {
    const candidateByAddress = new ReadStakingDataRequest.CandidateByAddress();
    candidateByAddress.setOwneraddr(req.candidateByAddress.ownerAddr);
    if (req.candidateByAddress.id) {
      candidateByAddress.setId(req.candidateByAddress.id);
    }
    pbObj.setCandidatebyaddress(candidateByAddress);
  }
  if (req.totalStakingAmount) {
    const totalStakingAmount = new ReadStakingDataRequest.TotalStakingAmount();
    pbObj.setTotalstakingamount(totalStakingAmount);
  }
  if (req.bucketsCount) {
    const bucketsCount = new ReadStakingDataRequest.BucketsCount();
    pbObj.setBucketscount(bucketsCount);
  }
  if (req.contractStakingBucketTypes) {
    const bucketTypes = new ReadStakingDataRequest.ContractStakingBucketTypes();
    bucketTypes.setContractaddress(
      req.contractStakingBucketTypes.contractAddress
    );
    pbObj.setContractstakingbuckettypes(bucketTypes);
  }
  return Buffer.from(pbObj.serializeBinary());
};

export interface IRpcMethod {
  getChainID(): number;

  setProvider(provider: string | IRpcMethod, chainID?: number): void;

  getAccount(req: IGetAccountRequest): Promise<IGetAccountResponse>;

  getBlockMetas(req: IGetBlockMetasRequest): Promise<IGetBlockMetasResponse>;

  getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse>;

  getServerMeta(req: IGetServerMetaRequest): Promise<IGetServerMetaResponse>;

  getActions(req: IGetActionsRequest): Promise<IGetActionsResponse>;

  suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse>;

  getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse>;

  readContract(req: IReadContractRequest): Promise<IReadContractResponse>;

  sendAction(req: ISendActionRequest): Promise<ISendActionResponse>;
  readState(req: IReadStateRequest): Promise<IReadStateResponse>;
  estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse>;

  getEpochMeta(req: IGetEpochMetaRequest): Promise<IGetEpochMetaResponse>;

  getLogs(req: IGetLogsRequest): Promise<IGetLogsResponse>;

  estimateActionGasConsumption(
    req: IEstimateActionGasConsumptionRequest
  ): Promise<IEstimateActionGasConsumptionResponse>;

  streamBlocks(
    req: IStreamBlocksRequest
  ): ClientReadableStream<IStreamBlocksResponse>;

  streamLogs(
    req: IStreamLogsRequest
  ): ClientReadableStream<IStreamLogsResponse>;
}
