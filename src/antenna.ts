import { Iotx } from "./iotx";

export default class Antenna {
  public iotx: Iotx;

  constructor(provider: string) {
    this.iotx = new Iotx(provider);
  }

  public static modules: {
    Iotx: new (hostname: string) => Iotx;
  };

  public setProvider(provider: string): void {
    this.iotx.setProvider(provider);
  }
}
