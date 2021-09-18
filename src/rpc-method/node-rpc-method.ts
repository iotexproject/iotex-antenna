import * as protoLoader from "@grpc/proto-loader";
import grpc from "grpc";
import { promisify } from "util";
import { ROOT_CERTS } from "./root-certs";
import {
  ClientReadableStream,
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
  ISuggestGasPriceResponse
} from "./types";

const packageDefinition = protoLoader.loadSync(
  `${__dirname}/../../proto/api/api.proto`,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [`${__dirname}/../../`]
  }
);
const iotexapi = grpc.loadPackageDefinition(packageDefinition).iotexapi;

type Opts = {
  timeout?: number;
  enableSsl?: boolean;
  apiToken?: string;
};

export default class RpcMethod implements IRpcMethod {
  public client: IRpcMethod;
  public timeout: number;
  public apiToken?: string;
  private credentials: grpc.ChannelCredentials;

  constructor(hostname: string, options: Opts = {}) {
    const normalizedHostname = String(hostname).replace(
      /^(http:\/\/|https:\/\/)/,
      ""
    );
    if (hostname.startsWith("https://")) {
      options.enableSsl = true;
    }
    this.credentials =
      options && options.enableSsl
        ? grpc.credentials.createSsl(Buffer.from(ROOT_CERTS))
        : grpc.credentials.createInsecure();
    // @ts-ignore
    this.client = new iotexapi.APIService(
      normalizedHostname,
      this.credentials,
      null
    );
    this.timeout = options.timeout || 300000;
    this.apiToken = options.apiToken;
  }

  public setProvider(provider: string | IRpcMethod): void {
    if (typeof provider === "string") {
      const normalizedHostname = String(provider).replace(
        /^(http:\/\/|https:\/\/)/,
        ""
      );
      this.credentials = provider.startsWith("https://")
        ? grpc.credentials.createSsl(Buffer.from(ROOT_CERTS))
        : grpc.credentials.createInsecure();
      // @ts-ignore
      this.client = new iotexapi.APIService(
        normalizedHostname,
        this.credentials,
        null
      );
    } else {
      const origin = provider as RpcMethod;
      this.client = origin.client;
    }
  }

  public getDeadline(): number {
    return new Date(Date.now() + this.timeout).getTime();
  }

  private getMetadata(): grpc.Metadata {
    const metadata = new grpc.Metadata();
    metadata.add("deadline", this.getDeadline().toString());
    if (this.apiToken) {
      metadata.add("authorization", `bearer ${this.apiToken}`);
    }
    return metadata;
  }

  public async getAccount(
    req: IGetAccountRequest
  ): Promise<IGetAccountResponse> {
    const getAccount = promisify(this.client.getAccount.bind(this.client));
    // @ts-ignore
    return getAccount(req, this.getMetadata());
  }

  public async getBlockMetas(
    req: IGetBlockMetasRequest
  ): Promise<IGetBlockMetasResponse> {
    const getBlockMetas = promisify(
      this.client.getBlockMetas.bind(this.client)
    );
    // @ts-ignore
    return getBlockMetas(req, this.getMetadata());
  }

  public async getChainMeta(
    req: IGetChainMetaRequest
  ): Promise<IGetChainMetaResponse> {
    const getChainMeta = promisify(this.client.getChainMeta.bind(this.client));
    // @ts-ignore
    return getChainMeta(req, this.getMetadata());
  }

  public async getServerMeta(
    req: IGetServerMetaRequest
  ): Promise<IGetServerMetaResponse> {
    const getServerMeta = promisify(
      this.client.getServerMeta.bind(this.client)
    );
    // @ts-ignore
    return getServerMeta(req, this.getMetadata());
  }

  public async getActions(
    req: IGetActionsRequest
  ): Promise<IGetActionsResponse> {
    const getActions = promisify(this.client.getActions.bind(this.client));
    // @ts-ignore
    return getActions(req, this.getMetadata());
  }

  public async suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse> {
    const suggestGasPrice = promisify(
      this.client.suggestGasPrice.bind(this.client)
    );
    // @ts-ignore
    return suggestGasPrice(req, this.getMetadata());
  }

  public async getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse> {
    const getReceiptByAction = promisify(
      this.client.getReceiptByAction.bind(this.client)
    );
    // @ts-ignore
    return getReceiptByAction(req, this.getMetadata());
  }

  public async readContract(
    req: IReadContractRequest
  ): Promise<IReadContractResponse> {
    const readContract = promisify(this.client.readContract.bind(this.client));
    // @ts-ignore
    return readContract(req, this.getMetadata());
  }

  public async sendAction(
    req: ISendActionRequest
  ): Promise<ISendActionResponse> {
    const sendAction = promisify(this.client.sendAction.bind(this.client));
    // @ts-ignore
    return sendAction(req, this.getMetadata());
  }

  public async estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse> {
    const estimateGasForAction = promisify(
      this.client.estimateGasForAction.bind(this.client)
    );
    // @ts-ignore
    return estimateGasForAction(req, this.getMetadata());
  }

  public async readState(req: IReadStateRequest): Promise<IReadStateResponse> {
    const readState = promisify(this.client.readState.bind(this.client));
    // @ts-ignore
    return readState(req, this.getMetadata());
  }

  public async getEpochMeta(
    req: IGetEpochMetaRequest
  ): Promise<IGetEpochMetaResponse> {
    const getEpochMeta = promisify(this.client.getEpochMeta.bind(this.client));
    // @ts-ignore
    return getEpochMeta(req, this.getMetadata());
  }

  public async getLogs(req: IGetLogsRequest): Promise<IGetLogsResponse> {
    const getLogs = promisify(this.client.getLogs.bind(this.client));
    // @ts-ignore
    return getLogs(req, this.getMetadata());
  }

  public async estimateActionGasConsumption(
    req: IEstimateActionGasConsumptionRequest
  ): Promise<IEstimateActionGasConsumptionResponse> {
    const estimateActionGasConsumption = promisify(
      this.client.estimateActionGasConsumption.bind(this.client)
    );
    // @ts-ignore
    return estimateActionGasConsumption(req, this.getMetadata());
  }

  public streamBlocks(
    req: IStreamBlocksRequest
  ): ClientReadableStream<IStreamBlocksResponse> {
    // @ts-ignore
    return this.client.streamBlocks(req, this.getMetadata());
  }

  public streamLogs(
    req: IStreamLogsRequest
  ): ClientReadableStream<IStreamLogsResponse> {
    // @ts-ignore
    return this.client.streamLogs(req, this.getMetadata());
  }
}
