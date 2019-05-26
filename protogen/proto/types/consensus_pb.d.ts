import * as jspb from "google-protobuf"

import * as proto_types_blockchain_pb from '../../proto/types/blockchain_pb';
import * as proto_types_endorsement_pb from '../../proto/types/endorsement_pb';

export class BlockProposal extends jspb.Message {
  getBlock(): proto_types_blockchain_pb.Block | undefined;
  setBlock(value?: proto_types_blockchain_pb.Block): void;
  hasBlock(): boolean;
  clearBlock(): void;

  getEndorsementsList(): Array<proto_types_endorsement_pb.Endorsement>;
  setEndorsementsList(value: Array<proto_types_endorsement_pb.Endorsement>): void;
  clearEndorsementsList(): void;
  addEndorsements(value?: proto_types_endorsement_pb.Endorsement, index?: number): proto_types_endorsement_pb.Endorsement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockProposal.AsObject;
  static toObject(includeInstance: boolean, msg: BlockProposal): BlockProposal.AsObject;
  static serializeBinaryToWriter(message: BlockProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockProposal;
  static deserializeBinaryFromReader(message: BlockProposal, reader: jspb.BinaryReader): BlockProposal;
}

export namespace BlockProposal {
  export type AsObject = {
    block?: proto_types_blockchain_pb.Block.AsObject,
    endorsementsList: Array<proto_types_endorsement_pb.Endorsement.AsObject>,
  }
}

export class ConsensusVote extends jspb.Message {
  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  getTopic(): ConsensusVote.Topic;
  setTopic(value: ConsensusVote.Topic): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusVote.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusVote): ConsensusVote.AsObject;
  static serializeBinaryToWriter(message: ConsensusVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusVote;
  static deserializeBinaryFromReader(message: ConsensusVote, reader: jspb.BinaryReader): ConsensusVote;
}

export namespace ConsensusVote {
  export type AsObject = {
    blockhash: Uint8Array | string,
    topic: ConsensusVote.Topic,
  }

  export enum Topic { 
    PROPOSAL = 0,
    LOCK = 1,
    COMMIT = 2,
  }
}

export class ConsensusMessage extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getEndorsement(): proto_types_endorsement_pb.Endorsement | undefined;
  setEndorsement(value?: proto_types_endorsement_pb.Endorsement): void;
  hasEndorsement(): boolean;
  clearEndorsement(): void;

  getBlockproposal(): BlockProposal | undefined;
  setBlockproposal(value?: BlockProposal): void;
  hasBlockproposal(): boolean;
  clearBlockproposal(): void;
  hasBlockproposal(): boolean;

  getVote(): ConsensusVote | undefined;
  setVote(value?: ConsensusVote): void;
  hasVote(): boolean;
  clearVote(): void;
  hasVote(): boolean;

  getMsgCase(): ConsensusMessage.MsgCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusMessage): ConsensusMessage.AsObject;
  static serializeBinaryToWriter(message: ConsensusMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusMessage;
  static deserializeBinaryFromReader(message: ConsensusMessage, reader: jspb.BinaryReader): ConsensusMessage;
}

export namespace ConsensusMessage {
  export type AsObject = {
    height: number,
    endorsement?: proto_types_endorsement_pb.Endorsement.AsObject,
    blockproposal?: BlockProposal.AsObject,
    vote?: ConsensusVote.AsObject,
  }

  export enum MsgCase { 
    MSG_NOT_SET = 0,
    BLOCKPROPOSAL = 100,
    VOTE = 101,
  }
}

