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
  IReadStateRequest,
  IReadStateResponse,
  IRpcMethod,
  ISendActionRequest,
  ISendActionResponse,
  ISuggestGasPriceRequest,
  ISuggestGasPriceResponse,
  ReadStateRequest,
  SendActionResponse
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

type Opts = {
  timeout?: number;
};

export default class RpcMethod implements IRpcMethod {
  public client: grpcWeb.APIServicePromiseClient;
  public timeout: number;

  constructor(hostname: string, options: Opts = {}) {
    this.client = new grpcWeb.APIServicePromiseClient(hostname, null, null);
    this.timeout = options.timeout || 300000;
  }

  public setProvider(provider: string | IRpcMethod): void {
    if (typeof provider === "string") {
      this.client = new grpcWeb.APIServicePromiseClient(provider, null, null);
    } else {
      const origin = provider as RpcMethod;
      this.client = origin.client;
    }
  }

  public getDeadline(): string {
    return `${new Date(Date.now() + this.timeout).getTime()}`;
  }

  public async getAccount(
    req: IGetAccountRequest
  ): Promise<IGetAccountResponse> {
    const pbReq = GetAccountRequest.to(req);
    const pbResp = await this.client.getAccount(pbReq, {
      deadline: this.getDeadline()
    });
    return GetAccountRequest.from(pbResp);
  }

  public async getBlockMetas(
    req: IGetBlockMetasRequest
  ): Promise<IGetBlockMetasResponse> {
    const pbReq = GetBlockMetasRequest.to(req);
    const pbResp = await this.client.getBlockMetas(pbReq, {
      deadline: this.getDeadline()
    });
    return GetBlockMetasRequest.from(pbResp);
  }

  public async getChainMeta(
    req: IGetChainMetaRequest
  ): Promise<IGetChainMetaResponse> {
    const pbReq = GetChainMetaRequest.to(req);
    const pbResp = await this.client.getChainMeta(pbReq, {
      deadline: this.getDeadline()
    });
    return GetChainMetaRequest.from(pbResp);
  }

  public async getServerMeta(
    req: IGetServerMetaRequest
  ): Promise<IGetServerMetaResponse> {
    const pbReq = GetServerMetaRequest.to(req);
    const pbResp = await this.client.getServerMeta(pbReq, {
      deadline: this.getDeadline()
    });
    return GetServerMetaRequest.from(pbResp);
  }

  public async getActions(
    req: IGetActionsRequest
  ): Promise<IGetActionsResponse> {
    const pbReq = GetActionsRequest.to(req);
    const pbResp = await this.client.getActions(pbReq, {
      deadline: this.getDeadline()
    });
    return GetActionsRequest.from(pbResp);
  }

  public async suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse> {
    const pbReq = SuggestGasPriceRequest.to(req);
    const pbResp = await this.client.suggestGasPrice(pbReq, {
      deadline: this.getDeadline()
    });
    return SuggestGasPriceRequest.from(pbResp);
  }

  public async estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse> {
    const pbReq = EstimateGasForActionRequest.to(req);
    const pbResp = await this.client.estimateGasForAction(pbReq, {
      deadline: this.getDeadline()
    });
    return EstimateGasForActionRequest.from(pbResp);
  }

  public async readState(req: IReadStateRequest): Promise<IReadStateResponse> {
    const pbReq = ReadStateRequest.to(req);
    const pbResp = await this.client.readState(pbReq, {
      deadline: this.getDeadline()
    });
    return ReadStateRequest.from(pbResp);
  }

  public async readContract(
    req: IReadContractRequest
  ): Promise<IReadContractResponse> {
    const pbReq = ReadContractRequest.to(req);
    const pbResp = await this.client.readContract(pbReq, {
      deadline: this.getDeadline()
    });
    return ReadContractRequest.from(pbResp);
  }

  public async sendAction(
    req: ISendActionRequest
  ): Promise<ISendActionResponse> {
    const pbReq = SendActionRequest.to(req);
    const pbResp = await this.client.sendAction(pbReq, {
      deadline: this.getDeadline()
    });
    return SendActionResponse.from(pbResp);
  }

  public async getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse> {
    const pbReq = GetReceiptByActionRequest.to(req);
    const pbResp = await this.client.getReceiptByAction(pbReq, {
      deadline: this.getDeadline()
    });
    return GetReceiptByActionRequest.from(pbResp);
  }

  public async getEpochMeta(
    req: IGetEpochMetaRequest
  ): Promise<IGetEpochMetaResponse> {
    const pbReq = GetEpochMetaRequest.to(req);
    const pbResp = await this.client.getEpochMeta(pbReq, {
      deadline: this.getDeadline()
    });
    return GetEpochMetaRequest.from(pbResp);
  }
}
