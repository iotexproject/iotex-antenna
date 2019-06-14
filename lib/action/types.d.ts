/// <reference types="node" />
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
  contract: string;
  amount: string;
  data: Buffer;
}
export interface ClaimFromRewardingFund extends BaseActionRequest {
  amount: string;
  data: Buffer | {};
}
