import { SignerPlugin } from "../action/method";
import { makeSigner, privateKeyToAccount, recover } from "../crypto/crypto";
import { hash256b } from "../crypto/hash";
import { hexToBytes, isHexStrict } from "./utils";

export interface IAccount {
  address: string;
  privateKey: string;
  publicKey: string;

  sign(data: string | Buffer | Uint8Array): Promise<Buffer>;
  recover(message: string, signature: Buffer, preFixed: boolean): string;
  hashMessage(data: string | Buffer | Uint8Array): Buffer;
}

export class Account implements IAccount {
  public address: string;
  public privateKey: string;
  public publicKey: string;

  public static fromPrivateKey(privateKey: string): IAccount {
    if (privateKey === "") {
      throw new Error("private key can not empty.");
    }
    const obj = privateKeyToAccount(privateKey);
    const act = new Account();
    act.address = obj.address;
    act.privateKey = obj.privateKey;
    act.publicKey = obj.publicKey;
    return act;
  }

  public static fromAddress(address: string): IAccount {
    if (address === "" || address.length !== 41) {
      throw new Error("address illegal.");
    }
    const act = new Account();
    act.address = address;
    return act;
  }

  public async sign(data: string | Buffer | Uint8Array): Promise<Buffer> {
    if (!this.privateKey) {
      throw new Error("account sign only support local model.");
    }
    const h = this.hashMessage(data);
    return Buffer.from(
      makeSigner(0)(h.toString("hex"), this.privateKey),
      "hex"
    );
  }

  public recover(
    message: string | Buffer | Uint8Array,
    signature: Buffer,
    preFixed: boolean = false
  ): string {
    let bytes = message;
    if (!preFixed) {
      bytes = this.hashMessage(message);
    }
    // @ts-ignore
    return recover(bytes, signature);
  }

  public hashMessage(data: string | Buffer | Uint8Array): Buffer {
    let bytes = data;
    if (typeof data === "string" && isHexStrict(data)) {
      bytes = hexToBytes(data);
    }

    // @ts-ignore
    const messageBuffer = Buffer.from(bytes);
    const preamble = `\x16IoTeX Signed Message:\n${bytes.length}`;
    const preambleBuffer = Buffer.from(preamble);
    const iotexMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return hash256b(iotexMessage);
  }
}

export class RemoteAccount extends Account {
  public address: string;
  public privateKey: string;
  public publicKey: string;

  private readonly sp: SignerPlugin;

  constructor(address: string, sp: SignerPlugin) {
    super();
    this.address = address;
    this.sp = sp;
  }

  public async sign(data: string | Buffer | Uint8Array): Promise<Buffer> {
    if (!this.sp.signMessage) {
      return new Buffer("");
    }
    return this.sp.signMessage(data);
  }
}
