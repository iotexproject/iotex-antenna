import * as jspb from "google-protobuf"

import * as proto_types_action_pb from '../../proto/types/action_pb';
import * as proto_types_blockchain_pb from '../../proto/types/blockchain_pb';
import * as proto_types_node_pb from '../../proto/types/node_pb';
import * as proto_types_election_pb from '../../proto/types/election_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class GetVotesRequest extends jspb.Message {
  getVotee(): string;
  setVotee(value: string): void;

  getHeight(): string;
  setHeight(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVotesRequest): GetVotesRequest.AsObject;
  static serializeBinaryToWriter(message: GetVotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVotesRequest;
  static deserializeBinaryFromReader(message: GetVotesRequest, reader: jspb.BinaryReader): GetVotesRequest;
}

export namespace GetVotesRequest {
  export type AsObject = {
    votee: string,
    height: string,
    offset: number,
    limit: number,
  }
}

export class GetVotesResponse extends jspb.Message {
  getBucketsList(): Array<Bucket>;
  setBucketsList(value: Array<Bucket>): void;
  clearBucketsList(): void;
  addBuckets(value?: Bucket, index?: number): Bucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVotesResponse): GetVotesResponse.AsObject;
  static serializeBinaryToWriter(message: GetVotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVotesResponse;
  static deserializeBinaryFromReader(message: GetVotesResponse, reader: jspb.BinaryReader): GetVotesResponse;
}

export namespace GetVotesResponse {
  export type AsObject = {
    bucketsList: Array<Bucket.AsObject>,
  }
}

export class Bucket extends jspb.Message {
  getVoter(): string;
  setVoter(value: string): void;

  getVotes(): string;
  setVotes(value: string): void;

  getWeightedvotes(): string;
  setWeightedvotes(value: string): void;

  getRemainingduration(): string;
  setRemainingduration(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bucket.AsObject;
  static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
  static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bucket;
  static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
}

export namespace Bucket {
  export type AsObject = {
    voter: string,
    votes: string,
    weightedvotes: string,
    remainingduration: string,
  }
}

export class GetAccountRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    address: string,
  }
}

export class GetAccountResponse extends jspb.Message {
  getAccountmeta(): proto_types_blockchain_pb.AccountMeta | undefined;
  setAccountmeta(value?: proto_types_blockchain_pb.AccountMeta): void;
  hasAccountmeta(): boolean;
  clearAccountmeta(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
  export type AsObject = {
    accountmeta?: proto_types_blockchain_pb.AccountMeta.AsObject,
  }
}

export class GetActionsRequest extends jspb.Message {
  getByindex(): GetActionsByIndexRequest | undefined;
  setByindex(value?: GetActionsByIndexRequest): void;
  hasByindex(): boolean;
  clearByindex(): void;
  hasByindex(): boolean;

  getByhash(): GetActionByHashRequest | undefined;
  setByhash(value?: GetActionByHashRequest): void;
  hasByhash(): boolean;
  clearByhash(): void;
  hasByhash(): boolean;

  getByaddr(): GetActionsByAddressRequest | undefined;
  setByaddr(value?: GetActionsByAddressRequest): void;
  hasByaddr(): boolean;
  clearByaddr(): void;
  hasByaddr(): boolean;

  getUnconfirmedbyaddr(): GetUnconfirmedActionsByAddressRequest | undefined;
  setUnconfirmedbyaddr(value?: GetUnconfirmedActionsByAddressRequest): void;
  hasUnconfirmedbyaddr(): boolean;
  clearUnconfirmedbyaddr(): void;
  hasUnconfirmedbyaddr(): boolean;

  getByblk(): GetActionsByBlockRequest | undefined;
  setByblk(value?: GetActionsByBlockRequest): void;
  hasByblk(): boolean;
  clearByblk(): void;
  hasByblk(): boolean;

  getLookupCase(): GetActionsRequest.LookupCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsRequest): GetActionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsRequest;
  static deserializeBinaryFromReader(message: GetActionsRequest, reader: jspb.BinaryReader): GetActionsRequest;
}

export namespace GetActionsRequest {
  export type AsObject = {
    byindex?: GetActionsByIndexRequest.AsObject,
    byhash?: GetActionByHashRequest.AsObject,
    byaddr?: GetActionsByAddressRequest.AsObject,
    unconfirmedbyaddr?: GetUnconfirmedActionsByAddressRequest.AsObject,
    byblk?: GetActionsByBlockRequest.AsObject,
  }

