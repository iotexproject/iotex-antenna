"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const api_grpc_web_pb_1 = __importDefault(
  require("../../protogen/proto/api/api_grpc_web_pb")
);
const types_1 = require("./types");
const types_2 = require("./types");
class RpcMethod {
  constructor(hostname, options = {}) {
    this.client = new api_grpc_web_pb_1.default.APIServicePromiseClient(
      hostname,
      null,
      null
    );
    this.timeout = options.timeout || 300000;
  }
  setProvider(provider) {
    if (typeof provider === "string") {
      this.client = new api_grpc_web_pb_1.default.APIServicePromiseClient(
        provider,
        null,
        null
      );
    } else {
      const origin = provider;
      this.client = origin.client;
    }
  }
  getDeadline() {
    return `${new Date(Date.now() + this.timeout).getTime()}`;
  }
  async getAccount(req) {
    const pbReq = types_2.GetAccountRequest.to(req);
    const pbResp = await this.client.getAccount(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.GetAccountRequest.from(pbResp);
  }
  async getBlockMetas(req) {
    const pbReq = types_2.GetBlockMetasRequest.to(req);
    const pbResp = await this.client.getBlockMetas(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.GetBlockMetasRequest.from(pbResp);
  }
  async getChainMeta(req) {
    const pbReq = types_2.GetChainMetaRequest.to(req);
    const pbResp = await this.client.getChainMeta(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.GetChainMetaRequest.from(pbResp);
  }
  async getServerMeta(req) {
    const pbReq = types_1.GetServerMetaRequest.to(req);
    const pbResp = await this.client.getServerMeta(pbReq, {
      deadline: this.getDeadline()
    });
    return types_1.GetServerMetaRequest.from(pbResp);
  }
  async getActions(req) {
    const pbReq = types_2.GetActionsRequest.to(req);
    const pbResp = await this.client.getActions(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.GetActionsRequest.from(pbResp);
  }
  async suggestGasPrice(req) {
    const pbReq = types_2.SuggestGasPriceRequest.to(req);
    const pbResp = await this.client.suggestGasPrice(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.SuggestGasPriceRequest.from(pbResp);
  }
  async estimateGasForAction(req) {
    const pbReq = types_2.EstimateGasForActionRequest.to(req);
    const pbResp = await this.client.estimateGasForAction(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.EstimateGasForActionRequest.from(pbResp);
  }
  async readState(req) {
    const pbReq = types_1.ReadStateRequest.to(req);
    const pbResp = await this.client.readState(pbReq, {
      deadline: this.getDeadline()
    });
    return types_1.ReadStateRequest.from(pbResp);
  }
  async readContract(req) {
    const pbReq = types_2.ReadContractRequest.to(req);
    const pbResp = await this.client.readContract(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.ReadContractRequest.from(pbResp);
  }
  async sendAction(req) {
    const pbReq = types_2.SendActionRequest.to(req);
    const pbResp = await this.client.sendAction(pbReq, {
      deadline: this.getDeadline()
    });
    return types_1.SendActionResponse.from(pbResp);
  }
  async getReceiptByAction(req) {
    const pbReq = types_2.GetReceiptByActionRequest.to(req);
    const pbResp = await this.client.getReceiptByAction(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.GetReceiptByActionRequest.from(pbResp);
  }
  async getEpochMeta(req) {
    const pbReq = types_2.GetEpochMetaRequest.to(req);
    const pbResp = await this.client.getEpochMeta(pbReq, {
      deadline: this.getDeadline()
    });
    return types_2.GetEpochMetaRequest.from(pbResp);
  }
}
exports.default = RpcMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1ycGMtbWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JwYy1tZXRob2QvYnJvd3Nlci1ycGMtbWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0ZBQStEO0FBQy9ELG1DQTZCaUI7QUFFakIsbUNBV2lCO0FBTWpCLE1BQXFCLFNBQVM7SUFJNUIsWUFBWSxRQUFnQixFQUFFLFVBQWdCLEVBQUU7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlCQUFPLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFFTSxXQUFXLENBQUMsUUFBNkI7UUFDOUMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlCQUFPLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0wsTUFBTSxNQUFNLEdBQUcsUUFBcUIsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFTSxLQUFLLENBQUMsVUFBVSxDQUNyQixHQUF1QjtRQUV2QixNQUFNLEtBQUssR0FBRyx5QkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFVB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
