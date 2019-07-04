"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toActionTransfer = toActionTransfer;
exports.toTimestamp = toTimestamp;
exports.toActionExecution = toActionExecution;
exports.toActionStartSubChain = toActionStartSubChain;
exports.toActionStopSubChain = toActionStopSubChain;
exports.toActionPutBlock = toActionPutBlock;
exports.toActionCreateDeposit = toActionCreateDeposit;
exports.toActionSettleDeposit = toActionSettleDeposit;
exports.toActionCreatePlumChain = toActionCreatePlumChain;
exports.toActionTerminatePlumChain = toActionTerminatePlumChain;
exports.toActionPlumPutBlock = toActionPlumPutBlock;
exports.toActionPlumCreateDeposit = toActionPlumCreateDeposit;
exports.toActionPlumStartExit = toActionPlumStartExit;
exports.toActionPlumChallengeExit = toActionPlumChallengeExit;
exports.toActionPlumResponseChallengeExit = toActionPlumResponseChallengeExit;
exports.toActionPlumFinalizeExit = toActionPlumFinalizeExit;
exports.toActionPlumSettleDeposit = toActionPlumSettleDeposit;
exports.toActionPlumTransfer = toActionPlumTransfer;
exports.toActionDepositToRewardingFund = toActionDepositToRewardingFund;
exports.toActionClaimFromRewardingFund = toActionClaimFromRewardingFund;
exports.toActionGrantReward = toActionGrantReward;
exports.toAction = toAction;
exports.GetEpochMetaRequest = exports.ReadStateRequest = exports.EstimateGasForActionRequest = exports.SendActionResponse = exports.SendActionRequest = exports.ReadContractRequest = exports.GetReceiptByActionRequest = exports.SuggestGasPriceRequest = exports.GetActionsRequest = exports.GetBlockMetasRequest = exports.GetServerMetaRequest = exports.GetChainMetaRequest = exports.GetAccountRequest = void 0;

var _timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb");

var _api_pb = _interopRequireDefault(
  require("../../protogen/proto/api/api_pb")
);

var _action_pb = _interopRequireDefault(
  require("../../protogen/proto/types/action_pb")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* tslint:disable:no-any */
const GetAccountRequest = {
  to(req) {
    const pbReq = new _api_pb.default.GetAccountRequest();
    pbReq.setAddress(req.address);
    return pbReq;
  },

  from(pbRes) {
    const meta = pbRes.getAccountmeta();

    if (!meta) {
      return {
        accountMeta: undefined
      };
    }

    return {
      accountMeta: {
        address: meta.getAddress(),
        balance: meta.getBalance(),
        nonce: meta.getNonce(),
        pendingNonce: meta.getPendingnonce(),
        numActions: meta.getNumactions()
      }
    };
  }
}; // interface for get chain meta

exports.GetAccountRequest = GetAccountRequest;
const GetChainMetaRequest = {
  // @ts-ignore
  to(req) {
    return new _api_pb.default.GetChainMetaRequest();
  },

  from(pbRes) {
    const meta = pbRes.getChainmeta();
    const res = {
      chainMeta: meta
    };

    if (meta) {
      const epochData = meta.Epoch;
      res.chainMeta = {
        height: meta.getHeight(),
        numActions: meta.getNumactions(),
        tps: meta.getTps(),
        epoch: epochData
      };
    }

    return res;
  }
}; // interface for get server metas

exports.GetChainMetaRequest = GetChainMetaRequest;
// @ts-ignore
const GetServerMetaRequest = {
  // @ts-ignore
  to(req) {
    return new _api_pb.default.GetServerMetaRequest();
  },

  from(pbRes) {
    const meta = pbRes.getServermeta();

    if (!meta) {
      return {
        serverMeta: undefined
      };
    }

    return {
      serverMeta: {
        packageVersion: meta.getPackageversion(),
        packageCommitID: meta.getPackagecommitid(),
        gitStatus: meta.getGitstatus(),
        goVersion: meta.getGoversion(),
        buildTime: meta.getBuildtime()
      }
    };
  }
}; // interface for get block metas
// Properties of a GetBlockMetasByIndexRequest.

exports.GetServerMetaRequest = GetServerMetaRequest;
const GetBlockMetasRequest = {
  to(req) {
    const pbReq = new _api_pb.default.GetBlockMetasRequest();

    if (req.byIndex) {
      const pbReqByIndex = new _api_pb.default.GetBlockMetasByIndexRequest();

      if (req.byIndex.start) {
        pbReqByIndex.setStart(req.byIndex.start);
      }

      if (req.byIndex.count) {
        pbReqByIndex.setCount(req.byIndex.count);
      }

      pbReq.setByindex(pbReqByIndex);
    } else if (req.byHash) {
      const pbReqByHash = new _api_pb.default.GetBlockMetaByHashRequest();
      pbReqByHash.setBlkhash(req.byHash.blkHash);
      pbReq.setByhash(pbReqByHash);
    }

    return pbReq;
  },

  from(pbRes) {
    const metas = pbRes.getBlkmetasList();
    const res = {
      blkMetas: metas
    };

    if (metas) {
      const parsedMetas = [];

      for (let i = 0; i < metas.length; i++) {
        parsedMetas[i] = {
          hash: metas[i].getHash(),
          height: metas[i].getHeight(),
          timestamp: metas[i].getTimestamp(),
          numActions: metas[i].getNumactions(),
          producerAddress: metas[i].getProduceraddress(),
          transferAmount: metas[i].getTransferamount(),
          txRoot: metas[i].getTxroot(),
          receiptRoot: metas[i].getReceiptroot(),
          deltaStateDigest: metas[i].getDeltastatedigest()
        };
      }

      res.blkMetas = parsedMetas;
    }

    return res;
  }
}; // interface for get actions
// Properties of a GetActionsByIndexRequest.

exports.GetBlockMetasRequest = GetBlockMetasRequest;

function toActionTransfer(req) {
  if (!req) {
    return undefined;
  }

  const pbTransfer = new _action_pb.default.Transfer();
  pbTransfer.setAmount(req.amount);
  pbTransfer.setRecipient(req.recipient);
  pbTransfer.setPayload(req.payload);
  return pbTransfer;
}

function toTimestamp(timestamp) {
  const ts = new _timestamp_pb.Timestamp();

  if (timestamp) {
    ts.setSeconds(timestamp.seconds);
    ts.setNanos(timestamp.nanos);
  }

  return ts;
}

function toActionExecution(req) {
  if (!req) {
    return undefined;
  }

  const pbExecution = new _action_pb.default.Execution();
  pbExecution.setAmount(req.amount);
  pbExecution.setContract(req.contract);
  pbExecution.setData(req.data);
  return pbExecution;
}

function toActionStartSubChain(req) {
  if (!req) {
    return undefined;
  }

  const pbStartSubChain = new _action_pb.default.StartSubChain();
  pbStartSubChain.setChainid(req.chainID);
  pbStartSubChain.setSecuritydeposit(req.securityDeposit);
  pbStartSubChain.setOperationdeposit(req.operationDeposit);
  pbStartSubChain.setStartheight(req.startHeight);
  pbStartSubChain.setParentheightoffset(req.parentHeightOffset);
  return pbStartSubChain;
}

function toActionStopSubChain(req) {
  if (!req) {
    return undefined;
  }

  const pbStopSubChain = new _action_pb.default.StopSubChain(); // @ts-ignore

  pbStopSubChain.setChainid(req.chainID); // @ts-ignore

  pbStopSubChain.setStopheight(req.stopHeight); // @ts-ignore

  pbStopSubChain.setSubchainaddress(req.subChainAddress);
  return pbStopSubChain;
}

function toActionPutBlock(req) {
  if (!req) {
    return undefined;
  }

  const roots = req.roots;
  const rootList = [];

  if (req.roots && roots) {
    for (let i = 0; i < req.roots.length; i++) {
      const rootItem = req.roots && req.roots[i];
      const mkroot = new _action_pb.default.MerkleRoot();
      mkroot.setName(rootItem.name);
      mkroot.setValue(rootItem.value);
      rootList[i] = mkroot;
    }
  }

  const pbPutBlock = new _action_pb.default.PutBlock();
  pbPutBlock.setSubchainaddress(req.subChainAddress);
  pbPutBlock.setHeight(req.height);
  pbPutBlock.setRootsList(rootList);
  return pbPutBlock;
}

function toActionCreateDeposit(req) {
  if (!req) {
    return undefined;
  }

  const pbCreateDeposit = new _action_pb.default.CreateDeposit();
  pbCreateDeposit.setChainid(req.chainID);
  pbCreateDeposit.setAmount(req.amount);
  pbCreateDeposit.setRecipient(req.recipient);
  return pbCreateDeposit;
}

function toActionSettleDeposit(req) {
  if (!req) {
    return undefined;
  }

  const pbSettleDeposit = new _action_pb.default.SettleDeposit();
  pbSettleDeposit.setAmount(req.amount);
  pbSettleDeposit.setRecipient(req.recipient);
  pbSettleDeposit.setIndex(req.index);
  return pbSettleDeposit;
}

function toActionCreatePlumChain(req) {
  if (!req) {
    return undefined;
  }

  return new _action_pb.default.CreatePlumChain();
}

function toActionTerminatePlumChain(req) {
  if (!req) {
    return undefined;
  }

  const pbTerminatePlumChain = new _action_pb.default.TerminatePlumChain();
  pbTerminatePlumChain.setSubchainaddress(req.subChainAddress);
  return pbTerminatePlumChain;
}

function toActionPlumPutBlock(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumPutBlock = new _action_pb.default.PlumPutBlock();
  pbPlumPutBlock.setSubchainaddress(req.subChainAddress);
  pbPlumPutBlock.setHeight(req.height);
  return pbPlumPutBlock;
}

function toActionPlumCreateDeposit(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumCreateDeposit = new _action_pb.default.PlumCreateDeposit(); // @ts-ignore

  pbPlumCreateDeposit.setSubchainaddress(req.subChainAddress); // @ts-ignore

  pbPlumCreateDeposit.setAmount(req.amount); // @ts-ignore

  pbPlumCreateDeposit.setRecipient(req.recipient);
  return pbPlumCreateDeposit;
}

function toActionPlumStartExit(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumStartExit = new _action_pb.default.PlumStartExit();
  pbPlumStartExit.setSubchainaddress(req.subChainAddress);
  pbPlumStartExit.setPrevioustransfer(req.previousTransfer);
  pbPlumStartExit.setPrevioustransferblockproof(req.previousTransferBlockProof);
  pbPlumStartExit.setPrevioustransferblockheight(
    req.previousTransferBlockHeight
  );
  pbPlumStartExit.setExittransfer(req.exitTransfer);
  pbPlumStartExit.setExittransferblockproof(req.exitTransferBlockProof);
  pbPlumStartExit.setExittransferblockheight(req.exitTransferBlockHeight);
  return pbPlumStartExit;
}

function toActionPlumChallengeExit(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumChallengeExit = new _action_pb.default.PlumChallengeExit();
  pbPlumChallengeExit.setSubchainaddress(req.subChainAddress);
  pbPlumChallengeExit.setCoinid(req.coinID);
  pbPlumChallengeExit.setChallengetransfer(req.challengeTransfer);
  pbPlumChallengeExit.setChallengetransferblockproof(
    req.challengeTransferBlockProof
  );
  pbPlumChallengeExit.setChallengetransferblockheight(
    req.challengeTransferBlockHeight
  );
  return pbPlumChallengeExit;
}

function toActionPlumResponseChallengeExit(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumResponseChallengeExit = new _action_pb.default.PlumResponseChallengeExit();
  pbPlumResponseChallengeExit.setSubchainaddress(req.subChainAddress);
  pbPlumResponseChallengeExit.setCoinid(req.coinID);
  pbPlumResponseChallengeExit.setChallengetransfer(req.challengeTransfer);
  pbPlumResponseChallengeExit.setResponsetransfer(req.responseTransfer);
  pbPlumResponseChallengeExit.setResponsetransferblockproof(
    req.responseTransferBlockProof
  );
  return pbPlumResponseChallengeExit;
}

function toActionPlumFinalizeExit(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumFinalizeExit = new _action_pb.default.PlumFinalizeExit();
  pbPlumFinalizeExit.setSubchainaddress(req.subChainAddress);
  pbPlumFinalizeExit.setCoinid(req.coinID);
  return pbPlumFinalizeExit;
}

function toActionPlumSettleDeposit(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumSettleDeposit = new _action_pb.default.PlumSettleDeposit();
  pbPlumSettleDeposit.setCoinid(req.coinID);
  return pbPlumSettleDeposit;
}

function toActionPlumTransfer(req) {
  if (!req) {
    return undefined;
  }

  const pbPlumTransfer = new _action_pb.default.PlumTransfer();
  pbPlumTransfer.setCoinid(req.coinID);
  pbPlumTransfer.setDenomination(req.denomination);
  pbPlumTransfer.setOwner(req.owner);
  pbPlumTransfer.setRecipient(req.recipient);
  return pbPlumTransfer;
}

function toActionDepositToRewardingFund(req) {
  if (!req) {
    return undefined;
  }

  const pbDepositToRewardingFund = new _action_pb.default.DepositToRewardingFund();
  pbDepositToRewardingFund.setAmount(req.amount);
  pbDepositToRewardingFund.setData(req.data);
  return pbDepositToRewardingFund;
}

function toActionClaimFromRewardingFund(req) {
  if (!req) {
    return undefined;
  }

  const pbClaimFromRewardingFund = new _action_pb.default.ClaimFromRewardingFund(); // @ts-ignore

  pbClaimFromRewardingFund.setAmount(req.amount); // @ts-ignore

  pbClaimFromRewardingFund.setData(req.data);
  return pbClaimFromRewardingFund;
}

function toActionGrantReward(req) {
  if (!req) {
    return undefined;
  }

  const pbGrantReward = new _action_pb.default.GrantReward();
  pbGrantReward.setType(req.type);
  return pbGrantReward;
}

function toAction(req) {
  const pbActionCore = new _action_pb.default.ActionCore();
  const core = req && req.core;

  if (core) {
    pbActionCore.setVersion(core.version);
    pbActionCore.setNonce(Number(core.nonce));
    pbActionCore.setGaslimit(Number(core.gasLimit));
    pbActionCore.setGasprice(core.gasPrice);
    pbActionCore.setTransfer(toActionTransfer(core.transfer));
    pbActionCore.setExecution(toActionExecution(core.execution));
    pbActionCore.setStartsubchain(toActionStartSubChain(core.startSubChain));
    pbActionCore.setStopsubchain(toActionStopSubChain(core.stopSubChain));
    pbActionCore.setPutblock(toActionPutBlock(core.putBlock));
    pbActionCore.setCreatedeposit(toActionCreateDeposit(core.createDeposit));
    pbActionCore.setSettledeposit(toActionSettleDeposit(core.settleDeposit));
    pbActionCore.setCreateplumchain(
      toActionCreatePlumChain(core.createPlumChain)
    );
    pbActionCore.setTerminateplumchain(
      toActionTerminatePlumChain(core.terminatePlumChain)
    );
    pbActionCore.setPlumputblock(toActionPlumPutBlock(core.plumPutBlock));
    pbActionCore.setPlumcreatedeposit(
      toActionPlumCreateDeposit(core.plumCreateDeposit)
    );
    pbActionCore.setPlumstartexit(toActionPlumStartExit(core.plumStartExit));
    pbActionCore.setPlumchallengeexit(
      toActionPlumChallengeExit(core.plumChallengeExit)
    );
    pbActionCore.setPlumresponsechallengeexit(
      toActionPlumResponseChallengeExit(core.plumResponseChallengeExit)
    );
    pbActionCore.setPlumfinalizeexit(
      toActionPlumFinalizeExit(core.plumFinalizeExit)
    );
    pbActionCore.setPlumsettledeposit(
      toActionPlumSettleDeposit(core.plumSettleDeposit)
    );
    pbActionCore.setPlumtransfer(toActionPlumTransfer(core.plumTransfer));
    pbActionCore.setDeposittorewardingfund(
      toActionDepositToRewardingFund(core.depositToRewardingFund)
    );
    pbActionCore.setClaimfromrewardingfund(
      toActionClaimFromRewardingFund(core.claimFromRewardingFund)
    );
    pbActionCore.setGrantreward(toActionGrantReward(core.grantReward));
  }

  const pbAction = new _action_pb.default.Action();
  pbAction.setCore(pbActionCore);

  if (req.senderPubKey) {
    pbAction.setSenderpubkey(req.senderPubKey);
  }

  if (req.signature) {
    pbAction.setSignature(req.signature);
  }

  return pbAction;
}

const GetActionsRequest = {
  byAddrTo(byAddr) {
    const pbReqByAddr = new _api_pb.default.GetActionsByAddressRequest();

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
  },

  byBlkTo(byBlk) {
    const pbReqByBlk = new _api_pb.default.GetActionsByBlockRequest();

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
  },

  byHashTo(byHash) {
    const pbReqByHash = new _api_pb.default.GetActionByHashRequest();

    if (byHash.actionHash) {
      pbReqByHash.setActionhash(byHash.actionHash);
    }

    if (byHash.checkingPending) {
      pbReqByHash.setCheckpending(byHash.checkingPending);
    }

    return pbReqByHash;
  },

  byIndexTo(byIndex) {
    const pbReqByIndex = new _api_pb.default.GetActionsByIndexRequest();

    if (byIndex.start) {
      pbReqByIndex.setStart(byIndex.start);
    }

    if (byIndex.count) {
      pbReqByIndex.setCount(byIndex.count);
    }

    return pbReqByIndex;
  },

  unconfirmedByAddrTo(unconfirmedByAddr) {
    const pbReqUnconfirmedByAddr = new _api_pb.default.GetUnconfirmedActionsByAddressRequest();

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
  },

  to(req) {
    const pbReq = new _api_pb.default.GetActionsRequest();

    if (req.byAddr) {
      pbReq.setByaddr(GetActionsRequest.byAddrTo(req.byAddr));
    }

    if (req.byBlk) {
      pbReq.setByblk(GetActionsRequest.byBlkTo(req.byBlk));
    }

    if (req.byHash) {
      pbReq.setByhash(GetActionsRequest.byHashTo(req.byHash));
    }

    if (req.byIndex) {
      pbReq.setByindex(GetActionsRequest.byIndexTo(req.byIndex));
    }

    if (req.unconfirmedByAddr) {
      pbReq.setUnconfirmedbyaddr(
        GetActionsRequest.unconfirmedByAddrTo(req.unconfirmedByAddr)
      );
    }

    return pbReq;
  },

  fromTransfer(pbRes) {
    let transferData = pbRes;

    if (pbRes) {
      transferData = {
        amount: pbRes.getAmount(),
        recipient: pbRes.getRecipient(),
        payload: pbRes.getPayload()
      };
    }

    return transferData;
  },

  fromVote(pbRes) {
    let voteData = pbRes;

    if (voteData) {
      voteData = {
        timestamp: pbRes.getTimestamp(),
        voteeAddress: pbRes.getVoteeaddress()
      };
    }

    return voteData;
  },

  fromExecution(pbRes) {
    if (!pbRes) {
      return;
    } // @ts-ignore

    return {
      amount: pbRes.getAmount(),
      contract: pbRes.getContract(),
      data: pbRes.getData()
    };
  },

  fromStartSubChain(pbRes) {
    let startSubChainData = pbRes;

    if (startSubChainData) {
      startSubChainData = {
        chainID: pbRes.chainID,
        securityDeposit: pbRes.securityDeposit,
        operationDeposit: pbRes.operationDeposit,
        startHeight: pbRes.startHeight,
        parentHeightOffset: pbRes.parentHeightOffset
      };
    }

    return startSubChainData;
  },

  fromStopSubChain(pbRes) {
    let stopSubChainData = pbRes;

    if (stopSubChainData) {
      stopSubChainData = {
        chainID: pbRes.chainID,
        stopHeight: pbRes.stopHeight,
        subChainAddress: pbRes.subChainAddress
      };
    }

    return stopSubChainData;
  },

  fromPutBlock(pbRes) {
    let putBlockData = pbRes;

    if (putBlockData) {
      const rootsData = pbRes.roots;

      if (rootsData) {
        for (let i = 0; i < pbRes.roots.length; i++) {
          rootsData[i] = {
            name: pbRes.roots[i].name,
            value: pbRes.roots[i].value
          };
        }
      }

      putBlockData = {
        subChainAddress: pbRes.subChainAddress,
        height: pbRes.height,
        roots: rootsData
      };
    }

    return putBlockData;
  },

  fromCreateDeposit(pbRes) {
    let createDepositData = pbRes;

    if (createDepositData) {
      createDepositData = {
        chainID: pbRes.chainID,
        amount: pbRes.amount,
        recipient: pbRes.recipient
      };
    }

    return createDepositData;
  },

  fromSettleDeposit(pbRes) {
    let settleDepositData = pbRes;

    if (settleDepositData) {
      settleDepositData = {
        amount: pbRes.amount,
        recipient: pbRes.recipient,
        index: pbRes.index
      };
    }

    return settleDepositData;
  },

  fromCreatePlumChain(pbRes) {
    let createPlumChainData = pbRes;

    if (createPlumChainData) {
      createPlumChainData = {};
    }

    return createPlumChainData;
  },

  fromTerminatePlumChain(pbRes) {
    let terminatePlumChainData = pbRes;

    if (terminatePlumChainData) {
      terminatePlumChainData = {
        subChainAddress: pbRes.subChainAddress
      };
    }

    return terminatePlumChainData;
  },

  fromPlumPutBlock(pbRes) {
    let plumPutBlockData = pbRes;

    if (plumPutBlockData) {
      plumPutBlockData = {
        subChainAddress: pbRes.subChainAddress,
        height: pbRes.height,
        roots: pbRes.roots
      };
    }

    return plumPutBlockData;
  },

  fromPlumCreateDeposit(pbRes) {
    let plumCreateDepositData = pbRes;

    if (plumCreateDepositData) {
      plumCreateDepositData = {
        subChainAddress: pbRes.subChainAddress,
        amount: pbRes.amount,
        recipient: pbRes.recipient
      };
    }

    return plumCreateDepositData;
  },

  fromPlumStartExit(pbRes) {
    let plumStartExitData = pbRes;

    if (plumStartExitData) {
      plumStartExitData = {
        subChainAddress: pbRes.subChainAddress,
        previousTransfer: pbRes.previousTransfer,
        previousTransferBlockProof: pbRes.previousTransferBlockProof,
        previousTransferBlockHeight: pbRes.previousTransferBlockHeight,
        exitTransfer: pbRes.exitTransfer,
        exitTransferBlockProof: pbRes.exitTransferBlockProof,
        exitTransferBlockHeight: pbRes.exitTransferBlockHeight
      };
    }

    return plumStartExitData;
  },

  fromPlumChallengeExit(pbRes) {
    let plumChallengeExitData = pbRes;

    if (plumChallengeExitData) {
      plumChallengeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
        challengeTransfer: pbRes.challengeTransfer,
        challengeTransferBlockProof: pbRes.challengeTransferBlockProof,
        challengeTransferBlockHeight: pbRes.challengeTransferBlockHeight
      };
    }

    return plumChallengeExitData;
  },

  fromPlumResponseChallengeExit(pbRes) {
    let plumResponseChallengeExitData = pbRes;

    if (plumResponseChallengeExitData) {
      plumResponseChallengeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID,
        challengeTransfer: pbRes.challengeTransfer,
        responseTransfer: pbRes.responseTransfer,
        responseTransferBlockProof: pbRes.responseTransferBlockProof,
        previousTransferBlockHeight: pbRes.previousTransferBlockHeight
      };
    }

    return plumResponseChallengeExitData;
  },

  fromPlumFinalizeExit(pbRes) {
    let plumFinalizeExitData = pbRes;

    if (plumFinalizeExitData) {
      plumFinalizeExitData = {
        subChainAddress: pbRes.subChainAddress,
        coinID: pbRes.coinID
      };
    }

    return plumFinalizeExitData;
  },

  fromPlumSettleDeposit(pbRes) {
    let plumSettleDepositData = pbRes;

    if (plumSettleDepositData) {
      plumSettleDepositData = {
        coinID: pbRes.coinID
      };
    }

    return plumSettleDepositData;
  },

  fromPlumTransfer(pbRes) {
    let plumTransferData = pbRes;

    if (plumTransferData) {
      plumTransferData = {
        coinID: pbRes.coinID,
        denomination: pbRes.denomination,
        owner: pbRes.owner,
        recipient: pbRes.recipient
      };
    }

    return plumTransferData;
  },

  fromDepositToRewardingFund(pbRes) {
    let depositToRewardingFundData = pbRes;

    if (depositToRewardingFundData) {
      depositToRewardingFundData = {
        amount: pbRes.amount,
        data: pbRes.data
      };
    }

    return depositToRewardingFundData;
  },

  fromClaimFromRewardingFund(pbRes) {
    let claimFromRewardingFundData = pbRes;

    if (claimFromRewardingFundData) {
      claimFromRewardingFundData = {
        amount: pbRes.amount,
        data: pbRes.data
      };
    }

    return claimFromRewardingFundData;
  },

  fromSetReward(pbRes) {
    let setRewardData = pbRes;

    if (setRewardData) {
      setRewardData = {
        amount: pbRes.amount,
        data: pbRes.data,
        type: pbRes.type
      };
    }

    return setRewardData;
  },

  fromGrantReward(pbRes) {
    if (!pbRes) {
      return undefined;
    }

    return {
      type: pbRes.getType(),
      height: pbRes.getHeight()
    };
  },

  getPutPollResult(req) {
    if (!req) {
      return undefined;
    }

    let candidateList;
    const rawCandidates = req.getCandidates();

    if (rawCandidates) {
      candidateList = {
        candidates: []
      };
      const rawCandidatesList = rawCandidates.getCandidatesList();

      if (rawCandidatesList) {
        for (const rawCandidate of rawCandidatesList) {
          candidateList.candidates.push({
            address: rawCandidate.getAddress(),
            votes: rawCandidate.getVotes(),
            pubKey: rawCandidate.getPubkey(),
            rewardAddress: rawCandidate.getRewardaddress()
          });
        }
      }
    }

    return {
      height: req.getHeight(),
      candidates: candidateList
    };
  },

  // tslint:disable-next-line:max-func-body-length
  from(pbRes) {
    const res = {
      actionInfo: []
    };
    const rawActionInfoList = pbRes.getActioninfoList();

    if (!rawActionInfoList) {
      return res;
    }

    for (const rawActionInfo of rawActionInfoList) {
      const actionInfo = {
        actHash: rawActionInfo.getActhash(),
        blkHash: rawActionInfo.getBlkhash(),
        timestamp: rawActionInfo.getTimestamp()
      };
      const rawAction = rawActionInfo.getAction();

      if (rawAction) {
        const rawActionCore = rawAction.getCore();
        let actionCore;

        if (rawActionCore) {
          actionCore = {
            version: rawActionCore.getVersion(),
            nonce: String(rawActionCore.getNonce()),
            gasLimit: String(rawActionCore.getGaslimit()),
            gasPrice: rawActionCore.getGasprice(),
            transfer: GetActionsRequest.fromTransfer(
              rawActionCore.getTransfer()
            ),
            execution: GetActionsRequest.fromExecution(
              rawActionCore.getExecution()
            ),
            startSubChain: GetActionsRequest.fromStartSubChain(
              rawActionCore.getStartsubchain()
            ),
            stopSubChain: GetActionsRequest.fromStopSubChain(
              rawActionCore.getStopsubchain()
            ),
            putBlock: GetActionsRequest.fromPutBlock(
              rawActionCore.getPutblock()
            ),
            createDeposit: GetActionsRequest.fromCreateDeposit(
              rawActionCore.getCreatedeposit()
            ),
            settleDeposit: GetActionsRequest.fromSettleDeposit(
              rawActionCore.getSettledeposit()
            ),
            createPlumChain: GetActionsRequest.fromCreatePlumChain(
              rawActionCore.getCreateplumchain()
            ),
            terminatePlumChain: GetActionsRequest.fromTerminatePlumChain(
              rawActionCore.getTerminateplumchain()
            ),
            plumPutBlock: GetActionsRequest.fromPlumPutBlock(
              rawActionCore.getPlumputblock()
            ),
            plumCreateDeposit: GetActionsRequest.fromPlumCreateDeposit(
              rawActionCore.getPlumcreatedeposit()
            ),
            plumStartExit: GetActionsRequest.fromPlumStartExit(
              rawActionCore.getPlumstartexit()
            ),
            plumChallengeExit: GetActionsRequest.fromPlumChallengeExit(
              rawActionCore.getPlumchallengeexit()
            ),
            plumResponseChallengeExit: GetActionsRequest.fromPlumResponseChallengeExit(
              rawActionCore.getPlumresponsechallengeexit()
            ),
            plumFinalizeExit: GetActionsRequest.fromPlumFinalizeExit(
              rawActionCore.getPlumfinalizeexit()
            ),
            plumSettleDeposit: GetActionsRequest.fromPlumSettleDeposit(
              rawActionCore.getPlumsettledeposit()
            ),
            plumTransfer: GetActionsRequest.fromPlumTransfer(
              rawActionCore.getPlumtransfer()
            ),
            depositToRewardingFund: GetActionsRequest.fromDepositToRewardingFund(
              rawActionCore.getDeposittorewardingfund()
            ),
            claimFromRewardingFund: GetActionsRequest.fromClaimFromRewardingFund(
              rawActionCore.getClaimfromrewardingfund()
            ),
            grantReward: GetActionsRequest.fromGrantReward(
              rawActionCore.getGrantreward()
            ),
            putPollResult: GetActionsRequest.getPutPollResult(
              rawActionCore.getPutpollresult()
            )
          };
        }

        actionInfo.action = {
          core: actionCore,
          senderPubKey: rawAction.getSenderpubkey(),
          signature: rawAction.getSignature()
        };
      }

      res.actionInfo.push(actionInfo);
    }

    return res;
  }
}; // Properties of a SuggestGasPrice Request.

