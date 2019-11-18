import * as jspb from "google-protobuf"

export class Transfer extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  getRecipient(): string;
  setRecipient(value: string): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transfer.AsObject;
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transfer;
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
  export type AsObject = {
    amount: string,
    recipient: string,
    payload: Uint8Array | string,
  }
}

export class Candidate extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getVotes(): Uint8Array | string;
  getVotes_asU8(): Uint8Array;
  getVotes_asB64(): string;
  setVotes(value: Uint8Array | string): void;

  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): void;

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
    address: string,
    votes: Uint8Array | string,
    pubkey: Uint8Array | string,
    rewardaddress: string,
  }
}

export class CandidateList extends jspb.Message {
  getCandidatesList(): Array<Candidate>;
  setCandidatesList(value: Array<Candidate>): void;
  clearCandidatesList(): void;
  addCandidates(value?: Candidate, index?: number): Candidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateList.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateList): CandidateList.AsObject;
  static serializeBinaryToWriter(message: CandidateList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateList;
  static deserializeBinaryFromReader(message: CandidateList, reader: jspb.BinaryReader): CandidateList;
}

export namespace CandidateList {
  export type AsObject = {
    candidatesList: Array<Candidate.AsObject>,
  }
}

export class PutPollResult extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getCandidates(): CandidateList | undefined;
  setCandidates(value?: CandidateList): void;
  hasCandidates(): boolean;
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
    height: number,
    candidates?: CandidateList.AsObject,
  }
}

export class Execution extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  getContract(): string;
  setContract(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Execution.AsObject;
  static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
  static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Execution;
  static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
}

export namespace Execution {
  export type AsObject = {
    amount: string,
    contract: string,
    data: Uint8Array | string,
  }
}

export class StartSubChain extends jspb.Message {
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
    chainid: number,
    securitydeposit: string,
    operationdeposit: string,
    startheight: number,
    parentheightoffset: number,
  }
}

export class StopSubChain extends jspb.Message {
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
    chainid: number,
    stopheight: number,
    subchainaddress: string,
  }
}

export class MerkleRoot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleRoot.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleRoot): MerkleRoot.AsObject;
  static serializeBinaryToWriter(message: MerkleRoot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleRoot;
  static deserializeBinaryFromReader(message: MerkleRoot, reader: jspb.BinaryReader): MerkleRoot;
}

export namespace MerkleRoot {
  export type AsObject = {
    name: string,
    value: Uint8Array | string,
  }
}

export class PutBlock extends jspb.Message {
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getRootsList(): Array<MerkleRoot>;
  setRootsList(value: Array<MerkleRoot>): void;
  clearRootsList(): void;
  addRoots(value?: MerkleRoot, index?: number): MerkleRoot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutBlock.AsObject;
  static toObject(includeInstance: boolean, msg: PutBlock): PutBlock.AsObject;
  static serializeBinaryToWriter(message: PutBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutBlock;
  static deserializeBinaryFromReader(message: PutBlock, reader: jspb.BinaryReader): PutBlock;
}

export namespace PutBlock {
  export type AsObject = {
    subchainaddress: string,
    height: number,
    rootsList: Array<MerkleRoot.AsObject>,
  }
}

export class CreateDeposit extends jspb.Message {
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
    chainid: number,
    amount: string,
    recipient: string,
  }
}

export class SettleDeposit extends jspb.Message {
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
    amount: string,
    recipient: string,
    index: number,
  }
}

export class CreatePlumChain extends jspb.Message {
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
    subchainaddress: string,
  }
}

export class PlumPutBlock extends jspb.Message {
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getRootsMap(): jspb.Map<string, Uint8Array | string>;
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
    subchainaddress: string,
    height: number,
    rootsMap: Array<[string, Uint8Array | string]>,
  }
}

export class PlumCreateDeposit extends jspb.Message {
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
    subchainaddress: string,
    amount: string,
    recipient: string,
  }
}

export class PlumStartExit extends jspb.Message {
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;

  getPrevioustransfer(): Uint8Array | string;
  getPrevioustransfer_asU8(): Uint8Array;
  getPrevioustransfer_asB64(): string;
  setPrevioustransfer(value: Uint8Array | string): void;

  getPrevioustransferblockproof(): Uint8Array | string;
  getPrevioustransferblockproof_asU8(): Uint8Array;
  getPrevioustransferblockproof_asB64(): string;
  setPrevioustransferblockproof(value: Uint8Array | string): void;

