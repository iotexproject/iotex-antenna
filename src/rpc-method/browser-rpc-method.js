// @flow
import grpcWeb from '../proto/api_grpc_web_pb';
import type {
  IGetAccountRequest,
  IGetAccountResponse,
  IGetBlockMetasRequest,
  IGetBlockMetasResponse,
  IGetChainMetaRequest,
  IGetChainMetaResponse,
  ISuggestGasPriceRequest,
  ISuggestGasPriceResponse,
  IGetActionsRequest,
  IGetActionsResponse,
  ISendActionRequest,
  ISendActionResponse} from './types';
import {
  GetAccountRequest,
  GetBlockMetasRequest,
  GetChainMetaRequest,
  SuggestGasPriceRequest,
  GetActionsRequest, SendActionRequest,
} from './types';

export default class RpcMethod {
  client: grpcWeb.APIServicePromiseClient;

  constructor(hostname: string) {
    this.client = new grpcWeb.APIServicePromiseClient(hostname, null, null);
  }

  async getAccount(req: IGetAccountRequest): Promise<IGetAccountResponse> {
    const pbReq = GetAccountRequest.to(req);
    const pbResp = await this.client.getAccount(pbReq);
    return GetAccountRequest.from(pbResp);
  }

  async getBlockMetas(req: IGetBlockMetasRequest): Promise<IGetBlockMetasResponse> {
    const pbReq = GetBlockMetasRequest.to(req);
    const pbResp = await this.client.getBlockMetas(pbReq);
    return GetBlockMetasRequest.from(pbResp);
  }

  async getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse> {
    const pbReq = GetChainMetaRequest.to(req);
    const pbResp = await this.client.getBlockMetas(pbReq);
    return GetChainMetaRequest.from(pbResp);
  }

  async getActions(req: IGetActionsRequest): Promise<IGetActionsResponse> {
    const pbReq = GetActionsRequest.to(req);
    const pbResp = await this.client.getActions(pbReq);
    return GetActionsRequest.from(pbResp);
  }

  async suggestGasPrice(req: ISuggestGasPriceRequest): Promise<ISuggestGasPriceResponse> {
    const pbReq = SuggestGasPriceRequest.to(req);
    const pbResp = await this.client.suggestGasPrice(pbReq);
    return SuggestGasPriceRequest.from(pbResp);
  }

  async sendAction(req: ISendActionRequest): Promise<ISendActionResponse> {
    const pbReq = SendActionRequest.to(req);
    const pbResp = await this.client.sendAction(pbReq);
    return SendActionRequest.from(pbResp);
  }
}
