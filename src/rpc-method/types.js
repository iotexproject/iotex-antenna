// @flow
import apiPb from '../proto/api_pb';
import actionPb from '../proto/action_pb';

/** Properties of a Timestamp. */
export interface ITimestamp {
  /** Timestamp seconds */
  seconds?: number | null,

  /** Timestamp nanos */
  nanos?: number | null,
}

// interface for get account
/** Properties of a GetAccountRequest. */
export interface IGetAccountRequest {
  /** GetAccountRequest address */
  address?: string | null
}

/** Properties of an AccountMeta. */
export interface IAccountMeta {
  /** AccountMeta address */
  address?: string | null,

  /** AccountMeta balance */
  balance?: string | null,

  /** AccountMeta nonce */
  nonce?: number | null,

  /** AccountMeta pendingNonce */
  pendingNonce?: number | null,
}

/** Properties of a GetAccountResponse. */
export interface IGetAccountResponse {
  /** GetAccountResponse accountMeta */
  accountMeta?: IAccountMeta | null
}

export class GetAccountRequest {
  static to(req: IGetAccountRequest): any {
    const pbReq = new apiPb.GetAccountRequest();
    pbReq.setAddress(req.address);
    return pbReq;
  }

  static from(pbRes: any): IGetAccountResponse {
    const meta = pbRes.getAccountmeta();
    const res = {
      accountMeta: meta,
    };
    if (meta) {
      res.accountMeta = {
        address: meta.getAddress(),
        balance: meta.getBalance(),
        nonce: meta.getNonce(),
        pendingNonce: meta.getPendingnonce(),
      };
    }
    return res;
  }
}

// interface for get chain meta
export interface IEpochData {
  num?: number | null,
  height?: number | null,
  beaconChainHeight?: number | null,
}

export interface IChainMeta {
  height?: string | null,
  supply?: string | null,
  numActions?: string | null,
  tps?: string | null,
  epoch?: IEpochData | null,
}

export interface IGetChainMetaRequest {
}

export interface IGetChainMetaResponse {
  chainMeta?: IChainMeta | null
}
export class GetChainMetaRequest {
  static to(req: IGetChainMetaRequest): any {
    const pbReq = new apiPb.GetChainMetaRequest();
    return  pbReq;
  }
  static from(pbRes: any): IGetChainMetaResponse {
    const meta = pbRes.getChainmeta();
    const res = {
      chainMeta: meta,
    };
    if (meta) {
      res.chainMeta = {
        height: meta.getHeight(),
        supply: meta.getSupply(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        // epoch: ???
      };
    }
    return res;
  }
}

export class GetChainMetaRequest {
  static to(req: IGetChainMetaRequest): any {
    return new apiPb.GetChainMetaRequest();
  }

  static from(pbRes: any): IGetChainMetaResponse {
    const meta = pbRes.getChainmeta();
    const res = {
      chainMeta: meta,
    };
    if (meta) {
      const epochData = meta.Epoch;
      res.chainMeta = {
        height: meta.getHeight(),
        supply: meta.getSupply(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        epoch: epochData,
      };
    }
    return res;
  }
}

// interface for get block metas
/** Properties of a GetBlockMetasByIndexRequest. */
export interface IGetBlockMetasByIndexRequest {
  /** GetBlockMetasByIndexRequest start*/
  start?: number | null,

  /** GetBlockMetasByIndexRequest count*/
  count?: number | null,
}

/** Properties of a GetBlockMetasByHashRequest. */
export interface IGetBlockMetasByHashRequest {
  /** GetBlockMetasByHashRequest address */
  blkHash?: string | null
}

/** Properties of a GetBlockMetasRequest. */
export interface IGetBlockMetasRequest {
  /** GetBlockMetasRequest byIndex */
  byIndex?: IGetBlockMetasByIndexRequest | null,

