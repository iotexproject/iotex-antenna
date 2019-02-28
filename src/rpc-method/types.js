// @flow
import apiPb from '../proto/api_pb';

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
interface IEpochData {
  num?: number | null,
  height?: number | null,
  beaconChainHeight?: number | null,
}

interface IChainMeta {
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
    const pbReq = new apiPb.GetChainMetaRequest();
    return  pbReq;
  }
  static from(pbRes: any): IGetChainMetaResponse {
    const meta = pbRes.getChainmeta();
    const res = {
      chainMeta: meta,
    };
    if (meta) {
      res.chainMeta = {
        height: meta.getHeight(),
        supply: meta.getSupply(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        // epoch: ???
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
      for (let i = 0; i < metas.length; i++) {
        const parsedMetas = [];
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
        res.blkMetas = parsedMetas;
      }
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

////////////////////////////////////////////////////////////////////////////////////////////////////
// BELOW ARE DEFINITIONS FOR BLOCK PRODUCER PROTOCOL
////////////////////////////////////////////////////////////////////////////////////////////////////

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

/* const RewardType = {
  BlockReward: 0,
  EpochReward: 1,
}; */

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

  /** ActionCore grantReward */
  //grantReward?: IGrantReward | null,

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

/** Properties of a GetActionsResponse. */
export interface IGetActionsResponse {
  /** GetActionsResponse actions */
  actions?: IAction[] | null
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

/** Properties of a ReadContractRequest. */
export interface IReadContractRequest {
  /** ReadContractRequest action */
  action?: IAction | null,
}

/** Properties of a ReadContractResponse. */
export interface IReadContractResponse {
  data?: string | null,
}

/** Properties of a SendActionRequest. */
export interface ISendActionRequest {
  /** SendActionRequest action */
  action?: IAction | null,
}

/** Properties of a SendActionResponse. */
export interface ISendActionResponse {}