  export enum LookupCase { 
    LOOKUP_NOT_SET = 0,
    BYINDEX = 1,
    BYHASH = 2,
    BYADDR = 3,
    UNCONFIRMEDBYADDR = 4,
    BYBLK = 5,
  }
}

export class GetActionsByIndexRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsByIndexRequest): GetActionsByIndexRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionsByIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByIndexRequest;
  static deserializeBinaryFromReader(message: GetActionsByIndexRequest, reader: jspb.BinaryReader): GetActionsByIndexRequest;
}

export namespace GetActionsByIndexRequest {
  export type AsObject = {
    start: number,
    count: number,
  }
}

export class GetActionByHashRequest extends jspb.Message {
  getActionhash(): string;
  setActionhash(value: string): void;

  getCheckpending(): boolean;
  setCheckpending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionByHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionByHashRequest): GetActionByHashRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionByHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionByHashRequest;
  static deserializeBinaryFromReader(message: GetActionByHashRequest, reader: jspb.BinaryReader): GetActionByHashRequest;
}

export namespace GetActionByHashRequest {
  export type AsObject = {
    actionhash: string,
    checkpending: boolean,
  }
}

export class GetActionsByAddressRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsByAddressRequest): GetActionsByAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionsByAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByAddressRequest;
  static deserializeBinaryFromReader(message: GetActionsByAddressRequest, reader: jspb.BinaryReader): GetActionsByAddressRequest;
}

export namespace GetActionsByAddressRequest {
  export type AsObject = {
    address: string,
    start: number,
    count: number,
  }
}

export class GetUnconfirmedActionsByAddressRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnconfirmedActionsByAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnconfirmedActionsByAddressRequest): GetUnconfirmedActionsByAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnconfirmedActionsByAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnconfirmedActionsByAddressRequest;
  static deserializeBinaryFromReader(message: GetUnconfirmedActionsByAddressRequest, reader: jspb.BinaryReader): GetUnconfirmedActionsByAddressRequest;
}

export namespace GetUnconfirmedActionsByAddressRequest {
  export type AsObject = {
    address: string,
    start: number,
    count: number,
  }
}

export class GetActionsByBlockRequest extends jspb.Message {
  getBlkhash(): string;
  setBlkhash(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsByBlockRequest): GetActionsByBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionsByBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByBlockRequest;
  static deserializeBinaryFromReader(message: GetActionsByBlockRequest, reader: jspb.BinaryReader): GetActionsByBlockRequest;
}

export namespace GetActionsByBlockRequest {
  export type AsObject = {
    blkhash: string,
    start: number,
    count: number,
  }
}

export class ActionInfo extends jspb.Message {
  getAction(): proto_types_action_pb.Action | undefined;
  setAction(value?: proto_types_action_pb.Action): void;
  hasAction(): boolean;
  clearAction(): void;

  getActhash(): string;
  setActhash(value: string): void;

  getBlkhash(): string;
  setBlkhash(value: string): void;

  getBlkheight(): number;
  setBlkheight(value: number): void;

  getSender(): string;
  setSender(value: string): void;

  getGasfee(): string;
  setGasfee(value: string): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ActionInfo): ActionInfo.AsObject;
  static serializeBinaryToWriter(message: ActionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionInfo;
  static deserializeBinaryFromReader(message: ActionInfo, reader: jspb.BinaryReader): ActionInfo;
}