  /** GetBlockMetasRequest byHash */
  byHash?: IGetBlockMetasByHashRequest | null,
}

/** Properties of an blockMeta. */
export interface IBlockMeta {
  /** BlockMeta hash */
  hash?: string | null,

  /** BlockMeta height */
  height?: number | null,

  /** BlockMeta timestamp */
  timestamp?: number | null,

  /** BlockMeta numActions */
  numActions?: number | null,

  /** BlockMeta producerAddress */
  producerAddress?: string | null,

  /** BlockMeta transferAmount */
  transferAmount?: string | null,

  /** BlockMeta txRoot */
  txRoot?: string | null,

  /** BlockMeta receiptRoot */
  receiptRoot?: string | null,

  /** BlockMeta deltaStateDigest */
  deltaStateDigest?: string | null,
}

/** Properties of a GetBlockMetasResponse. */
export interface IGetBlockMetasResponse {
  /** GetBlockMetasResponse blockMetas */
  blkMetas?: IBlockMeta[] | null,
}

export class GetBlockMetasRequest {
  static to(req: IGetBlockMetasRequest): any {
    const pbReq = new apiPb.GetBlockMetasRequest();
    if (req.byIndex) {
      const pbReqByIndex = new apiPb.GetBlockMetasByIndexRequest();
      if (req.byIndex.start) {
        pbReqByIndex.setStart(req.byIndex.start);
      }
      if (req.byIndex.count) {
        pbReqByIndex.setCount(req.byIndex.count);
      }
      pbReq.setByindex(pbReqByIndex);
    } else if (req.byHash) {
      const pbReqByHash = new apiPb.GetBlockMetaByHashRequest();
      pbReqByHash.setBlkhash(req.byHash.blkHash);
      pbReq.setByhash(pbReqByHash);
    }
    return pbReq;
  }

  static from(pbRes: any): IGetBlockMetasResponse {
    const metas = pbRes.getBlkmetasList();
    const res = {
      blkMetas: metas,
    };
    if (metas) {
      for (let i = 0; i < metas.length; i++) {
        const parsedMetas = [];
        parsedMetas[i] = {
          hash: metas[i].getHash(),
          height: metas[i].getHeight(),
          timestamp: metas[i].getTimestamp(),
          numActions: metas[i].getNumactions(),
          producerAddress: metas[i].getProduceraddress(),
          transferAmount: metas[i].getTransferamount(),
          txRoot: metas[i].getTxroot(),
          receiptRoot: metas[i].getReceiptroot(),
          deltaStateDigest: metas[i].getDeltastatedigest(),
        };
        res.blkMetas = parsedMetas;
      }
    }
    return res;
  }
}

// interface for get actions
/** Properties of a GetActionsByIndexRequest. */
export interface IGetActionsByIndexRequest {
  /** GetActionsByIndexRequest start */
  start?: number | null,

  /** GetActionsByIndexRequest count */
  count?: number | null,
}

/** Properties of a GetActionsByHashRequest. */
export interface IGetActionsByHashRequest {
  /** GetActionsByHashRequest actionHash */
  actionHash?: string | null,

  /** GetActionsByHashRequest checkingPending */
  checkingPending?: boolean | null,
}

/** Properties of a GetActionsByAddressRequest. */
export interface IGetActionsByAddressRequest {
  /** GetActionsByAddressRequest address */
  address?: string | null,

  /** GetActionsByAddressRequest start */
  start?: number | null,

  /** GetActionsByAddressRequest count */
  count?: number | null,
}

/** Properties of a GetUnconfirmedActionsByAddressRequest. */
export interface IGetUnconfirmedActionsByAddressRequest {
  /** GetUnconfirmedActionsByAddressRequest address */
  address?: string | null,

  /** GetUnconfirmedActionsByAddressRequest start */
  start?: number | null,

  /** GetUnconfirmedActionsByAddressRequest count */
  count?: number | null,
}

/** Properties of a GetActionsByBlockRequest. */
export interface IGetActionsByBlockRequest {
  /** GetActionsByBlockRequest blkHash */
  blkHash?: string | null,

