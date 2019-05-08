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
      if (provider === this.iotx.getProvider()) {
        return;
      }
    }
    this.iotx.setProvider(provider);
  }

  public getProvider(): IRpcMethod {
    return this.iotx.getProvider();
  }
}
