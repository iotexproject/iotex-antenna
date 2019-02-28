// @flow
import {promisify} from 'util';
import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import type {
  IGetAccountRequest,
  IGetAccountResponse,
  IGetChainMetaRequest,
  IGetChainMetaResponse,
  IGetBlockMetasRequest,
  IGetBlockMetasResponse,
  IGetActionsRequest,
  IGetActionsResponse,
  ISuggestGasPriceRequest,
  ISuggestGasPriceResponse,
  IGetReceiptByActionRequest,
  IGetReceiptByActionResponse,
  IReadContractRequest,
  IReadContractResponse,
  ISendActionRequest,
  ISendActionResponse,
  IEstimateGasForActionRequest,
  IEstimateGasForActionResponse,
} from './types';

export default class RpcMethod {
  client: any;

  constructor(hostname: string) {
    const packageDefinition = protoLoader.loadSync(
      `${__dirname}/../proto/api.proto`,
      {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      });
    const iotexapi = grpc.loadPackageDefinition(packageDefinition).iotexapi;

    this.client = new iotexapi.APIService(hostname, grpc.credentials.createInsecure(), null);
  }

  async getAccount(req: IGetAccountRequest): Promise<IGetAccountResponse> {
    const getAccount = promisify(this.client.getAccount.bind(this.client));
    return await getAccount(req);
  }

  async getBlockMetas(req: IGetBlockMetasRequest): Promise<IGetBlockMetasResponse> {
    const getBlockMetas = promisify(this.client.getBlockMetas.bind(this.client));
    return await getBlockMetas(req);
  }

  async getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse> {
    const getChainMeta = promisify(this.client.getChainMeta.bind(this.client));
    return await getChainMeta(req);
  }

  async getActions(req: IGetActionsRequest): Promise<IGetActionsResponse> {
    const getActions = promisify(this.client.getActions.bind(this.client));
    return await getActions(req);
  }

  async suggestGasPrice(req: ISuggestGasPriceRequest): Promise<ISuggestGasPriceResponse> {
    const suggestGasPrice = promisify(this.client.suggestGasPrice.bind(this.client));
    return await suggestGasPrice(req);
  }

  async getReceiptByAction(req: IGetReceiptByActionRequest): Promise<IGetReceiptByActionResponse> {
    const getReceiptByAction = promisify(this.client.getReceiptByAction.bind(this.client));
    return await getReceiptByAction(req);
  }

  async readContract(req: IReadContractRequest): Promise<IReadContractResponse> {
    const readContract = promisify(this.client.readContract.bind(this.client));
    return await readContract(req);
  }

  async sendAction(req: ISendActionRequest): Promise<ISendActionResponse> {
    const sendAction = promisify(this.client.sendAction.bind(this.client));
    return await sendAction(req);
  }

  async estimateGasForAction(req: IEstimateGasForActionRequest): Promise<IEstimateGasForActionResponse> {
    const estimateGasForAction = promisify(this.client.estimateGasForAction.bind(this.client));
    return await estimateGasForAction(req);
  }
}
