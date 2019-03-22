import * as jspb from "google-protobuf";

import * as action_pb from "./action_pb";
import * as blockchain_pb from "./blockchain_pb";
import * as node_pb from "./node_pb";

export class GetAccountRequest extends jspb.Message {
  constructor();
  getAddress(): string;
  setAddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetAccountRequest
  ): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetAccountRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(
    message: GetAccountRequest,
    reader: jspb.BinaryReader
  ): GetAccountRequest;
}

export declare namespace GetAccountRequest {
  export type AsObject = {
    address: string;
  };
}

export class GetAccountResponse extends jspb.Message {
  constructor();
  getAccountmeta(): blockchain_pb.AccountMeta | undefined;
  setAccountmeta(value?: blockchain_pb.AccountMeta): void;
  clearAccountmeta(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetAccountResponse
  ): GetAccountResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetAccountResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(
    message: GetAccountResponse,
    reader: jspb.BinaryReader
  ): GetAccountResponse;
}

export declare namespace GetAccountResponse {
  export type AsObject = {
    accountmeta?: blockchain_pb.AccountMeta.AsObject;
  };
}

export class GetActionsRequest extends jspb.Message {
  constructor();
  getByindex(): GetActionsByIndexRequest | undefined;
  setByindex(value?: GetActionsByIndexRequest): void;
  clearByindex(): void;
  getByhash(): GetActionByHashRequest | undefined;
  setByhash(value?: GetActionByHashRequest): void;
  clearByhash(): void;
  getByaddr(): GetActionsByAddressRequest | undefined;
  setByaddr(value?: GetActionsByAddressRequest): void;
  clearByaddr(): void;
  getUnconfirmedbyaddr(): GetUnconfirmedActionsByAddressRequest | undefined;
  setUnconfirmedbyaddr(value?: GetUnconfirmedActionsByAddressRequest): void;
  clearUnconfirmedbyaddr(): void;
  getByblk(): GetActionsByBlockRequest | undefined;
  setByblk(value?: GetActionsByBlockRequest): void;
  clearByblk(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActionsRequest
  ): GetActionsRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetActionsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsRequest;
  static deserializeBinaryFromReader(
    message: GetActionsRequest,
    reader: jspb.BinaryReader
  ): GetActionsRequest;
}

export declare namespace GetActionsRequest {
  export type AsObject = {
    byindex?: GetActionsByIndexRequest.AsObject;
    byhash?: GetActionByHashRequest.AsObject;
    byaddr?: GetActionsByAddressRequest.AsObject;
    unconfirmedbyaddr?: GetUnconfirmedActionsByAddressRequest.AsObject;
    byblk?: GetActionsByBlockRequest.AsObject;
  };
}

export class GetActionsByIndexRequest extends jspb.Message {
  constructor();
  getStart(): number;
  setStart(value: number): void;
  getCount(): number;
  setCount(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByIndexRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActionsByIndexRequest
  ): GetActionsByIndexRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetActionsByIndexRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByIndexRequest;
  static deserializeBinaryFromReader(
    message: GetActionsByIndexRequest,
    reader: jspb.BinaryReader
  ): GetActionsByIndexRequest;
}

export declare namespace GetActionsByIndexRequest {
  export type AsObject = {
    start: number;
    count: number;
  };
}

export class GetActionByHashRequest extends jspb.Message {
  constructor();
  getActionhash(): string;
  setActionhash(value: string): void;
  getCheckpending(): boolean;
  setCheckpending(value: boolean): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionByHashRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActionByHashRequest
  ): GetActionByHashRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetActionByHashRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetActionByHashRequest;
  static deserializeBinaryFromReader(
    message: GetActionByHashRequest,
    reader: jspb.BinaryReader
  ): GetActionByHashRequest;
}

export declare namespace GetActionByHashRequest {
  export type AsObject = {
    actionhash: string;
    checkpending: boolean;
  };
}

