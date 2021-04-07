import * as jspb from 'google-protobuf'

import * as proto_types_action_pb from '../../proto/types/action_pb';
import * as proto_types_blockchain_pb from '../../proto/types/blockchain_pb';
import * as proto_types_node_pb from '../../proto/types/node_pb';
import * as proto_types_election_pb from '../../proto/types/election_pb';
import * as proto_types_transaction_log_pb from '../../proto/types/transaction_log_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Bucket extends jspb.Message {
  getVoter(): string;
  setVoter(value: string): Bucket;

  getVotes(): string;
  setVotes(value: string): Bucket;

  getWeightedvotes(): string;
  setWeightedvotes(value: string): Bucket;

  getRemainingduration(): string;
  setRemainingduration(value: string): Bucket;

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
  setAddress(value: string): GetAccountRequest;

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
  setAccountmeta(value?: proto_types_blockchain_pb.AccountMeta): GetAccountResponse;
  hasAccountmeta(): boolean;
  clearAccountmeta(): GetAccountResponse;

  getBlockidentifier(): proto_types_blockchain_pb.BlockIdentifier | undefined;
  setBlockidentifier(value?: proto_types_blockchain_pb.BlockIdentifier): GetAccountResponse;
  hasBlockidentifier(): boolean;
  clearBlockidentifier(): GetAccountResponse;

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
    blockidentifier?: proto_types_blockchain_pb.BlockIdentifier.AsObject,
  }
}

export class GetActionsRequest extends jspb.Message {
  getByindex(): GetActionsByIndexRequest | undefined;
  setByindex(value?: GetActionsByIndexRequest): GetActionsRequest;
  hasByindex(): boolean;
  clearByindex(): GetActionsRequest;

  getByhash(): GetActionByHashRequest | undefined;
  setByhash(value?: GetActionByHashRequest): GetActionsRequest;
  hasByhash(): boolean;
  clearByhash(): GetActionsRequest;

  getByaddr(): GetActionsByAddressRequest | undefined;
  setByaddr(value?: GetActionsByAddressRequest): GetActionsRequest;
  hasByaddr(): boolean;
  clearByaddr(): GetActionsRequest;

  getUnconfirmedbyaddr(): GetUnconfirmedActionsByAddressRequest | undefined;
  setUnconfirmedbyaddr(value?: GetUnconfirmedActionsByAddressRequest): GetActionsRequest;
  hasUnconfirmedbyaddr(): boolean;
  clearUnconfirmedbyaddr(): GetActionsRequest;

  getByblk(): GetActionsByBlockRequest | undefined;
  setByblk(value?: GetActionsByBlockRequest): GetActionsRequest;
  hasByblk(): boolean;
  clearByblk(): GetActionsRequest;

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
  setStart(value: number): GetActionsByIndexRequest;

  getCount(): number;
  setCount(value: number): GetActionsByIndexRequest;

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
  setActionhash(value: string): GetActionByHashRequest;

  getCheckpending(): boolean;
  setCheckpending(value: boolean): GetActionByHashRequest;

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
  setAddress(value: string): GetActionsByAddressRequest;

  getStart(): number;
  setStart(value: number): GetActionsByAddressRequest;

  getCount(): number;
  setCount(value: number): GetActionsByAddressRequest;

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
  setAddress(value: string): GetUnconfirmedActionsByAddressRequest;

  getStart(): number;
  setStart(value: number): GetUnconfirmedActionsByAddressRequest;

  getCount(): number;
  setCount(value: number): GetUnconfirmedActionsByAddressRequest;

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
  setBlkhash(value: string): GetActionsByBlockRequest;

  getStart(): number;
  setStart(value: number): GetActionsByBlockRequest;

  getCount(): number;
  setCount(value: number): GetActionsByBlockRequest;

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
  setAction(value?: proto_types_action_pb.Action): ActionInfo;
  hasAction(): boolean;
  clearAction(): ActionInfo;

  getActhash(): string;
  setActhash(value: string): ActionInfo;

