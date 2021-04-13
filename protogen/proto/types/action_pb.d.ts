import * as jspb from 'google-protobuf'



export class Transfer extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): Transfer;

  getRecipient(): string;
  setRecipient(value: string): Transfer;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): Transfer;

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
  setAddress(value: string): Candidate;

  getVotes(): Uint8Array | string;
  getVotes_asU8(): Uint8Array;
  getVotes_asB64(): string;
  setVotes(value: Uint8Array | string): Candidate;

  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): Candidate;

  getRewardaddress(): string;
  setRewardaddress(value: string): Candidate;

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
  setCandidatesList(value: Array<Candidate>): CandidateList;
  clearCandidatesList(): CandidateList;
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
  setHeight(value: number): PutPollResult;

  getCandidates(): CandidateList | undefined;
  setCandidates(value?: CandidateList): PutPollResult;
  hasCandidates(): boolean;
  clearCandidates(): PutPollResult;

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
  setAmount(value: string): Execution;

  getContract(): string;
  setContract(value: string): Execution;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Execution;

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

export class StakeCreate extends jspb.Message {
  getCandidatename(): string;
  setCandidatename(value: string): StakeCreate;

  getStakedamount(): string;
  setStakedamount(value: string): StakeCreate;

  getStakedduration(): number;
  setStakedduration(value: number): StakeCreate;

  getAutostake(): boolean;
  setAutostake(value: boolean): StakeCreate;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StakeCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeCreate.AsObject;
  static toObject(includeInstance: boolean, msg: StakeCreate): StakeCreate.AsObject;
  static serializeBinaryToWriter(message: StakeCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeCreate;
  static deserializeBinaryFromReader(message: StakeCreate, reader: jspb.BinaryReader): StakeCreate;
}

export namespace StakeCreate {
  export type AsObject = {
    candidatename: string,
    stakedamount: string,
    stakedduration: number,
    autostake: boolean,
    payload: Uint8Array | string,
  }
}

export class StakeReclaim extends jspb.Message {
  getBucketindex(): number;
  setBucketindex(value: number): StakeReclaim;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StakeReclaim;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeReclaim.AsObject;
  static toObject(includeInstance: boolean, msg: StakeReclaim): StakeReclaim.AsObject;
  static serializeBinaryToWriter(message: StakeReclaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeReclaim;
  static deserializeBinaryFromReader(message: StakeReclaim, reader: jspb.BinaryReader): StakeReclaim;
}

export namespace StakeReclaim {
  export type AsObject = {
    bucketindex: number,
    payload: Uint8Array | string,
  }
}

export class StakeAddDeposit extends jspb.Message {
  getBucketindex(): number;
  setBucketindex(value: number): StakeAddDeposit;

  getAmount(): string;
  setAmount(value: string): StakeAddDeposit;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StakeAddDeposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeAddDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: StakeAddDeposit): StakeAddDeposit.AsObject;
  static serializeBinaryToWriter(message: StakeAddDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeAddDeposit;
  static deserializeBinaryFromReader(message: StakeAddDeposit, reader: jspb.BinaryReader): StakeAddDeposit;
}

export namespace StakeAddDeposit {
  export type AsObject = {
    bucketindex: number,
    amount: string,
    payload: Uint8Array | string,
  }
}

export class StakeRestake extends jspb.Message {
  getBucketindex(): number;
  setBucketindex(value: number): StakeRestake;

  getStakedduration(): number;
  setStakedduration(value: number): StakeRestake;

  getAutostake(): boolean;
  setAutostake(value: boolean): StakeRestake;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StakeRestake;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeRestake.AsObject;
  static toObject(includeInstance: boolean, msg: StakeRestake): StakeRestake.AsObject;
  static serializeBinaryToWriter(message: StakeRestake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeRestake;
  static deserializeBinaryFromReader(message: StakeRestake, reader: jspb.BinaryReader): StakeRestake;
}

export namespace StakeRestake {
  export type AsObject = {
    bucketindex: number,
    stakedduration: number,
    autostake: boolean,
    payload: Uint8Array | string,
  }
}

export class StakeChangeCandidate extends jspb.Message {
  getBucketindex(): number;
  setBucketindex(value: number): StakeChangeCandidate;

