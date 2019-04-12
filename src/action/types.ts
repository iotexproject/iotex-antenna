export interface BaseActionRequest {
  gasLimit?: string | undefined;
  gasPrice?: string | undefined;
}

export interface Transfer extends BaseActionRequest {
  amount: string;
  recipient: string;
  payload: string;
}
