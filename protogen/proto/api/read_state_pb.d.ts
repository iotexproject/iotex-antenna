import * as jspb from 'google-protobuf'



export class PaginationParam extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): PaginationParam;

  getLimit(): number;
  setLimit(value: number): PaginationParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationParam.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationParam): PaginationParam.AsObject;
  static serializeBinaryToWriter(message: PaginationParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationParam;
  static deserializeBinaryFromReader(message: PaginationParam, reader: jspb.BinaryReader): PaginationParam;
}

export namespace PaginationParam {
  export type AsObject = {
    offset: number,
    limit: number,
  }
}

export class ReadStakingDataMethod extends jspb.Message {
  getMethod(): ReadStakingDataMethod.Name;
  setMethod(value: ReadStakingDataMethod.Name): ReadStakingDataMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStakingDataMethod.AsObject;
  static toObject(includeInstance: boolean, msg: ReadStakingDataMethod): ReadStakingDataMethod.AsObject;
  static serializeBinaryToWriter(message: ReadStakingDataMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadStakingDataMethod;
  static deserializeBinaryFromReader(message: ReadStakingDataMethod, reader: jspb.BinaryReader): ReadStakingDataMethod;
}

export namespace ReadStakingDataMethod {
  export type AsObject = {
    method: ReadStakingDataMethod.Name,
  }

  export enum Name { 
    INVALID = 0,
    BUCKETS = 1,
    BUCKETS_BY_VOTER = 2,
    BUCKETS_BY_CANDIDATE = 3,
    CANDIDATES = 4,
    CANDIDATE_BY_NAME = 5,
    BUCKETS_BY_INDEXES = 6,
    CANDIDATE_BY_ADDRESS = 7,
    TOTAL_STAKING_AMOUNT = 8,
    BUCKETS_COUNT = 9,
  }
}

export class ReadStakingDataRequest extends jspb.Message {
  getBuckets(): ReadStakingDataRequest.VoteBuckets | undefined;
  setBuckets(value?: ReadStakingDataRequest.VoteBuckets): ReadStakingDataRequest;
  hasBuckets(): boolean;
  clearBuckets(): ReadStakingDataRequest;

  getBucketsbyvoter(): ReadStakingDataRequest.VoteBucketsByVoter | undefined;
  setBucketsbyvoter(value?: ReadStakingDataRequest.VoteBucketsByVoter): ReadStakingDataRequest;
  hasBucketsbyvoter(): boolean;
  clearBucketsbyvoter(): ReadStakingDataRequest;

  getBucketsbycandidate(): ReadStakingDataRequest.VoteBucketsByCandidate | undefined;
  setBucketsbycandidate(value?: ReadStakingDataRequest.VoteBucketsByCandidate): ReadStakingDataRequest;
  hasBucketsbycandidate(): boolean;
  clearBucketsbycandidate(): ReadStakingDataRequest;

  getCandidates(): ReadStakingDataRequest.Candidates | undefined;
  setCandidates(value?: ReadStakingDataRequest.Candidates): ReadStakingDataRequest;
  hasCandidates(): boolean;
  clearCandidates(): ReadStakingDataRequest;

  getCandidatebyname(): ReadStakingDataRequest.CandidateByName | undefined;
  setCandidatebyname(value?: ReadStakingDataRequest.CandidateByName): ReadStakingDataRequest;
  hasCandidatebyname(): boolean;
  clearCandidatebyname(): ReadStakingDataRequest;

  getBucketsbyindexes(): ReadStakingDataRequest.VoteBucketsByIndexes | undefined;
  setBucketsbyindexes(value?: ReadStakingDataRequest.VoteBucketsByIndexes): ReadStakingDataRequest;
  hasBucketsbyindexes(): boolean;
  clearBucketsbyindexes(): ReadStakingDataRequest;

  getCandidatebyaddress(): ReadStakingDataRequest.CandidateByAddress | undefined;
  setCandidatebyaddress(value?: ReadStakingDataRequest.CandidateByAddress): ReadStakingDataRequest;
  hasCandidatebyaddress(): boolean;
  clearCandidatebyaddress(): ReadStakingDataRequest;