export class GetActionsByAddressRequest extends jspb.Message {
  constructor();
  getAddress(): string;
  setAddress(value: string): void;
  getStart(): number;
  setStart(value: number): void;
  getCount(): number;
  setCount(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByAddressRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActionsByAddressRequest
  ): GetActionsByAddressRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetActionsByAddressRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByAddressRequest;
  static deserializeBinaryFromReader(
    message: GetActionsByAddressRequest,
    reader: jspb.BinaryReader
  ): GetActionsByAddressRequest;
}

export declare namespace GetActionsByAddressRequest {
  export type AsObject = {
    address: string;
    start: number;
    count: number;
  };
}

export class GetUnconfirmedActionsByAddressRequest extends jspb.Message {
  constructor();
  getAddress(): string;
  setAddress(value: string): void;
  getStart(): number;
  setStart(value: number): void;
  getCount(): number;
  setCount(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean
  ): GetUnconfirmedActionsByAddressRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetUnconfirmedActionsByAddressRequest
  ): GetUnconfirmedActionsByAddressRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetUnconfirmedActionsByAddressRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(
    bytes: Uint8Array
  ): GetUnconfirmedActionsByAddressRequest;
  static deserializeBinaryFromReader(
    message: GetUnconfirmedActionsByAddressRequest,
    reader: jspb.BinaryReader
  ): GetUnconfirmedActionsByAddressRequest;
}

export declare namespace GetUnconfirmedActionsByAddressRequest {
  export type AsObject = {
    address: string;
    start: number;
    count: number;
  };
}

export class GetActionsByBlockRequest extends jspb.Message {
  constructor();
  getBlkhash(): string;
  setBlkhash(value: string): void;
  getStart(): number;
  setStart(value: number): void;
  getCount(): number;
  setCount(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByBlockRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActionsByBlockRequest
  ): GetActionsByBlockRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetActionsByBlockRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByBlockRequest;
  static deserializeBinaryFromReader(
    message: GetActionsByBlockRequest,
    reader: jspb.BinaryReader
  ): GetActionsByBlockRequest;
}

export declare namespace GetActionsByBlockRequest {
  export type AsObject = {
    blkhash: string;
    start: number;
    count: number;
  };
}

export class GetActionsResponse extends jspb.Message {
  constructor();
  getActionsList(): action_pb.Action[] | undefined;
  setActionsList(value?: action_pb.Action[]): void;
  clearActionsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetActionsResponse
  ): GetActionsResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetActionsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsResponse;
  static deserializeBinaryFromReader(
    message: GetActionsResponse,
    reader: jspb.BinaryReader
  ): GetActionsResponse;
}

export declare namespace GetActionsResponse {
  export type AsObject = {
    actionsList?: action_pb.Action.AsObject[];
  };
}

export class GetBlockMetasRequest extends jspb.Message {
  constructor();
  getByindex(): GetBlockMetasByIndexRequest | undefined;
  setByindex(value?: GetBlockMetasByIndexRequest): void;
  clearByindex(): void;
  getByhash(): GetBlockMetaByHashRequest | undefined;
  setByhash(value?: GetBlockMetaByHashRequest): void;
  clearByhash(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetasRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockMetasRequest
  ): GetBlockMetasRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetBlockMetasRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetasRequest;
  static deserializeBinaryFromReader(
    message: GetBlockMetasRequest,
    reader: jspb.BinaryReader
  ): GetBlockMetasRequest;
}

export declare namespace GetBlockMetasRequest {
  export type AsObject = {
    byindex?: GetBlockMetasByIndexRequest.AsObject;
    byhash?: GetBlockMetaByHashRequest.AsObject;
  };
}

export class GetBlockMetasByIndexRequest extends jspb.Message {
  constructor();
  getStart(): number;
  setStart(value: number): void;
  getCount(): number;
  setCount(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetasByIndexRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockMetasByIndexRequest
  ): GetBlockMetasByIndexRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetBlockMetasByIndexRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetasByIndexRequest;
  static deserializeBinaryFromReader(
    message: GetBlockMetasByIndexRequest,
    reader: jspb.BinaryReader
  ): GetBlockMetasByIndexRequest;
}

export declare namespace GetBlockMetasByIndexRequest {
  export type AsObject = {
    start: number;
    count: number;
  };
}

