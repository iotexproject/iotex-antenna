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
