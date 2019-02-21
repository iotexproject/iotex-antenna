// @flow
import apiPb from '../proto/api_pb';

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
  blkMetas?: IBlockMeta[] | null
}

export class GetBlockMetasRequest {
  static to(req: IGetBlockMetasRequest): any {
    const pbReq = new apiPb.GetBlockMetasRequest();
    if (req.byIndex != null) {
      const pbReqByIndex = new apiPb.GetBlockMetasByIndexRequest();
      pbReqByIndex.setStart(req.byIndex.start);
      pbReqByIndex.setCount(req.byIndex.count);
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



