import { SignerPlugin } from "./action/method";
import { Iotx } from "./iotx";
import { IRpcMethod } from "./rpc-method/types";
export declare type Opts = {
  signer?: SignerPlugin;
};
export default class Antenna {
  iotx: Iotx;
  constructor(provider: string, opts?: Opts);
  static modules: {
    Iotx: new (hostname: string) => Iotx;
  };
  setProvider(provider: string | IRpcMethod): void;
  currentProvider(): IRpcMethod;
}
