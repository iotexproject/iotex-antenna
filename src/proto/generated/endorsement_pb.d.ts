import * as jspb from "google-protobuf";

export class Endorsement extends jspb.Message {
  constructor();
  getHeight(): number;
  setHeight(value: number): void;
  getRound(): number;
  setRound(value: number): void;
  getBlockhash(): {};
  setBlockhash(value: {}): void;
  getTopic(): Endorsement.ConsensusVoteTopic;
  setTopic(value: Endorsement.ConsensusVoteTopic): void;
  getEndorser(): string;
  setEndorser(value: string): void;
  getEndorserpubkey(): {};
  setEndorserpubkey(value: {}): void;
  getDecision(): boolean;
  setDecision(value: boolean): void;
  getSignature(): {};
  setSignature(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endorsement.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: Endorsement
  ): Endorsement.AsObject;
  static serializeBinaryToWriter(
    message: Endorsement,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Endorsement;
  static deserializeBinaryFromReader(
    message: Endorsement,
    reader: jspb.BinaryReader
  ): Endorsement;
}

export declare namespace Endorsement {
  export type AsObject = {
    height: number;
    round: number;
    blockhash: {};
    topic: Endorsement.ConsensusVoteTopic;
    endorser: string;
    endorserpubkey: {};
    decision: boolean;
    signature: {};
  };

  export enum ConsensusVoteTopic {
    PROPOSAL = 0,
    LOCK = 1,
    COMMIT = 2
  }
}

export class EndorsementSet extends jspb.Message {
  constructor();
  getBlockhash(): {};
  setBlockhash(value: {}): void;
  getRound(): number;
  setRound(value: number): void;
  getEndorsementsList(): Endorsement[] | undefined;
  setEndorsementsList(value?: Endorsement[]): void;
  clearEndorsementsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndorsementSet.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EndorsementSet
  ): EndorsementSet.AsObject;
  static serializeBinaryToWriter(
    message: EndorsementSet,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EndorsementSet;
  static deserializeBinaryFromReader(
    message: EndorsementSet,
    reader: jspb.BinaryReader
  ): EndorsementSet;
}

export declare namespace EndorsementSet {
  export type AsObject = {
    blockhash: {};
    round: number;
    endorsementsList?: Endorsement.AsObject[];
  };
}