  getTotalstakingamount(): ReadStakingDataRequest.TotalStakingAmount | undefined;
  setTotalstakingamount(value?: ReadStakingDataRequest.TotalStakingAmount): ReadStakingDataRequest;
  hasTotalstakingamount(): boolean;
  clearTotalstakingamount(): ReadStakingDataRequest;

  getBucketscount(): ReadStakingDataRequest.BucketsCount | undefined;
  setBucketscount(value?: ReadStakingDataRequest.BucketsCount): ReadStakingDataRequest;
  hasBucketscount(): boolean;
  clearBucketscount(): ReadStakingDataRequest;

  getRequestCase(): ReadStakingDataRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStakingDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadStakingDataRequest): ReadStakingDataRequest.AsObject;
  static serializeBinaryToWriter(message: ReadStakingDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadStakingDataRequest;
  static deserializeBinaryFromReader(message: ReadStakingDataRequest, reader: jspb.BinaryReader): ReadStakingDataRequest;
}

export namespace ReadStakingDataRequest {
  export type AsObject = {
    buckets?: ReadStakingDataRequest.VoteBuckets.AsObject,
    bucketsbyvoter?: ReadStakingDataRequest.VoteBucketsByVoter.AsObject,
    bucketsbycandidate?: ReadStakingDataRequest.VoteBucketsByCandidate.AsObject,
    candidates?: ReadStakingDataRequest.Candidates.AsObject,
    candidatebyname?: ReadStakingDataRequest.CandidateByName.AsObject,
    bucketsbyindexes?: ReadStakingDataRequest.VoteBucketsByIndexes.AsObject,
    candidatebyaddress?: ReadStakingDataRequest.CandidateByAddress.AsObject,
    totalstakingamount?: ReadStakingDataRequest.TotalStakingAmount.AsObject,
    bucketscount?: ReadStakingDataRequest.BucketsCount.AsObject,
  }

  export class VoteBuckets extends jspb.Message {
    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): VoteBuckets;
    hasPagination(): boolean;
    clearPagination(): VoteBuckets;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: VoteBuckets): VoteBuckets.AsObject;
    static serializeBinaryToWriter(message: VoteBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteBuckets;
    static deserializeBinaryFromReader(message: VoteBuckets, reader: jspb.BinaryReader): VoteBuckets;
  }

  export namespace VoteBuckets {
    export type AsObject = {
      pagination?: PaginationParam.AsObject,
    }
  }


  export class VoteBucketsByVoter extends jspb.Message {
    getVoteraddress(): string;
    setVoteraddress(value: string): VoteBucketsByVoter;

    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): VoteBucketsByVoter;
    hasPagination(): boolean;
    clearPagination(): VoteBucketsByVoter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteBucketsByVoter.AsObject;
    static toObject(includeInstance: boolean, msg: VoteBucketsByVoter): VoteBucketsByVoter.AsObject;
    static serializeBinaryToWriter(message: VoteBucketsByVoter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteBucketsByVoter;
    static deserializeBinaryFromReader(message: VoteBucketsByVoter, reader: jspb.BinaryReader): VoteBucketsByVoter;
  }

  export namespace VoteBucketsByVoter {
    export type AsObject = {
      voteraddress: string,
      pagination?: PaginationParam.AsObject,
    }
  }


  export class VoteBucketsByCandidate extends jspb.Message {
    getCandname(): string;
    setCandname(value: string): VoteBucketsByCandidate;

    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): VoteBucketsByCandidate;
    hasPagination(): boolean;
    clearPagination(): VoteBucketsByCandidate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteBucketsByCandidate.AsObject;
    static toObject(includeInstance: boolean, msg: VoteBucketsByCandidate): VoteBucketsByCandidate.AsObject;
    static serializeBinaryToWriter(message: VoteBucketsByCandidate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteBucketsByCandidate;
    static deserializeBinaryFromReader(message: VoteBucketsByCandidate, reader: jspb.BinaryReader): VoteBucketsByCandidate;
  }