  getBlkhash(): string;
  setBlkhash(value: string): ActionInfo;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ActionInfo;
  hasTimestamp(): boolean;
  clearTimestamp(): ActionInfo;

  getBlkheight(): number;
  setBlkheight(value: number): ActionInfo;

  getSender(): string;
  setSender(value: string): ActionInfo;

  getGasfee(): string;
  setGasfee(value: string): ActionInfo;

  getIndex(): number;
  setIndex(value: number): ActionInfo;

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
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    blkheight: number,
    sender: string,
    gasfee: string,
    index: number,
  }
}

export class ReceiptInfo extends jspb.Message {
  getReceipt(): proto_types_action_pb.Receipt | undefined;
  setReceipt(value?: proto_types_action_pb.Receipt): ReceiptInfo;
  hasReceipt(): boolean;
  clearReceipt(): ReceiptInfo;

  getBlkhash(): string;
  setBlkhash(value: string): ReceiptInfo;

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
  setAddress(value: string): BlockProducerInfo;

  getVotes(): string;
  setVotes(value: string): BlockProducerInfo;

  getActive(): boolean;
  setActive(value: boolean): BlockProducerInfo;

  getProduction(): number;
  setProduction(value: number): BlockProducerInfo;

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
  setBlock(value?: proto_types_blockchain_pb.Block): BlockInfo;
  hasBlock(): boolean;
  clearBlock(): BlockInfo;

  getReceiptsList(): Array<proto_types_action_pb.Receipt>;
  setReceiptsList(value: Array<proto_types_action_pb.Receipt>): BlockInfo;
  clearReceiptsList(): BlockInfo;
  addReceipts(value?: proto_types_action_pb.Receipt, index?: number): proto_types_action_pb.Receipt;

  getTransactionlogs(): proto_types_transaction_log_pb.TransactionLogs | undefined;
  setTransactionlogs(value?: proto_types_transaction_log_pb.TransactionLogs): BlockInfo;
  hasTransactionlogs(): boolean;
  clearTransactionlogs(): BlockInfo;

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
    transactionlogs?: proto_types_transaction_log_pb.TransactionLogs.AsObject,
  }
}

