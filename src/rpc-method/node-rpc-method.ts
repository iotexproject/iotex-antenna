import * as protoLoader from "@grpc/proto-loader";
import grpc from "grpc";
import { promisify } from "util";
import {
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
  IGetReceiptByActionRequest,
  IGetReceiptByActionResponse,
  IReadContractRequest,
  IReadContractResponse,
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

export default class RpcMethod implements IRpcMethod {
  public client: IRpcMethod;

  constructor(hostname: string) {
    const iotexapi = grpc.loadPackageDefinition(packageDefinition).iotexapi;

    // @ts-ignore
    this.client = new iotexapi.APIService(
      hostname,
      grpc.credentials.createInsecure(),
      null
    );
  }

  public async getAccount(
    req: IGetAccountRequest
  ): Promise<IGetAccountResponse> {
    const getAccount = promisify(this.client.getAccount.bind(this.client));
    // @ts-ignore
    return getAccount(req);
  }

  public async getBlockMetas(
    req: IGetBlockMetasRequest
  ): Promise<IGetBlockMetasResponse> {
    const getBlockMetas = promisify(
      this.client.getBlockMetas.bind(this.client)
    );
    // @ts-ignore
    return getBlockMetas(req);
  }

  public async getChainMeta(
    req: IGetChainMetaRequest
  ): Promise<IGetChainMetaResponse> {
    const getChainMeta = promisify(this.client.getChainMeta.bind(this.client));
    // @ts-ignore
    return getChainMeta(req);
  }

  public async getActions(
    req: IGetActionsRequest
  ): Promise<IGetActionsResponse> {
    const getActions = promisify(this.client.getActions.bind(this.client));
    // @ts-ignore
    return getActions(req);
  }

  public async suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse> {
    const suggestGasPrice = promisify(
      this.client.suggestGasPrice.bind(this.client)
    );
    // @ts-ignore
    return suggestGasPrice(req);
  }

  public async getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse> {
    const getReceiptByAction = promisify(
      this.client.getReceiptByAction.bind(this.client)
    );
    // @ts-ignore
    return getReceiptByAction(req);
  }

  public async readContract(
    req: IReadContractRequest
  ): Promise<IReadContractResponse> {
    const readContract = promisify(this.client.readContract.bind(this.client));
    // @ts-ignore
    return readContract(req);
  }

  public async sendAction(
    req: ISendActionRequest
  ): Promise<ISendActionResponse> {
    const sendAction = promisify(this.client.sendAction.bind(this.client));
    return sendAction(req);
  }

  public async estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse> {
    const estimateGasForAction = promisify(
      this.client.estimateGasForAction.bind(this.client)
    );
    // @ts-ignore
    return estimateGasForAction(req);
  }
}
