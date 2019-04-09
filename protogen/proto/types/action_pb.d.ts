import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Transfer extends jspb.Message {
  constructor ();
  getAmount(): string;
  setAmount(value: string): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  getPayload(): {};
  setPayload(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transfer.AsObject;
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transfer;
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
  export type AsObject = {
    amount: string;
    recipient: string;
    payload: {};
  }
}

export class Vote extends jspb.Message {
  constructor ();
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearTimestamp(): void;
  getVoteeaddress(): string;
  setVoteeaddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    voteeaddress: string;
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
  getRewardaddress(): string;
  setRewardaddress(value: string): void;
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
    rewardaddress: string;
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

export class PutPollResult extends jspb.Message {
  constructor ();
  getHeight(): number;
  setHeight(value: number): void;
  getCandidates(): CandidateList | undefined;
  setCandidates(value?: CandidateList): void;
  clearCandidates(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutPollResult.AsObject;
  static toObject(includeInstance: boolean, msg: PutPollResult): PutPollResult.AsObject;
  static serializeBinaryToWriter(message: PutPollResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutPollResult;
  static deserializeBinaryFromReader(message: PutPollResult, reader: jspb.BinaryReader): PutPollResult;
}

export namespace PutPollResult {
  export type AsObject = {
    height: number;
    candidates?: CandidateList.AsObject;
  }
}

export class Execution extends jspb.Message {
  constructor ();
  getAmount(): string;
  setAmount(value: string): void;
  getContract(): string;
  setContract(value: string): void;
  getData(): {};
  setData(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Execution.AsObject;
  static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
  static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Execution;
  static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
}

export namespace Execution {
  export type AsObject = {
    amount: string;
    contract: string;
    data: {};
  }
}

export class StartSubChain extends jspb.Message {
  constructor ();
  getChainid(): number;
  setChainid(value: number): void;
  getSecuritydeposit(): string;
  setSecuritydeposit(value: string): void;
  getOperationdeposit(): string;
  setOperationdeposit(value: string): void;
  getStartheight(): number;
  setStartheight(value: number): void;
  getParentheightoffset(): number;
  setParentheightoffset(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSubChain.AsObject;
  static toObject(includeInstance: boolean, msg: StartSubChain): StartSubChain.AsObject;
  static serializeBinaryToWriter(message: StartSubChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSubChain;
  static deserializeBinaryFromReader(message: StartSubChain, reader: jspb.BinaryReader): StartSubChain;
}

export namespace StartSubChain {
  export type AsObject = {
    chainid: number;
    securitydeposit: string;
    operationdeposit: string;
    startheight: number;
    parentheightoffset: number;
  }
}

export class StopSubChain extends jspb.Message {
  constructor ();
  getChainid(): number;
  setChainid(value: number): void;
  getStopheight(): number;
  setStopheight(value: number): void;
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopSubChain.AsObject;
  static toObject(includeInstance: boolean, msg: StopSubChain): StopSubChain.AsObject;
  static serializeBinaryToWriter(message: StopSubChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopSubChain;
  static deserializeBinaryFromReader(message: StopSubChain, reader: jspb.BinaryReader): StopSubChain;
}

export namespace StopSubChain {
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

export class PutBlock extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getHeight(): number;
  setHeight(value: number): void;
  getRootsList(): MerkleRoot[] | undefined;
  setRootsList(value?: MerkleRoot[]): void;
  clearRootsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutBlock.AsObject;
  static toObject(includeInstance: boolean, msg: PutBlock): PutBlock.AsObject;
  static serializeBinaryToWriter(message: PutBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutBlock;
  static deserializeBinaryFromReader(message: PutBlock, reader: jspb.BinaryReader): PutBlock;
}

export namespace PutBlock {
  export type AsObject = {
    subchainaddress: string;
    height: number;
    rootsList?: MerkleRoot.AsObject[];
  }
}

export class CreateDeposit extends jspb.Message {
  constructor ();
  getChainid(): number;
  setChainid(value: number): void;
  getAmount(): string;
  setAmount(value: string): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeposit): CreateDeposit.AsObject;
  static serializeBinaryToWriter(message: CreateDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeposit;
  static deserializeBinaryFromReader(message: CreateDeposit, reader: jspb.BinaryReader): CreateDeposit;
}

export namespace CreateDeposit {
  export type AsObject = {
    chainid: number;
    amount: string;
    recipient: string;
  }
}

export class SettleDeposit extends jspb.Message {
  constructor ();
  getAmount(): string;
  setAmount(value: string): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  getIndex(): number;
  setIndex(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: SettleDeposit): SettleDeposit.AsObject;
  static serializeBinaryToWriter(message: SettleDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleDeposit;
  static deserializeBinaryFromReader(message: SettleDeposit, reader: jspb.BinaryReader): SettleDeposit;
}

export namespace SettleDeposit {
  export type AsObject = {
    amount: string;
    recipient: string;
    index: number;
  }
}

export class CreatePlumChain extends jspb.Message {
  constructor ();
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlumChain.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlumChain): CreatePlumChain.AsObject;
  static serializeBinaryToWriter(message: CreatePlumChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlumChain;
  static deserializeBinaryFromReader(message: CreatePlumChain, reader: jspb.BinaryReader): CreatePlumChain;
}

export namespace CreatePlumChain {
  export type AsObject = {
  }
}

export class TerminatePlumChain extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerminatePlumChain.AsObject;
  static toObject(includeInstance: boolean, msg: TerminatePlumChain): TerminatePlumChain.AsObject;
  static serializeBinaryToWriter(message: TerminatePlumChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerminatePlumChain;
  static deserializeBinaryFromReader(message: TerminatePlumChain, reader: jspb.BinaryReader): TerminatePlumChain;
}

export namespace TerminatePlumChain {
  export type AsObject = {
    subchainaddress: string;
  }
}

export class PlumPutBlock extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getHeight(): number;
  setHeight(value: number): void;
  getRootsMap(): jspb.Map<string, {}> | undefined;
  clearRootsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumPutBlock.AsObject;
  static toObject(includeInstance: boolean, msg: PlumPutBlock): PlumPutBlock.AsObject;
  static serializeBinaryToWriter(message: PlumPutBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumPutBlock;
  static deserializeBinaryFromReader(message: PlumPutBlock, reader: jspb.BinaryReader): PlumPutBlock;
}

export namespace PlumPutBlock {
  export type AsObject = {
    subchainaddress: string;
    height: number;
    rootsMap?: PlumPutBlock.RootsEntry.AsObject[];
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

export class PlumCreateDeposit extends jspb.Message {
  constructor ();
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;
  getAmount(): string;
  setAmount(value: string): void;
  getRecipient(): string;
  setRecipient(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumCreateDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: PlumCreateDeposit): PlumCreateDeposit.AsObject;
  static serializeBinaryToWriter(message: PlumCreateDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumCreateDeposit;
  static deserializeBinaryFromReader(message: PlumCreateDeposit, reader: jspb.BinaryReader): PlumCreateDeposit;
}

export namespace PlumCreateDeposit {
  export type AsObject = {
    subchainaddress: string;
    amount: string;
    recipient: string;
  }
}

export class PlumStartExit extends jspb.Message {
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
  toObject(includeInstance?: boolean): PlumStartExit.AsObject;
  static toObject(includeInstance: boolean, msg: PlumStartExit): PlumStartExit.AsObject;
  static serializeBinaryToWriter(message: PlumStartExit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumStartExit;
  static deserializeBinaryFromReader(message: PlumStartExit, reader: jspb.BinaryReader): PlumStartExit;
}

export namespace PlumStartExit {
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

export class PlumSettleDeposit extends jspb.Message {
  constructor ();
  getCoinid(): number;
  setCoinid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlumSettleDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: PlumSettleDeposit): PlumSettleDeposit.AsObject;
  static serializeBinaryToWriter(message: PlumSettleDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumSettleDeposit;
  static deserializeBinaryFromReader(message: PlumSettleDeposit, reader: jspb.BinaryReader): PlumSettleDeposit;
}

export namespace PlumSettleDeposit {
  export type AsObject = {
    coinid: number;
  }
}

export class PlumTransfer extends jspb.Message {
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
  toObject(includeInstance?: boolean): PlumTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: PlumTransfer): PlumTransfer.AsObject;
  static serializeBinaryToWriter(message: PlumTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlumTransfer;
  static deserializeBinaryFromReader(message: PlumTransfer, reader: jspb.BinaryReader): PlumTransfer;
}

export namespace PlumTransfer {
  export type AsObject = {
    coinid: number;
    denomination: {};
    owner: string;
    recipient: string;
  }
}

export class ActionCore extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getNonce(): number;
  setNonce(value: number): void;
  getGaslimit(): number;
  setGaslimit(value: number): void;
  getGasprice(): string;
  setGasprice(value: string): void;
  getTransfer(): Transfer | undefined;
  setTransfer(value?: Transfer): void;
  clearTransfer(): void;
  getVote(): Vote | undefined;
  setVote(value?: Vote): void;
  clearVote(): void;
  getExecution(): Execution | undefined;
  setExecution(value?: Execution): void;
  clearExecution(): void;
  getStartsubchain(): StartSubChain | undefined;
  setStartsubchain(value?: StartSubChain): void;
  clearStartsubchain(): void;
  getStopsubchain(): StopSubChain | undefined;
  setStopsubchain(value?: StopSubChain): void;
  clearStopsubchain(): void;
  getPutblock(): PutBlock | undefined;
  setPutblock(value?: PutBlock): void;
  clearPutblock(): void;
  getCreatedeposit(): CreateDeposit | undefined;
  setCreatedeposit(value?: CreateDeposit): void;
  clearCreatedeposit(): void;
  getSettledeposit(): SettleDeposit | undefined;
  setSettledeposit(value?: SettleDeposit): void;
  clearSettledeposit(): void;
  getCreateplumchain(): CreatePlumChain | undefined;
  setCreateplumchain(value?: CreatePlumChain): void;
  clearCreateplumchain(): void;
  getTerminateplumchain(): TerminatePlumChain | undefined;
  setTerminateplumchain(value?: TerminatePlumChain): void;
  clearTerminateplumchain(): void;
  getPlumputblock(): PlumPutBlock | undefined;
  setPlumputblock(value?: PlumPutBlock): void;
  clearPlumputblock(): void;
  getPlumcreatedeposit(): PlumCreateDeposit | undefined;
  setPlumcreatedeposit(value?: PlumCreateDeposit): void;
  clearPlumcreatedeposit(): void;
  getPlumstartexit(): PlumStartExit | undefined;
  setPlumstartexit(value?: PlumStartExit): void;
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
  getPlumsettledeposit(): PlumSettleDeposit | undefined;
  setPlumsettledeposit(value?: PlumSettleDeposit): void;
  clearPlumsettledeposit(): void;
  getPlumtransfer(): PlumTransfer | undefined;
  setPlumtransfer(value?: PlumTransfer): void;
  clearPlumtransfer(): void;
  getDeposittorewardingfund(): DepositToRewardingFund | undefined;
  setDeposittorewardingfund(value?: DepositToRewardingFund): void;
  clearDeposittorewardingfund(): void;
  getClaimfromrewardingfund(): ClaimFromRewardingFund | undefined;
  setClaimfromrewardingfund(value?: ClaimFromRewardingFund): void;
  clearClaimfromrewardingfund(): void;
  getGrantreward(): GrantReward | undefined;
  setGrantreward(value?: GrantReward): void;
  clearGrantreward(): void;
  getPutpollresult(): PutPollResult | undefined;
  setPutpollresult(value?: PutPollResult): void;
  clearPutpollresult(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCore.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCore): ActionCore.AsObject;
  static serializeBinaryToWriter(message: ActionCore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCore;
  static deserializeBinaryFromReader(message: ActionCore, reader: jspb.BinaryReader): ActionCore;
}

export namespace ActionCore {
  export type AsObject = {
    version: number;
    nonce: number;
    gaslimit: number;
    gasprice: string;
    transfer?: Transfer.AsObject;
    vote?: Vote.AsObject;
    execution?: Execution.AsObject;
    startsubchain?: StartSubChain.AsObject;
    stopsubchain?: StopSubChain.AsObject;
    putblock?: PutBlock.AsObject;
    createdeposit?: CreateDeposit.AsObject;
    settledeposit?: SettleDeposit.AsObject;
    createplumchain?: CreatePlumChain.AsObject;
    terminateplumchain?: TerminatePlumChain.AsObject;
    plumputblock?: PlumPutBlock.AsObject;
    plumcreatedeposit?: PlumCreateDeposit.AsObject;
    plumstartexit?: PlumStartExit.AsObject;
    plumchallengeexit?: PlumChallengeExit.AsObject;
    plumresponsechallengeexit?: PlumResponseChallengeExit.AsObject;
    plumfinalizeexit?: PlumFinalizeExit.AsObject;
    plumsettledeposit?: PlumSettleDeposit.AsObject;
    plumtransfer?: PlumTransfer.AsObject;
    deposittorewardingfund?: DepositToRewardingFund.AsObject;
    claimfromrewardingfund?: ClaimFromRewardingFund.AsObject;
    grantreward?: GrantReward.AsObject;
    putpollresult?: PutPollResult.AsObject;
  }
}

export class Action extends jspb.Message {
  constructor ();
  getCore(): ActionCore | undefined;
  setCore(value?: ActionCore): void;
  clearCore(): void;
  getSenderpubkey(): {};
  setSenderpubkey(value: {}): void;
  getSignature(): {};
  setSignature(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    core?: ActionCore.AsObject;
    senderpubkey: {};
    signature: {};
  }
}

export class Receipt extends jspb.Message {
  getReturnvalue(): Uint8Array | string;
  getReturnvalue_asU8(): Uint8Array;
  getReturnvalue_asB64(): string;
  setReturnvalue(value: Uint8Array | string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getBlkheight(): number;
  setBlkheight(value: number): void;

  getActhash(): Uint8Array | string;
  getActhash_asU8(): Uint8Array;
  getActhash_asB64(): string;
  setActhash(value: Uint8Array | string): void;

  getGasconsumed(): number;
  setGasconsumed(value: number): void;

  getContractaddress(): string;
  setContractaddress(value: string): void;

  getLogsList(): Array<Log>;
  setLogsList(value: Array<Log>): void;
  clearLogsList(): void;
  addLogs(value?: Log, index?: number): Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipt.AsObject;
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
  static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipt;
  static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
  export type AsObject = {
    returnvalue: Uint8Array | string,
    status: number,
    blkheight: number,
    acthash: Uint8Array | string,
    gasconsumed: number,
    contractaddress: string,
    logsList: Array<Log.AsObject>,
  }
}

export class Log extends jspb.Message {
  getContractaddress(): string;
  setContractaddress(value: string): void;

  getTopicsList(): Array<Uint8Array | string>;
  setTopicsList(value: Array<Uint8Array | string>): void;
  clearTopicsList(): void;
  addTopics(value: Uint8Array | string, index?: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getBlkheight(): number;
  setBlkheight(value: number): void;

  getActhash(): Uint8Array | string;
  getActhash_asU8(): Uint8Array;
  getActhash_asB64(): string;
  setActhash(value: Uint8Array | string): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    contractaddress: string,
    topicsList: Array<Uint8Array | string>,
    data: Uint8Array | string,
    blkheight: number,
    acthash: Uint8Array | string,
    index: number,
  }
}
export class DepositToRewardingFund extends jspb.Message {
  constructor ();
  getAmount(): string;
  setAmount(value: string): void;
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
    amount: string;
    data: {};
  }
}

export class ClaimFromRewardingFund extends jspb.Message {
  constructor ();
  getAmount(): string;
  setAmount(value: string): void;
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
    amount: string;
    data: {};
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
  BlockReward = 0,
  EpochReward = 1,
}