export class GetActionsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): GetActionsResponse;

  getActioninfoList(): Array<ActionInfo>;
  setActioninfoList(value: Array<ActionInfo>): GetActionsResponse;
  clearActioninfoList(): GetActionsResponse;
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
  setByindex(value?: GetBlockMetasByIndexRequest): GetBlockMetasRequest;
  hasByindex(): boolean;
  clearByindex(): GetBlockMetasRequest;

  getByhash(): GetBlockMetaByHashRequest | undefined;
  setByhash(value?: GetBlockMetaByHashRequest): GetBlockMetasRequest;
  hasByhash(): boolean;
  clearByhash(): GetBlockMetasRequest;

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
  setStart(value: number): GetBlockMetasByIndexRequest;

  getCount(): number;
  setCount(value: number): GetBlockMetasByIndexRequest;

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
  setBlkhash(value: string): GetBlockMetaByHashRequest;

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
  setTotal(value: number): GetBlockMetasResponse;

  getBlkmetasList(): Array<proto_types_blockchain_pb.BlockMeta>;
  setBlkmetasList(value: Array<proto_types_blockchain_pb.BlockMeta>): GetBlockMetasResponse;
  clearBlkmetasList(): GetBlockMetasResponse;
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
  setChainmeta(value?: proto_types_blockchain_pb.ChainMeta): GetChainMetaResponse;
  hasChainmeta(): boolean;
  clearChainmeta(): GetChainMetaResponse;

  getSyncstage(): string;
  setSyncstage(value: string): GetChainMetaResponse;

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
    syncstage: string,
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
  setServermeta(value?: proto_types_node_pb.ServerMeta): GetServerMetaResponse;
  hasServermeta(): boolean;
  clearServermeta(): GetServerMetaResponse;

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
  setAction(value?: proto_types_action_pb.Action): SendActionRequest;
  hasAction(): boolean;
  clearAction(): SendActionRequest;

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
  setSignedactionbytes(value: string): SendSignedActionBytesRequest;

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
  setActionhash(value: string): SendActionResponse;

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
  setActionhash(value: string): GetReceiptByActionRequest;

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
  setReceiptinfo(value?: ReceiptInfo): GetReceiptByActionResponse;
  hasReceiptinfo(): boolean;
  clearReceiptinfo(): GetReceiptByActionResponse;

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
  setExecution(value?: proto_types_action_pb.Execution): ReadContractRequest;
  hasExecution(): boolean;
  clearExecution(): ReadContractRequest;

  getCalleraddress(): string;
  setCalleraddress(value: string): ReadContractRequest;

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
  setData(value: string): ReadContractResponse;

  getReceipt(): proto_types_action_pb.Receipt | undefined;
  setReceipt(value?: proto_types_action_pb.Receipt): ReadContractResponse;
  hasReceipt(): boolean;
  clearReceipt(): ReadContractResponse;

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
  setGasprice(value: number): SuggestGasPriceResponse;

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
  setAction(value?: proto_types_action_pb.Action): EstimateGasForActionRequest;
  hasAction(): boolean;
  clearAction(): EstimateGasForActionRequest;

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
  setTransfer(value?: proto_types_action_pb.Transfer): EstimateActionGasConsumptionRequest;
  hasTransfer(): boolean;
  clearTransfer(): EstimateActionGasConsumptionRequest;

  getExecution(): proto_types_action_pb.Execution | undefined;
  setExecution(value?: proto_types_action_pb.Execution): EstimateActionGasConsumptionRequest;
  hasExecution(): boolean;
  clearExecution(): EstimateActionGasConsumptionRequest;

  getStakecreate(): proto_types_action_pb.StakeCreate | undefined;
  setStakecreate(value?: proto_types_action_pb.StakeCreate): EstimateActionGasConsumptionRequest;
  hasStakecreate(): boolean;
  clearStakecreate(): EstimateActionGasConsumptionRequest;

  getStakeunstake(): proto_types_action_pb.StakeReclaim | undefined;
  setStakeunstake(value?: proto_types_action_pb.StakeReclaim): EstimateActionGasConsumptionRequest;
  hasStakeunstake(): boolean;
  clearStakeunstake(): EstimateActionGasConsumptionRequest;

  getStakewithdraw(): proto_types_action_pb.StakeReclaim | undefined;
  setStakewithdraw(value?: proto_types_action_pb.StakeReclaim): EstimateActionGasConsumptionRequest;
  hasStakewithdraw(): boolean;
  clearStakewithdraw(): EstimateActionGasConsumptionRequest;

  getStakeadddeposit(): proto_types_action_pb.StakeAddDeposit | undefined;
  setStakeadddeposit(value?: proto_types_action_pb.StakeAddDeposit): EstimateActionGasConsumptionRequest;
  hasStakeadddeposit(): boolean;
  clearStakeadddeposit(): EstimateActionGasConsumptionRequest;

  getStakerestake(): proto_types_action_pb.StakeRestake | undefined;
  setStakerestake(value?: proto_types_action_pb.StakeRestake): EstimateActionGasConsumptionRequest;
  hasStakerestake(): boolean;
  clearStakerestake(): EstimateActionGasConsumptionRequest;

  getStakechangecandidate(): proto_types_action_pb.StakeChangeCandidate | undefined;
  setStakechangecandidate(value?: proto_types_action_pb.StakeChangeCandidate): EstimateActionGasConsumptionRequest;
  hasStakechangecandidate(): boolean;
  clearStakechangecandidate(): EstimateActionGasConsumptionRequest;

  getStaketransferownership(): proto_types_action_pb.StakeTransferOwnership | undefined;
  setStaketransferownership(value?: proto_types_action_pb.StakeTransferOwnership): EstimateActionGasConsumptionRequest;
  hasStaketransferownership(): boolean;
  clearStaketransferownership(): EstimateActionGasConsumptionRequest;

  getCandidateregister(): proto_types_action_pb.CandidateRegister | undefined;
  setCandidateregister(value?: proto_types_action_pb.CandidateRegister): EstimateActionGasConsumptionRequest;
  hasCandidateregister(): boolean;
  clearCandidateregister(): EstimateActionGasConsumptionRequest;

  getCandidateupdate(): proto_types_action_pb.CandidateBasicInfo | undefined;
  setCandidateupdate(value?: proto_types_action_pb.CandidateBasicInfo): EstimateActionGasConsumptionRequest;
  hasCandidateupdate(): boolean;
  clearCandidateupdate(): EstimateActionGasConsumptionRequest;

  getCalleraddress(): string;
  setCalleraddress(value: string): EstimateActionGasConsumptionRequest;

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
    stakecreate?: proto_types_action_pb.StakeCreate.AsObject,
    stakeunstake?: proto_types_action_pb.StakeReclaim.AsObject,
    stakewithdraw?: proto_types_action_pb.StakeReclaim.AsObject,
    stakeadddeposit?: proto_types_action_pb.StakeAddDeposit.AsObject,
    stakerestake?: proto_types_action_pb.StakeRestake.AsObject,
    stakechangecandidate?: proto_types_action_pb.StakeChangeCandidate.AsObject,
    staketransferownership?: proto_types_action_pb.StakeTransferOwnership.AsObject,
    candidateregister?: proto_types_action_pb.CandidateRegister.AsObject,
    candidateupdate?: proto_types_action_pb.CandidateBasicInfo.AsObject,
    calleraddress: string,
  }

  export enum ActionCase { 
    ACTION_NOT_SET = 0,
    TRANSFER = 1,
    EXECUTION = 2,
    STAKECREATE = 40,
    STAKEUNSTAKE = 41,
    STAKEWITHDRAW = 42,
    STAKEADDDEPOSIT = 43,
    STAKERESTAKE = 44,
    STAKECHANGECANDIDATE = 45,
    STAKETRANSFEROWNERSHIP = 46,
    CANDIDATEREGISTER = 47,
    CANDIDATEUPDATE = 48,
  }
}

