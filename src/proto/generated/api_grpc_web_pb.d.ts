import * as grpcWeb from "grpc-web";

import * as action_pb from "./action_pb";
import * as blockchain_pb from "./blockchain_pb";
import * as node_pb from "./node_pb";

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
  GetProductivityRequest,
  GetProductivityResponse,
  GetReceiptByActionRequest,
  GetReceiptByActionResponse,
  GetServerMetaRequest,
  GetServerMetaResponse,
  ReadContractRequest,
  ReadContractResponse,
  ReadStateRequest,
  ReadStateResponse,
  SendActionRequest,
  SendActionResponse,
  SuggestGasPriceRequest,
  SuggestGasPriceResponse
} from "./api_pb";

export class APIServiceClient {
  constructor(
    hostname: string,
    credentials: null | { [index: string]: string },
    options: null | { [index: string]: string }
  );

  getAccount(
    request: GetAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetAccountResponse) => void
  ): grpcWeb.ClientReadableStream<GetAccountResponse>;

  getActions(
    request: GetActionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetActionsResponse) => void
  ): grpcWeb.ClientReadableStream<GetActionsResponse>;

  getBlockMetas(
    request: GetBlockMetasRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetBlockMetasResponse) => void
  ): grpcWeb.ClientReadableStream<GetBlockMetasResponse>;

  getChainMeta(
    request: GetChainMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetChainMetaResponse) => void
  ): grpcWeb.ClientReadableStream<GetChainMetaResponse>;

  getServerMeta(
    request: GetServerMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetServerMetaResponse) => void
  ): grpcWeb.ClientReadableStream<GetServerMetaResponse>;

  sendAction(
    request: SendActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: SendActionResponse) => void
  ): grpcWeb.ClientReadableStream<SendActionResponse>;

  getReceiptByAction(
    request: GetReceiptByActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetReceiptByActionResponse) => void
  ): grpcWeb.ClientReadableStream<GetReceiptByActionResponse>;

  readContract(
    request: ReadContractRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: ReadContractResponse) => void
  ): grpcWeb.ClientReadableStream<ReadContractResponse>;

  suggestGasPrice(
    request: SuggestGasPriceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: SuggestGasPriceResponse) => void
  ): grpcWeb.ClientReadableStream<SuggestGasPriceResponse>;

  estimateGasForAction(
    request: EstimateGasForActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.Error,
      response: EstimateGasForActionResponse
    ) => void
  ): grpcWeb.ClientReadableStream<EstimateGasForActionResponse>;

  readState(
    request: ReadStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: ReadStateResponse) => void
  ): grpcWeb.ClientReadableStream<ReadStateResponse>;

  getProductivity(
    request: GetProductivityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: GetProductivityResponse) => void
  ): grpcWeb.ClientReadableStream<GetProductivityResponse>;
}

export class APIServicePromiseClient {
  constructor(
    hostname: string,
    credentials: null | { [index: string]: string },
    options: null | { [index: string]: string }
  );

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

  getServerMeta(
    request: GetServerMetaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetServerMetaResponse>;

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

  readState(
    request: ReadStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ReadStateResponse>;

  getProductivity(
    request: GetProductivityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetProductivityResponse>;
}