export namespace ActionInfo {
  export type AsObject = {
    action?: proto_types_action_pb.Action.AsObject,
    acthash: string,
    blkhash: string,
    blkheight: number,
    sender: string,
    gasfee: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ReceiptInfo extends jspb.Message {
  getReceipt(): proto_types_action_pb.Receipt | undefined;
  setReceipt(value?: proto_types_action_pb.Receipt): void;
  hasReceipt(): boolean;
  clearReceipt(): void;

  getBlkhash(): string;
  setBlkhash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptInfo): ReceiptInfo.AsObject;
  static serializeBinaryToWriter(message: ReceiptInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptInfo;
  static deserializeBinaryFromReader(message: ReceiptInfo, reader: jspb.BinaryReader): ReceiptInfo;
}

export namespace ReceiptInfo {
  export type AsObject = {
    receipt?: proto_types_action_pb.Receipt.AsObject,
    blkhash: string,
  }
}

export class BlockProducerInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getVotes(): string;
  setVotes(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getProduction(): number;
  setProduction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockProducerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockProducerInfo): BlockProducerInfo.AsObject;
  static serializeBinaryToWriter(message: BlockProducerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockProducerInfo;
  static deserializeBinaryFromReader(message: BlockProducerInfo, reader: jspb.BinaryReader): BlockProducerInfo;
}

export namespace BlockProducerInfo {
  export type AsObject = {
    address: string,
    votes: string,
    active: boolean,
    production: number,
  }
}

export class BlockInfo extends jspb.Message {
  getBlock(): proto_types_blockchain_pb.Block | undefined;
  setBlock(value?: proto_types_blockchain_pb.Block): void;
  hasBlock(): boolean;
  clearBlock(): void;

  getReceiptsList(): Array<proto_types_action_pb.Receipt>;
  setReceiptsList(value: Array<proto_types_action_pb.Receipt>): void;
  clearReceiptsList(): void;
  addReceipts(value?: proto_types_action_pb.Receipt, index?: number): proto_types_action_pb.Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    block?: proto_types_blockchain_pb.Block.AsObject,
    receiptsList: Array<proto_types_action_pb.Receipt.AsObject>,
  }
}

export class GetActionsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getActioninfoList(): Array<ActionInfo>;
  setActioninfoList(value: Array<ActionInfo>): void;
  clearActioninfoList(): void;
  addActioninfo(value?: ActionInfo, index?: number): ActionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsResponse): GetActionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsResponse;
  static deserializeBinaryFromReader(message: GetActionsResponse, reader: jspb.BinaryReader): GetActionsResponse;
}

export namespace GetActionsResponse {
  export type AsObject = {
    total: number,
    actioninfoList: Array<ActionInfo.AsObject>,
  }
}

export class GetBlockMetasRequest extends jspb.Message {
  getByindex(): GetBlockMetasByIndexRequest | undefined;
  setByindex(value?: GetBlockMetasByIndexRequest): void;
  hasByindex(): boolean;
  clearByindex(): void;
  hasByindex(): boolean;

  getByhash(): GetBlockMetaByHashRequest | undefined;
  setByhash(value?: GetBlockMetaByHashRequest): void;
  hasByhash(): boolean;
  clearByhash(): void;
  hasByhash(): boolean;

  getLookupCase(): GetBlockMetasRequest.LookupCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockMetasRequest): GetBlockMetasRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockMetasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetasRequest;
  static deserializeBinaryFromReader(message: GetBlockMetasRequest, reader: jspb.BinaryReader): GetBlockMetasRequest;
}

export namespace GetBlockMetasRequest {
  export type AsObject = {
    byindex?: GetBlockMetasByIndexRequest.AsObject,
    byhash?: GetBlockMetaByHashRequest.AsObject,
  }

  export enum LookupCase { 
    LOOKUP_NOT_SET = 0,
    BYINDEX = 1,
    BYHASH = 2,
  }
}

export class GetBlockMetasByIndexRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetasByIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockMetasByIndexRequest): GetBlockMetasByIndexRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockMetasByIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetasByIndexRequest;
  static deserializeBinaryFromReader(message: GetBlockMetasByIndexRequest, reader: jspb.BinaryReader): GetBlockMetasByIndexRequest;
}

export namespace GetBlockMetasByIndexRequest {
  export type AsObject = {
    start: number,
    count: number,
  }
}

export class GetBlockMetaByHashRequest extends jspb.Message {
  getBlkhash(): string;
  setBlkhash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetaByHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockMetaByHashRequest): GetBlockMetaByHashRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockMetaByHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetaByHashRequest;
  static deserializeBinaryFromReader(message: GetBlockMetaByHashRequest, reader: jspb.BinaryReader): GetBlockMetaByHashRequest;
}

export namespace GetBlockMetaByHashRequest {
  export type AsObject = {
    blkhash: string,
  }
}

export class GetBlockMetasResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getBlkmetasList(): Array<proto_types_blockchain_pb.BlockMeta>;
  setBlkmetasList(value: Array<proto_types_blockchain_pb.BlockMeta>): void;
  clearBlkmetasList(): void;
  addBlkmetas(value?: proto_types_blockchain_pb.BlockMeta, index?: number): proto_types_blockchain_pb.BlockMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockMetasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockMetasResponse): GetBlockMetasResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockMetasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockMetasResponse;
  static deserializeBinaryFromReader(message: GetBlockMetasResponse, reader: jspb.BinaryReader): GetBlockMetasResponse;
}

export namespace GetBlockMetasResponse {
  export type AsObject = {
    total: number,
    blkmetasList: Array<proto_types_blockchain_pb.BlockMeta.AsObject>,
  }
}

