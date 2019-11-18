import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ElectionBucket extends jspb.Message {
  getVoter(): Uint8Array | string;
  getVoter_asU8(): Uint8Array;
  getVoter_asB64(): string;
  setVoter(value: Uint8Array | string): void;

  getCandidate(): Uint8Array | string;
  getCandidate_asU8(): Uint8Array;
  getCandidate_asB64(): string;
  setCandidate(value: Uint8Array | string): void;

  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): void;

  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStarttime(): boolean;
  clearStarttime(): void;

  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasDuration(): boolean;
  clearDuration(): void;

  getDecay(): boolean;
  setDecay(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElectionBucket.AsObject;
  static toObject(includeInstance: boolean, msg: ElectionBucket): ElectionBucket.AsObject;
  static serializeBinaryToWriter(message: ElectionBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElectionBucket;
  static deserializeBinaryFromReader(message: ElectionBucket, reader: jspb.BinaryReader): ElectionBucket;
}

export namespace ElectionBucket {
  export type AsObject = {
    voter: Uint8Array | string,
    candidate: Uint8Array | string,
    amount: Uint8Array | string,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    decay: boolean,
  }
}