  getPrevioustransferblockheight(): number;
  setPrevioustransferblockheight(value: number): void;

  getExittransfer(): Uint8Array | string;
  getExittransfer_asU8(): Uint8Array;
  getExittransfer_asB64(): string;
  setExittransfer(value: Uint8Array | string): void;

  getExittransferblockproof(): Uint8Array | string;
  getExittransferblockproof_asU8(): Uint8Array;
  getExittransferblockproof_asB64(): string;
  setExittransferblockproof(value: Uint8Array | string): void;

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
    subchainaddress: string,
    previoustransfer: Uint8Array | string,
    previoustransferblockproof: Uint8Array | string,
    previoustransferblockheight: number,
    exittransfer: Uint8Array | string,
    exittransferblockproof: Uint8Array | string,
    exittransferblockheight: number,
  }
}

export class PlumChallengeExit extends jspb.Message {
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;

  getCoinid(): number;
  setCoinid(value: number): void;

  getChallengetransfer(): Uint8Array | string;
  getChallengetransfer_asU8(): Uint8Array;
  getChallengetransfer_asB64(): string;
  setChallengetransfer(value: Uint8Array | string): void;

  getChallengetransferblockproof(): Uint8Array | string;
  getChallengetransferblockproof_asU8(): Uint8Array;
  getChallengetransferblockproof_asB64(): string;
  setChallengetransferblockproof(value: Uint8Array | string): void;

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
    subchainaddress: string,
    coinid: number,
    challengetransfer: Uint8Array | string,
    challengetransferblockproof: Uint8Array | string,
    challengetransferblockheight: number,
  }
}

export class PlumResponseChallengeExit extends jspb.Message {
  getSubchainaddress(): string;
  setSubchainaddress(value: string): void;

  getCoinid(): number;
  setCoinid(value: number): void;

  getChallengetransfer(): Uint8Array | string;
  getChallengetransfer_asU8(): Uint8Array;
  getChallengetransfer_asB64(): string;
  setChallengetransfer(value: Uint8Array | string): void;

  getResponsetransfer(): Uint8Array | string;
  getResponsetransfer_asU8(): Uint8Array;
  getResponsetransfer_asB64(): string;
  setResponsetransfer(value: Uint8Array | string): void;

  getResponsetransferblockproof(): Uint8Array | string;
  getResponsetransferblockproof_asU8(): Uint8Array;
  getResponsetransferblockproof_asB64(): string;
  setResponsetransferblockproof(value: Uint8Array | string): void;

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
    subchainaddress: string,
    coinid: number,
    challengetransfer: Uint8Array | string,
    responsetransfer: Uint8Array | string,
    responsetransferblockproof: Uint8Array | string,
    previoustransferblockheight: number,
  }
}

export class PlumFinalizeExit extends jspb.Message {
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
    subchainaddress: string,
    coinid: number,
  }
}

export class PlumSettleDeposit extends jspb.Message {
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
    coinid: number,
  }
}

export class PlumTransfer extends jspb.Message {
  getCoinid(): number;
  setCoinid(value: number): void;

  getDenomination(): Uint8Array | string;
  getDenomination_asU8(): Uint8Array;
  getDenomination_asB64(): string;
  setDenomination(value: Uint8Array | string): void;

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
    coinid: number,
    denomination: Uint8Array | string,
    owner: string,
    recipient: string,
  }
}

export class ActionCore extends jspb.Message {
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
  hasTransfer(): boolean;
  clearTransfer(): void;
  hasTransfer(): boolean;

  getExecution(): Execution | undefined;
  setExecution(value?: Execution): void;
  hasExecution(): boolean;
  clearExecution(): void;
  hasExecution(): boolean;

  getStartsubchain(): StartSubChain | undefined;
  setStartsubchain(value?: StartSubChain): void;
  hasStartsubchain(): boolean;
  clearStartsubchain(): void;
  hasStartsubchain(): boolean;

  getStopsubchain(): StopSubChain | undefined;
  setStopsubchain(value?: StopSubChain): void;
  hasStopsubchain(): boolean;
  clearStopsubchain(): void;
  hasStopsubchain(): boolean;

  getPutblock(): PutBlock | undefined;
  setPutblock(value?: PutBlock): void;
  hasPutblock(): boolean;
  clearPutblock(): void;
  hasPutblock(): boolean;

  getCreatedeposit(): CreateDeposit | undefined;
  setCreatedeposit(value?: CreateDeposit): void;
  hasCreatedeposit(): boolean;
  clearCreatedeposit(): void;
  hasCreatedeposit(): boolean;