export class EstimateActionGasConsumptionResponse extends jspb.Message {
  getGas(): number;
  setGas(value: number): EstimateActionGasConsumptionResponse;

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
  setGas(value: number): EstimateGasForActionResponse;

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
  setProtocolid(value: Uint8Array | string): ReadStateRequest;

  getMethodname(): Uint8Array | string;
  getMethodname_asU8(): Uint8Array;
  getMethodname_asB64(): string;
  setMethodname(value: Uint8Array | string): ReadStateRequest;

  getArgumentsList(): Array<Uint8Array | string>;
  setArgumentsList(value: Array<Uint8Array | string>): ReadStateRequest;
  clearArgumentsList(): ReadStateRequest;
  addArguments(value: Uint8Array | string, index?: number): ReadStateRequest;

  getHeight(): string;
  setHeight(value: string): ReadStateRequest;

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
    height: string,
  }
}

export class ReadStateResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ReadStateResponse;

  getBlockidentifier(): proto_types_blockchain_pb.BlockIdentifier | undefined;
  setBlockidentifier(value?: proto_types_blockchain_pb.BlockIdentifier): ReadStateResponse;
  hasBlockidentifier(): boolean;
  clearBlockidentifier(): ReadStateResponse;

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
    blockidentifier?: proto_types_blockchain_pb.BlockIdentifier.AsObject,
  }
}

export class GetEpochMetaRequest extends jspb.Message {
  getEpochnumber(): number;
  setEpochnumber(value: number): GetEpochMetaRequest;

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
  setEpochdata(value?: proto_types_blockchain_pb.EpochData): GetEpochMetaResponse;
  hasEpochdata(): boolean;
  clearEpochdata(): GetEpochMetaResponse;

  getTotalblocks(): number;
  setTotalblocks(value: number): GetEpochMetaResponse;