  /** GetActionsByBlockRequest start */
  start?: number | null,

  /** GetActionsByBlockRequest count */
  count?: number | null,
}

/** Properties of a GetActionsRequest. */
export interface IGetActionsRequest {
  /** GetActionsRequest byIndex */
  byIndex?: IGetActionsByIndexRequest | null,

  /** GetActionsRequest byHash */
  byHash?: IGetActionsByHashRequest | null,

  /** GetActionsRequest byAddr */
  byAddr?: IGetActionsByAddressRequest | null,

  /** GetUnconfirmedActionsByAddressRequest unconfirmedByAddr */
  unconfirmedByAddr?: IGetUnconfirmedActionsByAddressRequest | null,

  /** GetActionsByBlockRequest byBlk */
  byBlk?: IGetActionsByBlockRequest | null,
}

/** Properties of a Transfer. */
export interface ITransfer {
  /** Transfer amount */
  amount?: Uint8Array | null,

  /** Transfer recipient */
  recipient?: string | null,

  /** Transfer payload */
  payload?: Uint8Array | null,
}

/** Properties of a Vote. */
export interface IVote {
  /** Vote timestamp */
  timestamp?: ITimestamp | null,

  /** Vote voteeAddress */
  voteeAddress?: string | null,
}

/** Properties of a Execution. */
export interface IExecution {
  /** Execution amount */
  amount?: Uint8Array | null,

  /** Execution contract */
  contract?: string | null,

  /** Execution data */
  data?: Uint8Array | null,
}

/** Properties of a StartSubChain. */
export interface IStartSubChain {
  /** StartSubChain chainID */
  chainID?: number | null,

  /** StartSubChain securityDeposit */
  securityDeposit?: Uint8Array | null,

  /** StartSubChain operationDeposit */
  operationDeposit?: Uint8Array | null,

  /** StartSubChain startHeight */
  startHeight?: number | null,

  /** StartSubChain parentHeightOffset */
  parentHeightOffset?: number | null,
}

/** Properties of a StopSubChain. */
export interface IStopSubChain {
  /** StopSubChain chainID */
  chainID?: number | null,

  /** StopSubChain stopHeight */
  stopHeight?: number | null,

  /** StopSubChain subChainAddress */
  subChainAddress?: string | null,
}

/** Properties of a MerkleRoot. */
export interface IMerkleRoot {
  /** MerkleRoot name */
  name?: string | null,

  /** MerkleRoot value */
  value?: Uint8Array | null,
}

/** Properties of a PutBlock. */
export interface IPutBlock {
  /** PutBlock subChainAddress */
  subChainAddress?: string | null,

  /** PutBlock height */
  height?: number | null,

  /** PutBlock roots */
  roots?: IMerkleRoot[] | null,
}

/** Properties of a CreateDeposit. */
export interface ICreateDeposit {
  /** CreateDeposit chainID */
  chainID?: number | null,

  /** CreateDeposit amount */
  amount?: Uint8Array | null,

  /** CreateDeposit receipt */
  recipient?: string | null,
}

/** Properties of a SettleDeposit. */
export interface ISettleDeposit {
  /** SettleDeposit amount */
  amount?: Uint8Array | null,

  /** SettleDeposit recipient */
  recipient?: string | null,

  /** SettleDeposit index */
  index?: number | null,
}

/** Properties of a CreatePlumChain. */
export interface ICreatePlumChain {
}

/** Properties of a TerminatePlumChain. */
export interface ITerminatePlumChain {
  /** TerminatePlumChain subChainAddress */
  subChainAddress?: string | null,
}

/** Properties of a PlumPutBlock. */
export interface IPlumPutBlock {
  /** PlumPutBlock subChainAddress */
  subChainAddress?: string | null,

  /** PlumPutBlock height */
  height?: number | null,