export class GetChainMetaRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainMetaRequest): GetChainMetaRequest.AsObject;
  static serializeBinaryToWriter(message: GetChainMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainMetaRequest;
  static deserializeBinaryFromReader(message: GetChainMetaRequest, reader: jspb.BinaryReader): GetChainMetaRequest;
}

export namespace GetChainMetaRequest {
  export type AsObject = {
  }
}

export class GetChainMetaResponse extends jspb.Message {
  getChainmeta(): proto_types_blockchain_pb.ChainMeta | undefined;
  setChainmeta(value?: proto_types_blockchain_pb.ChainMeta): void;
  hasChainmeta(): boolean;
  clearChainmeta(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainMetaResponse): GetChainMetaResponse.AsObject;
  static serializeBinaryToWriter(message: GetChainMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainMetaResponse;
  static deserializeBinaryFromReader(message: GetChainMetaResponse, reader: jspb.BinaryReader): GetChainMetaResponse;
}

export namespace GetChainMetaResponse {
  export type AsObject = {
    chainmeta?: proto_types_blockchain_pb.ChainMeta.AsObject,
  }
}

export class GetServerMetaRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerMetaRequest): GetServerMetaRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerMetaRequest;
  static deserializeBinaryFromReader(message: GetServerMetaRequest, reader: jspb.BinaryReader): GetServerMetaRequest;
}

export namespace GetServerMetaRequest {
  export type AsObject = {
  }
}

export class GetServerMetaResponse extends jspb.Message {
  getServermeta(): proto_types_node_pb.ServerMeta | undefined;
  setServermeta(value?: proto_types_node_pb.ServerMeta): void;
  hasServermeta(): boolean;
  clearServermeta(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerMetaResponse): GetServerMetaResponse.AsObject;
  static serializeBinaryToWriter(message: GetServerMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerMetaResponse;
  static deserializeBinaryFromReader(message: GetServerMetaResponse, reader: jspb.BinaryReader): GetServerMetaResponse;
}

export namespace GetServerMetaResponse {
  export type AsObject = {
    servermeta?: proto_types_node_pb.ServerMeta.AsObject,
  }
}

export class SendActionRequest extends jspb.Message {
  getAction(): proto_types_action_pb.Action | undefined;
  setAction(value?: proto_types_action_pb.Action): void;
  hasAction(): boolean;
  clearAction(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendActionRequest): SendActionRequest.AsObject;
  static serializeBinaryToWriter(message: SendActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendActionRequest;
  static deserializeBinaryFromReader(message: SendActionRequest, reader: jspb.BinaryReader): SendActionRequest;
}

export namespace SendActionRequest {
  export type AsObject = {
    action?: proto_types_action_pb.Action.AsObject,
  }
}

export class SendSignedActionBytesRequest extends jspb.Message {
  getSignedactionbytes(): string;
  setSignedactionbytes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSignedActionBytesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendSignedActionBytesRequest): SendSignedActionBytesRequest.AsObject;
  static serializeBinaryToWriter(message: SendSignedActionBytesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSignedActionBytesRequest;
  static deserializeBinaryFromReader(message: SendSignedActionBytesRequest, reader: jspb.BinaryReader): SendSignedActionBytesRequest;
}

export namespace SendSignedActionBytesRequest {
  export type AsObject = {
    signedactionbytes: string,
  }
}

export class SendActionResponse extends jspb.Message {
  getActionhash(): string;
  setActionhash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendActionResponse): SendActionResponse.AsObject;
  static serializeBinaryToWriter(message: SendActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendActionResponse;
  static deserializeBinaryFromReader(message: SendActionResponse, reader: jspb.BinaryReader): SendActionResponse;
}

export namespace SendActionResponse {
  export type AsObject = {
    actionhash: string,
  }
}

export class GetReceiptByActionRequest extends jspb.Message {
  getActionhash(): string;
  setActionhash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceiptByActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceiptByActionRequest): GetReceiptByActionRequest.AsObject;
  static serializeBinaryToWriter(message: GetReceiptByActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceiptByActionRequest;
  static deserializeBinaryFromReader(message: GetReceiptByActionRequest, reader: jspb.BinaryReader): GetReceiptByActionRequest;
}

export namespace GetReceiptByActionRequest {
  export type AsObject = {
    actionhash: string,
  }
}

export class GetReceiptByActionResponse extends jspb.Message {
  getReceiptinfo(): ReceiptInfo | undefined;
  setReceiptinfo(value?: ReceiptInfo): void;
  hasReceiptinfo(): boolean;
  clearReceiptinfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceiptByActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceiptByActionResponse): GetReceiptByActionResponse.AsObject;
  static serializeBinaryToWriter(message: GetReceiptByActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceiptByActionResponse;
  static deserializeBinaryFromReader(message: GetReceiptByActionResponse, reader: jspb.BinaryReader): GetReceiptByActionResponse;
}

export namespace GetReceiptByActionResponse {
  export type AsObject = {
    receiptinfo?: ReceiptInfo.AsObject,
  }
}

export class ReadContractRequest extends jspb.Message {
  getExecution(): proto_types_action_pb.Execution | undefined;
  setExecution(value?: proto_types_action_pb.Execution): void;
  hasExecution(): boolean;
  clearExecution(): void;

