import * as jspb from "google-protobuf";

export class Account extends jspb.Message {
  constructor();
  getNonce(): number;
  setNonce(value: number): void;
  getBalance(): string;
  setBalance(value: string): void;
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
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(
    message: Account,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(
    message: Account,
    reader: jspb.BinaryReader
  ): Account;
}

export declare namespace Account {
  export type AsObject = {
    nonce: number;
    balance: string;
    root: {};
    codehash: {};
    iscandidate: boolean;
    votingweight: {};
    votee: string;
  };
}