  getCandidatename(): string;
  setCandidatename(value: string): StakeChangeCandidate;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StakeChangeCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeChangeCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: StakeChangeCandidate): StakeChangeCandidate.AsObject;
  static serializeBinaryToWriter(message: StakeChangeCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeChangeCandidate;
  static deserializeBinaryFromReader(message: StakeChangeCandidate, reader: jspb.BinaryReader): StakeChangeCandidate;
}

export namespace StakeChangeCandidate {
  export type AsObject = {
    bucketindex: number,
    candidatename: string,
    payload: Uint8Array | string,
  }
}

export class StakeTransferOwnership extends jspb.Message {
  getBucketindex(): number;
  setBucketindex(value: number): StakeTransferOwnership;

  getVoteraddress(): string;
  setVoteraddress(value: string): StakeTransferOwnership;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StakeTransferOwnership;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeTransferOwnership.AsObject;
  static toObject(includeInstance: boolean, msg: StakeTransferOwnership): StakeTransferOwnership.AsObject;
  static serializeBinaryToWriter(message: StakeTransferOwnership, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeTransferOwnership;
  static deserializeBinaryFromReader(message: StakeTransferOwnership, reader: jspb.BinaryReader): StakeTransferOwnership;
}

export namespace StakeTransferOwnership {
  export type AsObject = {
    bucketindex: number,
    voteraddress: string,
    payload: Uint8Array | string,
  }
}

export class CandidateBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): CandidateBasicInfo;

  getOperatoraddress(): string;
  setOperatoraddress(value: string): CandidateBasicInfo;

  getRewardaddress(): string;
  setRewardaddress(value: string): CandidateBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateBasicInfo): CandidateBasicInfo.AsObject;
  static serializeBinaryToWriter(message: CandidateBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateBasicInfo;
  static deserializeBinaryFromReader(message: CandidateBasicInfo, reader: jspb.BinaryReader): CandidateBasicInfo;
}

export namespace CandidateBasicInfo {
  export type AsObject = {
    name: string,
    operatoraddress: string,
    rewardaddress: string,
  }
}

export class CandidateRegister extends jspb.Message {
  getCandidate(): CandidateBasicInfo | undefined;
  setCandidate(value?: CandidateBasicInfo): CandidateRegister;
  hasCandidate(): boolean;
  clearCandidate(): CandidateRegister;

  getStakedamount(): string;
  setStakedamount(value: string): CandidateRegister;

  getStakedduration(): number;
  setStakedduration(value: number): CandidateRegister;

  getAutostake(): boolean;
  setAutostake(value: boolean): CandidateRegister;

  getOwneraddress(): string;
  setOwneraddress(value: string): CandidateRegister;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): CandidateRegister;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateRegister.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateRegister): CandidateRegister.AsObject;
  static serializeBinaryToWriter(message: CandidateRegister, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateRegister;
  static deserializeBinaryFromReader(message: CandidateRegister, reader: jspb.BinaryReader): CandidateRegister;
}

export namespace CandidateRegister {
  export type AsObject = {
    candidate?: CandidateBasicInfo.AsObject,
    stakedamount: string,
    stakedduration: number,
    autostake: boolean,
    owneraddress: string,
    payload: Uint8Array | string,
  }
}

export class StartSubChain extends jspb.Message {
  getChainid(): number;
  setChainid(value: number): StartSubChain;

  getSecuritydeposit(): string;
  setSecuritydeposit(value: string): StartSubChain;

  getOperationdeposit(): string;
  setOperationdeposit(value: string): StartSubChain;

  getStartheight(): number;
  setStartheight(value: number): StartSubChain;

  getParentheightoffset(): number;
  setParentheightoffset(value: number): StartSubChain;

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
  setChainid(value: number): StopSubChain;

  getStopheight(): number;
  setStopheight(value: number): StopSubChain;

