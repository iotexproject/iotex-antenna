export interface EthAbiDecodeParametersType {
  name: string;
  type: string;
}

export interface ABIDefinition {
  constant?: boolean;
  payable?: boolean;
  stateMutability?: "pure" | "view" | "nonpayable" | "payable" | string;
  anonymous?: boolean;
  inputs?: Array<{ name: string; type: ABIDataTypes; indexed?: boolean }>;
  name?: string;
  outputs?: Array<{ name: string; type: ABIDataTypes }>;
  type: "function" | "constructor" | "event" | "fallback" | string;
}

export type ABIDataTypes = "uint256" | "boolean" | "string" | "bytes" | string;
