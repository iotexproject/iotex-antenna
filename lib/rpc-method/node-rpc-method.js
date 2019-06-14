"use strict";
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const protoLoader = __importStar(require("@grpc/proto-loader"));
const grpc_1 = __importDefault(require("grpc"));
const util_1 = require("util");
const root_certs_1 = require("./root-certs");
const packageDefinition = protoLoader.loadSync(
  `${__dirname}/../../proto/api/api.proto`,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [`${__dirname}/../../`]
  }
);
const iotexapi = grpc_1.default.loadPackageDefinition(packageDefinition)
  .iotexapi;
class RpcMethod {
  constructor(hostname, options = {}) {
    const normalizedHostname = String(hostname).replace(
      /^(http:\/\/|https:\/\/)/,
      ""
    );
    this.credentials =
      options && options.enableSsl
        ? grpc_1.default.credentials.createSsl(
            Buffer.from(root_certs_1.ROOT_CERTS)
          )
        : grpc_1.default.credentials.createInsecure();
    // @ts-ignore
    this.client = new iotexapi.APIService(
      normalizedHostname,
      this.credentials,
      null
    );
    this.timeout = options.timeout || 300000;
  }
  setProvider(provider) {
    if (typeof provider === "string") {
      const normalizedHostname = String(provider).replace(
        /^(http:\/\/|https:\/\/)/,
        ""
      );
      // @ts-ignore
      this.client = new iotexapi.APIService(
        normalizedHostname,
        this.credentials,
        null
      );
    } else {
      const origin = provider;
      this.client = origin.client;
    }
  }
  getDeadline() {
    return new Date(Date.now() + this.timeout);
  }
  async getAccount(req) {
    const getAccount = util_1.promisify(
      this.client.getAccount.bind(this.client)
    );
    // @ts-ignore
    return getAccount(req, { deadline: this.getDeadline() });
  }
  async getBlockMetas(req) {
    const getBlockMetas = util_1.promisify(
      this.client.getBlockMetas.bind(this.client)
    );
    // @ts-ignore
    return getBlockMetas(req, { deadline: this.getDeadline() });
  }
  async getChainMeta(req) {
    const getChainMeta = util_1.promisify(
      this.client.getChainMeta.bind(this.client)
    );
    // @ts-ignore
    return getChainMeta(req, { deadline: this.getDeadline() });
  }
  async getServerMeta(req) {
    const getServerMeta = util_1.promisify(
      this.client.getServerMeta.bind(this.client)
    );
    // @ts-ignore
    return getServerMeta(req, { deadline: this.getDeadline() });
  }
  async getActions(req) {
    const getActions = util_1.promisify(
      this.client.getActions.bind(this.client)
    );
    // @ts-ignore
    return getActions(req, { deadline: this.getDeadline() });
  }
  async suggestGasPrice(req) {
    const suggestGasPrice = util_1.promisify(
      this.client.suggestGasPrice.bind(this.client)
    );
    // @ts-ignore
    return suggestGasPrice(req, { deadline: this.getDeadline() });
  }
  async getReceiptByAction(req) {
    const getReceiptByAction = util_1.promisify(
      this.client.getReceiptByAction.bind(this.client)
    );
    // @ts-ignore
    return getReceiptByAction(req, { deadline: this.getDeadline() });
  }
  async readContract(req) {
    const readContract = util_1.promisify(
      this.client.readContract.bind(this.client)
    );
    // @ts-ignore
    return readContract(req, { deadline: this.getDeadline() });
  }
  async sendAction(req) {
    const sendAction = util_1.promisify(
      this.client.sendAction.bind(this.client)
    );
    // @ts-ignore
    return sendAction(req, { deadline: this.getDeadline() });
  }
  async estimateGasForAction(req) {
    const estimateGasForAction = util_1.promisify(
      this.client.estimateGasForAction.bind(this.client)
    );
    // @ts-ignore
    return estimateGasForAction(req, { deadline: this.getDeadline() });
  }
  async readState(req) {
    const readState = util_1.promisify(this.client.readState.bind(this.client));
    // @ts-ignore
    return readState(req, { deadline: this.getDeadline() });
  }
  async getEpochMeta(req) {
    const getEpochMeta = util_1.promisify(
      this.client.getEpochMeta.bind(this.client)
    );
    // @ts-ignore
    return getEpochMeta(req, { deadline: this.getDeadline() });
  }
}
exports.default = RpcMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS1ycGMtbWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JwYy1tZXRob2Qvbm9kZS1ycGMtbWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFrRDtBQUNsRCxnREFBd0I7QUFDeEIsK0JBQWlDO0FBQ2pDLDZDQUEwQztBQTZCMUMsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUM1QyxHQUFHLFNBQVMsNEJBQTRCLEVBQ3hDO0lBQ0UsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsSUFBSTtJQUNaLFdBQVcsRUFBRSxDQUFDLEdBQUcsU0FBUyxTQUFTLENBQUM7Q0FDckMsQ0FDRixDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDO0FBT3hFLE1BQXFCLFNBQVM7SUFLNUIsWUFBWSxRQUFnQixFQUFFLFVBQWdCLEVBQUU7UUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUNqRCx5QkFBeUIsRUFDekIsRUFBRSxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsV0FBVztZQUNkLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUztnQkFDMUIsQ0FBQyxDQUFDLGNBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQVUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QyxhQUFhO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQ25DLGtCQUFrQixFQUNsQixJQUFJLENBQUMsV0FB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
