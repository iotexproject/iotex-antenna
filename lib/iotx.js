"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_1 = require("./account/accounts");
const utils_1 = require("./account/utils");
const method_1 = require("./action/method");
const contract_1 = require("./contract/contract");
const rpc_method_1 = __importDefault(require("./rpc-method"));
class Iotx extends rpc_method_1.default {
  constructor(hostname) {
    super(hostname);
    this.accounts = new accounts_1.Accounts(this);
  }
  currentProvider() {
    return this.client;
  }
  sendTransfer(req) {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }
    const price = req.gasPrice
      ? utils_1.toRau(String(req.gasPrice), "Qev")
      : undefined;
    const payload = req.payload || "";
    return new method_1.TransferMethod(this, sender, {
      gasLimit: req.gasLimit,
      gasPrice: price,
      amount: req.value,
      recipient: req.to,
      payload: payload
    }).execute();
  }
  // return action hash
  deployContract(
    req,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ) {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }
    const price = req.gasPrice
      ? utils_1.toRau(String(req.gasPrice), "Qev")
      : undefined;
    return new contract_1.Contract(JSON.parse(req.abi), undefined, {
      data: req.data,
      provider: this
    }).deploy(sender, args, req.gasLimit, price);
  }
  // return action hash
  executeContract(
    req,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ) {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }
    const price = req.gasPrice
      ? utils_1.toRau(String(req.gasPrice), "Qev")
      : undefined;
    const contract = new contract_1.Contract(
      JSON.parse(req.abi),
      req.contractAddress,
      {
        provider: this
      }
    );
    return contract.methods[req.method](...args, {
      account: sender,
      amount: req.amount,
      gasLimit: req.gasLimit,
      gasPrice: price
    });
  }
  async readContractByMethod(
    req,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ) {
    const contract = new contract_1.Contract(
      JSON.parse(req.abi),
      req.contractAddress,
      {
        provider: this
      }
    );
    const result = await this.readContract({
      execution: contract.pureEncodeMethod("0", req.method, ...args),
      callerAddress: req.from
    });
    return result.data;
  }
  async claimFromRewardingFund(req) {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }
    const price = req.gasPrice
      ? utils_1.toRau(String(req.gasPrice), "Qev")
      : undefined;
    return new method_1.ClaimFromRewardingFundMethod(this, sender, {
      gasLimit: req.gasLimit,
      gasPrice: price,
      amount: req.amount,
      data: req.data
    }).execute();
  }
}
exports.Iotx = Iotx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW90eC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pb3R4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQThDO0FBQzlDLDJDQUF3QztBQUN4Qyw0Q0FBK0U7QUFDL0Usa0RBQStDO0FBQy9DLDhEQUFxQztBQVNyQyxNQUFhLElBQUssU0FBUSxvQkFBUztJQUVqQyxZQUFZLFFBQWdCO1FBQzFCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVNLFlBQVksQ0FBQyxHQUFvQjtRQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxPQUFPLElBQUksdUJBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ3RDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDakIsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHFCQUFxQjtJQUNkLGNBQWMsQ0FDbkIsR0FBb0I7SUFDcEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxHQUFHLElBQUk7UUFFUCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxPQUFPLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUU7WUFDbEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQscUJBQXFCO0lBQ2QsZUFBZSxDQUNwQixHQUEyQjtJQUMzQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLEdBQUcsSUFBSTtRQUVQLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFO1lBQ3RFLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtZQUMzQyxPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxvQkFBb0IsQ0FDL0IsR0FBMkI7SUFDM0IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxHQUFHLElBQUk7UUFFUCxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUN0RSxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQzlELGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLEtBQUssQ0FBQyxzQkFBc0IsQ0FDakMsR0FBa0M7UUFFbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsT0FBTyxJQUFJLHFDQUE0QixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDcEQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1lBQ3RCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtTQUNmLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRjtBQXpHRCxvQkF5R0MifQ==
