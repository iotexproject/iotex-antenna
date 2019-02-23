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
  blkMetas: IBlockMeta[]
}

export class GetBlockMetasRequest {
  static to(req: IGetBlockMetasRequest): any {
    const pbReq = new apiPb.GetBlockMetasRequest();
    if (req.byIndex != null) {
      const pbReqByIndex = new apiPb.GetBlockMetasByIndexRequest();
      if (req.byIndex.start != null) {
        pbReqByIndex.setStart(req.byIndex.start);
      }
      if (req.byIndex.count != null) {
        pbReqByIndex.setCount(req.byIndex.count);
      }
      pbReq.setByindex(pbReqByIndex);
    }
    if (req.byHash != null) {
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
        res.blkMetas[i] = {
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
}

/** Properties of an Action. */
export interface IAction {
  /** Action core */
  core?: IActionCore | null,

  /** Action senderPubkey */
  senderPubkey?: Uint8Array | null,

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
  topics?: Uint8Array[] | null,

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