  getBlockproducersinfoList(): Array<BlockProducerInfo>;
  setBlockproducersinfoList(value: Array<BlockProducerInfo>): GetEpochMetaResponse;
  clearBlockproducersinfoList(): GetEpochMetaResponse;
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
  setStartheight(value: number): GetRawBlocksRequest;

  getCount(): number;
  setCount(value: number): GetRawBlocksRequest;

  getWithreceipts(): boolean;
  setWithreceipts(value: boolean): GetRawBlocksRequest;

  getWithtransactionlogs(): boolean;
  setWithtransactionlogs(value: boolean): GetRawBlocksRequest;

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
    withtransactionlogs: boolean,
  }
}

export class GetRawBlocksResponse extends jspb.Message {
  getBlocksList(): Array<BlockInfo>;
  setBlocksList(value: Array<BlockInfo>): GetRawBlocksResponse;
  clearBlocksList(): GetRawBlocksResponse;
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
  setBlockhash(value: Uint8Array | string): GetLogsByBlock;

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
  setFromblock(value: number): GetLogsByRange;

  getToblock(): number;
  setToblock(value: number): GetLogsByRange;

  getPaginationsize(): number;
  setPaginationsize(value: number): GetLogsByRange;

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
    toblock: number,
    paginationsize: number,
  }
}

export class Topics extends jspb.Message {
  getTopicList(): Array<Uint8Array | string>;
  setTopicList(value: Array<Uint8Array | string>): Topics;
  clearTopicList(): Topics;
  addTopic(value: Uint8Array | string, index?: number): Topics;

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
  setAddressList(value: Array<string>): LogsFilter;
  clearAddressList(): LogsFilter;
  addAddress(value: string, index?: number): LogsFilter;

  getTopicsList(): Array<Topics>;
  setTopicsList(value: Array<Topics>): LogsFilter;
  clearTopicsList(): LogsFilter;
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
  setFilter(value?: LogsFilter): GetLogsRequest;
  hasFilter(): boolean;
  clearFilter(): GetLogsRequest;

  getByblock(): GetLogsByBlock | undefined;
  setByblock(value?: GetLogsByBlock): GetLogsRequest;
  hasByblock(): boolean;
  clearByblock(): GetLogsRequest;

  getByrange(): GetLogsByRange | undefined;
  setByrange(value?: GetLogsByRange): GetLogsRequest;
  hasByrange(): boolean;
  clearByrange(): GetLogsRequest;

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
  setLogsList(value: Array<proto_types_action_pb.Log>): GetLogsResponse;
  clearLogsList(): GetLogsResponse;
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

export class GetTransactionLogByActionHashRequest extends jspb.Message {
  getActionhash(): string;
  setActionhash(value: string): GetTransactionLogByActionHashRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionLogByActionHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionLogByActionHashRequest): GetTransactionLogByActionHashRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionLogByActionHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionLogByActionHashRequest;
  static deserializeBinaryFromReader(message: GetTransactionLogByActionHashRequest, reader: jspb.BinaryReader): GetTransactionLogByActionHashRequest;
}

export namespace GetTransactionLogByActionHashRequest {
  export type AsObject = {
    actionhash: string,
  }
}

export class GetTransactionLogByActionHashResponse extends jspb.Message {
  getTransactionlog(): proto_types_transaction_log_pb.TransactionLog | undefined;
  setTransactionlog(value?: proto_types_transaction_log_pb.TransactionLog): GetTransactionLogByActionHashResponse;
  hasTransactionlog(): boolean;
  clearTransactionlog(): GetTransactionLogByActionHashResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionLogByActionHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionLogByActionHashResponse): GetTransactionLogByActionHashResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionLogByActionHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionLogByActionHashResponse;
  static deserializeBinaryFromReader(message: GetTransactionLogByActionHashResponse, reader: jspb.BinaryReader): GetTransactionLogByActionHashResponse;
}

export namespace GetTransactionLogByActionHashResponse {
  export type AsObject = {
    transactionlog?: proto_types_transaction_log_pb.TransactionLog.AsObject,
  }
}

