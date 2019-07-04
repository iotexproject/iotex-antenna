"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contract = void 0;

var _ethereumjsAbi = _interopRequireDefault(require("ethereumjs-abi"));

var _method = require("../action/method");

var _address = require("../crypto/address");

var _abiToByte = require("./abi-to-byte");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

class Contract {
  // The json interface for the contract to instantiate
  // This address is necessary for executions and call requests
  // The options of the contract.
  setProvider(provider) {
    this.provider = provider;
  }

  constructor(jsonInterface, address, options) { // tslint:disable-next-line: no-any
    _defineProperty(this, "abi", void 0);

    _defineProperty(this, "address", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "provider", void 0);

    _defineProperty(this, "methods", void 0);

    this.provider = options && options.provider;

    if (jsonInterface) {
      this.abi = (0, _abiToByte.getAbiFunctions)(jsonInterface);
    }

    this.address = address;
    this.options = options; // mount methods

    this.methods = {}; // tslint:disable-next-line: no-for-in

    for (const func in this.abi) {
      if (!this.abi.hasOwnProperty(func)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      this.methods[func] = async (
        // @ts-ignore
        ...args
      ) => {
        if (!this.address || !this.abi) {
          throw new Error("must set contract address and abi");
        }

        if (args.length < 1) {
          throw new Error("must set method execute parameter");
        }

        if (!this.provider) {
          throw new Error("no rpc method provider specified");
        }

        const executeParameter = args[args.length - 1];
        const abiFunc = this.abi[func];
        const userInput = {};

        if (!abiFunc.inputs || !Array.isArray(abiFunc.inputs)) {
          return userInput;
        } // tslint:disable-next-line: no-any

        abiFunc.inputs.map((val, i) => {
          // @ts-ignore
          userInput[val.name] = args[i];
        });
        const methodEnvelop = this.encodeMethod(
          executeParameter.amount || "0",
          func,
          userInput,
          executeParameter.gasLimit,
          executeParameter.gasPrice
        );
        const method = new _method.ExecutionMethod(
          this.provider,
          executeParameter.account,
          methodEnvelop,
          {
            signer: this.options && this.options.signer
          }
        );
        return method.execute();
      };
    }
  } // tslint:disable-next-line: no-any

  getABI() {
    return this.abi;
  }

  getAddress() {
    return this.address;
  }

  async deploy(
    account, // tslint:disable-next-line: no-any
    inputs,
    gasLimit,
    gasPrice
  ) {
    if (!this.options) {
      throw new Error("must set contract byte code");
    }

    if (!this.provider) {
      throw new Error("no rpc method provider specified");
    }

    let data = this.options.data || Buffer.from([]);

    if (this.abi && this.abi.hasOwnProperty(_abiToByte.Constructor)) {
      const abiFunc = this.abi[_abiToByte.Constructor];
      const userInput = {}; // @ts-ignore

      if (!abiFunc.inputs || !Array.isArray(abiFunc.inputs)) {
        throw new Error("construtor input error");
      } // @ts-ignore
      // tslint:disable-next-line: no-any

      abiFunc.inputs.map((val, i) => {
        // @ts-ignore
        userInput[val.name] = inputs[i];
      });
      data = Buffer.concat([
        data, // @ts-ignore
        Buffer.from(
          (0, _abiToByte.encodeArguments)(
            (0, _abiToByte.getArgTypes)(abiFunc),
            userInput
          ),
          "hex"
        )
      ]);
    }

    const contractEnvelop = {
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      contract: "",
      amount: "0",
      data: data
    };
    return new _method.ExecutionMethod(
      this.provider,
      account,
      contractEnvelop,
      {
        signer: this.options && this.options.signer
      }
    ).execute();
  }

  pureEncodeMethod(
    amount,
    method, // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ) {
    if (!this.address || !this.abi) {
      throw new Error("must set contract address and abi");
    }

    if (!this.abi[method]) {
      throw new Error(`method ${method} dose not in abi`);
    }

    const abiFunc = this.abi[method];
    const userInput = {}; // tslint:disable-next-line: no-any

    abiFunc.inputs.map((val, i) => {
      // @ts-ignore
      userInput[val.name] = args[i];
    });
    return this.encodeMethod(amount, method, userInput);
  }

  encodeMethod(
    amount,
    method, // tslint:disable-next-line:no-any
    input,
    gasLimit,
    gasPrice
  ) {
    if (!this.address || !this.abi) {
      throw new Error("must set contract address and abi");
    }

    if (!this.abi[method]) {
      throw new Error(`method ${method} dose not in abi`);
    }

    return {
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      contract: this.address,
      amount: amount,
      data: Buffer.from(
        (0, _abiToByte.encodeInputData)(this.abi, method, input),
        "hex"
      )
    };
  }

  decodeMethodResult(method, result) {
    const outTypes = []; // @ts-ignore

    this.getABI()[method].outputs.forEach(field => {
      outTypes.push(field.type);
    });

    if (outTypes.length === 0) {
      return null;
    }

    const results = _ethereumjsAbi.default.rawDecode(
      outTypes,
      Buffer.from(result, "hex")
    );

    for (let i = 0; i < outTypes.length; i++) {
      if (outTypes[i] === "address") {
        results[i] = (0, _address.fromBytes)(
          Buffer.from(results[i].toString(), "hex")
        ).string();
      }
    }

    if (outTypes.length === 1) {
      return results[0];
    }

    return results;
  }
}

exports.Contract = Contract;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cmFjdC9jb250cmFjdC50cyJdLCJuYW1lcyI6WyJDb250cmFjdCIsInNldFByb3ZpZGVyIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsImpzb25JbnRlcmZhY2UiLCJhZGRyZXNzIiwib3B0aW9ucyIsImFiaSIsIm1ldGhvZHMiLCJmdW5jIiwiaGFzT3duUHJvcGVydHkiLCJhcmdzIiwiRXJyb3IiLCJsZW5ndGgiLCJleGVjdXRlUGFyYW1ldGVyIiwiYWJpRnVuYyIsInVzZXJJbnB1dCIsImlucHV0cyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInZhbCIsImkiLCJuYW1lIiwibWV0aG9kRW52ZWxvcCIsImVuY29kZU1ldGhvZCIsImFtb3VudCIsImdhc0xpbWl0IiwiZ2FzUHJpY2UiLCJtZXRob2QiLCJFeGVjdXRpb25NZXRob2QiLCJhY2NvdW50Iiwic2lnbmVyIiwiZXhlY3V0ZSIsImdldEFCSSIsImdldEFkZHJlc3MiLCJkZXBsb3kiLCJkYXRhIiwiQnVmZmVyIiwiZnJvbSIsIkNvbnN0cnVjdG9yIiwiY29uY2F0IiwiY29udHJhY3RFbnZlbG9wIiwiY29udHJhY3QiLCJwdXJlRW5jb2RlTWV0aG9kIiwiaW5wdXQiLCJkZWNvZGVNZXRob2RSZXN1bHQiLCJyZXN1bHQiLCJvdXRUeXBlcyIsIm91dHB1dHMiLCJmb3JFYWNoIiwiZmllbGQiLCJwdXNoIiwidHlwZSIsInJlc3VsdHMiLCJldGhlcmV1bWpzIiwicmF3RGVjb2RlIiwidG9TdHJpbmciLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBZ0JPLE1BQU1BLFFBQU4sQ0FBZTtBQUNwQjtBQUdBO0FBR0E7QUFPT0MsRUFBQUEsV0FBUCxDQUFtQkMsUUFBbkIsRUFBK0M7QUFDN0MsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7QUFFREMsRUFBQUEsV0FBVyxFQUNUO0FBQ0FDLEVBQUFBLGFBRlMsRUFHVEMs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QUFaLEVBQW9CLEtBQXBCLENBQS9CLENBQWhCOztBQUVBLFNBQUssSUFBSXpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwQixRQUFRLENBQUNuQyxNQUE3QixFQUFxQ1MsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxVQUFJMEIsUUFBUSxDQUFDMUIsQ0FBRCxDQUFSLEtBQWdCLFNBQXBCLEVBQStCO0FBQzdCZ0MsUUFBQUEsT0FBTyxDQUFDaEMsQ0FBRCxDQUFQLEdBQWEsd0JBQ1hnQixNQUFNLENBQUNDLElBQVAsQ0FBWWUsT0FBTyxDQUFDaEMsQ0FBRCxDQUFQLENBQVdtQyxRQUFYLEVBQVosRUFBbUMsS0FBbkMsQ0FEVyxFQUVYQyxNQUZXLEVBQWI7QUFHRDtBQUNGOztBQUVELFFBQUlWLFFBQVEsQ0FBQ25DLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsYUFBT3lDLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDRDs7QUFDRCxXQUFPQSxPQUFQO0FBQ0Q7O0FBdk5tQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuaW1wb3J0IGV0aGVyZXVtanMgZnJvbSBcImV0aGVyZXVtanMtYWJpXCI7XG5pbXBvcnQgeyBJQWNjb3VudCB9IGZyb20gXCIuLi9hY2NvdW50L2FjY291bnRcIjtcbmltcG9ydCB7IEV4ZWN1dGlvbk1ldGhvZCwgU2lnbmVyUGx1Z2luIH0gZnJvbSBcIi4uL2FjdGlvbi9tZXRob2RcIjtcbmltcG9ydCB7IEV4ZWN1dGlvbiB9IGZyb20gXCIuLi9hY3Rpb24vdHlwZXNcIjtcbmltcG9ydCB7IGZyb21CeXRlcyB9IGZyb20gXCIuLi9jcnlwdG8vYWRkcmVzc1wiO1xuaW1wb3J0IHsgSVJwY01ldGhvZCB9IGZyb20gXCIuLi9ycGMtbWV0aG9kL3R5cGVzXCI7XG5pbXBvcnQge1xuICBBYmlCeUZ1bmMsXG4gIENvbnN0cnVjdG9yLFxuICBlbmNvZGVBcmd1bWVudHMsXG4gIGVuY29kZUlucHV0RGF0YSxcbiAgZ2V0QWJpRnVuY3Rpb25zLFxuICBnZXRBcmdUeXBlc1xufSBmcm9tIFwiLi9hYmktdG8tYnl0ZVwiO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICAvLyBUaGUgYnl0ZSBjb2RlIG9mIHRoZSBjb250cmFjdC4gVXNlZCB3aGVuIHRoZSBjb250cmFjdCBnZXRzIGRlcGxveWVkXG4gIGRhdGE/OiBCdWZmZXI7XG4gIHByb3ZpZGVyPzogSVJwY01ldGhvZDtcbiAgc2lnbmVyPzogU2lnbmVyUGx1Z2luO1xufTtcblxuZXhwb3J0IGNsYXNzIENvbnRyYWN0IHtcbiAgLy8gVGhlIGpzb24gaW50ZXJmYWNlIGZvciB0aGUgY29udHJhY3QgdG8gaW5zdGFudGlhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBhYmk/OiBBYmlCeUZ1bmM7XG5cbiAgLy8gVGhpcyBhZGRyZXNzIGlzIG5lY2Vzc2FyeSBmb3IgZXhlY3V0aW9ucyBhbmQgY2FsbCByZXF1ZXN0c1xuICBwcml2YXRlIHJlYWRvbmx5IGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgLy8gVGhlIG9wdGlvbnMgb2YgdGhlIGNvbnRyYWN0LlxuICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM/OiBPcHRpb25zO1xuXG4gIHB1YmxpYyBwcm92aWRlcj86IElScGNNZXRob2Q7XG5cbiAgcHVibGljIHJlYWRvbmx5IG1ldGhvZHM6IHsgW2Z1bmNOYW1lOiBzdHJpbmddOiBGdW5jdGlvbiB9O1xuXG4gIHB1YmxpYyBzZXRQcm92aWRlcihwcm92aWRlcjogSVJwY01ldGhvZCk6IHZvaWQge1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gICAganNvbkludGVyZmFjZT86IEFycmF5PGFueT4sXG4gICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICBvcHRpb25zPzogT3B0aW9uc1xuICApIHtcbiAgICB0aGlzLnByb3ZpZGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLnByb3ZpZGVyO1xuICAgIGlmIChqc29uSW50ZXJmYWNlKSB7XG4gICAgICB0aGlzLmFiaSA9IGdldEFiaUZ1bmN0aW9ucyhqc29uSW50ZXJmYWNlKTtcbiAgICB9XG4gICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gbW91bnQgbWV0aG9kc1xuICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZm9yLWluXG4gICAgZm9yIChjb25zdCBmdW5jIGluIHRoaXMuYWJpKSB7XG4gICAgICBpZiAoIXRoaXMuYWJpLmhhc093blByb3BlcnR5KGZ1bmMpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tZXRob2RzW2Z1bmNdID0gYXN5bmMgKFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYWRkcmVzcyB8fCAhdGhpcy5hYmkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHNldCBjb250cmFjdCBhZGRyZXNzIGFuZCBhYmlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm11c3Qgc2V0IG1ldGhvZCBleGVjdXRlIHBhcmFtZXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBycGMgbWV0aG9kIHByb3ZpZGVyIHNwZWNpZmllZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleGVjdXRlUGFyYW1ldGVyID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBhYmlGdW5jID0gdGhpcy5hYmlbZnVuY107XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHt9O1xuICAgICAgICBpZiAoIWFiaUZ1bmMuaW5wdXRzIHx8ICFBcnJheS5pc0FycmF5KGFiaUZ1bmMuaW5wdXRzKSkge1xuICAgICAgICAgIHJldHVybiB1c2VySW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcbiAgICAgICAgYWJpRnVuYy5pbnB1dHMubWFwKCh2YWw6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHVzZXJJbnB1dFt2YWwubmFtZV0gPSBhcmdzW2ldO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtZXRob2RFbnZlbG9wID0gdGhpcy5lbmNvZGVNZXRob2QoXG4gICAgICAgICAgZXhlY3V0ZVBhcmFtZXRlci5hbW91bnQgfHwgXCIwXCIsXG4gICAgICAgICAgZnVuYyxcbiAgICAgICAgICB1c2VySW5wdXQsXG4gICAgICAgICAgZXhlY3V0ZVBhcmFtZXRlci5nYXNMaW1pdCxcbiAgICAgICAgICBleGVjdXRlUGFyYW1ldGVyLmdhc1ByaWNlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IG5ldyBFeGVjdXRpb25NZXRob2QoXG4gICAgICAgICAgdGhpcy5wcm92aWRlcixcbiAgICAgICAgICBleGVjdXRlUGFyYW1ldGVyLmFjY291bnQsXG4gICAgICAgICAgbWV0aG9kRW52ZWxvcCxcbiAgICAgICAgICB7IHNpZ25lcjogdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zaWduZXIgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBtZXRob2QuZXhlY3V0ZSgpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxuICBwdWJsaWMgZ2V0QUJJKCk6IEFiaUJ5RnVuYyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuYWJpO1xuICB9XG5cbiAgcHVibGljIGdldEFkZHJlc3MoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5hZGRyZXNzO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlcGxveShcbiAgICBhY2NvdW50OiBJQWNjb3VudCxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxuICAgIGlucHV0czogQXJyYXk8YW55PixcbiAgICBnYXNMaW1pdD86IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBnYXNQcmljZT86IHN0cmluZ1xuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHNldCBjb250cmFjdCBieXRlIGNvZGVcIik7XG4gICAgfVxuICAgIGlmICghdGhpcy5wcm92aWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gcnBjIG1ldGhvZCBwcm92aWRlciBzcGVjaWZpZWRcIik7XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLm9wdGlvbnMuZGF0YSB8fCBCdWZmZXIuZnJvbShbXSk7XG4gICAgaWYgKHRoaXMuYWJpICYmIHRoaXMuYWJpLmhhc093blByb3BlcnR5KENvbnN0cnVjdG9yKSkge1xuICAgICAgY29uc3QgYWJpRnVuYyA9IHRoaXMuYWJpW0NvbnN0cnVjdG9yXTtcbiAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHt9O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKCFhYmlGdW5jLmlucHV0cyB8fCAhQXJyYXkuaXNBcnJheShhYmlGdW5jLmlucHV0cykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29uc3RydXRvciBpbnB1dCBlcnJvclwiKTtcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gICAgICBhYmlGdW5jLmlucHV0cy5tYXAoKHZhbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB1c2VySW5wdXRbdmFsLm5hbWVdID0gaW5wdXRzW2ldO1xuICAgICAgfSk7XG4gICAgICBkYXRhID0gQnVmZmVyLmNvbmNhdChbXG4gICAgICAgIGRhdGEsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgQnVmZmVyLmZyb20oZW5jb2RlQXJndW1lbnRzKGdldEFyZ1R5cGVzKGFiaUZ1bmMpLCB1c2VySW5wdXQpLCBcImhleFwiKVxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJhY3RFbnZlbG9wID0ge1xuICAgICAgZ2FzTGltaXQ6IGdhc0xpbWl0LFxuICAgICAgZ2FzUHJpY2U6IGdhc1ByaWNlLFxuICAgICAgY29udHJhY3Q6IFwiXCIsXG4gICAgICBhbW91bnQ6IFwiMFwiLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBFeGVjdXRpb25NZXRob2QodGhpcy5wcm92aWRlciwgYWNjb3VudCwgY29udHJhY3RFbnZlbG9wLCB7XG4gICAgICBzaWduZXI6IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuc2lnbmVyXG4gICAgfSkuZXhlY3V0ZSgpO1xuICB9XG5cbiAgcHVibGljIHB1cmVFbmNvZGVNZXRob2QoXG4gICAgYW1vdW50OiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHlwZWRlZlxuICAgIC4uLmFyZ3NcbiAgKTogRXhlY3V0aW9uIHtcbiAgICBpZiAoIXRoaXMuYWRkcmVzcyB8fCAhdGhpcy5hYmkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm11c3Qgc2V0IGNvbnRyYWN0IGFkZHJlc3MgYW5kIGFiaVwiKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFiaVttZXRob2RdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1ldGhvZCAke21ldGhvZH0gZG9zZSBub3QgaW4gYWJpYCk7XG4gICAgfVxuICAgIGNvbnN0IGFiaUZ1bmMgPSB0aGlzLmFiaVttZXRob2RdO1xuXG4gICAgY29uc3QgdXNlcklucHV0ID0ge307XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcbiAgICBhYmlGdW5jLmlucHV0cy5tYXAoKHZhbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHVzZXJJbnB1dFt2YWwubmFtZV0gPSBhcmdzW2ldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlTWV0aG9kKGFtb3VudCwgbWV0aG9kLCB1c2VySW5wdXQpO1xuICB9XG5cbiAgcHVibGljIGVuY29kZU1ldGhvZChcbiAgICBhbW91bnQ6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgaW5wdXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgZ2FzTGltaXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZ2FzUHJpY2U/OiBzdHJpbmdcbiAgKTogRXhlY3V0aW9uIHtcbiAgICBpZiAoIXRoaXMuYWRkcmVzcyB8fCAhdGhpcy5hYmkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm11c3Qgc2V0IGNvbnRyYWN0IGFkZHJlc3MgYW5kIGFiaVwiKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFiaVttZXRob2RdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1ldGhvZCAke21ldGhvZH0gZG9zZSBub3QgaW4gYWJpYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdhc0xpbWl0OiBnYXNMaW1pdCxcbiAgICAgIGdhc1ByaWNlOiBnYXNQcmljZSxcbiAgICAgIGNvbnRyYWN0OiB0aGlzLmFkZHJlc3MsXG4gICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIGRhdGE6IEJ1ZmZlci5mcm9tKGVuY29kZUlucHV0RGF0YSh0aGlzLmFiaSwgbWV0aG9kLCBpbnB1dCksIFwiaGV4XCIpXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBkZWNvZGVNZXRob2RSZXN1bHQobWV0aG9kOiBzdHJpbmcsIHJlc3VsdDogc3RyaW5nKTogYW55IHwgQXJyYXk8YW55PiB7XG4gICAgY29uc3Qgb3V0VHlwZXMgPSBbXSBhcyBBcnJheTxzdHJpbmc+O1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuZ2V0QUJJKClbbWV0aG9kXS5vdXRwdXRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgb3V0VHlwZXMucHVzaChmaWVsZC50eXBlKTtcbiAgICB9KTtcblxuICAgIGlmIChvdXRUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdHMgPSBldGhlcmV1bWpzLnJhd0RlY29kZShvdXRUeXBlcywgQnVmZmVyLmZyb20ocmVzdWx0LCBcImhleFwiKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3V0VHlwZXNbaV0gPT09IFwiYWRkcmVzc1wiKSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBmcm9tQnl0ZXMoXG4gICAgICAgICAgQnVmZmVyLmZyb20ocmVzdWx0c1tpXS50b1N0cmluZygpLCBcImhleFwiKVxuICAgICAgICApLnN0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdXRUeXBlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGhvZEV4ZWN1dGVQYXJhbWV0ZXIge1xuICBhY2NvdW50OiBJQWNjb3VudDtcbiAgYW1vdW50Pzogc3RyaW5nO1xuICBnYXNMaW1pdD86IHN0cmluZztcbiAgZ2FzUHJpY2U/OiBzdHJpbmc7XG59XG4iXX0=
