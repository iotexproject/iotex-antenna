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
