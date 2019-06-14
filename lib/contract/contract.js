"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_1 = require("../action/method");
const abi_to_byte_1 = require("./abi-to-byte");
class Contract {
  setProvider(provider) {
    this.provider = provider;
  }
  constructor(
    // tslint:disable-next-line: no-any
    jsonInterface,
    address,
    options
  ) {
    this.provider = options && options.provider;
    if (jsonInterface) {
      this.abi = abi_to_byte_1.getAbiFunctions(jsonInterface);
    }
    this.address = address;
    this.options = options;
    // mount methods
    this.methods = {};
    // tslint:disable-next-line: no-for-in
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
        }
        // tslint:disable-next-line: no-any
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
        const method = new method_1.ExecutionMethod(
          this.provider,
          executeParameter.account,
          methodEnvelop
        );
        return method.execute();
      };
    }
  }
  // tslint:disable-next-line: no-any
  getABI() {
    return this.abi;
  }
  getAddress() {
    return this.address;
  }
  async deploy(
    account,
    // tslint:disable-next-line: no-any
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
    if (this.abi && this.abi.hasOwnProperty(abi_to_byte_1.Constructor)) {
      const abiFunc = this.abi[abi_to_byte_1.Constructor];
      const userInput = {};
      // @ts-ignore
      if (!abiFunc.inputs || !Array.isArray(abiFunc.inputs)) {
        throw new Error("construtor input error");
      }
      // @ts-ignore
      // tslint:disable-next-line: no-any
      abiFunc.inputs.map((val, i) => {
        // @ts-ignore
        userInput[val.name] = inputs[i];
      });
      data = Buffer.concat([
        data,
        // @ts-ignore
        Buffer.from(
          abi_to_byte_1.encodeArguments(
            abi_to_byte_1.getArgTypes(abiFunc),
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
    return new method_1.ExecutionMethod(
      this.provider,
      account,
      contractEnvelop
    ).execute();
  }
  pureEncodeMethod(
    amount,
    method,
    // @ts-ignore
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
    const userInput = {};
    // tslint:disable-next-line: no-any
    abiFunc.inputs.map((val, i) => {
      // @ts-ignore
      userInput[val.name] = args[i];
    });
    return this.encodeMethod(amount, method, userInput);
  }
  encodeMethod(
    amount,
    method,
    // tslint:disable-next-line:no-any
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
        abi_to_byte_1.encodeInputData(this.abi, method, input),
        "hex"
      )
    };
  }
}
exports.Contract = Contract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJhY3QvY29udHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBbUQ7QUFHbkQsK0NBT3VCO0FBUXZCLE1BQWEsUUFBUTtJQWNaLFdBQVcsQ0FBQyxRQUFvQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7SUFDRSxtQ0FBbUM7SUFDbkMsYUFBMEIsRUFDMUIsT0FBZ0IsRUFDaEIsT0FBaUI7UUFFakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLDZCQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsc0NBQXNDO1FBQ3RDLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLHVDQUF1QztnQkFDdkMsU0FBUzthQUNWO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLO1lBQ3hCLGFBQWE7WUFDYixHQUFHLElBQUksRUFDUCxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxJQUFJLElBQUksQ0FB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
