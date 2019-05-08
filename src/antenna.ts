import { Iotx } from "./iotx";
import { IRpcMethod } from "./rpc-method/types";

export default class Antenna {
  public iotx: Iotx;

  constructor(provider: string) {
    this.iotx = new Iotx(provider);
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