  /** PlumPutBlock height */
  roots?: Map<string, Uint8Array> | null,
}

/** Properties of a PlumCreateDeposit. */
export interface IPlumCreateDeposit {
  /** PlumCreateDeposit subChainAddress */
  subChainAddress?: string | null,

  /** PlumCreateDeposit amount */
  amount?: Uint8Array | null,

  /** PlumCreateDeposit recipient */
  recipient?: string | null,
}

/** Properties of a PlumStartExit. */
export interface IPlumStartExit {
  /** PlumStartExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumStartExit previousTransfer */
  previousTransfer?: Uint8Array | null,

  /** PlumStartExit previousTransferBlockProof */
  previousTransferBlockProof?: Uint8Array | null,

  /** PlumStartExit previousTransferBlockHeight */
  previousTransferBlockHeight?: number | null,

  /** PlumStartExit exitTransfer */
  exitTransfer?: Uint8Array | null,

  /** PlumStartExit exitTransferBlockProof */
  exitTransferBlockProof?: Uint8Array | null,

  /** PlumStartExit exitTransferBlockHeight */
  exitTransferBlockHeight?: number | null,
}

/** Properties of a PlumChallengeExit. */
export interface IPlumChallengeExit {
  /** PlumChallengeExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumChallengeExit chainID */
  coinID?: number | null,

  /** PlumChallengeExit challengeTransfer */
  challengeTransfer?: Uint8Array | null,

  /** PlumChallengeExit challengeTransferBlockProof */
  challengeTransferBlockProof?: Uint8Array | null,

  /** PlumChallengeExit challengeTransferBlockHeight */
  challengeTransferBlockHeight?: number | null,
}

/** Properties of a PlumResponseChallengeExit. */
export interface IPlumResponseChallengeExit {
  /** PlumResponseChallengeExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumResponseChallengeExit coinID */
  coinID?: number | null,

  /** PlumResponseChallengeExit challengeTransfer */
  challengeTransfer?: Uint8Array | null,

  /** PlumResponseChallengeExit responseTransfer */
  responseTransfer?: Uint8Array | null,

  /** PlumResponseChallengeExit responseTransferBlockProof */
  responseTransferBlockProof?: Uint8Array | null,

  /** PlumResponseChallengeExit previousTransferBlockHeight */
  previousTransferBlockHeight?: number | null,
}

/** Properties of a PlumFinalizeExit. */
export interface IPlumFinalizeExit {
  /** PlumFinalizeExit subChainAddress */
  subChainAddress?: string | null,

  /** PlumFinalizeExit coinID */
  coinID?: number | null,
}

// plum sub chain APIs
/** Properties of a PlumSettleDeposit. */
export interface IPlumSettleDeposit {
  /** PlumSettleDeposit coinID */
  coinID?: number | null,
}

/** Properties of a PlumTransfer. */
export interface IPlumTransfer {
  /** PlumTransfer coinID */
  coinID?: number | null,

  /** PlumTransfer denomination */
  denomination?: Uint8Array | null,

  /** PlumTransfer owner */
  owner?: string | null,

  /** PlumTransfer recipient */
  recipient?: string | null,
}

// //////////////////////////////////////////////////////////////////////////////////////////////////
// BELOW ARE DEFINITIONS FOR BLOCK PRODUCER PROTOCOL
// //////////////////////////////////////////////////////////////////////////////////////////////////

/** Properties of a DepositToRewardingFund. */
export interface IDepositToRewardingFund {
  /** DepositToRewardingFund amount */
  amount?: Uint8Array | null,

  /** DepositToRewardingFund data */
  data?: Uint8Array | null,
}

/** Properties of a ClaimFromRewardingFund. */
export interface IClaimFromRewardingFund {
  /** ClaimFromRewardingFund amount */
  amount?: Uint8Array | null,

  /** ClaimFromRewardingFund data */
  data?: Uint8Array | null,
}

/* export RewardType {
  BlockReward: 0,
  EpochReward: 1,
}*/

/** Properties of a SetReward. */
export interface ISetReward {
  /** SetReward amount */
  amount?: Uint8Array | null,

