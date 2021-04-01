export interface BaseActionRequest {
  gasLimit?: string | undefined;
  gasPrice?: string | undefined;
}

export interface Transfer extends BaseActionRequest {
  amount: string;
  recipient: string;
  payload: string;
}

export interface Execution extends BaseActionRequest {
  // Execution contract
  contract: string;

  // Execution amount
  amount: string;

  // Execution data
  data: Buffer;
}

export interface ClaimFromRewardingFund extends BaseActionRequest {
  amount: string;
  data: Buffer | {};
}

export interface StakeCreate extends BaseActionRequest {
  candidateName: string;
  stakedAmount: string;
  stakedDuration: number;
  autoStake: boolean;
  payload: string;
}

export interface StakeUnstake extends BaseActionRequest {
  bucketIndex: number;
  payload: string;
}

export interface StakeWithdraw extends BaseActionRequest {
  bucketIndex: number;
  payload: string;
}

export interface StakeAddDeposit extends BaseActionRequest {
  bucketIndex: number;
  amount: string;
  payload: string;
}

export interface StakeRestake extends BaseActionRequest {
  bucketIndex: number;
  stakedDuration: number;
  autoStake: boolean;
  payload: string;
}

export interface StakeChangeCandidate extends BaseActionRequest {
  bucketIndex: number;
  candidateName: string;
  payload: string;
}

export interface StakeTransferOwnership extends BaseActionRequest {
  bucketIndex: number;
  voterAddress: string;
  payload: string;
}

export interface CandidateRegister extends BaseActionRequest {
  // CandidateBasicInfo
  name: string;
  operatorAddress: string;
  rewardAddress: string;

  stakedAmount: string;
  stakedDuration: number;
  autoStake: boolean;
  ownerAddress: string;
  payload: string;
}

export interface CandidateUpdate extends BaseActionRequest {
  name: string;
  operatorAddress: string;
  rewardAddress: string;
}

export enum ActionErrorCode {
  ErrExistedAction,
  ErrBalance,
  ErrNonce,
  ErrAddress,
  ErrGasPrice,
  ErrUnknown
}

export class ActionError extends Error {
  public code: ActionErrorCode;

  constructor(code: ActionErrorCode, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, ActionError.prototype);
  }
}
