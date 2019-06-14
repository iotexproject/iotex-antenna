/// <reference types="node" />
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import apiPb from "../../protogen/proto/api/api_pb";
import actionPb from "../../protogen/proto/types/action_pb";
export interface ITimestamp {
  seconds: number;
  nanos: number;
}
export interface IGetAccountRequest {
  address: string;
}
export interface IAccountMeta {
  address: string;
  balance: string;
  nonce: string | number;
  pendingNonce: string | number;
  numActions: string | number;
}
export interface IGetAccountResponse {
  accountMeta: IAccountMeta | undefined;
}
export declare const GetAccountRequest: {
  to(req: IGetAccountRequest): any;
  from(pbRes: apiPb.GetAccountResponse): IGetAccountResponse;
};
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
export declare const GetChainMetaRequest: {
  to(req: IGetChainMetaRequest): any;
  from(pbRes: any): IGetChainMetaResponse;
};
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
export declare const GetServerMetaRequest: {
  to(req: IGetServerMetaRequest): apiPb.GetServerMetaRequest;
  from(pbRes: apiPb.GetServerMetaResponse): IGetServerMetaResponse;
};
export interface IGetBlockMetasByIndexRequest {
  start: number;
  count: number;
}
export interface IGetBlockMetasByHashRequest {
  blkHash: string;
}
export interface IGetBlockMetasRequest {
  byIndex?: IGetBlockMetasByIndexRequest;
  byHash?: IGetBlockMetasByHashRequest;
}
export interface IBlockMeta {
  hash: string;
  height: number;
  timestamp: ITimestamp;
  numActions: number;
  producerAddress: string;
  transferAmount: string;
  txRoot: string;
  receiptRoot: string;
  deltaStateDigest: string;
}
export interface IGetBlockMetasResponse {
  blkMetas: Array<IBlockMeta>;
}
export declare const GetBlockMetasRequest: {
  to(req: IGetBlockMetasRequest): any;
  from(pbRes: any): IGetBlockMetasResponse;
};
export interface IGetActionsByIndexRequest {
  start: number;
  count: number;
}
export interface IGetActionsByHashRequest {
  actionHash: string;
  checkingPending: boolean;
}
export interface IGetActionsByAddressRequest {
  address: string;
  start: number;
  count: number;
}
export interface IGetUnconfirmedActionsByAddressRequest {
  address: string;
  start: number;
  count: number;
}
export interface IGetActionsByBlockRequest {
  blkHash: string;
  start: number;
  count: number;
}
export interface IGetActionsRequest {
  byIndex?: IGetActionsByIndexRequest;
  byHash?: IGetActionsByHashRequest;
  byAddr?: IGetActionsByAddressRequest;
  unconfirmedByAddr?: IGetUnconfirmedActionsByAddressRequest;
  byBlk?: IGetActionsByBlockRequest;
}
export interface ITransfer {
  amount: string;
  recipient: string;
  payload: Buffer | string;
}
export interface IExecution {
  amount: string;
  contract: string;
  data: Buffer | string;
}
export interface IStartSubChain {
  chainID: number;
  securityDeposit: string;
  operationDeposit: string;
  startHeight: number;
  parentHeightOffset: number;
}
export interface IStopSubChain {
  chainID: number;
  stopHeight: number;
  subChainAddress: string;
}
export interface IMerkleRoot {
  name: string;
  value: Buffer;
}
export interface IPutBlock {
  subChainAddress: string;
  height: number;
  roots: Array<IMerkleRoot>;
}
export interface ICreateDeposit {
  chainID: number;
  amount: string;
  recipient: string;
}
export interface ISettleDeposit {
  amount: string;
  recipient: string;
  index: number;
}
export interface ICreatePlumChain {}
export interface ITerminatePlumChain {
  subChainAddress: string;
}
export interface IPlumPutBlock {
  subChainAddress: string;
  height: number;
  roots: Map<string, Buffer | {}>;
}
export interface IPlumCreateDeposit {
  subChainAddress: string;
  amount: string;
  recipient: string;
}
export interface IPlumStartExit {
  subChainAddress: string;
  previousTransfer: Buffer;
  previousTransferBlockProof: Buffer;
  previousTransferBlockHeight: number;
  exitTransfer: Buffer | string;
  exitTransferBlockProof: Buffer | string;
  exitTransferBlockHeight: number;
}
export interface IPlumChallengeExit {
  subChainAddress: string;
  coinID: number;
  challengeTransfer: Buffer | string;
  challengeTransferBlockProof: Buffer | string;
  challengeTransferBlockHeight: number;
}
export interface IPlumResponseChallengeExit {
  subChainAddress: string;
  coinID: number;
  challengeTransfer: Buffer;
  responseTransfer: Buffer;
  responseTransferBlockProof: Buffer;
  previousTransferBlockHeight: number;
}
export interface IPlumFinalizeExit {
  subChainAddress: string;
  coinID: number;
}
export interface IPlumSettleDeposit {
  coinID: number;
}
export interface IPlumTransfer {
  coinID: number;
  denomination: Buffer;
  owner: string;
  recipient: string;
}
export interface IDepositToRewardingFund {
  amount: string;
  data: Buffer;
}
export interface IClaimFromRewardingFund {
  amount: string;
  data: Buffer | {};
}
export interface RewardType {
  BlockReward: 0;
  EpochReward: 1;
}
export interface ISetReward {
  amount: string;
  data: Buffer | {};
  type: number;
}
export interface IGrantReward {
  type: number;
  height: number | string;
}
export interface ICandidate {
  address: string;
  votes: Buffer | {};
  pubKey: Buffer | {};
  rewardAddress: string;
}
export interface ICandidateList {
  candidates: Array<ICandidate>;
}
export interface IPutPollResult {
  height: number | string;
  candidates: ICandidateList | undefined;
}
export interface IActionCore {
  version: number;
  nonce: string;
  gasLimit: string;
  gasPrice: string;
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
}
export interface IAction {
  core: IActionCore | undefined;
  senderPubKey: Uint8Array | string;
  signature: Uint8Array | string;
}
export declare function toActionTransfer(req: ITransfer | undefined): any;
export declare function toTimestamp(timestamp: ITimestamp): Timestamp;
export declare function toActionExecution(
  req: IExecution | undefined
): actionPb.Execution | undefined;
export declare function toActionStartSubChain(
  req: IStartSubChain | undefined
): any;
export declare function toActionStopSubChain(
  req: IStopSubChain | undefined
): any;
export declare function toActionPutBlock(req: IPutBlock | undefined): any;
export declare function toActionCreateDeposit(
  req: ICreateDeposit | undefined
): any;
export declare function toActionSettleDeposit(
  req: ISettleDeposit | undefined
): any;
export declare function toActionCreatePlumChain(
  req: ICreatePlumChain | undefined
): any;
export declare function toActionTerminatePlumChain(
  req: ITerminatePlumChain | undefined
): any;
export declare function toActionPlumPutBlock(
  req: IPlumPutBlock | undefined
): any;
export declare function toActionPlumCreateDeposit(
  req: IPlumCreateDeposit | undefined
): any;
export declare function toActionPlumStartExit(
  req: IPlumStartExit | undefined
): any;
export declare function toActionPlumChallengeExit(
  req: IPlumChallengeExit | undefined
): any;
export declare function toActionPlumResponseChallengeExit(
  req: IPlumResponseChallengeExit | undefined
): any;
export declare function toActionPlumFinalizeExit(
  req: IPlumFinalizeExit | undefined
): any;
export declare function toActionPlumSettleDeposit(
  req: IPlumSettleDeposit | undefined
): any;
export declare function toActionPlumTransfer(
  req: IPlumTransfer | undefined
): any;
export declare function toActionDepositToRewardingFund(
  req: IDepositToRewardingFund | undefined
): any;
export declare function toActionClaimFromRewardingFund(
  req: IClaimFromRewardingFund | undefined
): any;
export declare function toActionGrantReward(req: IGrantReward | undefined): any;
export declare function toAction(req: IAction): any;
export interface IActionInfo {
  action: IAction;
  actHash: string;
  blkHash: string;
  timestamp: ITimestamp;
}
export interface IGetActionsResponse {
  actionInfo: Array<IActionInfo>;
}
export declare const GetActionsRequest: {
  byAddrTo(byAddr: IGetActionsByAddressRequest): any;
  byBlkTo(byBlk: IGetActionsByBlockRequest): any;
  byHashTo(byHash: IGetActionsByHashRequest): any;
  byIndexTo(byIndex: IGetActionsByIndexRequest): any;
  unconfirmedByAddrTo(
    unconfirmedByAddr: IGetUnconfirmedActionsByAddressRequest
  ): any;
  to(req: IGetActionsRequest): any;
  fromTransfer(pbRes: any): any;
  fromVote(pbRes: any): any;
  fromExecution(pbRes: any): any;
  fromStartSubChain(pbRes: any): any;
  fromStopSubChain(pbRes: any): any;
  fromPutBlock(pbRes: any): any;
  fromCreateDeposit(pbRes: any): any;
  fromSettleDeposit(pbRes: any): any;
  fromCreatePlumChain(pbRes: any): any;
  fromTerminatePlumChain(pbRes: any): any;
  fromPlumPutBlock(pbRes: any): any;
  fromPlumCreateDeposit(pbRes: any): any;
  fromPlumStartExit(pbRes: any): any;
  fromPlumChallengeExit(pbRes: any): any;
  fromPlumResponseChallengeExit(pbRes: any): any;
  fromPlumFinalizeExit(pbRes: any): any;
  fromPlumSettleDeposit(pbRes: any): any;
  fromPlumTransfer(pbRes: any): any;
  fromDepositToRewardingFund(pbRes: any): any;
  fromClaimFromRewardingFund(pbRes: any): any;
  fromSetReward(pbRes: any): any;
  fromGrantReward(
    pbRes: actionPb.GrantReward | undefined
  ): IGrantReward | undefined;
  getPutPollResult(
    req: actionPb.PutPollResult | undefined
  ): IPutPollResult | undefined;
  from(pbRes: apiPb.GetActionsResponse): IGetActionsResponse;
};
export interface ISuggestGasPriceRequest {}
export interface ISuggestGasPriceResponse {
  gasPrice: number;
}
export declare const SuggestGasPriceRequest: {
  to(req: ISuggestGasPriceRequest): any;
  from(pbRes: any): ISuggestGasPriceResponse;
};
export interface IGetReceiptByActionRequest {
  actionHash: string;
}
export interface ILog {
  contractAddress: string;
  topics: Array<Buffer | {}>;
  data: Buffer | {};
  blkHeight: number;
  actHash: Buffer | {};
  index: number;
}
export interface IReceipt {
  status: number;
  blkHeight: number;
  actHash: Buffer | {};
  gasConsumed: number;
  contractAddress: string;
  logs: Array<ILog> | undefined;
}
export interface IReceiptInfo {
  receipt: IReceipt | undefined;
  blkHash: string;
}
export interface IGetReceiptByActionResponse {
  receiptInfo: IReceiptInfo | undefined;
}
export declare const GetReceiptByActionRequest: {
  to(req: IGetReceiptByActionRequest): any;
  from(pbRes: apiPb.GetReceiptByActionResponse): IGetReceiptByActionResponse;
};
export interface IReadContractRequest {
  execution: IExecution;
  callerAddress: string;
}
export interface IReadContractResponse {
  data: string;
  receipt: IReceipt | undefined;
}
export declare const ReadContractRequest: {
  to(req: IReadContractRequest): any;
  from(pbRes: apiPb.ReadContractResponse): IReadContractResponse;
};
export interface ISendActionRequest {
  action: IAction;
}
export interface ISendActionResponse {
  actionHash: string;
}
export declare const SendActionRequest: {
  to(req: ISendActionRequest): any;
};
export declare const SendActionResponse: {
  from(resp: apiPb.SendActionResponse): ISendActionResponse;
};
export interface IEstimateGasForActionRequest {
  action: IAction;
}
export interface IEstimateGasForActionResponse {
  gas: string;
}
export declare const EstimateGasForActionRequest: {
  to(req: IEstimateGasForActionRequest): any;
  from(pbRes: any): IEstimateGasForActionResponse;
};
export interface IReadStateRequest {
  protocolID: Buffer;
  methodName: Buffer;
  arguments: Array<Buffer>;
}
export interface IReadStateResponse {
  data: Buffer | {};
}
export declare const ReadStateRequest: {
  to(req: IReadStateRequest): apiPb.ReadStateRequest;
  from(pbRes: apiPb.ReadStateResponse): IReadStateResponse;
};
export interface IBlockProducerInfo {
  address: string;
  votes: string;
  active: boolean;
  production: number;
}
export interface IGetEpochMetaRequest {
  epochNumber: number;
}
export interface IGetEpochMetaResponse {
  epochData: IEpochData;
  totalBlocks: number;
  blockProducersInfo: Array<IBlockProducerInfo>;
}
export declare const GetEpochMetaRequest: {
  to(req: IGetEpochMetaRequest): any;
  from(pbRes: any): IGetEpochMetaResponse;
};
export interface IRpcMethod {
  setProvider(provider: string | IRpcMethod): void;
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
}
