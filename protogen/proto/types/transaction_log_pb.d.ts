import * as jspb from 'google-protobuf'



export class TransactionLog extends jspb.Message {
  getActionhash(): Uint8Array | string;
  getActionhash_asU8(): Uint8Array;
  getActionhash_asB64(): string;
  setActionhash(value: Uint8Array | string): TransactionLog;

  getNumtransactions(): number;
  setNumtransactions(value: number): TransactionLog;

  getTransactionsList(): Array<TransactionLog.Transaction>;
  setTransactionsList(value: Array<TransactionLog.Transaction>): TransactionLog;
  clearTransactionsList(): TransactionLog;
  addTransactions(value?: TransactionLog.Transaction, index?: number): TransactionLog.Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionLog.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionLog): TransactionLog.AsObject;
  static serializeBinaryToWriter(message: TransactionLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionLog;
  static deserializeBinaryFromReader(message: TransactionLog, reader: jspb.BinaryReader): TransactionLog;
}

export namespace TransactionLog {
  export type AsObject = {
    actionhash: Uint8Array | string,
    numtransactions: number,
    transactionsList: Array<TransactionLog.Transaction.AsObject>,
  }

  export class Transaction extends jspb.Message {
    getTopic(): Uint8Array | string;
    getTopic_asU8(): Uint8Array;
    getTopic_asB64(): string;
    setTopic(value: Uint8Array | string): Transaction;

    getAmount(): string;
    setAmount(value: string): Transaction;

    getSender(): string;
    setSender(value: string): Transaction;

    getRecipient(): string;
    setRecipient(value: string): Transaction;

    getType(): TransactionLogType;
    setType(value: TransactionLogType): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
  }

  export namespace Transaction {
    export type AsObject = {
      topic: Uint8Array | string,
      amount: string,
      sender: string,
      recipient: string,
      type: TransactionLogType,
    }
  }

}

export class TransactionLogs extends jspb.Message {
  getLogsList(): Array<TransactionLog>;
  setLogsList(value: Array<TransactionLog>): TransactionLogs;
  clearLogsList(): TransactionLogs;
  addLogs(value?: TransactionLog, index?: number): TransactionLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionLogs.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionLogs): TransactionLogs.AsObject;
  static serializeBinaryToWriter(message: TransactionLogs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionLogs;
  static deserializeBinaryFromReader(message: TransactionLogs, reader: jspb.BinaryReader): TransactionLogs;
}

export namespace TransactionLogs {
  export type AsObject = {
    logsList: Array<TransactionLog.AsObject>,
  }
}

export enum TransactionLogType { 
  IN_CONTRACT_TRANSFER = 0,
  WITHDRAW_BUCKET = 1,
  CREATE_BUCKET = 2,
  DEPOSIT_TO_BUCKET = 3,
  CANDIDATE_SELF_STAKE = 4,
  CANDIDATE_REGISTRATION_FEE = 5,
  GAS_FEE = 6,
  NATIVE_TRANSFER = 7,
  DEPOSIT_TO_REWARDING_FUND = 8,
  CLAIM_FROM_REWARDING_FUND = 9,
}
