import * as jspb from 'google-protobuf'

import * as proto_types_action_pb from '../../proto/types/action_pb';
import * as proto_types_endorsement_pb from '../../proto/types/endorsement_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class BlockHeader extends jspb.Message {
  getCore(): BlockHeaderCore | undefined;
  setCore(value?: BlockHeaderCore): BlockHeader;
  hasCore(): boolean;
  clearCore(): BlockHeader;

  getProducerpubkey(): Uint8Array | string;
  getProducerpubkey_asU8(): Uint8Array;
  getProducerpubkey_asB64(): string;
  setProducerpubkey(value: Uint8Array | string): BlockHeader;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): BlockHeader;

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
  setVersion(value: number): BlockHeaderCore;

  getHeight(): number;
  setHeight(value: number): BlockHeaderCore;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BlockHeaderCore;
  hasTimestamp(): boolean;
  clearTimestamp(): BlockHeaderCore;

  getPrevblockhash(): Uint8Array | string;
  getPrevblockhash_asU8(): Uint8Array;
  getPrevblockhash_asB64(): string;
  setPrevblockhash(value: Uint8Array | string): BlockHeaderCore;

  getTxroot(): Uint8Array | string;
  getTxroot_asU8(): Uint8Array;
  getTxroot_asB64(): string;
  setTxroot(value: Uint8Array | string): BlockHeaderCore;

  getDeltastatedigest(): Uint8Array | string;
  getDeltastatedigest_asU8(): Uint8Array;
  getDeltastatedigest_asB64(): string;
  setDeltastatedigest(value: Uint8Array | string): BlockHeaderCore;

  getReceiptroot(): Uint8Array | string;
  getReceiptroot_asU8(): Uint8Array;
  getReceiptroot_asB64(): string;
  setReceiptroot(value: Uint8Array | string): BlockHeaderCore;

  getLogsbloom(): Uint8Array | string;
  getLogsbloom_asU8(): Uint8Array;
  getLogsbloom_asB64(): string;
  setLogsbloom(value: Uint8Array | string): BlockHeaderCore;

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
  setEndorsementsList(value: Array<proto_types_endorsement_pb.Endorsement>): BlockFooter;
  clearEndorsementsList(): BlockFooter;
  addEndorsements(value?: proto_types_endorsement_pb.Endorsement, index?: number): proto_types_endorsement_pb.Endorsement;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BlockFooter;
  hasTimestamp(): boolean;
  clearTimestamp(): BlockFooter;

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
  setActionsList(value: Array<proto_types_action_pb.Action>): BlockBody;
  clearActionsList(): BlockBody;
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
  setHeader(value?: BlockHeader): Block;
  hasHeader(): boolean;
  clearHeader(): Block;

  getBody(): BlockBody | undefined;
  setBody(value?: BlockBody): Block;
  hasBody(): boolean;
  clearBody(): Block;

  getFooter(): BlockFooter | undefined;
  setFooter(value?: BlockFooter): Block;
  hasFooter(): boolean;
  clearFooter(): Block;

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
  setReceiptsList(value: Array<proto_types_action_pb.Receipt>): Receipts;
  clearReceiptsList(): Receipts;
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
  setNum(value: number): EpochData;

  getHeight(): number;
  setHeight(value: number): EpochData;

  getGravitychainstartheight(): number;
  setGravitychainstartheight(value: number): EpochData;

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
  setHeight(value: number): ChainMeta;

  getNumactions(): number;
  setNumactions(value: number): ChainMeta;

  getTps(): number;
  setTps(value: number): ChainMeta;

  getEpoch(): EpochData | undefined;
  setEpoch(value?: EpochData): ChainMeta;
  hasEpoch(): boolean;
  clearEpoch(): ChainMeta;

  getTpsfloat(): number;
  setTpsfloat(value: number): ChainMeta;

  getChainid(): number;
  setChainid(value: number): ChainMeta;

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
    chainid: number,
  }
}

export class BlockMeta extends jspb.Message {
  getHash(): string;
  setHash(value: string): BlockMeta;

