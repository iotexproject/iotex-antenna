// @ts-ignore
import window from "global/window";
import WebSocket from "isomorphic-ws";
import { Account } from "../account/account";
import { Envelop } from "../action/envelop";
import { SignerPlugin } from "../action/method";

// tslint:disable-next-line:insecure-random
let reqId = Math.round(Math.random() * 10000);

interface IRequest {
  reqId: number;
  type: "SIGN_AND_SEND" | "GET_ACCOUNTS";

  envelop?: string; // serialized proto string
}

export class WsSignerPlugin implements SignerPlugin {
  private readonly ws: WebSocket;

  constructor(provider: string = "wss://local.get-scatter.com:64102") {
    this.ws = new WebSocket(provider);
    this.ws.onopen = (): void => {
      window.console.log("[antenna-ws] connected");
    };
    this.ws.onclose = (): void => {
      window.console.log("[antenna-ws] disconnected");
    };
  }

  public async signAndSend(envelop: Envelop): Promise<string> {
    const id = reqId++;
    const req: IRequest = {
      reqId: id,
      envelop: Buffer.from(envelop.bytestream()).toString("hex"),
      type: "SIGN_AND_SEND"
    };
    this.ws.send(JSON.stringify(req));
    // tslint:disable-next-line:promise-must-complete
    return new Promise<string>(resolve => {
      this.ws.onmessage = event => {
        let resp = { reqId: -1, actionHash: "" };
        try {
          if (typeof event.data === "string") {
            resp = JSON.parse(event.data);
          }
        } catch (_) {
          return;
        }
        if (resp.reqId === id) {
          resolve(resp.actionHash);
        }
      };
    });
  }

  public async getAccount(address: string): Promise<Account> {
    const acct = new Account();
    acct.address = address;
    return acct;
  }

  public async getAccounts(): Promise<Array<Account>> {
    const id = reqId++;
    const req = {
      reqId: id,
      type: "GET_ACCOUNTS"
    };
    this.ws.send(JSON.stringify(req));
    // tslint:disable-next-line:promise-must-complete
    return new Promise<Array<Account>>(resolve => {
      this.ws.onmessage = event => {
        let resp = { reqId: -1, accounts: [] };
        try {
          if (typeof event.data === "string") {
            resp = JSON.parse(event.data);
          }
        } catch (_) {
          return;
        }
        if (resp.reqId === id) {
          resolve(resp.accounts);
        }
      };
    });
  }
}
