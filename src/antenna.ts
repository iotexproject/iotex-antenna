import { SignerPlugin } from "./action/method";
import { Iotx } from "./iotx";
import { WsSignerPlugin } from "./plugin/ws";
import { IRpcMethod } from "./rpc-method/types";

export type Opts = {
  signer?: SignerPlugin;
  timeout?: number;
  apiToken?: string;
};

export default class Antenna {
  public iotx: Iotx;

  constructor(provider: string, opts?: Opts) {
    this.iotx = new Iotx(provider, {
      signer: opts && opts.signer,
      timeout: opts && opts.timeout,
      apiToken: opts && opts.apiToken
    });
  }

  public static modules: {
    Iotx: typeof Iotx;
    WsSignerPlugin: typeof WsSignerPlugin;
  } = {
    Iotx,
    WsSignerPlugin
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
