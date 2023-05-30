import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ServerMeta extends jspb.Message {
  getPackageversion(): string;
  setPackageversion(value: string): ServerMeta;

  getPackagecommitid(): string;
  setPackagecommitid(value: string): ServerMeta;

  getGitstatus(): string;
  setGitstatus(value: string): ServerMeta;

  getGoversion(): string;
  setGoversion(value: string): ServerMeta;

  getBuildtime(): string;
  setBuildtime(value: string): ServerMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMeta): ServerMeta.AsObject;
  static serializeBinaryToWriter(message: ServerMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMeta;
  static deserializeBinaryFromReader(message: ServerMeta, reader: jspb.BinaryReader): ServerMeta;
}

export namespace ServerMeta {
  export type AsObject = {
    packageversion: string,
    packagecommitid: string,
    gitstatus: string,
    goversion: string,
    buildtime: string,
  }
}

export class NodeInfoCore extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): NodeInfoCore;

  getHeight(): number;
  setHeight(value: number): NodeInfoCore;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): NodeInfoCore;
  hasTimestamp(): boolean;
  clearTimestamp(): NodeInfoCore;

  getAddress(): string;
  setAddress(value: string): NodeInfoCore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfoCore.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfoCore): NodeInfoCore.AsObject;
  static serializeBinaryToWriter(message: NodeInfoCore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfoCore;
  static deserializeBinaryFromReader(message: NodeInfoCore, reader: jspb.BinaryReader): NodeInfoCore;
}

export namespace NodeInfoCore {
  export type AsObject = {
    version: string,
    height: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    address: string,
  }
}

export class NodeInfo extends jspb.Message {
  getInfo(): NodeInfoCore | undefined;
  setInfo(value?: NodeInfoCore): NodeInfo;
  hasInfo(): boolean;
  clearInfo(): NodeInfo;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): NodeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
  static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfo;
  static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
  export type AsObject = {
    info?: NodeInfoCore.AsObject,
    signature: Uint8Array | string,
  }
}

export class NodeInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfoRequest): NodeInfoRequest.AsObject;
  static serializeBinaryToWriter(message: NodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfoRequest;
  static deserializeBinaryFromReader(message: NodeInfoRequest, reader: jspb.BinaryReader): NodeInfoRequest;
}

export namespace NodeInfoRequest {
  export type AsObject = {
  }
}