export class GetBlockMetaByHashRequest extends jspb.Message {
  constructor();
  getBlkhash(): string;
  setBlkhash(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetaByHashRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockMetaByHashRequest
  ): GetBlockMetaByHashRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetBlockMetaByHashRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetaByHashRequest;
  static deserializeBinaryFromReader(
    message: GetBlockMetaByHashRequest,
    reader: jspb.BinaryReader
  ): GetBlockMetaByHashRequest;
}

export declare namespace GetBlockMetaByHashRequest {
  export type AsObject = {
    blkhash: string;
  };
}

export class GetBlockMetasResponse extends jspb.Message {
  constructor();
  getBlkmetasList(): blockchain_pb.BlockMeta[] | undefined;
  setBlkmetasList(value?: blockchain_pb.BlockMeta[]): void;
  clearBlkmetasList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetasResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockMetasResponse
  ): GetBlockMetasResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetBlockMetasResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetasResponse;
  static deserializeBinaryFromReader(
    message: GetBlockMetasResponse,
    reader: jspb.BinaryReader
  ): GetBlockMetasResponse;
}

export declare namespace GetBlockMetasResponse {
  export type AsObject = {
    blkmetasList?: blockchain_pb.BlockMeta.AsObject[];
  };
}

export class GetChainMetaRequest extends jspb.Message {
  constructor();
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainMetaRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetChainMetaRequest
  ): GetChainMetaRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetChainMetaRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetChainMetaRequest;
  static deserializeBinaryFromReader(
    message: GetChainMetaRequest,
    reader: jspb.BinaryReader
  ): GetChainMetaRequest;
}

export declare namespace GetChainMetaRequest {
  export type AsObject = {};
}

export class GetChainMetaResponse extends jspb.Message {
  constructor();
  getChainmeta(): blockchain_pb.ChainMeta | undefined;
  setChainmeta(value?: blockchain_pb.ChainMeta): void;
  clearChainmeta(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainMetaResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetChainMetaResponse
  ): GetChainMetaResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetChainMetaResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetChainMetaResponse;
  static deserializeBinaryFromReader(
    message: GetChainMetaResponse,
    reader: jspb.BinaryReader
  ): GetChainMetaResponse;
}

export declare namespace GetChainMetaResponse {
  export type AsObject = {
    chainmeta?: blockchain_pb.ChainMeta.AsObject;
  };
}

export class GetServerMetaRequest extends jspb.Message {
  constructor();
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerMetaRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetServerMetaRequest
  ): GetServerMetaRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetServerMetaRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetServerMetaRequest;
  static deserializeBinaryFromReader(
    message: GetServerMetaRequest,
    reader: jspb.BinaryReader
  ): GetServerMetaRequest;
}

export declare namespace GetServerMetaRequest {
  export type AsObject = {};
}

export class GetServerMetaResponse extends jspb.Message {
  constructor();
  getServermeta(): node_pb.ServerMeta | undefined;
  setServermeta(value?: node_pb.ServerMeta): void;
  clearServermeta(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerMetaResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetServerMetaResponse
  ): GetServerMetaResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetServerMetaResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetServerMetaResponse;
  static deserializeBinaryFromReader(
    message: GetServerMetaResponse,
    reader: jspb.BinaryReader
  ): GetServerMetaResponse;
}

export declare namespace GetServerMetaResponse {
  export type AsObject = {
    servermeta?: node_pb.ServerMeta.AsObject;
  };
}

