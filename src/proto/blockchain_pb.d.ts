import * as jspb from "google-protobuf"

import * as action_pb from './action_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as endorsement_pb from './endorsement_pb';

export class BlockHeaderPb extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getChainid(): number;
  setChainid(value: number): void;
  getHeight(): number;
  setHeight(value: number): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearTimestamp(): void;
  getPrevblockhash(): {};
  setPrevblockhash(value: {}): void;
  getTxroot(): {};
  setTxroot(value: {}): void;
  getStateroot(): {};
  setStateroot(value: {}): void;
  getDeltastatedigest(): {};
  setDeltastatedigest(value: {}): void;
  getReceiptroot(): {};
  setReceiptroot(value: {}): void;
  getReserved(): {};
  setReserved(value: {}): void;
  getSignature(): {};
  setSignature(value: {}): void;
  getPubkey(): {};
  setPubkey(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeaderPb.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeaderPb): BlockHeaderPb.AsObject;
  static serializeBinaryToWriter(message: BlockHeaderPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeaderPb;
  static deserializeBinaryFromReader(message: BlockHeaderPb, reader: jspb.BinaryReader): BlockHeaderPb;
}

export namespace BlockHeaderPb {
  export type AsObject = {
    version: number;
    chainid: number;
    height: number;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    prevblockhash: {};
    txroot: {};
    stateroot: {};
    deltastatedigest: {};
    receiptroot: {};
    reserved: {};
    signature: {};
    pubkey: {};
  }
}