  getCalleraddress(): string;
  setCalleraddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadContractRequest): ReadContractRequest.AsObject;
  static serializeBinaryToWriter(message: ReadContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadContractRequest;
  static deserializeBinaryFromReader(message: ReadContractRequest, reader: jspb.BinaryReader): ReadContractRequest;
}

export namespace ReadContractRequest {
  export type AsObject = {
    execution?: proto_types_action_pb.Execution.AsObject,
    calleraddress: string,
  }
}

export class ReadContractResponse extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getReceipt(): proto_types_action_pb.Receipt | undefined;
  setReceipt(value?: proto_types_action_pb.Receipt): void;
  hasReceipt(): boolean;
  clearReceipt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadContractResponse): ReadContractResponse.AsObject;
  static serializeBinaryToWriter(message: ReadContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadContractResponse;
  static deserializeBinaryFromReader(message: ReadContractResponse, reader: jspb.BinaryReader): ReadContractResponse;
}

export namespace ReadContractResponse {
  export type AsObject = {
    data: string,
    receipt?: proto_types_action_pb.Receipt.AsObject,
  }
}

export class SuggestGasPriceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestGasPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestGasPriceRequest): SuggestGasPriceRequest.AsObject;
  static serializeBinaryToWriter(message: SuggestGasPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestGasPriceRequest;
  static deserializeBinaryFromReader(message: SuggestGasPriceRequest, reader: jspb.BinaryReader): SuggestGasPriceRequest;
}

export namespace SuggestGasPriceRequest {
  export type AsObject = {
  }
}

export class SuggestGasPriceResponse extends jspb.Message {
  getGasprice(): number;
  setGasprice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestGasPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestGasPriceResponse): SuggestGasPriceResponse.AsObject;
  static serializeBinaryToWriter(message: SuggestGasPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestGasPriceResponse;
  static deserializeBinaryFromReader(message: SuggestGasPriceResponse, reader: jspb.BinaryReader): SuggestGasPriceResponse;
}

export namespace SuggestGasPriceResponse {
  export type AsObject = {
    gasprice: number,
  }
}

export class EstimateGasForActionRequest extends jspb.Message {
  getAction(): proto_types_action_pb.Action | undefined;
  setAction(value?: proto_types_action_pb.Action): void;
  hasAction(): boolean;
  clearAction(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateGasForActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateGasForActionRequest): EstimateGasForActionRequest.AsObject;
  static serializeBinaryToWriter(message: EstimateGasForActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateGasForActionRequest;
  static deserializeBinaryFromReader(message: EstimateGasForActionRequest, reader: jspb.BinaryReader): EstimateGasForActionRequest;
}

export namespace EstimateGasForActionRequest {
  export type AsObject = {
    action?: proto_types_action_pb.Action.AsObject,
  }
}

export class EstimateActionGasConsumptionRequest extends jspb.Message {
  getTransfer(): proto_types_action_pb.Transfer | undefined;
  setTransfer(value?: proto_types_action_pb.Transfer): void;
  hasTransfer(): boolean;
  clearTransfer(): void;
  hasTransfer(): boolean;

  getExecution(): proto_types_action_pb.Execution | undefined;
  setExecution(value?: proto_types_action_pb.Execution): void;
  hasExecution(): boolean;
  clearExecution(): void;
  hasExecution(): boolean;

  getCalleraddress(): string;
  setCalleraddress(value: string): void;

  getActionCase(): EstimateActionGasConsumptionRequest.ActionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateActionGasConsumptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateActionGasConsumptionRequest): EstimateActionGasConsumptionRequest.AsObject;
  static serializeBinaryToWriter(message: EstimateActionGasConsumptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateActionGasConsumptionRequest;
  static deserializeBinaryFromReader(message: EstimateActionGasConsumptionRequest, reader: jspb.BinaryReader): EstimateActionGasConsumptionRequest;
}

export namespace EstimateActionGasConsumptionRequest {
  export type AsObject = {
    transfer?: proto_types_action_pb.Transfer.AsObject,
    execution?: proto_types_action_pb.Execution.AsObject,
    calleraddress: string,
  }