  getSubchainaddress(): string;
  setSubchainaddress(value: string): StopSubChain;

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
  setName(value: string): MerkleRoot;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): MerkleRoot;

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
  setSubchainaddress(value: string): PutBlock;

  getHeight(): number;
  setHeight(value: number): PutBlock;

  getRootsList(): Array<MerkleRoot>;
  setRootsList(value: Array<MerkleRoot>): PutBlock;
  clearRootsList(): PutBlock;
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
  setChainid(value: number): CreateDeposit;

  getAmount(): string;
  setAmount(value: string): CreateDeposit;

  getRecipient(): string;
  setRecipient(value: string): CreateDeposit;

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
  setAmount(value: string): SettleDeposit;

  getRecipient(): string;
  setRecipient(value: string): SettleDeposit;

  getIndex(): number;
  setIndex(value: number): SettleDeposit;

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
  setSubchainaddress(value: string): TerminatePlumChain;

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
  setSubchainaddress(value: string): PlumPutBlock;

  getHeight(): number;
  setHeight(value: number): PlumPutBlock;

  getRootsMap(): jspb.Map<string, Uint8Array | string>;
  clearRootsMap(): PlumPutBlock;

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
  setSubchainaddress(value: string): PlumCreateDeposit;

  getAmount(): string;
  setAmount(value: string): PlumCreateDeposit;

  getRecipient(): string;
  setRecipient(value: string): PlumCreateDeposit;

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
  setSubchainaddress(value: string): PlumStartExit;

  getPrevioustransfer(): Uint8Array | string;
  getPrevioustransfer_asU8(): Uint8Array;
  getPrevioustransfer_asB64(): string;
  setPrevioustransfer(value: Uint8Array | string): PlumStartExit;

  getPrevioustransferblockproof(): Uint8Array | string;
  getPrevioustransferblockproof_asU8(): Uint8Array;
  getPrevioustransferblockproof_asB64(): string;
  setPrevioustransferblockproof(value: Uint8Array | string): PlumStartExit;

  getPrevioustransferblockheight(): number;
  setPrevioustransferblockheight(value: number): PlumStartExit;

  getExittransfer(): Uint8Array | string;
  getExittransfer_asU8(): Uint8Array;
  getExittransfer_asB64(): string;
  setExittransfer(value: Uint8Array | string): PlumStartExit;

  getExittransferblockproof(): Uint8Array | string;
  getExittransferblockproof_asU8(): Uint8Array;
  getExittransferblockproof_asB64(): string;
  setExittransferblockproof(value: Uint8Array | string): PlumStartExit;

  getExittransferblockheight(): number;
  setExittransferblockheight(value: number): PlumStartExit;

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
  setSubchainaddress(value: string): PlumChallengeExit;

  getCoinid(): number;
  setCoinid(value: number): PlumChallengeExit;

  getChallengetransfer(): Uint8Array | string;
  getChallengetransfer_asU8(): Uint8Array;
  getChallengetransfer_asB64(): string;
  setChallengetransfer(value: Uint8Array | string): PlumChallengeExit;

  getChallengetransferblockproof(): Uint8Array | string;
  getChallengetransferblockproof_asU8(): Uint8Array;
  getChallengetransferblockproof_asB64(): string;
  setChallengetransferblockproof(value: Uint8Array | string): PlumChallengeExit;

  getChallengetransferblockheight(): number;
  setChallengetransferblockheight(value: number): PlumChallengeExit;

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
  setSubchainaddress(value: string): PlumResponseChallengeExit;

  getCoinid(): number;
  setCoinid(value: number): PlumResponseChallengeExit;

  getChallengetransfer(): Uint8Array | string;
  getChallengetransfer_asU8(): Uint8Array;
  getChallengetransfer_asB64(): string;
  setChallengetransfer(value: Uint8Array | string): PlumResponseChallengeExit;

  getResponsetransfer(): Uint8Array | string;
  getResponsetransfer_asU8(): Uint8Array;
  getResponsetransfer_asB64(): string;
  setResponsetransfer(value: Uint8Array | string): PlumResponseChallengeExit;

