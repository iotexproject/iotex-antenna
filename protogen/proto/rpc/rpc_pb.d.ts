import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class BlockSync extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockSync.AsObject;
  static toObject(includeInstance: boolean, msg: BlockSync): BlockSync.AsObject;
  static serializeBinaryToWriter(message: BlockSync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockSync;
  static deserializeBinaryFromReader(message: BlockSync, reader: jspb.BinaryReader): BlockSync;
}

export namespace BlockSync {
  export type AsObject = {
    start: number,
    end: number,
  }
}

export class BroadcastMsg extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): void;

  getMsgType(): MessageType;
  setMsgType(value: MessageType): void;

  getMsgBody(): Uint8Array | string;
  getMsgBody_asU8(): Uint8Array;
  getMsgBody_asB64(): string;
  setMsgBody(value: Uint8Array | string): void;

  getPeerId(): string;
  setPeerId(value: string): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastMsg): BroadcastMsg.AsObject;
  static serializeBinaryToWriter(message: BroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastMsg;
  static deserializeBinaryFromReader(message: BroadcastMsg, reader: jspb.BinaryReader): BroadcastMsg;
}

export namespace BroadcastMsg {
  export type AsObject = {
    chainId: number,
    msgType: MessageType,
    msgBody: Uint8Array | string,
    peerId: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UnicastMsg extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): void;

  getAddr(): string;
  setAddr(value: string): void;

  getMsgType(): MessageType;
  setMsgType(value: MessageType): void;

  getMsgBody(): Uint8Array | string;
  getMsgBody_asU8(): Uint8Array;
  getMsgBody_asB64(): string;
  setMsgBody(value: Uint8Array | string): void;

  getPeerId(): string;
  setPeerId(value: string): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnicastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: UnicastMsg): UnicastMsg.AsObject;
  static serializeBinaryToWriter(message: UnicastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnicastMsg;
  static deserializeBinaryFromReader(message: UnicastMsg, reader: jspb.BinaryReader): UnicastMsg;
}

export namespace UnicastMsg {
  export type AsObject = {
    chainId: number,
    addr: string,
    msgType: MessageType,
    msgBody: Uint8Array | string,
    peerId: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum MessageType { 
  UNKNOWN = 0,
  ACTION = 1,
  BLOCK = 2,
  CONSENSUS = 3,
  BLOCK_REQUEST = 4,
  TEST = 10001,
}
