import { Account } from "../account/account";
import { Envelop } from "../action/envelop";
import { SignerPlugin } from "../action/method";
export declare class WsSignerPlugin implements SignerPlugin {
  private readonly ws;
  constructor(provider: string);
  signAndSend(envelop: Envelop): Promise<string>;
  getAccount(address: string): Promise<Account>;
}
