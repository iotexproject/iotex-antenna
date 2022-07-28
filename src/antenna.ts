import { SignerPlugin } from "./action/method";
import { Contract } from "./contract/contract";
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

  constructor(provider: string, chainID: number, opts?: Opts) {
    this.iotx = new Iotx(provider, chainID, {
      signer: opts && opts.signer,
      timeout: opts && opts.timeout,
      apiToken: opts && opts.apiToken
    });
  }

  public static modules: {
    Iotx: typeof Iotx;
    WsSignerPlugin: typeof WsSignerPlugin;
    Contract: typeof Contract;
  } = {
    Iotx,
    WsSignerPlugin,
    Contract
  };

  public setProvider(provider: string | IRpcMethod, chainID?: number): void {
    if (typeof provider === "object") {
      if (provider === this.iotx.currentProvider()) {
        return;
      }
    }
    this.iotx.setProvider(provider, chainID);
  }

  public currentProvider(): IRpcMethod {
    return this.iotx.currentProvider();
  }
}
