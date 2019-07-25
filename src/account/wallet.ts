/* tslint:disable:no-any */
import crypto, { Cipher, Decipher } from "crypto";
import randomBytes from "randombytes";
// @ts-ignore
import scryptsy from "scrypt.js";
import uuidv4 from "uuid/v4";
import { fromString } from "../crypto/address";
import { privateKeyToAccount } from "../crypto/crypto";
import { hash256b } from "../crypto/hash";
import { IAccount } from "./account";

type Kdfparams = {
  dklen: number;
  salt: string;

  // scrypt
  n?: number;
  p?: number;
  r?: number;

  // pbkdf2
  c?: number;
  prf?: string;
};

export interface PrivateKey {
  address: string;
  crypto: {
    cipher: string;
    ciphertext: string;
    cipherparams: {
      iv: string;
    };
    kdf: string;
    kdfparams: Kdfparams;
    mac: string;
  };
  id: string;
  version: number;
}

function runCipherBuffer(
  cipher: Cipher | Decipher,
  data: crypto.Binary
): Buffer {
  return Buffer.concat([cipher.update(data), cipher.final()]);
}

type EncryptOptions = {
  cipher?: string;
  salt?: string;
  dklen?: number;
  iv?: string;
  kdf?: string;
  c?: number;
  n?: number;
  r?: number;
  p?: number;
  uuid?: string;
};

export default class Wallet {
  private readonly accounts: {
    [key: string]: IAccount;
    [index: number]: IAccount;
  };
  private accountsIndex: number;

  constructor() {
    this.accounts = {};
    this.accountsIndex = 0;

    return new Proxy(this, {
      get: (target, name: string | number) => {
        if (target.accounts[name]) {
          return target.accounts[name];
        }

        if (name === "length") {
          return target.accountsIndex;
        }

        // @ts-ignore
        return target[name];
      }
    });
  }

  public add(account: IAccount): void {
    if (!this.accounts[account.address]) {
      this.accounts[this.accountsIndex] = account;
      this.accounts[account.address] = account;
      this.accountsIndex++;
    }
  }

  public remove(addressOrIndex: string | number): void {
    const account = this.accounts[addressOrIndex];
    if (account) {
      // @ts-ignore
      delete this.accounts.delete(account.address);
      if (account.address !== addressOrIndex) {
        // @ts-ignore
        delete this.accounts.delete(addressOrIndex);
      }
    }
  }
}

// ported from ethereumjs-wallet
export function encrypt(
  privateKey: string,
  password: string,
  opts: EncryptOptions = {}
): PrivateKey {
  const account = privateKeyToAccount(privateKey);

  const salt = opts.salt || randomBytes(32);
  const iv = opts.iv || randomBytes(16);

  let derivedKey;
  const kdf = opts.kdf || "scrypt";
  const kdfparams: Kdfparams = {
    dklen: opts.dklen || 32,
    salt: salt.toString("hex")
  };

  if (kdf === "pbkdf2") {
    kdfparams.c = opts.c || 262144;
    kdfparams.prf = "hmac-sha256";
    derivedKey = crypto.pbkdf2Sync(
      Buffer.from(password),
      salt,
      kdfparams.c,
      kdfparams.dklen,
      "sha256"
    );
  } else if (kdf === "scrypt") {
    // FIXME: support progress reporting callback
    kdfparams.n = opts.n || 262144;
    kdfparams.r = opts.r || 8;
    kdfparams.p = opts.p || 1;
    derivedKey = scryptsy(
      Buffer.from(password),
      salt,
      kdfparams.n,
      kdfparams.r,
      kdfparams.p,
      kdfparams.dklen
    );
  } else {
    throw new Error("Unsupported kdf");
  }

  const cipher = crypto.createCipheriv(
    opts.cipher || "aes-128-ctr",
    derivedKey.slice(0, 16),
    iv
  );
  if (!cipher) {
    throw new Error("Unsupported cipher");
  }

  const ciphertext = runCipherBuffer(cipher, Buffer.from(privateKey, "hex"));

  const mac = hash256b(Buffer.concat([derivedKey.slice(16, 32), ciphertext]));

  return {
    version: 3,
    // @ts-ignore
    id: uuidv4({ random: opts.uuid || randomBytes(16) }),
    address: String(fromString(account.address).stringEth()).replace(/^0x/, ""),
    crypto: {
      ciphertext: ciphertext.toString("hex"),
      cipherparams: {
        iv: iv.toString("hex")
      },
      cipher: opts.cipher || "aes-128-ctr",
      kdf: kdf,
      kdfparams: kdfparams,
      mac: mac.toString("hex")
    }
  };
}

// ported from ethereumjs-wallet
export function decrypt(
  privateKey: PrivateKey,
  password: string
): { address: string; publicKey: string; privateKey: string } {
  let derivedKey;
  let kdfparams;
  if (privateKey.crypto.kdf === "scrypt") {
    kdfparams = privateKey.crypto.kdfparams;

    // FIXME: support progress reporting callback
    derivedKey = scryptsy(
      Buffer.from(password),
      Buffer.from(kdfparams.salt, "hex"),
      kdfparams.n,
      kdfparams.r,
      kdfparams.p,
      kdfparams.dklen
    );
  } else if (privateKey.crypto.kdf === "pbkdf2") {
    kdfparams = privateKey.crypto.kdfparams;

    if (kdfparams.prf !== "hmac-sha256") {
      throw new Error("Unsupported parameters to PBKDF2");
    }

    derivedKey = crypto.pbkdf2Sync(
      Buffer.from(password),
      Buffer.from(kdfparams.salt, "hex"),
      kdfparams.c || 0,
      kdfparams.dklen,
      "sha256"
    );
  } else {
    throw new Error("Unsupported key derivation scheme");
  }

  const ciphertext = Buffer.from(privateKey.crypto.ciphertext, "hex");

  const mac = hash256b(Buffer.concat([derivedKey.slice(16, 32), ciphertext]));
  if (mac.toString("hex") !== privateKey.crypto.mac) {
    throw new Error("Key derivation failed - possibly wrong passphrase");
  }

  const decipher = crypto.createDecipheriv(
    privateKey.crypto.cipher,
    derivedKey.slice(0, 16),
    Buffer.from(privateKey.crypto.cipherparams.iv, "hex")
  );
  const seed = runCipherBuffer(decipher, ciphertext);

  return privateKeyToAccount(seed.toString("hex"));
}