  export enum ActionCase { 
    ACTION_NOT_SET = 0,
    TRANSFER = 1,
    EXECUTION = 2,
  }
}

export class EstimateActionGasConsumptionResponse extends jspb.Message {
  getGas(): number;
  setGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateActionGasConsumptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateActionGasConsumptionResponse): EstimateActionGasConsumptionResponse.AsObject;
  static serializeBinaryToWriter(message: EstimateActionGasConsumptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateActionGasConsumptionResponse;
  static deserializeBinaryFromReader(message: EstimateActionGasConsumptionResponse, reader: jspb.BinaryReader): EstimateActionGasConsumptionResponse;
}

export namespace EstimateActionGasConsumptionResponse {
  export type AsObject = {
    gas: number,
  }
}

export class EstimateGasForActionResponse extends jspb.Message {
  getGas(): number;
  setGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateGasForActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateGasForActionResponse): EstimateGasForActionResponse.AsObject;
  static serializeBinaryToWriter(message: EstimateGasForActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateGasForActionResponse;
  static deserializeBinaryFromReader(message: EstimateGasForActionResponse, reader: jspb.BinaryReader): EstimateGasForActionResponse;
}

export namespace EstimateGasForActionResponse {
  export type AsObject = {
    gas: number,
  }
}

export class ReadStateRequest extends jspb.Message {
  getProtocolid(): Uint8Array | string;
  getProtocolid_asU8(): Uint8Array;
  getProtocolid_asB64(): string;
  setProtocolid(value: Uint8Array | string): void;

  getMethodname(): Uint8Array | string;
  getMethodname_asU8(): Uint8Array;
  getMethodname_asB64(): string;
  setMethodname(value: Uint8Array | string): void;

  getArgumentsList(): Array<Uint8Array | string>;
  setArgumentsList(value: Array<Uint8Array | string>): void;
  clearArgumentsList(): void;
  addArguments(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadStateRequest): ReadStateRequest.AsObject;
  static serializeBinaryToWriter(message: ReadStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadStateRequest;
  static deserializeBinaryFromReader(message: ReadStateRequest, reader: jspb.BinaryReader): ReadStateRequest;
}

export namespace ReadStateRequest {
  export type AsObject = {
    protocolid: Uint8Array | string,
    methodname: Uint8Array | string,
    argumentsList: Array<Uint8Array | string>,
  }
}

export class ReadStateResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadStateResponse): ReadStateResponse.AsObject;
  static serializeBinaryToWriter(message: ReadStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadStateResponse;
  static deserializeBinaryFromReader(message: ReadStateResponse, reader: jspb.BinaryReader): ReadStateResponse;
}

export namespace ReadStateResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class GetEpochMetaRequest extends jspb.Message {
  getEpochnumber(): number;
  setEpochnumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEpochMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEpochMetaRequest): GetEpochMetaRequest.AsObject;
  static serializeBinaryToWriter(message: GetEpochMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEpochMetaRequest;
  static deserializeBinaryFromReader(message: GetEpochMetaRequest, reader: jspb.BinaryReader): GetEpochMetaRequest;
}

export namespace GetEpochMetaRequest {
  export type AsObject = {
    epochnumber: number,
  }
}

export class GetEpochMetaResponse extends jspb.Message {
  getEpochdata(): proto_types_blockchain_pb.EpochData | undefined;
  setEpochdata(value?: proto_types_blockchain_pb.EpochData): void;
  hasEpochdata(): boolean;
  clearEpochdata(): void;

  getTotalblocks(): number;
  setTotalblocks(value: number): void;