  /** SetReward data */
  data?: Uint8Array | null,

  /** SetReward type */
  type?: number | null,
}

/** Properties of a GrantReward. */
export interface IGrantReward {
  /** GrantReward type */
  type?: number | null,
}

/** Properties of an ActionCore. */
export interface IActionCore {
  /** ActionCore version */
  version?: number | null,

  /** ActionCore nonce */
  nonce?: number | null,

  /** ActionCore gasLimit */
  gasLimit?: number | null,

  /** ActionCore gasPrice */
  gasPrice?: Uint8Array | null,

  // Action detail fields
  /** ActionCore transfer */
  transfer?: ITransfer | null,
  /** ActionCore vote */
  vote?: IVote | null,
  /** ActionCore execution */
  execution?: IExecution | null,

  // FedChain
  /** ActionCore startSubChain */
  startSubChain?: IStartSubChain | null,
  /** ActionCore stopSubChain */
  stopSubChain?: IStopSubChain | null,
  /** ActionCore putBlock */
  putBlock?: IPutBlock | null,
  /** ActionCore createDeposit */
  createDeposit?: ICreateDeposit | null,
  /** ActionCore settleDeposit */
  settleDeposit?: ISettleDeposit | null,

// PlumChain
  /** ActionCore createPlumChain */
  createPlumChain?: ICreatePlumChain | null,
  /** ActionCore terminatePlumChain */
  terminatePlumChain?: ITerminatePlumChain | null,
  /** ActionCore plumPutBlock */
  plumPutBlock?: IPlumPutBlock | null,
  /** ActionCore plumCreateDeposit */
  plumCreateDeposit?: IPlumCreateDeposit | null,
  /** ActionCore plumStartExit */
  plumStartExit?: IPlumStartExit | null,
  /** ActionCore plumChallengeExit */
  plumChallengeExit?: IPlumChallengeExit | null,
  /** ActionCore plumResponseChallengeExit */
  plumResponseChallengeExit?: IPlumResponseChallengeExit | null,
  /** ActionCore plumFinalizeExit */
  plumFinalizeExit?: IPlumFinalizeExit | null,
  /** ActionCore plumSettleDeposit */
  plumSettleDeposit?: IPlumSettleDeposit | null,
  /** ActionCore plumTransfer */
  plumTransfer?: IPlumTransfer | null,

  // Rewarding protocol actions
  /** ActionCore depositToRewardingFund */
  depositToRewardingFund?: IDepositToRewardingFund | null,
  /** ActionCore claimFromRewardingFund */
  claimFromRewardingFund?: IClaimFromRewardingFund | null,
  /** ActionCore setReward */
  setReward?: ISetReward | null,
  /** ActionCore grantReward */
  grantReward?: IGrantReward | null,
}

/** Properties of an Action. */
export interface IAction {
  /** Action core */
  core?: IActionCore | null,

  /** Action senderPubkey */
  senderPubKey?: Uint8Array | null,

  /** Action signature */
  signature?: Uint8Array | null,
}

/** Properties of a GetActionsResponse. */
export interface IGetActionsResponse {
  /** GetActionsResponse actions */
  actions?: IAction[] | null
}

export class GetActionsRequest {
  static byAddrTo(byAddr: IGetActionsByAddressRequest): any {
    const pbReqByAddr = new apiPb.GetActionsByAddressRequest();
    if (byAddr.address) {
      pbReqByAddr.setAddress(byAddr.address);
    }
    if (byAddr.start) {
      pbReqByAddr.setStart(byAddr.start);
    }
    if (byAddr.count) {
      pbReqByAddr.setCount(byAddr.count);
    }
    return pbReqByAddr;
  }