export class SendActionRequest extends jspb.Message {
  constructor();
  getAction(): action_pb.Action | undefined;
  setAction(value?: action_pb.Action): void;
  clearAction(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendActionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendActionRequest
  ): SendActionRequest.AsObject;
  static serializeBinaryToWriter(
    message: SendActionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendActionRequest;
  static deserializeBinaryFromReader(
    message: SendActionRequest,
    reader: jspb.BinaryReader
  ): SendActionRequest;
}

export declare namespace SendActionRequest {
  export type AsObject = {
    action?: action_pb.Action.AsObject;
  };
}

export class SendActionResponse extends jspb.Message {
  constructor();
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendActionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendActionResponse
  ): SendActionResponse.AsObject;
  static serializeBinaryToWriter(
    message: SendActionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendActionResponse;
  static deserializeBinaryFromReader(
    message: SendActionResponse,
    reader: jspb.BinaryReader
  ): SendActionResponse;
}

export declare namespace SendActionResponse {
  export type AsObject = {};
}

export class GetReceiptByActionRequest extends jspb.Message {
  constructor();
  getActionhash(): string;
  setActionhash(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceiptByActionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetReceiptByActionRequest
  ): GetReceiptByActionRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetReceiptByActionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetReceiptByActionRequest;
  static deserializeBinaryFromReader(
    message: GetReceiptByActionRequest,
    reader: jspb.BinaryReader
  ): GetReceiptByActionRequest;
}

export declare namespace GetReceiptByActionRequest {
  export type AsObject = {
    actionhash: string;
  };
}

export class GetReceiptByActionResponse extends jspb.Message {
  constructor();
  getReceipt(): action_pb.Receipt | undefined;
  setReceipt(value?: action_pb.Receipt): void;
  clearReceipt(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceiptByActionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetReceiptByActionResponse
  ): GetReceiptByActionResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetReceiptByActionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetReceiptByActionResponse;
  static deserializeBinaryFromReader(
    message: GetReceiptByActionResponse,
    reader: jspb.BinaryReader
  ): GetReceiptByActionResponse;
}

export declare namespace GetReceiptByActionResponse {
  export type AsObject = {
    receipt?: action_pb.Receipt.AsObject;
  };
}

export class ReadContractRequest extends jspb.Message {
  constructor();
  getAction(): action_pb.Action | undefined;
  setAction(value?: action_pb.Action): void;
  clearAction(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadContractRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReadContractRequest
  ): ReadContractRequest.AsObject;
  static serializeBinaryToWriter(
    message: ReadContractRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReadContractRequest;
  static deserializeBinaryFromReader(
    message: ReadContractRequest,
    reader: jspb.BinaryReader
  ): ReadContractRequest;
}

export declare namespace ReadContractRequest {
  export type AsObject = {
    action?: action_pb.Action.AsObject;
  };
}

export class ReadContractResponse extends jspb.Message {
  constructor();
  getData(): string;
  setData(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadContractResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReadContractResponse
  ): ReadContractResponse.AsObject;
  static serializeBinaryToWriter(
    message: ReadContractResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReadContractResponse;
  static deserializeBinaryFromReader(
    message: ReadContractResponse,
    reader: jspb.BinaryReader
  ): ReadContractResponse;
}

export declare namespace ReadContractResponse {
  export type AsObject = {
    data: string;
  };
}

export class SuggestGasPriceRequest extends jspb.Message {
  constructor();
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestGasPriceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SuggestGasPriceRequest
  ): SuggestGasPriceRequest.AsObject;
  static serializeBinaryToWriter(
    message: SuggestGasPriceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SuggestGasPriceRequest;
  static deserializeBinaryFromReader(
    message: SuggestGasPriceRequest,
    reader: jspb.BinaryReader
  ): SuggestGasPriceRequest;
}

export declare namespace SuggestGasPriceRequest {
  export type AsObject = {};
}

export class SuggestGasPriceResponse extends jspb.Message {
  constructor();
  getGasprice(): number;
  setGasprice(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestGasPriceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SuggestGasPriceResponse
  ): SuggestGasPriceResponse.AsObject;
  static serializeBinaryToWriter(
    message: SuggestGasPriceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SuggestGasPriceResponse;
  static deserializeBinaryFromReader(
    message: SuggestGasPriceResponse,
    reader: jspb.BinaryReader
  ): SuggestGasPriceResponse;
}

export declare namespace SuggestGasPriceResponse {
  export type AsObject = {
    gasprice: number;
  };
}

export class EstimateGasForActionRequest extends jspb.Message {
  constructor();
  getAction(): action_pb.Action | undefined;
  setAction(value?: action_pb.Action): void;
  clearAction(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateGasForActionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EstimateGasForActionRequest
  ): EstimateGasForActionRequest.AsObject;
  static serializeBinaryToWriter(
    message: EstimateGasForActionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EstimateGasForActionRequest;
  static deserializeBinaryFromReader(
    message: EstimateGasForActionRequest,
    reader: jspb.BinaryReader
  ): EstimateGasForActionRequest;
}

export declare namespace EstimateGasForActionRequest {
  export type AsObject = {
    action?: action_pb.Action.AsObject;
  };
}

export class EstimateGasForActionResponse extends jspb.Message {
  constructor();
  getGas(): number;
  setGas(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateGasForActionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EstimateGasForActionResponse
  ): EstimateGasForActionResponse.AsObject;
  static serializeBinaryToWriter(
    message: EstimateGasForActionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EstimateGasForActionResponse;
  static deserializeBinaryFromReader(
    message: EstimateGasForActionResponse,
    reader: jspb.BinaryReader
  ): EstimateGasForActionResponse;
}

export declare namespace EstimateGasForActionResponse {
  export type AsObject = {
    gas: number;
  };
}

export class ReadStateRequest extends jspb.Message {
  constructor();
  getProtocolid(): {};
  setProtocolid(value: {}): void;
  getMethodname(): {};
  setMethodname(value: {}): void;
  getArgumentsList(): {}[];
  setArgumentsList(value: {}[]): void;
  clearArgumentsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStateRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReadStateRequest
  ): ReadStateRequest.AsObject;
  static serializeBinaryToWriter(
    message: ReadStateRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReadStateRequest;
  static deserializeBinaryFromReader(
    message: ReadStateRequest,
    reader: jspb.BinaryReader
  ): ReadStateRequest;
}

export declare namespace ReadStateRequest {
  export type AsObject = {
    protocolid: {};
    methodname: {};
    argumentsList: {}[];
  };
}

export class ReadStateResponse extends jspb.Message {
  constructor();
  getData(): {};
  setData(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReadStateResponse
  ): ReadStateResponse.AsObject;
  static serializeBinaryToWriter(
    message: ReadStateResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReadStateResponse;
  static deserializeBinaryFromReader(
    message: ReadStateResponse,
    reader: jspb.BinaryReader
  ): ReadStateResponse;
}

export declare namespace ReadStateResponse {
  export type AsObject = {
    data: {};
  };
}

export class GetProductivityRequest extends jspb.Message {
  constructor();
  getEpochnumber(): number;
  setEpochnumber(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductivityRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetProductivityRequest
  ): GetProductivityRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetProductivityRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetProductivityRequest;
  static deserializeBinaryFromReader(
    message: GetProductivityRequest,
    reader: jspb.BinaryReader
  ): GetProductivityRequest;
}

export declare namespace GetProductivityRequest {
  export type AsObject = {
    epochnumber: number;
  };
}

export class GetProductivityResponse extends jspb.Message {
  constructor();
  getTotalblks(): number;
  setTotalblks(value: number): void;
  getBlksperdelegateMap(): jspb.Map<string, number> | undefined;
  clearBlksperdelegateMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductivityResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetProductivityResponse
  ): GetProductivityResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetProductivityResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetProductivityResponse;
  static deserializeBinaryFromReader(
    message: GetProductivityResponse,
    reader: jspb.BinaryReader
  ): GetProductivityResponse;
}

export declare namespace GetProductivityResponse {
  export type AsObject = {
    totalblks: number;
    blksperdelegateMap?: GetProductivityResponse.BlksPerDelegateEntry.AsObject[];
  };

  export class BlksPerDelegateEntry extends jspb.Message {
    constructor();
    getKey(): string;
    setKey(value: string): void;
    getValue(): number;
    setValue(value: number): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlksPerDelegateEntry.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: BlksPerDelegateEntry
    ): BlksPerDelegateEntry.AsObject;
    static serializeBinaryToWriter(
      message: BlksPerDelegateEntry,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): BlksPerDelegateEntry;
    static deserializeBinaryFromReader(
      message: BlksPerDelegateEntry,
      reader: jspb.BinaryReader
    ): BlksPerDelegateEntry;
  }

  export namespace BlksPerDelegateEntry {
    export type AsObject = {
      key: string;
      value: number;
    };
  }
}