  getResponsetransferblockproof(): Uint8Array | string;
  getResponsetransferblockproof_asU8(): Uint8Array;
  getResponsetransferblockproof_asB64(): string;
  setResponsetransferblockproof(value: Uint8Array | string): PlumResponseChallengeExit;

  getPrevioustransferblockheight(): number;
  setPrevioustransferblockheight(value: number): PlumResponseChallengeExit;

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
  setSubchainaddress(value: string): PlumFinalizeExit;

  getCoinid(): number;
  setCoinid(value: number): PlumFinalizeExit;

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
  setCoinid(value: number): PlumSettleDeposit;

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
  setCoinid(value: number): PlumTransfer;

  getDenomination(): Uint8Array | string;
  getDenomination_asU8(): Uint8Array;
  getDenomination_asB64(): string;
  setDenomination(value: Uint8Array | string): PlumTransfer;

  getOwner(): string;
  setOwner(value: string): PlumTransfer;

  getRecipient(): string;
  setRecipient(value: string): PlumTransfer;

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
  setVersion(value: number): ActionCore;

  getNonce(): number;
  setNonce(value: number): ActionCore;

  getGaslimit(): number;
  setGaslimit(value: number): ActionCore;

  getGasprice(): string;
  setGasprice(value: string): ActionCore;

  getChainid(): number;
  setChainid(value: number): ActionCore;

  getTransfer(): Transfer | undefined;
  setTransfer(value?: Transfer): ActionCore;
  hasTransfer(): boolean;
  clearTransfer(): ActionCore;

  getExecution(): Execution | undefined;
  setExecution(value?: Execution): ActionCore;
  hasExecution(): boolean;
  clearExecution(): ActionCore;

  getStartsubchain(): StartSubChain | undefined;
  setStartsubchain(value?: StartSubChain): ActionCore;
  hasStartsubchain(): boolean;
  clearStartsubchain(): ActionCore;

  getStopsubchain(): StopSubChain | undefined;
  setStopsubchain(value?: StopSubChain): ActionCore;
  hasStopsubchain(): boolean;
  clearStopsubchain(): ActionCore;

  getPutblock(): PutBlock | undefined;
  setPutblock(value?: PutBlock): ActionCore;
  hasPutblock(): boolean;
  clearPutblock(): ActionCore;

  getCreatedeposit(): CreateDeposit | undefined;
  setCreatedeposit(value?: CreateDeposit): ActionCore;
  hasCreatedeposit(): boolean;
  clearCreatedeposit(): ActionCore;

  getSettledeposit(): SettleDeposit | undefined;
  setSettledeposit(value?: SettleDeposit): ActionCore;
  hasSettledeposit(): boolean;
  clearSettledeposit(): ActionCore;

  getCreateplumchain(): CreatePlumChain | undefined;
  setCreateplumchain(value?: CreatePlumChain): ActionCore;
  hasCreateplumchain(): boolean;
  clearCreateplumchain(): ActionCore;

  getTerminateplumchain(): TerminatePlumChain | undefined;
  setTerminateplumchain(value?: TerminatePlumChain): ActionCore;
  hasTerminateplumchain(): boolean;
  clearTerminateplumchain(): ActionCore;

  getPlumputblock(): PlumPutBlock | undefined;
  setPlumputblock(value?: PlumPutBlock): ActionCore;
  hasPlumputblock(): boolean;
  clearPlumputblock(): ActionCore;

  getPlumcreatedeposit(): PlumCreateDeposit | undefined;
  setPlumcreatedeposit(value?: PlumCreateDeposit): ActionCore;
  hasPlumcreatedeposit(): boolean;
  clearPlumcreatedeposit(): ActionCore;

  getPlumstartexit(): PlumStartExit | undefined;
  setPlumstartexit(value?: PlumStartExit): ActionCore;
  hasPlumstartexit(): boolean;
  clearPlumstartexit(): ActionCore;

  getPlumchallengeexit(): PlumChallengeExit | undefined;
  setPlumchallengeexit(value?: PlumChallengeExit): ActionCore;
  hasPlumchallengeexit(): boolean;
  clearPlumchallengeexit(): ActionCore;

