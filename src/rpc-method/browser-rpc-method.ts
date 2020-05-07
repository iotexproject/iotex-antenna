import grpcWeb from "../../protogen/proto/api/api_grpc_web_pb";
import {
  ClientReadableStream,
  EstimateActionGasConsumptionRequest,
  GetLogsRequest,
  GetServerMetaRequest,
  IEstimateActionGasConsumptionRequest,
  IEstimateActionGasConsumptionResponse,
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
  IGetLogsRequest,
  IGetLogsResponse,
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
  IStreamBlocksRequest,
  IStreamBlocksResponse,
  IStreamLogsRequest,
  IStreamLogsResponse,
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
  StreamBlocksRequest,
  StreamLogsRequest,
  SuggestGasPriceRequest
} from "./types";

type Opts = {
  timeout?: number;
  apiToken?: string;
};

export default class RpcMethod implements IRpcMethod {
  public client: grpcWeb.APIServicePromiseClient;
  public timeout: number;
  public apiToken?: string;

  constructor(hostname: string, options: Opts = {}) {
    this.client = new grpcWeb.APIServicePromiseClient(hostname, null, null);
    this.timeout = options.timeout || 300000;
    this.apiToken = options.apiToken;
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

  private getMetadata(): { [s: string]: string } {
    if (this.apiToken) {
      return {
        deadline: this.getDeadline(),
        authorization: `bearer ${this.apiToken}`
      };
    }
    return {
      deadline: this.getDeadline()
    };
  }

  public async getAccount(
    req: IGetAccountRequest
  ): Promise<IGetAccountResponse> {
    const pbReq = GetAccountRequest.to(req);
    const pbResp = await this.client.getAccount(pbReq, this.getMetadata());
    return GetAccountRequest.from(pbResp);
  }

  public async getBlockMetas(
    req: IGetBlockMetasRequest
  ): Promise<IGetBlockMetasResponse> {
    const pbReq = GetBlockMetasRequest.to(req);
    const pbResp = await this.client.getBlockMetas(pbReq, this.getMetadata());
    return GetBlockMetasRequest.from(pbResp);
  }

  public async getChainMeta(
    req: IGetChainMetaRequest
  ): Promise<IGetChainMetaResponse> {
    const pbReq = GetChainMetaRequest.to(req);
    const pbResp = await this.client.getChainMeta(pbReq, this.getMetadata());
    return GetChainMetaRequest.from(pbResp);
  }

  public async getServerMeta(
    req: IGetServerMetaRequest
  ): Promise<IGetServerMetaResponse> {
    const pbReq = GetServerMetaRequest.to(req);
    const pbResp = await this.client.getServerMeta(pbReq, this.getMetadata());
    return GetServerMetaRequest.from(pbResp);
  }

  public async getActions(
    req: IGetActionsRequest
  ): Promise<IGetActionsResponse> {
    const pbReq = GetActionsRequest.to(req);
    const pbResp = await this.client.getActions(pbReq, this.getMetadata());
    return GetActionsRequest.from(pbResp);
  }

  public async suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse> {
    const pbReq = SuggestGasPriceRequest.to(req);
    const pbResp = await this.client.suggestGasPrice(pbReq, this.getMetadata());
    return SuggestGasPriceRequest.from(pbResp);
  }

  public async estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse> {
    const pbReq = EstimateGasForActionRequest.to(req);
    const pbResp = await this.client.estimateGasForAction(
      pbReq,
      this.getMetadata()
    );
    return EstimateGasForActionRequest.from(pbResp);
  }

  public async readState(req: IReadStateRequest): Promise<IReadStateResponse> {
    const pbReq = ReadStateRequest.to(req);
    const pbResp = await this.client.readState(pbReq, this.getMetadata());
    return ReadStateRequest.from(pbResp);
  }

  public async readContract(
    req: IReadContractRequest
  ): Promise<IReadContractResponse> {
    const pbReq = ReadContractRequest.to(req);
    const pbResp = await this.client.readContract(pbReq, this.getMetadata());
    return ReadContractRequest.from(pbResp);
  }

  public async sendAction(
    req: ISendActionRequest
  ): Promise<ISendActionResponse> {
    const pbReq = SendActionRequest.to(req);
    const pbResp = await this.client.sendAction(pbReq, this.getMetadata());
    return SendActionResponse.from(pbResp);
  }

  public async getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse> {
    const pbReq = GetReceiptByActionRequest.to(req);
    const pbResp = await this.client.getReceiptByAction(
      pbReq,
      this.getMetadata()
    );
    return GetReceiptByActionRequest.from(pbResp);
  }

  public async getEpochMeta(
    req: IGetEpochMetaRequest
  ): Promise<IGetEpochMetaResponse> {
    const pbReq = GetEpochMetaRequest.to(req);
    const pbResp = await this.client.getEpochMeta(pbReq, this.getMetadata());
    return GetEpochMetaRequest.from(pbResp);
  }

  public async getLogs(req: IGetLogsRequest): Promise<IGetLogsResponse> {
    const pbReq = GetLogsRequest.to(req);
    const pbResp = await this.client.getLogs(pbReq, this.getMetadata());
    return GetLogsRequest.from(pbResp);
  }

  public async estimateActionGasConsumption(
    req: IEstimateActionGasConsumptionRequest
  ): Promise<IEstimateActionGasConsumptionResponse> {
    const pbReq = EstimateActionGasConsumptionRequest.to(req);
    const pbResp = await this.client.estimateActionGasConsumption(
      pbReq,
      this.getMetadata()
    );
    return EstimateActionGasConsumptionRequest.from(pbResp);
  }

  public streamBlocks(
    req: IStreamBlocksRequest
  ): ClientReadableStream<IStreamBlocksResponse> {
    const pbReq = StreamBlocksRequest.to(req);
    // @ts-ignore
    const origin = this.client.streamBlocks(pbReq, this.getMetadata());

    return new ClientReadableStream(origin, "StreamBlocks");
  }

  public streamLogs(
    req: IStreamLogsRequest
  ): ClientReadableStream<IStreamLogsResponse> {
    const pbReq = StreamLogsRequest.to(req);
    // @ts-ignore
    const origin = this.client.streamLogs(pbReq, this.getMetadata());

    return new ClientReadableStream(origin, "StreamLogs");
  }
}
