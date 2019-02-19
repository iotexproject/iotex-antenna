// @flow
import {promisify} from 'util';
import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import type {IGetAccountRequest, IGetAccountResponse, IGetChainMetaRequest, IGetChainMetaResponse} from './types';

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

  async getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse> {
    const getChainMeta = promisify(this.client.getChainMeta.bind(this.client));
    return await getChainMeta(req);
  }
}