export class GetTransactionLogByBlockHeightRequest extends jspb.Message {
  getBlockheight(): number;
  setBlockheight(value: number): GetTransactionLogByBlockHeightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionLogByBlockHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionLogByBlockHeightRequest): GetTransactionLogByBlockHeightRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionLogByBlockHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionLogByBlockHeightRequest;
  static deserializeBinaryFromReader(message: GetTransactionLogByBlockHeightRequest, reader: jspb.BinaryReader): GetTransactionLogByBlockHeightRequest;
}

export namespace GetTransactionLogByBlockHeightRequest {
  export type AsObject = {
    blockheight: number,
  }
}

export class GetTransactionLogByBlockHeightResponse extends jspb.Message {
  getTransactionlogs(): proto_types_transaction_log_pb.TransactionLogs | undefined;
  setTransactionlogs(value?: proto_types_transaction_log_pb.TransactionLogs): GetTransactionLogByBlockHeightResponse;
  hasTransactionlogs(): boolean;
  clearTransactionlogs(): GetTransactionLogByBlockHeightResponse;

  getBlockidentifier(): proto_types_blockchain_pb.BlockIdentifier | undefined;
  setBlockidentifier(value?: proto_types_blockchain_pb.BlockIdentifier): GetTransactionLogByBlockHeightResponse;
  hasBlockidentifier(): boolean;
  clearBlockidentifier(): GetTransactionLogByBlockHeightResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionLogByBlockHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionLogByBlockHeightResponse): GetTransactionLogByBlockHeightResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionLogByBlockHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionLogByBlockHeightResponse;
  static deserializeBinaryFromReader(message: GetTransactionLogByBlockHeightResponse, reader: jspb.BinaryReader): GetTransactionLogByBlockHeightResponse;
}

export namespace GetTransactionLogByBlockHeightResponse {
  export type AsObject = {
    transactionlogs?: proto_types_transaction_log_pb.TransactionLogs.AsObject,
    blockidentifier?: proto_types_blockchain_pb.BlockIdentifier.AsObject,
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
  setBlock(value?: BlockInfo): StreamBlocksResponse;
  hasBlock(): boolean;
  clearBlock(): StreamBlocksResponse;

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
  setFilter(value?: LogsFilter): StreamLogsRequest;
  hasFilter(): boolean;
  clearFilter(): StreamLogsRequest;

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
  setLog(value?: proto_types_action_pb.Log): StreamLogsResponse;
  hasLog(): boolean;
  clearLog(): StreamLogsResponse;

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

export class GetActPoolActionsRequest extends jspb.Message {
  getActionhashesList(): Array<string>;
  setActionhashesList(value: Array<string>): GetActPoolActionsRequest;
  clearActionhashesList(): GetActPoolActionsRequest;
  addActionhashes(value: string, index?: number): GetActPoolActionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActPoolActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActPoolActionsRequest): GetActPoolActionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetActPoolActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActPoolActionsRequest;
  static deserializeBinaryFromReader(message: GetActPoolActionsRequest, reader: jspb.BinaryReader): GetActPoolActionsRequest;
}

export namespace GetActPoolActionsRequest {
  export type AsObject = {
    actionhashesList: Array<string>,
  }
}

export class GetActPoolActionsResponse extends jspb.Message {
  getActionsList(): Array<proto_types_action_pb.Action>;
  setActionsList(value: Array<proto_types_action_pb.Action>): GetActPoolActionsResponse;
  clearActionsList(): GetActPoolActionsResponse;
  addActions(value?: proto_types_action_pb.Action, index?: number): proto_types_action_pb.Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActPoolActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActPoolActionsResponse): GetActPoolActionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetActPoolActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActPoolActionsResponse;
  static deserializeBinaryFromReader(message: GetActPoolActionsResponse, reader: jspb.BinaryReader): GetActPoolActionsResponse;
}

