import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Endorsement extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  getEndorser(): Uint8Array | string;
  getEndorser_asU8(): Uint8Array;
  getEndorser_asB64(): string;
  setEndorser(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endorsement.AsObject;
  static toObject(includeInstance: boolean, msg: Endorsement): Endorsement.AsObject;
  static serializeBinaryToWriter(message: Endorsement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endorsement;
  static deserializeBinaryFromReader(message: Endorsement, reader: jspb.BinaryReader): Endorsement;
}

export namespace Endorsement {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endorser: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

