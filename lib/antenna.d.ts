import { Iotx } from "./iotx";
import { IRpcMethod } from "./rpc-method/types";
export default class Antenna {
  iotx: Iotx;
  constructor(provider: string);
  static modules: {
    Iotx: new (hostname: string) => Iotx;
  };
  setProvider(provider: string | IRpcMethod): void;
  currentProvider(): IRpcMethod;
}
