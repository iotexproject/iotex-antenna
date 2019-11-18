import * as grpcWeb from 'grpc-web';

import * as proto_types_action_pb from '../../proto/types/action_pb';
import * as proto_types_blockchain_pb from '../../proto/types/blockchain_pb';
import * as proto_types_node_pb from '../../proto/types/node_pb';
import * as proto_types_election_pb from '../../proto/types/election_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  EstimateActionGasConsumptionRequest,
  EstimateActionGasConsumptionResponse,
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
  GetElectionBucketsRequest,
  GetElectionBucketsResponse,
  GetEpochMetaRequest,
  GetEpochMetaResponse,
  GetLogsRequest,
  GetLogsResponse,
  GetRawBlocksRequest,
  GetRawBlocksResponse,
  GetReceiptByActionRequest,
  GetReceiptByActionResponse,
  GetServerMetaRequest,
  GetServerMetaResponse,
  GetVotesRequest,
  GetVotesResponse,
  ReadContractRequest,
  ReadContractResponse,
  ReadStateRequest,
  ReadStateResponse,
  SendActionRequest,
  SendActionResponse,
  StreamBlocksRequest,
  StreamBlocksResponse,
  StreamLogsRequest,
  StreamLogsResponse,
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

  getServerMeta(
    request: GetServerMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetServerMetaResponse) => void
  ): grpcWeb.ClientReadableStream<GetServerMetaResponse>;

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

  estimateActionGasConsumption(
    request: EstimateActionGasConsumptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: EstimateActionGasConsumptionResponse) => void
  ): grpcWeb.ClientReadableStream<EstimateActionGasConsumptionResponse>;

  readState(
    request: ReadStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ReadStateResponse) => void
  ): grpcWeb.ClientReadableStream<ReadStateResponse>;

  getEpochMeta(
    request: GetEpochMetaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetEpochMetaResponse) => void
  ): grpcWeb.ClientReadableStream<GetEpochMetaResponse>;

  getRawBlocks(
    request: GetRawBlocksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetRawBlocksResponse) => void
  ): grpcWeb.ClientReadableStream<GetRawBlocksResponse>;

  getLogs(
    request: GetLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetLogsResponse) => void
  ): grpcWeb.ClientReadableStream<GetLogsResponse>;

  getVotes(
    request: GetVotesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetVotesResponse) => void
  ): grpcWeb.ClientReadableStream<GetVotesResponse>;

  streamBlocks(
    request: StreamBlocksRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<StreamBlocksResponse>;

  streamLogs(
    request: StreamLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<StreamLogsResponse>;

  getElectionBuckets(
    request: GetElectionBucketsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetElectionBucketsResponse) => void
  ): grpcWeb.ClientReadableStream<GetElectionBucketsResponse>;

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

  estimateActionGasConsumption(
    request: EstimateActionGasConsumptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<EstimateActionGasConsumptionResponse>;

  readState(
    request: ReadStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ReadStateResponse>;

  getEpochMeta(
    request: GetEpochMetaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetEpochMetaResponse>;

  getRawBlocks(
    request: GetRawBlocksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetRawBlocksResponse>;

  getLogs(
    request: GetLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetLogsResponse>;

  getVotes(
    request: GetVotesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetVotesResponse>;

  streamBlocks(
    request: StreamBlocksRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<StreamBlocksResponse>;

  streamLogs(
    request: StreamLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<StreamLogsResponse>;

  getElectionBuckets(
    request: GetElectionBucketsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetElectionBucketsResponse>;

}

