import * as jspb from "google-protobuf"

import * as proto_types_action_pb from '../../proto/types/action_pb';
import * as proto_types_endorsement_pb from '../../proto/types/endorsement_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class BlockHeader extends jspb.Message {
  getCore(): BlockHeaderCore | undefined;
  setCore(value?: BlockHeaderCore): void;
  hasCore(): boolean;
  clearCore(): void;

  getProducerpubkey(): Uint8Array | string;
  getProducerpubkey_asU8(): Uint8Array;
  getProducerpubkey_asB64(): string;
  setProducerpubkey(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeader): BlockHeader.AsObject;
  static serializeBinaryToWriter(message: BlockHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeader;
  static deserializeBinaryFromReader(message: BlockHeader, reader: jspb.BinaryReader): BlockHeader;
}

export namespace BlockHeader {
  export type AsObject = {
    core?: BlockHeaderCore.AsObject,
    producerpubkey: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class BlockHeaderCore extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  getPrevblockhash(): Uint8Array | string;
  getPrevblockhash_asU8(): Uint8Array;
  getPrevblockhash_asB64(): string;
  setPrevblockhash(value: Uint8Array | string): void;

  getTxroot(): Uint8Array | string;
  getTxroot_asU8(): Uint8Array;
  getTxroot_asB64(): string;
  setTxroot(value: Uint8Array | string): void;

  getDeltastatedigest(): Uint8Array | string;
  getDeltastatedigest_asU8(): Uint8Array;
  getDeltastatedigest_asB64(): string;
  setDeltastatedigest(value: Uint8Array | string): void;

  getReceiptroot(): Uint8Array | string;
  getReceiptroot_asU8(): Uint8Array;
  getReceiptroot_asB64(): string;
  setReceiptroot(value: Uint8Array | string): void;

  getLogsbloom(): Uint8Array | string;
  getLogsbloom_asU8(): Uint8Array;
  getLogsbloom_asB64(): string;
  setLogsbloom(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeaderCore.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeaderCore): BlockHeaderCore.AsObject;
  static serializeBinaryToWriter(message: BlockHeaderCore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeaderCore;
  static deserializeBinaryFromReader(message: BlockHeaderCore, reader: jspb.BinaryReader): BlockHeaderCore;
}

export namespace BlockHeaderCore {
  export type AsObject = {
    version: number,
    height: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    prevblockhash: Uint8Array | string,
    txroot: Uint8Array | string,
    deltastatedigest: Uint8Array | string,
    receiptroot: Uint8Array | string,
    logsbloom: Uint8Array | string,
  }
}

export class BlockFooter extends jspb.Message {
  getEndorsementsList(): Array<proto_types_endorsement_pb.Endorsement>;
  setEndorsementsList(value: Array<proto_types_endorsement_pb.Endorsement>): void;
  clearEndorsementsList(): void;
  addEndorsements(value?: proto_types_endorsement_pb.Endorsement, index?: number): proto_types_endorsement_pb.Endorsement;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockFooter.AsObject;
  static toObject(includeInstance: boolean, msg: BlockFooter): BlockFooter.AsObject;
  static serializeBinaryToWriter(message: BlockFooter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockFooter;
  static deserializeBinaryFromReader(message: BlockFooter, reader: jspb.BinaryReader): BlockFooter;
}

export namespace BlockFooter {
  export type AsObject = {
    endorsementsList: Array<proto_types_endorsement_pb.Endorsement.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BlockBody extends jspb.Message {
  getActionsList(): Array<proto_types_action_pb.Action>;
  setActionsList(value: Array<proto_types_action_pb.Action>): void;
  clearActionsList(): void;
  addActions(value?: proto_types_action_pb.Action, index?: number): proto_types_action_pb.Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockBody.AsObject;
  static toObject(includeInstance: boolean, msg: BlockBody): BlockBody.AsObject;
  static serializeBinaryToWriter(message: BlockBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockBody;
  static deserializeBinaryFromReader(message: BlockBody, reader: jspb.BinaryReader): BlockBody;
}

export namespace BlockBody {
  export type AsObject = {
    actionsList: Array<proto_types_action_pb.Action.AsObject>,
  }
}

export class Block extends jspb.Message {
  getHeader(): BlockHeader | undefined;
  setHeader(value?: BlockHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getBody(): BlockBody | undefined;
  setBody(value?: BlockBody): void;
  hasBody(): boolean;
  clearBody(): void;

  getFooter(): BlockFooter | undefined;
  setFooter(value?: BlockFooter): void;
  hasFooter(): boolean;
  clearFooter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    header?: BlockHeader.AsObject,
    body?: BlockBody.AsObject,
    footer?: BlockFooter.AsObject,
  }
}

export class Receipts extends jspb.Message {
  getReceiptsList(): Array<proto_types_action_pb.Receipt>;
  setReceiptsList(value: Array<proto_types_action_pb.Receipt>): void;
  clearReceiptsList(): void;
  addReceipts(value?: proto_types_action_pb.Receipt, index?: number): proto_types_action_pb.Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipts.AsObject;
  static toObject(includeInstance: boolean, msg: Receipts): Receipts.AsObject;
  static serializeBinaryToWriter(message: Receipts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipts;
  static deserializeBinaryFromReader(message: Receipts, reader: jspb.BinaryReader): Receipts;
}

export namespace Receipts {
  export type AsObject = {
    receiptsList: Array<proto_types_action_pb.Receipt.AsObject>,
  }
}

export class EpochData extends jspb.Message {
  getNum(): number;
  setNum(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getGravitychainstartheight(): number;
  setGravitychainstartheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpochData.AsObject;
  static toObject(includeInstance: boolean, msg: EpochData): EpochData.AsObject;
  static serializeBinaryToWriter(message: EpochData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpochData;
  static deserializeBinaryFromReader(message: EpochData, reader: jspb.BinaryReader): EpochData;
}

export namespace EpochData {
  export type AsObject = {
    num: number,
    height: number,
    gravitychainstartheight: number,
  }
}

export class ChainMeta extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getNumactions(): number;
  setNumactions(value: number): void;

  getTps(): number;
  setTps(value: number): void;

  getEpoch(): EpochData | undefined;
  setEpoch(value?: EpochData): void;
  hasEpoch(): boolean;
  clearEpoch(): void;

  getTpsfloat(): number;
  setTpsfloat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ChainMeta): ChainMeta.AsObject;
  static serializeBinaryToWriter(message: ChainMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainMeta;
  static deserializeBinaryFromReader(message: ChainMeta, reader: jspb.BinaryReader): ChainMeta;
}

export namespace ChainMeta {
  export type AsObject = {
    height: number,
    numactions: number,
    tps: number,
    epoch?: EpochData.AsObject,
    tpsfloat: number,
  }
}

export class BlockMeta extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

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

  getLogsbloom(): string;
  setLogsbloom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMeta.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMeta): BlockMeta.AsObject;
  static serializeBinaryToWriter(message: BlockMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMeta;
  static deserializeBinaryFromReader(message: BlockMeta, reader: jspb.BinaryReader): BlockMeta;
}

export namespace BlockMeta {
  export type AsObject = {
    hash: string,
    height: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numactions: number,
    produceraddress: string,
    transferamount: string,
    txroot: string,
    receiptroot: string,
    deltastatedigest: string,
    logsbloom: string,
  }
}

export class AccountMeta extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getBalance(): string;
  setBalance(value: string): void;

  getNonce(): number;
  setNonce(value: number): void;

  getPendingnonce(): number;
  setPendingnonce(value: number): void;

  getNumactions(): number;
  setNumactions(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountMeta.AsObject;
  static toObject(includeInstance: boolean, msg: AccountMeta): AccountMeta.AsObject;
  static serializeBinaryToWriter(message: AccountMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountMeta;
  static deserializeBinaryFromReader(message: AccountMeta, reader: jspb.BinaryReader): AccountMeta;
}

export namespace AccountMeta {
  export type AsObject = {
    address: string,
    balance: string,
    nonce: number,
    pendingnonce: number,
    numactions: number,
  }
}

