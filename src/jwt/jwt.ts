import { Account } from "../account/account";
import { fromUtf8 } from "../account/utils";
import { publicKeyToAddress } from "../crypto/crypto";

function base64url(str: string, encoding: BufferEncoding): string {
  return Buffer.from(str, encoding)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function toString(obj: object): string {
  if (typeof obj === "string") {
    return obj;
  }
  if (typeof obj === "number" || Buffer.isBuffer(obj)) {
    return obj.toString();
  }
  return JSON.stringify(obj);
}

// tslint:disable-next-line:no-any
function isObject(thing: any): boolean {
  return Object.prototype.toString.call(thing) === "[object Object]";
}

// tslint:disable-next-line:no-any
function safeJsonParse(thing: string | object): Record<string, any> {
  if (isObject(thing)) {
    // @ts-ignore
    return thing;
  }
  try {
    // @ts-ignore
    return JSON.parse(thing);
  } catch (e) {
    return {};
  }
}

function jwsSecuredInput(
  header: object,
  payload: object,
  encoding: BufferEncoding = "utf8"
): string {
  const encodedHeader = base64url(toString(header), "binary");
  const encodedPayload = base64url(toString(payload), encoding);
  return `${encodedHeader}.${encodedPayload}`;
}

// tslint:disable-next-line:no-any
function headerFromJWS(jwsSig: string): Record<string, any> {
  const encodedHeader = jwsSig.split(".", 1)[0];
  return safeJsonParse(Buffer.from(encodedHeader, "base64").toString("binary"));
}

// tslint:disable-next-line:no-any
function payloadFromJWS(jwsSig: string): Record<string, any> {
  const encodedHeader = jwsSig.split(".")[1];
  return safeJsonParse(Buffer.from(encodedHeader, "base64").toString("binary"));
}

function securedInputFromJWS(jwsSig: string): string {
  return jwsSig.split(".", 2).join(".");
}

function signatureFromJWS(jwsSig: string): string {
  return jwsSig.split(".")[2];
}

const ALG = "EK256K";
export async function sign(
  payload: object,
  secretOrPrivateKey: string
): Promise<string> {
  const securedInput = jwsSecuredInput(
    {
      alg: ALG,
      typ: "JWT"
    },
    payload
  );
  const acct = Account.fromPrivateKey(secretOrPrivateKey);
  const sigHex = await acct.sign(fromUtf8(securedInput));
  const signature = base64url(sigHex.toString("hex"), "hex");
  return `${securedInput}.${signature}`;
}

export async function verify(
  token: string
  // tslint:disable-next-line:no-any
): Promise<Record<string, any>> {
  const header = headerFromJWS(token);
  if (!header) {
    throw new Error("header is empty or does not have alg");
  }
  if (header.alg !== ALG) {
    throw new Error(`alg should be ${ALG} but got ${header.alg}`);
  }
  const securedInput = securedInputFromJWS(token);
  const signature = signatureFromJWS(token);
  const empty = new Account();
  const recoveredAddress = empty.recover(
    fromUtf8(`${securedInput}`),
    Buffer.from(signature, "base64"),
    false
  );
  const securedInputObject = payloadFromJWS(token);
  const secretOrPublicKey = securedInputObject.iss;
  const expectedAddress = publicKeyToAddress(secretOrPublicKey);
  if (recoveredAddress !== expectedAddress) {
    throw new Error(
      `${recoveredAddress} signed the signature but we are expecting ${expectedAddress}`
    );
  }
  if (!securedInputObject.iss || securedInputObject.iss !== secretOrPublicKey) {
    throw new Error(`issuer of the token does not match ${secretOrPublicKey}`);
  }
  return securedInputObject;
}
