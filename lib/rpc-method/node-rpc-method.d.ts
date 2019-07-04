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
  ISuggestGasPriceResponse
} from "./types";
declare type Opts = {
  timeout?: number;
  enableSsl?: boolean;
};
export default class RpcMethod implements IRpcMethod {
  client: IRpcMethod;
  timeout: number;
  private readonly credentials;
  constructor(hostname: string, options?: Opts);
  setProvider(provider: string | IRpcMethod): void;
  getDeadline(): Date;
  getAccount(req: IGetAccountRequest): Promise<IGetAccountResponse>;
  getBlockMetas(req: IGetBlockMetasRequest): Promise<IGetBlockMetasResponse>;
  getChainMeta(req: IGetChainMetaRequest): Promise<IGetChainMetaResponse>;
  getServerMeta(req: IGetServerMetaRequest): Promise<IGetServerMetaResponse>;
  getActions(req: IGetActionsRequest): Promise<IGetActionsResponse>;
  suggestGasPrice(
    req: ISuggestGasPriceRequest
  ): Promise<ISuggestGasPriceResponse>;
  getReceiptByAction(
    req: IGetReceiptByActionRequest
  ): Promise<IGetReceiptByActionResponse>;
  readContract(req: IReadContractRequest): Promise<IReadContractResponse>;
  sendAction(req: ISendActionRequest): Promise<ISendActionResponse>;
  estimateGasForAction(
    req: IEstimateGasForActionRequest
  ): Promise<IEstimateGasForActionResponse>;
  readState(req: IReadStateRequest): Promise<IReadStateResponse>;
  getEpochMeta(req: IGetEpochMetaRequest): Promise<IGetEpochMetaResponse>;
}
export {};