  getHeight(): number;
  setHeight(value: number): BlockMeta;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BlockMeta;
  hasTimestamp(): boolean;
  clearTimestamp(): BlockMeta;

  getNumactions(): number;
  setNumactions(value: number): BlockMeta;

  getProduceraddress(): string;
  setProduceraddress(value: string): BlockMeta;

  getTransferamount(): string;
  setTransferamount(value: string): BlockMeta;

  getTxroot(): string;
  setTxroot(value: string): BlockMeta;

  getReceiptroot(): string;
  setReceiptroot(value: string): BlockMeta;

  getDeltastatedigest(): string;
  setDeltastatedigest(value: string): BlockMeta;

  getLogsbloom(): string;
  setLogsbloom(value: string): BlockMeta;

  getPreviousblockhash(): string;
  setPreviousblockhash(value: string): BlockMeta;

  getGaslimit(): number;
  setGaslimit(value: number): BlockMeta;

  getGasused(): number;
  setGasused(value: number): BlockMeta;

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
    previousblockhash: string,
    gaslimit: number,
    gasused: number,
  }
}

export class BlockIdentifier extends jspb.Message {
  getHash(): string;
  setHash(value: string): BlockIdentifier;

  getHeight(): number;
  setHeight(value: number): BlockIdentifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: BlockIdentifier): BlockIdentifier.AsObject;
  static serializeBinaryToWriter(message: BlockIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockIdentifier;
  static deserializeBinaryFromReader(message: BlockIdentifier, reader: jspb.BinaryReader): BlockIdentifier;
}

export namespace BlockIdentifier {
  export type AsObject = {
    hash: string,
    height: number,
  }
}

export class AccountMeta extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AccountMeta;

  getBalance(): string;
  setBalance(value: string): AccountMeta;

  getNonce(): number;
  setNonce(value: number): AccountMeta;

  getPendingnonce(): number;
  setPendingnonce(value: number): AccountMeta;

  getNumactions(): number;
  setNumactions(value: number): AccountMeta;

  getIscontract(): boolean;
  setIscontract(value: boolean): AccountMeta;

  getContractbytecode(): Uint8Array | string;
  getContractbytecode_asU8(): Uint8Array;
  getContractbytecode_asB64(): string;
  setContractbytecode(value: Uint8Array | string): AccountMeta;

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
    iscontract: boolean,
    contractbytecode: Uint8Array | string,
  }
}

export class BlockStore extends jspb.Message {
  getBlock(): Block | undefined;
  setBlock(value?: Block): BlockStore;
  hasBlock(): boolean;
  clearBlock(): BlockStore;

  getReceiptsList(): Array<proto_types_action_pb.Receipt>;
  setReceiptsList(value: Array<proto_types_action_pb.Receipt>): BlockStore;
  clearReceiptsList(): BlockStore;
  addReceipts(value?: proto_types_action_pb.Receipt, index?: number): proto_types_action_pb.Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStore.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStore): BlockStore.AsObject;
  static serializeBinaryToWriter(message: BlockStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStore;
  static deserializeBinaryFromReader(message: BlockStore, reader: jspb.BinaryReader): BlockStore;
}

export namespace BlockStore {
  export type AsObject = {
    block?: Block.AsObject,
    receiptsList: Array<proto_types_action_pb.Receipt.AsObject>,
  }
}

export class BlockStores extends jspb.Message {
  getBlockstoresList(): Array<BlockStore>;
  setBlockstoresList(value: Array<BlockStore>): BlockStores;
  clearBlockstoresList(): BlockStores;
  addBlockstores(value?: BlockStore, index?: number): BlockStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStores.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStores): BlockStores.AsObject;
  static serializeBinaryToWriter(message: BlockStores, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStores;
  static deserializeBinaryFromReader(message: BlockStores, reader: jspb.BinaryReader): BlockStores;
}

export namespace BlockStores {
  export type AsObject = {
    blockstoresList: Array<BlockStore.AsObject>,
  }
}

