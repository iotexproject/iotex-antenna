// @ts-ignore
import window from "global/window";
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

export class WvSigner implements SignerPlugin {
  constructor() {
    this.init();
  }

  private setupWebViewJavascriptBridge(callback: Function): void {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge);
    } else {
      document.addEventListener(
        "WebViewJavascriptBridgeReady",
        () => {
          callback(window.WebViewJavascriptBridge);
        },
        false
      );
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      const WVJBIframe = document.createElement("iframe");
      WVJBIframe.style.display = "none";
      WVJBIframe.src = "https://bridge-loaded";
      if (document.documentElement) {
        document.documentElement.appendChild(WVJBIframe);
        window.setTimeout(() => {
          if (document.documentElement) {
            document.documentElement.removeChild(WVJBIframe);
          }
        }, 0);
      }
    }
  }

  private init(): void {
    // tslint:disable-next-line:no-any
    this.setupWebViewJavascriptBridge((bridge: any) => {
      try {
        bridge.init((message: string, responseCallback: Function) => {
          window.console.log("JS got a message", message);
          const data = {
            "Javascript Responds": "测试中文!"
          };
          window.console.log("JS responding with", data.toString());
          responseCallback(data);
        });
      } catch (e) {
        window.console.log("data error from android: = ", e.toString());
      }

      bridge.registerHandler(
        "signAndSendJsFunction",
        (data: string, responseCallback: Function) => {
          window.console.log(
            "data from signAndSendJsFunction register handler: = ",
            data.toString()
          );
          responseCallback("responseData signAndSendJsFunction test");
        }
      );
    });
  }

  public async signAndSend(envelop: Envelop): Promise<string> {
    const id = reqId++;
    const req: IRequest = {
      reqId: id,
      envelop: Buffer.from(envelop.bytestream()).toString("hex"),
      type: "SIGN_AND_SEND"
    };

    return new Promise<string>(resolve =>
      window.WebViewJavascriptBridge.callHandler(
        "sign_and_send",
        JSON.stringify(req),
        (responseData: string) => {
          let resp = { reqId: -1, actionHash: "" };
          try {
            resp = JSON.parse(responseData);
          } catch (_) {
            return;
          }
          if (resp.reqId === id) {
            resolve(resp.actionHash);
          }
        }
      )
    );
  }

  // @ts-ignore
  public async getAccount(address: string): Promise<Account> {
    throw new Error("getAccount unimplement");
  }

  public async getAccounts(): Promise<Array<Account>> {
    const id = reqId++;
    const req = {
      reqId: id,
      type: "GET_ACCOUNTS"
    };

    window.console.log(JSON.stringify(req));

    // tslint:disable-next-line:promise-must-complete
    return new Promise<Array<Account>>(async resolve => {
      // tslint:disable-next-line:no-any
      window.document.addEventListener("message", async (e: any) => {
        let resp = { reqId: -1, accounts: [] };
        try {
          resp = JSON.parse(e.data);
        } catch (err) {
          return;
        }
        window.console.log(resp);

        if (resp.reqId === id) {
          resolve(resp.accounts);
        }
      });
    });
  }
}
