"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const randombytes_1 = __importDefault(require("randombytes"));
// @ts-ignore
const scrypt_js_1 = __importDefault(require("scrypt.js"));
const v4_1 = __importDefault(require("uuid/v4"));
const address_1 = require("../crypto/address");
const crypto_2 = require("../crypto/crypto");
const hash_1 = require("../crypto/hash");
function runCipherBuffer(cipher, data) {
  return Buffer.concat([cipher.update(data), cipher.final()]);
}
class Wallet {
  constructor() {
    this.accounts = new Map();
  }
  add(account) {
    if (account) {
      this.accounts.set(account.address, account);
    }
  }
  get(address) {
    return this.accounts.get(address);
  }
  remove(address) {
    this.accounts.delete(address);
  }
}
exports.default = Wallet;
// ported from ethereumjs-wallet
function encrypt(privateKey, password, opts = {}) {
  const account = crypto_2.privateKeyToAccount(privateKey);
  const salt = opts.salt || randombytes_1.default(32);
  const iv = opts.iv || randombytes_1.default(16);
  let derivedKey;
  const kdf = opts.kdf || "scrypt";
  const kdfparams = {
    dklen: opts.dklen || 32,
    salt: salt.toString("hex")
  };
  if (kdf === "pbkdf2") {
    kdfparams.c = opts.c || 262144;
    kdfparams.prf = "hmac-sha256";
    derivedKey = crypto_1.default.pbkdf2Sync(
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
    derivedKey = scrypt_js_1.default(
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
  const cipher = crypto_1.default.createCipheriv(
    opts.cipher || "aes-128-ctr",
    derivedKey.slice(0, 16),
    iv
  );
  if (!cipher) {
    throw new Error("Unsupported cipher");
  }
  const ciphertext = runCipherBuffer(cipher, Buffer.from(privateKey, "hex"));
  const mac = hash_1.hash256b(
    Buffer.concat([derivedKey.slice(16, 32), ciphertext])
  );
  return {
    version: 3,
    // @ts-ignore
    id: v4_1.default({ random: opts.uuid || randombytes_1.default(16) }),
    address: String(address_1.fromString(account.address).stringEth()).replace(
      /^0x/,
      ""
    ),
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
exports.encrypt = encrypt;
// ported from ethereumjs-wallet
function decrypt(privateKey, password) {
  let derivedKey;
  let kdfparams;
  if (privateKey.crypto.kdf === "scrypt") {
    kdfparams = privateKey.crypto.kdfparams;
    // FIXME: support progress reporting callback
    derivedKey = scrypt_js_1.default(
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
    derivedKey = crypto_1.default.pbkdf2Sync(
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
  const mac = hash_1.hash256b(
    Buffer.concat([derivedKey.slice(16, 32), ciphertext])
  );
  if (mac.toString("hex") !== privateKey.crypto.mac) {
    throw new Error("Key derivation failed - possibly wrong passphrase");
  }
  const decipher = crypto_1.default.createDecipheriv(
    privateKey.crypto.cipher,
    derivedKey.slice(0, 16),
    Buffer.from(privateKey.crypto.cipherparams.iv, "hex")
  );
  const seed = runCipherBuffer(decipher, ciphertext);
  return crypto_2.privateKeyToAccount(seed.toString("hex"));
}
exports.decrypt = decrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjY291bnQvd2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQWtEO0FBQ2xELDhEQUFzQztBQUN0QyxhQUFhO0FBQ2IsMERBQWlDO0FBQ2pDLGlEQUE2QjtBQUM3QiwrQ0FBK0M7QUFDL0MsNkNBQXVEO0FBQ3ZELHlDQUEwQztBQWlDMUMsU0FBUyxlQUFlLENBQ3RCLE1BQXlCLEVBQ3pCLElBQW1CO0lBRW5CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBZUQsTUFBcUIsTUFBTTtJQUd6QjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sR0FBRyxDQUFDLE9BQWlCO1FBQzFCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTSxHQUFHLENBQUMsT0FBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUFwQkQseUJBb0JDO0FBRUQsZ0NBQWdDO0FBQ2hDLFNBQWdCLE9BQU8sQ0FDckIsVUFBa0IsRUFDbEIsUUFBZ0IsRUFDaEIsT0FBdUIsRUFBRTtJQUV6QixNQUFNLE9BQU8sR0FBRyw0QkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVoRCxNQUFNLElB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