  static byBlkTo(byBlk: IGetActionsByBlockRequest): any {
    const pbReqByBlk = new apiPb.GetActionsByBlockRequest();
    if (byBlk.blkHash) {
      pbReqByBlk.setBlkhash(byBlk.blkHash);
    }
    if (byBlk.start) {
      pbReqByBlk.setStart(byBlk.start);
    }
    if (byBlk.count) {
      pbReqByBlk.setCount(byBlk.count);
    }
    return pbReqByBlk;
  }

  static byHashTo(byHash: IGetActionsByHashRequest): any {
    const pbReqByHash = new apiPb.GetActionsByHashRequest();
    if (byHash.actionHash) {
      pbReqByHash.setActionhash(byHash.actionHash);
    }
    if (byHash.checkingPending) {
      pbReqByHash.setCheckingpending(byHash.checkingPending);
    }
    return pbReqByHash;
  }

  static byIndexTo(byIndex: IGetActionsByIndexRequest): any {
    const pbReqByIndex = new apiPb.GetActionsByIndexRequest();
    if (byIndex.start) {
      pbReqByIndex.setStart(byIndex.start);
    }
    if (byIndex.count) {
      pbReqByIndex.setCount(byIndex.count);
    }
    return pbReqByIndex;
  }

  static unconfirmedByAddrTo(unconfirmedByAddr: IGetUnconfirmedActionsByAddressRequest): any {
    const pbReqUnconfirmedByAddr = new apiPb.GetUnconfirmedActionsByAddressRequest();
    if (unconfirmedByAddr.start) {
      pbReqUnconfirmedByAddr.setStart(unconfirmedByAddr.start);
    }
    if (unconfirmedByAddr.count) {
      pbReqUnconfirmedByAddr.setCount(unconfirmedByAddr.count);
    }
    if (unconfirmedByAddr.address) {
      pbReqUnconfirmedByAddr.setAddress(unconfirmedByAddr.address);
    }
    return pbReqUnconfirmedByAddr;
  }

  static to(req: IGetActionsRequest): any {
    const pbReq = new apiPb.GetActionsRequest();
    if (req.byAddr) {
      pbReq.setByaddr(this.byAddrTo(req.byAddr));
    }
    if (req.byBlk) {
      pbReq.setByblk(this.byBlkTo(req.byBlk));
    }
    if (req.byHash) {
      pbReq.setByhash(this.byHashTo(req.byHash));
    }
    if (req.byIndex) {
      pbReq.setByindex(this.byIndexTo(req.byIndex));
    }
    if (req.unconfirmedByAddr) {
      pbReq.setUnconfirmedbyaddr(this.unconfirmedByAddrTo(req.unconfirmedByAddr));
    }
    return pbReq;
  }