exports.GetActionsRequest = GetActionsRequest;
const SuggestGasPriceRequest = {
  // @ts-ignore
  to(req) {
    return new _api_pb.default.SuggestGasPriceRequest();
  },

  from(pbRes) {
    const gasPrice = pbRes.getGasprice();
    return {
      gasPrice
    };
  }
}; // Properties of a GetReceiptByActionRequest.

exports.SuggestGasPriceRequest = SuggestGasPriceRequest;

function fromPbReceiptInfo(pbReceiptInfo) {
  if (!pbReceiptInfo) {
    return undefined;
  }

  return {
    receipt: fromPbReceipt(pbReceiptInfo.getReceipt()),
    blkHash: pbReceiptInfo.getBlkhash()
  };
}

const GetReceiptByActionRequest = {
  to(req) {
    const pbReq = new _api_pb.default.GetReceiptByActionRequest();

    if (req.actionHash) {
      pbReq.setActionhash(req.actionHash);
    }

    return pbReq;
  },

  from(pbRes) {
    return {
      receiptInfo: fromPbReceiptInfo(pbRes.getReceiptinfo())
    };
  }
};
exports.GetReceiptByActionRequest = GetReceiptByActionRequest;

function fromPbReceipt(pbReceipt) {
  if (!pbReceipt) {
    return undefined;
  }

  return {
    status: pbReceipt.getStatus(),
    blkHeight: pbReceipt.getBlkheight(),
    actHash: pbReceipt.getActhash(),
    gasConsumed: pbReceipt.getGasconsumed(),
    contractAddress: pbReceipt.getContractaddress(),
    logs: fromPbLogList(pbReceipt.getLogsList())
  };
}

function fromPbLogList(pbLogList) {
  if (!pbLogList) {
    return undefined;
  }

  const res = [];

  for (const log of pbLogList) {
    res.push({
      contractAddress: log.getContractaddress(),
      topics: log.getTopicsList(),
      data: log.getData(),
      blkHeight: log.getBlkheight(),
      actHash: log.getActhash(),
      index: log.getIndex()
    });
  }

  return res;
} // Properties of a ReadContractRequest.

const ReadContractRequest = {
  to(req) {
    const pbReq = new _api_pb.default.ReadContractRequest();
    pbReq.setCalleraddress(req.callerAddress);

    if (req.execution) {
      pbReq.setExecution(toActionExecution(req.execution));
    }

    return pbReq;
  },

  from(pbRes) {
    return {
      data: pbRes.getData(),
      receipt: fromPbReceipt(pbRes.getReceipt())
    };
  }
}; // Properties of a SendActionRequest.

exports.ReadContractRequest = ReadContractRequest;
const SendActionRequest = {
  to(req) {
    const pbReq = new _api_pb.default.SendActionRequest();

    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }

    return pbReq;
  }
};
exports.SendActionRequest = SendActionRequest;
const SendActionResponse = {
  from(resp) {
    return {
      actionHash: resp.getActionhash()
    };
  }
}; // Properties of a EstimateGasForActionRequest.

exports.SendActionResponse = SendActionResponse;
const EstimateGasForActionRequest = {
  to(req) {
    const pbReq = new _api_pb.default.EstimateGasForActionRequest();

    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }

    return pbReq;
  },

  from(pbRes) {
    return {
      gas: pbRes.getGas()
    };
  }
};
exports.EstimateGasForActionRequest = EstimateGasForActionRequest;
const ReadStateRequest = {
  to(req) {
    const pbReq = new _api_pb.default.ReadStateRequest();
    pbReq.setProtocolid(req.protocolID);
    pbReq.setMethodname(req.methodName);
    pbReq.setArgumentsList(req.arguments);
    return pbReq;
  },

  from(pbRes) {
    return {
      data: pbRes.getData()
    };
  }
}; // Properties of a BlockProducerInfo.

