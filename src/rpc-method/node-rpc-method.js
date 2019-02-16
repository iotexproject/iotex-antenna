// @flow
import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import type {IGetAccountRequest, IGetAccountResponse} from './types';

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
    return new Promise<IGetAccountResponse>((resolve, reject) => {
      this.client.getAccount(req, (err, pbResp) => {
        if (err) {
          return reject(err);
        }

        return resolve((pbResp));
      });
    });
  }
}
