import * as jspb from "google-protobuf"

export class AccountPb extends jspb.Message {
  constructor ();
  getNonce(): number;
  setNonce(value: number): void;
  getBalance(): {};
  setBalance(value: {}): void;
  getRoot(): {};
  setRoot(value: {}): void;
  getCodehash(): {};
  setCodehash(value: {}): void;
  getIscandidate(): boolean;
  setIscandidate(value: boolean): void;
  getVotingweight(): {};
  setVotingweight(value: {}): void;
  getVotee(): string;
  setVotee(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPb.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPb): AccountPb.AsObject;
  static serializeBinaryToWriter(message: AccountPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPb;
  static deserializeBinaryFromReader(message: AccountPb, reader: jspb.BinaryReader): AccountPb;
}

export namespace AccountPb {
  export type AsObject = {
    nonce: number;
    balance: {};
    root: {};
    codehash: {};
    iscandidate: boolean;
    votingweight: {};
    votee: string;
  }
}

export class AccountMeta extends jspb.Message {
  constructor ();
  getAddress(): string;
  setAddress(value: string): void;
  getBalance(): string;
  setBalance(value: string): void;
  getNonce(): number;
  setNonce(value: number): void;
  getPendingnonce(): number;
  setPendingnonce(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountMeta.AsObject;
  static toObject(includeInstance: boolean, msg: AccountMeta): AccountMeta.AsObject;
  static serializeBinaryToWriter(message: AccountMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountMeta;
  static deserializeBinaryFromReader(message: AccountMeta, reader: jspb.BinaryReader): AccountMeta;
}

export namespace AccountMeta {
  export type AsObject = {
    address: string;
    balance: string;
    nonce: number;
    pendingnonce: number;
  }
}

