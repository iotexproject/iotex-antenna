export interface BaseActionRequest {
  gasLimit?: string | "100000";
  gasPrice?: string;
}

export interface Transfer extends BaseActionRequest {
  amount: string;
  recipient: string;
  payload: string;
}
