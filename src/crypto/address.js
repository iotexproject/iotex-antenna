// @flow
import bech32 from 'bech32';

export interface IAddress {
  string(): string,
  bytes(): Uint8Array,
}

class AddressV1 implements IAddress {
  static ADDRESS_LENGTH = 20;
  static MAINNET_PREFIX = 'io';
  static TESTNET_PREFIX = 'it';

  static prefix(): string {
    // TODO(tian): not sure how to deal with prefix for now
    return this.MAINNET_PREFIX;
  }

  payload: Uint8Array;

  string(): string {
    const grouped = bech32.toWords(this.payload);
    return bech32.encode(AddressV1.prefix(), grouped);
  }

  bytes(): Uint8Array {
    return this.payload;
  }
}

export function fromBytes(bytes: Uint8Array) {
  if (bytes.length !== AddressV1.ADDRESS_LENGTH) {
    throw new Error(`invalid address length in bytes: ${bytes.length}`);
  }
  const addr = new AddressV1();
  addr.payload = bytes;
  return addr;
}

export function fromString(addrStr: string): IAddress {
  const {prefix, words} = bech32.decode(addrStr);
  if (prefix !== AddressV1.prefix()) {
    throw new Error(`hrp ${prefix} and address prefix ${AddressV1.prefix()} don't match`);
  }
  const addr = new AddressV1();
  addr.payload = bech32.fromWords(words);
  return addr;
}