  getBlockproducersinfoList(): Array<BlockProducerInfo>;
  setBlockproducersinfoList(value: Array<BlockProducerInfo>): void;
  clearBlockproducersinfoList(): void;
  addBlockproducersinfo(value?: BlockProducerInfo, index?: number): BlockProducerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEpochMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEpochMetaResponse): GetEpochMetaResponse.AsObject;
  static serializeBinaryToWriter(message: GetEpochMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEpochMetaResponse;
  static deserializeBinaryFromReader(message: GetEpochMetaResponse, reader: jspb.BinaryReader): GetEpochMetaResponse;
}

export namespace GetEpochMetaResponse {
  export type AsObject = {
    epochdata?: proto_types_blockchain_pb.EpochData.AsObject,
    totalblocks: number,
    blockproducersinfoList: Array<BlockProducerInfo.AsObject>,
  }
}

export class GetRawBlocksRequest extends jspb.Message {
  getStartheight(): number;
  setStartheight(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getWithreceipts(): boolean;
  setWithreceipts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawBlocksRequest): GetRawBlocksRequest.AsObject;
  static serializeBinaryToWriter(message: GetRawBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawBlocksRequest;
  static deserializeBinaryFromReader(message: GetRawBlocksRequest, reader: jspb.BinaryReader): GetRawBlocksRequest;
}

export namespace GetRawBlocksRequest {
  export type AsObject = {
    startheight: number,
    count: number,
    withreceipts: boolean,
  }
}

export class GetRawBlocksResponse extends jspb.Message {
  getBlocksList(): Array<BlockInfo>;
  setBlocksList(value: Array<BlockInfo>): void;
  clearBlocksList(): void;
  addBlocks(value?: BlockInfo, index?: number): BlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawBlocksResponse): GetRawBlocksResponse.AsObject;
  static serializeBinaryToWriter(message: GetRawBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawBlocksResponse;
  static deserializeBinaryFromReader(message: GetRawBlocksResponse, reader: jspb.BinaryReader): GetRawBlocksResponse;
}

export namespace GetRawBlocksResponse {
  export type AsObject = {
    blocksList: Array<BlockInfo.AsObject>,
  }
}

export class GetLogsByBlock extends jspb.Message {
  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsByBlock.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsByBlock): GetLogsByBlock.AsObject;
  static serializeBinaryToWriter(message: GetLogsByBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsByBlock;
  static deserializeBinaryFromReader(message: GetLogsByBlock, reader: jspb.BinaryReader): GetLogsByBlock;
}

export namespace GetLogsByBlock {
  export type AsObject = {
    blockhash: Uint8Array | string,
  }
}

export class GetLogsByRange extends jspb.Message {
  getFromblock(): number;
  setFromblock(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsByRange.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsByRange): GetLogsByRange.AsObject;
  static serializeBinaryToWriter(message: GetLogsByRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsByRange;
  static deserializeBinaryFromReader(message: GetLogsByRange, reader: jspb.BinaryReader): GetLogsByRange;
}

export namespace GetLogsByRange {
  export type AsObject = {
    fromblock: number,
    count: number,
  }
}

export class Topics extends jspb.Message {
  getTopicList(): Array<Uint8Array | string>;
  setTopicList(value: Array<Uint8Array | string>): void;
  clearTopicList(): void;
  addTopic(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topics.AsObject;
  static toObject(includeInstance: boolean, msg: Topics): Topics.AsObject;
  static serializeBinaryToWriter(message: Topics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topics;
  static deserializeBinaryFromReader(message: Topics, reader: jspb.BinaryReader): Topics;
}

export namespace Topics {
  export type AsObject = {
    topicList: Array<Uint8Array | string>,
  }
}

export class LogsFilter extends jspb.Message {
  getAddressList(): Array<string>;
  setAddressList(value: Array<string>): void;
  clearAddressList(): void;
  addAddress(value: string, index?: number): void;

  getTopicsList(): Array<Topics>;
  setTopicsList(value: Array<Topics>): void;
  clearTopicsList(): void;
  addTopics(value?: Topics, index?: number): Topics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LogsFilter): LogsFilter.AsObject;
  static serializeBinaryToWriter(message: LogsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogsFilter;
  static deserializeBinaryFromReader(message: LogsFilter, reader: jspb.BinaryReader): LogsFilter;
}

export namespace LogsFilter {
  export type AsObject = {
    addressList: Array<string>,
    topicsList: Array<Topics.AsObject>,
  }
}

export class GetLogsRequest extends jspb.Message {
  getFilter(): LogsFilter | undefined;
  setFilter(value?: LogsFilter): void;
  hasFilter(): boolean;
  clearFilter(): void;

  getByblock(): GetLogsByBlock | undefined;
  setByblock(value?: GetLogsByBlock): void;
  hasByblock(): boolean;
  clearByblock(): void;
  hasByblock(): boolean;

  getByrange(): GetLogsByRange | undefined;
  setByrange(value?: GetLogsByRange): void;
  hasByrange(): boolean;
  clearByrange(): void;
  hasByrange(): boolean;

  getLookupCase(): GetLogsRequest.LookupCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsRequest): GetLogsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsRequest;
  static deserializeBinaryFromReader(message: GetLogsRequest, reader: jspb.BinaryReader): GetLogsRequest;
}

export namespace GetLogsRequest {
  export type AsObject = {
    filter?: LogsFilter.AsObject,
    byblock?: GetLogsByBlock.AsObject,
    byrange?: GetLogsByRange.AsObject,
  }