  getPlumresponsechallengeexit(): PlumResponseChallengeExit | undefined;
  setPlumresponsechallengeexit(value?: PlumResponseChallengeExit): ActionCore;
  hasPlumresponsechallengeexit(): boolean;
  clearPlumresponsechallengeexit(): ActionCore;

  getPlumfinalizeexit(): PlumFinalizeExit | undefined;
  setPlumfinalizeexit(value?: PlumFinalizeExit): ActionCore;
  hasPlumfinalizeexit(): boolean;
  clearPlumfinalizeexit(): ActionCore;

  getPlumsettledeposit(): PlumSettleDeposit | undefined;
  setPlumsettledeposit(value?: PlumSettleDeposit): ActionCore;
  hasPlumsettledeposit(): boolean;
  clearPlumsettledeposit(): ActionCore;

  getPlumtransfer(): PlumTransfer | undefined;
  setPlumtransfer(value?: PlumTransfer): ActionCore;
  hasPlumtransfer(): boolean;
  clearPlumtransfer(): ActionCore;

  getDeposittorewardingfund(): DepositToRewardingFund | undefined;
  setDeposittorewardingfund(value?: DepositToRewardingFund): ActionCore;
  hasDeposittorewardingfund(): boolean;
  clearDeposittorewardingfund(): ActionCore;

  getClaimfromrewardingfund(): ClaimFromRewardingFund | undefined;
  setClaimfromrewardingfund(value?: ClaimFromRewardingFund): ActionCore;
  hasClaimfromrewardingfund(): boolean;
  clearClaimfromrewardingfund(): ActionCore;

  getGrantreward(): GrantReward | undefined;
  setGrantreward(value?: GrantReward): ActionCore;
  hasGrantreward(): boolean;
  clearGrantreward(): ActionCore;

  getStakecreate(): StakeCreate | undefined;
  setStakecreate(value?: StakeCreate): ActionCore;
  hasStakecreate(): boolean;
  clearStakecreate(): ActionCore;

  getStakeunstake(): StakeReclaim | undefined;
  setStakeunstake(value?: StakeReclaim): ActionCore;
  hasStakeunstake(): boolean;
  clearStakeunstake(): ActionCore;

  getStakewithdraw(): StakeReclaim | undefined;
  setStakewithdraw(value?: StakeReclaim): ActionCore;
  hasStakewithdraw(): boolean;
  clearStakewithdraw(): ActionCore;

  getStakeadddeposit(): StakeAddDeposit | undefined;
  setStakeadddeposit(value?: StakeAddDeposit): ActionCore;
  hasStakeadddeposit(): boolean;
  clearStakeadddeposit(): ActionCore;

  getStakerestake(): StakeRestake | undefined;
  setStakerestake(value?: StakeRestake): ActionCore;
  hasStakerestake(): boolean;
  clearStakerestake(): ActionCore;

  getStakechangecandidate(): StakeChangeCandidate | undefined;
  setStakechangecandidate(value?: StakeChangeCandidate): ActionCore;
  hasStakechangecandidate(): boolean;
  clearStakechangecandidate(): ActionCore;

  getStaketransferownership(): StakeTransferOwnership | undefined;
  setStaketransferownership(value?: StakeTransferOwnership): ActionCore;
  hasStaketransferownership(): boolean;
  clearStaketransferownership(): ActionCore;

  getCandidateregister(): CandidateRegister | undefined;
  setCandidateregister(value?: CandidateRegister): ActionCore;
  hasCandidateregister(): boolean;
  clearCandidateregister(): ActionCore;

  getCandidateupdate(): CandidateBasicInfo | undefined;
  setCandidateupdate(value?: CandidateBasicInfo): ActionCore;
  hasCandidateupdate(): boolean;
  clearCandidateupdate(): ActionCore;

