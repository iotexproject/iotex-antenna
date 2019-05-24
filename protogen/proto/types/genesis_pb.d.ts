import * as jspb from "google-protobuf"

export class Genesis extends jspb.Message {
  getBlockchain(): GenesisBlockchain | undefined;
  setBlockchain(value?: GenesisBlockchain): void;
  hasBlockchain(): boolean;
  clearBlockchain(): void;

  getAccount(): GenesisAccount | undefined;
  setAccount(value?: GenesisAccount): void;
  hasAccount(): boolean;
  clearAccount(): void;

  getPoll(): GenesisPoll | undefined;
  setPoll(value?: GenesisPoll): void;
  hasPoll(): boolean;
  clearPoll(): void;

  getRewarding(): GenesisRewarding | undefined;
  setRewarding(value?: GenesisRewarding): void;
  hasRewarding(): boolean;
  clearRewarding(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Genesis.AsObject;
  static toObject(includeInstance: boolean, msg: Genesis): Genesis.AsObject;
  static serializeBinaryToWriter(message: Genesis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Genesis;
  static deserializeBinaryFromReader(message: Genesis, reader: jspb.BinaryReader): Genesis;
}

export namespace Genesis {
  export type AsObject = {
    blockchain?: GenesisBlockchain.AsObject,
    account?: GenesisAccount.AsObject,
    poll?: GenesisPoll.AsObject,
    rewarding?: GenesisRewarding.AsObject,
  }
}

export class GenesisBlockchain extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  getBlockgaslimit(): number;
  setBlockgaslimit(value: number): void;

  getActiongaslimit(): number;
  setActiongaslimit(value: number): void;

  getBlockinterval(): number;
  setBlockinterval(value: number): void;

  getNumsubepochs(): number;
  setNumsubepochs(value: number): void;

  getNumdelegates(): number;
  setNumdelegates(value: number): void;

  getNumcandidatedelegates(): number;
  setNumcandidatedelegates(value: number): void;

  getTimebasedrotation(): boolean;
  setTimebasedrotation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisBlockchain.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisBlockchain): GenesisBlockchain.AsObject;
  static serializeBinaryToWriter(message: GenesisBlockchain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisBlockchain;
  static deserializeBinaryFromReader(message: GenesisBlockchain, reader: jspb.BinaryReader): GenesisBlockchain;
}

export namespace GenesisBlockchain {
  export type AsObject = {
    timestamp: number,
    blockgaslimit: number,
    actiongaslimit: number,
    blockinterval: number,
    numsubepochs: number,
    numdelegates: number,
    numcandidatedelegates: number,
    timebasedrotation: boolean,
  }
}

export class GenesisAccount extends jspb.Message {
  getInitbalanceaddrsList(): Array<string>;
  setInitbalanceaddrsList(value: Array<string>): void;
  clearInitbalanceaddrsList(): void;
  addInitbalanceaddrs(value: string, index?: number): void;

  getInitbalancesList(): Array<string>;
  setInitbalancesList(value: Array<string>): void;
  clearInitbalancesList(): void;
  addInitbalances(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisAccount.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisAccount): GenesisAccount.AsObject;
  static serializeBinaryToWriter(message: GenesisAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisAccount;
  static deserializeBinaryFromReader(message: GenesisAccount, reader: jspb.BinaryReader): GenesisAccount;
}

export namespace GenesisAccount {
  export type AsObject = {
    initbalanceaddrsList: Array<string>,
    initbalancesList: Array<string>,
  }
}

export class GenesisPoll extends jspb.Message {
  getEnablegravitychainvoting(): boolean;
  setEnablegravitychainvoting(value: boolean): void;

  getGravitychainstartheight(): number;
  setGravitychainstartheight(value: number): void;

  getRegistercontractaddress(): string;
  setRegistercontractaddress(value: string): void;

  getStakingcontractaddress(): string;
  setStakingcontractaddress(value: string): void;

  getVotethreshold(): string;
  setVotethreshold(value: string): void;

  getScorethreshold(): string;
  setScorethreshold(value: string): void;

  getSelfstakingthreshold(): string;
  setSelfstakingthreshold(value: string): void;

  getDelegatesList(): Array<GenesisDelegate>;
  setDelegatesList(value: Array<GenesisDelegate>): void;
  clearDelegatesList(): void;
  addDelegates(value?: GenesisDelegate, index?: number): GenesisDelegate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisPoll.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisPoll): GenesisPoll.AsObject;
  static serializeBinaryToWriter(message: GenesisPoll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisPoll;
  static deserializeBinaryFromReader(message: GenesisPoll, reader: jspb.BinaryReader): GenesisPoll;
}

export namespace GenesisPoll {
  export type AsObject = {
    enablegravitychainvoting: boolean,
    gravitychainstartheight: number,
    registercontractaddress: string,
    stakingcontractaddress: string,
    votethreshold: string,
    scorethreshold: string,
    selfstakingthreshold: string,
    delegatesList: Array<GenesisDelegate.AsObject>,
  }
}

export class GenesisDelegate extends jspb.Message {
  getOperatoraddr(): string;
  setOperatoraddr(value: string): void;

  getRewardaddr(): string;
  setRewardaddr(value: string): void;

  getVotes(): string;
  setVotes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisDelegate.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisDelegate): GenesisDelegate.AsObject;
  static serializeBinaryToWriter(message: GenesisDelegate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisDelegate;
  static deserializeBinaryFromReader(message: GenesisDelegate, reader: jspb.BinaryReader): GenesisDelegate;
}

export namespace GenesisDelegate {
  export type AsObject = {
    operatoraddr: string,
    rewardaddr: string,
    votes: string,
  }
}

export class GenesisRewarding extends jspb.Message {
  getInitadminaddr(): string;
  setInitadminaddr(value: string): void;

  getInitbalance(): string;
  setInitbalance(value: string): void;

  getBlockreward(): string;
  setBlockreward(value: string): void;

  getEpochreward(): string;
  setEpochreward(value: string): void;

  getNumdelegatesforepochreward(): number;
  setNumdelegatesforepochreward(value: number): void;

  getFoundationbonus(): string;
  setFoundationbonus(value: string): void;

  getNumdelegatesforfoundationbonus(): number;
  setNumdelegatesforfoundationbonus(value: number): void;

  getFoundationbonuslastepoch(): number;
  setFoundationbonuslastepoch(value: number): void;

  getProductivitythreshold(): number;
  setProductivitythreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisRewarding.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisRewarding): GenesisRewarding.AsObject;
  static serializeBinaryToWriter(message: GenesisRewarding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisRewarding;
  static deserializeBinaryFromReader(message: GenesisRewarding, reader: jspb.BinaryReader): GenesisRewarding;
}

export namespace GenesisRewarding {
  export type AsObject = {
    initadminaddr: string,
    initbalance: string,
    blockreward: string,
    epochreward: string,
    numdelegatesforepochreward: number,
    foundationbonus: string,
    numdelegatesforfoundationbonus: number,
    foundationbonuslastepoch: number,
    productivitythreshold: number,
  }
}