  static from(pbRes: any): IGetActionsResponse {
    const rawActions = pbRes.getActionsList();
    const res = {
      actions: rawActions,
    };
    if (rawActions) {
      const parsedActions = [];
      for (let i = 0; i < rawActions.length; i++) {
        let actionCore = rawActions[i].getCore();
        if (actionCore) {
          actionCore = {
            version: rawActions[i].getCore().getVersion(),
            nonce: rawActions[i].getCore().getNonce(),
            gasLimit: rawActions[i].getCore().getGaslimit(),
            gasPrice: rawActions[i].getCore().getGasprice(),
            transfer: rawActions[i].getCore().getTransfer(),
            vote: rawActions[i].getCore().getVote(),
            execution: rawActions[i].getCore().getExecution(),
            startSubChain: rawActions[i].getCore().getStartsubchain(),
            stopSubChain: rawActions[i].getCore().getStopsubchain(),
            putBlock: rawActions[i].getCore().getPutblock(),
            createDeposit: rawActions[i].getCore().getCreatedeposit(),
            settleDeposit: rawActions[i].getCore().getSettledeposit(),
            createPlumChain: rawActions[i].getCore().getCreateplumchain(),
            terminatePlumChain: rawActions[i].getCore().getTerminateplumchain(),
            plumPutBlock: rawActions[i].getCore().getPlumputblock(),
            plumCreateDeposit: rawActions[i].getCore().getPlumcreatedeposit(),
            plumStartExit: rawActions[i].getCore().getPlumstartexit(),
            plumChallengeExit: rawActions[i].getCore().getPlumchallengeexit(),
            plumResponseChallengeExit: rawActions[i].getCore().getPlumresponsechallengeexit(),
            plumFinalizeExit: rawActions[i].getCore().getPlumfinalizeexit(),
            plumSettleDeposit: rawActions[i].getCore().getPlumsettledeposit(),
            plumTransfer: rawActions[i].getCore().getPlumtransfer(),
            depositToRewardingFund: rawActions[i].getCore().getDeposittorewardingfund(),
            claimFromRewardingFund: rawActions[i].getCore().getClaimfromrewardingfund(),
            setReward: rawActions[i].getCore().getSetreward(),
            grantReward: rawActions[i].getCore().getGrantreward(),
          };
        }
        parsedActions[i] = {
          core: actionCore,
          senderPubKey: rawActions[i].getSenderpubkey(),
          signature: rawActions[i].getSignature(),
        };
      }
      res.actions = parsedActions;
    }
    return res;
  }
}

/** Properties of a SuggestGasPrice Request. */
export interface ISuggestGasPriceRequest {
}

/** Properties of a SuggestGasPriceResponse. */
export interface ISuggestGasPriceResponse {
  /** SuggestGasPriceResponse gasPrice */
  gasPrice?: number | null
}

export class SuggestGasPriceRequest {
  static to(req: ISuggestGasPriceRequest): any {
    return new apiPb.SuggestGasPriceRequest();
  }

  static from(pbRes: any): ISuggestGasPriceResponse {
    const gasPrice = pbRes.getGasprice();
    return {
      gasPrice,
    };
  }
}

/** Properties of a GetReceiptByActionRequest. */
export interface IGetReceiptByActionRequest {
  /** GetReceiptByActionRequest actionHash */
  actionHash?: string | null,
}

/** Properties of an Log. */
export interface ILog {
  /** Log address */
  address?: string | null,

  /** Log topics */
  topics: Uint8Array[],

  /** Log data */
  data?: Uint8Array | null,

  /** Log blockNumber */
  blockNumber?: number | null,

  /** Log txnHash */
  txnHash?: Uint8Array | null,

  /** Log index */
  index?: number | null,
}

/** Properties of an Receipt. */
export interface IReceipt {
  /** Receipt returnValue */
  returnValue?: Uint8Array | null,

  /** Receipt status */
  status?: number | null,

  /** Receipt actHash */
  actHash?: Uint8Array | null,

  /** Receipt gasConsumed */
  gasConsumed?: number | null,

  /** Receipt contractAddress */
  contractAddress?: string | null,

  /** Receipt logs */
  logs?: ILog[] | null,
}

/** Properties of a GetReceiptByActionResponse. */
export interface IGetReceiptByActionResponse {
  /** GetReceiptByActionResponse receipt */
  receipt?: IReceipt | null,
}

/** Properties of a ReadContractRequest. */
export interface IReadContractRequest {
  /** ReadContractRequest action */
  action?: IAction | null,
}

/** Properties of a ReadContractResponse. */
export interface IReadContractResponse {
  data?: string | null,
}

export class ReadContractRequest {
  static to(req: IReadContractRequest): any {
    const pbReq = new apiPb.ReadContractRequest();
    pbReq.setAction(req.action);
    return pbReq;
  }

  static from(pbRes: any): IReadContractResponse {
    const data = pbRes.getData();
    return {
      data,
    };
  }
}

/** Properties of a SendActionRequest. */
export interface ISendActionRequest {
  /** SendActionRequest action */
  action?: IAction | null,
}

/** Properties of a SendActionResponse. */
export interface ISendActionResponse {}

export class SendActionRequest {
  static to(req: ISendActionRequest): any {
    const pbReq = new apiPb.SendActionRequest();
    pbReq.setAction(req.action);
    return pbReq;
  }

