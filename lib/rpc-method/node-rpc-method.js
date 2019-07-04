"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var protoLoader = _interopRequireWildcard(require("@grpc/proto-loader"));

var _grpc = _interopRequireDefault(require("grpc"));

var _util = require("util");

var _rootCerts = require("./root-certs");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

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

const iotexapi = _grpc.default.loadPackageDefinition(packageDefinition)
  .iotexapi;

class RpcMethod {
  constructor(hostname, options = {}) {
    _defineProperty(this, "client", void 0);

    _defineProperty(this, "timeout", void 0);

    _defineProperty(this, "credentials", void 0);

    const normalizedHostname = String(hostname).replace(
      /^(http:\/\/|https:\/\/)/,
      ""
    );
    this.credentials =
      options && options.enableSsl
        ? _grpc.default.credentials.createSsl(
            Buffer.from(_rootCerts.ROOT_CERTS)
          )
        : _grpc.default.credentials.createInsecure(); // @ts-ignore

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
      ); // @ts-ignore

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
    const getAccount = (0, _util.promisify)(
      this.client.getAccount.bind(this.client)
    ); // @ts-ignore

    return getAccount(req, {
      deadline: this.getDeadline()
    });
  }

  async getBlockMetas(req) {
    const getBlockMetas = (0, _util.promisify)(
      this.client.getBlockMetas.bind(this.client)
    ); // @ts-ignore

    return getBlockMetas(req, {
      deadline: this.getDeadline()
    });
  }

  async getChainMeta(req) {
    const getChainMeta = (0, _util.promisify)(
      this.client.getChainMeta.bind(this.client)
    ); // @ts-ignore

    return getChainMeta(req, {
      deadline: this.getDeadline()
    });
  }

  async getServerMeta(req) {
    const getServerMeta = (0, _util.promisify)(
      this.client.getServerMeta.bind(this.client)
    ); // @ts-ignore

    return getServerMeta(req, {
      deadline: this.getDeadline()
    });
  }

  async getActions(req) {
    const getActions = (0, _util.promisify)(
      this.client.getActions.bind(this.client)
    ); // @ts-ignore

    return getActions(req, {
      deadline: this.getDeadline()
    });
  }

  async suggestGasPrice(req) {
    const suggestGasPrice = (0, _util.promisify)(
      this.client.suggestGasPrice.bind(this.client)
    ); // @ts-ignore

    return suggestGasPrice(req, {
      deadline: this.getDeadline()
    });
  }

  async getReceiptByAction(req) {
    const getReceiptByAction = (0, _util.promisify)(
      this.client.getReceiptByAction.bind(this.client)
    ); // @ts-ignore

    return getReceiptByAction(req, {
      deadline: this.getDeadline()
    });
  }

  async readContract(req) {
    const readContract = (0, _util.promisify)(
      this.client.readContract.bind(this.client)
    ); // @ts-ignore

    return readContract(req, {
      deadline: this.getDeadline()
    });
  }

  async sendAction(req) {
    const sendAction = (0, _util.promisify)(
      this.client.sendAction.bind(this.client)
    ); // @ts-ignore

    return sendAction(req, {
      deadline: this.getDeadline()
    });
  }

  async estimateGasForAction(req) {
    const estimateGasForAction = (0, _util.promisify)(
      this.client.estimateGasForAction.bind(this.client)
    ); // @ts-ignore

    return estimateGasForAction(req, {
      deadline: this.getDeadline()
    });
  }

  async readState(req) {
    const readState = (0, _util.promisify)(
      this.client.readState.bind(this.client)
    ); // @ts-ignore

    return readState(req, {
      deadline: this.getDeadline()
    });
  }

  async getEpochMeta(req) {
    const getEpochMeta = (0, _util.promisify)(
      this.client.getEpochMeta.bind(this.client)
    ); // @ts-ignore

    return getEpochMeta(req, {
      deadline: this.getDeadline()
    });
  }
}