  getSettledeposit(): SettleDeposit | undefined;
  setSettledeposit(value?: SettleDeposit): void;
  hasSettledeposit(): boolean;
  clearSettledeposit(): void;
  hasSettledeposit(): boolean;

  getCreateplumchain(): CreatePlumChain | undefined;
  setCreateplumchain(value?: CreatePlumChain): void;
  hasCreateplumchain(): boolean;
  clearCreateplumchain(): void;
  hasCreateplumchain(): boolean;

  getTerminateplumchain(): TerminatePlumChain | undefined;
  setTerminateplumchain(value?: TerminatePlumChain): void;
  hasTerminateplumchain(): boolean;
  clearTerminateplumchain(): void;
  hasTerminateplumchain(): boolean;

  getPlumputblock(): PlumPutBlock | undefined;
  setPlumputblock(value?: PlumPutBlock): void;
  hasPlumputblock(): boolean;
  clearPlumputblock(): void;
  hasPlumputblock(): boolean;

  getPlumcreatedeposit(): PlumCreateDeposit | undefined;
  setPlumcreatedeposit(value?: PlumCreateDeposit): void;
  hasPlumcreatedeposit(): boolean;
  clearPlumcreatedeposit(): void;
  hasPlumcreatedeposit(): boolean;

  getPlumstartexit(): PlumStartExit | undefined;
  setPlumstartexit(value?: PlumStartExit): void;
  hasPlumstartexit(): boolean;
  clearPlumstartexit(): void;
  hasPlumstartexit(): boolean;

  getPlumchallengeexit(): PlumChallengeExit | undefined;
  setPlumchallengeexit(value?: PlumChallengeExit): void;
  hasPlumchallengeexit(): boolean;
  clearPlumchallengeexit(): void;
  hasPlumchallengeexit(): boolean;

  getPlumresponsechallengeexit(): PlumResponseChallengeExit | undefined;
  setPlumresponsechallengeexit(value?: PlumResponseChallengeExit): void;
  hasPlumresponsechallengeexit(): boolean;
  clearPlumresponsechallengeexit(): void;
  hasPlumresponsechallengeexit(): boolean;

  getPlumfinalizeexit(): PlumFinalizeExit | undefined;
  setPlumfinalizeexit(value?: PlumFinalizeExit): void;
  hasPlumfinalizeexit(): boolean;
  clearPlumfinalizeexit(): void;
  hasPlumfinalizeexit(): boolean;

  getPlumsettledeposit(): PlumSettleDeposit | undefined;
  setPlumsettledeposit(value?: PlumSettleDeposit): void;
  hasPlumsettledeposit(): boolean;
  clearPlumsettledeposit(): void;
  hasPlumsettledeposit(): boolean;

  getPlumtransfer(): PlumTransfer | undefined;
  setPlumtransfer(value?: PlumTransfer): void;
  hasPlumtransfer(): boolean;
  clearPlumtransfer(): void;
  hasPlumtransfer(): boolean;

  getDeposittorewardingfund(): DepositToRewardingFund | undefined;
  setDeposittorewardingfund(value?: DepositToRewardingFund): void;
  hasDeposittorewardingfund(): boolean;
  clearDeposittorewardingfund(): void;
  hasDeposittorewardingfund(): boolean;

  getClaimfromrewardingfund(): ClaimFromRewardingFund | undefined;
  setClaimfromrewardingfund(value?: ClaimFromRewardingFund): void;
  hasClaimfromrewardingfund(): boolean;
  clearClaimfromrewardingfund(): void;
  hasClaimfromrewardingfund(): boolean;

  getGrantreward(): GrantReward | undefined;
  setGrantreward(value?: GrantReward): void;
  hasGrantreward(): boolean;
  clearGrantreward(): void;
  hasGrantreward(): boolean;

  getPutpollresult(): PutPollResult | undefined;
  setPutpollresult(value?: PutPollResult): void;
  hasPutpollresult(): boolean;
  clearPutpollresult(): void;
  hasPutpollresult(): boolean;

  getActionCase(): ActionCore.ActionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCore.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCore): ActionCore.AsObject;
  static serializeBinaryToWriter(message: ActionCore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCore;
  static deserializeBinaryFromReader(message: ActionCore, reader: jspb.BinaryReader): ActionCore;
}

