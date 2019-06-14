"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const action_pb_1 = __importDefault(
  require("../../protogen/proto/types/action_pb")
);
const crypto_1 = require("../crypto/crypto");
const hash_1 = require("../crypto/hash");
const types_1 = require("../rpc-method/types");
class Envelop {
  constructor(version, nonce, gasLimit, gasPrice) {
    this.version = version;
    this.nonce = nonce;
    this.gasLimit = gasLimit;
    this.gasPrice = gasPrice;
  }
  core() {
    const gasLimit = this.gasLimit || "0";
    const gasPrice = this.gasPrice || "0";
    const pbActionCore = new action_pb_1.default.ActionCore();
    pbActionCore.setVersion(this.version);
    pbActionCore.setNonce(Number(this.nonce));
    pbActionCore.setGaslimit(Number(gasLimit));
    pbActionCore.setGasprice(gasPrice);
    pbActionCore.setTransfer(types_1.toActionTransfer(this.transfer));
    pbActionCore.setExecution(types_1.toActionExecution(this.execution));
    pbActionCore.setStartsubchain(
      types_1.toActionStartSubChain(this.startSubChain)
    );
    pbActionCore.setStopsubchain(
      types_1.toActionStopSubChain(this.stopSubChain)
    );
    pbActionCore.setPutblock(types_1.toActionPutBlock(this.putBlock));
    pbActionCore.setCreatedeposit(
      types_1.toActionCreateDeposit(this.createDeposit)
    );
    pbActionCore.setSettledeposit(
      types_1.toActionSettleDeposit(this.settleDeposit)
    );
    pbActionCore.setCreateplumchain(
      types_1.toActionCreatePlumChain(this.createPlumChain)
    );
    pbActionCore.setTerminateplumchain(
      types_1.toActionTerminatePlumChain(this.terminatePlumChain)
    );
    pbActionCore.setPlumputblock(
      types_1.toActionPlumPutBlock(this.plumPutBlock)
    );
    pbActionCore.setPlumcreatedeposit(
      types_1.toActionPlumCreateDeposit(this.plumCreateDeposit)
    );
    pbActionCore.setPlumstartexit(
      types_1.toActionPlumStartExit(this.plumStartExit)
    );
    pbActionCore.setPlumchallengeexit(
      types_1.toActionPlumChallengeExit(this.plumChallengeExit)
    );
    pbActionCore.setPlumresponsechallengeexit(
      types_1.toActionPlumResponseChallengeExit(this.plumResponseChallengeExit)
    );
    pbActionCore.setPlumfinalizeexit(
      types_1.toActionPlumFinalizeExit(this.plumFinalizeExit)
    );
    pbActionCore.setPlumsettledeposit(
      types_1.toActionPlumSettleDeposit(this.plumSettleDeposit)
    );
    pbActionCore.setPlumtransfer(
      types_1.toActionPlumTransfer(this.plumTransfer)
    );
    pbActionCore.setDeposittorewardingfund(
      types_1.toActionDepositToRewardingFund(this.depositToRewardingFund)
    );
    pbActionCore.setClaimfromrewardingfund(
      types_1.toActionClaimFromRewardingFund(this.claimFromRewardingFund)
    );
    pbActionCore.setGrantreward(types_1.toActionGrantReward(this.grantReward));
    return pbActionCore;
  }
  bytestream() {
    return this.core().serializeBinary();
  }
}
exports.Envelop = Envelop;
class SealedEnvelop {
  constructor(act, senderPubKey, signature) {
    this.act = act;
    this.senderPubKey = senderPubKey;
    this.signature = signature;
  }
  bytestream() {
    const pbActionCore = this.act.core();
    const pbAction = new action_pb_1.default.Action();
    pbAction.setCore(pbActionCore);
    pbAction.setSenderpubkey(this.senderPubKey);
    pbAction.setSignature(this.signature);
    return pbAction.serializeBinary();
  }
  hash() {
    return Buffer.from(hash_1.hash256b(this.bytestream())).toString("hex");
  }
  action() {
    const gasLimit = this.act.gasLimit || "0";
    const gasPrice = this.act.gasPrice || "0";
    return {
      core: {
        version: this.act.version,
        nonce: this.act.nonce,
        gasLimit: gasLimit,
        gasPrice: gasPrice,
        transfer: this.act.transfer,
        execution: this.act.execution,
        startSubChain: this.act.startSubChain,
        stopSubChain: this.act.stopSubChain,
        putBlock: this.act.putBlock,
        createDeposit: this.act.createDeposit,
        settleDeposit: this.act.settleDeposit,
        createPlumChain: this.act.createPlumChain,
        terminatePlumChain: this.act.terminatePlumChain,
        plumPutBlock: this.act.plumPutBlock,
        plumCreateDeposit: this.act.plumCreateDeposit,
        plumStartExit: this.act.plumStartExit,
        plumChallengeExit: this.act.plumChallengeExit,
        plumResponseChallengeExit: this.act.plumResponseChallengeExit,
        plumFinalizeExit: this.act.plumFinalizeExit,
        plumSettleDeposit: this.act.plumSettleDeposit,
        plumTransfer: this.act.plumTransfer,
        depositToRewardingFund: this.act.depositToRewardingFund,
        claimFromRewardingFund: this.act.claimFromRewardingFund,
        grantReward: this.act.grantReward,
        putPollResult: this.act.putPollResult
      },
      senderPubKey: this.senderPubKey,
      signature: this.signature
    };
  }
  static async sign(account, act) {
    const h = hash_1.hash256b(act.bytestream());
    if (account.signer) {
      const signdData = await account.signer.sign(account.address, h);
      return new SealedEnvelop(
        act,
        Buffer.from(signdData.publicKey, "hex"),
        signdData.data
      );
    } else {
      const sign = Buffer.from(
        crypto_1.makeSigner(0)(h.toString("hex"), account.privateKey),
        "hex"
      );
      return new SealedEnvelop(
        act,
        Buffer.from(account.publicKey, "hex"),
        sign
      );
    }
  }
}
exports.SealedEnvelop = SealedEnvelop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52ZWxvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vZW52ZWxvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFGQUE0RDtBQUU1RCw2Q0FBOEM7QUFDOUMseUNBQTBDO0FBQzFDLCtDQTJDNkI7QUFFN0IsTUFBYSxPQUFPO0lBNkJsQixZQUNFLE9BQWUsRUFDZixLQUFhLEVBQ2IsUUFBaUIsRUFDakIsUUFBaUI7UUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVNLElBQUk7UUFDVCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUN0QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUV0QyxNQUFNLFlBQVksR0FBRyxJQUFJLG1CQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxXQUFXLENBQUMsd0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUQsWUFBWSxDQUFDLFlBQVksQ0FBQyx5QkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMs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