exports.default = RpcMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ycGMtbWV0aG9kL25vZGUtcnBjLW1ldGhvZC50cyJdLCJuYW1lcyI6WyJwYWNrYWdlRGVmaW5pdGlvbiIsInByb3RvTG9hZGVyIiwibG9hZFN5bmMiLCJfX2Rpcm5hbWUiLCJrZWVwQ2FzZSIsImxvbmdzIiwiU3RyaW5nIiwiZW51bXMiLCJkZWZhdWx0cyIsIm9uZW9mcyIsImluY2x1ZGVEaXJzIiwiaW90ZXhhcGkiLCJncnBjIiwibG9hZFBhY2thZ2VEZWZpbml0aW9uIiwiUnBjTWV0aG9kIiwiY29uc3RydWN0b3IiLCJob3N0bmFtZSIsIm9wdGlvbnMiLCJub3JtYWxpemVkSG9zdG5hbWUiLCJyZXBsYWNlIiwiY3JlZGVudGlhbHMiLCJlbmFibGVTc2wiLCJjcmVhdGVTc2wiLCJCdWZmZXIiLCJmcm9tIiwiUk9PVF9DRVJUUyIsImNyZWF0ZUluc2VjdXJlIiwiY2xpZW50IiwiQVBJU2VydmljZSIsInRpbWVvdXQiLCJzZXRQcm92aWRlciIsInByb3ZpZGVyIiwib3JpZ2luIiwiZ2V0RGVhZGxpbmUiLCJEYXRlIiwibm93IiwiZ2V0QWNjb3VudCIsInJlcSIsImJpbmQiLCJkZWFkbGluZSIsImdldEJsb2NrTWV0YXMiLCJnZXRDaGFpbk1ldGEiLCJnZXRTZXJ2ZXJNZXRhIiwiZ2V0QWN0aW9ucyIsInN1Z2dlc3RHYXNQcmljZSIsImdldFJlY2VpcHRCeUFjdGlvbiIsInJlYWRDb250cmFjdCIsInNlbmRBY3Rpb24iLCJlc3RpbWF0ZUdhc0ZvckFjdGlvbiIsInJlYWRTdGF0ZSIsImdldEVwb2NoTWV0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQTZCQSxNQUFNQSxpQkFBaUIsR0FBR0MsV0FBVyxDQUFDQyxRQUFaLENBQ3ZCLEdBQUVDLFNBQVUsNEJBRFcsRUFFeEI7QUFDRUMsRUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsRUFBQUEsS0FBSyxFQUFFQyxNQUZUO0FBR0VDLEVBQUFBLEtBQUssRUFBRUQsTUFIVDtBQUlFRSxFQUFBQSxRQUFRLEVBQUUsSUFKWjtBQUtFQyxFQUFBQSxNQUFNLEVBQUUsSUFMVjtBQU1FQyxFQUFBQSxXQUFXLEVBQUUsQ0FBRSxHQUFFUCxTQUFVLFNBQWQ7QUFOZixDQUZ3QixDQUExQjs7QUFXQSxNQUFNUSxRQUFRLEdBQUdDLGNBQUtDLHFCQUFMLENBQTJCYixpQkFBM0IsRUFBOENXLFFBQS9EOztBQU9lLE1BQU1HLFNBQU4sQ0FBc0M7QUFLbkRDLEVBQUFBLFdBQVcsQ0FBQ0MsUUFBRCxFQUFtQkMsT0FBYSxHQUFHLEVBQW5DLEVBQXVDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2hELFVBQU1DLGtCQUFrQixHQUFHWixNQUFNLENBQUNVLFFBQUQsQ0FBTixDQUFpQkcsT0FBakIsQ0FDekIseUJBRHlCLEVBRXpCLEVBRnlCLENBQTNCO0FBSUEsU0FBS0MsV0FBTCxHQUNFSCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ksU0FBbkIsR0FDSVQsY0FBS1EsV0FBTCxDQUFpQkUsU0FBakIsQ0FBMkJDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxxQkFBWixDQUEzQixDQURKLEdBRUliLGNBQUtRLFdBQUwsQ0FBaUJNLGNBQWpCLEVBSE4sQ0FMZ0QsQ0FTaEQ7O0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUloQixRQUFRLENBQUNpQixVQUFiLENBQ1pWLGtCQURZLEVBRVosS0FBS0UsV0FGTyxFQUdaLElBSFksQ0FBZDtBQUtBLFNBQUtTLE9BQUwsR0FBZVosT0FBTyxDQUFDWSxPQUFSLElBQW1CLE1BQWxDO0FBQ0Q7O0FBRU1DLEVBQUFBLFdBQVAsQ0FBbUJDLFFBQW5CLEVBQXdEO0FBQ3RELFFBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxZQUFNYixrQkFBa0IsR0FBR1osTUFBTSxDQUFDeUIsUUFBRCxDQUFOLENBQWlCWixPQUFqQixDQUN6Qix5QkFEeUIsRUFFekIsRUFGeUIsQ0FBM0IsQ0FEZ0MsQ0FLaEM7O0FBQ0EsV0FBS1EsTUFBTCxHQUFjLElBQUloQixRQUFRLENBQUNpQixVQUFiLENBQ1pWLGtCQURZLEVBRVosS0FBS0UsV0FGTyxFQUdaLElBSFksQ0FBZDtBQUtELEtBWEQsTUFXTztBQUNMLFlBQU1ZLE1BQU0sR0FBR0QsUUFBZjtBQUNBLFdBQUtKLE1BQUwsR0FBY0ssTUFBTSxDQUFDTCxNQUFyQjtBQUNEO0FBQ0Y7O0FBRU1NLEVBQUFBLFdBQVAsR0FBMkI7QUFDekIsV0FBTyxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUtOLE9BQTNCLENBQVA7QUFDRDs7QUFFRCxRQUFhTyxVQUFiLENBQ0VDLEdBREYsRUFFZ0M7QUFDOUIsVUFBTUQsVUFBVSxHQUFHLHFCQUFVLEtBQUtULE1BQUwsQ0FBWVMsVUFBWixDQUF1QkUsSUFBdkIsQ0FBNEIsS0FBS1gsTUFBakMsQ0FBVixDQUFuQixDQUQ4QixDQUU5Qjs7QUFDQSxXQUFPUyxVQUFVLENBQUNDLEdBQUQsRUFBTTtBQUFFRSxNQUFBQSxRQUFRLEVBQUUsS0FBS04sV0FBTDtBQUFaLEtBQU4sQ0FBakI7QUFDRDs7QUFFRCxRQUFhTyxhQUFiLENBQ0VILEdBREYsRUFFbUM7QUFDakMsVUFBTUcsYUFBYSxHQUFHLHFCQUNwQixLQUFLYixNQUFMLENBQVlhLGFBQVosQ0FBMEJGLElBQTFCLENBQStCLEtBQUtYLE1BQXBDLENBRG9CLENBQXRCLENBRGlDLENBSWpDOztBQUNBLFdBQU9hLGFBQWEsQ0FBQ0gsR0FBRCxFQUFNO0FBQUVFLE1BQUFBLFFBQVEsRUFBRSxLQUFLTixXQUFMO0FBQVosS0FBTixDQUFwQjtBQUNEOztBQUVELFFBQWFRLFlBQWIsQ0FDRUosR0FERixFQUVrQztBQUNoQyxVQUFNSSxZQUFZLEdBQUcscUJBQVUsS0FBS2QsTUFBTCxDQUFZYyxZQUFaLENBQXlCSCxJQUF6QixDQUE4QixLQUFLWCxNQUFuQyxDQUFWLENBQXJCLENBRGdDLENBRWhDOztBQUNBLFdBQU9jLFlBQVksQ0FBQ0osR0FBRCxFQUFNO0FBQUVFLE1BQUFBLFFBQVEsRUFBRSxLQUFLTixXQUFMO0FBQVosS0FBTixDQUFuQjtBQUNEOztBQUVELFFBQWFTLGFBQWIsQ0FDRUwsR0FERixFQUVtQztBQUNqQyxVQUFNSyxhQUFhLEdBQUcscUJBQ3BCLEtBQUtmLE1BQUwsQ0FBWWUsYUFBWixDQUEwQkosSUFBMUIsQ0FBK0IsS0FBS1gsTUFBcEMsQ0FEb0IsQ0FBdEIsQ0FEaUMsQ0FJakM7O0FBQ0EsV0FBT2UsYUFBYSxDQUFDTCxHQUFELEVBQU07QUFBRUUsTUFBQUEsUUFBUSxFQUFFLEtBQUtOLFdBQUw7QUFBWixLQUFOLENBQXBCO0FBQ0Q7O0FBRUQsUUFBYVUsVUFBYixDQUNFTixHQURGLEVBRWdDO0FBQzlCLFVBQU1NLFVBQVUsR0FBRyxxQkFBVSxLQUFLaEIsTUFBTCxDQUFZZ0IsVUFBWixDQUF1QkwsSUFBdkIsQ0FBNEIsS0FBS1gsTUFBakMsQ0FBVixDQUFuQixDQUQ4QixDQUU5Qjs7QUFDQSxXQUFPZ0IsVUFBVSxDQUFDTixHQUFELEVBQU07QUFBRUUsTUFBQUEsUUFBUSxFQUFFLEtBQUtOLFdBQUw7QUFBWixLQUFOLENBQWpCO0FBQ0Q7O0FBRUQsUUFBYVcsZUFBYixDQUNFUCxHQURGLEVBRXFDO0FBQ25DLFVBQU1PLGVBQWUsR0FBRyxxQkFDdEIsS0FBS2pCLE1BQUwsQ0FBWWlCLGVBQVosQ0FBNEJOLElBQTVCLENBQWlDLEtBQUtYLE1BQXRDLENBRHNCLENBQXhCLENBRG1DLENBSW5DOztBQUNBLFdBQU9pQixlQUFlLENBQUNQLEdBQUQsRUFBTTtBQUFFRSxNQUFBQSxRQUFRLEVBQUUsS0FBS04sV0FBTDtBQUFaLEtBQU4sQ0FBdEI7QUFDRDs7QUFFRCxRQUFhWSxrQkFBYixDQUNFUixHQURGLEVBRXdDO0FBQ3RDLFVBQU1RLGtCQUFrQixHQUFHLHFCQUN6QixLQUFLbEIsTUFBTCxDQUFZa0Isa0JBQVosQ0FBK0JQLElBQS9CLENBQW9DLEtBQUtYLE1BQXpDLENBRHlCLENBQTNCLENBRHNDLENBSXRDOztBQUNBLFdBQU9rQixrQkFBa0IsQ0FBQ1IsR0FBRCxFQUFNO0FBQUVFLE1BQUFBLFFBQVEsRUFBRSxLQUFLTixXQUFMO0FBQVosS0FBTixDQUF6QjtBQUNEOztBQUVELFFBQWFhLFlBQWIsQ0FDRVQsR0FERixFQUVrQztBQUNoQyxVQUFNUyxZQUFZLEdBQUcscUJBQVUsS0FBS25CLE1BQUwsQ0FBWW1CLFlBQVosQ0FBeUJSLElBQXpCLENBQThCLEtBQUtYLE1BQW5DLENBQVYsQ0FBckIsQ0FEZ0MsQ0FFaEM7O0FBQ0EsV0FBT21CLFlBQVksQ0FBQ1QsR0FBRCxFQUFNO0FBQUVFLE1BQUFBLFFBQVEsRUFBRSxLQUFLTixXQUFMO0FBQVosS0FBTixDQUFuQjtBQUNEOztBQUVELFFBQWFjLFVBQWIsQ0FDRVYsR0FERixFQUVnQztBQUM5QixVQUFNVSxVQUFVLEdBQUcscUJBQVUsS0FBS3BCLE1BQUwsQ0FBWW9CLFVBQVosQ0FBdUJULElBQXZCLENBQTRCLEtBQUtYLE1BQWpDLENBQVYsQ0FBbkIsQ0FEOEIsQ0FFOUI7O0FBQ0EsV0FBT29CLFVBQVUsQ0FBQ1YsR0FBRCxFQUFNO0FBQUVFLE1BQUFBLFFBQVEsRUFBRSxLQUFLTixXQUFMO0FBQVosS0FBTixDQUFqQjtBQUNEOztBQUVELFFBQWFlLG9CQUFiLENBQ0VYLEdBREYsRUFFMEM7QUFDeEMsVUFBTVcsb0JBQW9CLEdBQUcscUJBQzNCLEtBQUtyQixNQUFMLENBQVlxQixvQkFBWixDQUFpQ1YsSUFBakMsQ0FBc0MsS0FBS1gsTUFBM0MsQ0FEMkIsQ0FBN0IsQ0FEd0MsQ0FJeEM7O0FBQ0EsV0FBT3FCLG9CQUFvQixDQUFDWCxHQUFELEVBQU07QUFBRUUsTUFBQUEsUUFBUSxFQUFFLEtBQUtOLFdBQUw7QUFBWixLQUFOLENBQTNCO0FBQ0Q7O0FBRUQsUUFBYWdCLFNBQWIsQ0FBdUJaLEdBQXZCLEVBQTRFO0FBQzFFLFVBQU1ZLFNBQVMsR0FBRyxxQkFBVSxLQUFLdEIsTUFBTCxDQUFZc0IsU0FBWixDQUFzQlgsSUFBdEIsQ0FBMkIsS0FBS1gsTUFBaEMsQ0FBVixDQUFsQixDQUQwRSxDQUUxRTs7QUFDQSxXQUFPc0IsU0FBUyxDQUFDWixHQUFELEVBQU07QUFBRUUsTUFBQUEsUUFBUSxFQUFFLEtBQUtOLFdBQUw7QUFBWixLQUFOLENBQWhCO0FBQ0Q7O0FBRUQsUUFBYWlCLFlBQWIsQ0FDRWIsR0FERixFQUVrQztBQUNoQyxVQUFNYSxZQUFZLEdBQUcscUJBQVUsS0FBS3ZCLE1BQUwsQ0FBWXVCLFlBQVosQ0FBeUJaLElBQXpCLENBQThCLEtBQUtYLE1BQW5DLENBQVYsQ0FBckIsQ0FEZ0MsQ0FFaEM7O0FBQ0EsV0FBT3VCLFlBQVksQ0FBQ2IsR0FBRCxFQUFNO0FBQUVFLE1BQUFBLFFBQVEsRUFBRSxLQUFLTixXQUFMO0FBQVosS0FBTixDQUFuQjtBQUNEOztBQW5Ka0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcm90b0xvYWRlciBmcm9tIFwiQGdycGMvcHJvdG8tbG9hZGVyXCI7XG5pbXBvcnQgZ3JwYyBmcm9tIFwiZ3JwY1wiO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7IFJPT1RfQ0VSVFMgfSBmcm9tIFwiLi9yb290LWNlcnRzXCI7XG5pbXBvcnQge1xuICBJRXN0aW1hdGVHYXNGb3JBY3Rpb25SZXF1ZXN0LFxuICBJRXN0aW1hdGVHYXNGb3JBY3Rpb25SZXNwb25zZSxcbiAgSUdldEFjY291bnRSZXF1ZXN0LFxuICBJR2V0QWNjb3VudFJlc3BvbnNlLFxuICBJR2V0QWN0aW9uc1JlcXVlc3QsXG4gIElHZXRBY3Rpb25zUmVzcG9uc2UsXG4gIElHZXRCbG9ja01ldGFzUmVxdWVzdCxcbiAgSUdldEJsb2NrTWV0YXNSZXNwb25zZSxcbiAgSUdldENoYWluTWV0YVJlcXVlc3QsXG4gIElHZXRDaGFpbk1ldGFSZXNwb25zZSxcbiAgSUdldEVwb2NoTWV0YVJlcXVlc3QsXG4gIElHZXRFcG9jaE1ldGFSZXNwb25zZSxcbiAgSUdldFJlY2VpcHRCeUFjdGlvblJlcXVlc3QsXG4gIElHZXRSZWNlaXB0QnlBY3Rpb25SZXNwb25zZSxcbiAgSUdldFNlcnZlck1ldGFSZXF1ZXN0LFxuICBJR2V0U2VydmVyTWV0YVJlc3BvbnNlLFxuICBJUmVhZENvbnRyYWN0UmVxdWVzdCxcbiAgSVJlYWRDb250cmFjdFJlc3BvbnNlLFxuICBJUmVhZFN0YXRlUmVxdWVzdCxcbiAgSVJlYWRTdGF0ZVJlc3BvbnNlLFxuICBJUnBjTWV0aG9kLFxuICBJU2VuZEFjdGlvblJlcXVlc3QsXG4gIElTZW5kQWN0aW9uUmVzcG9uc2UsXG4gIElTdWdnZXN0R2FzUHJpY2VSZXF1ZXN0LFxuICBJU3VnZ2VzdEdhc1ByaWNlUmVzcG9uc2Vcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgcGFja2FnZURlZmluaXRpb24gPSBwcm90b0xvYWRlci5sb2FkU3luYyhcbiAgYCR7X19kaXJuYW1lfS8uLi8uLi9wcm90by9hcGkvYXBpLnByb3RvYCxcbiAge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBTdHJpbmcsXG4gICAgZW51bXM6IFN0cmluZyxcbiAgICBkZWZhdWx0czogdHJ1ZSxcbiAgICBvbmVvZnM6IHRydWUsXG4gICAgaW5jbHVkZURpcnM6IFtgJHtfX2Rpcm5hbWV9Ly4uLy4uL2BdXG4gIH1cbik7XG5jb25zdCBpb3RleGFwaSA9IGdycGMubG9hZFBhY2thZ2VEZWZpbml0aW9uKHBhY2thZ2VEZWZpbml0aW9uKS5pb3RleGFwaTtcblxudHlwZSBPcHRzID0ge1xuICB0aW1lb3V0PzogbnVtYmVyO1xuICBlbmFibGVTc2w/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBjTWV0aG9kIGltcGxlbWVudHMgSVJwY01ldGhvZCB7XG4gIHB1YmxpYyBjbGllbnQ6IElScGNNZXRob2Q7XG4gIHB1YmxpYyB0aW1lb3V0OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgY3JlZGVudGlhbHM6IGdycGMuQ2hhbm5lbENyZWRlbnRpYWxzO1xuXG4gIGNvbnN0cnVjdG9yKGhvc3RuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IE9wdHMgPSB7fSkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRIb3N0bmFtZSA9IFN0cmluZyhob3N0bmFtZSkucmVwbGFjZShcbiAgICAgIC9eKGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLykvLFxuICAgICAgXCJcIlxuICAgICk7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9XG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMuZW5hYmxlU3NsXG4gICAgICAgID8gZ3JwYy5jcmVkZW50aWFscy5jcmVhdGVTc2woQnVmZmVyLmZyb20oUk9PVF9DRVJUUykpXG4gICAgICAgIDogZ3JwYy5jcmVkZW50aWFscy5jcmVhdGVJbnNlY3VyZSgpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBpb3RleGFwaS5BUElTZXJ2aWNlKFxuICAgICAgbm9ybWFsaXplZEhvc3RuYW1lLFxuICAgICAgdGhpcy5jcmVkZW50aWFscyxcbiAgICAgIG51bGxcbiAgICApO1xuICAgIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAzMDAwMDA7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvdmlkZXIocHJvdmlkZXI6IHN0cmluZyB8IElScGNNZXRob2QpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHByb3ZpZGVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkSG9zdG5hbWUgPSBTdHJpbmcocHJvdmlkZXIpLnJlcGxhY2UoXG4gICAgICAgIC9eKGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLykvLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5jbGllbnQgPSBuZXcgaW90ZXhhcGkuQVBJU2VydmljZShcbiAgICAgICAgbm9ybWFsaXplZEhvc3RuYW1lLFxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzLFxuICAgICAgICBudWxsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBwcm92aWRlciBhcyBScGNNZXRob2Q7XG4gICAgICB0aGlzLmNsaWVudCA9IG9yaWdpbi5jbGllbnQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldERlYWRsaW5lKCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLm5vdygpICsgdGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRBY2NvdW50KFxuICAgIHJlcTogSUdldEFjY291bnRSZXF1ZXN0XG4gICk6IFByb21pc2U8SUdldEFjY291bnRSZXNwb25zZT4ge1xuICAgIGNvbnN0IGdldEFjY291bnQgPSBwcm9taXNpZnkodGhpcy5jbGllbnQuZ2V0QWNjb3VudC5iaW5kKHRoaXMuY2xpZW50KSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBnZXRBY2NvdW50KHJlcSwgeyBkZWFkbGluZTogdGhpcy5nZXREZWFkbGluZSgpIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEJsb2NrTWV0YXMoXG4gICAgcmVxOiBJR2V0QmxvY2tNZXRhc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxJR2V0QmxvY2tNZXRhc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZ2V0QmxvY2tNZXRhcyA9IHByb21pc2lmeShcbiAgICAgIHRoaXMuY2xpZW50LmdldEJsb2NrTWV0YXMuYmluZCh0aGlzLmNsaWVudClcbiAgICApO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZ2V0QmxvY2tNZXRhcyhyZXEsIHsgZGVhZGxpbmU6IHRoaXMuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRDaGFpbk1ldGEoXG4gICAgcmVxOiBJR2V0Q2hhaW5NZXRhUmVxdWVzdFxuICApOiBQcm9taXNlPElHZXRDaGFpbk1ldGFSZXNwb25zZT4ge1xuICAgIGNvbnN0IGdldENoYWluTWV0YSA9IHByb21pc2lmeSh0aGlzLmNsaWVudC5nZXRDaGFpbk1ldGEuYmluZCh0aGlzLmNsaWVudCkpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZ2V0Q2hhaW5NZXRhKHJlcSwgeyBkZWFkbGluZTogdGhpcy5nZXREZWFkbGluZSgpIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFNlcnZlck1ldGEoXG4gICAgcmVxOiBJR2V0U2VydmVyTWV0YVJlcXVlc3RcbiAgKTogUHJvbWlzZTxJR2V0U2VydmVyTWV0YVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZ2V0U2VydmVyTWV0YSA9IHByb21pc2lmeShcbiAgICAgIHRoaXMuY2xpZW50LmdldFNlcnZlck1ldGEuYmluZCh0aGlzLmNsaWVudClcbiAgICApO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZ2V0U2VydmVyTWV0YShyZXEsIHsgZGVhZGxpbmU6IHRoaXMuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRBY3Rpb25zKFxuICAgIHJlcTogSUdldEFjdGlvbnNSZXF1ZXN0XG4gICk6IFByb21pc2U8SUdldEFjdGlvbnNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGdldEFjdGlvbnMgPSBwcm9taXNpZnkodGhpcy5jbGllbnQuZ2V0QWN0aW9ucy5iaW5kKHRoaXMuY2xpZW50KSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBnZXRBY3Rpb25zKHJlcSwgeyBkZWFkbGluZTogdGhpcy5nZXREZWFkbGluZSgpIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN1Z2dlc3RHYXNQcmljZShcbiAgICByZXE6IElTdWdnZXN0R2FzUHJpY2VSZXF1ZXN0XG4gICk6IFByb21pc2U8SVN1Z2dlc3RHYXNQcmljZVJlc3BvbnNlPiB7XG4gICAgY29uc3Qgc3VnZ2VzdEdhc1ByaWNlID0gcHJvbWlzaWZ5KFxuICAgICAgdGhpcy5jbGllbnQuc3VnZ2VzdEdhc1ByaWNlLmJpbmQodGhpcy5jbGllbnQpXG4gICAgKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHN1Z2dlc3RHYXNQcmljZShyZXEsIHsgZGVhZGxpbmU6IHRoaXMuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRSZWNlaXB0QnlBY3Rpb24oXG4gICAgcmVxOiBJR2V0UmVjZWlwdEJ5QWN0aW9uUmVxdWVzdFxuICApOiBQcm9taXNlPElHZXRSZWNlaXB0QnlBY3Rpb25SZXNwb25zZT4ge1xuICAgIGNvbnN0IGdldFJlY2VpcHRCeUFjdGlvbiA9IHByb21pc2lmeShcbiAgICAgIHRoaXMuY2xpZW50LmdldFJlY2VpcHRCeUFjdGlvbi5iaW5kKHRoaXMuY2xpZW50KVxuICAgICk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBnZXRSZWNlaXB0QnlBY3Rpb24ocmVxLCB7IGRlYWRsaW5lOiB0aGlzLmdldERlYWRsaW5lKCkgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVhZENvbnRyYWN0KFxuICAgIHJlcTogSVJlYWRDb250cmFjdFJlcXVlc3RcbiAgKTogUHJvbWlzZTxJUmVhZENvbnRyYWN0UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZWFkQ29udHJhY3QgPSBwcm9taXNpZnkodGhpcy5jbGllbnQucmVhZENvbnRyYWN0LmJpbmQodGhpcy5jbGllbnQpKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHJlYWRDb250cmFjdChyZXEsIHsgZGVhZGxpbmU6IHRoaXMuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzZW5kQWN0aW9uKFxuICAgIHJlcTogSVNlbmRBY3Rpb25SZXF1ZXN0XG4gICk6IFByb21pc2U8SVNlbmRBY3Rpb25SZXNwb25zZT4ge1xuICAgIGNvbnN0IHNlbmRBY3Rpb24gPSBwcm9taXNpZnkodGhpcy5jbGllbnQuc2VuZEFjdGlvbi5iaW5kKHRoaXMuY2xpZW50KSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBzZW5kQWN0aW9uKHJlcSwgeyBkZWFkbGluZTogdGhpcy5nZXREZWFkbGluZSgpIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGVzdGltYXRlR2FzRm9yQWN0aW9uKFxuICAgIHJlcTogSUVzdGltYXRlR2FzRm9yQWN0aW9uUmVxdWVzdFxuICApOiBQcm9taXNlPElFc3RpbWF0ZUdhc0ZvckFjdGlvblJlc3BvbnNlPiB7XG4gICAgY29uc3QgZXN0aW1hdGVHYXNGb3JBY3Rpb24gPSBwcm9taXNpZnkoXG4gICAgICB0aGlzLmNsaWVudC5lc3RpbWF0ZUdhc0ZvckFjdGlvbi5iaW5kKHRoaXMuY2xpZW50KVxuICAgICk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBlc3RpbWF0ZUdhc0ZvckFjdGlvbihyZXEsIHsgZGVhZGxpbmU6IHRoaXMuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZWFkU3RhdGUocmVxOiBJUmVhZFN0YXRlUmVxdWVzdCk6IFByb21pc2U8SVJlYWRTdGF0ZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVhZFN0YXRlID0gcHJvbWlzaWZ5KHRoaXMuY2xpZW50LnJlYWRTdGF0ZS5iaW5kKHRoaXMuY2xpZW50KSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiByZWFkU3RhdGUocmVxLCB7IGRlYWRsaW5lOiB0aGlzLmdldERlYWRsaW5lKCkgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0RXBvY2hNZXRhKFxuICAgIHJlcTogSUdldEVwb2NoTWV0YVJlcXVlc3RcbiAgKTogUHJvbWlzZTxJR2V0RXBvY2hNZXRhUmVzcG9uc2U+IHtcbiAgICBjb25zdCBnZXRFcG9jaE1ldGEgPSBwcm9taXNpZnkodGhpcy5jbGllbnQuZ2V0RXBvY2hNZXRhLmJpbmQodGhpcy5jbGllbnQpKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGdldEVwb2NoTWV0YShyZXEsIHsgZGVhZGxpbmU6IHRoaXMuZ2V0RGVhZGxpbmUoKSB9KTtcbiAgfVxufVxuIl19
