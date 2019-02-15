// @flow
import grpcWeb from '../proto/api_grpc_web_pb';
import type {IGetAccountRequest, IGetAccountResponse} from './types';
import {GetAccountRequest} from './types';

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
}
