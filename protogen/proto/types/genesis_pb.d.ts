import * as jspb from 'google-protobuf'



export class Genesis extends jspb.Message {
  getBlockchain(): GenesisBlockchain | undefined;
  setBlockchain(value?: GenesisBlockchain): Genesis;
  hasBlockchain(): boolean;
  clearBlockchain(): Genesis;

  getAccount(): GenesisAccount | undefined;
  setAccount(value?: GenesisAccount): Genesis;
  hasAccount(): boolean;
  clearAccount(): Genesis;

  getPoll(): GenesisPoll | undefined;
  setPoll(value?: GenesisPoll): Genesis;
  hasPoll(): boolean;
  clearPoll(): Genesis;

  getRewarding(): GenesisRewarding | undefined;
  setRewarding(value?: GenesisRewarding): Genesis;
  hasRewarding(): boolean;
  clearRewarding(): Genesis;

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
  setTimestamp(value: number): GenesisBlockchain;

  getBlockgaslimit(): number;
  setBlockgaslimit(value: number): GenesisBlockchain;

  getActiongaslimit(): number;
  setActiongaslimit(value: number): GenesisBlockchain;

  getBlockinterval(): number;
  setBlockinterval(value: number): GenesisBlockchain;

  getNumsubepochs(): number;
  setNumsubepochs(value: number): GenesisBlockchain;

  getNumdelegates(): number;
  setNumdelegates(value: number): GenesisBlockchain;

  getNumcandidatedelegates(): number;
  setNumcandidatedelegates(value: number): GenesisBlockchain;

  getTimebasedrotation(): boolean;
  setTimebasedrotation(value: boolean): GenesisBlockchain;

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
  setInitbalanceaddrsList(value: Array<string>): GenesisAccount;
  clearInitbalanceaddrsList(): GenesisAccount;
  addInitbalanceaddrs(value: string, index?: number): GenesisAccount;

  getInitbalancesList(): Array<string>;
  setInitbalancesList(value: Array<string>): GenesisAccount;
  clearInitbalancesList(): GenesisAccount;
  addInitbalances(value: string, index?: number): GenesisAccount;

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
  setEnablegravitychainvoting(value: boolean): GenesisPoll;

  getGravitychainstartheight(): number;
  setGravitychainstartheight(value: number): GenesisPoll;

  getRegistercontractaddress(): string;
  setRegistercontractaddress(value: string): GenesisPoll;

  getStakingcontractaddress(): string;
  setStakingcontractaddress(value: string): GenesisPoll;

  getVotethreshold(): string;
  setVotethreshold(value: string): GenesisPoll;

  getScorethreshold(): string;
  setScorethreshold(value: string): GenesisPoll;

  getSelfstakingthreshold(): string;
  setSelfstakingthreshold(value: string): GenesisPoll;

  getDelegatesList(): Array<GenesisDelegate>;
  setDelegatesList(value: Array<GenesisDelegate>): GenesisPoll;
  clearDelegatesList(): GenesisPoll;
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
  setOperatoraddr(value: string): GenesisDelegate;

  getRewardaddr(): string;
  setRewardaddr(value: string): GenesisDelegate;

  getVotes(): string;
  setVotes(value: string): GenesisDelegate;

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
  setInitadminaddr(value: string): GenesisRewarding;

  getInitbalance(): string;
  setInitbalance(value: string): GenesisRewarding;

  getBlockreward(): string;
  setBlockreward(value: string): GenesisRewarding;

  getEpochreward(): string;
  setEpochreward(value: string): GenesisRewarding;

  getNumdelegatesforepochreward(): number;
  setNumdelegatesforepochreward(value: number): GenesisRewarding;

  getFoundationbonus(): string;
  setFoundationbonus(value: string): GenesisRewarding;

  getNumdelegatesforfoundationbonus(): number;
  setNumdelegatesforfoundationbonus(value: number): GenesisRewarding;

  getFoundationbonuslastepoch(): number;
  setFoundationbonuslastepoch(value: number): GenesisRewarding;

  getProductivitythreshold(): number;
  setProductivitythreshold(value: number): GenesisRewarding;

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

