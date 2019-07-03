// @ts-ignore
import window from "global/window";
import WebSocket from "isomorphic-ws";
import { Account } from "../account/account";
import { Envelop } from "../action/envelop";
import { SignerPlugin } from "../action/method";

// tslint:disable-next-line:insecure-random
let reqId = Math.round(Math.random() * 10000);

export class WsSignerPlugin implements SignerPlugin {
  private readonly ws: WebSocket;

  constructor(provider: string) {
    this.ws = new WebSocket(provider, {
      rejectUnauthorized: false
    });
    this.ws.onopen = (): void => {
      window.console.log("[antenna-ws] connected");
    };
    this.ws.onclose = (): void => {
      window.console.log("[antenna-ws] disconnected");
    };
  }

  public async signAndSend(envelop: Envelop): Promise<string> {
    const id = reqId++;
    const req = {
      reqId: id,
      envelop: Buffer.from(envelop.bytestream()).toString("hex")
    };
    this.ws.send(JSON.stringify(req));
    return new Promise<string>(resolve => {
      this.ws.on("message", (event: string) => {
        const resp = JSON.parse(event);
        if (resp.reqId === id) {
          resolve(resp.actionHash);
        }
      });
    });
  }

  public async getAccount(address: string): Promise<Account> {
    const acct = new Account();
    acct.address = address;
    return acct;
  }
}