  export enum LookupCase { 
    LOOKUP_NOT_SET = 0,
    BYBLOCK = 2,
    BYRANGE = 3,
  }
}

export class GetLogsResponse extends jspb.Message {
  getLogsList(): Array<proto_types_action_pb.Log>;
  setLogsList(value: Array<proto_types_action_pb.Log>): void;
  clearLogsList(): void;
  addLogs(value?: proto_types_action_pb.Log, index?: number): proto_types_action_pb.Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogsResponse): GetLogsResponse.AsObject;
  static serializeBinaryToWriter(message: GetLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogsResponse;
  static deserializeBinaryFromReader(message: GetLogsResponse, reader: jspb.BinaryReader): GetLogsResponse;
}

export namespace GetLogsResponse {
  export type AsObject = {
    logsList: Array<proto_types_action_pb.Log.AsObject>,
  }
}

export class StreamBlocksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamBlocksRequest): StreamBlocksRequest.AsObject;
  static serializeBinaryToWriter(message: StreamBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamBlocksRequest;
  static deserializeBinaryFromReader(message: StreamBlocksRequest, reader: jspb.BinaryReader): StreamBlocksRequest;
}

export namespace StreamBlocksRequest {
  export type AsObject = {
  }
}

export class StreamBlocksResponse extends jspb.Message {
  getBlock(): BlockInfo | undefined;
  setBlock(value?: BlockInfo): void;
  hasBlock(): boolean;
  clearBlock(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamBlocksResponse): StreamBlocksResponse.AsObject;
  static serializeBinaryToWriter(message: StreamBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamBlocksResponse;
  static deserializeBinaryFromReader(message: StreamBlocksResponse, reader: jspb.BinaryReader): StreamBlocksResponse;
}

export namespace StreamBlocksResponse {
  export type AsObject = {
    block?: BlockInfo.AsObject,
  }
}

export class StreamLogsRequest extends jspb.Message {
  getFilter(): LogsFilter | undefined;
  setFilter(value?: LogsFilter): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamLogsRequest): StreamLogsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamLogsRequest;
  static deserializeBinaryFromReader(message: StreamLogsRequest, reader: jspb.BinaryReader): StreamLogsRequest;
}

export namespace StreamLogsRequest {
  export type AsObject = {
    filter?: LogsFilter.AsObject,
  }
}

export class StreamLogsResponse extends jspb.Message {
  getLog(): proto_types_action_pb.Log | undefined;
  setLog(value?: proto_types_action_pb.Log): void;
  hasLog(): boolean;
  clearLog(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamLogsResponse): StreamLogsResponse.AsObject;
  static serializeBinaryToWriter(message: StreamLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamLogsResponse;
  static deserializeBinaryFromReader(message: StreamLogsResponse, reader: jspb.BinaryReader): StreamLogsResponse;
}

export namespace StreamLogsResponse {
  export type AsObject = {
    log?: proto_types_action_pb.Log.AsObject,
  }
}

export class GetElectionBucketsRequest extends jspb.Message {
  getEpochnum(): number;
  setEpochnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetElectionBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetElectionBucketsRequest): GetElectionBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: GetElectionBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetElectionBucketsRequest;
  static deserializeBinaryFromReader(message: GetElectionBucketsRequest, reader: jspb.BinaryReader): GetElectionBucketsRequest;
}

export namespace GetElectionBucketsRequest {
  export type AsObject = {
    epochnum: number,
  }
}

export class GetElectionBucketsResponse extends jspb.Message {
  getBucketsList(): Array<proto_types_election_pb.ElectionBucket>;
  setBucketsList(value: Array<proto_types_election_pb.ElectionBucket>): void;
  clearBucketsList(): void;
  addBuckets(value?: proto_types_election_pb.ElectionBucket, index?: number): proto_types_election_pb.ElectionBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetElectionBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetElectionBucketsResponse): GetElectionBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: GetElectionBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetElectionBucketsResponse;
  static deserializeBinaryFromReader(message: GetElectionBucketsResponse, reader: jspb.BinaryReader): GetElectionBucketsResponse;
}

export namespace GetElectionBucketsResponse {
  export type AsObject = {
    bucketsList: Array<proto_types_election_pb.ElectionBucket.AsObject>,
  }
}