export namespace GetActPoolActionsResponse {
  export type AsObject = {
    actionsList: Array<proto_types_action_pb.Action.AsObject>,
  }
}

export class GetElectionBucketsRequest extends jspb.Message {
  getEpochnum(): number;
  setEpochnum(value: number): GetElectionBucketsRequest;

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
  setBucketsList(value: Array<proto_types_election_pb.ElectionBucket>): GetElectionBucketsResponse;
  clearBucketsList(): GetElectionBucketsResponse;
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

export class GetEvmTransfersByActionHashRequest extends jspb.Message {
  getActionhash(): string;
  setActionhash(value: string): GetEvmTransfersByActionHashRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvmTransfersByActionHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvmTransfersByActionHashRequest): GetEvmTransfersByActionHashRequest.AsObject;
  static serializeBinaryToWriter(message: GetEvmTransfersByActionHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvmTransfersByActionHashRequest;
  static deserializeBinaryFromReader(message: GetEvmTransfersByActionHashRequest, reader: jspb.BinaryReader): GetEvmTransfersByActionHashRequest;
}

export namespace GetEvmTransfersByActionHashRequest {
  export type AsObject = {
    actionhash: string,
  }
}

export class GetEvmTransfersByActionHashResponse extends jspb.Message {
  getActionevmtransfers(): proto_types_action_pb.ActionEvmTransfer | undefined;
  setActionevmtransfers(value?: proto_types_action_pb.ActionEvmTransfer): GetEvmTransfersByActionHashResponse;
  hasActionevmtransfers(): boolean;
  clearActionevmtransfers(): GetEvmTransfersByActionHashResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvmTransfersByActionHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvmTransfersByActionHashResponse): GetEvmTransfersByActionHashResponse.AsObject;
  static serializeBinaryToWriter(message: GetEvmTransfersByActionHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvmTransfersByActionHashResponse;
  static deserializeBinaryFromReader(message: GetEvmTransfersByActionHashResponse, reader: jspb.BinaryReader): GetEvmTransfersByActionHashResponse;
}

export namespace GetEvmTransfersByActionHashResponse {
  export type AsObject = {
    actionevmtransfers?: proto_types_action_pb.ActionEvmTransfer.AsObject,
  }
}

export class GetEvmTransfersByBlockHeightRequest extends jspb.Message {
  getBlockheight(): number;
  setBlockheight(value: number): GetEvmTransfersByBlockHeightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvmTransfersByBlockHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvmTransfersByBlockHeightRequest): GetEvmTransfersByBlockHeightRequest.AsObject;
  static serializeBinaryToWriter(message: GetEvmTransfersByBlockHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvmTransfersByBlockHeightRequest;
  static deserializeBinaryFromReader(message: GetEvmTransfersByBlockHeightRequest, reader: jspb.BinaryReader): GetEvmTransfersByBlockHeightRequest;
}

export namespace GetEvmTransfersByBlockHeightRequest {
  export type AsObject = {
    blockheight: number,
  }
}

export class GetEvmTransfersByBlockHeightResponse extends jspb.Message {
  getBlockevmtransfers(): proto_types_action_pb.BlockEvmTransfer | undefined;
  setBlockevmtransfers(value?: proto_types_action_pb.BlockEvmTransfer): GetEvmTransfersByBlockHeightResponse;
  hasBlockevmtransfers(): boolean;
  clearBlockevmtransfers(): GetEvmTransfersByBlockHeightResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvmTransfersByBlockHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvmTransfersByBlockHeightResponse): GetEvmTransfersByBlockHeightResponse.AsObject;
  static serializeBinaryToWriter(message: GetEvmTransfersByBlockHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvmTransfersByBlockHeightResponse;
  static deserializeBinaryFromReader(message: GetEvmTransfersByBlockHeightResponse, reader: jspb.BinaryReader): GetEvmTransfersByBlockHeightResponse;
}

export namespace GetEvmTransfersByBlockHeightResponse {
  export type AsObject = {
    blockevmtransfers?: proto_types_action_pb.BlockEvmTransfer.AsObject,
  }
}

