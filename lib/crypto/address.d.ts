export interface IAddress {
  string(): string;
  stringEth(): string;
  bytes(): Uint8Array;
}
export declare function fromBytes(bytes: Uint8Array): IAddress;
export declare function fromString(addrStr: string): IAddress;