  static from(pbRes: any): ISendActionResponse {
    return {};
  }
}

/** Properties of a EstimateGasForActionRequest. */
export interface IEstimateGasForActionRequest {
  action?: IAction,
}

/** Properties of a EstimateGasForActionResponse. */
export interface IEstimateGasForActionResponse {
  gas?: number | null,
}

export class EstimateGasForActionRequest {
  // $FlowFixMe
  static to(req: IEstimateGasForActionRequest): any {
    const pbActionCore = new actionPb.ActionCore();

    // $FlowFixMe
    if (req.action.core) {
      pbActionCore.setVersion(req.action.core.version);
      // $FlowFixMe
      pbActionCore.setNonce(req.action.core.nonce);
      // $FlowFixMe
      pbActionCore.setGaslimit(req.action.core.gasLimit);
      // $FlowFixMe
      pbActionCore.setGasprice(req.action.core.gasPrice);
      // $FlowFixMe
      pbActionCore.setTransfer(req.action.core.transfer);
      // $FlowFixMe
      pbActionCore.setVote(req.action.core.vote);
      // $FlowFixMe
      pbActionCore.setExecution(req.action.core.execution);
      // $FlowFixMe
      pbActionCore.setStartsubchain(req.action.core.startSubChain);
      // $FlowFixMe
      pbActionCore.setStopsubchain(req.action.core.stopSubChain);
      // $FlowFixMe
      pbActionCore.setPutblock(req.action.core.putBlock);
      // $FlowFixMe
      pbActionCore.setCreatedeposit(req.action.core.createDeposit);
      // $FlowFixMe
      pbActionCore.setSettledeposit(req.action.core.settleDeposit);
      // $FlowFixMe
      pbActionCore.setCreateplumchain(req.action.core.createPlumChain);
      // $FlowFixMe
      pbActionCore.setTerminateplumchain(req.action.core.terminatePlumChain);
      // $FlowFixMe
      pbActionCore.setPlumputblock(req.action.core.plumPutBlock);
      // $FlowFixMe
      pbActionCore.setPlumcreatedeposit(req.action.core.plumCreateDeposit);
      // $FlowFixMe
      pbActionCore.setPlumstartexit(req.action.core.plumStartExit);
      // $FlowFixMe
      pbActionCore.setPlumchallengeexit(req.action.core.plumChallengeExit);
      // $FlowFixMe
      pbActionCore.setPlumresponsechallengeexit(req.action.core.plumResponseChallengeExit);
      // $FlowFixMe
      pbActionCore.setPlumfinalizeexit(req.action.core.plumFinalizeExit);
      // $FlowFixMe
      pbActionCore.setPlumsettledeposit(req.action.core.plumSettleDeposit);
      // $FlowFixMe
      pbActionCore.setPlumtransfer(req.action.core.plumTransfer);
      // $FlowFixMe
      pbActionCore.setDeposittorewardingfund(req.action.core.depositToRewardingFund);
      // $FlowFixMe
      pbActionCore.setClaimfromrewardingfund(req.action.core.claimFromRewardingFund);
      // $FlowFixMe
      pbActionCore.setSetreward(req.action.core.setReward);
      // $FlowFixMe
      pbActionCore.setGrantreward(req.action.core.grantReward);
    }

    const pbAction = new actionPb.Action();
    pbAction.setCore(pbActionCore);
    // $FlowFixMe
    pbAction.setSenderpubkey(req.action.senderPubKey);
    // $FlowFixMe
    pbAction.setSignature(req.action.signature);

    const pbReq = new apiPb.EstimateGasForActionRequest();
    pbReq.setAction(pbAction);
    return pbReq;
  }

  static from(pbRes: any): IEstimateGasForActionResponse {
    return {gas: pbRes.getGas()};
  }
}