  export namespace VoteBucketsByCandidate {
    export type AsObject = {
      candname: string,
      pagination?: PaginationParam.AsObject,
    }
  }


  export class Candidates extends jspb.Message {
    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): Candidates;
    hasPagination(): boolean;
    clearPagination(): Candidates;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Candidates.AsObject;
    static toObject(includeInstance: boolean, msg: Candidates): Candidates.AsObject;
    static serializeBinaryToWriter(message: Candidates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Candidates;
    static deserializeBinaryFromReader(message: Candidates, reader: jspb.BinaryReader): Candidates;
  }

  export namespace Candidates {
    export type AsObject = {
      pagination?: PaginationParam.AsObject,
    }
  }


  export class CandidateByName extends jspb.Message {
    getCandname(): string;
    setCandname(value: string): CandidateByName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandidateByName.AsObject;
    static toObject(includeInstance: boolean, msg: CandidateByName): CandidateByName.AsObject;
    static serializeBinaryToWriter(message: CandidateByName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandidateByName;
    static deserializeBinaryFromReader(message: CandidateByName, reader: jspb.BinaryReader): CandidateByName;
  }

  export namespace CandidateByName {
    export type AsObject = {
      candname: string,
    }
  }


  export class VoteBucketsByIndexes extends jspb.Message {
    getIndexList(): Array<number>;
    setIndexList(value: Array<number>): VoteBucketsByIndexes;
    clearIndexList(): VoteBucketsByIndexes;
    addIndex(value: number, index?: number): VoteBucketsByIndexes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteBucketsByIndexes.AsObject;
    static toObject(includeInstance: boolean, msg: VoteBucketsByIndexes): VoteBucketsByIndexes.AsObject;
    static serializeBinaryToWriter(message: VoteBucketsByIndexes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteBucketsByIndexes;
    static deserializeBinaryFromReader(message: VoteBucketsByIndexes, reader: jspb.BinaryReader): VoteBucketsByIndexes;
  }

  export namespace VoteBucketsByIndexes {
    export type AsObject = {
      indexList: Array<number>,
    }
  }


  export class CandidateByAddress extends jspb.Message {
    getOwneraddr(): string;
    setOwneraddr(value: string): CandidateByAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandidateByAddress.AsObject;
    static toObject(includeInstance: boolean, msg: CandidateByAddress): CandidateByAddress.AsObject;
    static serializeBinaryToWriter(message: CandidateByAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandidateByAddress;
    static deserializeBinaryFromReader(message: CandidateByAddress, reader: jspb.BinaryReader): CandidateByAddress;
  }

  export namespace CandidateByAddress {
    export type AsObject = {
      owneraddr: string,
    }
  }


  export class TotalStakingAmount extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TotalStakingAmount.AsObject;
    static toObject(includeInstance: boolean, msg: TotalStakingAmount): TotalStakingAmount.AsObject;
    static serializeBinaryToWriter(message: TotalStakingAmount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TotalStakingAmount;
    static deserializeBinaryFromReader(message: TotalStakingAmount, reader: jspb.BinaryReader): TotalStakingAmount;
  }

  export namespace TotalStakingAmount {
    export type AsObject = {
    }
  }


  export class BucketsCount extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BucketsCount.AsObject;
    static toObject(includeInstance: boolean, msg: BucketsCount): BucketsCount.AsObject;
    static serializeBinaryToWriter(message: BucketsCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BucketsCount;
    static deserializeBinaryFromReader(message: BucketsCount, reader: jspb.BinaryReader): BucketsCount;
  }

  export namespace BucketsCount {
    export type AsObject = {
    }
  }


  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    BUCKETS = 1,
    BUCKETSBYVOTER = 2,
    BUCKETSBYCANDIDATE = 3,
    CANDIDATES = 4,
    CANDIDATEBYNAME = 5,
    BUCKETSBYINDEXES = 6,
    CANDIDATEBYADDRESS = 7,
    TOTALSTAKINGAMOUNT = 8,
    BUCKETSCOUNT = 9,
  }
}

