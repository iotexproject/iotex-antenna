"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("../crypto/crypto");
const hash_1 = require("../crypto/hash");
const utils_1 = require("./utils");
class Account {
  static fromPrivateKey(privateKey) {
    const obj = crypto_1.privateKeyToAccount(privateKey);
    const act = new Account();
    act.address = obj.address;
    act.privateKey = obj.privateKey;
    act.publicKey = obj.publicKey;
    return act;
  }
  static fromAddressAndSigner(address, signer) {
    const act = new Account();
    act.address = address;
    act.signer = signer;
    return act;
  }
  sign(data) {
    if (!this.privateKey) {
      throw new Error("account sign only support local model.");
    }
    const h = this.hashMessage(data);
    return Buffer.from(
      crypto_1.makeSigner(0)(h.toString("hex"), this.privateKey),
      "hex"
    );
  }
  recover(message, signature, preFixed) {
    let bytes = message;
    if (!preFixed) {
      bytes = this.hashMessage(message);
    }
    // @ts-ignore
    return crypto_1.recover(bytes, signature);
  }
  hashMessage(data) {
    let bytes = data;
    if (typeof data === "string" && utils_1.isHexStrict(data)) {
      bytes = utils_1.hexToBytes(data);
    }
    // @ts-ignore
    const messageBuffer = Buffer.from(bytes);
    const preamble = `\u0019IoTeX Signed Message:\n${bytes.length}`;
    const preambleBuffer = Buffer.from(preamble);
    const iotexMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return hash_1.hash256b(iotexMessage);
  }
}
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY2NvdW50L2FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEU7QUFDNUUseUNBQTBDO0FBRTFDLG1DQUFrRDtBQWFsRCxNQUFhLE9BQU87SUFNWCxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQWtCO1FBQzdDLE1BQU0sR0FBRyxHQUFHLDRCQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDOUIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxPQUFlLEVBQ2YsTUFBZTtRQUVmLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDcEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sSUFBSSxDQUFDLElBQWtDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMzRDtRQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixtQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUNqRCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFFTSxPQUFPLENBQ1osT0FBcUMsRUFDckMsU0FBaUIsRUFDakIsUUFBaUI7UUFFakIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztRQUNELGFBQWE7UUFDYixPQUFPLGdCQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxXQUFXLENBQUMsSUFBa0M7UUFDbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakQsS0FBSyxHQUFHLGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFFRCxhQUFhO1FBQ2IsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxNQUFNLFFBQVEsR0FBRyxnQ0FBZ0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hFLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sZUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQTlERCwwQkE4REMifQ==
