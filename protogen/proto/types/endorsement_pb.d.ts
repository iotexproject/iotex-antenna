import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Endorsement extends jspb.Message {
  constructor ();
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearTimestamp(): void;
  getEndorser(): {};
  setEndorser(value: {}): void;
  getSignature(): {};
  setSignature(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endorsement.AsObject;
  static toObject(includeInstance: boolean, msg: Endorsement): Endorsement.AsObject;
  static serializeBinaryToWriter(message: Endorsement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endorsement;
  static deserializeBinaryFromReader(message: Endorsement, reader: jspb.BinaryReader): Endorsement;
}

export namespace Endorsement {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endorser: {};
    signature: {};
  }
}

