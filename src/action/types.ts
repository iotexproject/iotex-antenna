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