export class BlockFooterPb extends jspb.Message {
  constructor ();
  getCommittimestamp(): number;
  setCommittimestamp(value: number): void;
  getEndorsements(): endorsement_pb.EndorsementSet | undefined;
  setEndorsements(value?: endorsement_pb.EndorsementSet): void;
  clearEndorsements(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockFooterPb.AsObject;
  static toObject(includeInstance: boolean, msg: BlockFooterPb): BlockFooterPb.AsObject;
  static serializeBinaryToWriter(message: BlockFooterPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockFooterPb;
  static deserializeBinaryFromReader(message: BlockFooterPb, reader: jspb.BinaryReader): BlockFooterPb;
}

export namespace BlockFooterPb {
  export type AsObject = {
    committimestamp: number;
    endorsements?: endorsement_pb.EndorsementSet.AsObject;
  }
}

export class BlockPb extends jspb.Message {
  constructor ();
  getHeader(): BlockHeaderPb | undefined;
  setHeader(value?: BlockHeaderPb): void;
  clearHeader(): void;
  getActionsList(): action_pb.ActionPb[] | undefined;
  setActionsList(value?: action_pb.ActionPb[]): void;
  clearActionsList(): void;
  getFooter(): BlockFooterPb | undefined;
  setFooter(value?: BlockFooterPb): void;
  clearFooter(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockPb.AsObject;
  static toObject(includeInstance: boolean, msg: BlockPb): BlockPb.AsObject;
  static serializeBinaryToWriter(message: BlockPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockPb;
  static deserializeBinaryFromReader(message: BlockPb, reader: jspb.BinaryReader): BlockPb;
}

export namespace BlockPb {
  export type AsObject = {
    header?: BlockHeaderPb.AsObject;
    actionsList?: action_pb.ActionPb.AsObject[];
    footer?: BlockFooterPb.AsObject;
  }
}

export class Receipts extends jspb.Message {
  constructor ();
  getReceiptsList(): action_pb.ReceiptPb[] | undefined;
  setReceiptsList(value?: action_pb.ReceiptPb[]): void;
  clearReceiptsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipts.AsObject;
  static toObject(includeInstance: boolean, msg: Receipts): Receipts.AsObject;
  static serializeBinaryToWriter(message: Receipts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipts;
  static deserializeBinaryFromReader(message: Receipts, reader: jspb.BinaryReader): Receipts;
}

export namespace Receipts {
  export type AsObject = {
    receiptsList?: action_pb.ReceiptPb.AsObject[];
  }
}

export class BlockIndex extends jspb.Message {
  constructor ();
  getStart(): number;
  setStart(value: number): void;
  getEnd(): number;
  setEnd(value: number): void;
  getOffsetList(): number[];
  setOffsetList(value: number[]): void;
  clearOffsetList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockIndex.AsObject;
  static toObject(includeInstance: boolean, msg: BlockIndex): BlockIndex.AsObject;
  static serializeBinaryToWriter(message: BlockIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockIndex;
  static deserializeBinaryFromReader(message: BlockIndex, reader: jspb.BinaryReader): BlockIndex;
}

export namespace BlockIndex {
  export type AsObject = {
    start: number;
    end: number;
    offsetList: number[];
  }
}

export class BlockSync extends jspb.Message {
  constructor ();
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
    start: number;
    end: number;
  }
}

export class BlockContainer extends jspb.Message {
  constructor ();
  getBlock(): BlockPb | undefined;
  setBlock(value?: BlockPb): void;
  clearBlock(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockContainer.AsObject;
  static toObject(includeInstance: boolean, msg: BlockContainer): BlockContainer.AsObject;
  static serializeBinaryToWriter(message: BlockContainer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockContainer;
  static deserializeBinaryFromReader(message: BlockContainer, reader: jspb.BinaryReader): BlockContainer;
}

export namespace BlockContainer {
  export type AsObject = {
    block?: BlockPb.AsObject;
  }
}

export class ConsensusPb extends jspb.Message {
  constructor ();
  getHeight(): number;
  setHeight(value: number): void;
  getRound(): number;
  setRound(value: number): void;
  getType(): ConsensusPb.ConsensusMessageType;
  setType(value: ConsensusPb.ConsensusMessageType): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearTimestamp(): void;
  getData(): {};
  setData(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusPb.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusPb): ConsensusPb.AsObject;
  static serializeBinaryToWriter(message: ConsensusPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusPb;
  static deserializeBinaryFromReader(message: ConsensusPb, reader: jspb.BinaryReader): ConsensusPb;
}

export namespace ConsensusPb {
  export type AsObject = {
    height: number;
    round: number;
    type: ConsensusPb.ConsensusMessageType;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    data: {};
  }

  export enum ConsensusMessageType { 
    PROPOSAL = 0,
    ENDORSEMENT = 1,
  }
}

export class Candidate extends jspb.Message {
  constructor ();
  getAddress(): string;
  setAddress(value: string): void;
  getVotes(): {};
  setVotes(value: {}): void;
  getPubkey(): {};
  setPubkey(value: {}): void;
  getCreationheight(): number;
  setCreationheight(value: number): void;
  getLastupdateheight(): number;
  setLastupdateheight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candidate.AsObject;
  static toObject(includeInstance: boolean, msg: Candidate): Candidate.AsObject;
  static serializeBinaryToWriter(message: Candidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candidate;
  static deserializeBinaryFromReader(message: Candidate, reader: jspb.BinaryReader): Candidate;
}

export namespace Candidate {
  export type AsObject = {
    address: string;
    votes: {};
    pubkey: {};
    creationheight: number;
    lastupdateheight: number;
  }
}

export class CandidateList extends jspb.Message {
  constructor ();
  getCandidatesList(): Candidate[] | undefined;
  setCandidatesList(value?: Candidate[]): void;
  clearCandidatesList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateList.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateList): CandidateList.AsObject;
  static serializeBinaryToWriter(message: CandidateList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateList;
  static deserializeBinaryFromReader(message: CandidateList, reader: jspb.BinaryReader): CandidateList;
}

export namespace CandidateList {
  export type AsObject = {
    candidatesList?: Candidate.AsObject[];
  }
}

export class ChainMeta extends jspb.Message {
  constructor ();
  getHeight(): number;
  setHeight(value: number): void;
  getSupply(): string;
  setSupply(value: string): void;
  getNumactions(): number;
  setNumactions(value: number): void;
  getTps(): number;
  setTps(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ChainMeta): ChainMeta.AsObject;
  static serializeBinaryToWriter(message: ChainMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainMeta;
  static deserializeBinaryFromReader(message: ChainMeta, reader: jspb.BinaryReader): ChainMeta;
}

export namespace ChainMeta {
  export type AsObject = {
    height: number;
    supply: string;
    numactions: number;
    tps: number;
  }
}

export class BlockMeta extends jspb.Message {
  constructor ();
  getHash(): string;
  setHash(value: string): void;
  getHeight(): number;
  setHeight(value: number): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;
  getNumactions(): number;
  setNumactions(value: number): void;
  getProduceraddress(): string;
  setProduceraddress(value: string): void;
  getTransferamount(): string;
  setTransferamount(value: string): void;
  getTxroot(): string;
  setTxroot(value: string): void;
  getReceiptroot(): string;
  setReceiptroot(value: string): void;
  getDeltastatedigest(): string;
  setDeltastatedigest(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMeta.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMeta): BlockMeta.AsObject;
  static serializeBinaryToWriter(message: BlockMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMeta;
  static deserializeBinaryFromReader(message: BlockMeta, reader: jspb.BinaryReader): BlockMeta;
}

export namespace BlockMeta {
  export type AsObject = {
    hash: string;
    height: number;
    timestamp: number;
    numactions: number;
    produceraddress: string;
    transferamount: string;
    txroot: string;
    receiptroot: string;
    deltastatedigest: string;
  }
}

export class TestPayload extends jspb.Message {
  constructor ();
  getMsgBody(): {};
  setMsgBody(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestPayload.AsObject;
  static toObject(includeInstance: boolean, msg: TestPayload): TestPayload.AsObject;
  static serializeBinaryToWriter(message: TestPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestPayload;
  static deserializeBinaryFromReader(message: TestPayload, reader: jspb.BinaryReader): TestPayload;
}

export namespace TestPayload {
  export type AsObject = {
    msgBody: {};
  }
}