exports.ReadStateRequest = ReadStateRequest;
const GetEpochMetaRequest = {
  to(req) {
    const pbReq = new _api_pb.default.GetEpochMetaRequest();

    if (req.epochNumber) {
      pbReq.setEpochnumber(req.epochNumber);
    }

    return pbReq;
  },

  from(pbRes) {
    const epoch = pbRes.getEpochdata();
    const bpInfo = pbRes.getBlockproducersinfoList();
    const res = {
      epochData: {
        num: epoch.getNum(),
        height: epoch.getHeight(),
        gravityChainStartHeight: epoch.getGravitychainstartheight()
      },
      totalBlocks: pbRes.getTotalblocks(),
      blockProducersInfo: bpInfo
    };

    if (bpInfo) {
      const parsedBpinfo = [];

      for (let i = 0; i < bpInfo.length; i++) {
        parsedBpinfo[i] = {
          address: bpInfo[i].getAddress(),
          votes: bpInfo[i].getVotes(),
          active: bpInfo[i].getActive(),
          production: bpInfo[i].getProduction()
        };
      }

      res.blockProducersInfo = parsedBpinfo;
    }

    return res;
  }
};
exports.GetEpochMetaRequest = GetEpochMetaRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ycGMtbWV0aG9kL3R5cGVzLnRzIl0sIm5hbWVzIjpbIkdldEFjY291bnRSZXF1ZXN0IiwidG8iLCJyZXEiLCJwYlJlcSIsImFwaVBiIiwic2V0QWRkcmVzcyIsImFkZHJlc3MiLCJmcm9tIiwicGJSZXMiLCJtZXRhIiwiZ2V0QWNjb3VudG1ldGEiLCJhY2NvdW50TWV0YSIsInVuZGVmaW5lZCIsImdldEFkZHJlc3MiLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsIm5vbmNlIiwiZ2V0Tm9uY2UiLCJwZW5kaW5nTm9uY2UiLCJnZXRQZW5kaW5nbm9uY2UiLCJudW1BY3Rpb25zIiwiZ2V0TnVtYWN0aW9ucyIsIkdldENoYWluTWV0YVJlcXVlc3QiLCJnZXRDaGFpbm1ldGEiLCJyZXMiLCJjaGFpbk1ldGEiLCJlcG9jaERhdGEiLCJFcG9jaCIsImhlaWdodCIsImdldEhlaWdodCIsInRwcyIsImdldFRwcyIsImVwb2NoIiwiR2V0U2VydmVyTWV0YVJlcXVlc3QiLCJnZXRTZXJ2ZXJtZXRhIiwic2VydmVyTWV0YSIsInBhY2thZ2VWZXJzaW9uIiwiZ2V0UGFja2FnZXZlcnNpb24iLCJwYWNrYWdlQ29tbWl0SUQiLCJnZXRQYWNrYWdlY29tbWl0aWQiLCJnaXRTdGF0dXMiLCJnZXRHaXRzdGF0dXMiLCJnb1ZlcnNpb24iLCJnZXRHb3ZlcnNpb24iLCJidWlsZFRpbWUiLCJnZXRCdWlsZHRpbWUiLCJHZXRCbG9ja01ldGFzUmVxdWVzdCIsImJ5SW5kZXgiLCJwYlJlcUJ5SW5kZXgiLCJHZXRCbG9ja01ldGFzQnlJbmRleFJlcXVlc3QiLCJzdGFydCIsInNldFN0YXJ0IiwiY291bnQiLCJzZXRDb3VudCIsInNldEJ5aW5kZXgiLCJieUhhc2giLCJwYlJlcUJ5SGFzaCIsIkdldEJsb2NrTWV0YUJ5SGFzaFJlcXVlc3QiLCJzZXRCbGtoYXNoIiwiYmxrSGFzaCIsInNldEJ5aGFzaCIsIm1ldGFzIiwiZ2V0QmxrbWV0YXNMaXN0IiwiYmxrTWV0YXMiLCJwYXJzZWRNZXRhcyIsImkiLCJsZW5ndGgiLCJoYXNoIiwiZ2V0SGFzaCIsInRpbWVzdGFtcCIsImdldFRpbWVzdGFtcCIsInByb2R1Y2VyQWRkcmVzcyIsImdldFByb2R1Y2VyYWRkcmVzcyIsInRyYW5zZmVyQW1vdW50IiwiZ2V0VHJhbnNmZXJhbW91bnQiLCJ0eFJvb3QiLCJnZXRUeHJvb3QiLCJyZWNlaXB0Um9vdCIsImdldFJlY2VpcHRyb290IiwiZGVsdGFTdGF0ZURpZ2VzdCIsImdldERlbHRhc3RhdGVkaWdlc3QiLCJ0b0FjdGlvblRyYW5zZmVyIiwicGJUcmFuc2ZlciIsImFjdGlvblBiIiwiVHJhbnNmZXIiLCJzZXRBbW91bnQiLCJhbW91bnQiLCJzZXRSZWNpcGllbnQiLCJyZWNpcGllbnQiLCJzZXRQYXlsb2FkIiwicGF5bG9hZCIsInRvVGltZXN0YW1wIiwidHMiLCJUaW1lc3RhbXAiLCJzZXRTZWNvbmRzIiwic2Vjb25kcyIsInNldE5hbm9zIiwibmFub3MiLCJ0b0FjdGlvbkV4ZWN1dGlvbiIsInBiRXhlY3V0aW9uIiwiRXhlY3V0aW9uIiwic2V0Q29udHJhY3QiLCJjb250cmFjdCIsInNldERhdGEiLCJkYXRhIiwidG9BY3Rpb25TdGFydFN1YkNoYWluIiwicGJTdGFydFN1YkNoYWluIiwiU3RhcnRTdWJDaGFpbiIsInNldENoYWluaWQiLCJjaGFpbklEIiwic2V0U2VjdXJpdHlkZXBvc2l0Iiwic2VjdXJpdHlEZXBvc2l0Iiwic2V0T3BlcmF0aW9uZGVwb3NpdCIsIm9wZXJhdGlvbkRlcG9zaXQiLCJzZXRTdGFydGhlaWdodCIsInN0YXJ0SGVpZ2h0Iiwic2V0UGFyZW50aGVpZ2h0b2Zmc2V0IiwicGFyZW50SGVpZ2h0T2Zmc2V0IiwidG9BY3Rpb25TdG9wU3ViQ2hhaW4iLCJwYlN0b3BTdWJDaGFpbiIsIlN0b3BTdWJDaGFpbiIsInNldFN0b3BoZWlnaHQiLCJzdG9wSGVpZ2h0Iiwic2V0U3ViY2hhaW5hZGRyZXNzIiwic3ViQ2hhaW5BZGRyZXNzIiwidG9BY3Rpb25QdXRCbG9jayIsInJvb3RzIiwicm9vdExpc3QiLCJyb290SXRlbSIsIm1rcm9vdCIsIk1lcmtsZVJvb3QiLCJzZXROYW1lIiwibmFtZSIsInNldFZhbHVlIiwidmFsdWUiLCJwYlB1dEJsb2NrIiwiUHV0QmxvY2siLCJzZXRIZWlnaHQiLCJzZXRSb290c0xpc3QiLCJ0b0FjdGlvbkNyZWF0ZURlcG9zaXQiLCJwYkNyZWF0ZURlcG9zaXQiLCJDcmVhdGVEZXBvc2l0IiwidG9BY3Rpb25TZXR0bGVEZXBvc2l0IiwicGJTZXR0bGVEZXBvc2l0IiwiU2V0dGxlRGVwb3NpdCIsInNldEluZGV4IiwiaW5kZXgiLCJ0b0FjdGlvbkNyZWF0ZVBsdW1DaGFpbiIsIkNyZWF0ZVBsdW1DaGFpbiIsInRvQWN0aW9uVGVybWluYXRlUGx1bUNoYWluIiwicGJUZXJtaW5hdGVQbHVtQ2hhaW4iLCJUZXJtaW5hdGVQbHVtQ2hhaW4iLCJ0b0FjdGlvblBsdW1QdXRCbG9jayIsInBiUGx1bVB1dEJsb2NrIiwiUGx1bVB1dEJsb2NrIiwidG9BY3Rpb25QbHVtQ3JlYXRlRGVwb3NpdCIsInBiUGx1bUNyZWF0ZURlcG9zaXQiLCJQbHVtQ3JlYXRlRGVwb3NpdCIsInRvQWN0aW9uUGx1bVN0YXJ0RXhpdCIsInBiUGx1bVN0YXJ0RXhpdCIsIlBsdW1TdGFydEV4aXQiLCJzZXRQcmV2aW91c3RyYW5zZmVyIiwicHJldmlvdXNUcmFuc2ZlciIsInNldFByZXZpb3VzdHJhbnNmZXJibG9ja3Byb29mIiwicHJldmlvdXNUcmFuc2ZlckJsb2NrUHJvb2YiLCJzZXRQcmV2aW91c3RyYW5zZmVyYmxvY2toZWlnaHQiLCJwcmV2aW91c1RyYW5zZmVyQmxvY2tIZWlnaHQiLCJzZXRFeGl0dHJhbnNmZXIiLCJleGl0VHJhbnNmZXIiLCJzZXRFeGl0dHJhbnNmZXJibG9ja3Byb29mIiwiZXhpdFRyYW5zZmVyQmxvY2tQcm9vZiIsInNldEV4aXR0cmFuc2ZlcmJsb2NraGVpZ2h0IiwiZXhpdFRyYW5zZmVyQmxvY2tIZWlnaHQiLCJ0b0FjdGlvblBsdW1DaGFsbGVuZ2VFeGl0IiwicGJQbHVtQ2hhbGxlbmdlRXhpdCIsIlBsdW1DaGFsbGVuZ2VFeGl0Iiwic2V0Q29pbmlkIiwiY29pbklEIiwic2V0Q2hhbGxlbmdldHJhbnNmZXIiLCJjaGFsbGVuZ2VUcmFuc2ZlciIsInNldENoYWxsZW5nZXRyYW5zZmVyYmxvY2twcm9vZiIsImNoYWxsZW5nZVRyYW5zZmVyQmxvY2tQcm9vZiIsInNldENoYWxsZW5nZXRyYW5zZmVyYmxvY2toZWlnaHQiLCJjaGFsbGVuZ2VUcmFuc2ZlckJsb2NrSGVpZ2h0IiwidG9BY3Rpb25QbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0IiwicGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0IiwiUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCIsInNldFJlc3BvbnNldHJhbnNmZXIiLCJyZXNwb25zZVRyYW5zZmVyIiwic2V0UmVzcG9uc2V0cmFuc2ZlcmJsb2NrcHJvb2YiLCJyZXNwb25zZVRyYW5zZmVyQmxvY2tQcm9vZiIsInRvQWN0aW9uUGx1bUZpbmFsaXplRXhpdCIsInBiUGx1bUZpbmFsaXplRXhpdCIsIlBsdW1GaW5hbGl6ZUV4aXQiLCJ0b0FjdGlvblBsdW1TZXR0bGVEZXBvc2l0IiwicGJQbHVtU2V0dGxlRGVwb3NpdCIsIlBsdW1TZXR0bGVEZXBvc2l0IiwidG9BY3Rpb25QbHVtVHJhbnNmZXIiLCJwYlBsdW1UcmFuc2ZlciIsIlBsdW1UcmFuc2ZlciIsInNldERlbm9taW5hdGlvbiIsImRlbm9taW5hdGlvbiIsInNldE93bmVyIiwib3duZXIiLCJ0b0FjdGlvbkRlcG9zaXRUb1Jld2FyZGluZ0Z1bmQiLCJwYkRlcG9zaXRUb1Jld2FyZGluZ0Z1bmQiLCJEZXBvc2l0VG9SZXdhcmRpbmdGdW5kIiwidG9BY3Rpb25DbGFpbUZyb21SZXdhcmRpbmdGdW5kIiwicGJDbGFpbUZyb21SZXdhcmRpbmdGdW5kIiwiQ2xhaW1Gcm9tUmV3YXJkaW5nRnVuZCIsInRvQWN0aW9uR3JhbnRSZXdhcmQiLCJwYkdyYW50UmV3YXJkIiwiR3JhbnRSZXdhcmQiLCJzZXRUeXBlIiwidHlwZSIsInRvQWN0aW9uIiwicGJBY3Rpb25Db3JlIiwiQWN0aW9uQ29yZSIsImNvcmUiLCJzZXRWZXJzaW9uIiwidmVyc2lvbiIsInNldE5vbmNlIiwiTnVtYmVyIiwic2V0R2FzbGltaXQiLCJnYXNMaW1pdCIsInNldEdhc3ByaWNlIiwiZ2FzUHJpY2UiLCJzZXRUcmFuc2ZlciIsInRyYW5zZmVyIiwic2V0RXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwic2V0U3RhcnRzdWJjaGFpbiIsInN0YXJ0U3ViQ2hhaW4iLCJzZXRTdG9wc3ViY2hhaW4iLCJzdG9wU3ViQ2hhaW4iLCJzZXRQdXRibG9jayIsInB1dEJsb2NrIiwic2V0Q3JlYXRlZGVwb3NpdCIsImNyZWF0ZURlcG9zaXQiLCJzZXRTZXR0bGVkZXBvc2l0Iiwic2V0dGxlRGVwb3NpdCIsInNldENyZWF0ZXBsdW1jaGFpbiIsImNyZWF0ZVBsdW1DaGFpbiIsInNldFRlcm1pbmF0ZXBsdW1jaGFpbiIsInRlcm1pbmF0ZVBsdW1DaGFpbiIsInNldFBsdW1wdXRibG9jayIsInBsdW1QdXRCbG9jayIsInNldFBsdW1jcmVhdGVkZXBvc2l0IiwicGx1bUNyZWF0ZURlcG9zaXQiLCJzZXRQbHVtc3RhcnRleGl0IiwicGx1bVN0YXJ0RXhpdCIsInNldFBsdW1jaGFsbGVuZ2VleGl0IiwicGx1bUNoYWxsZW5nZUV4aXQiLCJzZXRQbHVtcmVzcG9uc2VjaGFsbGVuZ2VleGl0IiwicGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCIsInNldFBsdW1maW5hbGl6ZWV4aXQiLCJwbHVtRmluYWxpemVFeGl0Iiwic2V0UGx1bXNldHRsZWRlcG9zaXQiLCJwbHVtU2V0dGxlRGVwb3NpdCIsInNldFBsdW10cmFuc2ZlciIsInBsdW1UcmFuc2ZlciIsInNldERlcG9zaXR0b3Jld2FyZGluZ2Z1bmQiLCJkZXBvc2l0VG9SZXdhcmRpbmdGdW5kIiwic2V0Q2xhaW1mcm9tcmV3YXJkaW5nZnVuZCIsImNsYWltRnJvbVJld2FyZGluZ0Z1bmQiLCJzZXRHcmFudHJld2FyZCIsImdyYW50UmV3YXJkIiwicGJBY3Rpb24iLCJBY3Rpb24iLCJzZXRDb3JlIiwic2VuZGVyUHViS2V5Iiwic2V0U2VuZGVycHVia2V5Iiwic2lnbmF0dXJlIiwic2V0U2lnbmF0dXJlIiwiR2V0QWN0aW9uc1JlcXVlc3QiLCJieUFkZHJUbyIsImJ5QWRkciIsInBiUmVxQnlBZGRyIiwiR2V0QWN0aW9uc0J5QWRkcmVzc1JlcXVlc3QiLCJieUJsa1RvIiwiYnlCbGsiLCJwYlJlcUJ5QmxrIiwiR2V0QWN0aW9uc0J5QmxvY2tSZXF1ZXN0IiwiYnlIYXNoVG8iLCJHZXRBY3Rpb25CeUhhc2hSZXF1ZXN0IiwiYWN0aW9uSGFzaCIsInNldEFjdGlvbmhhc2giLCJjaGVja2luZ1BlbmRpbmciLCJzZXRDaGVja3BlbmRpbmciLCJieUluZGV4VG8iLCJHZXRBY3Rpb25zQnlJbmRleFJlcXVlc3QiLCJ1bmNvbmZpcm1lZEJ5QWRkclRvIiwidW5jb25maXJtZWRCeUFkZHIiLCJwYlJlcVVuY29uZmlybWVkQnlBZGRyIiwiR2V0VW5jb25maXJtZWRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdCIsInNldEJ5YWRkciIsInNldEJ5YmxrIiwic2V0VW5jb25maXJtZWRieWFkZHIiLCJmcm9tVHJhbnNmZXIiLCJ0cmFuc2ZlckRhdGEiLCJnZXRBbW91bnQiLCJnZXRSZWNpcGllbnQiLCJnZXRQYXlsb2FkIiwiZnJvbVZvdGUiLCJ2b3RlRGF0YSIsInZvdGVlQWRkcmVzcyIsImdldFZvdGVlYWRkcmVzcyIsImZyb21FeGVjdXRpb24iLCJnZXRDb250cmFjdCIsImdldERhdGEiLCJmcm9tU3RhcnRTdWJDaGFpbiIsInN0YXJ0U3ViQ2hhaW5EYXRhIiwiZnJvbVN0b3BTdWJDaGFpbiIsInN0b3BTdWJDaGFpbkRhdGEiLCJmcm9tUHV0QmxvY2siLCJwdXRCbG9ja0RhdGEiLCJyb290c0RhdGEiLCJmcm9tQ3JlYXRlRGVwb3NpdCIsImNyZWF0ZURlcG9zaXREYXRhIiwiZnJvbVNldHRsZURlcG9zaXQiLCJzZXR0bGVEZXBvc2l0RGF0YSIsImZyb21DcmVhdGVQbHVtQ2hhaW4iLCJjcmVhdGVQbHVtQ2hhaW5EYXRhIiwiZnJvbVRlcm1pbmF0ZVBsdW1DaGFpbiIsInRlcm1pbmF0ZVBsdW1DaGFpbkRhdGEiLCJmcm9tUGx1bVB1dEJsb2NrIiwicGx1bVB1dEJsb2NrRGF0YSIsImZyb21QbHVtQ3JlYXRlRGVwb3NpdCIsInBsdW1DcmVhdGVEZXBvc2l0RGF0YSIsImZyb21QbHVtU3RhcnRFeGl0IiwicGx1bVN0YXJ0RXhpdERhdGEiLCJmcm9tUGx1bUNoYWxsZW5nZUV4aXQiLCJwbHVtQ2hhbGxlbmdlRXhpdERhdGEiLCJmcm9tUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCIsInBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXREYXRhIiwiZnJvbVBsdW1GaW5hbGl6ZUV4aXQiLCJwbHVtRmluYWxpemVFeGl0RGF0YSIsImZyb21QbHVtU2V0dGxlRGVwb3NpdCIsInBsdW1TZXR0bGVEZXBvc2l0RGF0YSIsImZyb21QbHVtVHJhbnNmZXIiLCJwbHVtVHJhbnNmZXJEYXRhIiwiZnJvbURlcG9zaXRUb1Jld2FyZGluZ0Z1bmQiLCJkZXBvc2l0VG9SZXdhcmRpbmdGdW5kRGF0YSIsImZyb21DbGFpbUZyb21SZXdhcmRpbmdGdW5kIiwiY2xhaW1Gcm9tUmV3YXJkaW5nRnVuZERhdGEiLCJmcm9tU2V0UmV3YXJkIiwic2V0UmV3YXJkRGF0YSIsImZyb21HcmFudFJld2FyZCIsImdldFR5cGUiLCJnZXRQdXRQb2xsUmVzdWx0IiwiY2FuZGlkYXRlTGlzdCIsInJhd0NhbmRpZGF0ZXMiLCJnZXRDYW5kaWRhdGVzIiwiY2FuZGlkYXRlcyIsInJhd0NhbmRpZGF0ZXNMaXN0IiwiZ2V0Q2FuZGlkYXRlc0xpc3QiLCJyYXdDYW5kaWRhdGUiLCJwdXNoIiwidm90ZXMiLCJnZXRWb3RlcyIsInB1YktleSIsImdldFB1YmtleSIsInJld2FyZEFkZHJlc3MiLCJnZXRSZXdhcmRhZGRyZXNzIiwiYWN0aW9uSW5mbyIsInJhd0FjdGlvbkluZm9MaXN0IiwiZ2V0QWN0aW9uaW5mb0xpc3QiLCJyYXdBY3Rpb25JbmZvIiwiYWN0SGFzaCIsImdldEFjdGhhc2giLCJnZXRCbGtoYXNoIiwicmF3QWN0aW9uIiwiZ2V0QWN0aW9uIiwicmF3QWN0aW9uQ29yZSIsImdldENvcmUiLCJhY3Rpb25Db3JlIiwiZ2V0VmVyc2lvbiIsIlN0cmluZyIsImdldEdhc2xpbWl0IiwiZ2V0R2FzcHJpY2UiLCJnZXRUcmFuc2ZlciIsImdldEV4ZWN1dGlvbiIsImdldFN0YXJ0c3ViY2hhaW4iLCJnZXRTdG9wc3ViY2hhaW4iLCJnZXRQdXRibG9jayIsImdldENyZWF0ZWRlcG9zaXQiLCJnZXRTZXR0bGVkZXBvc2l0IiwiZ2V0Q3JlYXRlcGx1bWNoYWluIiwiZ2V0VGVybWluYXRlcGx1bWNoYWluIiwiZ2V0UGx1bXB1dGJsb2NrIiwiZ2V0UGx1bWNyZWF0ZWRlcG9zaXQiLCJnZXRQbHVtc3RhcnRleGl0IiwiZ2V0UGx1bWNoYWxsZW5nZWV4aXQiLCJnZXRQbHVtcmVzcG9uc2VjaGFsbGVuZ2VleGl0IiwiZ2V0UGx1bWZpbmFsaXplZXhpdCIsImdldFBsdW1zZXR0bGVkZXBvc2l0IiwiZ2V0UGx1bXRyYW5zZmVyIiwiZ2V0RGVwb3NpdHRvcmV3YXJkaW5nZnVuZCIsImdldENsYWltZnJvbXJld2FyZGluZ2Z1bmQiLCJnZXRHcmFudHJld2FyZCIsInB1dFBvbGxSZXN1bHQiLCJnZXRQdXRwb2xscmVzdWx0IiwiYWN0aW9uIiwiZ2V0U2VuZGVycHVia2V5IiwiZ2V0U2lnbmF0dXJlIiwiU3VnZ2VzdEdhc1ByaWNlUmVxdWVzdCIsImZyb21QYlJlY2VpcHRJbmZvIiwicGJSZWNlaXB0SW5mbyIsInJlY2VpcHQiLCJmcm9tUGJSZWNlaXB0IiwiZ2V0UmVjZWlwdCIsIkdldFJlY2VpcHRCeUFjdGlvblJlcXVlc3QiLCJyZWNlaXB0SW5mbyIsImdldFJlY2VpcHRpbmZvIiwicGJSZWNlaXB0Iiwic3RhdHVzIiwiZ2V0U3RhdHVzIiwiYmxrSGVpZ2h0IiwiZ2V0QmxraGVpZ2h0IiwiZ2FzQ29uc3VtZWQiLCJnZXRHYXNjb25zdW1lZCIsImNvbnRyYWN0QWRkcmVzcyIsImdldENvbnRyYWN0YWRkcmVzcyIsImxvZ3MiLCJmcm9tUGJMb2dMaXN0IiwiZ2V0TG9nc0xpc3QiLCJwYkxvZ0xpc3QiLCJsb2ciLCJ0b3BpY3MiLCJnZXRUb3BpY3NMaXN0IiwiZ2V0SW5kZXgiLCJSZWFkQ29udHJhY3RSZXF1ZXN0Iiwic2V0Q2FsbGVyYWRkcmVzcyIsImNhbGxlckFkZHJlc3MiLCJTZW5kQWN0aW9uUmVxdWVzdCIsInNldEFjdGlvbiIsIlNlbmRBY3Rpb25SZXNwb25zZSIsInJlc3AiLCJnZXRBY3Rpb25oYXNoIiwiRXN0aW1hdGVHYXNGb3JBY3Rpb25SZXF1ZXN0IiwiZ2FzIiwiZ2V0R2FzIiwiUmVhZFN0YXRlUmVxdWVzdCIsInNldFByb3RvY29saWQiLCJwcm90b2NvbElEIiwic2V0TWV0aG9kbmFtZSIsIm1ldGhvZE5hbWUiLCJzZXRBcmd1bWVudHNMaXN0IiwiYXJndW1lbnRzIiwiR2V0RXBvY2hNZXRhUmVxdWVzdCIsImVwb2NoTnVtYmVyIiwic2V0RXBvY2hudW1iZXIiLCJnZXRFcG9jaGRhdGEiLCJicEluZm8iLCJnZXRCbG9ja3Byb2R1Y2Vyc2luZm9MaXN0IiwibnVtIiwiZ2V0TnVtIiwiZ3Jhdml0eUNoYWluU3RhcnRIZWlnaHQiLCJnZXRHcmF2aXR5Y2hhaW5zdGFydGhlaWdodCIsInRvdGFsQmxvY2tzIiwiZ2V0VG90YWxibG9ja3MiLCJibG9ja1Byb2R1Y2Vyc0luZm8iLCJwYXJzZWRCcGluZm8iLCJhY3RpdmUiLCJnZXRBY3RpdmUiLCJwcm9kdWN0aW9uIiwiZ2V0UHJvZHVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFPQTs7OztBQVZBO0FBdURPLE1BQU1BLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSxFQUFFLENBQUNDLEdBQUQsRUFBK0I7QUFDL0IsVUFBTUMsS0FBSyxHQUFHLElBQUlDLGdCQUFN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QUFLLENBQUMwYSwwQkFBTjtBQUhoQixPQUREO0FBTVZDLE1BQUFBLFdBQVcsRUFBRW5jLEtBQUssQ0FBQ29jLGNBQU4sRUFOSDtBQU9WQyxNQUFBQSxrQkFBa0IsRUFBRVI7QUFQVixLQUFaOztBQVNBLFFBQUlBLE1BQUosRUFBWTtBQUNWLFlBQU1TLFlBQVksR0FBRyxFQUFyQjs7QUFDQSxXQUFLLElBQUk3WSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb1ksTUFBTSxDQUFDblksTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDdEM2WSxRQUFBQSxZQUFZLENBQUM3WSxDQUFELENBQVosR0FBa0I7QUFDaEIzRCxVQUFBQSxPQUFPLEVBQUUrYixNQUFNLENBQUNwWSxDQUFELENBQU4sQ0FBVXBELFVBQVYsRUFETztBQUVoQnlWLFVBQUFBLEtBQUssRUFBRStGLE1BQU0sQ0FBQ3BZLENBQUQsQ0FBTixDQUFVc1MsUUFBVixFQUZTO0FBR2hCd0csVUFBQUEsTUFBTSxFQUFFVixNQUFNLENBQUNwWSxDQUFELENBQU4sQ0FBVStZLFNBQVYsRUFIUTtBQUloQkMsVUFBQUEsVUFBVSxFQUFFWixNQUFNLENBQUNwWSxDQUFELENBQU4sQ0FBVWlaLGFBQVY7QUFKSSxTQUFsQjtBQU1EOztBQUNEMWIsTUFBQUEsR0FBRyxDQUFDcWIsa0JBQUosR0FBeUJDLFlBQXpCO0FBQ0Q7O0FBRUQsV0FBT3RiLEdBQVA7QUFDRDs7QUFsQ2dDLENBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG5cbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gXCJnb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL3RpbWVzdGFtcF9wYlwiO1xuaW1wb3J0IGFwaVBiLCB7XG4gIEdldEFjY291bnRSZXNwb25zZSxcbiAgR2V0QWN0aW9uc1Jlc3BvbnNlLFxuICBHZXRSZWNlaXB0QnlBY3Rpb25SZXNwb25zZSxcbiAgR2V0U2VydmVyTWV0YVJlc3BvbnNlLFxuICBSZWFkU3RhdGVSZXNwb25zZVxufSBmcm9tIFwiLi4vLi4vcHJvdG9nZW4vcHJvdG8vYXBpL2FwaV9wYlwiO1xuaW1wb3J0IGFjdGlvblBiLCB7XG4gIEV4ZWN1dGlvbixcbiAgUHV0UG9sbFJlc3VsdFxufSBmcm9tIFwiLi4vLi4vcHJvdG9nZW4vcHJvdG8vdHlwZXMvYWN0aW9uX3BiXCI7XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBUaW1lc3RhbXAuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lc3RhbXAge1xuICAvLyBUaW1lc3RhbXAgc2Vjb25kc1xuICBzZWNvbmRzOiBudW1iZXI7XG5cbiAgLy8gVGltZXN0YW1wIG5hbm9zXG4gIG5hbm9zOiBudW1iZXI7XG59XG5cbi8vIGludGVyZmFjZSBmb3IgZ2V0IGFjY291bnRcbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRBY2NvdW50UmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldEFjY291bnRSZXF1ZXN0IHtcbiAgLy8gR2V0QWNjb3VudFJlcXVlc3QgYWRkcmVzc1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYW4gQWNjb3VudE1ldGEuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50TWV0YSB7XG4gIC8vIEFjY291bnRNZXRhIGFkZHJlc3NcbiAgYWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIEFjY291bnRNZXRhIGJhbGFuY2VcbiAgYmFsYW5jZTogc3RyaW5nO1xuXG4gIC8vIEFjY291bnRNZXRhIG5vbmNlLiBUeXBlIGlzIHN0cmluZyBpbiBub2RlIGJ1dCBudW1iZXIgaW4gYnJvd3Nlci5cbiAgbm9uY2U6IHN0cmluZyB8IG51bWJlcjtcblxuICAvLyBBY2NvdW50TWV0YSBwZW5kaW5nTm9uY2UuIFR5cGUgaXMgc3RyaW5nIGluIG5vZGUgYnV0IG51bWJlciBpbiBicm93c2VyLlxuICBwZW5kaW5nTm9uY2U6IHN0cmluZyB8IG51bWJlcjtcblxuICAvLyBBY2NvdW50TWV0YSBudW1BY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIGFjY291bnQuIFR5cGUgaXMgc3RyaW5nIGluIG5vZGUgYnV0IG51bWJlciBpbiBicm93c2VyLlxuICBudW1BY3Rpb25zOiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRBY2NvdW50UmVzcG9uc2UuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRBY2NvdW50UmVzcG9uc2Uge1xuICAvLyBHZXRBY2NvdW50UmVzcG9uc2UgYWNjb3VudE1ldGFcbiAgYWNjb3VudE1ldGE6IElBY2NvdW50TWV0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IEdldEFjY291bnRSZXF1ZXN0ID0ge1xuICB0byhyZXE6IElHZXRBY2NvdW50UmVxdWVzdCk6IGFueSB7XG4gICAgY29uc3QgcGJSZXEgPSBuZXcgYXBpUGIuR2V0QWNjb3VudFJlcXVlc3QoKTtcbiAgICBwYlJlcS5zZXRBZGRyZXNzKHJlcS5hZGRyZXNzKTtcbiAgICByZXR1cm4gcGJSZXE7XG4gIH0sXG5cbiAgZnJvbShwYlJlczogR2V0QWNjb3VudFJlc3BvbnNlKTogSUdldEFjY291bnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWV0YSA9IHBiUmVzLmdldEFjY291bnRtZXRhKCk7XG4gICAgaWYgKCFtZXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY2NvdW50TWV0YTogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhY2NvdW50TWV0YToge1xuICAgICAgICBhZGRyZXNzOiBtZXRhLmdldEFkZHJlc3MoKSxcbiAgICAgICAgYmFsYW5jZTogbWV0YS5nZXRCYWxhbmNlKCksXG4gICAgICAgIG5vbmNlOiBtZXRhLmdldE5vbmNlKCksXG4gICAgICAgIHBlbmRpbmdOb25jZTogbWV0YS5nZXRQZW5kaW5nbm9uY2UoKSxcbiAgICAgICAgbnVtQWN0aW9uczogbWV0YS5nZXROdW1hY3Rpb25zKClcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG4vLyBpbnRlcmZhY2UgZm9yIGdldCBjaGFpbiBtZXRhXG5leHBvcnQgaW50ZXJmYWNlIElFcG9jaERhdGEge1xuICBudW06IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGdyYXZpdHlDaGFpblN0YXJ0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYWluTWV0YSB7XG4gIGhlaWdodDogc3RyaW5nO1xuICBudW1BY3Rpb25zOiBzdHJpbmc7XG4gIHRwczogc3RyaW5nO1xuICBlcG9jaDogSUVwb2NoRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR2V0Q2hhaW5NZXRhUmVxdWVzdCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRDaGFpbk1ldGFSZXNwb25zZSB7XG4gIGNoYWluTWV0YTogSUNoYWluTWV0YTtcbn1cblxuZXhwb3J0IGNvbnN0IEdldENoYWluTWV0YVJlcXVlc3QgPSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgdG8ocmVxOiBJR2V0Q2hhaW5NZXRhUmVxdWVzdCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBhcGlQYi5HZXRDaGFpbk1ldGFSZXF1ZXN0KCk7XG4gIH0sXG5cbiAgZnJvbShwYlJlczogYW55KTogSUdldENoYWluTWV0YVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXRhID0gcGJSZXMuZ2V0Q2hhaW5tZXRhKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgY2hhaW5NZXRhOiBtZXRhXG4gICAgfTtcbiAgICBpZiAobWV0YSkge1xuICAgICAgY29uc3QgZXBvY2hEYXRhID0gbWV0YS5FcG9jaDtcbiAgICAgIHJlcy5jaGFpbk1ldGEgPSB7XG4gICAgICAgIGhlaWdodDogbWV0YS5nZXRIZWlnaHQoKSxcbiAgICAgICAgbnVtQWN0aW9uczogbWV0YS5nZXROdW1hY3Rpb25zKCksXG4gICAgICAgIHRwczogbWV0YS5nZXRUcHMoKSxcbiAgICAgICAgZXBvY2g6IGVwb2NoRGF0YVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLy8gaW50ZXJmYWNlIGZvciBnZXQgc2VydmVyIG1ldGFzXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2ZXJNZXRhIHtcbiAgcGFja2FnZVZlcnNpb246IHN0cmluZztcbiAgcGFja2FnZUNvbW1pdElEOiBzdHJpbmc7XG4gIGdpdFN0YXR1czogc3RyaW5nO1xuICBnb1ZlcnNpb246IHN0cmluZztcbiAgYnVpbGRUaW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldFNlcnZlck1ldGFSZXF1ZXN0IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldFNlcnZlck1ldGFSZXNwb25zZSB7XG4gIHNlcnZlck1ldGE6IElTZXJ2ZXJNZXRhIHwgdW5kZWZpbmVkO1xufVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IEdldFNlcnZlck1ldGFSZXF1ZXN0ID0ge1xuICAvLyBAdHMtaWdub3JlXG4gIHRvKHJlcTogSUdldFNlcnZlck1ldGFSZXF1ZXN0KTogYXBpUGIuR2V0U2VydmVyTWV0YVJlcXVlc3Qge1xuICAgIHJldHVybiBuZXcgYXBpUGIuR2V0U2VydmVyTWV0YVJlcXVlc3QoKTtcbiAgfSxcblxuICBmcm9tKHBiUmVzOiBHZXRTZXJ2ZXJNZXRhUmVzcG9uc2UpOiBJR2V0U2VydmVyTWV0YVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXRhID0gcGJSZXMuZ2V0U2VydmVybWV0YSgpO1xuICAgIGlmICghbWV0YSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VydmVyTWV0YTogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXJ2ZXJNZXRhOiB7XG4gICAgICAgIHBhY2thZ2VWZXJzaW9uOiBtZXRhLmdldFBhY2thZ2V2ZXJzaW9uKCksXG4gICAgICAgIHBhY2thZ2VDb21taXRJRDogbWV0YS5nZXRQYWNrYWdlY29tbWl0aWQoKSxcbiAgICAgICAgZ2l0U3RhdHVzOiBtZXRhLmdldEdpdHN0YXR1cygpLFxuICAgICAgICBnb1ZlcnNpb246IG1ldGEuZ2V0R292ZXJzaW9uKCksXG4gICAgICAgIGJ1aWxkVGltZTogbWV0YS5nZXRCdWlsZHRpbWUoKVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbi8vIGludGVyZmFjZSBmb3IgZ2V0IGJsb2NrIG1ldGFzXG4vLyBQcm9wZXJ0aWVzIG9mIGEgR2V0QmxvY2tNZXRhc0J5SW5kZXhSZXF1ZXN0LlxuZXhwb3J0IGludGVyZmFjZSBJR2V0QmxvY2tNZXRhc0J5SW5kZXhSZXF1ZXN0IHtcbiAgLy8gR2V0QmxvY2tNZXRhc0J5SW5kZXhSZXF1ZXN0IHN0YXJ0XG4gIHN0YXJ0OiBudW1iZXI7XG5cbiAgLy8gR2V0QmxvY2tNZXRhc0J5SW5kZXhSZXF1ZXN0IGNvdW50XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRCbG9ja01ldGFzQnlIYXNoUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldEJsb2NrTWV0YXNCeUhhc2hSZXF1ZXN0IHtcbiAgLy8gR2V0QmxvY2tNZXRhc0J5SGFzaFJlcXVlc3QgYWRkcmVzc1xuICBibGtIYXNoOiBzdHJpbmc7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRCbG9ja01ldGFzUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldEJsb2NrTWV0YXNSZXF1ZXN0IHtcbiAgLy8gR2V0QmxvY2tNZXRhc1JlcXVlc3QgYnlJbmRleFxuICBieUluZGV4PzogSUdldEJsb2NrTWV0YXNCeUluZGV4UmVxdWVzdDtcblxuICAvLyBHZXRCbG9ja01ldGFzUmVxdWVzdCBieUhhc2hcbiAgYnlIYXNoPzogSUdldEJsb2NrTWV0YXNCeUhhc2hSZXF1ZXN0O1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGFuIGJsb2NrTWV0YS5cbmV4cG9ydCBpbnRlcmZhY2UgSUJsb2NrTWV0YSB7XG4gIC8vIEJsb2NrTWV0YSBoYXNoXG4gIGhhc2g6IHN0cmluZztcblxuICAvLyBCbG9ja01ldGEgaGVpZ2h0XG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8vIEJsb2NrTWV0YSB0aW1lc3RhbXBcbiAgdGltZXN0YW1wOiBJVGltZXN0YW1wO1xuXG4gIC8vIEJsb2NrTWV0YSBudW1BY3Rpb25zXG4gIG51bUFjdGlvbnM6IG51bWJlcjtcblxuICAvLyBCbG9ja01ldGEgcHJvZHVjZXJBZGRyZXNzXG4gIHByb2R1Y2VyQWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIEJsb2NrTWV0YSB0cmFuc2ZlckFtb3VudFxuICB0cmFuc2ZlckFtb3VudDogc3RyaW5nO1xuXG4gIC8vIEJsb2NrTWV0YSB0eFJvb3RcbiAgdHhSb290OiBzdHJpbmc7XG5cbiAgLy8gQmxvY2tNZXRhIHJlY2VpcHRSb290XG4gIHJlY2VpcHRSb290OiBzdHJpbmc7XG5cbiAgLy8gQmxvY2tNZXRhIGRlbHRhU3RhdGVEaWdlc3RcbiAgZGVsdGFTdGF0ZURpZ2VzdDogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgR2V0QmxvY2tNZXRhc1Jlc3BvbnNlLlxuZXhwb3J0IGludGVyZmFjZSBJR2V0QmxvY2tNZXRhc1Jlc3BvbnNlIHtcbiAgLy8gR2V0QmxvY2tNZXRhc1Jlc3BvbnNlIGJsb2NrTWV0YXNcbiAgYmxrTWV0YXM6IEFycmF5PElCbG9ja01ldGE+O1xufVxuXG5leHBvcnQgY29uc3QgR2V0QmxvY2tNZXRhc1JlcXVlc3QgPSB7XG4gIHRvKHJlcTogSUdldEJsb2NrTWV0YXNSZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcSA9IG5ldyBhcGlQYi5HZXRCbG9ja01ldGFzUmVxdWVzdCgpO1xuICAgIGlmIChyZXEuYnlJbmRleCkge1xuICAgICAgY29uc3QgcGJSZXFCeUluZGV4ID0gbmV3IGFwaVBiLkdldEJsb2NrTWV0YXNCeUluZGV4UmVxdWVzdCgpO1xuICAgICAgaWYgKHJlcS5ieUluZGV4LnN0YXJ0KSB7XG4gICAgICAgIHBiUmVxQnlJbmRleC5zZXRTdGFydChyZXEuYnlJbmRleC5zdGFydCk7XG4gICAgICB9XG4gICAgICBpZiAocmVxLmJ5SW5kZXguY291bnQpIHtcbiAgICAgICAgcGJSZXFCeUluZGV4LnNldENvdW50KHJlcS5ieUluZGV4LmNvdW50KTtcbiAgICAgIH1cbiAgICAgIHBiUmVxLnNldEJ5aW5kZXgocGJSZXFCeUluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHJlcS5ieUhhc2gpIHtcbiAgICAgIGNvbnN0IHBiUmVxQnlIYXNoID0gbmV3IGFwaVBiLkdldEJsb2NrTWV0YUJ5SGFzaFJlcXVlc3QoKTtcbiAgICAgIHBiUmVxQnlIYXNoLnNldEJsa2hhc2gocmVxLmJ5SGFzaC5ibGtIYXNoKTtcbiAgICAgIHBiUmVxLnNldEJ5aGFzaChwYlJlcUJ5SGFzaCk7XG4gICAgfVxuICAgIHJldHVybiBwYlJlcTtcbiAgfSxcblxuICBmcm9tKHBiUmVzOiBhbnkpOiBJR2V0QmxvY2tNZXRhc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXRhcyA9IHBiUmVzLmdldEJsa21ldGFzTGlzdCgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIGJsa01ldGFzOiBtZXRhc1xuICAgIH07XG4gICAgaWYgKG1ldGFzKSB7XG4gICAgICBjb25zdCBwYXJzZWRNZXRhcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJzZWRNZXRhc1tpXSA9IHtcbiAgICAgICAgICBoYXNoOiBtZXRhc1tpXS5nZXRIYXNoKCksXG4gICAgICAgICAgaGVpZ2h0OiBtZXRhc1tpXS5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG1ldGFzW2ldLmdldFRpbWVzdGFtcCgpLFxuICAgICAgICAgIG51bUFjdGlvbnM6IG1ldGFzW2ldLmdldE51bWFjdGlvbnMoKSxcbiAgICAgICAgICBwcm9kdWNlckFkZHJlc3M6IG1ldGFzW2ldLmdldFByb2R1Y2VyYWRkcmVzcygpLFxuICAgICAgICAgIHRyYW5zZmVyQW1vdW50OiBtZXRhc1tpXS5nZXRUcmFuc2ZlcmFtb3VudCgpLFxuICAgICAgICAgIHR4Um9vdDogbWV0YXNbaV0uZ2V0VHhyb290KCksXG4gICAgICAgICAgcmVjZWlwdFJvb3Q6IG1ldGFzW2ldLmdldFJlY2VpcHRyb290KCksXG4gICAgICAgICAgZGVsdGFTdGF0ZURpZ2VzdDogbWV0YXNbaV0uZ2V0RGVsdGFzdGF0ZWRpZ2VzdCgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXMuYmxrTWV0YXMgPSBwYXJzZWRNZXRhcztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLy8gaW50ZXJmYWNlIGZvciBnZXQgYWN0aW9uc1xuLy8gUHJvcGVydGllcyBvZiBhIEdldEFjdGlvbnNCeUluZGV4UmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldEFjdGlvbnNCeUluZGV4UmVxdWVzdCB7XG4gIC8vIEdldEFjdGlvbnNCeUluZGV4UmVxdWVzdCBzdGFydFxuICBzdGFydDogbnVtYmVyO1xuXG4gIC8vIEdldEFjdGlvbnNCeUluZGV4UmVxdWVzdCBjb3VudFxuICBjb3VudDogbnVtYmVyO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgR2V0QWN0aW9uc0J5SGFzaFJlcXVlc3QuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRBY3Rpb25zQnlIYXNoUmVxdWVzdCB7XG4gIC8vIEdldEFjdGlvbnNCeUhhc2hSZXF1ZXN0IGFjdGlvbkhhc2hcbiAgYWN0aW9uSGFzaDogc3RyaW5nO1xuXG4gIC8vIEdldEFjdGlvbnNCeUhhc2hSZXF1ZXN0IGNoZWNraW5nUGVuZGluZ1xuICBjaGVja2luZ1BlbmRpbmc6IGJvb2xlYW47XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldEFjdGlvbnNCeUFkZHJlc3NSZXF1ZXN0IHtcbiAgLy8gR2V0QWN0aW9uc0J5QWRkcmVzc1JlcXVlc3QgYWRkcmVzc1xuICBhZGRyZXNzOiBzdHJpbmc7XG5cbiAgLy8gR2V0QWN0aW9uc0J5QWRkcmVzc1JlcXVlc3Qgc3RhcnRcbiAgc3RhcnQ6IG51bWJlcjtcblxuICAvLyBHZXRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdCBjb3VudFxuICBjb3VudDogbnVtYmVyO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgR2V0VW5jb25maXJtZWRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldFVuY29uZmlybWVkQWN0aW9uc0J5QWRkcmVzc1JlcXVlc3Qge1xuICAvLyBHZXRVbmNvbmZpcm1lZEFjdGlvbnNCeUFkZHJlc3NSZXF1ZXN0IGFkZHJlc3NcbiAgYWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIEdldFVuY29uZmlybWVkQWN0aW9uc0J5QWRkcmVzc1JlcXVlc3Qgc3RhcnRcbiAgc3RhcnQ6IG51bWJlcjtcblxuICAvLyBHZXRVbmNvbmZpcm1lZEFjdGlvbnNCeUFkZHJlc3NSZXF1ZXN0IGNvdW50XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRBY3Rpb25zQnlCbG9ja1JlcXVlc3QuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRBY3Rpb25zQnlCbG9ja1JlcXVlc3Qge1xuICAvLyBHZXRBY3Rpb25zQnlCbG9ja1JlcXVlc3QgYmxrSGFzaFxuICBibGtIYXNoOiBzdHJpbmc7XG5cbiAgLy8gR2V0QWN0aW9uc0J5QmxvY2tSZXF1ZXN0IHN0YXJ0XG4gIHN0YXJ0OiBudW1iZXI7XG5cbiAgLy8gR2V0QWN0aW9uc0J5QmxvY2tSZXF1ZXN0IGNvdW50XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHZXRBY3Rpb25zUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldEFjdGlvbnNSZXF1ZXN0IHtcbiAgLy8gR2V0QWN0aW9uc1JlcXVlc3QgYnlJbmRleFxuICBieUluZGV4PzogSUdldEFjdGlvbnNCeUluZGV4UmVxdWVzdDtcblxuICAvLyBHZXRBY3Rpb25zUmVxdWVzdCBieUhhc2hcbiAgYnlIYXNoPzogSUdldEFjdGlvbnNCeUhhc2hSZXF1ZXN0O1xuXG4gIC8vIEdldEFjdGlvbnNSZXF1ZXN0IGJ5QWRkclxuICBieUFkZHI/OiBJR2V0QWN0aW9uc0J5QWRkcmVzc1JlcXVlc3Q7XG5cbiAgLy8gR2V0VW5jb25maXJtZWRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdCB1bmNvbmZpcm1lZEJ5QWRkclxuICB1bmNvbmZpcm1lZEJ5QWRkcj86IElHZXRVbmNvbmZpcm1lZEFjdGlvbnNCeUFkZHJlc3NSZXF1ZXN0O1xuXG4gIC8vIEdldEFjdGlvbnNCeUJsb2NrUmVxdWVzdCBieUJsa1xuICBieUJsaz86IElHZXRBY3Rpb25zQnlCbG9ja1JlcXVlc3Q7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBUcmFuc2Zlci5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zZmVyIHtcbiAgLy8gVHJhbnNmZXIgYW1vdW50XG4gIGFtb3VudDogc3RyaW5nO1xuXG4gIC8vIFRyYW5zZmVyIHJlY2lwaWVudFxuICByZWNpcGllbnQ6IHN0cmluZztcblxuICAvLyBUcmFuc2ZlciBwYXlsb2FkXG4gIHBheWxvYWQ6IEJ1ZmZlciB8IHN0cmluZztcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIEV4ZWN1dGlvbi5cbmV4cG9ydCBpbnRlcmZhY2UgSUV4ZWN1dGlvbiB7XG4gIC8vIEV4ZWN1dGlvbiBhbW91bnRcbiAgYW1vdW50OiBzdHJpbmc7XG5cbiAgLy8gRXhlY3V0aW9uIGNvbnRyYWN0XG4gIGNvbnRyYWN0OiBzdHJpbmc7XG5cbiAgLy8gRXhlY3V0aW9uIGRhdGFcbiAgZGF0YTogQnVmZmVyIHwgc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgU3RhcnRTdWJDaGFpbi5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXJ0U3ViQ2hhaW4ge1xuICAvLyBTdGFydFN1YkNoYWluIGNoYWluSURcbiAgY2hhaW5JRDogbnVtYmVyO1xuXG4gIC8vIFN0YXJ0U3ViQ2hhaW4gc2VjdXJpdHlEZXBvc2l0XG4gIHNlY3VyaXR5RGVwb3NpdDogc3RyaW5nO1xuXG4gIC8vIFN0YXJ0U3ViQ2hhaW4gb3BlcmF0aW9uRGVwb3NpdFxuICBvcGVyYXRpb25EZXBvc2l0OiBzdHJpbmc7XG5cbiAgLy8gU3RhcnRTdWJDaGFpbiBzdGFydEhlaWdodFxuICBzdGFydEhlaWdodDogbnVtYmVyO1xuXG4gIC8vIFN0YXJ0U3ViQ2hhaW4gcGFyZW50SGVpZ2h0T2Zmc2V0XG4gIHBhcmVudEhlaWdodE9mZnNldDogbnVtYmVyO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgU3RvcFN1YkNoYWluLlxuZXhwb3J0IGludGVyZmFjZSBJU3RvcFN1YkNoYWluIHtcbiAgLy8gU3RvcFN1YkNoYWluIGNoYWluSURcbiAgY2hhaW5JRDogbnVtYmVyO1xuXG4gIC8vIFN0b3BTdWJDaGFpbiBzdG9wSGVpZ2h0XG4gIHN0b3BIZWlnaHQ6IG51bWJlcjtcblxuICAvLyBTdG9wU3ViQ2hhaW4gc3ViQ2hhaW5BZGRyZXNzXG4gIHN1YkNoYWluQWRkcmVzczogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgTWVya2xlUm9vdC5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lcmtsZVJvb3Qge1xuICAvLyBNZXJrbGVSb290IG5hbWVcbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8vIE1lcmtsZVJvb3QgdmFsdWVcbiAgdmFsdWU6IEJ1ZmZlcjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIFB1dEJsb2NrLlxuZXhwb3J0IGludGVyZmFjZSBJUHV0QmxvY2sge1xuICAvLyBQdXRCbG9jayBzdWJDaGFpbkFkZHJlc3NcbiAgc3ViQ2hhaW5BZGRyZXNzOiBzdHJpbmc7XG5cbiAgLy8gUHV0QmxvY2sgaGVpZ2h0XG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8vIFB1dEJsb2NrIHJvb3RzXG4gIHJvb3RzOiBBcnJheTxJTWVya2xlUm9vdD47XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBDcmVhdGVEZXBvc2l0LlxuZXhwb3J0IGludGVyZmFjZSBJQ3JlYXRlRGVwb3NpdCB7XG4gIC8vIENyZWF0ZURlcG9zaXQgY2hhaW5JRFxuICBjaGFpbklEOiBudW1iZXI7XG5cbiAgLy8gQ3JlYXRlRGVwb3NpdCBhbW91bnRcbiAgYW1vdW50OiBzdHJpbmc7XG5cbiAgLy8gQ3JlYXRlRGVwb3NpdCByZWNlaXB0XG4gIHJlY2lwaWVudDogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgU2V0dGxlRGVwb3NpdC5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRsZURlcG9zaXQge1xuICAvLyBTZXR0bGVEZXBvc2l0IGFtb3VudFxuICBhbW91bnQ6IHN0cmluZztcblxuICAvLyBTZXR0bGVEZXBvc2l0IHJlY2lwaWVudFxuICByZWNpcGllbnQ6IHN0cmluZztcblxuICAvLyBTZXR0bGVEZXBvc2l0IGluZGV4XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBDcmVhdGVQbHVtQ2hhaW4uXG5leHBvcnQgaW50ZXJmYWNlIElDcmVhdGVQbHVtQ2hhaW4ge31cblxuLy8gUHJvcGVydGllcyBvZiBhIFRlcm1pbmF0ZVBsdW1DaGFpbi5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlcm1pbmF0ZVBsdW1DaGFpbiB7XG4gIC8vIFRlcm1pbmF0ZVBsdW1DaGFpbiBzdWJDaGFpbkFkZHJlc3NcbiAgc3ViQ2hhaW5BZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBQbHVtUHV0QmxvY2suXG5leHBvcnQgaW50ZXJmYWNlIElQbHVtUHV0QmxvY2sge1xuICAvLyBQbHVtUHV0QmxvY2sgc3ViQ2hhaW5BZGRyZXNzXG4gIHN1YkNoYWluQWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIFBsdW1QdXRCbG9jayBoZWlnaHRcbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLy8gUGx1bVB1dEJsb2NrIGhlaWdodFxuICByb290czogTWFwPHN0cmluZywgQnVmZmVyIHwge30+O1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgUGx1bUNyZWF0ZURlcG9zaXQuXG5leHBvcnQgaW50ZXJmYWNlIElQbHVtQ3JlYXRlRGVwb3NpdCB7XG4gIC8vIFBsdW1DcmVhdGVEZXBvc2l0IHN1YkNoYWluQWRkcmVzc1xuICBzdWJDaGFpbkFkZHJlc3M6IHN0cmluZztcblxuICAvLyBQbHVtQ3JlYXRlRGVwb3NpdCBhbW91bnRcbiAgYW1vdW50OiBzdHJpbmc7XG5cbiAgLy8gUGx1bUNyZWF0ZURlcG9zaXQgcmVjaXBpZW50XG4gIHJlY2lwaWVudDogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgUGx1bVN0YXJ0RXhpdC5cbmV4cG9ydCBpbnRlcmZhY2UgSVBsdW1TdGFydEV4aXQge1xuICAvLyBQbHVtU3RhcnRFeGl0IHN1YkNoYWluQWRkcmVzc1xuICBzdWJDaGFpbkFkZHJlc3M6IHN0cmluZztcblxuICAvLyBQbHVtU3RhcnRFeGl0IHByZXZpb3VzVHJhbnNmZXJcbiAgcHJldmlvdXNUcmFuc2ZlcjogQnVmZmVyO1xuXG4gIC8vIFBsdW1TdGFydEV4aXQgcHJldmlvdXNUcmFuc2ZlckJsb2NrUHJvb2ZcbiAgcHJldmlvdXNUcmFuc2ZlckJsb2NrUHJvb2Y6IEJ1ZmZlcjtcblxuICAvLyBQbHVtU3RhcnRFeGl0IHByZXZpb3VzVHJhbnNmZXJCbG9ja0hlaWdodFxuICBwcmV2aW91c1RyYW5zZmVyQmxvY2tIZWlnaHQ6IG51bWJlcjtcblxuICAvLyBQbHVtU3RhcnRFeGl0IGV4aXRUcmFuc2ZlclxuICBleGl0VHJhbnNmZXI6IEJ1ZmZlciB8IHN0cmluZztcblxuICAvLyBQbHVtU3RhcnRFeGl0IGV4aXRUcmFuc2ZlckJsb2NrUHJvb2ZcbiAgZXhpdFRyYW5zZmVyQmxvY2tQcm9vZjogQnVmZmVyIHwgc3RyaW5nO1xuXG4gIC8vIFBsdW1TdGFydEV4aXQgZXhpdFRyYW5zZmVyQmxvY2tIZWlnaHRcbiAgZXhpdFRyYW5zZmVyQmxvY2tIZWlnaHQ6IG51bWJlcjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIFBsdW1DaGFsbGVuZ2VFeGl0LlxuZXhwb3J0IGludGVyZmFjZSBJUGx1bUNoYWxsZW5nZUV4aXQge1xuICAvLyBQbHVtQ2hhbGxlbmdlRXhpdCBzdWJDaGFpbkFkZHJlc3NcbiAgc3ViQ2hhaW5BZGRyZXNzOiBzdHJpbmc7XG5cbiAgLy8gUGx1bUNoYWxsZW5nZUV4aXQgY2hhaW5JRFxuICBjb2luSUQ6IG51bWJlcjtcblxuICAvLyBQbHVtQ2hhbGxlbmdlRXhpdCBjaGFsbGVuZ2VUcmFuc2ZlclxuICBjaGFsbGVuZ2VUcmFuc2ZlcjogQnVmZmVyIHwgc3RyaW5nO1xuXG4gIC8vIFBsdW1DaGFsbGVuZ2VFeGl0IGNoYWxsZW5nZVRyYW5zZmVyQmxvY2tQcm9vZlxuICBjaGFsbGVuZ2VUcmFuc2ZlckJsb2NrUHJvb2Y6IEJ1ZmZlciB8IHN0cmluZztcblxuICAvLyBQbHVtQ2hhbGxlbmdlRXhpdCBjaGFsbGVuZ2VUcmFuc2ZlckJsb2NrSGVpZ2h0XG4gIGNoYWxsZW5nZVRyYW5zZmVyQmxvY2tIZWlnaHQ6IG51bWJlcjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIFBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQuXG5leHBvcnQgaW50ZXJmYWNlIElQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0IHtcbiAgLy8gUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCBzdWJDaGFpbkFkZHJlc3NcbiAgc3ViQ2hhaW5BZGRyZXNzOiBzdHJpbmc7XG5cbiAgLy8gUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCBjb2luSURcbiAgY29pbklEOiBudW1iZXI7XG5cbiAgLy8gUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCBjaGFsbGVuZ2VUcmFuc2ZlclxuICBjaGFsbGVuZ2VUcmFuc2ZlcjogQnVmZmVyO1xuXG4gIC8vIFBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQgcmVzcG9uc2VUcmFuc2ZlclxuICByZXNwb25zZVRyYW5zZmVyOiBCdWZmZXI7XG5cbiAgLy8gUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCByZXNwb25zZVRyYW5zZmVyQmxvY2tQcm9vZlxuICByZXNwb25zZVRyYW5zZmVyQmxvY2tQcm9vZjogQnVmZmVyO1xuXG4gIC8vIFBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQgcHJldmlvdXNUcmFuc2ZlckJsb2NrSGVpZ2h0XG4gIHByZXZpb3VzVHJhbnNmZXJCbG9ja0hlaWdodDogbnVtYmVyO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgUGx1bUZpbmFsaXplRXhpdC5cbmV4cG9ydCBpbnRlcmZhY2UgSVBsdW1GaW5hbGl6ZUV4aXQge1xuICAvLyBQbHVtRmluYWxpemVFeGl0IHN1YkNoYWluQWRkcmVzc1xuICBzdWJDaGFpbkFkZHJlc3M6IHN0cmluZztcblxuICAvLyBQbHVtRmluYWxpemVFeGl0IGNvaW5JRFxuICBjb2luSUQ6IG51bWJlcjtcbn1cblxuLy8gcGx1bSBzdWIgY2hhaW4gQVBJc1xuLy8gUHJvcGVydGllcyBvZiBhIFBsdW1TZXR0bGVEZXBvc2l0LlxuZXhwb3J0IGludGVyZmFjZSBJUGx1bVNldHRsZURlcG9zaXQge1xuICAvLyBQbHVtU2V0dGxlRGVwb3NpdCBjb2luSURcbiAgY29pbklEOiBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBQbHVtVHJhbnNmZXIuXG5leHBvcnQgaW50ZXJmYWNlIElQbHVtVHJhbnNmZXIge1xuICAvLyBQbHVtVHJhbnNmZXIgY29pbklEXG4gIGNvaW5JRDogbnVtYmVyO1xuXG4gIC8vIFBsdW1UcmFuc2ZlciBkZW5vbWluYXRpb25cbiAgZGVub21pbmF0aW9uOiBCdWZmZXI7XG5cbiAgLy8gUGx1bVRyYW5zZmVyIG93bmVyXG4gIG93bmVyOiBzdHJpbmc7XG5cbiAgLy8gUGx1bVRyYW5zZmVyIHJlY2lwaWVudFxuICByZWNpcGllbnQ6IHN0cmluZztcbn1cblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEJFTE9XIEFSRSBERUZJTklUSU9OUyBGT1IgQkxPQ0sgUFJPRFVDRVIgUFJPVE9DT0xcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFByb3BlcnRpZXMgb2YgYSBEZXBvc2l0VG9SZXdhcmRpbmdGdW5kLlxuZXhwb3J0IGludGVyZmFjZSBJRGVwb3NpdFRvUmV3YXJkaW5nRnVuZCB7XG4gIC8vIERlcG9zaXRUb1Jld2FyZGluZ0Z1bmQgYW1vdW50XG4gIGFtb3VudDogc3RyaW5nO1xuXG4gIC8vIERlcG9zaXRUb1Jld2FyZGluZ0Z1bmQgZGF0YVxuICBkYXRhOiBCdWZmZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBDbGFpbUZyb21SZXdhcmRpbmdGdW5kLlxuZXhwb3J0IGludGVyZmFjZSBJQ2xhaW1Gcm9tUmV3YXJkaW5nRnVuZCB7XG4gIC8vIENsYWltRnJvbVJld2FyZGluZ0Z1bmQgYW1vdW50XG4gIGFtb3VudDogc3RyaW5nO1xuXG4gIC8vIENsYWltRnJvbVJld2FyZGluZ0Z1bmQgZGF0YVxuICBkYXRhOiBCdWZmZXIgfCB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmRUeXBlIHtcbiAgQmxvY2tSZXdhcmQ6IDA7XG4gIEVwb2NoUmV3YXJkOiAxO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgU2V0UmV3YXJkLlxuZXhwb3J0IGludGVyZmFjZSBJU2V0UmV3YXJkIHtcbiAgLy8gU2V0UmV3YXJkIGFtb3VudFxuICBhbW91bnQ6IHN0cmluZztcblxuICAvLyBTZXRSZXdhcmQgZGF0YVxuICBkYXRhOiBCdWZmZXIgfCB7fTtcblxuICAvLyBTZXRSZXdhcmQgdHlwZVxuICB0eXBlOiBudW1iZXI7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBHcmFudFJld2FyZC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyYW50UmV3YXJkIHtcbiAgLy8gR3JhbnRSZXdhcmQgdHlwZVxuICB0eXBlOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYW5kaWRhdGUge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIHZvdGVzOiBCdWZmZXIgfCB7fTtcbiAgcHViS2V5OiBCdWZmZXIgfCB7fTtcbiAgcmV3YXJkQWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYW5kaWRhdGVMaXN0IHtcbiAgY2FuZGlkYXRlczogQXJyYXk8SUNhbmRpZGF0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVB1dFBvbGxSZXN1bHQge1xuICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgY2FuZGlkYXRlczogSUNhbmRpZGF0ZUxpc3QgfCB1bmRlZmluZWQ7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYW4gQWN0aW9uQ29yZS5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbkNvcmUge1xuICAvLyBBY3Rpb25Db3JlIHZlcnNpb25cbiAgdmVyc2lvbjogbnVtYmVyO1xuXG4gIC8vIEFjdGlvbkNvcmUgbm9uY2VcbiAgbm9uY2U6IHN0cmluZztcblxuICAvLyBBY3Rpb25Db3JlIGdhc0xpbWl0XG4gIGdhc0xpbWl0OiBzdHJpbmc7XG5cbiAgLy8gQWN0aW9uQ29yZSBnYXNQcmljZVxuICBnYXNQcmljZTogc3RyaW5nO1xuXG4gIC8vIEFjdGlvbiBkZXRhaWwgZmllbGRzXG4gIC8vIEFjdGlvbkNvcmUgdHJhbnNmZXJcbiAgdHJhbnNmZXI/OiBJVHJhbnNmZXIgfCB1bmRlZmluZWQ7XG4gIC8vIEFjdGlvbkNvcmUgZXhlY3V0aW9uXG4gIGV4ZWN1dGlvbj86IElFeGVjdXRpb24gfCB1bmRlZmluZWQ7XG5cbiAgLy8gRmVkQ2hhaW5cbiAgLy8gQWN0aW9uQ29yZSBzdGFydFN1YkNoYWluXG4gIHN0YXJ0U3ViQ2hhaW4/OiBJU3RhcnRTdWJDaGFpbiB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBzdG9wU3ViQ2hhaW5cbiAgc3RvcFN1YkNoYWluPzogSVN0b3BTdWJDaGFpbiB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwdXRCbG9ja1xuICBwdXRCbG9jaz86IElQdXRCbG9jayB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBjcmVhdGVEZXBvc2l0XG4gIGNyZWF0ZURlcG9zaXQ/OiBJQ3JlYXRlRGVwb3NpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBzZXR0bGVEZXBvc2l0XG4gIHNldHRsZURlcG9zaXQ/OiBJU2V0dGxlRGVwb3NpdCB8IHVuZGVmaW5lZDtcblxuICAvLyBQbHVtQ2hhaW5cbiAgLy8gQWN0aW9uQ29yZSBjcmVhdGVQbHVtQ2hhaW5cbiAgY3JlYXRlUGx1bUNoYWluPzogSUNyZWF0ZVBsdW1DaGFpbiB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSB0ZXJtaW5hdGVQbHVtQ2hhaW5cbiAgdGVybWluYXRlUGx1bUNoYWluPzogSVRlcm1pbmF0ZVBsdW1DaGFpbiB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtUHV0QmxvY2tcbiAgcGx1bVB1dEJsb2NrPzogSVBsdW1QdXRCbG9jayB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtQ3JlYXRlRGVwb3NpdFxuICBwbHVtQ3JlYXRlRGVwb3NpdD86IElQbHVtQ3JlYXRlRGVwb3NpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtU3RhcnRFeGl0XG4gIHBsdW1TdGFydEV4aXQ/OiBJUGx1bVN0YXJ0RXhpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtQ2hhbGxlbmdlRXhpdFxuICBwbHVtQ2hhbGxlbmdlRXhpdD86IElQbHVtQ2hhbGxlbmdlRXhpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0XG4gIHBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQ/OiBJUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtRmluYWxpemVFeGl0XG4gIHBsdW1GaW5hbGl6ZUV4aXQ/OiBJUGx1bUZpbmFsaXplRXhpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtU2V0dGxlRGVwb3NpdFxuICBwbHVtU2V0dGxlRGVwb3NpdD86IElQbHVtU2V0dGxlRGVwb3NpdCB8IHVuZGVmaW5lZDtcbiAgLy8gQWN0aW9uQ29yZSBwbHVtVHJhbnNmZXJcbiAgcGx1bVRyYW5zZmVyPzogSVBsdW1UcmFuc2ZlciB8IHVuZGVmaW5lZDtcblxuICAvLyBSZXdhcmRpbmcgcHJvdG9jb2wgYWN0aW9uc1xuICAvLyBBY3Rpb25Db3JlIGRlcG9zaXRUb1Jld2FyZGluZ0Z1bmRcbiAgZGVwb3NpdFRvUmV3YXJkaW5nRnVuZD86IElEZXBvc2l0VG9SZXdhcmRpbmdGdW5kIHwgdW5kZWZpbmVkO1xuICAvLyBBY3Rpb25Db3JlIGNsYWltRnJvbVJld2FyZGluZ0Z1bmRcbiAgY2xhaW1Gcm9tUmV3YXJkaW5nRnVuZD86IElDbGFpbUZyb21SZXdhcmRpbmdGdW5kIHwgdW5kZWZpbmVkO1xuICAvLyBBY3Rpb25Db3JlIGdyYW50UmV3YXJkXG4gIGdyYW50UmV3YXJkPzogSUdyYW50UmV3YXJkIHwgdW5kZWZpbmVkO1xuXG4gIHB1dFBvbGxSZXN1bHQ/OiBJUHV0UG9sbFJlc3VsdCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhbiBBY3Rpb24uXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb24ge1xuICAvLyBBY3Rpb24gY29yZVxuICBjb3JlOiBJQWN0aW9uQ29yZSB8IHVuZGVmaW5lZDtcblxuICAvLyBBY3Rpb24gc2VuZGVyUHVia2V5XG4gIHNlbmRlclB1YktleTogVWludDhBcnJheSB8IHN0cmluZztcblxuICAvLyBBY3Rpb24gc2lnbmF0dXJlXG4gIHNpZ25hdHVyZTogVWludDhBcnJheSB8IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uVHJhbnNmZXIocmVxOiBJVHJhbnNmZXIgfCB1bmRlZmluZWQpOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcGJUcmFuc2ZlciA9IG5ldyBhY3Rpb25QYi5UcmFuc2ZlcigpO1xuICBwYlRyYW5zZmVyLnNldEFtb3VudChyZXEuYW1vdW50KTtcbiAgcGJUcmFuc2Zlci5zZXRSZWNpcGllbnQocmVxLnJlY2lwaWVudCk7XG4gIHBiVHJhbnNmZXIuc2V0UGF5bG9hZChyZXEucGF5bG9hZCk7XG4gIHJldHVybiBwYlRyYW5zZmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9UaW1lc3RhbXAodGltZXN0YW1wOiBJVGltZXN0YW1wKTogVGltZXN0YW1wIHtcbiAgY29uc3QgdHMgPSBuZXcgVGltZXN0YW1wKCk7XG4gIGlmICh0aW1lc3RhbXApIHtcbiAgICB0cy5zZXRTZWNvbmRzKHRpbWVzdGFtcC5zZWNvbmRzKTtcbiAgICB0cy5zZXROYW5vcyh0aW1lc3RhbXAubmFub3MpO1xuICB9XG4gIHJldHVybiB0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uRXhlY3V0aW9uKFxuICByZXE6IElFeGVjdXRpb24gfCB1bmRlZmluZWRcbik6IGFjdGlvblBiLkV4ZWN1dGlvbiB8IHVuZGVmaW5lZCB7XG4gIGlmICghcmVxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBwYkV4ZWN1dGlvbiA9IG5ldyBhY3Rpb25QYi5FeGVjdXRpb24oKTtcbiAgcGJFeGVjdXRpb24uc2V0QW1vdW50KHJlcS5hbW91bnQpO1xuICBwYkV4ZWN1dGlvbi5zZXRDb250cmFjdChyZXEuY29udHJhY3QpO1xuICBwYkV4ZWN1dGlvbi5zZXREYXRhKHJlcS5kYXRhKTtcbiAgcmV0dXJuIHBiRXhlY3V0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9BY3Rpb25TdGFydFN1YkNoYWluKHJlcTogSVN0YXJ0U3ViQ2hhaW4gfCB1bmRlZmluZWQpOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBwYlN0YXJ0U3ViQ2hhaW4gPSBuZXcgYWN0aW9uUGIuU3RhcnRTdWJDaGFpbigpO1xuICBwYlN0YXJ0U3ViQ2hhaW4uc2V0Q2hhaW5pZChyZXEuY2hhaW5JRCk7XG4gIHBiU3RhcnRTdWJDaGFpbi5zZXRTZWN1cml0eWRlcG9zaXQocmVxLnNlY3VyaXR5RGVwb3NpdCk7XG4gIHBiU3RhcnRTdWJDaGFpbi5zZXRPcGVyYXRpb25kZXBvc2l0KHJlcS5vcGVyYXRpb25EZXBvc2l0KTtcbiAgcGJTdGFydFN1YkNoYWluLnNldFN0YXJ0aGVpZ2h0KHJlcS5zdGFydEhlaWdodCk7XG4gIHBiU3RhcnRTdWJDaGFpbi5zZXRQYXJlbnRoZWlnaHRvZmZzZXQocmVxLnBhcmVudEhlaWdodE9mZnNldCk7XG4gIHJldHVybiBwYlN0YXJ0U3ViQ2hhaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvblN0b3BTdWJDaGFpbihyZXE6IElTdG9wU3ViQ2hhaW4gfCB1bmRlZmluZWQpOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcGJTdG9wU3ViQ2hhaW4gPSBuZXcgYWN0aW9uUGIuU3RvcFN1YkNoYWluKCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJTdG9wU3ViQ2hhaW4uc2V0Q2hhaW5pZChyZXEuY2hhaW5JRCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJTdG9wU3ViQ2hhaW4uc2V0U3RvcGhlaWdodChyZXEuc3RvcEhlaWdodCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJTdG9wU3ViQ2hhaW4uc2V0U3ViY2hhaW5hZGRyZXNzKHJlcS5zdWJDaGFpbkFkZHJlc3MpO1xuICByZXR1cm4gcGJTdG9wU3ViQ2hhaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvblB1dEJsb2NrKHJlcTogSVB1dEJsb2NrIHwgdW5kZWZpbmVkKTogYW55IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHJvb3RzID0gcmVxLnJvb3RzO1xuICBjb25zdCByb290TGlzdCA9IFtdO1xuICBpZiAocmVxLnJvb3RzICYmIHJvb3RzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXEucm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvb3RJdGVtID0gcmVxLnJvb3RzICYmIHJlcS5yb290c1tpXTtcbiAgICAgIGNvbnN0IG1rcm9vdCA9IG5ldyBhY3Rpb25QYi5NZXJrbGVSb290KCk7XG4gICAgICBta3Jvb3Quc2V0TmFtZShyb290SXRlbS5uYW1lKTtcbiAgICAgIG1rcm9vdC5zZXRWYWx1ZShyb290SXRlbS52YWx1ZSk7XG4gICAgICByb290TGlzdFtpXSA9IG1rcm9vdDtcbiAgICB9XG4gIH1cbiAgY29uc3QgcGJQdXRCbG9jayA9IG5ldyBhY3Rpb25QYi5QdXRCbG9jaygpO1xuICBwYlB1dEJsb2NrLnNldFN1YmNoYWluYWRkcmVzcyhyZXEuc3ViQ2hhaW5BZGRyZXNzKTtcbiAgcGJQdXRCbG9jay5zZXRIZWlnaHQocmVxLmhlaWdodCk7XG4gIHBiUHV0QmxvY2suc2V0Um9vdHNMaXN0KHJvb3RMaXN0KTtcbiAgcmV0dXJuIHBiUHV0QmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvbkNyZWF0ZURlcG9zaXQocmVxOiBJQ3JlYXRlRGVwb3NpdCB8IHVuZGVmaW5lZCk6IGFueSB7XG4gIGlmICghcmVxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBwYkNyZWF0ZURlcG9zaXQgPSBuZXcgYWN0aW9uUGIuQ3JlYXRlRGVwb3NpdCgpO1xuICBwYkNyZWF0ZURlcG9zaXQuc2V0Q2hhaW5pZChyZXEuY2hhaW5JRCk7XG4gIHBiQ3JlYXRlRGVwb3NpdC5zZXRBbW91bnQocmVxLmFtb3VudCk7XG4gIHBiQ3JlYXRlRGVwb3NpdC5zZXRSZWNpcGllbnQocmVxLnJlY2lwaWVudCk7XG4gIHJldHVybiBwYkNyZWF0ZURlcG9zaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvblNldHRsZURlcG9zaXQocmVxOiBJU2V0dGxlRGVwb3NpdCB8IHVuZGVmaW5lZCk6IGFueSB7XG4gIGlmICghcmVxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBwYlNldHRsZURlcG9zaXQgPSBuZXcgYWN0aW9uUGIuU2V0dGxlRGVwb3NpdCgpO1xuICBwYlNldHRsZURlcG9zaXQuc2V0QW1vdW50KHJlcS5hbW91bnQpO1xuICBwYlNldHRsZURlcG9zaXQuc2V0UmVjaXBpZW50KHJlcS5yZWNpcGllbnQpO1xuICBwYlNldHRsZURlcG9zaXQuc2V0SW5kZXgocmVxLmluZGV4KTtcbiAgcmV0dXJuIHBiU2V0dGxlRGVwb3NpdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uQ3JlYXRlUGx1bUNoYWluKFxuICByZXE6IElDcmVhdGVQbHVtQ2hhaW4gfCB1bmRlZmluZWRcbik6IGFueSB7XG4gIGlmICghcmVxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gbmV3IGFjdGlvblBiLkNyZWF0ZVBsdW1DaGFpbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9BY3Rpb25UZXJtaW5hdGVQbHVtQ2hhaW4oXG4gIHJlcTogSVRlcm1pbmF0ZVBsdW1DaGFpbiB8IHVuZGVmaW5lZFxuKTogYW55IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHBiVGVybWluYXRlUGx1bUNoYWluID0gbmV3IGFjdGlvblBiLlRlcm1pbmF0ZVBsdW1DaGFpbigpO1xuICBwYlRlcm1pbmF0ZVBsdW1DaGFpbi5zZXRTdWJjaGFpbmFkZHJlc3MocmVxLnN1YkNoYWluQWRkcmVzcyk7XG4gIHJldHVybiBwYlRlcm1pbmF0ZVBsdW1DaGFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uUGx1bVB1dEJsb2NrKHJlcTogSVBsdW1QdXRCbG9jayB8IHVuZGVmaW5lZCk6IGFueSB7XG4gIGlmICghcmVxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBwYlBsdW1QdXRCbG9jayA9IG5ldyBhY3Rpb25QYi5QbHVtUHV0QmxvY2soKTtcbiAgcGJQbHVtUHV0QmxvY2suc2V0U3ViY2hhaW5hZGRyZXNzKHJlcS5zdWJDaGFpbkFkZHJlc3MpO1xuICBwYlBsdW1QdXRCbG9jay5zZXRIZWlnaHQocmVxLmhlaWdodCk7XG4gIHJldHVybiBwYlBsdW1QdXRCbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uUGx1bUNyZWF0ZURlcG9zaXQoXG4gIHJlcTogSVBsdW1DcmVhdGVEZXBvc2l0IHwgdW5kZWZpbmVkXG4pOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBwYlBsdW1DcmVhdGVEZXBvc2l0ID0gbmV3IGFjdGlvblBiLlBsdW1DcmVhdGVEZXBvc2l0KCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJQbHVtQ3JlYXRlRGVwb3NpdC5zZXRTdWJjaGFpbmFkZHJlc3MocmVxLnN1YkNoYWluQWRkcmVzcyk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJQbHVtQ3JlYXRlRGVwb3NpdC5zZXRBbW91bnQocmVxLmFtb3VudCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJQbHVtQ3JlYXRlRGVwb3NpdC5zZXRSZWNpcGllbnQocmVxLnJlY2lwaWVudCk7XG4gIHJldHVybiBwYlBsdW1DcmVhdGVEZXBvc2l0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9BY3Rpb25QbHVtU3RhcnRFeGl0KHJlcTogSVBsdW1TdGFydEV4aXQgfCB1bmRlZmluZWQpOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBwYlBsdW1TdGFydEV4aXQgPSBuZXcgYWN0aW9uUGIuUGx1bVN0YXJ0RXhpdCgpO1xuICBwYlBsdW1TdGFydEV4aXQuc2V0U3ViY2hhaW5hZGRyZXNzKHJlcS5zdWJDaGFpbkFkZHJlc3MpO1xuICBwYlBsdW1TdGFydEV4aXQuc2V0UHJldmlvdXN0cmFuc2ZlcihyZXEucHJldmlvdXNUcmFuc2Zlcik7XG4gIHBiUGx1bVN0YXJ0RXhpdC5zZXRQcmV2aW91c3RyYW5zZmVyYmxvY2twcm9vZihyZXEucHJldmlvdXNUcmFuc2ZlckJsb2NrUHJvb2YpO1xuICBwYlBsdW1TdGFydEV4aXQuc2V0UHJldmlvdXN0cmFuc2ZlcmJsb2NraGVpZ2h0KFxuICAgIHJlcS5wcmV2aW91c1RyYW5zZmVyQmxvY2tIZWlnaHRcbiAgKTtcbiAgcGJQbHVtU3RhcnRFeGl0LnNldEV4aXR0cmFuc2ZlcihyZXEuZXhpdFRyYW5zZmVyKTtcbiAgcGJQbHVtU3RhcnRFeGl0LnNldEV4aXR0cmFuc2ZlcmJsb2NrcHJvb2YocmVxLmV4aXRUcmFuc2ZlckJsb2NrUHJvb2YpO1xuICBwYlBsdW1TdGFydEV4aXQuc2V0RXhpdHRyYW5zZmVyYmxvY2toZWlnaHQocmVxLmV4aXRUcmFuc2ZlckJsb2NrSGVpZ2h0KTtcbiAgcmV0dXJuIHBiUGx1bVN0YXJ0RXhpdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uUGx1bUNoYWxsZW5nZUV4aXQoXG4gIHJlcTogSVBsdW1DaGFsbGVuZ2VFeGl0IHwgdW5kZWZpbmVkXG4pOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBwYlBsdW1DaGFsbGVuZ2VFeGl0ID0gbmV3IGFjdGlvblBiLlBsdW1DaGFsbGVuZ2VFeGl0KCk7XG4gIHBiUGx1bUNoYWxsZW5nZUV4aXQuc2V0U3ViY2hhaW5hZGRyZXNzKHJlcS5zdWJDaGFpbkFkZHJlc3MpO1xuICBwYlBsdW1DaGFsbGVuZ2VFeGl0LnNldENvaW5pZChyZXEuY29pbklEKTtcbiAgcGJQbHVtQ2hhbGxlbmdlRXhpdC5zZXRDaGFsbGVuZ2V0cmFuc2ZlcihyZXEuY2hhbGxlbmdlVHJhbnNmZXIpO1xuICBwYlBsdW1DaGFsbGVuZ2VFeGl0LnNldENoYWxsZW5nZXRyYW5zZmVyYmxvY2twcm9vZihcbiAgICByZXEuY2hhbGxlbmdlVHJhbnNmZXJCbG9ja1Byb29mXG4gICk7XG4gIHBiUGx1bUNoYWxsZW5nZUV4aXQuc2V0Q2hhbGxlbmdldHJhbnNmZXJibG9ja2hlaWdodChcbiAgICByZXEuY2hhbGxlbmdlVHJhbnNmZXJCbG9ja0hlaWdodFxuICApO1xuICByZXR1cm4gcGJQbHVtQ2hhbGxlbmdlRXhpdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdChcbiAgcmVxOiBJUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdCB8IHVuZGVmaW5lZFxuKTogYW55IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgcGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0ID0gbmV3IGFjdGlvblBiLlBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQoKTtcbiAgcGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0LnNldFN1YmNoYWluYWRkcmVzcyhyZXEuc3ViQ2hhaW5BZGRyZXNzKTtcbiAgcGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0LnNldENvaW5pZChyZXEuY29pbklEKTtcbiAgcGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0LnNldENoYWxsZW5nZXRyYW5zZmVyKHJlcS5jaGFsbGVuZ2VUcmFuc2Zlcik7XG4gIHBiUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdC5zZXRSZXNwb25zZXRyYW5zZmVyKHJlcS5yZXNwb25zZVRyYW5zZmVyKTtcbiAgcGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0LnNldFJlc3BvbnNldHJhbnNmZXJibG9ja3Byb29mKFxuICAgIHJlcS5yZXNwb25zZVRyYW5zZmVyQmxvY2tQcm9vZlxuICApO1xuICByZXR1cm4gcGJQbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9BY3Rpb25QbHVtRmluYWxpemVFeGl0KFxuICByZXE6IElQbHVtRmluYWxpemVFeGl0IHwgdW5kZWZpbmVkXG4pOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcGJQbHVtRmluYWxpemVFeGl0ID0gbmV3IGFjdGlvblBiLlBsdW1GaW5hbGl6ZUV4aXQoKTtcbiAgcGJQbHVtRmluYWxpemVFeGl0LnNldFN1YmNoYWluYWRkcmVzcyhyZXEuc3ViQ2hhaW5BZGRyZXNzKTtcbiAgcGJQbHVtRmluYWxpemVFeGl0LnNldENvaW5pZChyZXEuY29pbklEKTtcbiAgcmV0dXJuIHBiUGx1bUZpbmFsaXplRXhpdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uUGx1bVNldHRsZURlcG9zaXQoXG4gIHJlcTogSVBsdW1TZXR0bGVEZXBvc2l0IHwgdW5kZWZpbmVkXG4pOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcGJQbHVtU2V0dGxlRGVwb3NpdCA9IG5ldyBhY3Rpb25QYi5QbHVtU2V0dGxlRGVwb3NpdCgpO1xuICBwYlBsdW1TZXR0bGVEZXBvc2l0LnNldENvaW5pZChyZXEuY29pbklEKTtcbiAgcmV0dXJuIHBiUGx1bVNldHRsZURlcG9zaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvblBsdW1UcmFuc2ZlcihyZXE6IElQbHVtVHJhbnNmZXIgfCB1bmRlZmluZWQpOiBhbnkge1xuICBpZiAoIXJlcSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcGJQbHVtVHJhbnNmZXIgPSBuZXcgYWN0aW9uUGIuUGx1bVRyYW5zZmVyKCk7XG4gIHBiUGx1bVRyYW5zZmVyLnNldENvaW5pZChyZXEuY29pbklEKTtcbiAgcGJQbHVtVHJhbnNmZXIuc2V0RGVub21pbmF0aW9uKHJlcS5kZW5vbWluYXRpb24pO1xuICBwYlBsdW1UcmFuc2Zlci5zZXRPd25lcihyZXEub3duZXIpO1xuICBwYlBsdW1UcmFuc2Zlci5zZXRSZWNpcGllbnQocmVxLnJlY2lwaWVudCk7XG4gIHJldHVybiBwYlBsdW1UcmFuc2Zlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uRGVwb3NpdFRvUmV3YXJkaW5nRnVuZChcbiAgcmVxOiBJRGVwb3NpdFRvUmV3YXJkaW5nRnVuZCB8IHVuZGVmaW5lZFxuKTogYW55IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHBiRGVwb3NpdFRvUmV3YXJkaW5nRnVuZCA9IG5ldyBhY3Rpb25QYi5EZXBvc2l0VG9SZXdhcmRpbmdGdW5kKCk7XG4gIHBiRGVwb3NpdFRvUmV3YXJkaW5nRnVuZC5zZXRBbW91bnQocmVxLmFtb3VudCk7XG4gIHBiRGVwb3NpdFRvUmV3YXJkaW5nRnVuZC5zZXREYXRhKHJlcS5kYXRhKTtcbiAgcmV0dXJuIHBiRGVwb3NpdFRvUmV3YXJkaW5nRnVuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQWN0aW9uQ2xhaW1Gcm9tUmV3YXJkaW5nRnVuZChcbiAgcmVxOiBJQ2xhaW1Gcm9tUmV3YXJkaW5nRnVuZCB8IHVuZGVmaW5lZFxuKTogYW55IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHBiQ2xhaW1Gcm9tUmV3YXJkaW5nRnVuZCA9IG5ldyBhY3Rpb25QYi5DbGFpbUZyb21SZXdhcmRpbmdGdW5kKCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcGJDbGFpbUZyb21SZXdhcmRpbmdGdW5kLnNldEFtb3VudChyZXEuYW1vdW50KTtcbiAgLy8gQHRzLWlnbm9yZVxuICBwYkNsYWltRnJvbVJld2FyZGluZ0Z1bmQuc2V0RGF0YShyZXEuZGF0YSk7XG4gIHJldHVybiBwYkNsYWltRnJvbVJld2FyZGluZ0Z1bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvbkdyYW50UmV3YXJkKHJlcTogSUdyYW50UmV3YXJkIHwgdW5kZWZpbmVkKTogYW55IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHBiR3JhbnRSZXdhcmQgPSBuZXcgYWN0aW9uUGIuR3JhbnRSZXdhcmQoKTtcbiAgcGJHcmFudFJld2FyZC5zZXRUeXBlKHJlcS50eXBlKTtcbiAgcmV0dXJuIHBiR3JhbnRSZXdhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FjdGlvbihyZXE6IElBY3Rpb24pOiBhbnkge1xuICBjb25zdCBwYkFjdGlvbkNvcmUgPSBuZXcgYWN0aW9uUGIuQWN0aW9uQ29yZSgpO1xuXG4gIGNvbnN0IGNvcmUgPSByZXEgJiYgcmVxLmNvcmU7XG4gIGlmIChjb3JlKSB7XG4gICAgcGJBY3Rpb25Db3JlLnNldFZlcnNpb24oY29yZS52ZXJzaW9uKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0Tm9uY2UoTnVtYmVyKGNvcmUubm9uY2UpKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0R2FzbGltaXQoTnVtYmVyKGNvcmUuZ2FzTGltaXQpKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0R2FzcHJpY2UoY29yZS5nYXNQcmljZSk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFRyYW5zZmVyKHRvQWN0aW9uVHJhbnNmZXIoY29yZS50cmFuc2ZlcikpO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRFeGVjdXRpb24odG9BY3Rpb25FeGVjdXRpb24oY29yZS5leGVjdXRpb24pKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0U3RhcnRzdWJjaGFpbih0b0FjdGlvblN0YXJ0U3ViQ2hhaW4oY29yZS5zdGFydFN1YkNoYWluKSk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFN0b3BzdWJjaGFpbih0b0FjdGlvblN0b3BTdWJDaGFpbihjb3JlLnN0b3BTdWJDaGFpbikpO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRQdXRibG9jayh0b0FjdGlvblB1dEJsb2NrKGNvcmUucHV0QmxvY2spKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0Q3JlYXRlZGVwb3NpdCh0b0FjdGlvbkNyZWF0ZURlcG9zaXQoY29yZS5jcmVhdGVEZXBvc2l0KSk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFNldHRsZWRlcG9zaXQodG9BY3Rpb25TZXR0bGVEZXBvc2l0KGNvcmUuc2V0dGxlRGVwb3NpdCkpO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRDcmVhdGVwbHVtY2hhaW4oXG4gICAgICB0b0FjdGlvbkNyZWF0ZVBsdW1DaGFpbihjb3JlLmNyZWF0ZVBsdW1DaGFpbilcbiAgICApO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRUZXJtaW5hdGVwbHVtY2hhaW4oXG4gICAgICB0b0FjdGlvblRlcm1pbmF0ZVBsdW1DaGFpbihjb3JlLnRlcm1pbmF0ZVBsdW1DaGFpbilcbiAgICApO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRQbHVtcHV0YmxvY2sodG9BY3Rpb25QbHVtUHV0QmxvY2soY29yZS5wbHVtUHV0QmxvY2spKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0UGx1bWNyZWF0ZWRlcG9zaXQoXG4gICAgICB0b0FjdGlvblBsdW1DcmVhdGVEZXBvc2l0KGNvcmUucGx1bUNyZWF0ZURlcG9zaXQpXG4gICAgKTtcbiAgICBwYkFjdGlvbkNvcmUuc2V0UGx1bXN0YXJ0ZXhpdCh0b0FjdGlvblBsdW1TdGFydEV4aXQoY29yZS5wbHVtU3RhcnRFeGl0KSk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFBsdW1jaGFsbGVuZ2VleGl0KFxuICAgICAgdG9BY3Rpb25QbHVtQ2hhbGxlbmdlRXhpdChjb3JlLnBsdW1DaGFsbGVuZ2VFeGl0KVxuICAgICk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFBsdW1yZXNwb25zZWNoYWxsZW5nZWV4aXQoXG4gICAgICB0b0FjdGlvblBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQoY29yZS5wbHVtUmVzcG9uc2VDaGFsbGVuZ2VFeGl0KVxuICAgICk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFBsdW1maW5hbGl6ZWV4aXQoXG4gICAgICB0b0FjdGlvblBsdW1GaW5hbGl6ZUV4aXQoY29yZS5wbHVtRmluYWxpemVFeGl0KVxuICAgICk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFBsdW1zZXR0bGVkZXBvc2l0KFxuICAgICAgdG9BY3Rpb25QbHVtU2V0dGxlRGVwb3NpdChjb3JlLnBsdW1TZXR0bGVEZXBvc2l0KVxuICAgICk7XG4gICAgcGJBY3Rpb25Db3JlLnNldFBsdW10cmFuc2Zlcih0b0FjdGlvblBsdW1UcmFuc2Zlcihjb3JlLnBsdW1UcmFuc2ZlcikpO1xuICAgIHBiQWN0aW9uQ29yZS5zZXREZXBvc2l0dG9yZXdhcmRpbmdmdW5kKFxuICAgICAgdG9BY3Rpb25EZXBvc2l0VG9SZXdhcmRpbmdGdW5kKGNvcmUuZGVwb3NpdFRvUmV3YXJkaW5nRnVuZClcbiAgICApO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRDbGFpbWZyb21yZXdhcmRpbmdmdW5kKFxuICAgICAgdG9BY3Rpb25DbGFpbUZyb21SZXdhcmRpbmdGdW5kKGNvcmUuY2xhaW1Gcm9tUmV3YXJkaW5nRnVuZClcbiAgICApO1xuICAgIHBiQWN0aW9uQ29yZS5zZXRHcmFudHJld2FyZCh0b0FjdGlvbkdyYW50UmV3YXJkKGNvcmUuZ3JhbnRSZXdhcmQpKTtcbiAgfVxuXG4gIGNvbnN0IHBiQWN0aW9uID0gbmV3IGFjdGlvblBiLkFjdGlvbigpO1xuICBwYkFjdGlvbi5zZXRDb3JlKHBiQWN0aW9uQ29yZSk7XG5cbiAgaWYgKHJlcS5zZW5kZXJQdWJLZXkpIHtcbiAgICBwYkFjdGlvbi5zZXRTZW5kZXJwdWJrZXkocmVxLnNlbmRlclB1YktleSk7XG4gIH1cblxuICBpZiAocmVxLnNpZ25hdHVyZSkge1xuICAgIHBiQWN0aW9uLnNldFNpZ25hdHVyZShyZXEuc2lnbmF0dXJlKTtcbiAgfVxuXG4gIHJldHVybiBwYkFjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSW5mbyB7XG4gIGFjdGlvbjogSUFjdGlvbjtcbiAgYWN0SGFzaDogc3RyaW5nO1xuICBibGtIYXNoOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogSVRpbWVzdGFtcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR2V0QWN0aW9uc1Jlc3BvbnNlIHtcbiAgYWN0aW9uSW5mbzogQXJyYXk8SUFjdGlvbkluZm8+O1xufVxuXG5leHBvcnQgY29uc3QgR2V0QWN0aW9uc1JlcXVlc3QgPSB7XG4gIGJ5QWRkclRvKGJ5QWRkcjogSUdldEFjdGlvbnNCeUFkZHJlc3NSZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcUJ5QWRkciA9IG5ldyBhcGlQYi5HZXRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdCgpO1xuICAgIGlmIChieUFkZHIuYWRkcmVzcykge1xuICAgICAgcGJSZXFCeUFkZHIuc2V0QWRkcmVzcyhieUFkZHIuYWRkcmVzcyk7XG4gICAgfVxuICAgIGlmIChieUFkZHIuc3RhcnQpIHtcbiAgICAgIHBiUmVxQnlBZGRyLnNldFN0YXJ0KGJ5QWRkci5zdGFydCk7XG4gICAgfVxuICAgIGlmIChieUFkZHIuY291bnQpIHtcbiAgICAgIHBiUmVxQnlBZGRyLnNldENvdW50KGJ5QWRkci5jb3VudCk7XG4gICAgfVxuICAgIHJldHVybiBwYlJlcUJ5QWRkcjtcbiAgfSxcblxuICBieUJsa1RvKGJ5QmxrOiBJR2V0QWN0aW9uc0J5QmxvY2tSZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcUJ5QmxrID0gbmV3IGFwaVBiLkdldEFjdGlvbnNCeUJsb2NrUmVxdWVzdCgpO1xuICAgIGlmIChieUJsay5ibGtIYXNoKSB7XG4gICAgICBwYlJlcUJ5QmxrLnNldEJsa2hhc2goYnlCbGsuYmxrSGFzaCk7XG4gICAgfVxuICAgIGlmIChieUJsay5zdGFydCkge1xuICAgICAgcGJSZXFCeUJsay5zZXRTdGFydChieUJsay5zdGFydCk7XG4gICAgfVxuICAgIGlmIChieUJsay5jb3VudCkge1xuICAgICAgcGJSZXFCeUJsay5zZXRDb3VudChieUJsay5jb3VudCk7XG4gICAgfVxuICAgIHJldHVybiBwYlJlcUJ5QmxrO1xuICB9LFxuXG4gIGJ5SGFzaFRvKGJ5SGFzaDogSUdldEFjdGlvbnNCeUhhc2hSZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcUJ5SGFzaCA9IG5ldyBhcGlQYi5HZXRBY3Rpb25CeUhhc2hSZXF1ZXN0KCk7XG4gICAgaWYgKGJ5SGFzaC5hY3Rpb25IYXNoKSB7XG4gICAgICBwYlJlcUJ5SGFzaC5zZXRBY3Rpb25oYXNoKGJ5SGFzaC5hY3Rpb25IYXNoKTtcbiAgICB9XG4gICAgaWYgKGJ5SGFzaC5jaGVja2luZ1BlbmRpbmcpIHtcbiAgICAgIHBiUmVxQnlIYXNoLnNldENoZWNrcGVuZGluZyhieUhhc2guY2hlY2tpbmdQZW5kaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHBiUmVxQnlIYXNoO1xuICB9LFxuXG4gIGJ5SW5kZXhUbyhieUluZGV4OiBJR2V0QWN0aW9uc0J5SW5kZXhSZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcUJ5SW5kZXggPSBuZXcgYXBpUGIuR2V0QWN0aW9uc0J5SW5kZXhSZXF1ZXN0KCk7XG4gICAgaWYgKGJ5SW5kZXguc3RhcnQpIHtcbiAgICAgIHBiUmVxQnlJbmRleC5zZXRTdGFydChieUluZGV4LnN0YXJ0KTtcbiAgICB9XG4gICAgaWYgKGJ5SW5kZXguY291bnQpIHtcbiAgICAgIHBiUmVxQnlJbmRleC5zZXRDb3VudChieUluZGV4LmNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHBiUmVxQnlJbmRleDtcbiAgfSxcblxuICB1bmNvbmZpcm1lZEJ5QWRkclRvKFxuICAgIHVuY29uZmlybWVkQnlBZGRyOiBJR2V0VW5jb25maXJtZWRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdFxuICApOiBhbnkge1xuICAgIGNvbnN0IHBiUmVxVW5jb25maXJtZWRCeUFkZHIgPSBuZXcgYXBpUGIuR2V0VW5jb25maXJtZWRBY3Rpb25zQnlBZGRyZXNzUmVxdWVzdCgpO1xuICAgIGlmICh1bmNvbmZpcm1lZEJ5QWRkci5zdGFydCkge1xuICAgICAgcGJSZXFVbmNvbmZpcm1lZEJ5QWRkci5zZXRTdGFydCh1bmNvbmZpcm1lZEJ5QWRkci5zdGFydCk7XG4gICAgfVxuICAgIGlmICh1bmNvbmZpcm1lZEJ5QWRkci5jb3VudCkge1xuICAgICAgcGJSZXFVbmNvbmZpcm1lZEJ5QWRkci5zZXRDb3VudCh1bmNvbmZpcm1lZEJ5QWRkci5jb3VudCk7XG4gICAgfVxuICAgIGlmICh1bmNvbmZpcm1lZEJ5QWRkci5hZGRyZXNzKSB7XG4gICAgICBwYlJlcVVuY29uZmlybWVkQnlBZGRyLnNldEFkZHJlc3ModW5jb25maXJtZWRCeUFkZHIuYWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiBwYlJlcVVuY29uZmlybWVkQnlBZGRyO1xuICB9LFxuICB0byhyZXE6IElHZXRBY3Rpb25zUmVxdWVzdCk6IGFueSB7XG4gICAgY29uc3QgcGJSZXEgPSBuZXcgYXBpUGIuR2V0QWN0aW9uc1JlcXVlc3QoKTtcbiAgICBpZiAocmVxLmJ5QWRkcikge1xuICAgICAgcGJSZXEuc2V0QnlhZGRyKEdldEFjdGlvbnNSZXF1ZXN0LmJ5QWRkclRvKHJlcS5ieUFkZHIpKTtcbiAgICB9XG4gICAgaWYgKHJlcS5ieUJsaykge1xuICAgICAgcGJSZXEuc2V0QnlibGsoR2V0QWN0aW9uc1JlcXVlc3QuYnlCbGtUbyhyZXEuYnlCbGspKTtcbiAgICB9XG4gICAgaWYgKHJlcS5ieUhhc2gpIHtcbiAgICAgIHBiUmVxLnNldEJ5aGFzaChHZXRBY3Rpb25zUmVxdWVzdC5ieUhhc2hUbyhyZXEuYnlIYXNoKSk7XG4gICAgfVxuICAgIGlmIChyZXEuYnlJbmRleCkge1xuICAgICAgcGJSZXEuc2V0QnlpbmRleChHZXRBY3Rpb25zUmVxdWVzdC5ieUluZGV4VG8ocmVxLmJ5SW5kZXgpKTtcbiAgICB9XG4gICAgaWYgKHJlcS51bmNvbmZpcm1lZEJ5QWRkcikge1xuICAgICAgcGJSZXEuc2V0VW5jb25maXJtZWRieWFkZHIoXG4gICAgICAgIEdldEFjdGlvbnNSZXF1ZXN0LnVuY29uZmlybWVkQnlBZGRyVG8ocmVxLnVuY29uZmlybWVkQnlBZGRyKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHBiUmVxO1xuICB9LFxuXG4gIGZyb21UcmFuc2ZlcihwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgdHJhbnNmZXJEYXRhID0gcGJSZXM7XG4gICAgaWYgKHBiUmVzKSB7XG4gICAgICB0cmFuc2ZlckRhdGEgPSB7XG4gICAgICAgIGFtb3VudDogcGJSZXMuZ2V0QW1vdW50KCksXG4gICAgICAgIHJlY2lwaWVudDogcGJSZXMuZ2V0UmVjaXBpZW50KCksXG4gICAgICAgIHBheWxvYWQ6IHBiUmVzLmdldFBheWxvYWQoKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZmVyRGF0YTtcbiAgfSxcblxuICBmcm9tVm90ZShwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgdm90ZURhdGEgPSBwYlJlcztcbiAgICBpZiAodm90ZURhdGEpIHtcbiAgICAgIHZvdGVEYXRhID0ge1xuICAgICAgICB0aW1lc3RhbXA6IHBiUmVzLmdldFRpbWVzdGFtcCgpLFxuICAgICAgICB2b3RlZUFkZHJlc3M6IHBiUmVzLmdldFZvdGVlYWRkcmVzcygpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdm90ZURhdGE7XG4gIH0sXG5cbiAgZnJvbUV4ZWN1dGlvbihwYlJlczogRXhlY3V0aW9uIHwgdW5kZWZpbmVkKTogSUV4ZWN1dGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFwYlJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHtcbiAgICAgIGFtb3VudDogcGJSZXMuZ2V0QW1vdW50KCksXG4gICAgICBjb250cmFjdDogcGJSZXMuZ2V0Q29udHJhY3QoKSxcbiAgICAgIGRhdGE6IHBiUmVzLmdldERhdGEoKVxuICAgIH07XG4gIH0sXG5cbiAgZnJvbVN0YXJ0U3ViQ2hhaW4ocGJSZXM6IGFueSk6IGFueSB7XG4gICAgbGV0IHN0YXJ0U3ViQ2hhaW5EYXRhID0gcGJSZXM7XG4gICAgaWYgKHN0YXJ0U3ViQ2hhaW5EYXRhKSB7XG4gICAgICBzdGFydFN1YkNoYWluRGF0YSA9IHtcbiAgICAgICAgY2hhaW5JRDogcGJSZXMuY2hhaW5JRCxcbiAgICAgICAgc2VjdXJpdHlEZXBvc2l0OiBwYlJlcy5zZWN1cml0eURlcG9zaXQsXG4gICAgICAgIG9wZXJhdGlvbkRlcG9zaXQ6IHBiUmVzLm9wZXJhdGlvbkRlcG9zaXQsXG4gICAgICAgIHN0YXJ0SGVpZ2h0OiBwYlJlcy5zdGFydEhlaWdodCxcbiAgICAgICAgcGFyZW50SGVpZ2h0T2Zmc2V0OiBwYlJlcy5wYXJlbnRIZWlnaHRPZmZzZXRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzdGFydFN1YkNoYWluRGF0YTtcbiAgfSxcblxuICBmcm9tU3RvcFN1YkNoYWluKHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBzdG9wU3ViQ2hhaW5EYXRhID0gcGJSZXM7XG4gICAgaWYgKHN0b3BTdWJDaGFpbkRhdGEpIHtcbiAgICAgIHN0b3BTdWJDaGFpbkRhdGEgPSB7XG4gICAgICAgIGNoYWluSUQ6IHBiUmVzLmNoYWluSUQsXG4gICAgICAgIHN0b3BIZWlnaHQ6IHBiUmVzLnN0b3BIZWlnaHQsXG4gICAgICAgIHN1YkNoYWluQWRkcmVzczogcGJSZXMuc3ViQ2hhaW5BZGRyZXNzXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RvcFN1YkNoYWluRGF0YTtcbiAgfSxcblxuICBmcm9tUHV0QmxvY2socGJSZXM6IGFueSk6IGFueSB7XG4gICAgbGV0IHB1dEJsb2NrRGF0YSA9IHBiUmVzO1xuICAgIGlmIChwdXRCbG9ja0RhdGEpIHtcbiAgICAgIGNvbnN0IHJvb3RzRGF0YSA9IHBiUmVzLnJvb3RzO1xuICAgICAgaWYgKHJvb3RzRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBiUmVzLnJvb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcm9vdHNEYXRhW2ldID0ge1xuICAgICAgICAgICAgbmFtZTogcGJSZXMucm9vdHNbaV0ubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBwYlJlcy5yb290c1tpXS52YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1dEJsb2NrRGF0YSA9IHtcbiAgICAgICAgc3ViQ2hhaW5BZGRyZXNzOiBwYlJlcy5zdWJDaGFpbkFkZHJlc3MsXG4gICAgICAgIGhlaWdodDogcGJSZXMuaGVpZ2h0LFxuICAgICAgICByb290czogcm9vdHNEYXRhXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcHV0QmxvY2tEYXRhO1xuICB9LFxuXG4gIGZyb21DcmVhdGVEZXBvc2l0KHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBjcmVhdGVEZXBvc2l0RGF0YSA9IHBiUmVzO1xuICAgIGlmIChjcmVhdGVEZXBvc2l0RGF0YSkge1xuICAgICAgY3JlYXRlRGVwb3NpdERhdGEgPSB7XG4gICAgICAgIGNoYWluSUQ6IHBiUmVzLmNoYWluSUQsXG4gICAgICAgIGFtb3VudDogcGJSZXMuYW1vdW50LFxuICAgICAgICByZWNpcGllbnQ6IHBiUmVzLnJlY2lwaWVudFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZURlcG9zaXREYXRhO1xuICB9LFxuXG4gIGZyb21TZXR0bGVEZXBvc2l0KHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBzZXR0bGVEZXBvc2l0RGF0YSA9IHBiUmVzO1xuICAgIGlmIChzZXR0bGVEZXBvc2l0RGF0YSkge1xuICAgICAgc2V0dGxlRGVwb3NpdERhdGEgPSB7XG4gICAgICAgIGFtb3VudDogcGJSZXMuYW1vdW50LFxuICAgICAgICByZWNpcGllbnQ6IHBiUmVzLnJlY2lwaWVudCxcbiAgICAgICAgaW5kZXg6IHBiUmVzLmluZGV4XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc2V0dGxlRGVwb3NpdERhdGE7XG4gIH0sXG5cbiAgZnJvbUNyZWF0ZVBsdW1DaGFpbihwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgY3JlYXRlUGx1bUNoYWluRGF0YSA9IHBiUmVzO1xuICAgIGlmIChjcmVhdGVQbHVtQ2hhaW5EYXRhKSB7XG4gICAgICBjcmVhdGVQbHVtQ2hhaW5EYXRhID0ge307XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVQbHVtQ2hhaW5EYXRhO1xuICB9LFxuXG4gIGZyb21UZXJtaW5hdGVQbHVtQ2hhaW4ocGJSZXM6IGFueSk6IGFueSB7XG4gICAgbGV0IHRlcm1pbmF0ZVBsdW1DaGFpbkRhdGEgPSBwYlJlcztcbiAgICBpZiAodGVybWluYXRlUGx1bUNoYWluRGF0YSkge1xuICAgICAgdGVybWluYXRlUGx1bUNoYWluRGF0YSA9IHtcbiAgICAgICAgc3ViQ2hhaW5BZGRyZXNzOiBwYlJlcy5zdWJDaGFpbkFkZHJlc3NcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0ZXJtaW5hdGVQbHVtQ2hhaW5EYXRhO1xuICB9LFxuXG4gIGZyb21QbHVtUHV0QmxvY2socGJSZXM6IGFueSk6IGFueSB7XG4gICAgbGV0IHBsdW1QdXRCbG9ja0RhdGEgPSBwYlJlcztcbiAgICBpZiAocGx1bVB1dEJsb2NrRGF0YSkge1xuICAgICAgcGx1bVB1dEJsb2NrRGF0YSA9IHtcbiAgICAgICAgc3ViQ2hhaW5BZGRyZXNzOiBwYlJlcy5zdWJDaGFpbkFkZHJlc3MsXG4gICAgICAgIGhlaWdodDogcGJSZXMuaGVpZ2h0LFxuICAgICAgICByb290czogcGJSZXMucm9vdHNcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBwbHVtUHV0QmxvY2tEYXRhO1xuICB9LFxuXG4gIGZyb21QbHVtQ3JlYXRlRGVwb3NpdChwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgcGx1bUNyZWF0ZURlcG9zaXREYXRhID0gcGJSZXM7XG4gICAgaWYgKHBsdW1DcmVhdGVEZXBvc2l0RGF0YSkge1xuICAgICAgcGx1bUNyZWF0ZURlcG9zaXREYXRhID0ge1xuICAgICAgICBzdWJDaGFpbkFkZHJlc3M6IHBiUmVzLnN1YkNoYWluQWRkcmVzcyxcbiAgICAgICAgYW1vdW50OiBwYlJlcy5hbW91bnQsXG4gICAgICAgIHJlY2lwaWVudDogcGJSZXMucmVjaXBpZW50XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcGx1bUNyZWF0ZURlcG9zaXREYXRhO1xuICB9LFxuXG4gIGZyb21QbHVtU3RhcnRFeGl0KHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBwbHVtU3RhcnRFeGl0RGF0YSA9IHBiUmVzO1xuICAgIGlmIChwbHVtU3RhcnRFeGl0RGF0YSkge1xuICAgICAgcGx1bVN0YXJ0RXhpdERhdGEgPSB7XG4gICAgICAgIHN1YkNoYWluQWRkcmVzczogcGJSZXMuc3ViQ2hhaW5BZGRyZXNzLFxuICAgICAgICBwcmV2aW91c1RyYW5zZmVyOiBwYlJlcy5wcmV2aW91c1RyYW5zZmVyLFxuICAgICAgICBwcmV2aW91c1RyYW5zZmVyQmxvY2tQcm9vZjogcGJSZXMucHJldmlvdXNUcmFuc2ZlckJsb2NrUHJvb2YsXG4gICAgICAgIHByZXZpb3VzVHJhbnNmZXJCbG9ja0hlaWdodDogcGJSZXMucHJldmlvdXNUcmFuc2ZlckJsb2NrSGVpZ2h0LFxuICAgICAgICBleGl0VHJhbnNmZXI6IHBiUmVzLmV4aXRUcmFuc2ZlcixcbiAgICAgICAgZXhpdFRyYW5zZmVyQmxvY2tQcm9vZjogcGJSZXMuZXhpdFRyYW5zZmVyQmxvY2tQcm9vZixcbiAgICAgICAgZXhpdFRyYW5zZmVyQmxvY2tIZWlnaHQ6IHBiUmVzLmV4aXRUcmFuc2ZlckJsb2NrSGVpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcGx1bVN0YXJ0RXhpdERhdGE7XG4gIH0sXG5cbiAgZnJvbVBsdW1DaGFsbGVuZ2VFeGl0KHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBwbHVtQ2hhbGxlbmdlRXhpdERhdGEgPSBwYlJlcztcbiAgICBpZiAocGx1bUNoYWxsZW5nZUV4aXREYXRhKSB7XG4gICAgICBwbHVtQ2hhbGxlbmdlRXhpdERhdGEgPSB7XG4gICAgICAgIHN1YkNoYWluQWRkcmVzczogcGJSZXMuc3ViQ2hhaW5BZGRyZXNzLFxuICAgICAgICBjb2luSUQ6IHBiUmVzLmNvaW5JRCxcbiAgICAgICAgY2hhbGxlbmdlVHJhbnNmZXI6IHBiUmVzLmNoYWxsZW5nZVRyYW5zZmVyLFxuICAgICAgICBjaGFsbGVuZ2VUcmFuc2ZlckJsb2NrUHJvb2Y6IHBiUmVzLmNoYWxsZW5nZVRyYW5zZmVyQmxvY2tQcm9vZixcbiAgICAgICAgY2hhbGxlbmdlVHJhbnNmZXJCbG9ja0hlaWdodDogcGJSZXMuY2hhbGxlbmdlVHJhbnNmZXJCbG9ja0hlaWdodFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdW1DaGFsbGVuZ2VFeGl0RGF0YTtcbiAgfSxcblxuICBmcm9tUGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdChwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgcGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdERhdGEgPSBwYlJlcztcbiAgICBpZiAocGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdERhdGEpIHtcbiAgICAgIHBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXREYXRhID0ge1xuICAgICAgICBzdWJDaGFpbkFkZHJlc3M6IHBiUmVzLnN1YkNoYWluQWRkcmVzcyxcbiAgICAgICAgY29pbklEOiBwYlJlcy5jb2luSUQsXG4gICAgICAgIGNoYWxsZW5nZVRyYW5zZmVyOiBwYlJlcy5jaGFsbGVuZ2VUcmFuc2ZlcixcbiAgICAgICAgcmVzcG9uc2VUcmFuc2ZlcjogcGJSZXMucmVzcG9uc2VUcmFuc2ZlcixcbiAgICAgICAgcmVzcG9uc2VUcmFuc2ZlckJsb2NrUHJvb2Y6IHBiUmVzLnJlc3BvbnNlVHJhbnNmZXJCbG9ja1Byb29mLFxuICAgICAgICBwcmV2aW91c1RyYW5zZmVyQmxvY2tIZWlnaHQ6IHBiUmVzLnByZXZpb3VzVHJhbnNmZXJCbG9ja0hlaWdodFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXREYXRhO1xuICB9LFxuXG4gIGZyb21QbHVtRmluYWxpemVFeGl0KHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBwbHVtRmluYWxpemVFeGl0RGF0YSA9IHBiUmVzO1xuICAgIGlmIChwbHVtRmluYWxpemVFeGl0RGF0YSkge1xuICAgICAgcGx1bUZpbmFsaXplRXhpdERhdGEgPSB7XG4gICAgICAgIHN1YkNoYWluQWRkcmVzczogcGJSZXMuc3ViQ2hhaW5BZGRyZXNzLFxuICAgICAgICBjb2luSUQ6IHBiUmVzLmNvaW5JRFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdW1GaW5hbGl6ZUV4aXREYXRhO1xuICB9LFxuXG4gIGZyb21QbHVtU2V0dGxlRGVwb3NpdChwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgcGx1bVNldHRsZURlcG9zaXREYXRhID0gcGJSZXM7XG4gICAgaWYgKHBsdW1TZXR0bGVEZXBvc2l0RGF0YSkge1xuICAgICAgcGx1bVNldHRsZURlcG9zaXREYXRhID0ge1xuICAgICAgICBjb2luSUQ6IHBiUmVzLmNvaW5JRFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdW1TZXR0bGVEZXBvc2l0RGF0YTtcbiAgfSxcblxuICBmcm9tUGx1bVRyYW5zZmVyKHBiUmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBwbHVtVHJhbnNmZXJEYXRhID0gcGJSZXM7XG4gICAgaWYgKHBsdW1UcmFuc2ZlckRhdGEpIHtcbiAgICAgIHBsdW1UcmFuc2ZlckRhdGEgPSB7XG4gICAgICAgIGNvaW5JRDogcGJSZXMuY29pbklELFxuICAgICAgICBkZW5vbWluYXRpb246IHBiUmVzLmRlbm9taW5hdGlvbixcbiAgICAgICAgb3duZXI6IHBiUmVzLm93bmVyLFxuICAgICAgICByZWNpcGllbnQ6IHBiUmVzLnJlY2lwaWVudFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdW1UcmFuc2ZlckRhdGE7XG4gIH0sXG5cbiAgZnJvbURlcG9zaXRUb1Jld2FyZGluZ0Z1bmQocGJSZXM6IGFueSk6IGFueSB7XG4gICAgbGV0IGRlcG9zaXRUb1Jld2FyZGluZ0Z1bmREYXRhID0gcGJSZXM7XG4gICAgaWYgKGRlcG9zaXRUb1Jld2FyZGluZ0Z1bmREYXRhKSB7XG4gICAgICBkZXBvc2l0VG9SZXdhcmRpbmdGdW5kRGF0YSA9IHtcbiAgICAgICAgYW1vdW50OiBwYlJlcy5hbW91bnQsXG4gICAgICAgIGRhdGE6IHBiUmVzLmRhdGFcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZXBvc2l0VG9SZXdhcmRpbmdGdW5kRGF0YTtcbiAgfSxcblxuICBmcm9tQ2xhaW1Gcm9tUmV3YXJkaW5nRnVuZChwYlJlczogYW55KTogYW55IHtcbiAgICBsZXQgY2xhaW1Gcm9tUmV3YXJkaW5nRnVuZERhdGEgPSBwYlJlcztcbiAgICBpZiAoY2xhaW1Gcm9tUmV3YXJkaW5nRnVuZERhdGEpIHtcbiAgICAgIGNsYWltRnJvbVJld2FyZGluZ0Z1bmREYXRhID0ge1xuICAgICAgICBhbW91bnQ6IHBiUmVzLmFtb3VudCxcbiAgICAgICAgZGF0YTogcGJSZXMuZGF0YVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYWltRnJvbVJld2FyZGluZ0Z1bmREYXRhO1xuICB9LFxuXG4gIGZyb21TZXRSZXdhcmQocGJSZXM6IGFueSk6IGFueSB7XG4gICAgbGV0IHNldFJld2FyZERhdGEgPSBwYlJlcztcbiAgICBpZiAoc2V0UmV3YXJkRGF0YSkge1xuICAgICAgc2V0UmV3YXJkRGF0YSA9IHtcbiAgICAgICAgYW1vdW50OiBwYlJlcy5hbW91bnQsXG4gICAgICAgIGRhdGE6IHBiUmVzLmRhdGEsXG4gICAgICAgIHR5cGU6IHBiUmVzLnR5cGVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzZXRSZXdhcmREYXRhO1xuICB9LFxuXG4gIGZyb21HcmFudFJld2FyZChcbiAgICBwYlJlczogYWN0aW9uUGIuR3JhbnRSZXdhcmQgfCB1bmRlZmluZWRcbiAgKTogSUdyYW50UmV3YXJkIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXBiUmVzKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogcGJSZXMuZ2V0VHlwZSgpLFxuICAgICAgaGVpZ2h0OiBwYlJlcy5nZXRIZWlnaHQoKVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0UHV0UG9sbFJlc3VsdChyZXE6IFB1dFBvbGxSZXN1bHQgfCB1bmRlZmluZWQpOiBJUHV0UG9sbFJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFyZXEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBjYW5kaWRhdGVMaXN0OiBJQ2FuZGlkYXRlTGlzdCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCByYXdDYW5kaWRhdGVzID0gcmVxLmdldENhbmRpZGF0ZXMoKTtcbiAgICBpZiAocmF3Q2FuZGlkYXRlcykge1xuICAgICAgY2FuZGlkYXRlTGlzdCA9IHtcbiAgICAgICAgY2FuZGlkYXRlczogW11cbiAgICAgIH07XG4gICAgICBjb25zdCByYXdDYW5kaWRhdGVzTGlzdCA9IHJhd0NhbmRpZGF0ZXMuZ2V0Q2FuZGlkYXRlc0xpc3QoKTtcbiAgICAgIGlmIChyYXdDYW5kaWRhdGVzTGlzdCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJhd0NhbmRpZGF0ZSBvZiByYXdDYW5kaWRhdGVzTGlzdCkge1xuICAgICAgICAgIGNhbmRpZGF0ZUxpc3QuY2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJhd0NhbmRpZGF0ZS5nZXRBZGRyZXNzKCksXG4gICAgICAgICAgICB2b3RlczogcmF3Q2FuZGlkYXRlLmdldFZvdGVzKCksXG4gICAgICAgICAgICBwdWJLZXk6IHJhd0NhbmRpZGF0ZS5nZXRQdWJrZXkoKSxcbiAgICAgICAgICAgIHJld2FyZEFkZHJlc3M6IHJhd0NhbmRpZGF0ZS5nZXRSZXdhcmRhZGRyZXNzKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiByZXEuZ2V0SGVpZ2h0KCksXG4gICAgICBjYW5kaWRhdGVzOiBjYW5kaWRhdGVMaXN0XG4gICAgfTtcbiAgfSxcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWZ1bmMtYm9keS1sZW5ndGhcbiAgZnJvbShwYlJlczogR2V0QWN0aW9uc1Jlc3BvbnNlKTogSUdldEFjdGlvbnNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVzID0gKHtcbiAgICAgIGFjdGlvbkluZm86IFtdXG4gICAgfSBhcyBhbnkpIGFzIElHZXRBY3Rpb25zUmVzcG9uc2U7XG4gICAgY29uc3QgcmF3QWN0aW9uSW5mb0xpc3QgPSBwYlJlcy5nZXRBY3Rpb25pbmZvTGlzdCgpO1xuICAgIGlmICghcmF3QWN0aW9uSW5mb0xpc3QpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCByYXdBY3Rpb25JbmZvIG9mIHJhd0FjdGlvbkluZm9MaXN0KSB7XG4gICAgICBjb25zdCBhY3Rpb25JbmZvID0gKHtcbiAgICAgICAgYWN0SGFzaDogcmF3QWN0aW9uSW5mby5nZXRBY3RoYXNoKCksXG4gICAgICAgIGJsa0hhc2g6IHJhd0FjdGlvbkluZm8uZ2V0QmxraGFzaCgpLFxuICAgICAgICB0aW1lc3RhbXA6IHJhd0FjdGlvbkluZm8uZ2V0VGltZXN0YW1wKClcbiAgICAgIH0gYXMgYW55KSBhcyBJQWN0aW9uSW5mbztcblxuICAgICAgY29uc3QgcmF3QWN0aW9uID0gcmF3QWN0aW9uSW5mby5nZXRBY3Rpb24oKTtcbiAgICAgIGlmIChyYXdBY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcmF3QWN0aW9uQ29yZSA9IHJhd0FjdGlvbi5nZXRDb3JlKCk7XG4gICAgICAgIGxldCBhY3Rpb25Db3JlOiBJQWN0aW9uQ29yZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJhd0FjdGlvbkNvcmUpIHtcbiAgICAgICAgICBhY3Rpb25Db3JlID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogcmF3QWN0aW9uQ29yZS5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBub25jZTogU3RyaW5nKHJhd0FjdGlvbkNvcmUuZ2V0Tm9uY2UoKSksXG4gICAgICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHJhd0FjdGlvbkNvcmUuZ2V0R2FzbGltaXQoKSksXG4gICAgICAgICAgICBnYXNQcmljZTogcmF3QWN0aW9uQ29yZS5nZXRHYXNwcmljZSgpLFxuICAgICAgICAgICAgdHJhbnNmZXI6IEdldEFjdGlvbnNSZXF1ZXN0LmZyb21UcmFuc2ZlcihcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRUcmFuc2ZlcigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZXhlY3V0aW9uOiBHZXRBY3Rpb25zUmVxdWVzdC5mcm9tRXhlY3V0aW9uKFxuICAgICAgICAgICAgICByYXdBY3Rpb25Db3JlLmdldEV4ZWN1dGlvbigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3RhcnRTdWJDaGFpbjogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbVN0YXJ0U3ViQ2hhaW4oXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0U3RhcnRzdWJjaGFpbigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3RvcFN1YkNoYWluOiBHZXRBY3Rpb25zUmVxdWVzdC5mcm9tU3RvcFN1YkNoYWluKFxuICAgICAgICAgICAgICByYXdBY3Rpb25Db3JlLmdldFN0b3BzdWJjaGFpbigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcHV0QmxvY2s6IEdldEFjdGlvbnNSZXF1ZXN0LmZyb21QdXRCbG9jayhcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRQdXRibG9jaygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlRGVwb3NpdDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbUNyZWF0ZURlcG9zaXQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0Q3JlYXRlZGVwb3NpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2V0dGxlRGVwb3NpdDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbVNldHRsZURlcG9zaXQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0U2V0dGxlZGVwb3NpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlUGx1bUNoYWluOiBHZXRBY3Rpb25zUmVxdWVzdC5mcm9tQ3JlYXRlUGx1bUNoYWluKFxuICAgICAgICAgICAgICByYXdBY3Rpb25Db3JlLmdldENyZWF0ZXBsdW1jaGFpbigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGVybWluYXRlUGx1bUNoYWluOiBHZXRBY3Rpb25zUmVxdWVzdC5mcm9tVGVybWluYXRlUGx1bUNoYWluKFxuICAgICAgICAgICAgICByYXdBY3Rpb25Db3JlLmdldFRlcm1pbmF0ZXBsdW1jaGFpbigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bVB1dEJsb2NrOiBHZXRBY3Rpb25zUmVxdWVzdC5mcm9tUGx1bVB1dEJsb2NrKFxuICAgICAgICAgICAgICByYXdBY3Rpb25Db3JlLmdldFBsdW1wdXRibG9jaygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bUNyZWF0ZURlcG9zaXQ6IEdldEFjdGlvbnNSZXF1ZXN0LmZyb21QbHVtQ3JlYXRlRGVwb3NpdChcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRQbHVtY3JlYXRlZGVwb3NpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bVN0YXJ0RXhpdDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbVBsdW1TdGFydEV4aXQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0UGx1bXN0YXJ0ZXhpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bUNoYWxsZW5nZUV4aXQ6IEdldEFjdGlvbnNSZXF1ZXN0LmZyb21QbHVtQ2hhbGxlbmdlRXhpdChcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRQbHVtY2hhbGxlbmdlZXhpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bVJlc3BvbnNlQ2hhbGxlbmdlRXhpdDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbVBsdW1SZXNwb25zZUNoYWxsZW5nZUV4aXQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0UGx1bXJlc3BvbnNlY2hhbGxlbmdlZXhpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bUZpbmFsaXplRXhpdDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbVBsdW1GaW5hbGl6ZUV4aXQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0UGx1bWZpbmFsaXplZXhpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bVNldHRsZURlcG9zaXQ6IEdldEFjdGlvbnNSZXF1ZXN0LmZyb21QbHVtU2V0dGxlRGVwb3NpdChcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRQbHVtc2V0dGxlZGVwb3NpdCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGx1bVRyYW5zZmVyOiBHZXRBY3Rpb25zUmVxdWVzdC5mcm9tUGx1bVRyYW5zZmVyKFxuICAgICAgICAgICAgICByYXdBY3Rpb25Db3JlLmdldFBsdW10cmFuc2ZlcigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZGVwb3NpdFRvUmV3YXJkaW5nRnVuZDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbURlcG9zaXRUb1Jld2FyZGluZ0Z1bmQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0RGVwb3NpdHRvcmV3YXJkaW5nZnVuZCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2xhaW1Gcm9tUmV3YXJkaW5nRnVuZDogR2V0QWN0aW9uc1JlcXVlc3QuZnJvbUNsYWltRnJvbVJld2FyZGluZ0Z1bmQoXG4gICAgICAgICAgICAgIHJhd0FjdGlvbkNvcmUuZ2V0Q2xhaW1mcm9tcmV3YXJkaW5nZnVuZCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZ3JhbnRSZXdhcmQ6IEdldEFjdGlvbnNSZXF1ZXN0LmZyb21HcmFudFJld2FyZChcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRHcmFudHJld2FyZCgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcHV0UG9sbFJlc3VsdDogR2V0QWN0aW9uc1JlcXVlc3QuZ2V0UHV0UG9sbFJlc3VsdChcbiAgICAgICAgICAgICAgcmF3QWN0aW9uQ29yZS5nZXRQdXRwb2xscmVzdWx0KClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0aW9uSW5mby5hY3Rpb24gPSB7XG4gICAgICAgICAgY29yZTogYWN0aW9uQ29yZSxcbiAgICAgICAgICBzZW5kZXJQdWJLZXk6IHJhd0FjdGlvbi5nZXRTZW5kZXJwdWJrZXkoKSxcbiAgICAgICAgICBzaWduYXR1cmU6IHJhd0FjdGlvbi5nZXRTaWduYXR1cmUoKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXMuYWN0aW9uSW5mby5wdXNoKGFjdGlvbkluZm8pO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBTdWdnZXN0R2FzUHJpY2UgUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1Z2dlc3RHYXNQcmljZVJlcXVlc3Qge31cblxuLy8gUHJvcGVydGllcyBvZiBhIFN1Z2dlc3RHYXNQcmljZVJlc3BvbnNlLlxuZXhwb3J0IGludGVyZmFjZSBJU3VnZ2VzdEdhc1ByaWNlUmVzcG9uc2Uge1xuICAvLyBTdWdnZXN0R2FzUHJpY2VSZXNwb25zZSBnYXNQcmljZVxuICBnYXNQcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU3VnZ2VzdEdhc1ByaWNlUmVxdWVzdCA9IHtcbiAgLy8gQHRzLWlnbm9yZVxuICB0byhyZXE6IElTdWdnZXN0R2FzUHJpY2VSZXF1ZXN0KTogYW55IHtcbiAgICByZXR1cm4gbmV3IGFwaVBiLlN1Z2dlc3RHYXNQcmljZVJlcXVlc3QoKTtcbiAgfSxcblxuICBmcm9tKHBiUmVzOiBhbnkpOiBJU3VnZ2VzdEdhc1ByaWNlUmVzcG9uc2Uge1xuICAgIGNvbnN0IGdhc1ByaWNlID0gcGJSZXMuZ2V0R2FzcHJpY2UoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZ2FzUHJpY2VcbiAgICB9O1xuICB9XG59O1xuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgR2V0UmVjZWlwdEJ5QWN0aW9uUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSUdldFJlY2VpcHRCeUFjdGlvblJlcXVlc3Qge1xuICAvLyBHZXRSZWNlaXB0QnlBY3Rpb25SZXF1ZXN0IGFjdGlvbkhhc2hcbiAgYWN0aW9uSGFzaDogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGFuIExvZy5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZyB7XG4gIC8vIExvZyBhZGRyZXNzXG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIExvZyB0b3BpY3NcbiAgdG9waWNzOiBBcnJheTxCdWZmZXIgfCB7fT47XG5cbiAgLy8gTG9nIGRhdGFcbiAgZGF0YTogQnVmZmVyIHwge307XG5cbiAgLy8gTG9nIGJsa0hlaWdodFxuICBibGtIZWlnaHQ6IG51bWJlcjtcblxuICAvLyBMb2cgdHhuSGFzaFxuICBhY3RIYXNoOiBCdWZmZXIgfCB7fTtcblxuICAvLyBMb2cgaW5kZXhcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhbiBSZWNlaXB0LlxuZXhwb3J0IGludGVyZmFjZSBJUmVjZWlwdCB7XG4gIC8vIFJlY2VpcHQgc3RhdHVzXG4gIHN0YXR1czogbnVtYmVyO1xuXG4gIC8vIGJsa0hlaWdodFxuICBibGtIZWlnaHQ6IG51bWJlcjtcblxuICAvLyBSZWNlaXB0IGFjdEhhc2hcbiAgYWN0SGFzaDogQnVmZmVyIHwge307XG5cbiAgLy8gUmVjZWlwdCBnYXNDb25zdW1lZFxuICBnYXNDb25zdW1lZDogbnVtYmVyO1xuXG4gIC8vIFJlY2VpcHQgY29udHJhY3RBZGRyZXNzXG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIFJlY2VpcHQgbG9nc1xuICBsb2dzOiBBcnJheTxJTG9nPiB8IHVuZGVmaW5lZDtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhbiBSZWNlaXB0LlxuZXhwb3J0IGludGVyZmFjZSBJUmVjZWlwdEluZm8ge1xuICAvLyBSZWNlaXB0XG4gIHJlY2VpcHQ6IElSZWNlaXB0IHwgdW5kZWZpbmVkO1xuXG4gIC8vIGJsa0hhc2hcbiAgYmxrSGFzaDogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgR2V0UmVjZWlwdEJ5QWN0aW9uUmVzcG9uc2UuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRSZWNlaXB0QnlBY3Rpb25SZXNwb25zZSB7XG4gIC8vIEdldFJlY2VpcHRCeUFjdGlvblJlc3BvbnNlIHJlY2VpcHRJbmZvXG4gIHJlY2VpcHRJbmZvOiBJUmVjZWlwdEluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZyb21QYlJlY2VpcHRJbmZvKFxuICBwYlJlY2VpcHRJbmZvOiBhcGlQYi5SZWNlaXB0SW5mbyB8IHVuZGVmaW5lZFxuKTogSVJlY2VpcHRJbmZvIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFwYlJlY2VpcHRJbmZvKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY2VpcHQ6IGZyb21QYlJlY2VpcHQocGJSZWNlaXB0SW5mby5nZXRSZWNlaXB0KCkpLFxuICAgIGJsa0hhc2g6IHBiUmVjZWlwdEluZm8uZ2V0QmxraGFzaCgpXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBHZXRSZWNlaXB0QnlBY3Rpb25SZXF1ZXN0ID0ge1xuICB0byhyZXE6IElHZXRSZWNlaXB0QnlBY3Rpb25SZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcSA9IG5ldyBhcGlQYi5HZXRSZWNlaXB0QnlBY3Rpb25SZXF1ZXN0KCk7XG4gICAgaWYgKHJlcS5hY3Rpb25IYXNoKSB7XG4gICAgICBwYlJlcS5zZXRBY3Rpb25oYXNoKHJlcS5hY3Rpb25IYXNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHBiUmVxO1xuICB9LFxuXG4gIGZyb20ocGJSZXM6IEdldFJlY2VpcHRCeUFjdGlvblJlc3BvbnNlKTogSUdldFJlY2VpcHRCeUFjdGlvblJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdEluZm86IGZyb21QYlJlY2VpcHRJbmZvKHBiUmVzLmdldFJlY2VpcHRpbmZvKCkpXG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZnJvbVBiUmVjZWlwdChcbiAgcGJSZWNlaXB0OiBhY3Rpb25QYi5SZWNlaXB0IHwgdW5kZWZpbmVkXG4pOiBJUmVjZWlwdCB8IHVuZGVmaW5lZCB7XG4gIGlmICghcGJSZWNlaXB0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0YXR1czogcGJSZWNlaXB0LmdldFN0YXR1cygpLFxuICAgIGJsa0hlaWdodDogcGJSZWNlaXB0LmdldEJsa2hlaWdodCgpLFxuICAgIGFjdEhhc2g6IHBiUmVjZWlwdC5nZXRBY3RoYXNoKCksXG4gICAgZ2FzQ29uc3VtZWQ6IHBiUmVjZWlwdC5nZXRHYXNjb25zdW1lZCgpLFxuICAgIGNvbnRyYWN0QWRkcmVzczogcGJSZWNlaXB0LmdldENvbnRyYWN0YWRkcmVzcygpLFxuICAgIGxvZ3M6IGZyb21QYkxvZ0xpc3QocGJSZWNlaXB0LmdldExvZ3NMaXN0KCkpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21QYkxvZ0xpc3QoXG4gIHBiTG9nTGlzdDogQXJyYXk8YWN0aW9uUGIuTG9nPiB8IHVuZGVmaW5lZFxuKTogQXJyYXk8SUxvZz4gfCB1bmRlZmluZWQge1xuICBpZiAoIXBiTG9nTGlzdCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcmVzID0gW10gYXMgQXJyYXk8SUxvZz47XG4gIGZvciAoY29uc3QgbG9nIG9mIHBiTG9nTGlzdCkge1xuICAgIHJlcy5wdXNoKHtcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogbG9nLmdldENvbnRyYWN0YWRkcmVzcygpLFxuICAgICAgdG9waWNzOiBsb2cuZ2V0VG9waWNzTGlzdCgpLFxuICAgICAgZGF0YTogbG9nLmdldERhdGEoKSxcbiAgICAgIGJsa0hlaWdodDogbG9nLmdldEJsa2hlaWdodCgpLFxuICAgICAgYWN0SGFzaDogbG9nLmdldEFjdGhhc2goKSxcbiAgICAgIGluZGV4OiBsb2cuZ2V0SW5kZXgoKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBSZWFkQ29udHJhY3RSZXF1ZXN0LlxuZXhwb3J0IGludGVyZmFjZSBJUmVhZENvbnRyYWN0UmVxdWVzdCB7XG4gIGV4ZWN1dGlvbjogSUV4ZWN1dGlvbjtcbiAgY2FsbGVyQWRkcmVzczogc3RyaW5nO1xufVxuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgUmVhZENvbnRyYWN0UmVzcG9uc2UuXG5leHBvcnQgaW50ZXJmYWNlIElSZWFkQ29udHJhY3RSZXNwb25zZSB7XG4gIGRhdGE6IHN0cmluZztcbiAgcmVjZWlwdDogSVJlY2VpcHQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBSZWFkQ29udHJhY3RSZXF1ZXN0ID0ge1xuICB0byhyZXE6IElSZWFkQ29udHJhY3RSZXF1ZXN0KTogYW55IHtcbiAgICBjb25zdCBwYlJlcSA9IG5ldyBhcGlQYi5SZWFkQ29udHJhY3RSZXF1ZXN0KCk7XG4gICAgcGJSZXEuc2V0Q2FsbGVyYWRkcmVzcyhyZXEuY2FsbGVyQWRkcmVzcyk7XG4gICAgaWYgKHJlcS5leGVjdXRpb24pIHtcbiAgICAgIHBiUmVxLnNldEV4ZWN1dGlvbih0b0FjdGlvbkV4ZWN1dGlvbihyZXEuZXhlY3V0aW9uKSk7XG4gICAgfVxuICAgIHJldHVybiBwYlJlcTtcbiAgfSxcblxuICBmcm9tKHBiUmVzOiBhcGlQYi5SZWFkQ29udHJhY3RSZXNwb25zZSk6IElSZWFkQ29udHJhY3RSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHBiUmVzLmdldERhdGEoKSxcbiAgICAgIHJlY2VpcHQ6IGZyb21QYlJlY2VpcHQocGJSZXMuZ2V0UmVjZWlwdCgpKVxuICAgIH07XG4gIH1cbn07XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBTZW5kQWN0aW9uUmVxdWVzdC5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbmRBY3Rpb25SZXF1ZXN0IHtcbiAgLy8gU2VuZEFjdGlvblJlcXVlc3QgYWN0aW9uXG4gIGFjdGlvbjogSUFjdGlvbjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIFNlbmRBY3Rpb25SZXNwb25zZS5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbmRBY3Rpb25SZXNwb25zZSB7XG4gIGFjdGlvbkhhc2g6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFNlbmRBY3Rpb25SZXF1ZXN0ID0ge1xuICB0byhyZXE6IElTZW5kQWN0aW9uUmVxdWVzdCk6IGFueSB7XG4gICAgY29uc3QgcGJSZXEgPSBuZXcgYXBpUGIuU2VuZEFjdGlvblJlcXVlc3QoKTtcbiAgICBpZiAocmVxLmFjdGlvbikge1xuICAgICAgcGJSZXEuc2V0QWN0aW9uKHRvQWN0aW9uKHJlcS5hY3Rpb24pKTtcbiAgICB9XG4gICAgcmV0dXJuIHBiUmVxO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgU2VuZEFjdGlvblJlc3BvbnNlID0ge1xuICBmcm9tKHJlc3A6IGFwaVBiLlNlbmRBY3Rpb25SZXNwb25zZSk6IElTZW5kQWN0aW9uUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb25IYXNoOiByZXNwLmdldEFjdGlvbmhhc2goKVxuICAgIH07XG4gIH1cbn07XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBFc3RpbWF0ZUdhc0ZvckFjdGlvblJlcXVlc3QuXG5leHBvcnQgaW50ZXJmYWNlIElFc3RpbWF0ZUdhc0ZvckFjdGlvblJlcXVlc3Qge1xuICBhY3Rpb246IElBY3Rpb247XG59XG5cbi8vIFByb3BlcnRpZXMgb2YgYSBFc3RpbWF0ZUdhc0ZvckFjdGlvblJlc3BvbnNlLlxuZXhwb3J0IGludGVyZmFjZSBJRXN0aW1hdGVHYXNGb3JBY3Rpb25SZXNwb25zZSB7XG4gIGdhczogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRXN0aW1hdGVHYXNGb3JBY3Rpb25SZXF1ZXN0ID0ge1xuICB0byhyZXE6IElFc3RpbWF0ZUdhc0ZvckFjdGlvblJlcXVlc3QpOiBhbnkge1xuICAgIGNvbnN0IHBiUmVxID0gbmV3IGFwaVBiLkVzdGltYXRlR2FzRm9yQWN0aW9uUmVxdWVzdCgpO1xuICAgIGlmIChyZXEuYWN0aW9uKSB7XG4gICAgICBwYlJlcS5zZXRBY3Rpb24odG9BY3Rpb24ocmVxLmFjdGlvbikpO1xuICAgIH1cbiAgICByZXR1cm4gcGJSZXE7XG4gIH0sXG4gIGZyb20ocGJSZXM6IGFueSk6IElFc3RpbWF0ZUdhc0ZvckFjdGlvblJlc3BvbnNlIHtcbiAgICByZXR1cm4geyBnYXM6IHBiUmVzLmdldEdhcygpIH07XG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlYWRTdGF0ZVJlcXVlc3Qge1xuICBwcm90b2NvbElEOiBCdWZmZXI7XG4gIG1ldGhvZE5hbWU6IEJ1ZmZlcjtcbiAgYXJndW1lbnRzOiBBcnJheTxCdWZmZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWFkU3RhdGVSZXNwb25zZSB7XG4gIGRhdGE6IEJ1ZmZlciB8IHt9O1xufVxuXG5leHBvcnQgY29uc3QgUmVhZFN0YXRlUmVxdWVzdCA9IHtcbiAgdG8ocmVxOiBJUmVhZFN0YXRlUmVxdWVzdCk6IGFwaVBiLlJlYWRTdGF0ZVJlcXVlc3Qge1xuICAgIGNvbnN0IHBiUmVxID0gbmV3IGFwaVBiLlJlYWRTdGF0ZVJlcXVlc3QoKTtcbiAgICBwYlJlcS5zZXRQcm90b2NvbGlkKHJlcS5wcm90b2NvbElEKTtcbiAgICBwYlJlcS5zZXRNZXRob2RuYW1lKHJlcS5tZXRob2ROYW1lKTtcbiAgICBwYlJlcS5zZXRBcmd1bWVudHNMaXN0KHJlcS5hcmd1bWVudHMpO1xuICAgIHJldHVybiBwYlJlcTtcbiAgfSxcbiAgZnJvbShwYlJlczogUmVhZFN0YXRlUmVzcG9uc2UpOiBJUmVhZFN0YXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBwYlJlcy5nZXREYXRhKClcbiAgICB9O1xuICB9XG59O1xuXG4vLyBQcm9wZXJ0aWVzIG9mIGEgQmxvY2tQcm9kdWNlckluZm8uXG5leHBvcnQgaW50ZXJmYWNlIElCbG9ja1Byb2R1Y2VySW5mbyB7XG4gIC8vIEJsb2NrUHJvZHVjZXJJbmZvIGFkZHJlc3NcbiAgYWRkcmVzczogc3RyaW5nO1xuXG4gIC8vIEJsb2NrUHJvZHVjZXJJbmZvIHZvdGVzXG4gIHZvdGVzOiBzdHJpbmc7XG5cbiAgLy8gQmxvY2tQcm9kdWNlckluZm8gYWN0aXZlXG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvLyBCbG9ja1Byb2R1Y2VySW5mbyBwcm9kdWN0aW9uXG4gIHByb2R1Y3Rpb246IG51bWJlcjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIEdldEVwb2NoTWV0YVJlcXVlc3QuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRFcG9jaE1ldGFSZXF1ZXN0IHtcbiAgZXBvY2hOdW1iZXI6IG51bWJlcjtcbn1cblxuLy8gUHJvcGVydGllcyBvZiBhIEdldEVwb2NoTWV0YVJlc3BvbnNlLlxuZXhwb3J0IGludGVyZmFjZSBJR2V0RXBvY2hNZXRhUmVzcG9uc2Uge1xuICAvLyBHZXRFcG9jaE1ldGFSZXNwb25zZSBlcG9jaERhdGFcbiAgZXBvY2hEYXRhOiBJRXBvY2hEYXRhO1xuXG4gIC8vIEdldEVwb2NoTWV0YVJlc3BvbnNlIHRvdGFsQmxvY2tzXG4gIHRvdGFsQmxvY2tzOiBudW1iZXI7XG5cbiAgLy8gR2V0RXBvY2hNZXRhUmVzcG9uc2UgYmxvY2tQcm9kdWNlcnNJbmZvXG4gIGJsb2NrUHJvZHVjZXJzSW5mbzogQXJyYXk8SUJsb2NrUHJvZHVjZXJJbmZvPjtcbn1cblxuZXhwb3J0IGNvbnN0IEdldEVwb2NoTWV0YVJlcXVlc3QgPSB7XG4gIHRvKHJlcTogSUdldEVwb2NoTWV0YVJlcXVlc3QpOiBhbnkge1xuICAgIGNvbnN0IHBiUmVxID0gbmV3IGFwaVBiLkdldEVwb2NoTWV0YVJlcXVlc3QoKTtcbiAgICBpZiAocmVxLmVwb2NoTnVtYmVyKSB7XG4gICAgICBwYlJlcS5zZXRFcG9jaG51bWJlcihyZXEuZXBvY2hOdW1iZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcGJSZXE7XG4gIH0sXG4gIGZyb20ocGJSZXM6IGFueSk6IElHZXRFcG9jaE1ldGFSZXNwb25zZSB7XG4gICAgY29uc3QgZXBvY2ggPSBwYlJlcy5nZXRFcG9jaGRhdGEoKTtcbiAgICBjb25zdCBicEluZm8gPSBwYlJlcy5nZXRCbG9ja3Byb2R1Y2Vyc2luZm9MaXN0KCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgZXBvY2hEYXRhOiB7XG4gICAgICAgIG51bTogZXBvY2guZ2V0TnVtKCksXG4gICAgICAgIGhlaWdodDogZXBvY2guZ2V0SGVpZ2h0KCksXG4gICAgICAgIGdyYXZpdHlDaGFpblN0YXJ0SGVpZ2h0OiBlcG9jaC5nZXRHcmF2aXR5Y2hhaW5zdGFydGhlaWdodCgpXG4gICAgICB9LFxuICAgICAgdG90YWxCbG9ja3M6IHBiUmVzLmdldFRvdGFsYmxvY2tzKCksXG4gICAgICBibG9ja1Byb2R1Y2Vyc0luZm86IGJwSW5mb1xuICAgIH07XG4gICAgaWYgKGJwSW5mbykge1xuICAgICAgY29uc3QgcGFyc2VkQnBpbmZvID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJwSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJzZWRCcGluZm9baV0gPSB7XG4gICAgICAgICAgYWRkcmVzczogYnBJbmZvW2ldLmdldEFkZHJlc3MoKSxcbiAgICAgICAgICB2b3RlczogYnBJbmZvW2ldLmdldFZvdGVzKCksXG4gICAgICAgICAgYWN0aXZlOiBicEluZm9baV0uZ2V0QWN0aXZlKCksXG4gICAgICAgICAgcHJvZHVjdGlvbjogYnBJbmZvW2ldLmdldFByb2R1Y3Rpb24oKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzLmJsb2NrUHJvZHVjZXJzSW5mbyA9IHBhcnNlZEJwaW5mbztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElScGNNZXRob2Qge1xuICBzZXRQcm92aWRlcihwcm92aWRlcjogc3RyaW5nIHwgSVJwY01ldGhvZCk6IHZvaWQ7XG5cbiAgZ2V0QWNjb3VudChyZXE6IElHZXRBY2NvdW50UmVxdWVzdCk6IFByb21pc2U8SUdldEFjY291bnRSZXNwb25zZT47XG5cbiAgZ2V0QmxvY2tNZXRhcyhyZXE6IElHZXRCbG9ja01ldGFzUmVxdWVzdCk6IFByb21pc2U8SUdldEJsb2NrTWV0YXNSZXNwb25zZT47XG5cbiAgZ2V0Q2hhaW5NZXRhKHJlcTogSUdldENoYWluTWV0YVJlcXVlc3QpOiBQcm9taXNlPElHZXRDaGFpbk1ldGFSZXNwb25zZT47XG5cbiAgZ2V0U2VydmVyTWV0YShyZXE6IElHZXRTZXJ2ZXJNZXRhUmVxdWVzdCk6IFByb21pc2U8SUdldFNlcnZlck1ldGFSZXNwb25zZT47XG5cbiAgZ2V0QWN0aW9ucyhyZXE6IElHZXRBY3Rpb25zUmVxdWVzdCk6IFByb21pc2U8SUdldEFjdGlvbnNSZXNwb25zZT47XG5cbiAgc3VnZ2VzdEdhc1ByaWNlKFxuICAgIHJlcTogSVN1Z2dlc3RHYXNQcmljZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxJU3VnZ2VzdEdhc1ByaWNlUmVzcG9uc2U+O1xuXG4gIGdldFJlY2VpcHRCeUFjdGlvbihcbiAgICByZXE6IElHZXRSZWNlaXB0QnlBY3Rpb25SZXF1ZXN0XG4gICk6IFByb21pc2U8SUdldFJlY2VpcHRCeUFjdGlvblJlc3BvbnNlPjtcblxuICByZWFkQ29udHJhY3QocmVxOiBJUmVhZENvbnRyYWN0UmVxdWVzdCk6IFByb21pc2U8SVJlYWRDb250cmFjdFJlc3BvbnNlPjtcblxuICBzZW5kQWN0aW9uKHJlcTogSVNlbmRBY3Rpb25SZXF1ZXN0KTogUHJvbWlzZTxJU2VuZEFjdGlvblJlc3BvbnNlPjtcbiAgcmVhZFN0YXRlKHJlcTogSVJlYWRTdGF0ZVJlcXVlc3QpOiBQcm9taXNlPElSZWFkU3RhdGVSZXNwb25zZT47XG4gIGVzdGltYXRlR2FzRm9yQWN0aW9uKFxuICAgIHJlcTogSUVzdGltYXRlR2FzRm9yQWN0aW9uUmVxdWVzdFxuICApOiBQcm9taXNlPElFc3RpbWF0ZUdhc0ZvckFjdGlvblJlc3BvbnNlPjtcblxuICBnZXRFcG9jaE1ldGEocmVxOiBJR2V0RXBvY2hNZXRhUmVxdWVzdCk6IFByb21pc2U8SUdldEVwb2NoTWV0YVJlc3BvbnNlPjtcbn1cbiJdfQ==
