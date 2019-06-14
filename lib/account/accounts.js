"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-any */
// @ts-ignore
const account_1 = __importDefault(require("eth-lib/lib/account"));
const account_2 = require("./account");
const wallet_1 = __importDefault(require("./wallet"));
class Accounts {
  constructor(rpcMethod) {
    this.rpcMethod = rpcMethod;
    this.wallet = new wallet_1.default();
  }
  create(entropy) {
    const acct = account_1.default.create(entropy);
    const privateKey = acct.privateKey.substr(2);
    const realAccount = account_2.Account.fromPrivateKey(privateKey);
    this.wallet.add(realAccount);
    return realAccount;
  }
  privateKeyToAccount(privateKey) {
    const account = account_2.Account.fromPrivateKey(privateKey);
    this.wallet.add(account);
    return account;
  }
  getAccount(address) {
    return this.wallet.get(address);
  }
  removeAccount(address) {
    return this.wallet.remove(address);
  }
  sign(data, privateKey) {
    return account_2.Account.fromPrivateKey(privateKey).sign(data);
  }
  addressToAccount(address, signer) {
    const account = account_2.Account.fromAddressAndSigner(address, signer);
    this.wallet.add(account);
    return account;
  }
}
exports.Accounts = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudC9hY2NvdW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2Isa0VBQTBDO0FBRzFDLHVDQUFvQztBQUdwQyxzREFBOEI7QUFFOUIsTUFBYSxRQUFRO0lBS25CLFlBQVksU0FBcUI7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQWdCO1FBQzVCLE1BQU0sSUFBSSxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sV0FBVyxHQUFHLGlCQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxVQUFrQjtRQUMzQyxNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWU7UUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sYUFBYSxDQUFDLE9BQWU7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQWtDLEVBQUUsVUFBa0I7UUFDaEUsT0FBTyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLGdCQUFnQixDQUFDLE9BQWUsRUFBRSxNQUFlO1FBQ3RELE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQXpDRCw0QkF5Q0MifQ==
