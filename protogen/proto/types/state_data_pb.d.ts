import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ProbationCandidateList extends jspb.Message {
  getProbationlistList(): Array<ProbationCandidateList.Info>;
  setProbationlistList(value: Array<ProbationCandidateList.Info>): ProbationCandidateList;
  clearProbationlistList(): ProbationCandidateList;
  addProbationlist(value?: ProbationCandidateList.Info, index?: number): ProbationCandidateList.Info;

  getIntensityrate(): number;
  setIntensityrate(value: number): ProbationCandidateList;

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
    setAddress(value: string): Info;

    getCount(): number;
    setCount(value: number): Info;

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
  setIndex(value: number): VoteBucket;

  getCandidateaddress(): string;
  setCandidateaddress(value: string): VoteBucket;

  getStakedamount(): string;
  setStakedamount(value: string): VoteBucket;

  getStakedduration(): number;
  setStakedduration(value: number): VoteBucket;

  getCreatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatetime(value?: google_protobuf_timestamp_pb.Timestamp): VoteBucket;
  hasCreatetime(): boolean;
  clearCreatetime(): VoteBucket;

  getStakestarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStakestarttime(value?: google_protobuf_timestamp_pb.Timestamp): VoteBucket;
  hasStakestarttime(): boolean;
  clearStakestarttime(): VoteBucket;

  getUnstakestarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUnstakestarttime(value?: google_protobuf_timestamp_pb.Timestamp): VoteBucket;
  hasUnstakestarttime(): boolean;
  clearUnstakestarttime(): VoteBucket;

  getAutostake(): boolean;
  setAutostake(value: boolean): VoteBucket;

  getOwner(): string;
  setOwner(value: string): VoteBucket;

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
  setBucketsList(value: Array<VoteBucket>): VoteBucketList;
  clearBucketsList(): VoteBucketList;
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
  setOwneraddress(value: string): CandidateV2;

  getOperatoraddress(): string;
  setOperatoraddress(value: string): CandidateV2;

  getRewardaddress(): string;
  setRewardaddress(value: string): CandidateV2;

  getName(): string;
  setName(value: string): CandidateV2;

  getTotalweightedvotes(): string;
  setTotalweightedvotes(value: string): CandidateV2;

  getSelfstakebucketidx(): number;
  setSelfstakebucketidx(value: number): CandidateV2;

  getSelfstakingtokens(): string;
  setSelfstakingtokens(value: string): CandidateV2;

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
  setCandidatesList(value: Array<CandidateV2>): CandidateListV2;
  clearCandidatesList(): CandidateListV2;
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

export class BucketsCount extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): BucketsCount;

  getActive(): number;
  setActive(value: number): BucketsCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketsCount.AsObject;
  static toObject(includeInstance: boolean, msg: BucketsCount): BucketsCount.AsObject;
  static serializeBinaryToWriter(message: BucketsCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketsCount;
  static deserializeBinaryFromReader(message: BucketsCount, reader: jspb.BinaryReader): BucketsCount;
}

export namespace BucketsCount {
  export type AsObject = {
    total: number,
    active: number,
  }
}