  getPutpollresult(): PutPollResult | undefined;
  setPutpollresult(value?: PutPollResult): ActionCore;
  hasPutpollresult(): boolean;
  clearPutpollresult(): ActionCore;

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
    chainid: number,
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
    stakecreate?: StakeCreate.AsObject,
    stakeunstake?: StakeReclaim.AsObject,
    stakewithdraw?: StakeReclaim.AsObject,
    stakeadddeposit?: StakeAddDeposit.AsObject,
    stakerestake?: StakeRestake.AsObject,
    stakechangecandidate?: StakeChangeCandidate.AsObject,
    staketransferownership?: StakeTransferOwnership.AsObject,
    candidateregister?: CandidateRegister.AsObject,
    candidateupdate?: CandidateBasicInfo.AsObject,
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
    STAKECREATE = 40,
    STAKEUNSTAKE = 41,
    STAKEWITHDRAW = 42,
    STAKEADDDEPOSIT = 43,
    STAKERESTAKE = 44,
    STAKECHANGECANDIDATE = 45,
    STAKETRANSFEROWNERSHIP = 46,
    CANDIDATEREGISTER = 47,
    CANDIDATEUPDATE = 48,
    PUTPOLLRESULT = 50,
  }
}

export class Action extends jspb.Message {
  getCore(): ActionCore | undefined;
  setCore(value?: ActionCore): Action;
  hasCore(): boolean;
  clearCore(): Action;

  getSenderpubkey(): Uint8Array | string;
  getSenderpubkey_asU8(): Uint8Array;
  getSenderpubkey_asB64(): string;
  setSenderpubkey(value: Uint8Array | string): Action;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Action;

  getEncoding(): Encoding;
  setEncoding(value: Encoding): Action;

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
    encoding: Encoding,
  }
}

export class Receipt extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): Receipt;

  getBlkheight(): number;
  setBlkheight(value: number): Receipt;

  getActhash(): Uint8Array | string;
  getActhash_asU8(): Uint8Array;
  getActhash_asB64(): string;
  setActhash(value: Uint8Array | string): Receipt;

  getGasconsumed(): number;
  setGasconsumed(value: number): Receipt;

  getContractaddress(): string;
  setContractaddress(value: string): Receipt;

  getLogsList(): Array<Log>;
  setLogsList(value: Array<Log>): Receipt;
  clearLogsList(): Receipt;
  addLogs(value?: Log, index?: number): Log;

  getExecutionrevertmsg(): string;
  setExecutionrevertmsg(value: string): Receipt;

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
    executionrevertmsg: string,
  }
}

export class Log extends jspb.Message {
  getContractaddress(): string;
  setContractaddress(value: string): Log;

  getTopicsList(): Array<Uint8Array | string>;
  setTopicsList(value: Array<Uint8Array | string>): Log;
  clearTopicsList(): Log;
  addTopics(value: Uint8Array | string, index?: number): Log;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Log;

  getBlkheight(): number;
  setBlkheight(value: number): Log;

  getActhash(): Uint8Array | string;
  getActhash_asU8(): Uint8Array;
  getActhash_asB64(): string;
  setActhash(value: Uint8Array | string): Log;

  getIndex(): number;
  setIndex(value: number): Log;

  getBlkhash(): Uint8Array | string;
  getBlkhash_asU8(): Uint8Array;
  getBlkhash_asB64(): string;
  setBlkhash(value: Uint8Array | string): Log;

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
    blkhash: Uint8Array | string,
  }
}

export class Logs extends jspb.Message {
  getLogsList(): Array<Log>;
  setLogsList(value: Array<Log>): Logs;
  clearLogsList(): Logs;
  addLogs(value?: Log, index?: number): Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logs.AsObject;
  static toObject(includeInstance: boolean, msg: Logs): Logs.AsObject;
  static serializeBinaryToWriter(message: Logs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logs;
  static deserializeBinaryFromReader(message: Logs, reader: jspb.BinaryReader): Logs;
}

export namespace Logs {
  export type AsObject = {
    logsList: Array<Log.AsObject>,
  }
}

export class EvmTransfer extends jspb.Message {
  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): EvmTransfer;

  getFrom(): string;
  setFrom(value: string): EvmTransfer;

