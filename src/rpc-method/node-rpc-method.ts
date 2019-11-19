import * as protoLoader from "@grpc/proto-loader";
import grpc from "grpc";
import { promisify } from "util";
import { ROOT_CERTS } from "./root-certs";
import {
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
};

export default class RpcMethod implements IRpcMethod {
  public client: IRpcMethod;
  public timeout: number;
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

  public getDeadline(): Date {
    return new Date(Date.now() + this.timeout);
  }

  public async getAccount(
    req: IGetAccountRequest
  ): Promise<IGetAccountResponse> {
    const getAccount = promisify(this.client.getAccount.bind(this.client));
    // @ts-ignore
    return getAccount(req, { deadline: this.getDeadline() });
  }

  public async getBlockMetas(
    req: IGetBlockMetasRequest
  ): Promise<IGetBlockMetasResponse> {
    const getBlockMetas = promisify(
      this.client.getBlockMetas.bind(this.client)
    );
    // @ts-ignore
    return getBlockMetas(req, { deadline: this.getDeadline() });
  }

  public async getChainMeta(
    req: IGetChainMetaRequest
  ): Promise<IGetChainMetaResponse> {
    const getChainMeta = promisify(this.client.getChainMeta.bind(this.client));
    // @ts-ignore
    return getChainMeta(req, { deadline: this.getDeadline() });
  }

  public async getServerMeta(
    req: IGetServerMetaRequest
  ): Promise<IGetServerMetaResponse> {
    const getServerMeta = promisify(
      this.client.getServerMeta.bind(this.client)
    );
    // @ts-ignore
    return getServerMeta(req, { deadline: this.getDeadline() });
  }

  public async getActions(
    req: IGetActionsRequest
  ): Promise<IGetActionsResponse> {
    const getActions = promisify(this.client.getActions.bind(this.client));
    // @ts-ignore
    return getActions(req, { deadline: this.getDeadline() });
  }

  public async suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse> {
    const suggestGasPrice = promisify(
      this.client.suggestGasPrice.bind(this.client)
    );
    // @ts-ignore
    return suggestGasPrice(req, { deadline: this.getDeadline() });
  }

  public async getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse> {
    const getReceiptByAction = promisify(
      this.client.getReceiptByAction.bind(this.client)
    );
    // @ts-ignore
    return getReceiptByAction(req, { deadline: this.getDeadline() });
  }

  public async readContract(
    req: IReadContractRequest
  ): Promise<IReadContractResponse> {
    const readContract = promisify(this.client.readContract.bind(this.client));
    // @ts-ignore
    return readContract(req, { deadline: this.getDeadline() });
  }

  public async sendAction(
    req: ISendActionRequest
  ): Promise<ISendActionResponse> {
    const sendAction = promisify(this.client.sendAction.bind(this.client));
    // @ts-ignore
    return sendAction(req, { deadline: this.getDeadline() });
  }

  public async estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse> {
    const estimateGasForAction = promisify(
      this.client.estimateGasForAction.bind(this.client)
    );
    // @ts-ignore
    return estimateGasForAction(req, { deadline: this.getDeadline() });
  }

  public async readState(req: IReadStateRequest): Promise<IReadStateResponse> {
    const readState = promisify(this.client.readState.bind(this.client));
    // @ts-ignore
    return readState(req, { deadline: this.getDeadline() });
  }

  public async getEpochMeta(
    req: IGetEpochMetaRequest
  ): Promise<IGetEpochMetaResponse> {
    const getEpochMeta = promisify(this.client.getEpochMeta.bind(this.client));
    // @ts-ignore
    return getEpochMeta(req, { deadline: this.getDeadline() });
  }

  public async getLogs(req: IGetLogsRequest): Promise<IGetLogsResponse> {
    const getLogs = promisify(this.client.getLogs.bind(this.client));
    // @ts-ignore
    return getLogs(req, { deadline: this.getDeadline() });
  }

  public async estimateActionGasConsumption(
    req: IEstimateActionGasConsumptionRequest
  ): Promise<IEstimateActionGasConsumptionResponse> {
    const estimateActionGasConsumption = promisify(
      this.client.estimateActionGasConsumption.bind(this.client)
    );
    // @ts-ignore
    return estimateActionGasConsumption(req, { deadline: this.getDeadline() });
  }
}
