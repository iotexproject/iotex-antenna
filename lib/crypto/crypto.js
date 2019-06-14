"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const elliptic_1 = __importDefault(require("elliptic"));
// @ts-ignore
const account_1 = require("eth-lib/lib/account");
// @ts-ignore
const bytes_1 = __importDefault(require("eth-lib/lib/bytes"));
const address_1 = require("./address");
const hash_1 = require("./hash");
const secp256k1 = new elliptic_1.default.ec("secp256k1"); // eslint-disable-line
function publicKeyToAddress(publicKey) {
  const key = secp256k1.keyFromPublic(publicKey, "hex");
  const publicKeyBytes = key.getPublic(false, "ByteArray");
  const hashBytes = hash_1.hash160b(publicKeyBytes.slice(1));
  return address_1.fromBytes(hashBytes).string();
}
exports.publicKeyToAddress = publicKeyToAddress;
function privateKeyToAccount(privateKey) {
  const buffer = Buffer.from(privateKey, "hex");
  const ecKey = secp256k1.keyFromPrivate(buffer);
  const publicKey = ecKey.getPublic(false, "hex");
  const publicKeyBytes = ecKey.getPublic(false, "ByteArray");
  const hashBytes = hash_1.hash160b(publicKeyBytes.slice(1));
  const adObj = address_1.fromBytes(hashBytes);
  return {
    address: adObj.string(),
    publicKey,
    privateKey
  };
}
exports.privateKeyToAccount = privateKeyToAccount;
exports.makeSigner = addToV => (hash, privateKey) => {
  const signature = secp256k1
    .keyFromPrivate(Buffer.from(privateKey, "hex"))
    .sign(Buffer.from(hash, "hex"), { canonical: true, pers: undefined });
  const signed = account_1.encodeSignature([
    bytes_1.default.fromNumber(addToV + (signature.recoveryParam || 0)),
    bytes_1.default.pad(
      32,
      bytes_1.default.fromNat(`0x${signature.r.toString(16)}`)
    ),
    bytes_1.default.pad(
      32,
      bytes_1.default.fromNat(`0x${signature.s.toString(16)}`)
    )
  ]);
  return signed.slice(2);
};
exports.recover = (hash, signature) => {
  const vals = account_1.decodeSignature(`0x${signature.toString("hex")}`);
  const vrs = {
    v: bytes_1.default.toNumber(vals[0]),
    r: vals[1].slice(2),
    s: vals[2].slice(2)
  };
  const ecPublicKey = secp256k1.recoverPubKey(
    hash,
    vrs,
    vrs.v < 2 ? vrs.v : 1 - (vrs.v % 2)
  );
  const publicKey = ecPublicKey.encode("hex", false);
  return publicKeyToAddress(publicKey);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NyeXB0by9jcnlwdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsYUFBYTtBQUNiLGlEQUF1RTtBQUN2RSxhQUFhO0FBQ2IsOERBQXNDO0FBRXRDLHVDQUFzQztBQUN0QyxpQ0FBa0M7QUFFbEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUV0RSxTQUFnQixrQkFBa0IsQ0FBQyxTQUFpQjtJQUNsRCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxNQUFNLFNBQVMsR0FBRyxlQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sbUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBTEQsZ0RBS0M7QUFFRCxTQUFnQixtQkFBbUIsQ0FDakMsVUFBa0I7SUFFbEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxNQUFNLFNBQVMsR0FBRyxlQUFRLENBQUMsY0FB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
