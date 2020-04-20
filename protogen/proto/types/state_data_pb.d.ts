import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ProbationCandidateList extends jspb.Message {
  getProbationlistList(): Array<ProbationCandidateList.Info>;
  setProbationlistList(value: Array<ProbationCandidateList.Info>): void;
  clearProbationlistList(): void;
  addProbationlist(value?: ProbationCandidateList.Info, index?: number): ProbationCandidateList.Info;

  getIntensityrate(): number;
  setIntensityrate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbationCandidateList.AsObject;
  static toObject(includeInstance: boolean, msg: ProbationCandidateList): ProbationCandidateList.AsObject;
  static serializeBinaryToWriter(message: ProbationCandidateList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbationCandidateList;
  static deserializeBinaryFromReader(message: ProbationCandidateList, reader: jspb.BinaryReader): ProbationCandidateList;
}

export namespace ProbationCandidateList {
  export type AsObject = {
    probationlistList: Array<ProbationCandidateList.Info.AsObject>,
    intensityrate: number,
  }

  export class Info extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    getCount(): number;
    setCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      address: string,
      count: number,
    }
  }

}

export class VoteBucket extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getCandidateaddress(): string;
  setCandidateaddress(value: string): void;

  getStakedamount(): string;
  setStakedamount(value: string): void;

  getStakedduration(): number;
  setStakedduration(value: number): void;

  getCreatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatetime(): boolean;
  clearCreatetime(): void;

  getStakestarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStakestarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStakestarttime(): boolean;
  clearStakestarttime(): void;

  getUnstakestarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUnstakestarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUnstakestarttime(): boolean;
  clearUnstakestarttime(): void;

  getAutostake(): boolean;
  setAutostake(value: boolean): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteBucket.AsObject;
  static toObject(includeInstance: boolean, msg: VoteBucket): VoteBucket.AsObject;
  static serializeBinaryToWriter(message: VoteBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteBucket;
  static deserializeBinaryFromReader(message: VoteBucket, reader: jspb.BinaryReader): VoteBucket;
}

export namespace VoteBucket {
  export type AsObject = {
    index: number,
    candidateaddress: string,
    stakedamount: string,
    stakedduration: number,
    createtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stakestarttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    unstakestarttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    autostake: boolean,
    owner: string,
  }
}

export class VoteBucketList extends jspb.Message {
  getBucketsList(): Array<VoteBucket>;
  setBucketsList(value: Array<VoteBucket>): void;
  clearBucketsList(): void;
  addBuckets(value?: VoteBucket, index?: number): VoteBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteBucketList.AsObject;
  static toObject(includeInstance: boolean, msg: VoteBucketList): VoteBucketList.AsObject;
  static serializeBinaryToWriter(message: VoteBucketList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteBucketList;
  static deserializeBinaryFromReader(message: VoteBucketList, reader: jspb.BinaryReader): VoteBucketList;
}

export namespace VoteBucketList {
  export type AsObject = {
    bucketsList: Array<VoteBucket.AsObject>,
  }
}

export class CandidateV2 extends jspb.Message {
  getOwneraddress(): string;
  setOwneraddress(value: string): void;

  getOperatoraddress(): string;
  setOperatoraddress(value: string): void;

  getRewardaddress(): string;
  setRewardaddress(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTotalweightedvotes(): string;
  setTotalweightedvotes(value: string): void;

  getSelfstakebucketidx(): number;
  setSelfstakebucketidx(value: number): void;

  getSelfstakingtokens(): string;
  setSelfstakingtokens(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateV2.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateV2): CandidateV2.AsObject;
  static serializeBinaryToWriter(message: CandidateV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateV2;
  static deserializeBinaryFromReader(message: CandidateV2, reader: jspb.BinaryReader): CandidateV2;
}

export namespace CandidateV2 {
  export type AsObject = {
    owneraddress: string,
    operatoraddress: string,
    rewardaddress: string,
    name: string,
    totalweightedvotes: string,
    selfstakebucketidx: number,
    selfstakingtokens: string,
  }
}

export class CandidateListV2 extends jspb.Message {
  getCandidatesList(): Array<CandidateV2>;
  setCandidatesList(value: Array<CandidateV2>): void;
  clearCandidatesList(): void;
  addCandidates(value?: CandidateV2, index?: number): CandidateV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateListV2.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateListV2): CandidateListV2.AsObject;
  static serializeBinaryToWriter(message: CandidateListV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateListV2;
  static deserializeBinaryFromReader(message: CandidateListV2, reader: jspb.BinaryReader): CandidateListV2;
}

export namespace CandidateListV2 {
  export type AsObject = {
    candidatesList: Array<CandidateV2.AsObject>,
  }
}

