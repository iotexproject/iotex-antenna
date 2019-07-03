import { SignerPlugin } from "./action/method";
import { Iotx } from "./iotx";
import { IRpcMethod } from "./rpc-method/types";

export type Opts = {
  signer?: SignerPlugin;
};

export default class Antenna {
  public iotx: Iotx;

  constructor(provider: string, opts?: Opts) {
    this.iotx = new Iotx(provider, { signer: opts && opts.signer });
  }

  public static modules: {
    Iotx: new (hostname: string) => Iotx;
  };

  public setProvider(provider: string | IRpcMethod): void {
    if (typeof provider === "object") {
      if (provider === this.iotx.currentProvider()) {
        return;
      }
    }
    this.iotx.setProvider(provider);
  }

  public currentProvider(): IRpcMethod {
    return this.iotx.currentProvider();
  }
}
