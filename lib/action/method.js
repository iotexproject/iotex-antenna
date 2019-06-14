"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envelop_1 = require("./envelop");
class AbstractMethod {
  constructor(client, account) {
    this.client = client;
    this.account = account;
  }
  async baseEnvelop(gasLimit, gasPrice) {
    const meta = await this.client.getAccount({
      address: this.account.address
    });
    return new envelop_1.Envelop(
      1,
      // @ts-ignore
      String(meta.accountMeta.pendingNonce),
      gasLimit,
      gasPrice
    );
  }
  async signAction(envelop) {
    if (!envelop.gasPrice) {
      const price = await this.client.suggestGasPrice({});
      envelop.gasPrice = String(price.gasPrice);
    }
    if (!envelop.gasLimit) {
      const selp = await envelop_1.SealedEnvelop.sign(this.account, envelop);
      const limit = await this.client.estimateGasForAction({
        action: selp.action()
      });
      envelop.gasLimit = limit.gas;
    }
    return envelop_1.SealedEnvelop.sign(this.account, envelop);
  }
  async sendAction(envelop) {
    const selp = await this.signAction(envelop);
    await this.client.sendAction({
      action: selp.action()
    });
    return selp.hash();
  }
}
exports.AbstractMethod = AbstractMethod;
class TransferMethod extends AbstractMethod {
  constructor(client, account, transfer) {
    super(client, account);
    this.transfer = transfer;
  }
  async execute() {
    const envelop = await this.baseEnvelop(
      this.transfer.gasLimit,
      this.transfer.gasPrice
    );
    envelop.transfer = {
      amount: this.transfer.amount,
      recipient: this.transfer.recipient,
      payload: Buffer.from(this.transfer.payload, "hex")
    };
    return this.sendAction(envelop);
  }
}
exports.TransferMethod = TransferMethod;
class ExecutionMethod extends AbstractMethod {
  constructor(client, account, execution) {
    super(client, account);
    this.execution = execution;
  }
  async execute() {
    const envelop = await this.baseEnvelop(
      this.execution.gasLimit,
      this.execution.gasPrice
    );
    envelop.execution = {
      amount: this.execution.amount,
      contract: this.execution.contract,
      data: this.execution.data
    };
    return this.sendAction(envelop);
  }
  async sign() {
    const envelop = await this.baseEnvelop(
      this.execution.gasLimit,
      this.execution.gasPrice
    );
    envelop.execution = {
      amount: this.execution.amount,
      contract: this.execution.contract,
      data: this.execution.data
    };
    const selp = await this.signAction(envelop);
    return selp.action();
  }
}
exports.ExecutionMethod = ExecutionMethod;
class ClaimFromRewardingFundMethod extends AbstractMethod {
  constructor(client, account, claim) {
    super(client, account);
    this.claimFronRewardFund = claim;
  }
  async execute() {
    const envelop = await this.baseEnvelop(
      this.claimFronRewardFund.gasLimit,
      this.claimFronRewardFund.gasPrice
    );
    envelop.claimFromRewardingFund = {
      amount: this.claimFronRewardFund.amount,
      data: this.claimFronRewardFund.data
    };
    return this.sendAction(envelop);
  }
  async sign() {
    const envelop = await this.baseEnvelop(
      this.claimFronRewardFund.gasLimit,
      this.claimFronRewardFund.gasPrice
    );
    envelop.claimFromRewardingFund = {
      amount: this.claimFronRewardFund.amount,
      data: this.claimFronRewardFund.data
    };
    const selp = await this.signAction(envelop);
    return selp.action();
  }
}
exports.ClaimFromRewardingFundMethod = ClaimFromRewardingFundMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi9tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx1Q0FBbUQ7QUFHbkQsTUFBYSxjQUFjO0lBSXpCLFlBQVksTUFBa0IsRUFBRSxPQUFnQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVcsQ0FDdEIsUUFBaUIsRUFDakIsUUFBaUI7UUFFakIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN4QyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxpQkFBTyxDQUNoQixDQUFDO1FBQ0QsYUFBYTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUNyQyxRQUFRLEVBQ1IsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3RCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFN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
