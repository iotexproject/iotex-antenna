import * as grpcWeb from 'grpc-web';

import * as proto_api_api_pb from '../../proto/api/api_pb';


export class APIServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAccount(
    request: proto_api_api_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetAccountResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetAccountResponse>;

  getActions(
    request: proto_api_api_pb.GetActionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetActionsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetActionsResponse>;

  getBlockMetas(
    request: proto_api_api_pb.GetBlockMetasRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetBlockMetasResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetBlockMetasResponse>;

  getChainMeta(
    request: proto_api_api_pb.GetChainMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetChainMetaResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetChainMetaResponse>;

  getServerMeta(
    request: proto_api_api_pb.GetServerMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetServerMetaResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetServerMetaResponse>;

  sendAction(
    request: proto_api_api_pb.SendActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.SendActionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.SendActionResponse>;

  getReceiptByAction(
    request: proto_api_api_pb.GetReceiptByActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetReceiptByActionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetReceiptByActionResponse>;

  readContract(
    request: proto_api_api_pb.ReadContractRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.ReadContractResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.ReadContractResponse>;

  suggestGasPrice(
    request: proto_api_api_pb.SuggestGasPriceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.SuggestGasPriceResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.SuggestGasPriceResponse>;

  estimateGasForAction(
    request: proto_api_api_pb.EstimateGasForActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.EstimateGasForActionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.EstimateGasForActionResponse>;

  estimateActionGasConsumption(
    request: proto_api_api_pb.EstimateActionGasConsumptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.EstimateActionGasConsumptionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.EstimateActionGasConsumptionResponse>;

  readState(
    request: proto_api_api_pb.ReadStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.ReadStateResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.ReadStateResponse>;

  getEpochMeta(
    request: proto_api_api_pb.GetEpochMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetEpochMetaResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetEpochMetaResponse>;

  getRawBlocks(
    request: proto_api_api_pb.GetRawBlocksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetRawBlocksResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetRawBlocksResponse>;

  getLogs(
    request: proto_api_api_pb.GetLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetLogsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetLogsResponse>;

  getVotes(
    request: proto_api_api_pb.GetVotesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetVotesResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetVotesResponse>;

  getEvmTransfersByActionHash(
    request: proto_api_api_pb.GetEvmTransfersByActionHashRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetEvmTransfersByActionHashResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetEvmTransfersByActionHashResponse>;

  getEvmTransfersByBlockHeight(
    request: proto_api_api_pb.GetEvmTransfersByBlockHeightRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetEvmTransfersByBlockHeightResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetEvmTransfersByBlockHeightResponse>;

  streamBlocks(
    request: proto_api_api_pb.StreamBlocksRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.StreamBlocksResponse>;

  streamLogs(
    request: proto_api_api_pb.StreamLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.StreamLogsResponse>;

  getElectionBuckets(
    request: proto_api_api_pb.GetElectionBucketsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_api_api_pb.GetElectionBucketsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.GetElectionBucketsResponse>;

}

export class APIServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAccount(
    request: proto_api_api_pb.GetAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetAccountResponse>;

  getActions(
    request: proto_api_api_pb.GetActionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetActionsResponse>;

  getBlockMetas(
    request: proto_api_api_pb.GetBlockMetasRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetBlockMetasResponse>;

  getChainMeta(
    request: proto_api_api_pb.GetChainMetaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetChainMetaResponse>;

  getServerMeta(
    request: proto_api_api_pb.GetServerMetaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetServerMetaResponse>;

  sendAction(
    request: proto_api_api_pb.SendActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.SendActionResponse>;

  getReceiptByAction(
    request: proto_api_api_pb.GetReceiptByActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetReceiptByActionResponse>;

  readContract(
    request: proto_api_api_pb.ReadContractRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.ReadContractResponse>;

  suggestGasPrice(
    request: proto_api_api_pb.SuggestGasPriceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.SuggestGasPriceResponse>;

  estimateGasForAction(
    request: proto_api_api_pb.EstimateGasForActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.EstimateGasForActionResponse>;

  estimateActionGasConsumption(
    request: proto_api_api_pb.EstimateActionGasConsumptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.EstimateActionGasConsumptionResponse>;

  readState(
    request: proto_api_api_pb.ReadStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.ReadStateResponse>;

  getEpochMeta(
    request: proto_api_api_pb.GetEpochMetaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetEpochMetaResponse>;

  getRawBlocks(
    request: proto_api_api_pb.GetRawBlocksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetRawBlocksResponse>;

  getLogs(
    request: proto_api_api_pb.GetLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetLogsResponse>;

  getVotes(
    request: proto_api_api_pb.GetVotesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetVotesResponse>;

  getEvmTransfersByActionHash(
    request: proto_api_api_pb.GetEvmTransfersByActionHashRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetEvmTransfersByActionHashResponse>;

  getEvmTransfersByBlockHeight(
    request: proto_api_api_pb.GetEvmTransfersByBlockHeightRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetEvmTransfersByBlockHeightResponse>;

  streamBlocks(
    request: proto_api_api_pb.StreamBlocksRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.StreamBlocksResponse>;

  streamLogs(
    request: proto_api_api_pb.StreamLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_api_api_pb.StreamLogsResponse>;

  getElectionBuckets(
    request: proto_api_api_pb.GetElectionBucketsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_api_api_pb.GetElectionBucketsResponse>;

}

