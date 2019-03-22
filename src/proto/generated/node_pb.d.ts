import * as jspb from "google-protobuf";

export class ServerMeta extends jspb.Message {
  constructor();
  getPackageversion(): string;
  setPackageversion(value: string): void;
  getPackagecommitid(): string;
  setPackagecommitid(value: string): void;
  getGitstatus(): string;
  setGitstatus(value: string): void;
  getGoversion(): string;
  setGoversion(value: string): void;
  getBuidtime(): string;
  setBuidtime(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMeta.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ServerMeta
  ): ServerMeta.AsObject;
  static serializeBinaryToWriter(
    message: ServerMeta,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ServerMeta;
  static deserializeBinaryFromReader(
    message: ServerMeta,
    reader: jspb.BinaryReader
  ): ServerMeta;
}

export declare namespace ServerMeta {
  export type AsObject = {
    packageversion: string;
    packagecommitid: string;
    gitstatus: string;
    goversion: string;
    buidtime: string;
  };
}
