import * as grpcWeb from 'grpc-web';

import * as action_pb from './action_pb';
import * as blockchain_pb from './blockchain_pb';
import * as state_pb from './state_pb';

import {
  EstimateGasForActionRequest,
  EstimateGasForActionResponse,
  GetAccountRequest,
  GetAccountResponse,
  GetActionsRequest,
  GetActionsResponse,
  GetBlockMetasRequest,
  GetBlockMetasResponse,
  GetChainMetaRequest,
  GetChainMetaResponse,
  GetReceiptByActionRequest,
  GetReceiptByActionResponse,
  ReadContractRequest,
  ReadContractResponse,
  SendActionRequest,
  SendActionResponse,
  SuggestGasPriceRequest,
  SuggestGasPriceResponse} from './api_pb';

export class APIServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getAccount(
    request: GetAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetAccountResponse) => void
  ): grpcWeb.ClientReadableStream<GetAccountResponse>;

  getActions(
    request: GetActionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetActionsResponse) => void
  ): grpcWeb.ClientReadableStream<GetActionsResponse>;

  getBlockMetas(
    request: GetBlockMetasRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetBlockMetasResponse) => void
  ): grpcWeb.ClientReadableStream<GetBlockMetasResponse>;

  getChainMeta(
    request: GetChainMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetChainMetaResponse) => void
  ): grpcWeb.ClientReadableStream<GetChainMetaResponse>;

  sendAction(
    request: SendActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SendActionResponse) => void
  ): grpcWeb.ClientReadableStream<SendActionResponse>;

  getReceiptByAction(
    request: GetReceiptByActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetReceiptByActionResponse) => void
  ): grpcWeb.ClientReadableStream<GetReceiptByActionResponse>;

  readContract(
    request: ReadContractRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ReadContractResponse) => void
  ): grpcWeb.ClientReadableStream<ReadContractResponse>;

  suggestGasPrice(
    request: SuggestGasPriceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SuggestGasPriceResponse) => void
  ): grpcWeb.ClientReadableStream<SuggestGasPriceResponse>;

  estimateGasForAction(
    request: EstimateGasForActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: EstimateGasForActionResponse) => void
  ): grpcWeb.ClientReadableStream<EstimateGasForActionResponse>;

}

export class APIServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getAccount(
    request: GetAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetAccountResponse>;

  getActions(
    request: GetActionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetActionsResponse>;

  getBlockMetas(
    request: GetBlockMetasRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetBlockMetasResponse>;

  getChainMeta(
    request: GetChainMetaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetChainMetaResponse>;

  sendAction(
    request: SendActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SendActionResponse>;

  getReceiptByAction(
    request: GetReceiptByActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetReceiptByActionResponse>;

  readContract(
    request: ReadContractRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ReadContractResponse>;

  suggestGasPrice(
    request: SuggestGasPriceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SuggestGasPriceResponse>;

  estimateGasForAction(
    request: EstimateGasForActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<EstimateGasForActionResponse>;

}