export namespace ActionCore {
  export type AsObject = {
    version: number,
    nonce: number,
    gaslimit: number,
    gasprice: string,
    transfer?: Transfer.AsObject,
    execution?: Execution.AsObject,
    startsubchain?: StartSubChain.AsObject,
    stopsubchain?: StopSubChain.AsObject,
    putblock?: PutBlock.AsObject,
    createdeposit?: CreateDeposit.AsObject,
    settledeposit?: SettleDeposit.AsObject,
    createplumchain?: CreatePlumChain.AsObject,
    terminateplumchain?: TerminatePlumChain.AsObject,
    plumputblock?: PlumPutBlock.AsObject,
    plumcreatedeposit?: PlumCreateDeposit.AsObject,
    plumstartexit?: PlumStartExit.AsObject,
    plumchallengeexit?: PlumChallengeExit.AsObject,
    plumresponsechallengeexit?: PlumResponseChallengeExit.AsObject,
    plumfinalizeexit?: PlumFinalizeExit.AsObject,
    plumsettledeposit?: PlumSettleDeposit.AsObject,
    plumtransfer?: PlumTransfer.AsObject,
    deposittorewardingfund?: DepositToRewardingFund.AsObject,
    claimfromrewardingfund?: ClaimFromRewardingFund.AsObject,
    grantreward?: GrantReward.AsObject,
    putpollresult?: PutPollResult.AsObject,
  }

  export enum ActionCase { 
    ACTION_NOT_SET = 0,
    TRANSFER = 10,
    EXECUTION = 12,
    STARTSUBCHAIN = 13,
    STOPSUBCHAIN = 14,
    PUTBLOCK = 15,
    CREATEDEPOSIT = 16,
    SETTLEDEPOSIT = 17,
    CREATEPLUMCHAIN = 18,
    TERMINATEPLUMCHAIN = 19,
    PLUMPUTBLOCK = 20,
    PLUMCREATEDEPOSIT = 21,
    PLUMSTARTEXIT = 22,
    PLUMCHALLENGEEXIT = 23,
    PLUMRESPONSECHALLENGEEXIT = 24,
    PLUMFINALIZEEXIT = 25,
    PLUMSETTLEDEPOSIT = 26,
    PLUMTRANSFER = 27,
    DEPOSITTOREWARDINGFUND = 30,
    CLAIMFROMREWARDINGFUND = 31,
    GRANTREWARD = 32,
    PUTPOLLRESULT = 50,
  }
}

export class Action extends jspb.Message {
  getCore(): ActionCore | undefined;
  setCore(value?: ActionCore): void;
  hasCore(): boolean;
  clearCore(): void;

  getSenderpubkey(): Uint8Array | string;
  getSenderpubkey_asU8(): Uint8Array;
  getSenderpubkey_asB64(): string;
  setSenderpubkey(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    core?: ActionCore.AsObject,
    senderpubkey: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class Receipt extends jspb.Message {
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
  getAmount(): string;
  setAmount(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositToRewardingFund.AsObject;
  static toObject(includeInstance: boolean, msg: DepositToRewardingFund): DepositToRewardingFund.AsObject;
  static serializeBinaryToWriter(message: DepositToRewardingFund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositToRewardingFund;
  static deserializeBinaryFromReader(message: DepositToRewardingFund, reader: jspb.BinaryReader): DepositToRewardingFund;
}

export namespace DepositToRewardingFund {
  export type AsObject = {
    amount: string,
    data: Uint8Array | string,
  }
}

export class ClaimFromRewardingFund extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimFromRewardingFund.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimFromRewardingFund): ClaimFromRewardingFund.AsObject;
  static serializeBinaryToWriter(message: ClaimFromRewardingFund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimFromRewardingFund;
  static deserializeBinaryFromReader(message: ClaimFromRewardingFund, reader: jspb.BinaryReader): ClaimFromRewardingFund;
}

export namespace ClaimFromRewardingFund {
  export type AsObject = {
    amount: string,
    data: Uint8Array | string,
  }
}

export class GrantReward extends jspb.Message {
  getType(): RewardType;
  setType(value: RewardType): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantReward.AsObject;
  static toObject(includeInstance: boolean, msg: GrantReward): GrantReward.AsObject;
  static serializeBinaryToWriter(message: GrantReward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantReward;
  static deserializeBinaryFromReader(message: GrantReward, reader: jspb.BinaryReader): GrantReward;
}

export namespace GrantReward {
  export type AsObject = {
    type: RewardType,
    height: number,
  }
}

export enum RewardType { 
  BlockReward = 0,
  EpochReward = 1,
}
