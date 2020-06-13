// @ts-ignore
import window from "global/window";
import WebSocket from "isomorphic-ws";
import { Account } from "../../account/account";
import { Envelop } from "../../action/envelop";
import { SignerPlugin } from "../../action/method";
import { IRequest } from "./request";

// tslint:disable-next-line:insecure-random
let reqId = Math.round(Math.random() * 10000);

export interface WsSignerPluginOptions {
  retryCount: number;
  retryDuration: number;
}

export interface WsRequest {
  // tslint:disable-next-line: no-any
  [key: string]: any;
}

export class WsSignerPlugin implements SignerPlugin {
  public ws: WebSocket;

  private readonly provider: string;

  private readonly options: WsSignerPluginOptions;

  constructor(
    provider: string = "wss://local.iotex.io:64102",
    options: WsSignerPluginOptions = { retryCount: 3, retryDuration: 50 }
  ) {
    this.provider = provider;

    this.options = options;

    this.init();
  }

  private init(): void {
    this.ws = new WebSocket(this.provider);
    this.ws.onopen = (): void => {
      window.console.log("[antenna-ws] connected");
    };
    this.ws.onclose = (): void => {
      window.console.log("[antenna-ws] disconnected");
    };
  }

  public send(req: WsRequest): void {
    const readyState = this.ws.readyState;

    if (readyState === 1) {
      this.ws.send(JSON.stringify(req));
    } else {
      if (readyState === 2 || readyState === 3) {
        this.init();
      }
      this.reconnectAndSend(this.options.retryCount, req);
    }
  }

  private reconnectAndSend(
    retryCount: number,
    req: WsRequest,
    timeoutId?: number
  ): void {
    const readyState = this.ws.readyState;

    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }

    if (retryCount > 0) {
      const id = window.setTimeout(() => {
        if (readyState === 1) {
          this.ws.send(JSON.stringify(req));
          window.clearTimeout(id);
        } else {
          const count = retryCount - 1;
          this.reconnectAndSend(count, req, id);
        }
      }, this.options.retryDuration);
    } else {
      window.console.error(
        "ws plugin connect error, please retry again later."
      );
    }
  }

  public async signAndSend(envelop: Envelop): Promise<string> {
    const id = reqId++;
    const req: IRequest = {
      reqId: id,
      envelop: Buffer.from(envelop.bytestream()).toString("hex"),
      type: "SIGN_AND_SEND",
      origin: this.getOrigin()
    };
    this.send(req);
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
    this.send(req);
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

  public getOrigin(plugin: string = ""): string {
    let origin: string = "";
    if (
      location !== undefined &&
      location.hasOwnProperty("hostname") &&
      location.hostname.length
    ) {
      origin = location.hostname;
    } else {
      origin = plugin;
    }

    if (origin.substr(0, 4) === "www.") {
      origin = origin.replace("www.", "");
    }
    return origin;
  }

  public async signMessage(
    data: string | Buffer | Uint8Array
  ): Promise<Buffer> {
    const id = reqId++;
    const req: IRequest = {
      reqId: id,
      msg: data,
      type: "SIGN_MSG"
    };
    this.send(req);
    return new Promise<Buffer>(resolve => {
      this.ws.onmessage = event => {
        let resp = { reqId: -1, sig: "" };
        try {
          if (typeof event.data === "string") {
            resp = JSON.parse(event.data);
          }
        } catch (_) {
          resolve(new Buffer(""));
          return;
        }
        if (resp.reqId === id) {
          resolve(Buffer.from(resp.sig, "hex"));
        }
      };
    });
  }
}
