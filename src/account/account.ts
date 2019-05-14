import { makeSigner, privateKeyToAccount, recover } from "../crypto/crypto";
import { hash256b } from "../crypto/hash";
import { hexToBytes, isHexStrict } from "./utils";

export interface IAccount {
  address: string;
  privateKey: string;
  publicKey: string;

  sign(data: string | Buffer | Uint8Array): Buffer;
  recover(message: string, signature: Buffer, preFixed: boolean): String;
}

export class Account implements IAccount {
  public address: string;
  public privateKey: string;
  public publicKey: string;

  public static fromPrivateKey(privateKey: string): IAccount {
    const obj = privateKeyToAccount(privateKey);
    const act = new Account();
    act.address = obj.address;
    act.privateKey = obj.privateKey;
    act.publicKey = obj.publicKey;
    return act;
  }

  public sign(data: string | Buffer | Uint8Array): Buffer {
    const h = this.hashMessage(data);
    return Buffer.from(
      makeSigner(0)(h.toString("hex"), this.privateKey),
      "hex"
    );
  }

  public recover(
    message: string | Buffer | Uint8Array,
    signature: Buffer,
    preFixed: boolean
  ): String {
    let bytes = message;
    if (!preFixed) {
      bytes = this.hashMessage(message);
    }
    // @ts-ignore
    return recover(bytes, signature);
  }

  private hashMessage(data: string | Buffer | Uint8Array): Buffer {
    let bytes = data;
    if (typeof data === "string" && isHexStrict(data)) {
      bytes = hexToBytes(data);
    }

    // @ts-ignore
    const messageBuffer = Buffer.from(bytes);
    const preamble = `\u0019IoTeX Signed Message:\n${bytes.length}`;
    const preambleBuffer = Buffer.from(preamble);
    const iotexMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return hash256b(iotexMessage);
  }
}
