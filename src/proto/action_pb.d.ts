import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class TransferPb extends jspb.Message {
  constructor ();
  getAmount(): {};
  setAmount(value: {}): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  getPayload(): {};
  setPayload(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferPb.AsObject;
  static toObject(includeInstance: boolean, msg: TransferPb): TransferPb.AsObject;
  static serializeBinaryToWriter(message: TransferPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferPb;
  static deserializeBinaryFromReader(message: TransferPb, reader: jspb.BinaryReader): TransferPb;
}

export namespace TransferPb {
  export type AsObject = {
    amount: {};
    recipient: string;
    payload: {};
  }
}

export class VotePb extends jspb.Message {
  constructor ();
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearTimestamp(): void;
  getVoteeaddress(): string;
  setVoteeaddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VotePb.AsObject;
  static toObject(includeInstance: boolean, msg: VotePb): VotePb.AsObject;
  static serializeBinaryToWriter(message: VotePb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VotePb;
  static deserializeBinaryFromReader(message: VotePb, reader: jspb.BinaryReader): VotePb;
}

export namespace VotePb {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    voteeaddress: string;
  }
}

export class ExecutionPb extends jspb.Message {
  constructor ();
  getAmount(): {};
  setAmount(value: {}): void;
  getContract(): string;
  setContract(value: string): void;
  getData(): {};
  setData(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionPb.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionPb): ExecutionPb.AsObject;
  static serializeBinaryToWriter(message: ExecutionPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionPb;
  static deserializeBinaryFromReader(message: ExecutionPb, reader: jspb.BinaryReader): ExecutionPb;
}

export namespace ExecutionPb {
  export type AsObject = {
    amount: {};
    contract: string;
    data: {};
  }
}

export class StartSubChainPb extends jspb.Message {
  constructor ();
  getChainid(): number;
  setChainid(value: number): void;
  getSecuritydeposit(): {};
  setSecuritydeposit(value: {}): void;
  getOperationdeposit(): {};
  setOperationdeposit(value: {}): void;
  getStartheight(): number;
  setStartheight(value: number): void;
  getParentheightoffset(): number;
  setParentheightoffset(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSubChainPb.AsObject;
  static toObject(includeInstance: boolean, msg: StartSubChainPb): StartSubChainPb.AsObject;
  static serializeBinaryToWriter(message: StartSubChainPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSubChainPb;
  static deserializeBinaryFromReader(message: StartSubChainPb, reader: jspb.BinaryReader): StartSubChainPb;
}

export namespace StartSubChainPb {
  export type AsObject = {
    chainid: number;
    securitydeposit: {};
    operationdeposit: {};
    startheight: number;
    parentheightoffset: number;
  }
}

export class StopSubChainPb extends jspb.Message {
  constructor ();
  getChainid(): number;
  setChainid(value: number): void;
  getStopheight(): number;
  setStopheight(value: number): void;
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopSubChainPb.AsObject;
  static toObject(includeInstance: boolean, msg: StopSubChainPb): StopSubChainPb.AsObject;
  static serializeBinaryToWriter(message: StopSubChainPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopSubChainPb;
  static deserializeBinaryFromReader(message: StopSubChainPb, reader: jspb.BinaryReader): StopSubChainPb;
}

export namespace StopSubChainPb {
  export type AsObject = {
    chainid: number;
    stopheight: number;
    subchainaddress: string;
  }
}

export class MerkleRoot extends jspb.Message {
  constructor ();
  getName(): string;
  setName(value: string): void;
  getValue(): {};
  setValue(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleRoot.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleRoot): MerkleRoot.AsObject;
  static serializeBinaryToWriter(message: MerkleRoot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleRoot;
  static deserializeBinaryFromReader(message: MerkleRoot, reader: jspb.BinaryReader): MerkleRoot;
}

export namespace MerkleRoot {
  export type AsObject = {
    name: string;
    value: {};
  }
}

export class PutBlockPb extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getHeight(): number;
  setHeight(value: number): void;
  getRootsList(): MerkleRoot[] | undefined;
  setRootsList(value?: MerkleRoot[]): void;
  clearRootsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutBlockPb.AsObject;
  static toObject(includeInstance: boolean, msg: PutBlockPb): PutBlockPb.AsObject;
  static serializeBinaryToWriter(message: PutBlockPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutBlockPb;
  static deserializeBinaryFromReader(message: PutBlockPb, reader: jspb.BinaryReader): PutBlockPb;
}

export namespace PutBlockPb {
  export type AsObject = {
    subchainaddress: string;
    height: number;
    rootsList?: MerkleRoot.AsObject[];
  }
}

export class CreateDepositPb extends jspb.Message {
  constructor ();
  getChainid(): number;
  setChainid(value: number): void;
  getAmount(): {};
  setAmount(value: {}): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDepositPb.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDepositPb): CreateDepositPb.AsObject;
  static serializeBinaryToWriter(message: CreateDepositPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDepositPb;
  static deserializeBinaryFromReader(message: CreateDepositPb, reader: jspb.BinaryReader): CreateDepositPb;
}

export namespace CreateDepositPb {
  export type AsObject = {
    chainid: number;
    amount: {};
    recipient: string;
  }
}

export class SettleDepositPb extends jspb.Message {
  constructor ();
  getAmount(): {};
  setAmount(value: {}): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  getIndex(): number;
  setIndex(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleDepositPb.AsObject;
  static toObject(includeInstance: boolean, msg: SettleDepositPb): SettleDepositPb.AsObject;
  static serializeBinaryToWriter(message: SettleDepositPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleDepositPb;
  static deserializeBinaryFromReader(message: SettleDepositPb, reader: jspb.BinaryReader): SettleDepositPb;
}

export namespace SettleDepositPb {
  export type AsObject = {
    amount: {};
    recipient: string;
    index: number;
  }
}

export class CreatePlumChainPb extends jspb.Message {
  constructor ();
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlumChainPb.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlumChainPb): CreatePlumChainPb.AsObject;
  static serializeBinaryToWriter(message: CreatePlumChainPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlumChainPb;
  static deserializeBinaryFromReader(message: CreatePlumChainPb, reader: jspb.BinaryReader): CreatePlumChainPb;
}

export namespace CreatePlumChainPb {
  export type AsObject = {
  }
}

export class TerminatePlumChainPb extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerminatePlumChainPb.AsObject;
  static toObject(includeInstance: boolean, msg: TerminatePlumChainPb): TerminatePlumChainPb.AsObject;
  static serializeBinaryToWriter(message: TerminatePlumChainPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerminatePlumChainPb;
  static deserializeBinaryFromReader(message: TerminatePlumChainPb, reader: jspb.BinaryReader): TerminatePlumChainPb;
}

export namespace TerminatePlumChainPb {
  export type AsObject = {
    subchainaddress: string;
  }
}

export class PlumPutBlockPb extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getHeight(): number;
  setHeight(value: number): void;
  getRootsMap(): jspb.Map<string, {}> | undefined;
  clearRootsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumPutBlockPb.AsObject;
  static toObject(includeInstance: boolean, msg: PlumPutBlockPb): PlumPutBlockPb.AsObject;
  static serializeBinaryToWriter(message: PlumPutBlockPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumPutBlockPb;
  static deserializeBinaryFromReader(message: PlumPutBlockPb, reader: jspb.BinaryReader): PlumPutBlockPb;
}

export namespace PlumPutBlockPb {
  export type AsObject = {
    subchainaddress: string;
    height: number;
    rootsMap?: PlumPutBlockPb.RootsEntry.AsObject[];
  }

  export class RootsEntry extends jspb.Message {
    constructor ();
    getKey(): string;
    setKey(value: string): void;
    getValue(): {};
    setValue(value: {}): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RootsEntry.AsObject;
    static toObject(includeInstance: boolean, msg: RootsEntry): RootsEntry.AsObject;
    static serializeBinaryToWriter(message: RootsEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RootsEntry;
    static deserializeBinaryFromReader(message: RootsEntry, reader: jspb.BinaryReader): RootsEntry;
  }

  export namespace RootsEntry {
    export type AsObject = {
      key: string;
      value: {};
    }
  }

}

export class PlumCreateDepositPb extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getAmount(): {};
  setAmount(value: {}): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumCreateDepositPb.AsObject;
  static toObject(includeInstance: boolean, msg: PlumCreateDepositPb): PlumCreateDepositPb.AsObject;
  static serializeBinaryToWriter(message: PlumCreateDepositPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumCreateDepositPb;
  static deserializeBinaryFromReader(message: PlumCreateDepositPb, reader: jspb.BinaryReader): PlumCreateDepositPb;
}

export namespace PlumCreateDepositPb {
  export type AsObject = {
    subchainaddress: string;
    amount: {};
    recipient: string;
  }
}

export class PlumStartExitPb extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getPrevioustransfer(): {};
  setPrevioustransfer(value: {}): void;
  getPrevioustransferblockproof(): {};
  setPrevioustransferblockproof(value: {}): void;
  getPrevioustransferblockheight(): number;
  setPrevioustransferblockheight(value: number): void;
  getExittransfer(): {};
  setExittransfer(value: {}): void;
  getExittransferblockproof(): {};
  setExittransferblockproof(value: {}): void;
  getExittransferblockheight(): number;
  setExittransferblockheight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumStartExitPb.AsObject;
  static toObject(includeInstance: boolean, msg: PlumStartExitPb): PlumStartExitPb.AsObject;
  static serializeBinaryToWriter(message: PlumStartExitPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumStartExitPb;
  static deserializeBinaryFromReader(message: PlumStartExitPb, reader: jspb.BinaryReader): PlumStartExitPb;
}

export namespace PlumStartExitPb {
  export type AsObject = {
    subchainaddress: string;
    previoustransfer: {};
    previoustransferblockproof: {};
    previoustransferblockheight: number;
    exittransfer: {};
    exittransferblockproof: {};
    exittransferblockheight: number;
  }
}

export class PlumChallengeExit extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getCoinid(): number;
  setCoinid(value: number): void;
  getChallengetransfer(): {};
  setChallengetransfer(value: {}): void;
  getChallengetransferblockproof(): {};
  setChallengetransferblockproof(value: {}): void;
  getChallengetransferblockheight(): number;
  setChallengetransferblockheight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumChallengeExit.AsObject;
  static toObject(includeInstance: boolean, msg: PlumChallengeExit): PlumChallengeExit.AsObject;
  static serializeBinaryToWriter(message: PlumChallengeExit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumChallengeExit;
  static deserializeBinaryFromReader(message: PlumChallengeExit, reader: jspb.BinaryReader): PlumChallengeExit;
}

export namespace PlumChallengeExit {
  export type AsObject = {
    subchainaddress: string;
    coinid: number;
    challengetransfer: {};
    challengetransferblockproof: {};
    challengetransferblockheight: number;
  }
}

export class PlumResponseChallengeExit extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getCoinid(): number;
  setCoinid(value: number): void;
  getChallengetransfer(): {};
  setChallengetransfer(value: {}): void;
  getResponsetransfer(): {};
  setResponsetransfer(value: {}): void;
  getResponsetransferblockproof(): {};
  setResponsetransferblockproof(value: {}): void;
  getPrevioustransferblockheight(): number;
  setPrevioustransferblockheight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumResponseChallengeExit.AsObject;
  static toObject(includeInstance: boolean, msg: PlumResponseChallengeExit): PlumResponseChallengeExit.AsObject;
  static serializeBinaryToWriter(message: PlumResponseChallengeExit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumResponseChallengeExit;
  static deserializeBinaryFromReader(message: PlumResponseChallengeExit, reader: jspb.BinaryReader): PlumResponseChallengeExit;
}

export namespace PlumResponseChallengeExit {
  export type AsObject = {
    subchainaddress: string;
    coinid: number;
    challengetransfer: {};
    responsetransfer: {};
    responsetransferblockproof: {};
    previoustransferblockheight: number;
  }
}

export class PlumFinalizeExit extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getCoinid(): number;
  setCoinid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumFinalizeExit.AsObject;
  static toObject(includeInstance: boolean, msg: PlumFinalizeExit): PlumFinalizeExit.AsObject;
  static serializeBinaryToWriter(message: PlumFinalizeExit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumFinalizeExit;
  static deserializeBinaryFromReader(message: PlumFinalizeExit, reader: jspb.BinaryReader): PlumFinalizeExit;
}

export namespace PlumFinalizeExit {
  export type AsObject = {
    subchainaddress: string;
    coinid: number;
  }
}

export class PlumSettleDepositPb extends jspb.Message {
  constructor ();
  getCoinid(): number;
  setCoinid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumSettleDepositPb.AsObject;
  static toObject(includeInstance: boolean, msg: PlumSettleDepositPb): PlumSettleDepositPb.AsObject;
  static serializeBinaryToWriter(message: PlumSettleDepositPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumSettleDepositPb;
  static deserializeBinaryFromReader(message: PlumSettleDepositPb, reader: jspb.BinaryReader): PlumSettleDepositPb;
}

export namespace PlumSettleDepositPb {
  export type AsObject = {
    coinid: number;
  }
}

export class PlumTransferPb extends jspb.Message {
  constructor ();
  getCoinid(): number;
  setCoinid(value: number): void;
  getDenomination(): {};
  setDenomination(value: {}): void;
  getOwner(): string;
  setOwner(value: string): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumTransferPb.AsObject;
  static toObject(includeInstance: boolean, msg: PlumTransferPb): PlumTransferPb.AsObject;
  static serializeBinaryToWriter(message: PlumTransferPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumTransferPb;
  static deserializeBinaryFromReader(message: PlumTransferPb, reader: jspb.BinaryReader): PlumTransferPb;
}

export namespace PlumTransferPb {
  export type AsObject = {
    coinid: number;
    denomination: {};
    owner: string;
    recipient: string;
  }
}

export class ActionPb extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getSenderpubkey(): {};
  setSenderpubkey(value: {}): void;
  getNonce(): number;
  setNonce(value: number): void;
  getGaslimit(): number;
  setGaslimit(value: number): void;
  getGasprice(): {};
  setGasprice(value: {}): void;
  getSignature(): {};
  setSignature(value: {}): void;
  getTransfer(): TransferPb | undefined;
  setTransfer(value?: TransferPb): void;
  clearTransfer(): void;
  getVote(): VotePb | undefined;
  setVote(value?: VotePb): void;
  clearVote(): void;
  getExecution(): ExecutionPb | undefined;
  setExecution(value?: ExecutionPb): void;
  clearExecution(): void;
  getStartsubchain(): StartSubChainPb | undefined;
  setStartsubchain(value?: StartSubChainPb): void;
  clearStartsubchain(): void;
  getStopsubchain(): StopSubChainPb | undefined;
  setStopsubchain(value?: StopSubChainPb): void;
  clearStopsubchain(): void;
  getPutblock(): PutBlockPb | undefined;
  setPutblock(value?: PutBlockPb): void;
  clearPutblock(): void;
  getCreatedeposit(): CreateDepositPb | undefined;
  setCreatedeposit(value?: CreateDepositPb): void;
  clearCreatedeposit(): void;
  getSettledeposit(): SettleDepositPb | undefined;
  setSettledeposit(value?: SettleDepositPb): void;
  clearSettledeposit(): void;
  getCreateplumchain(): CreatePlumChainPb | undefined;
  setCreateplumchain(value?: CreatePlumChainPb): void;
  clearCreateplumchain(): void;
  getTerminateplumchain(): TerminatePlumChainPb | undefined;
  setTerminateplumchain(value?: TerminatePlumChainPb): void;
  clearTerminateplumchain(): void;
  getPlumputblock(): PlumPutBlockPb | undefined;
  setPlumputblock(value?: PlumPutBlockPb): void;
  clearPlumputblock(): void;
  getPlumcreatedeposit(): PlumCreateDepositPb | undefined;
  setPlumcreatedeposit(value?: PlumCreateDepositPb): void;
  clearPlumcreatedeposit(): void;
  getPlumstartexit(): PlumStartExitPb | undefined;
  setPlumstartexit(value?: PlumStartExitPb): void;
  clearPlumstartexit(): void;
  getPlumchallengeexit(): PlumChallengeExit | undefined;
  setPlumchallengeexit(value?: PlumChallengeExit): void;
  clearPlumchallengeexit(): void;
  getPlumresponsechallengeexit(): PlumResponseChallengeExit | undefined;
  setPlumresponsechallengeexit(value?: PlumResponseChallengeExit): void;
  clearPlumresponsechallengeexit(): void;
  getPlumfinalizeexit(): PlumFinalizeExit | undefined;
  setPlumfinalizeexit(value?: PlumFinalizeExit): void;
  clearPlumfinalizeexit(): void;
  getPlumsettledeposit(): PlumSettleDepositPb | undefined;
  setPlumsettledeposit(value?: PlumSettleDepositPb): void;
  clearPlumsettledeposit(): void;
  getPlumtransfer(): PlumTransferPb | undefined;
  setPlumtransfer(value?: PlumTransferPb): void;
  clearPlumtransfer(): void;
  getDeposittorewardingfund(): DepositToRewardingFund | undefined;
  setDeposittorewardingfund(value?: DepositToRewardingFund): void;
  clearDeposittorewardingfund(): void;
  getClaimfromrewardingfund(): ClaimFromRewardingFund | undefined;
  setClaimfromrewardingfund(value?: ClaimFromRewardingFund): void;
  clearClaimfromrewardingfund(): void;
  getSetreward(): SetReward | undefined;
  setSetreward(value?: SetReward): void;
  clearSetreward(): void;
  getGrantreward(): GrantReward | undefined;
  setGrantreward(value?: GrantReward): void;
  clearGrantreward(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionPb.AsObject;
  static toObject(includeInstance: boolean, msg: ActionPb): ActionPb.AsObject;
  static serializeBinaryToWriter(message: ActionPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionPb;
  static deserializeBinaryFromReader(message: ActionPb, reader: jspb.BinaryReader): ActionPb;
}

export namespace ActionPb {
  export type AsObject = {
    version: number;
    senderpubkey: {};
    nonce: number;
    gaslimit: number;
    gasprice: {};
    signature: {};
    transfer?: TransferPb.AsObject;
    vote?: VotePb.AsObject;
    execution?: ExecutionPb.AsObject;
    startsubchain?: StartSubChainPb.AsObject;
    stopsubchain?: StopSubChainPb.AsObject;
    putblock?: PutBlockPb.AsObject;
    createdeposit?: CreateDepositPb.AsObject;
    settledeposit?: SettleDepositPb.AsObject;
    createplumchain?: CreatePlumChainPb.AsObject;
    terminateplumchain?: TerminatePlumChainPb.AsObject;
    plumputblock?: PlumPutBlockPb.AsObject;
    plumcreatedeposit?: PlumCreateDepositPb.AsObject;
    plumstartexit?: PlumStartExitPb.AsObject;
    plumchallengeexit?: PlumChallengeExit.AsObject;
    plumresponsechallengeexit?: PlumResponseChallengeExit.AsObject;
    plumfinalizeexit?: PlumFinalizeExit.AsObject;
    plumsettledeposit?: PlumSettleDepositPb.AsObject;
    plumtransfer?: PlumTransferPb.AsObject;
    deposittorewardingfund?: DepositToRewardingFund.AsObject;
    claimfromrewardingfund?: ClaimFromRewardingFund.AsObject;
    setreward?: SetReward.AsObject;
    grantreward?: GrantReward.AsObject;
  }
}

export class ReceiptPb extends jspb.Message {
  constructor ();
  getReturnvalue(): {};
  setReturnvalue(value: {}): void;
  getStatus(): number;
  setStatus(value: number): void;
  getActhash(): {};
  setActhash(value: {}): void;
  getGasconsumed(): number;
  setGasconsumed(value: number): void;
  getContractaddress(): string;
  setContractaddress(value: string): void;
  getLogsList(): LogPb[] | undefined;
  setLogsList(value?: LogPb[]): void;
  clearLogsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptPb.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptPb): ReceiptPb.AsObject;
  static serializeBinaryToWriter(message: ReceiptPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptPb;
  static deserializeBinaryFromReader(message: ReceiptPb, reader: jspb.BinaryReader): ReceiptPb;
}

export namespace ReceiptPb {
  export type AsObject = {
    returnvalue: {};
    status: number;
    acthash: {};
    gasconsumed: number;
    contractaddress: string;
    logsList?: LogPb.AsObject[];
  }
}

export class LogPb extends jspb.Message {
  constructor ();
  getAddress(): string;
  setAddress(value: string): void;
  getTopicsList(): {}[];
  setTopicsList(value: {}[]): void;
  clearTopicsList(): void;
  getData(): {};
  setData(value: {}): void;
  getBlocknumber(): number;
  setBlocknumber(value: number): void;
  getTxnhash(): {};
  setTxnhash(value: {}): void;
  getBlockhash(): {};
  setBlockhash(value: {}): void;
  getIndex(): number;
  setIndex(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogPb.AsObject;
  static toObject(includeInstance: boolean, msg: LogPb): LogPb.AsObject;
  static serializeBinaryToWriter(message: LogPb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogPb;
  static deserializeBinaryFromReader(message: LogPb, reader: jspb.BinaryReader): LogPb;
}

export namespace LogPb {
  export type AsObject = {
    address: string;
    topicsList: {}[];
    data: {};
    blocknumber: number;
    txnhash: {};
    blockhash: {};
    index: number;
  }
}

export class DepositToRewardingFund extends jspb.Message {
  constructor ();
  getAmount(): {};
  setAmount(value: {}): void;
  getData(): {};
  setData(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositToRewardingFund.AsObject;
  static toObject(includeInstance: boolean, msg: DepositToRewardingFund): DepositToRewardingFund.AsObject;
  static serializeBinaryToWriter(message: DepositToRewardingFund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositToRewardingFund;
  static deserializeBinaryFromReader(message: DepositToRewardingFund, reader: jspb.BinaryReader): DepositToRewardingFund;
}

export namespace DepositToRewardingFund {
  export type AsObject = {
    amount: {};
    data: {};
  }
}

export class ClaimFromRewardingFund extends jspb.Message {
  constructor ();
  getAmount(): {};
  setAmount(value: {}): void;
  getData(): {};
  setData(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimFromRewardingFund.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimFromRewardingFund): ClaimFromRewardingFund.AsObject;
  static serializeBinaryToWriter(message: ClaimFromRewardingFund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimFromRewardingFund;
  static deserializeBinaryFromReader(message: ClaimFromRewardingFund, reader: jspb.BinaryReader): ClaimFromRewardingFund;
}

export namespace ClaimFromRewardingFund {
  export type AsObject = {
    amount: {};
    data: {};
  }
}

export class SetReward extends jspb.Message {
  constructor ();
  getAmount(): {};
  setAmount(value: {}): void;
  getData(): {};
  setData(value: {}): void;
  getType(): RewardType;
  setType(value: RewardType): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReward.AsObject;
  static toObject(includeInstance: boolean, msg: SetReward): SetReward.AsObject;
  static serializeBinaryToWriter(message: SetReward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReward;
  static deserializeBinaryFromReader(message: SetReward, reader: jspb.BinaryReader): SetReward;
}

export namespace SetReward {
  export type AsObject = {
    amount: {};
    data: {};
    type: RewardType;
  }
}

export class GrantReward extends jspb.Message {
  constructor ();
  getType(): RewardType;
  setType(value: RewardType): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantReward.AsObject;
  static toObject(includeInstance: boolean, msg: GrantReward): GrantReward.AsObject;
  static serializeBinaryToWriter(message: GrantReward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantReward;
  static deserializeBinaryFromReader(message: GrantReward, reader: jspb.BinaryReader): GrantReward;
}

export namespace GrantReward {
  export type AsObject = {
    type: RewardType;
  }
}

export enum RewardType { 
  Block = 0,
  Epoch = 1,
}
