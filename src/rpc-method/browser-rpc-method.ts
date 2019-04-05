import grpcWeb from "../../protogen/proto/api/api_grpc_web_pb";
import {
  GetServerMetaRequest,
  IEstimateGasForActionRequest,
  IEstimateGasForActionResponse,
  IGetAccountRequest,
  IGetAccountResponse,
  IGetActionsRequest,
  IGetActionsResponse,
  IGetBlockMetasRequest,
  IGetBlockMetasResponse,
  IGetChainMetaRequest,
  IGetChainMetaResponse,
  IGetEpochMetaRequest,
  IGetEpochMetaResponse,
  IGetReceiptByActionRequest,
  IGetReceiptByActionResponse,
  IGetServerMetaRequest,
  IGetServerMetaResponse,
  IReadContractRequest,
  IReadContractResponse,
  IRpcMethod,
  ISendActionRequest,
  ISendActionResponse,
  ISuggestGasPriceRequest,
  ISuggestGasPriceResponse
} from "./types";

import {
  EstimateGasForActionRequest,
  GetAccountRequest,
  GetActionsRequest,
  GetBlockMetasRequest,
  GetChainMetaRequest,
  GetEpochMetaRequest,
  GetReceiptByActionRequest,
  ReadContractRequest,
  SendActionRequest,
  SuggestGasPriceRequest
} from "./types";

export default class RpcMethod implements IRpcMethod {
  public client: grpcWeb.APIServicePromiseClient;

  constructor(hostname: string) {
    this.client = new grpcWeb.APIServicePromiseClient(hostname, null, null);
  }

  public async getAccount(
    req: IGetAccountRequest
  ): Promise<IGetAccountResponse> {
    const pbReq = GetAccountRequest.to(req);
    const pbResp = await this.client.getAccount(pbReq);
    return GetAccountRequest.from(pbResp);
  }

  public async getBlockMetas(
    req: IGetBlockMetasRequest
  ): Promise<IGetBlockMetasResponse> {
    const pbReq = GetBlockMetasRequest.to(req);
    const pbResp = await this.client.getBlockMetas(pbReq);
    return GetBlockMetasRequest.from(pbResp);
  }

  public async getChainMeta(
    req: IGetChainMetaRequest
  ): Promise<IGetChainMetaResponse> {
    const pbReq = GetChainMetaRequest.to(req);
    const pbResp = await this.client.getChainMeta(pbReq);
    return GetChainMetaRequest.from(pbResp);
  }

  public async getServerMeta(
    req: IGetServerMetaRequest
  ): Promise<IGetServerMetaResponse> {
    const pbReq = GetServerMetaRequest.to(req);
    const pbResp = await this.client.getServerMeta(pbReq);
    return GetServerMetaRequest.from(pbResp);
  }

  public async getActions(
    req: IGetActionsRequest
  ): Promise<IGetActionsResponse> {
    const pbReq = GetActionsRequest.to(req);
    const pbResp = await this.client.getActions(pbReq);
    return GetActionsRequest.from(pbResp);
  }

  public async suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse> {
    const pbReq = SuggestGasPriceRequest.to(req);
    const pbResp = await this.client.suggestGasPrice(pbReq);
    return SuggestGasPriceRequest.from(pbResp);
  }

  public async estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse> {
    const pbReq = EstimateGasForActionRequest.to(req);
    const pbResp = await this.client.estimateGasForAction(pbReq);
    return EstimateGasForActionRequest.from(pbResp);
  }

  public async readContract(
    req: IReadContractRequest
  ): Promise<IReadContractResponse> {
    const pbReq = ReadContractRequest.to(req);
    const pbResp = await this.client.readContract(pbReq);
    return ReadContractRequest.from(pbResp);
  }

  public async sendAction(
    req: ISendActionRequest
  ): Promise<ISendActionResponse> {
    const pbReq = SendActionRequest.to(req);
    const pbResp = await this.client.sendAction(pbReq);
    return SendActionRequest.from(pbResp);
  }

  public async getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse> {
    const pbReq = GetReceiptByActionRequest.to(req);
    const pbResp = await this.client.getReceiptByAction(pbReq);
    return GetReceiptByActionRequest.from(pbResp);
  }

  public async getEpochMeta(
    req: IGetEpochMetaRequest
  ): Promise<IGetEpochMetaResponse> {
    const pbReq = GetEpochMetaRequest.to(req);
    const pbResp = await this.client.getEpochMeta(pbReq);
    return GetEpochMetaRequest.from(pbResp);
  }
}