  getTo(): string;
  setTo(value: string): EvmTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvmTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: EvmTransfer): EvmTransfer.AsObject;
  static serializeBinaryToWriter(message: EvmTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvmTransfer;
  static deserializeBinaryFromReader(message: EvmTransfer, reader: jspb.BinaryReader): EvmTransfer;
}

export namespace EvmTransfer {
  export type AsObject = {
    amount: Uint8Array | string,
    from: string,
    to: string,
  }
}

export class EvmTransferList extends jspb.Message {
  getEvmtransfersList(): Array<EvmTransfer>;
  setEvmtransfersList(value: Array<EvmTransfer>): EvmTransferList;
  clearEvmtransfersList(): EvmTransferList;
  addEvmtransfers(value?: EvmTransfer, index?: number): EvmTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvmTransferList.AsObject;
  static toObject(includeInstance: boolean, msg: EvmTransferList): EvmTransferList.AsObject;
  static serializeBinaryToWriter(message: EvmTransferList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvmTransferList;
  static deserializeBinaryFromReader(message: EvmTransferList, reader: jspb.BinaryReader): EvmTransferList;
}

export namespace EvmTransferList {
  export type AsObject = {
    evmtransfersList: Array<EvmTransfer.AsObject>,
  }
}

export class ActionEvmTransfer extends jspb.Message {
  getActionhash(): Uint8Array | string;
  getActionhash_asU8(): Uint8Array;
  getActionhash_asB64(): string;
  setActionhash(value: Uint8Array | string): ActionEvmTransfer;

  getNumevmtransfers(): number;
  setNumevmtransfers(value: number): ActionEvmTransfer;

  getEvmtransfersList(): Array<EvmTransfer>;
  setEvmtransfersList(value: Array<EvmTransfer>): ActionEvmTransfer;
  clearEvmtransfersList(): ActionEvmTransfer;
  addEvmtransfers(value?: EvmTransfer, index?: number): EvmTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEvmTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEvmTransfer): ActionEvmTransfer.AsObject;
  static serializeBinaryToWriter(message: ActionEvmTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEvmTransfer;
  static deserializeBinaryFromReader(message: ActionEvmTransfer, reader: jspb.BinaryReader): ActionEvmTransfer;
}

export namespace ActionEvmTransfer {
  export type AsObject = {
    actionhash: Uint8Array | string,
    numevmtransfers: number,
    evmtransfersList: Array<EvmTransfer.AsObject>,
  }
}

export class BlockEvmTransfer extends jspb.Message {
  getBlockheight(): number;
  setBlockheight(value: number): BlockEvmTransfer;

  getNumevmtransfers(): number;
  setNumevmtransfers(value: number): BlockEvmTransfer;

  getActionevmtransfersList(): Array<ActionEvmTransfer>;
  setActionevmtransfersList(value: Array<ActionEvmTransfer>): BlockEvmTransfer;
  clearActionevmtransfersList(): BlockEvmTransfer;
  addActionevmtransfers(value?: ActionEvmTransfer, index?: number): ActionEvmTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockEvmTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: BlockEvmTransfer): BlockEvmTransfer.AsObject;
  static serializeBinaryToWriter(message: BlockEvmTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockEvmTransfer;
  static deserializeBinaryFromReader(message: BlockEvmTransfer, reader: jspb.BinaryReader): BlockEvmTransfer;
}

export namespace BlockEvmTransfer {
  export type AsObject = {
    blockheight: number,
    numevmtransfers: number,
    actionevmtransfersList: Array<ActionEvmTransfer.AsObject>,
  }
}

export class DepositToRewardingFund extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): DepositToRewardingFund;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): DepositToRewardingFund;

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
  setAmount(value: string): ClaimFromRewardingFund;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ClaimFromRewardingFund;

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
  setType(value: RewardType): GrantReward;

  getHeight(): number;
  setHeight(value: number): GrantReward;

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

export enum Encoding { 
  IOTEX_PROTOBUF = 0,
  ETHEREUM_RLP = 1,
}
export enum RewardType { 
  BLOCKREWARD = 0,
  EPOCHREWARD = 1,
}
