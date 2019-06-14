"use strict";
/* tslint:disable:no-any */
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const timestamp_pb_1 = require("google-protobuf/google/protobuf/timestamp_pb");
const api_pb_1 = __importDefault(require("../../protogen/proto/api/api_pb"));
const action_pb_1 = __importDefault(
  require("../../protogen/proto/types/action_pb")
);
exports.GetAccountRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.GetAccountRequest();
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
};
exports.GetChainMetaRequest = {
  // @ts-ignore
  to(req) {
    return new api_pb_1.default.GetChainMetaRequest();
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
};
// @ts-ignore
exports.GetServerMetaRequest = {
  // @ts-ignore
  to(req) {
    return new api_pb_1.default.GetServerMetaRequest();
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
};
exports.GetBlockMetasRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.GetBlockMetasRequest();
    if (req.byIndex) {
      const pbReqByIndex = new api_pb_1.default.GetBlockMetasByIndexRequest();
      if (req.byIndex.start) {
        pbReqByIndex.setStart(req.byIndex.start);
      }
      if (req.byIndex.count) {
        pbReqByIndex.setCount(req.byIndex.count);
      }
      pbReq.setByindex(pbReqByIndex);
    } else if (req.byHash) {
      const pbReqByHash = new api_pb_1.default.GetBlockMetaByHashRequest();
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
};
function toActionTransfer(req) {
  if (!req) {
    return undefined;
  }
  const pbTransfer = new action_pb_1.default.Transfer();
  pbTransfer.setAmount(req.amount);
  pbTransfer.setRecipient(req.recipient);
  pbTransfer.setPayload(req.payload);
  return pbTransfer;
}
exports.toActionTransfer = toActionTransfer;
function toTimestamp(timestamp) {
  const ts = new timestamp_pb_1.Timestamp();
  if (timestamp) {
    ts.setSeconds(timestamp.seconds);
    ts.setNanos(timestamp.nanos);
  }
  return ts;
}
exports.toTimestamp = toTimestamp;
function toActionExecution(req) {
  if (!req) {
    return undefined;
  }
  const pbExecution = new action_pb_1.default.Execution();
  pbExecution.setAmount(req.amount);
  pbExecution.setContract(req.contract);
  pbExecution.setData(req.data);
  return pbExecution;
}
exports.toActionExecution = toActionExecution;
function toActionStartSubChain(req) {
  if (!req) {
    return undefined;
  }
  const pbStartSubChain = new action_pb_1.default.StartSubChain();
  pbStartSubChain.setChainid(req.chainID);
  pbStartSubChain.setSecuritydeposit(req.securityDeposit);
  pbStartSubChain.setOperationdeposit(req.operationDeposit);
  pbStartSubChain.setStartheight(req.startHeight);
  pbStartSubChain.setParentheightoffset(req.parentHeightOffset);
  return pbStartSubChain;
}
exports.toActionStartSubChain = toActionStartSubChain;
function toActionStopSubChain(req) {
  if (!req) {
    return undefined;
  }
  const pbStopSubChain = new action_pb_1.default.StopSubChain();
  // @ts-ignore
  pbStopSubChain.setChainid(req.chainID);
  // @ts-ignore
  pbStopSubChain.setStopheight(req.stopHeight);
  // @ts-ignore
  pbStopSubChain.setSubchainaddress(req.subChainAddress);
  return pbStopSubChain;
}
exports.toActionStopSubChain = toActionStopSubChain;
function toActionPutBlock(req) {
  if (!req) {
    return undefined;
  }
  const roots = req.roots;
  const rootList = [];
  if (req.roots && roots) {
    for (let i = 0; i < req.roots.length; i++) {
      const rootItem = req.roots && req.roots[i];
      const mkroot = new action_pb_1.default.MerkleRoot();
      mkroot.setName(rootItem.name);
      mkroot.setValue(rootItem.value);
      rootList[i] = mkroot;
    }
  }
  const pbPutBlock = new action_pb_1.default.PutBlock();
  pbPutBlock.setSubchainaddress(req.subChainAddress);
  pbPutBlock.setHeight(req.height);
  pbPutBlock.setRootsList(rootList);
  return pbPutBlock;
}
exports.toActionPutBlock = toActionPutBlock;
function toActionCreateDeposit(req) {
  if (!req) {
    return undefined;
  }
  const pbCreateDeposit = new action_pb_1.default.CreateDeposit();
  pbCreateDeposit.setChainid(req.chainID);
  pbCreateDeposit.setAmount(req.amount);
  pbCreateDeposit.setRecipient(req.recipient);
  return pbCreateDeposit;
}
exports.toActionCreateDeposit = toActionCreateDeposit;
function toActionSettleDeposit(req) {
  if (!req) {
    return undefined;
  }
  const pbSettleDeposit = new action_pb_1.default.SettleDeposit();
  pbSettleDeposit.setAmount(req.amount);
  pbSettleDeposit.setRecipient(req.recipient);
  pbSettleDeposit.setIndex(req.index);
  return pbSettleDeposit;
}
exports.toActionSettleDeposit = toActionSettleDeposit;
function toActionCreatePlumChain(req) {
  if (!req) {
    return undefined;
  }
  return new action_pb_1.default.CreatePlumChain();
}
exports.toActionCreatePlumChain = toActionCreatePlumChain;
function toActionTerminatePlumChain(req) {
  if (!req) {
    return undefined;
  }
  const pbTerminatePlumChain = new action_pb_1.default.TerminatePlumChain();
  pbTerminatePlumChain.setSubchainaddress(req.subChainAddress);
  return pbTerminatePlumChain;
}
exports.toActionTerminatePlumChain = toActionTerminatePlumChain;
function toActionPlumPutBlock(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumPutBlock = new action_pb_1.default.PlumPutBlock();
  pbPlumPutBlock.setSubchainaddress(req.subChainAddress);
  pbPlumPutBlock.setHeight(req.height);
  return pbPlumPutBlock;
}
exports.toActionPlumPutBlock = toActionPlumPutBlock;
function toActionPlumCreateDeposit(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumCreateDeposit = new action_pb_1.default.PlumCreateDeposit();
  // @ts-ignore
  pbPlumCreateDeposit.setSubchainaddress(req.subChainAddress);
  // @ts-ignore
  pbPlumCreateDeposit.setAmount(req.amount);
  // @ts-ignore
  pbPlumCreateDeposit.setRecipient(req.recipient);
  return pbPlumCreateDeposit;
}
exports.toActionPlumCreateDeposit = toActionPlumCreateDeposit;
function toActionPlumStartExit(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumStartExit = new action_pb_1.default.PlumStartExit();
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
exports.toActionPlumStartExit = toActionPlumStartExit;
function toActionPlumChallengeExit(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumChallengeExit = new action_pb_1.default.PlumChallengeExit();
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
exports.toActionPlumChallengeExit = toActionPlumChallengeExit;
function toActionPlumResponseChallengeExit(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumResponseChallengeExit = new action_pb_1.default.PlumResponseChallengeExit();
  pbPlumResponseChallengeExit.setSubchainaddress(req.subChainAddress);
  pbPlumResponseChallengeExit.setCoinid(req.coinID);
  pbPlumResponseChallengeExit.setChallengetransfer(req.challengeTransfer);
  pbPlumResponseChallengeExit.setResponsetransfer(req.responseTransfer);
  pbPlumResponseChallengeExit.setResponsetransferblockproof(
    req.responseTransferBlockProof
  );
  return pbPlumResponseChallengeExit;
}
exports.toActionPlumResponseChallengeExit = toActionPlumResponseChallengeExit;
function toActionPlumFinalizeExit(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumFinalizeExit = new action_pb_1.default.PlumFinalizeExit();
  pbPlumFinalizeExit.setSubchainaddress(req.subChainAddress);
  pbPlumFinalizeExit.setCoinid(req.coinID);
  return pbPlumFinalizeExit;
}
exports.toActionPlumFinalizeExit = toActionPlumFinalizeExit;
function toActionPlumSettleDeposit(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumSettleDeposit = new action_pb_1.default.PlumSettleDeposit();
  pbPlumSettleDeposit.setCoinid(req.coinID);
  return pbPlumSettleDeposit;
}
exports.toActionPlumSettleDeposit = toActionPlumSettleDeposit;
function toActionPlumTransfer(req) {
  if (!req) {
    return undefined;
  }
  const pbPlumTransfer = new action_pb_1.default.PlumTransfer();
  pbPlumTransfer.setCoinid(req.coinID);
  pbPlumTransfer.setDenomination(req.denomination);
  pbPlumTransfer.setOwner(req.owner);
  pbPlumTransfer.setRecipient(req.recipient);
  return pbPlumTransfer;
}
exports.toActionPlumTransfer = toActionPlumTransfer;
function toActionDepositToRewardingFund(req) {
  if (!req) {
    return undefined;
  }
  const pbDepositToRewardingFund = new action_pb_1.default.DepositToRewardingFund();
  pbDepositToRewardingFund.setAmount(req.amount);
  pbDepositToRewardingFund.setData(req.data);
  return pbDepositToRewardingFund;
}
exports.toActionDepositToRewardingFund = toActionDepositToRewardingFund;
function toActionClaimFromRewardingFund(req) {
  if (!req) {
    return undefined;
  }
  const pbClaimFromRewardingFund = new action_pb_1.default.ClaimFromRewardingFund();
  // @ts-ignore
  pbClaimFromRewardingFund.setAmount(req.amount);
  // @ts-ignore
  pbClaimFromRewardingFund.setData(req.data);
  return pbClaimFromRewardingFund;
}
exports.toActionClaimFromRewardingFund = toActionClaimFromRewardingFund;
function toActionGrantReward(req) {
  if (!req) {
    return undefined;
  }
  const pbGrantReward = new action_pb_1.default.GrantReward();
  pbGrantReward.setType(req.type);
  return pbGrantReward;
}
exports.toActionGrantReward = toActionGrantReward;
function toAction(req) {
  const pbActionCore = new action_pb_1.default.ActionCore();
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
  const pbAction = new action_pb_1.default.Action();
  pbAction.setCore(pbActionCore);
  if (req.senderPubKey) {
    pbAction.setSenderpubkey(req.senderPubKey);
  }
  if (req.signature) {
    pbAction.setSignature(req.signature);
  }
  return pbAction;
}
exports.toAction = toAction;
exports.GetActionsRequest = {
  byAddrTo(byAddr) {
    const pbReqByAddr = new api_pb_1.default.GetActionsByAddressRequest();
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
    const pbReqByBlk = new api_pb_1.default.GetActionsByBlockRequest();
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
    const pbReqByHash = new api_pb_1.default.GetActionByHashRequest();
    if (byHash.actionHash) {
      pbReqByHash.setActionhash(byHash.actionHash);
    }
    if (byHash.checkingPending) {
      pbReqByHash.setCheckpending(byHash.checkingPending);
    }
    return pbReqByHash;
  },
  byIndexTo(byIndex) {
    const pbReqByIndex = new api_pb_1.default.GetActionsByIndexRequest();
    if (byIndex.start) {
      pbReqByIndex.setStart(byIndex.start);
    }
    if (byIndex.count) {
      pbReqByIndex.setCount(byIndex.count);
    }
    return pbReqByIndex;
  },
  unconfirmedByAddrTo(unconfirmedByAddr) {
    const pbReqUnconfirmedByAddr = new api_pb_1.default.GetUnconfirmedActionsByAddressRequest();
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
    const pbReq = new api_pb_1.default.GetActionsRequest();
    if (req.byAddr) {
      pbReq.setByaddr(exports.GetActionsRequest.byAddrTo(req.byAddr));
    }
    if (req.byBlk) {
      pbReq.setByblk(exports.GetActionsRequest.byBlkTo(req.byBlk));
    }
    if (req.byHash) {
      pbReq.setByhash(exports.GetActionsRequest.byHashTo(req.byHash));
    }
    if (req.byIndex) {
      pbReq.setByindex(exports.GetActionsRequest.byIndexTo(req.byIndex));
    }
    if (req.unconfirmedByAddr) {
      pbReq.setUnconfirmedbyaddr(
        exports.GetActionsRequest.unconfirmedByAddrTo(req.unconfirmedByAddr)
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
    let executionData = pbRes;
    if (executionData) {
      executionData = {
        amount: pbRes.getAmount(),
        contract: pbRes.getContract(),
        data: pbRes.getData()
      };
    }
    return executionData;
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
            transfer: exports.GetActionsRequest.fromTransfer(
              rawActionCore.getTransfer()
            ),
            execution: exports.GetActionsRequest.fromExecution(
              rawActionCore.getExecution()
            ),
            startSubChain: exports.GetActionsRequest.fromStartSubChain(
              rawActionCore.getStartsubchain()
            ),
            stopSubChain: exports.GetActionsRequest.fromStopSubChain(
              rawActionCore.getStopsubchain()
            ),
            putBlock: exports.GetActionsRequest.fromPutBlock(
              rawActionCore.getPutblock()
            ),
            createDeposit: exports.GetActionsRequest.fromCreateDeposit(
              rawActionCore.getCreatedeposit()
            ),
            settleDeposit: exports.GetActionsRequest.fromSettleDeposit(
              rawActionCore.getSettledeposit()
            ),
            createPlumChain: exports.GetActionsRequest.fromCreatePlumChain(
              rawActionCore.getCreateplumchain()
            ),
            terminatePlumChain: exports.GetActionsRequest.fromTerminatePlumChain(
              rawActionCore.getTerminateplumchain()
            ),
            plumPutBlock: exports.GetActionsRequest.fromPlumPutBlock(
              rawActionCore.getPlumputblock()
            ),
            plumCreateDeposit: exports.GetActionsRequest.fromPlumCreateDeposit(
              rawActionCore.getPlumcreatedeposit()
            ),
            plumStartExit: exports.GetActionsRequest.fromPlumStartExit(
              rawActionCore.getPlumstartexit()
            ),
            plumChallengeExit: exports.GetActionsRequest.fromPlumChallengeExit(
              rawActionCore.getPlumchallengeexit()
            ),
            plumResponseChallengeExit: exports.GetActionsRequest.fromPlumResponseChallengeExit(
              rawActionCore.getPlumresponsechallengeexit()
            ),
            plumFinalizeExit: exports.GetActionsRequest.fromPlumFinalizeExit(
              rawActionCore.getPlumfinalizeexit()
            ),
            plumSettleDeposit: exports.GetActionsRequest.fromPlumSettleDeposit(
              rawActionCore.getPlumsettledeposit()
            ),
            plumTransfer: exports.GetActionsRequest.fromPlumTransfer(
              rawActionCore.getPlumtransfer()
            ),
            depositToRewardingFund: exports.GetActionsRequest.fromDepositToRewardingFund(
              rawActionCore.getDeposittorewardingfund()
            ),
            claimFromRewardingFund: exports.GetActionsRequest.fromClaimFromRewardingFund(
              rawActionCore.getClaimfromrewardingfund()
            ),
            grantReward: exports.GetActionsRequest.fromGrantReward(
              rawActionCore.getGrantreward()
            ),
            putPollResult: exports.GetActionsRequest.getPutPollResult(
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
};
exports.SuggestGasPriceRequest = {
  // @ts-ignore
  to(req) {
    return new api_pb_1.default.SuggestGasPriceRequest();
  },
  from(pbRes) {
    const gasPrice = pbRes.getGasprice();
    return {
      gasPrice
    };
  }
};
function fromPbReceiptInfo(pbReceiptInfo) {
  if (!pbReceiptInfo) {
    return undefined;
  }
  return {
    receipt: fromPbReceipt(pbReceiptInfo.getReceipt()),
    blkHash: pbReceiptInfo.getBlkhash()
  };
}
exports.GetReceiptByActionRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.GetReceiptByActionRequest();
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
}
exports.ReadContractRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.ReadContractRequest();
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
};
exports.SendActionRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.SendActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  }
};
exports.SendActionResponse = {
  from(resp) {
    return {
      actionHash: resp.getActionhash()
    };
  }
};
exports.EstimateGasForActionRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.EstimateGasForActionRequest();
    if (req.action) {
      pbReq.setAction(toAction(req.action));
    }
    return pbReq;
  },
  from(pbRes) {
    return { gas: pbRes.getGas() };
  }
};
exports.ReadStateRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.ReadStateRequest();
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
};
exports.GetEpochMetaRequest = {
  to(req) {
    const pbReq = new api_pb_1.default.GetEpochMetaRequest();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnBjLW1ldGhvZC90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkJBQTJCOzs7OztBQUUzQiwrRUFBeUU7QUFDekUsNkVBTXlDO0FBQ3pDLHFGQUErRTtBQTBDbEUsUUFBQSxpQkFBaUIsR0FBRztJQUMvQixFQUFFLENBQUMsR0FBdUI7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQXlCO1FBQzVCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztnQkFDTCxXQUFXLEVBQUUsU0FBUzthQUN2QixDQUFDO1NBQ0g7UUFFRCxPQUFPO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTthQUNqQztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQztBQXNCVyxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLGFBQWE7SUFDYixFQUFFLENBQUMsR0FBeUI7UUFDMUIsT0FBTyxJQUFJLGdCQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVU7UUFDYixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUc7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDO1FBQ0YsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxTQUFTLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hCLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsS0FBSyxFQUFFLFNBQVM7YUFDakIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQztBQWdCRixhQUFhO0FBQ0EsUUFBQSxvQkFBb0IsR0FBRztJQUNsQyxhQUFhO0lBQ2IsRUFBRSxDQUFDLEdBQTBCO1FBQzNCLE9BQU8sSUFBSSxnQkFBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksQ0FBQyxLQUE0QjtRQUMvQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87Z0JBQ0wsVUFBVSxFQUFFLFNBQVM7YUFDdEIsQ0FBQztTQUNIO1FBRUQsT0FBTztZQUNMLFVBQVUsRUFBRTtnQkFDVixjQUFjLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN4QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzlCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQy9CO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDO0FBK0RXLFFBQUEsb0JBQW9CLEdBQUc7SUFDbEMsRUFBRSxDQUFDLEdBQTBCO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQy9DLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNmLE1BQU0sWUFBWSxHQUFHLElBQUksZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQzdELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztZQUNELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztZQUNELEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckIsTUFBTSxXQUFXLEdBQUcsSUFBSSxnQkFBSyxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDMUQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBVTtRQUNiLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QyxNQUFNLEdBQUcsR0FBRztZQUNWLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7UUFDRixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUNmLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtvQkFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7b0JBQ2xDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFO29CQUNwQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFO29CQUM5QyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO29CQUM1QyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtvQkFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7b0JBQ3RDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRTtpQkFDakQsQ0FBQzthQUNIO1lBQ0QsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7U0FDNUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDO0FBd2JGLFNBQWdCLGdCQUFnQixDQUFDLEdBQTBCO0lBQ3pELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sVUFBVSxHQUFHLElBQUksbUJBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBVEQsNENBU0M7QUFFRCxTQUFnQixXQUFXLENBQUMsU0FBcUI7SUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7SUFDM0IsSUFBSSxTQUFTLEVBQUU7UUFDYixFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM5QjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQVBELGtDQU9DO0FBRUQsU0FBZ0IsaUJBQWlCLENBQy9CLEdBQTJCO0lBRTNCLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sV0FBVyxHQUFHLElBQUksbUJBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBWEQsOENBV0M7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxHQUErQjtJQUNuRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLG1CQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckQsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4RCxlQUFlLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlELE9BQU8sZUFBZSxDQUFDO0FBQ3pCLENBQUM7QUFaRCxzREFZQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLEdBQThCO0lBQ2pFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sY0FBYyxHQUFHLElBQUksbUJBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuRCxhQUFhO0lBQ2IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsYUFBYTtJQUNiLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLGFBQWE7SUFDYixjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFaRCxvREFZQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLEdBQTBCO0lBQ3pELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDeEIsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBcEJELDRDQW9CQztBQUVELFNBQWdCLHFCQUFxQixDQUFDLEdBQStCO0lBQ25FLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sZUFBZSxHQUFHLElBQUksbUJBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyRCxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBVEQsc0RBU0M7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxHQUErQjtJQUNuRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxNQUFNLGVBQWUsR0FBRyxJQUFJLG1CQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQVRELHNEQVNDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQ3JDLEdBQWlDO0lBRWpDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxtQkFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3hDLENBQUM7QUFQRCwwREFPQztBQUVELFNBQWdCLDBCQUEwQixDQUN4QyxHQUFvQztJQUVwQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxNQUFNLG9CQUFvQixHQUFHLElBQUksbUJBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9ELG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3RCxPQUFPLG9CQUFvQixDQUFDO0FBQzlCLENBQUM7QUFURCxnRUFTQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLEdBQThCO0lBQ2pFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sY0FBYyxHQUFHLElBQUksbUJBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuRCxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZELGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFSRCxvREFRQztBQUVELFNBQWdCLHlCQUF5QixDQUN2QyxHQUFtQztJQUVuQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLG1CQUFtQixHQUFHLElBQUksbUJBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdELGFBQWE7SUFDYixtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsYUFBYTtJQUNiLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsYUFBYTtJQUNiLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsT0FBTyxtQkFBbUIsQ0FBQztBQUM3QixDQUFDO0FBZkQsOERBZUM7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxHQUErQjtJQUNuRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLG1CQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckQsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4RCxlQUFlLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsZUFBZSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzlFLGVBQWUsQ0FBQyw4QkFBOEIsQ0FDNUMsR0FBRyxDQUFDLDJCQUEyQixDQUNoQyxDQUFDO0lBQ0YsZUFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsZUFBZSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RFLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN4RSxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBaEJELHNEQWdCQztBQUVELFNBQWdCLHlCQUF5QixDQUN2QyxHQUFtQztJQUVuQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLG1CQUFtQixHQUFHLElBQUksbUJBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hFLG1CQUFtQixDQUFDLDhCQUE4QixDQUNoRCxHQUFHLENBQUMsMkJBQTJCLENBQ2hDLENBQUM7SUFDRixtQkFBbUIsQ0FBQywrQkFBK0IsQ0FDakQsR0FBRyxDQUFDLDRCQUE0QixDQUNqQyxDQUFDO0lBQ0YsT0FBTyxtQkFBbUIsQ0FBQztBQUM3QixDQUFDO0FBbEJELDhEQWtCQztBQUVELFNBQWdCLGlDQUFpQyxDQUMvQyxHQUEyQztJQUUzQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxNQUFNLDJCQUEyQixHQUFHLElBQUksbUJBQVEsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQzdFLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRSwyQkFBMkIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELDJCQUEyQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hFLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLDJCQUEyQixDQUFDLDZCQUE2QixDQUN2RCxHQUFHLENBQUMsMEJBQTBCLENBQy9CLENBQUM7SUFDRixPQUFPLDJCQUEyQixDQUFDO0FBQ3JDLENBQUM7QUFoQkQsOEVBZ0JDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQ3RDLEdBQWtDO0lBRWxDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxtQkFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0Qsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBVkQsNERBVUM7QUFFRCxTQUFnQix5QkFBeUIsQ0FDdkMsR0FBbUM7SUFFbkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLG1CQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3RCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE9BQU8sbUJBQW1CLENBQUM7QUFDN0IsQ0FBQztBQVRELDhEQVNDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsR0FBOEI7SUFDakUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFWRCxvREFVQztBQUVELFNBQWdCLDhCQUE4QixDQUM1QyxHQUF3QztJQUV4QyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxNQUFNLHdCQUF3QixHQUFHLElBQUksbUJBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3ZFLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0Msd0JBQXdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxPQUFPLHdCQUF3QixDQUFDO0FBQ2xDLENBQUM7QUFWRCx3RUFVQztBQUVELFNBQWdCLDhCQUE4QixDQUM1QyxHQUF3QztJQUV4QyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxNQUFNLHdCQUF3QixHQUFHLElBQUksbUJBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3ZFLGFBQWE7SUFDYix3QkFBd0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLGFBQWE7SUFDYix3QkFBd0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLE9BQU8sd0JBQXdCLENBQUM7QUFDbEMsQ0FBQztBQVpELHdFQVlDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsR0FBNkI7SUFDL0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pELGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFQRCxrREFPQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFZO0lBQ25DLE1BQU0sWUFBWSxHQUFHLElBQUksbUJBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUUvQyxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFJLElBQUksRUFBRTtRQUNSLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUQsWUFBWSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3RCxZQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDekUsWUFBWSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0RSxZQUFZLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN6RSxZQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDekUsWUFBWSxDQUFDLGtCQUFrQixDQUM3Qix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQzlDLENBQUM7UUFDRixZQUFZLENBQUMscUJBQXFCLENBQ2hDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUNwRCxDQUFDO1FBQ0YsWUFBWSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0RSxZQUFZLENBQUMsb0JBQW9CLENBQy9CLHlCQUF5QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsWUFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxvQkFBb0IsQ0FDL0IseUJBQXlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ2xELENBQUM7UUFDRixZQUFZLENBQUMsNEJBQTRCLENBQ3ZDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUNsRSxDQUFDO1FBQ0YsWUFBWSxDQUFDLG1CQUFtQixDQUM5Qix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FDaEQsQ0FBQztRQUNGLFlBQVksQ0FBQyxvQkFBb0IsQ0FDL0IseUJBQXlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ2xELENBQUM7UUFDRixZQUFZLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLFlBQVksQ0FBQyx5QkFBeUIsQ0FDcEMsOEJBQThCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQzVELENBQUM7UUFDRixZQUFZLENBQUMseUJBQXlCLENBQ3BDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUM1RCxDQUFDO1FBQ0YsWUFBWSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUVELE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRS9CLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRTtRQUNwQixRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM1QztJQUVELElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNqQixRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN0QztJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUE3REQsNEJBNkRDO0FBYVksUUFBQSxpQkFBaUIsR0FBRztJQUMvQixRQUFRLENBQUMsTUFBbUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxnQkFBSyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDM0QsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFnQztRQUN0QyxNQUFNLFVBQVUsR0FBRyxJQUFJLGdCQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUN4RCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDakIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDZixVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNmLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFnQztRQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLGdCQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDckIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDMUIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQWtDO1FBQzFDLE1BQU0sWUFBWSxHQUFHLElBQUksZ0JBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzFELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQkFBbUIsQ0FDakIsaUJBQXlEO1FBRXpELE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxnQkFBSyxDQUFDLHFDQUFxQyxFQUFFLENBQUM7UUFDakYsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDM0Isc0JBQXNCLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDM0Isc0JBQXNCLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDN0Isc0JBQXNCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsRUFBRSxDQUFDLEdBQXVCO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLEtBQUssQ0FBQyxTQUFTLENBQUMseUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ2IsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZCxLQUFLLENBQUMsU0FBUyxDQUFDLHlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNmLEtBQUssQ0FBQyxVQUFVLENBQUMseUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUU7WUFDekIsS0FBSyxDQUFDLG9CQUFvQixDQUN4Qix5QkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FDN0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksS0FBSyxFQUFFO1lBQ1QsWUFBWSxHQUFHO2dCQUNiLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFO2dCQUN6QixTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUU7YUFDNUIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsR0FBRztnQkFDVCxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsWUFBWSxFQUFFLEtBQUssQ0FBQyxlQUFlLEVBQUU7YUFDdEMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLGFBQWEsRUFBRTtZQUNqQixhQUFhLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pCLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUM3QixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTthQUN0QixDQUFDO1NBQ0g7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixHQUFHO2dCQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtnQkFDdEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtnQkFDeEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO2FBQzdDLENBQUM7U0FDSDtRQUNELE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsR0FBRztnQkFDakIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTthQUN2QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLFNBQVMsRUFBRTtnQkFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRzt3QkFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3dCQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO3FCQUM1QixDQUFDO2lCQUNIO2FBQ0Y7WUFDRCxZQUFZLEdBQUc7Z0JBQ2IsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO2dCQUN0QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLEtBQUssRUFBRSxTQUFTO2FBQ2pCLENBQUM7U0FDSDtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsaUJBQWlCLEdBQUc7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7YUFDM0IsQ0FBQztTQUNIO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixHQUFHO2dCQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2FBQ25CLENBQUM7U0FDSDtRQUNELE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxtQkFBbUIsRUFBRTtZQUN2QixtQkFBbUIsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFVO1FBQy9CLElBQUksc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksc0JBQXNCLEVBQUU7WUFDMUIsc0JBQXNCLEdBQUc7Z0JBQ3ZCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTthQUN2QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLHNCQUFzQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsZ0JBQWdCLEdBQUc7Z0JBQ2pCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtnQkFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDbkIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQscUJBQXFCLENBQUMsS0FBVTtRQUM5QixJQUFJLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLHFCQUFxQixFQUFFO1lBQ3pCLHFCQUFxQixHQUFHO2dCQUN0QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7Z0JBQ3RDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2FBQzNCLENBQUM7U0FDSDtRQUNELE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVU7UUFDMUIsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixpQkFBaUIsR0FBRztnQkFDbEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO2dCQUN0QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO2dCQUN4QywwQkFBMEIsRUFBRSxLQUFLLENBQUMsMEJBQTBCO2dCQUM1RCwyQkFBMkIsRUFBRSxLQUFLLENBQUMsMkJBQTJCO2dCQUM5RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7Z0JBQ2hDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7Z0JBQ3BELHVCQUF1QixFQUFFLEtBQUssQ0FBQyx1QkFBdUI7YUFDdkQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQscUJBQXFCLENBQUMsS0FBVTtRQUM5QixJQUFJLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLHFCQUFxQixFQUFFO1lBQ3pCLHFCQUFxQixHQUFHO2dCQUN0QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7Z0JBQ3RDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtnQkFDMUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLDJCQUEyQjtnQkFDOUQsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLDRCQUE0QjthQUNqRSxDQUFDO1NBQ0g7UUFDRCxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCw2QkFBNkIsQ0FBQyxLQUFVO1FBQ3RDLElBQUksNkJBQTZCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksNkJBQTZCLEVBQUU7WUFDakMsNkJBQTZCLEdBQUc7Z0JBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtnQkFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO2dCQUMxQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO2dCQUN4QywwQkFBMEIsRUFBRSxLQUFLLENBQUMsMEJBQTBCO2dCQUM1RCwyQkFBMkIsRUFBRSxLQUFLLENBQUMsMkJBQTJCO2FBQy9ELENBQUM7U0FDSDtRQUNELE9BQU8sNkJBQTZCLENBQUM7SUFDdkMsQ0FBQztJQUVELG9CQUFvQixDQUFDLEtBQVU7UUFDN0IsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixvQkFBb0IsR0FBRztnQkFDckIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO2dCQUN0QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQscUJBQXFCLENBQUMsS0FBVTtRQUM5QixJQUFJLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLHFCQUFxQixFQUFFO1lBQ3pCLHFCQUFxQixHQUFHO2dCQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBVTtRQUN6QixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLGdCQUFnQixHQUFHO2dCQUNqQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtnQkFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7YUFDM0IsQ0FBQztTQUNIO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsMEJBQTBCLENBQUMsS0FBVTtRQUNuQyxJQUFJLDBCQUEwQixHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLDBCQUEwQixFQUFFO1lBQzlCLDBCQUEwQixHQUFHO2dCQUMzQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTthQUNqQixDQUFDO1NBQ0g7UUFDRCxPQUFPLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxLQUFVO1FBQ25DLElBQUksMEJBQTBCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksMEJBQTBCLEVBQUU7WUFDOUIsMEJBQTBCLEdBQUc7Z0JBQzNCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2FBQ2pCLENBQUM7U0FDSDtRQUNELE9BQU8sMEJBQTBCLENBQUM7SUFDcEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLGFBQWEsRUFBRTtZQUNqQixhQUFhLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTthQUNqQixDQUFDO1NBQ0g7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsZUFBZSxDQUNiLEtBQXVDO1FBRXZDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRTtTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQThCO1FBQzdDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksYUFBeUMsQ0FBQztRQUM5QyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUMsSUFBSSxhQUFhLEVBQUU7WUFDakIsYUFBYSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxFQUFFO2FBQ2YsQ0FBQztZQUNGLE1BQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDNUQsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsS0FBSyxNQUFNLFlBQVksSUFBSSxpQkFBaUIsRUFBRTtvQkFDNUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFO3dCQUNsQyxLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRTt3QkFDOUIsTUFBTSxFQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLGFBQWEsRUFBRSxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7cUJBQy9DLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7UUFDRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRCxnREFBZ0Q7SUFDaEQsSUFBSSxDQUFDLEtBQXlCO1FBQzVCLE1BQU0sR0FBRyxHQUFJO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDZ0IsQ0FBQztRQUNqQyxNQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBRUQsS0FBSyxNQUFNLGFBQWEsSUFBSSxpQkFBaUIsRUFBRTtZQUM3QyxNQUFNLFVBQVUsR0FBSTtnQkFDbEIsT0FBTyxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ25DLE9BQU8sRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFO2dCQUNuQyxTQUFTLEVBQUUsYUFBYSxDQUFDLFlBQVksRUFBRTthQUNqQixDQUFDO1lBRXpCLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxJQUFJLFNBQVMsRUFBRTtnQkFDYixNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFDLElBQUksVUFBbUMsQ0FBQztnQkFDeEMsSUFBSSxhQUFhLEVBQUU7b0JBQ2pCLFVBQVUsR0FBRzt3QkFDWCxPQUFPLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRTt3QkFDbkMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUM3QyxRQUFRLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFBRTt3QkFDckMsUUFBUSxFQUFFLHlCQUFpQixDQUFDLFlBQVksQ0FDdEMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUM1Qjt3QkFDRCxTQUFTLEVBQUUseUJBQWlCLENBQUMsYUFBYSxDQUN4QyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQzdCO3dCQUNELGFBQWEsRUFBRSx5QkFBaUIsQ0FBQyxpQkFBaUIsQ0FDaEQsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQ2pDO3dCQUNELFlBQVksRUFBRSx5QkFBaUIsQ0FBQyxnQkFBZ0IsQ0FDOUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUNoQzt3QkFDRCxRQUFRLEVBQUUseUJBQWlCLENBQUMsWUFBWSxDQUN0QyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQzVCO3dCQUNELGFBQWEsRUFBRSx5QkFBaUIsQ0FBQyxpQkFBaUIsQ0FDaEQsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQ2pDO3dCQUNELGFBQWEsRUFBRSx5QkFBaUIsQ0FBQyxpQkFBaUIsQ0FDaEQsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQ2pDO3dCQUNELGVBQWUsRUFBRSx5QkFBaUIsQ0FBQyxtQkFBbUIsQ0FDcEQsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQ25DO3dCQUNELGtCQUFrQixFQUFFLHlCQUFpQixDQUFDLHNCQUFzQixDQUMxRCxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FDdEM7d0JBQ0QsWUFBWSxFQUFFLHlCQUFpQixDQUFDLGdCQUFnQixDQUM5QyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQ2hDO3dCQUNELGlCQUFpQixFQUFFLHlCQUFpQixDQUFDLHFCQUFxQixDQUN4RCxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FDckM7d0JBQ0QsYUFBYSxFQUFFLHlCQUFpQixDQUFDLGlCQUFpQixDQUNoRCxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FDakM7d0JBQ0QsaUJBQWlCLEVBQUUseUJBQWlCLENBQUMscUJBQXFCLENBQ3hELGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUNyQzt3QkFDRCx5QkFBeUIsRUFBRSx5QkFBaUIsQ0FBQyw2QkFBNkIsQ0FDeEUsYUFBYSxDQUFDLDRCQUE0QixFQUFFLENBQzdDO3dCQUNELGdCQUFnQixFQUFFLHlCQUFpQixDQUFDLG9CQUFvQixDQUN0RCxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FDcEM7d0JBQ0QsaUJBQWlCLEVBQUUseUJBQWlCLENBQUMscUJBQXFCLENBQ3hELGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUNyQzt3QkFDRCxZQUFZLEVBQUUseUJBQWlCLENBQUMsZ0JBQWdCLENBQzlDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FDaEM7d0JBQ0Qsc0JBQXNCLEVBQUUseUJBQWlCLENBQUMsMEJBQTBCLENBQ2xFLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxDQUMxQzt3QkFDRCxzQkFBc0IsRUFBRSx5QkFBaUIsQ0FBQywwQkFBMEIsQ0FDbEUsYUFBYSxDQUFDLHlCQUF5QixFQUFFLENBQzFDO3dCQUNELFdBQVcsRUFBRSx5QkFBaUIsQ0FBQyxlQUFlLENBQzVDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FDL0I7d0JBQ0QsYUFBYSxFQUFFLHlCQUFpQixDQUFDLGdCQUFnQixDQUMvQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FDakM7cUJBQ0YsQ0FBQztpQkFDSDtnQkFFRCxVQUFVLENBQUMsTUFBTSxHQUFHO29CQUNsQixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLFNBQVMsRUFBRSxTQUFTLENBQUMsWUFBWSxFQUFFO2lCQUNwQyxDQUFDO2FBQ0g7WUFFRCxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUM7QUFXVyxRQUFBLHNCQUFzQixHQUFHO0lBQ3BDLGFBQWE7SUFDYixFQUFFLENBQUMsR0FBNEI7UUFDN0IsT0FBTyxJQUFJLGdCQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVU7UUFDYixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsT0FBTztZQUNMLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFpRUYsU0FBUyxpQkFBaUIsQ0FDeEIsYUFBNEM7SUFFNUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNsQixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRCxPQUFPLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRTtLQUNwQyxDQUFDO0FBQ0osQ0FBQztBQUVZLFFBQUEseUJBQXlCLEdBQUc7SUFDdkMsRUFBRSxDQUFDLEdBQStCO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ3BELElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUNsQixLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFpQztRQUNwQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFFRixTQUFTLGFBQWEsQ0FDcEIsU0FBdUM7SUFFdkMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFO1FBQzdCLFNBQVMsRUFBRSxTQUFTLENBQUMsWUFBWSxFQUFFO1FBQ25DLE9BQU8sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFO1FBQy9CLFdBQVcsRUFBRSxTQUFTLENBQUMsY0FBYyxFQUFFO1FBQ3ZDLGVBQWUsRUFBRSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7UUFDL0MsSUFBSSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDN0MsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FDcEIsU0FBMEM7SUFFMUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxHQUFHLEdBQUcsRUFBaUIsQ0FBQztJQUM5QixLQUFLLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRTtRQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1AsZUFBZSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QyxNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsRUFBRTtZQUMzQixJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNuQixTQUFTLEVBQUUsR0FBRyxDQUFDLFlBQVksRUFBRTtZQUM3QixPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUN6QixLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtTQUN0QixDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQWNZLFFBQUEsbUJBQW1CLEdBQUc7SUFDakMsRUFBRSxDQUFDLEdBQXlCO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzlDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBaUM7UUFDcEMsT0FBTztZQUNMLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzNDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQztBQWFXLFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsRUFBRSxDQUFDLEdBQXVCO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQztBQUVXLFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsSUFBSSxDQUFDLElBQThCO1FBQ2pDLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtTQUNqQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFZVyxRQUFBLDJCQUEyQixHQUFHO0lBQ3pDLEVBQUUsQ0FBQyxHQUFpQztRQUNsQyxNQUFNLEtBQUssR0FBRyxJQUFJLGdCQUFLLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUN0RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZCxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksQ0FBQyxLQUFVO1FBQ2IsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0YsQ0FBQztBQVlXLFFBQUEsZ0JBQWdCLEdBQUc7SUFDOUIsRUFBRSxDQUFDLEdBQXNCO1FBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQXdCO1FBQzNCLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFrQ1csUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxFQUFFLENBQUMsR0FBeUI7UUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUMsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ25CLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQVU7UUFDYixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakQsTUFBTSxHQUFHLEdBQUc7WUFDVixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFO2dCQUN6Qix1QkFBdUIsRUFBRSxLQUFLLENBQUMsMEJBQTBCLEVBQUU7YUFDNUQ7WUFDRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNuQyxrQkFBa0IsRUFBRSxNQUFNO1NBQzNCLENBQUM7UUFDRixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUNoQixPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQzNCLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUM3QixVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtpQkFDdEMsQ0FBQzthQUNIO1lBQ0QsR0FBRyxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQztTQUN2QztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMifQ==
