import * as jspb from "google-protobuf"

export class PaginationParam extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

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
  setMethod(value: ReadStakingDataMethod.Name): void;

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
  }
}

export class ReadStakingDataRequest extends jspb.Message {
  getBuckets(): ReadStakingDataRequest.VoteBuckets | undefined;
  setBuckets(value?: ReadStakingDataRequest.VoteBuckets): void;
  hasBuckets(): boolean;
  clearBuckets(): void;
  hasBuckets(): boolean;

  getBucketsbyvoter(): ReadStakingDataRequest.VoteBucketsByVoter | undefined;
  setBucketsbyvoter(value?: ReadStakingDataRequest.VoteBucketsByVoter): void;
  hasBucketsbyvoter(): boolean;
  clearBucketsbyvoter(): void;
  hasBucketsbyvoter(): boolean;

  getBucketsbycandidate(): ReadStakingDataRequest.VoteBucketsByCandidate | undefined;
  setBucketsbycandidate(value?: ReadStakingDataRequest.VoteBucketsByCandidate): void;
  hasBucketsbycandidate(): boolean;
  clearBucketsbycandidate(): void;
  hasBucketsbycandidate(): boolean;

  getCandidates(): ReadStakingDataRequest.Candidates | undefined;
  setCandidates(value?: ReadStakingDataRequest.Candidates): void;
  hasCandidates(): boolean;
  clearCandidates(): void;
  hasCandidates(): boolean;

  getCandidatebyname(): ReadStakingDataRequest.CandidateByName | undefined;
  setCandidatebyname(value?: ReadStakingDataRequest.CandidateByName): void;
  hasCandidatebyname(): boolean;
  clearCandidatebyname(): void;
  hasCandidatebyname(): boolean;

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
  }

  export class VoteBuckets extends jspb.Message {
    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): void;
    hasPagination(): boolean;
    clearPagination(): void;

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
    setVoteraddress(value: string): void;

    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): void;
    hasPagination(): boolean;
    clearPagination(): void;

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
    setCandname(value: string): void;

    getPagination(): PaginationParam | undefined;
    setPagination(value?: PaginationParam): void;
    hasPagination(): boolean;
    clearPagination(): void;

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
    setPagination(value?: PaginationParam): void;
    hasPagination(): boolean;
    clearPagination(): void;

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
    setCandname(value: string): void;

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


  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    BUCKETS = 1,
    BUCKETSBYVOTER = 2,
    BUCKETSBYCANDIDATE = 3,
    CANDIDATES = 4,
    CANDIDATEBYNAME = 5,
  }
}

