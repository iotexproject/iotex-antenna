// source: proto/api/api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_types_action_pb = require('../../proto/types/action_pb.js');
goog.object.extend(proto, proto_types_action_pb);
var proto_types_blockchain_pb = require('../../proto/types/blockchain_pb.js');
goog.object.extend(proto, proto_types_blockchain_pb);
var proto_types_node_pb = require('../../proto/types/node_pb.js');
goog.object.extend(proto, proto_types_node_pb);
var proto_types_election_pb = require('../../proto/types/election_pb.js');
goog.object.extend(proto, proto_types_election_pb);
var proto_types_transaction_log_pb = require('../../proto/types/transaction_log_pb.js');
goog.object.extend(proto, proto_types_transaction_log_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.iotexapi.ActionInfo', null, global);
goog.exportSymbol('proto.iotexapi.BlockInfo', null, global);
goog.exportSymbol('proto.iotexapi.BlockProducerInfo', null, global);
goog.exportSymbol('proto.iotexapi.Bucket', null, global);
goog.exportSymbol('proto.iotexapi.EstimateActionGasConsumptionRequest', null, global);
goog.exportSymbol('proto.iotexapi.EstimateActionGasConsumptionRequest.ActionCase', null, global);
goog.exportSymbol('proto.iotexapi.EstimateActionGasConsumptionResponse', null, global);
goog.exportSymbol('proto.iotexapi.EstimateGasForActionRequest', null, global);
goog.exportSymbol('proto.iotexapi.EstimateGasForActionResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetAccountRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetAccountResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetActPoolActionsRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetActPoolActionsResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetActionByHashRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetActionsByAddressRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetActionsByBlockRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetActionsByIndexRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetActionsRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetActionsRequest.LookupCase', null, global);
goog.exportSymbol('proto.iotexapi.GetActionsResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetBlockMetaByHashRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetBlockMetasByIndexRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetBlockMetasRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetBlockMetasRequest.LookupCase', null, global);
goog.exportSymbol('proto.iotexapi.GetBlockMetasResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetChainMetaRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetChainMetaResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetElectionBucketsRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetElectionBucketsResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetEpochMetaRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetEpochMetaResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetEvmTransfersByActionHashRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetEvmTransfersByActionHashResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetEvmTransfersByBlockHeightRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetEvmTransfersByBlockHeightResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetLogsByBlock', null, global);
goog.exportSymbol('proto.iotexapi.GetLogsByRange', null, global);
goog.exportSymbol('proto.iotexapi.GetLogsRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetLogsRequest.LookupCase', null, global);
goog.exportSymbol('proto.iotexapi.GetLogsResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetRawBlocksRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetRawBlocksResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetReceiptByActionRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetReceiptByActionResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetServerMetaRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetServerMetaResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetTransactionLogByActionHashRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetTransactionLogByActionHashResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetTransactionLogByBlockHeightRequest', null, global);
goog.exportSymbol('proto.iotexapi.GetTransactionLogByBlockHeightResponse', null, global);
goog.exportSymbol('proto.iotexapi.GetUnconfirmedActionsByAddressRequest', null, global);
goog.exportSymbol('proto.iotexapi.LogsFilter', null, global);
goog.exportSymbol('proto.iotexapi.ReadContractRequest', null, global);
goog.exportSymbol('proto.iotexapi.ReadContractResponse', null, global);
goog.exportSymbol('proto.iotexapi.ReadStateRequest', null, global);
goog.exportSymbol('proto.iotexapi.ReadStateResponse', null, global);
goog.exportSymbol('proto.iotexapi.ReceiptInfo', null, global);
goog.exportSymbol('proto.iotexapi.SendActionRequest', null, global);
goog.exportSymbol('proto.iotexapi.SendActionResponse', null, global);
goog.exportSymbol('proto.iotexapi.SendSignedActionBytesRequest', null, global);
goog.exportSymbol('proto.iotexapi.StreamBlocksRequest', null, global);
goog.exportSymbol('proto.iotexapi.StreamBlocksResponse', null, global);
goog.exportSymbol('proto.iotexapi.StreamLogsRequest', null, global);
goog.exportSymbol('proto.iotexapi.StreamLogsResponse', null, global);
goog.exportSymbol('proto.iotexapi.SuggestGasPriceRequest', null, global);
goog.exportSymbol('proto.iotexapi.SuggestGasPriceResponse', null, global);
goog.exportSymbol('proto.iotexapi.Topics', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.Bucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.Bucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.Bucket.displayName = 'proto.iotexapi.Bucket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetAccountRequest.displayName = 'proto.iotexapi.GetAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetAccountResponse.displayName = 'proto.iotexapi.GetAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iotexapi.GetActionsRequest.oneofGroups_);
};
goog.inherits(proto.iotexapi.GetActionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActionsRequest.displayName = 'proto.iotexapi.GetActionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActionsByIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetActionsByIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActionsByIndexRequest.displayName = 'proto.iotexapi.GetActionsByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActionByHashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetActionByHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActionByHashRequest.displayName = 'proto.iotexapi.GetActionByHashRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActionsByAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetActionsByAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActionsByAddressRequest.displayName = 'proto.iotexapi.GetActionsByAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetUnconfirmedActionsByAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetUnconfirmedActionsByAddressRequest.displayName = 'proto.iotexapi.GetUnconfirmedActionsByAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActionsByBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetActionsByBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActionsByBlockRequest.displayName = 'proto.iotexapi.GetActionsByBlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.ActionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.ActionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.ActionInfo.displayName = 'proto.iotexapi.ActionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.ReceiptInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.ReceiptInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.ReceiptInfo.displayName = 'proto.iotexapi.ReceiptInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.BlockProducerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.BlockProducerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.BlockProducerInfo.displayName = 'proto.iotexapi.BlockProducerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.BlockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.BlockInfo.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.BlockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.BlockInfo.displayName = 'proto.iotexapi.BlockInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActionsResponse.displayName = 'proto.iotexapi.GetActionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetBlockMetasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iotexapi.GetBlockMetasRequest.oneofGroups_);
};
goog.inherits(proto.iotexapi.GetBlockMetasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetBlockMetasRequest.displayName = 'proto.iotexapi.GetBlockMetasRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetBlockMetasByIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetBlockMetasByIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetBlockMetasByIndexRequest.displayName = 'proto.iotexapi.GetBlockMetasByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetBlockMetaByHashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetBlockMetaByHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetBlockMetaByHashRequest.displayName = 'proto.iotexapi.GetBlockMetaByHashRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetBlockMetasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetBlockMetasResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetBlockMetasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetBlockMetasResponse.displayName = 'proto.iotexapi.GetBlockMetasResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetChainMetaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetChainMetaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetChainMetaRequest.displayName = 'proto.iotexapi.GetChainMetaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetChainMetaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetChainMetaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetChainMetaResponse.displayName = 'proto.iotexapi.GetChainMetaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetServerMetaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetServerMetaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetServerMetaRequest.displayName = 'proto.iotexapi.GetServerMetaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetServerMetaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetServerMetaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetServerMetaResponse.displayName = 'proto.iotexapi.GetServerMetaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.SendActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.SendActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.SendActionRequest.displayName = 'proto.iotexapi.SendActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.SendSignedActionBytesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.SendSignedActionBytesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.SendSignedActionBytesRequest.displayName = 'proto.iotexapi.SendSignedActionBytesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.SendActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.SendActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.SendActionResponse.displayName = 'proto.iotexapi.SendActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetReceiptByActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetReceiptByActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetReceiptByActionRequest.displayName = 'proto.iotexapi.GetReceiptByActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetReceiptByActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetReceiptByActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetReceiptByActionResponse.displayName = 'proto.iotexapi.GetReceiptByActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.ReadContractRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.ReadContractRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.ReadContractRequest.displayName = 'proto.iotexapi.ReadContractRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.ReadContractResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.ReadContractResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.ReadContractResponse.displayName = 'proto.iotexapi.ReadContractResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.SuggestGasPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.SuggestGasPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.SuggestGasPriceRequest.displayName = 'proto.iotexapi.SuggestGasPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.SuggestGasPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.SuggestGasPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.SuggestGasPriceResponse.displayName = 'proto.iotexapi.SuggestGasPriceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.EstimateGasForActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.EstimateGasForActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.EstimateGasForActionRequest.displayName = 'proto.iotexapi.EstimateGasForActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.EstimateActionGasConsumptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_);
};
goog.inherits(proto.iotexapi.EstimateActionGasConsumptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.EstimateActionGasConsumptionRequest.displayName = 'proto.iotexapi.EstimateActionGasConsumptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.EstimateActionGasConsumptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.EstimateActionGasConsumptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.EstimateActionGasConsumptionResponse.displayName = 'proto.iotexapi.EstimateActionGasConsumptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.EstimateGasForActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.EstimateGasForActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.EstimateGasForActionResponse.displayName = 'proto.iotexapi.EstimateGasForActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.ReadStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.ReadStateRequest.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.ReadStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.ReadStateRequest.displayName = 'proto.iotexapi.ReadStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.ReadStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.ReadStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.ReadStateResponse.displayName = 'proto.iotexapi.ReadStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetEpochMetaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetEpochMetaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetEpochMetaRequest.displayName = 'proto.iotexapi.GetEpochMetaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetEpochMetaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetEpochMetaResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetEpochMetaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetEpochMetaResponse.displayName = 'proto.iotexapi.GetEpochMetaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetRawBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetRawBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetRawBlocksRequest.displayName = 'proto.iotexapi.GetRawBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetRawBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetRawBlocksResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetRawBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetRawBlocksResponse.displayName = 'proto.iotexapi.GetRawBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetLogsByBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetLogsByBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetLogsByBlock.displayName = 'proto.iotexapi.GetLogsByBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetLogsByRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetLogsByRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetLogsByRange.displayName = 'proto.iotexapi.GetLogsByRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.Topics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.Topics.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.Topics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.Topics.displayName = 'proto.iotexapi.Topics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.LogsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.LogsFilter.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.LogsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.LogsFilter.displayName = 'proto.iotexapi.LogsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iotexapi.GetLogsRequest.oneofGroups_);
};
goog.inherits(proto.iotexapi.GetLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetLogsRequest.displayName = 'proto.iotexapi.GetLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetLogsResponse.displayName = 'proto.iotexapi.GetLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetTransactionLogByActionHashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetTransactionLogByActionHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetTransactionLogByActionHashRequest.displayName = 'proto.iotexapi.GetTransactionLogByActionHashRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetTransactionLogByActionHashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetTransactionLogByActionHashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetTransactionLogByActionHashResponse.displayName = 'proto.iotexapi.GetTransactionLogByActionHashResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetTransactionLogByBlockHeightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetTransactionLogByBlockHeightRequest.displayName = 'proto.iotexapi.GetTransactionLogByBlockHeightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetTransactionLogByBlockHeightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetTransactionLogByBlockHeightResponse.displayName = 'proto.iotexapi.GetTransactionLogByBlockHeightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.StreamBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.StreamBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.StreamBlocksRequest.displayName = 'proto.iotexapi.StreamBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.StreamBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.StreamBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.StreamBlocksResponse.displayName = 'proto.iotexapi.StreamBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.StreamLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.StreamLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.StreamLogsRequest.displayName = 'proto.iotexapi.StreamLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.StreamLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.StreamLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.StreamLogsResponse.displayName = 'proto.iotexapi.StreamLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActPoolActionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetActPoolActionsRequest.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetActPoolActionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActPoolActionsRequest.displayName = 'proto.iotexapi.GetActPoolActionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetActPoolActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetActPoolActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetActPoolActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetActPoolActionsResponse.displayName = 'proto.iotexapi.GetActPoolActionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetElectionBucketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetElectionBucketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetElectionBucketsRequest.displayName = 'proto.iotexapi.GetElectionBucketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetElectionBucketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetElectionBucketsResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetElectionBucketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetElectionBucketsResponse.displayName = 'proto.iotexapi.GetElectionBucketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetEvmTransfersByActionHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetEvmTransfersByActionHashRequest.displayName = 'proto.iotexapi.GetEvmTransfersByActionHashRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetEvmTransfersByActionHashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetEvmTransfersByActionHashResponse.displayName = 'proto.iotexapi.GetEvmTransfersByActionHashResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetEvmTransfersByBlockHeightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetEvmTransfersByBlockHeightRequest.displayName = 'proto.iotexapi.GetEvmTransfersByBlockHeightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetEvmTransfersByBlockHeightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotexapi.GetEvmTransfersByBlockHeightResponse.displayName = 'proto.iotexapi.GetEvmTransfersByBlockHeightResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.Bucket.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.Bucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.Bucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.Bucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    voter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    votes: jspb.Message.getFieldWithDefault(msg, 2, ""),
    weightedvotes: jspb.Message.getFieldWithDefault(msg, 3, ""),
    remainingduration: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.Bucket}
 */
proto.iotexapi.Bucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.Bucket;
  return proto.iotexapi.Bucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.Bucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.Bucket}
 */
proto.iotexapi.Bucket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVotes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeightedvotes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemainingduration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.Bucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.Bucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.Bucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.Bucket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVotes();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWeightedvotes();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRemainingduration();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string voter = 1;
 * @return {string}
 */
proto.iotexapi.Bucket.prototype.getVoter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.Bucket} returns this
 */
proto.iotexapi.Bucket.prototype.setVoter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string votes = 2;
 * @return {string}
 */
proto.iotexapi.Bucket.prototype.getVotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.Bucket} returns this
 */
proto.iotexapi.Bucket.prototype.setVotes = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string weightedVotes = 3;
 * @return {string}
 */
proto.iotexapi.Bucket.prototype.getWeightedvotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.Bucket} returns this
 */
proto.iotexapi.Bucket.prototype.setWeightedvotes = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string remainingDuration = 4;
 * @return {string}
 */
proto.iotexapi.Bucket.prototype.getRemainingduration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.Bucket} returns this
 */
proto.iotexapi.Bucket.prototype.setRemainingduration = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetAccountRequest}
 */
proto.iotexapi.GetAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetAccountRequest;
  return proto.iotexapi.GetAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetAccountRequest}
 */
proto.iotexapi.GetAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.iotexapi.GetAccountRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetAccountRequest} returns this
 */
proto.iotexapi.GetAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountmeta: (f = msg.getAccountmeta()) && proto_types_blockchain_pb.AccountMeta.toObject(includeInstance, f),
    blockidentifier: (f = msg.getBlockidentifier()) && proto_types_blockchain_pb.BlockIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetAccountResponse}
 */
proto.iotexapi.GetAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetAccountResponse;
  return proto.iotexapi.GetAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetAccountResponse}
 */
proto.iotexapi.GetAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_blockchain_pb.AccountMeta;
      reader.readMessage(value,proto_types_blockchain_pb.AccountMeta.deserializeBinaryFromReader);
      msg.setAccountmeta(value);
      break;
    case 2:
      var value = new proto_types_blockchain_pb.BlockIdentifier;
      reader.readMessage(value,proto_types_blockchain_pb.BlockIdentifier.deserializeBinaryFromReader);
      msg.setBlockidentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountmeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_blockchain_pb.AccountMeta.serializeBinaryToWriter
    );
  }
  f = message.getBlockidentifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_types_blockchain_pb.BlockIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.AccountMeta accountMeta = 1;
 * @return {?proto.iotextypes.AccountMeta}
 */
proto.iotexapi.GetAccountResponse.prototype.getAccountmeta = function() {
  return /** @type{?proto.iotextypes.AccountMeta} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.AccountMeta, 1));
};


/**
 * @param {?proto.iotextypes.AccountMeta|undefined} value
 * @return {!proto.iotexapi.GetAccountResponse} returns this
*/
proto.iotexapi.GetAccountResponse.prototype.setAccountmeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetAccountResponse} returns this
 */
proto.iotexapi.GetAccountResponse.prototype.clearAccountmeta = function() {
  return this.setAccountmeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetAccountResponse.prototype.hasAccountmeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional iotextypes.BlockIdentifier blockIdentifier = 2;
 * @return {?proto.iotextypes.BlockIdentifier}
 */
proto.iotexapi.GetAccountResponse.prototype.getBlockidentifier = function() {
  return /** @type{?proto.iotextypes.BlockIdentifier} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.BlockIdentifier, 2));
};


/**
 * @param {?proto.iotextypes.BlockIdentifier|undefined} value
 * @return {!proto.iotexapi.GetAccountResponse} returns this
*/
proto.iotexapi.GetAccountResponse.prototype.setBlockidentifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetAccountResponse} returns this
 */
proto.iotexapi.GetAccountResponse.prototype.clearBlockidentifier = function() {
  return this.setBlockidentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetAccountResponse.prototype.hasBlockidentifier = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iotexapi.GetActionsRequest.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.iotexapi.GetActionsRequest.LookupCase = {
  LOOKUP_NOT_SET: 0,
  BYINDEX: 1,
  BYHASH: 2,
  BYADDR: 3,
  UNCONFIRMEDBYADDR: 4,
  BYBLK: 5
};

/**
 * @return {proto.iotexapi.GetActionsRequest.LookupCase}
 */
proto.iotexapi.GetActionsRequest.prototype.getLookupCase = function() {
  return /** @type {proto.iotexapi.GetActionsRequest.LookupCase} */(jspb.Message.computeOneofCase(this, proto.iotexapi.GetActionsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    byindex: (f = msg.getByindex()) && proto.iotexapi.GetActionsByIndexRequest.toObject(includeInstance, f),
    byhash: (f = msg.getByhash()) && proto.iotexapi.GetActionByHashRequest.toObject(includeInstance, f),
    byaddr: (f = msg.getByaddr()) && proto.iotexapi.GetActionsByAddressRequest.toObject(includeInstance, f),
    unconfirmedbyaddr: (f = msg.getUnconfirmedbyaddr()) && proto.iotexapi.GetUnconfirmedActionsByAddressRequest.toObject(includeInstance, f),
    byblk: (f = msg.getByblk()) && proto.iotexapi.GetActionsByBlockRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActionsRequest}
 */
proto.iotexapi.GetActionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionsRequest;
  return proto.iotexapi.GetActionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionsRequest}
 */
proto.iotexapi.GetActionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.GetActionsByIndexRequest;
      reader.readMessage(value,proto.iotexapi.GetActionsByIndexRequest.deserializeBinaryFromReader);
      msg.setByindex(value);
      break;
    case 2:
      var value = new proto.iotexapi.GetActionByHashRequest;
      reader.readMessage(value,proto.iotexapi.GetActionByHashRequest.deserializeBinaryFromReader);
      msg.setByhash(value);
      break;
    case 3:
      var value = new proto.iotexapi.GetActionsByAddressRequest;
      reader.readMessage(value,proto.iotexapi.GetActionsByAddressRequest.deserializeBinaryFromReader);
      msg.setByaddr(value);
      break;
    case 4:
      var value = new proto.iotexapi.GetUnconfirmedActionsByAddressRequest;
      reader.readMessage(value,proto.iotexapi.GetUnconfirmedActionsByAddressRequest.deserializeBinaryFromReader);
      msg.setUnconfirmedbyaddr(value);
      break;
    case 5:
      var value = new proto.iotexapi.GetActionsByBlockRequest;
      reader.readMessage(value,proto.iotexapi.GetActionsByBlockRequest.deserializeBinaryFromReader);
      msg.setByblk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getByindex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.GetActionsByIndexRequest.serializeBinaryToWriter
    );
  }
  f = message.getByhash();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.iotexapi.GetActionByHashRequest.serializeBinaryToWriter
    );
  }
  f = message.getByaddr();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.iotexapi.GetActionsByAddressRequest.serializeBinaryToWriter
    );
  }
  f = message.getUnconfirmedbyaddr();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.iotexapi.GetUnconfirmedActionsByAddressRequest.serializeBinaryToWriter
    );
  }
  f = message.getByblk();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.iotexapi.GetActionsByBlockRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetActionsByIndexRequest byIndex = 1;
 * @return {?proto.iotexapi.GetActionsByIndexRequest}
 */
proto.iotexapi.GetActionsRequest.prototype.getByindex = function() {
  return /** @type{?proto.iotexapi.GetActionsByIndexRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetActionsByIndexRequest, 1));
};


/**
 * @param {?proto.iotexapi.GetActionsByIndexRequest|undefined} value
 * @return {!proto.iotexapi.GetActionsRequest} returns this
*/
proto.iotexapi.GetActionsRequest.prototype.setByindex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.iotexapi.GetActionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetActionsRequest} returns this
 */
proto.iotexapi.GetActionsRequest.prototype.clearByindex = function() {
  return this.setByindex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetActionsRequest.prototype.hasByindex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetActionByHashRequest byHash = 2;
 * @return {?proto.iotexapi.GetActionByHashRequest}
 */
proto.iotexapi.GetActionsRequest.prototype.getByhash = function() {
  return /** @type{?proto.iotexapi.GetActionByHashRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetActionByHashRequest, 2));
};


/**
 * @param {?proto.iotexapi.GetActionByHashRequest|undefined} value
 * @return {!proto.iotexapi.GetActionsRequest} returns this
*/
proto.iotexapi.GetActionsRequest.prototype.setByhash = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.iotexapi.GetActionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetActionsRequest} returns this
 */
proto.iotexapi.GetActionsRequest.prototype.clearByhash = function() {
  return this.setByhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetActionsRequest.prototype.hasByhash = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GetActionsByAddressRequest byAddr = 3;
 * @return {?proto.iotexapi.GetActionsByAddressRequest}
 */
proto.iotexapi.GetActionsRequest.prototype.getByaddr = function() {
  return /** @type{?proto.iotexapi.GetActionsByAddressRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetActionsByAddressRequest, 3));
};


/**
 * @param {?proto.iotexapi.GetActionsByAddressRequest|undefined} value
 * @return {!proto.iotexapi.GetActionsRequest} returns this
*/
proto.iotexapi.GetActionsRequest.prototype.setByaddr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.iotexapi.GetActionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetActionsRequest} returns this
 */
proto.iotexapi.GetActionsRequest.prototype.clearByaddr = function() {
  return this.setByaddr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetActionsRequest.prototype.hasByaddr = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GetUnconfirmedActionsByAddressRequest unconfirmedByAddr = 4;
 * @return {?proto.iotexapi.GetUnconfirmedActionsByAddressRequest}
 */
proto.iotexapi.GetActionsRequest.prototype.getUnconfirmedbyaddr = function() {
  return /** @type{?proto.iotexapi.GetUnconfirmedActionsByAddressRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetUnconfirmedActionsByAddressRequest, 4));
};


/**
 * @param {?proto.iotexapi.GetUnconfirmedActionsByAddressRequest|undefined} value
 * @return {!proto.iotexapi.GetActionsRequest} returns this
*/
proto.iotexapi.GetActionsRequest.prototype.setUnconfirmedbyaddr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.iotexapi.GetActionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetActionsRequest} returns this
 */
proto.iotexapi.GetActionsRequest.prototype.clearUnconfirmedbyaddr = function() {
  return this.setUnconfirmedbyaddr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetActionsRequest.prototype.hasUnconfirmedbyaddr = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GetActionsByBlockRequest byBlk = 5;
 * @return {?proto.iotexapi.GetActionsByBlockRequest}
 */
proto.iotexapi.GetActionsRequest.prototype.getByblk = function() {
  return /** @type{?proto.iotexapi.GetActionsByBlockRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetActionsByBlockRequest, 5));
};


/**
 * @param {?proto.iotexapi.GetActionsByBlockRequest|undefined} value
 * @return {!proto.iotexapi.GetActionsRequest} returns this
*/
proto.iotexapi.GetActionsRequest.prototype.setByblk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.iotexapi.GetActionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetActionsRequest} returns this
 */
proto.iotexapi.GetActionsRequest.prototype.clearByblk = function() {
  return this.setByblk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetActionsRequest.prototype.hasByblk = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActionsByIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionsByIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionsByIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsByIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActionsByIndexRequest}
 */
proto.iotexapi.GetActionsByIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionsByIndexRequest;
  return proto.iotexapi.GetActionsByIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionsByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionsByIndexRequest}
 */
proto.iotexapi.GetActionsByIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActionsByIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionsByIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionsByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsByIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start = 1;
 * @return {number}
 */
proto.iotexapi.GetActionsByIndexRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsByIndexRequest} returns this
 */
proto.iotexapi.GetActionsByIndexRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.iotexapi.GetActionsByIndexRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsByIndexRequest} returns this
 */
proto.iotexapi.GetActionsByIndexRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActionByHashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionByHashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionByHashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionByHashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionhash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    checkpending: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActionByHashRequest}
 */
proto.iotexapi.GetActionByHashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionByHashRequest;
  return proto.iotexapi.GetActionByHashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionByHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionByHashRequest}
 */
proto.iotexapi.GetActionByHashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionhash(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckpending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActionByHashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionByHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionByHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionByHashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCheckpending();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string actionHash = 1;
 * @return {string}
 */
proto.iotexapi.GetActionByHashRequest.prototype.getActionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetActionByHashRequest} returns this
 */
proto.iotexapi.GetActionByHashRequest.prototype.setActionhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool checkPending = 2;
 * @return {boolean}
 */
proto.iotexapi.GetActionByHashRequest.prototype.getCheckpending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.iotexapi.GetActionByHashRequest} returns this
 */
proto.iotexapi.GetActionByHashRequest.prototype.setCheckpending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionsByAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionsByAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsByAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    start: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActionsByAddressRequest}
 */
proto.iotexapi.GetActionsByAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionsByAddressRequest;
  return proto.iotexapi.GetActionsByAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionsByAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionsByAddressRequest}
 */
proto.iotexapi.GetActionsByAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionsByAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionsByAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsByAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetActionsByAddressRequest} returns this
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 start = 2;
 * @return {number}
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsByAddressRequest} returns this
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsByAddressRequest} returns this
 */
proto.iotexapi.GetActionsByAddressRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetUnconfirmedActionsByAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    start: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetUnconfirmedActionsByAddressRequest;
  return proto.iotexapi.GetUnconfirmedActionsByAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetUnconfirmedActionsByAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest} returns this
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 start = 2;
 * @return {number}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest} returns this
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetUnconfirmedActionsByAddressRequest} returns this
 */
proto.iotexapi.GetUnconfirmedActionsByAddressRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionsByBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionsByBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsByBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blkhash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    start: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActionsByBlockRequest}
 */
proto.iotexapi.GetActionsByBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionsByBlockRequest;
  return proto.iotexapi.GetActionsByBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionsByBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionsByBlockRequest}
 */
proto.iotexapi.GetActionsByBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlkhash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionsByBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionsByBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsByBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlkhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string blkHash = 1;
 * @return {string}
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.getBlkhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetActionsByBlockRequest} returns this
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.setBlkhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 start = 2;
 * @return {number}
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsByBlockRequest} returns this
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsByBlockRequest} returns this
 */
proto.iotexapi.GetActionsByBlockRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.ActionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.ActionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.ActionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ActionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && proto_types_action_pb.Action.toObject(includeInstance, f),
    acthash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blkhash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    blkheight: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sender: jspb.Message.getFieldWithDefault(msg, 6, ""),
    gasfee: jspb.Message.getFieldWithDefault(msg, 7, ""),
    index: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.ActionInfo}
 */
proto.iotexapi.ActionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.ActionInfo;
  return proto.iotexapi.ActionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.ActionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.ActionInfo}
 */
proto.iotexapi.ActionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Action;
      reader.readMessage(value,proto_types_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActhash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlkhash(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlkheight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGasfee(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.ActionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.ActionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.ActionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ActionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Action.serializeBinaryToWriter
    );
  }
  f = message.getActhash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlkhash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBlkheight();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGasfee();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional iotextypes.Action action = 1;
 * @return {?proto.iotextypes.Action}
 */
proto.iotexapi.ActionInfo.prototype.getAction = function() {
  return /** @type{?proto.iotextypes.Action} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Action, 1));
};


/**
 * @param {?proto.iotextypes.Action|undefined} value
 * @return {!proto.iotexapi.ActionInfo} returns this
*/
proto.iotexapi.ActionInfo.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.ActionInfo.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string actHash = 2;
 * @return {string}
 */
proto.iotexapi.ActionInfo.prototype.getActhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.setActhash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string blkHash = 3;
 * @return {string}
 */
proto.iotexapi.ActionInfo.prototype.getBlkhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.setBlkhash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.iotexapi.ActionInfo.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.iotexapi.ActionInfo} returns this
*/
proto.iotexapi.ActionInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.ActionInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 blkHeight = 5;
 * @return {number}
 */
proto.iotexapi.ActionInfo.prototype.getBlkheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.setBlkheight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string sender = 6;
 * @return {string}
 */
proto.iotexapi.ActionInfo.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string gasFee = 7;
 * @return {string}
 */
proto.iotexapi.ActionInfo.prototype.getGasfee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.setGasfee = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 index = 8;
 * @return {number}
 */
proto.iotexapi.ActionInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.ActionInfo} returns this
 */
proto.iotexapi.ActionInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.ReceiptInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.ReceiptInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.ReceiptInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReceiptInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    receipt: (f = msg.getReceipt()) && proto_types_action_pb.Receipt.toObject(includeInstance, f),
    blkhash: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.ReceiptInfo}
 */
proto.iotexapi.ReceiptInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.ReceiptInfo;
  return proto.iotexapi.ReceiptInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.ReceiptInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.ReceiptInfo}
 */
proto.iotexapi.ReceiptInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Receipt;
      reader.readMessage(value,proto_types_action_pb.Receipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlkhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.ReceiptInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.ReceiptInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.ReceiptInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReceiptInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Receipt.serializeBinaryToWriter
    );
  }
  f = message.getBlkhash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional iotextypes.Receipt receipt = 1;
 * @return {?proto.iotextypes.Receipt}
 */
proto.iotexapi.ReceiptInfo.prototype.getReceipt = function() {
  return /** @type{?proto.iotextypes.Receipt} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Receipt, 1));
};


/**
 * @param {?proto.iotextypes.Receipt|undefined} value
 * @return {!proto.iotexapi.ReceiptInfo} returns this
*/
proto.iotexapi.ReceiptInfo.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.ReceiptInfo} returns this
 */
proto.iotexapi.ReceiptInfo.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.ReceiptInfo.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string blkHash = 2;
 * @return {string}
 */
proto.iotexapi.ReceiptInfo.prototype.getBlkhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ReceiptInfo} returns this
 */
proto.iotexapi.ReceiptInfo.prototype.setBlkhash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.BlockProducerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.BlockProducerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.BlockProducerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.BlockProducerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    votes: jspb.Message.getFieldWithDefault(msg, 2, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    production: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.BlockProducerInfo}
 */
proto.iotexapi.BlockProducerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.BlockProducerInfo;
  return proto.iotexapi.BlockProducerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.BlockProducerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.BlockProducerInfo}
 */
proto.iotexapi.BlockProducerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVotes(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProduction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.BlockProducerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.BlockProducerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.BlockProducerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.BlockProducerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVotes();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getProduction();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.iotexapi.BlockProducerInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.BlockProducerInfo} returns this
 */
proto.iotexapi.BlockProducerInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string votes = 2;
 * @return {string}
 */
proto.iotexapi.BlockProducerInfo.prototype.getVotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.BlockProducerInfo} returns this
 */
proto.iotexapi.BlockProducerInfo.prototype.setVotes = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.iotexapi.BlockProducerInfo.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.iotexapi.BlockProducerInfo} returns this
 */
proto.iotexapi.BlockProducerInfo.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 production = 4;
 * @return {number}
 */
proto.iotexapi.BlockProducerInfo.prototype.getProduction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.BlockProducerInfo} returns this
 */
proto.iotexapi.BlockProducerInfo.prototype.setProduction = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.BlockInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.BlockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.BlockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.BlockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.BlockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto_types_blockchain_pb.Block.toObject(includeInstance, f),
    receiptsList: jspb.Message.toObjectList(msg.getReceiptsList(),
    proto_types_action_pb.Receipt.toObject, includeInstance),
    transactionlogs: (f = msg.getTransactionlogs()) && proto_types_transaction_log_pb.TransactionLogs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.BlockInfo}
 */
proto.iotexapi.BlockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.BlockInfo;
  return proto.iotexapi.BlockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.BlockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.BlockInfo}
 */
proto.iotexapi.BlockInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_blockchain_pb.Block;
      reader.readMessage(value,proto_types_blockchain_pb.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 2:
      var value = new proto_types_action_pb.Receipt;
      reader.readMessage(value,proto_types_action_pb.Receipt.deserializeBinaryFromReader);
      msg.addReceipts(value);
      break;
    case 3:
      var value = new proto_types_transaction_log_pb.TransactionLogs;
      reader.readMessage(value,proto_types_transaction_log_pb.TransactionLogs.deserializeBinaryFromReader);
      msg.setTransactionlogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.BlockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.BlockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.BlockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.BlockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_blockchain_pb.Block.serializeBinaryToWriter
    );
  }
  f = message.getReceiptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_types_action_pb.Receipt.serializeBinaryToWriter
    );
  }
  f = message.getTransactionlogs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_types_transaction_log_pb.TransactionLogs.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.Block block = 1;
 * @return {?proto.iotextypes.Block}
 */
proto.iotexapi.BlockInfo.prototype.getBlock = function() {
  return /** @type{?proto.iotextypes.Block} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.Block, 1));
};


/**
 * @param {?proto.iotextypes.Block|undefined} value
 * @return {!proto.iotexapi.BlockInfo} returns this
*/
proto.iotexapi.BlockInfo.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.BlockInfo} returns this
 */
proto.iotexapi.BlockInfo.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.BlockInfo.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated iotextypes.Receipt receipts = 2;
 * @return {!Array<!proto.iotextypes.Receipt>}
 */
proto.iotexapi.BlockInfo.prototype.getReceiptsList = function() {
  return /** @type{!Array<!proto.iotextypes.Receipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_types_action_pb.Receipt, 2));
};


/**
 * @param {!Array<!proto.iotextypes.Receipt>} value
 * @return {!proto.iotexapi.BlockInfo} returns this
*/
proto.iotexapi.BlockInfo.prototype.setReceiptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.iotextypes.Receipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.Receipt}
 */
proto.iotexapi.BlockInfo.prototype.addReceipts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iotextypes.Receipt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.BlockInfo} returns this
 */
proto.iotexapi.BlockInfo.prototype.clearReceiptsList = function() {
  return this.setReceiptsList([]);
};


/**
 * optional iotextypes.TransactionLogs transactionLogs = 3;
 * @return {?proto.iotextypes.TransactionLogs}
 */
proto.iotexapi.BlockInfo.prototype.getTransactionlogs = function() {
  return /** @type{?proto.iotextypes.TransactionLogs} */ (
    jspb.Message.getWrapperField(this, proto_types_transaction_log_pb.TransactionLogs, 3));
};


/**
 * @param {?proto.iotextypes.TransactionLogs|undefined} value
 * @return {!proto.iotexapi.BlockInfo} returns this
*/
proto.iotexapi.BlockInfo.prototype.setTransactionlogs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.BlockInfo} returns this
 */
proto.iotexapi.BlockInfo.prototype.clearTransactionlogs = function() {
  return this.setTransactionlogs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.BlockInfo.prototype.hasTransactionlogs = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetActionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    actioninfoList: jspb.Message.toObjectList(msg.getActioninfoList(),
    proto.iotexapi.ActionInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActionsResponse}
 */
proto.iotexapi.GetActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionsResponse;
  return proto.iotexapi.GetActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionsResponse}
 */
proto.iotexapi.GetActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    case 1:
      var value = new proto.iotexapi.ActionInfo;
      reader.readMessage(value,proto.iotexapi.ActionInfo.deserializeBinaryFromReader);
      msg.addActioninfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getActioninfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.iotexapi.ActionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 total = 2;
 * @return {number}
 */
proto.iotexapi.GetActionsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetActionsResponse} returns this
 */
proto.iotexapi.GetActionsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ActionInfo actionInfo = 1;
 * @return {!Array<!proto.iotexapi.ActionInfo>}
 */
proto.iotexapi.GetActionsResponse.prototype.getActioninfoList = function() {
  return /** @type{!Array<!proto.iotexapi.ActionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iotexapi.ActionInfo, 1));
};


/**
 * @param {!Array<!proto.iotexapi.ActionInfo>} value
 * @return {!proto.iotexapi.GetActionsResponse} returns this
*/
proto.iotexapi.GetActionsResponse.prototype.setActioninfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iotexapi.ActionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.ActionInfo}
 */
proto.iotexapi.GetActionsResponse.prototype.addActioninfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iotexapi.ActionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetActionsResponse} returns this
 */
proto.iotexapi.GetActionsResponse.prototype.clearActioninfoList = function() {
  return this.setActioninfoList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iotexapi.GetBlockMetasRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.iotexapi.GetBlockMetasRequest.LookupCase = {
  LOOKUP_NOT_SET: 0,
  BYINDEX: 1,
  BYHASH: 2
};

/**
 * @return {proto.iotexapi.GetBlockMetasRequest.LookupCase}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.getLookupCase = function() {
  return /** @type {proto.iotexapi.GetBlockMetasRequest.LookupCase} */(jspb.Message.computeOneofCase(this, proto.iotexapi.GetBlockMetasRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetBlockMetasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetBlockMetasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    byindex: (f = msg.getByindex()) && proto.iotexapi.GetBlockMetasByIndexRequest.toObject(includeInstance, f),
    byhash: (f = msg.getByhash()) && proto.iotexapi.GetBlockMetaByHashRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetBlockMetasRequest}
 */
proto.iotexapi.GetBlockMetasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetBlockMetasRequest;
  return proto.iotexapi.GetBlockMetasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetBlockMetasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetBlockMetasRequest}
 */
proto.iotexapi.GetBlockMetasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.GetBlockMetasByIndexRequest;
      reader.readMessage(value,proto.iotexapi.GetBlockMetasByIndexRequest.deserializeBinaryFromReader);
      msg.setByindex(value);
      break;
    case 2:
      var value = new proto.iotexapi.GetBlockMetaByHashRequest;
      reader.readMessage(value,proto.iotexapi.GetBlockMetaByHashRequest.deserializeBinaryFromReader);
      msg.setByhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetBlockMetasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetBlockMetasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getByindex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.GetBlockMetasByIndexRequest.serializeBinaryToWriter
    );
  }
  f = message.getByhash();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.iotexapi.GetBlockMetaByHashRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetBlockMetasByIndexRequest byIndex = 1;
 * @return {?proto.iotexapi.GetBlockMetasByIndexRequest}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.getByindex = function() {
  return /** @type{?proto.iotexapi.GetBlockMetasByIndexRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetBlockMetasByIndexRequest, 1));
};


/**
 * @param {?proto.iotexapi.GetBlockMetasByIndexRequest|undefined} value
 * @return {!proto.iotexapi.GetBlockMetasRequest} returns this
*/
proto.iotexapi.GetBlockMetasRequest.prototype.setByindex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.iotexapi.GetBlockMetasRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetBlockMetasRequest} returns this
 */
proto.iotexapi.GetBlockMetasRequest.prototype.clearByindex = function() {
  return this.setByindex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.hasByindex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetBlockMetaByHashRequest byHash = 2;
 * @return {?proto.iotexapi.GetBlockMetaByHashRequest}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.getByhash = function() {
  return /** @type{?proto.iotexapi.GetBlockMetaByHashRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetBlockMetaByHashRequest, 2));
};


/**
 * @param {?proto.iotexapi.GetBlockMetaByHashRequest|undefined} value
 * @return {!proto.iotexapi.GetBlockMetasRequest} returns this
*/
proto.iotexapi.GetBlockMetasRequest.prototype.setByhash = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.iotexapi.GetBlockMetasRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetBlockMetasRequest} returns this
 */
proto.iotexapi.GetBlockMetasRequest.prototype.clearByhash = function() {
  return this.setByhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.hasByhash = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetBlockMetasByIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetBlockMetasByIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetBlockMetasByIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasByIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetBlockMetasByIndexRequest}
 */
proto.iotexapi.GetBlockMetasByIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetBlockMetasByIndexRequest;
  return proto.iotexapi.GetBlockMetasByIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetBlockMetasByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetBlockMetasByIndexRequest}
 */
proto.iotexapi.GetBlockMetasByIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetBlockMetasByIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetBlockMetasByIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetBlockMetasByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasByIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start = 1;
 * @return {number}
 */
proto.iotexapi.GetBlockMetasByIndexRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetBlockMetasByIndexRequest} returns this
 */
proto.iotexapi.GetBlockMetasByIndexRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.iotexapi.GetBlockMetasByIndexRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetBlockMetasByIndexRequest} returns this
 */
proto.iotexapi.GetBlockMetasByIndexRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetBlockMetaByHashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetBlockMetaByHashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetBlockMetaByHashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetaByHashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blkhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetBlockMetaByHashRequest}
 */
proto.iotexapi.GetBlockMetaByHashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetBlockMetaByHashRequest;
  return proto.iotexapi.GetBlockMetaByHashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetBlockMetaByHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetBlockMetaByHashRequest}
 */
proto.iotexapi.GetBlockMetaByHashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlkhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetBlockMetaByHashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetBlockMetaByHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetBlockMetaByHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetaByHashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlkhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string blkHash = 1;
 * @return {string}
 */
proto.iotexapi.GetBlockMetaByHashRequest.prototype.getBlkhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetBlockMetaByHashRequest} returns this
 */
proto.iotexapi.GetBlockMetaByHashRequest.prototype.setBlkhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetBlockMetasResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetBlockMetasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetBlockMetasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blkmetasList: jspb.Message.toObjectList(msg.getBlkmetasList(),
    proto_types_blockchain_pb.BlockMeta.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetBlockMetasResponse}
 */
proto.iotexapi.GetBlockMetasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetBlockMetasResponse;
  return proto.iotexapi.GetBlockMetasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetBlockMetasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetBlockMetasResponse}
 */
proto.iotexapi.GetBlockMetasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    case 1:
      var value = new proto_types_blockchain_pb.BlockMeta;
      reader.readMessage(value,proto_types_blockchain_pb.BlockMeta.deserializeBinaryFromReader);
      msg.addBlkmetas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetBlockMetasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetBlockMetasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBlkmetasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_types_blockchain_pb.BlockMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 total = 2;
 * @return {number}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetBlockMetasResponse} returns this
 */
proto.iotexapi.GetBlockMetasResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated iotextypes.BlockMeta blkMetas = 1;
 * @return {!Array<!proto.iotextypes.BlockMeta>}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.getBlkmetasList = function() {
  return /** @type{!Array<!proto.iotextypes.BlockMeta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_types_blockchain_pb.BlockMeta, 1));
};


/**
 * @param {!Array<!proto.iotextypes.BlockMeta>} value
 * @return {!proto.iotexapi.GetBlockMetasResponse} returns this
*/
proto.iotexapi.GetBlockMetasResponse.prototype.setBlkmetasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iotextypes.BlockMeta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.BlockMeta}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.addBlkmetas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iotextypes.BlockMeta, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetBlockMetasResponse} returns this
 */
proto.iotexapi.GetBlockMetasResponse.prototype.clearBlkmetasList = function() {
  return this.setBlkmetasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetChainMetaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetChainMetaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetChainMetaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetChainMetaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetChainMetaRequest}
 */
proto.iotexapi.GetChainMetaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetChainMetaRequest;
  return proto.iotexapi.GetChainMetaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetChainMetaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetChainMetaRequest}
 */
proto.iotexapi.GetChainMetaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetChainMetaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetChainMetaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetChainMetaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetChainMetaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetChainMetaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetChainMetaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetChainMetaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetChainMetaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainmeta: (f = msg.getChainmeta()) && proto_types_blockchain_pb.ChainMeta.toObject(includeInstance, f),
    syncstage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetChainMetaResponse}
 */
proto.iotexapi.GetChainMetaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetChainMetaResponse;
  return proto.iotexapi.GetChainMetaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetChainMetaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetChainMetaResponse}
 */
proto.iotexapi.GetChainMetaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_blockchain_pb.ChainMeta;
      reader.readMessage(value,proto_types_blockchain_pb.ChainMeta.deserializeBinaryFromReader);
      msg.setChainmeta(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSyncstage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetChainMetaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetChainMetaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetChainMetaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetChainMetaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainmeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_blockchain_pb.ChainMeta.serializeBinaryToWriter
    );
  }
  f = message.getSyncstage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional iotextypes.ChainMeta chainMeta = 1;
 * @return {?proto.iotextypes.ChainMeta}
 */
proto.iotexapi.GetChainMetaResponse.prototype.getChainmeta = function() {
  return /** @type{?proto.iotextypes.ChainMeta} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.ChainMeta, 1));
};


/**
 * @param {?proto.iotextypes.ChainMeta|undefined} value
 * @return {!proto.iotexapi.GetChainMetaResponse} returns this
*/
proto.iotexapi.GetChainMetaResponse.prototype.setChainmeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetChainMetaResponse} returns this
 */
proto.iotexapi.GetChainMetaResponse.prototype.clearChainmeta = function() {
  return this.setChainmeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetChainMetaResponse.prototype.hasChainmeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string syncStage = 2;
 * @return {string}
 */
proto.iotexapi.GetChainMetaResponse.prototype.getSyncstage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetChainMetaResponse} returns this
 */
proto.iotexapi.GetChainMetaResponse.prototype.setSyncstage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetServerMetaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetServerMetaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetServerMetaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetServerMetaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetServerMetaRequest}
 */
proto.iotexapi.GetServerMetaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetServerMetaRequest;
  return proto.iotexapi.GetServerMetaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetServerMetaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetServerMetaRequest}
 */
proto.iotexapi.GetServerMetaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetServerMetaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetServerMetaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetServerMetaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetServerMetaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetServerMetaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetServerMetaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetServerMetaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetServerMetaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    servermeta: (f = msg.getServermeta()) && proto_types_node_pb.ServerMeta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetServerMetaResponse}
 */
proto.iotexapi.GetServerMetaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetServerMetaResponse;
  return proto.iotexapi.GetServerMetaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetServerMetaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetServerMetaResponse}
 */
proto.iotexapi.GetServerMetaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_node_pb.ServerMeta;
      reader.readMessage(value,proto_types_node_pb.ServerMeta.deserializeBinaryFromReader);
      msg.setServermeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetServerMetaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetServerMetaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetServerMetaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetServerMetaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServermeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_node_pb.ServerMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.ServerMeta serverMeta = 1;
 * @return {?proto.iotextypes.ServerMeta}
 */
proto.iotexapi.GetServerMetaResponse.prototype.getServermeta = function() {
  return /** @type{?proto.iotextypes.ServerMeta} */ (
    jspb.Message.getWrapperField(this, proto_types_node_pb.ServerMeta, 1));
};


/**
 * @param {?proto.iotextypes.ServerMeta|undefined} value
 * @return {!proto.iotexapi.GetServerMetaResponse} returns this
*/
proto.iotexapi.GetServerMetaResponse.prototype.setServermeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetServerMetaResponse} returns this
 */
proto.iotexapi.GetServerMetaResponse.prototype.clearServermeta = function() {
  return this.setServermeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetServerMetaResponse.prototype.hasServermeta = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.SendActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.SendActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.SendActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SendActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && proto_types_action_pb.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.SendActionRequest}
 */
proto.iotexapi.SendActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.SendActionRequest;
  return proto.iotexapi.SendActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.SendActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.SendActionRequest}
 */
proto.iotexapi.SendActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Action;
      reader.readMessage(value,proto_types_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.SendActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.SendActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.SendActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SendActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.Action action = 1;
 * @return {?proto.iotextypes.Action}
 */
proto.iotexapi.SendActionRequest.prototype.getAction = function() {
  return /** @type{?proto.iotextypes.Action} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Action, 1));
};


/**
 * @param {?proto.iotextypes.Action|undefined} value
 * @return {!proto.iotexapi.SendActionRequest} returns this
*/
proto.iotexapi.SendActionRequest.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.SendActionRequest} returns this
 */
proto.iotexapi.SendActionRequest.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.SendActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.SendSignedActionBytesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.SendSignedActionBytesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.SendSignedActionBytesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SendSignedActionBytesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedactionbytes: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.SendSignedActionBytesRequest}
 */
proto.iotexapi.SendSignedActionBytesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.SendSignedActionBytesRequest;
  return proto.iotexapi.SendSignedActionBytesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.SendSignedActionBytesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.SendSignedActionBytesRequest}
 */
proto.iotexapi.SendSignedActionBytesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignedactionbytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.SendSignedActionBytesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.SendSignedActionBytesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.SendSignedActionBytesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SendSignedActionBytesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedactionbytes();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string signedActionBytes = 1;
 * @return {string}
 */
proto.iotexapi.SendSignedActionBytesRequest.prototype.getSignedactionbytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.SendSignedActionBytesRequest} returns this
 */
proto.iotexapi.SendSignedActionBytesRequest.prototype.setSignedactionbytes = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.SendActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.SendActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.SendActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SendActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.SendActionResponse}
 */
proto.iotexapi.SendActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.SendActionResponse;
  return proto.iotexapi.SendActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.SendActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.SendActionResponse}
 */
proto.iotexapi.SendActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.SendActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.SendActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.SendActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SendActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string actionHash = 1;
 * @return {string}
 */
proto.iotexapi.SendActionResponse.prototype.getActionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.SendActionResponse} returns this
 */
proto.iotexapi.SendActionResponse.prototype.setActionhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetReceiptByActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetReceiptByActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetReceiptByActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetReceiptByActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetReceiptByActionRequest}
 */
proto.iotexapi.GetReceiptByActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetReceiptByActionRequest;
  return proto.iotexapi.GetReceiptByActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetReceiptByActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetReceiptByActionRequest}
 */
proto.iotexapi.GetReceiptByActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetReceiptByActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetReceiptByActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetReceiptByActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetReceiptByActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string actionHash = 1;
 * @return {string}
 */
proto.iotexapi.GetReceiptByActionRequest.prototype.getActionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetReceiptByActionRequest} returns this
 */
proto.iotexapi.GetReceiptByActionRequest.prototype.setActionhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetReceiptByActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetReceiptByActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetReceiptByActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetReceiptByActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiptinfo: (f = msg.getReceiptinfo()) && proto.iotexapi.ReceiptInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetReceiptByActionResponse}
 */
proto.iotexapi.GetReceiptByActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetReceiptByActionResponse;
  return proto.iotexapi.GetReceiptByActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetReceiptByActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetReceiptByActionResponse}
 */
proto.iotexapi.GetReceiptByActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.ReceiptInfo;
      reader.readMessage(value,proto.iotexapi.ReceiptInfo.deserializeBinaryFromReader);
      msg.setReceiptinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetReceiptByActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetReceiptByActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetReceiptByActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetReceiptByActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiptinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.ReceiptInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ReceiptInfo receiptInfo = 1;
 * @return {?proto.iotexapi.ReceiptInfo}
 */
proto.iotexapi.GetReceiptByActionResponse.prototype.getReceiptinfo = function() {
  return /** @type{?proto.iotexapi.ReceiptInfo} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.ReceiptInfo, 1));
};


/**
 * @param {?proto.iotexapi.ReceiptInfo|undefined} value
 * @return {!proto.iotexapi.GetReceiptByActionResponse} returns this
*/
proto.iotexapi.GetReceiptByActionResponse.prototype.setReceiptinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetReceiptByActionResponse} returns this
 */
proto.iotexapi.GetReceiptByActionResponse.prototype.clearReceiptinfo = function() {
  return this.setReceiptinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetReceiptByActionResponse.prototype.hasReceiptinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.ReadContractRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.ReadContractRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.ReadContractRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadContractRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    execution: (f = msg.getExecution()) && proto_types_action_pb.Execution.toObject(includeInstance, f),
    calleraddress: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.ReadContractRequest}
 */
proto.iotexapi.ReadContractRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.ReadContractRequest;
  return proto.iotexapi.ReadContractRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.ReadContractRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.ReadContractRequest}
 */
proto.iotexapi.ReadContractRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Execution;
      reader.readMessage(value,proto_types_action_pb.Execution.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalleraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadContractRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.ReadContractRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.ReadContractRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadContractRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Execution.serializeBinaryToWriter
    );
  }
  f = message.getCalleraddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional iotextypes.Execution execution = 1;
 * @return {?proto.iotextypes.Execution}
 */
proto.iotexapi.ReadContractRequest.prototype.getExecution = function() {
  return /** @type{?proto.iotextypes.Execution} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Execution, 1));
};


/**
 * @param {?proto.iotextypes.Execution|undefined} value
 * @return {!proto.iotexapi.ReadContractRequest} returns this
*/
proto.iotexapi.ReadContractRequest.prototype.setExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.ReadContractRequest} returns this
 */
proto.iotexapi.ReadContractRequest.prototype.clearExecution = function() {
  return this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.ReadContractRequest.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string callerAddress = 2;
 * @return {string}
 */
proto.iotexapi.ReadContractRequest.prototype.getCalleraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ReadContractRequest} returns this
 */
proto.iotexapi.ReadContractRequest.prototype.setCalleraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.ReadContractResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.ReadContractResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.ReadContractResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadContractResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, ""),
    receipt: (f = msg.getReceipt()) && proto_types_action_pb.Receipt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.ReadContractResponse}
 */
proto.iotexapi.ReadContractResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.ReadContractResponse;
  return proto.iotexapi.ReadContractResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.ReadContractResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.ReadContractResponse}
 */
proto.iotexapi.ReadContractResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 2:
      var value = new proto_types_action_pb.Receipt;
      reader.readMessage(value,proto_types_action_pb.Receipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadContractResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.ReadContractResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.ReadContractResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadContractResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_types_action_pb.Receipt.serializeBinaryToWriter
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.iotexapi.ReadContractResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ReadContractResponse} returns this
 */
proto.iotexapi.ReadContractResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional iotextypes.Receipt receipt = 2;
 * @return {?proto.iotextypes.Receipt}
 */
proto.iotexapi.ReadContractResponse.prototype.getReceipt = function() {
  return /** @type{?proto.iotextypes.Receipt} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Receipt, 2));
};


/**
 * @param {?proto.iotextypes.Receipt|undefined} value
 * @return {!proto.iotexapi.ReadContractResponse} returns this
*/
proto.iotexapi.ReadContractResponse.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.ReadContractResponse} returns this
 */
proto.iotexapi.ReadContractResponse.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.ReadContractResponse.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.SuggestGasPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.SuggestGasPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.SuggestGasPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SuggestGasPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.SuggestGasPriceRequest}
 */
proto.iotexapi.SuggestGasPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.SuggestGasPriceRequest;
  return proto.iotexapi.SuggestGasPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.SuggestGasPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.SuggestGasPriceRequest}
 */
proto.iotexapi.SuggestGasPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.SuggestGasPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.SuggestGasPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.SuggestGasPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SuggestGasPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.SuggestGasPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.SuggestGasPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.SuggestGasPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SuggestGasPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gasprice: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.SuggestGasPriceResponse}
 */
proto.iotexapi.SuggestGasPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.SuggestGasPriceResponse;
  return proto.iotexapi.SuggestGasPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.SuggestGasPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.SuggestGasPriceResponse}
 */
proto.iotexapi.SuggestGasPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasprice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.SuggestGasPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.SuggestGasPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.SuggestGasPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.SuggestGasPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGasprice();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 gasPrice = 1;
 * @return {number}
 */
proto.iotexapi.SuggestGasPriceResponse.prototype.getGasprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.SuggestGasPriceResponse} returns this
 */
proto.iotexapi.SuggestGasPriceResponse.prototype.setGasprice = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.EstimateGasForActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.EstimateGasForActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.EstimateGasForActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateGasForActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && proto_types_action_pb.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.EstimateGasForActionRequest}
 */
proto.iotexapi.EstimateGasForActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.EstimateGasForActionRequest;
  return proto.iotexapi.EstimateGasForActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.EstimateGasForActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.EstimateGasForActionRequest}
 */
proto.iotexapi.EstimateGasForActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Action;
      reader.readMessage(value,proto_types_action_pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.EstimateGasForActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.EstimateGasForActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.EstimateGasForActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateGasForActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.Action action = 1;
 * @return {?proto.iotextypes.Action}
 */
proto.iotexapi.EstimateGasForActionRequest.prototype.getAction = function() {
  return /** @type{?proto.iotextypes.Action} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Action, 1));
};


/**
 * @param {?proto.iotextypes.Action|undefined} value
 * @return {!proto.iotexapi.EstimateGasForActionRequest} returns this
*/
proto.iotexapi.EstimateGasForActionRequest.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateGasForActionRequest} returns this
 */
proto.iotexapi.EstimateGasForActionRequest.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateGasForActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_ = [[1,2,40,41,42,43,44,45,46,47,48]];

/**
 * @enum {number}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.ActionCase = {
  ACTION_NOT_SET: 0,
  TRANSFER: 1,
  EXECUTION: 2,
  STAKECREATE: 40,
  STAKEUNSTAKE: 41,
  STAKEWITHDRAW: 42,
  STAKEADDDEPOSIT: 43,
  STAKERESTAKE: 44,
  STAKECHANGECANDIDATE: 45,
  STAKETRANSFEROWNERSHIP: 46,
  CANDIDATEREGISTER: 47,
  CANDIDATEUPDATE: 48
};

/**
 * @return {proto.iotexapi.EstimateActionGasConsumptionRequest.ActionCase}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getActionCase = function() {
  return /** @type {proto.iotexapi.EstimateActionGasConsumptionRequest.ActionCase} */(jspb.Message.computeOneofCase(this, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.EstimateActionGasConsumptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfer: (f = msg.getTransfer()) && proto_types_action_pb.Transfer.toObject(includeInstance, f),
    execution: (f = msg.getExecution()) && proto_types_action_pb.Execution.toObject(includeInstance, f),
    stakecreate: (f = msg.getStakecreate()) && proto_types_action_pb.StakeCreate.toObject(includeInstance, f),
    stakeunstake: (f = msg.getStakeunstake()) && proto_types_action_pb.StakeReclaim.toObject(includeInstance, f),
    stakewithdraw: (f = msg.getStakewithdraw()) && proto_types_action_pb.StakeReclaim.toObject(includeInstance, f),
    stakeadddeposit: (f = msg.getStakeadddeposit()) && proto_types_action_pb.StakeAddDeposit.toObject(includeInstance, f),
    stakerestake: (f = msg.getStakerestake()) && proto_types_action_pb.StakeRestake.toObject(includeInstance, f),
    stakechangecandidate: (f = msg.getStakechangecandidate()) && proto_types_action_pb.StakeChangeCandidate.toObject(includeInstance, f),
    staketransferownership: (f = msg.getStaketransferownership()) && proto_types_action_pb.StakeTransferOwnership.toObject(includeInstance, f),
    candidateregister: (f = msg.getCandidateregister()) && proto_types_action_pb.CandidateRegister.toObject(includeInstance, f),
    candidateupdate: (f = msg.getCandidateupdate()) && proto_types_action_pb.CandidateBasicInfo.toObject(includeInstance, f),
    calleraddress: jspb.Message.getFieldWithDefault(msg, 100, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.EstimateActionGasConsumptionRequest;
  return proto.iotexapi.EstimateActionGasConsumptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Transfer;
      reader.readMessage(value,proto_types_action_pb.Transfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 2:
      var value = new proto_types_action_pb.Execution;
      reader.readMessage(value,proto_types_action_pb.Execution.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    case 40:
      var value = new proto_types_action_pb.StakeCreate;
      reader.readMessage(value,proto_types_action_pb.StakeCreate.deserializeBinaryFromReader);
      msg.setStakecreate(value);
      break;
    case 41:
      var value = new proto_types_action_pb.StakeReclaim;
      reader.readMessage(value,proto_types_action_pb.StakeReclaim.deserializeBinaryFromReader);
      msg.setStakeunstake(value);
      break;
    case 42:
      var value = new proto_types_action_pb.StakeReclaim;
      reader.readMessage(value,proto_types_action_pb.StakeReclaim.deserializeBinaryFromReader);
      msg.setStakewithdraw(value);
      break;
    case 43:
      var value = new proto_types_action_pb.StakeAddDeposit;
      reader.readMessage(value,proto_types_action_pb.StakeAddDeposit.deserializeBinaryFromReader);
      msg.setStakeadddeposit(value);
      break;
    case 44:
      var value = new proto_types_action_pb.StakeRestake;
      reader.readMessage(value,proto_types_action_pb.StakeRestake.deserializeBinaryFromReader);
      msg.setStakerestake(value);
      break;
    case 45:
      var value = new proto_types_action_pb.StakeChangeCandidate;
      reader.readMessage(value,proto_types_action_pb.StakeChangeCandidate.deserializeBinaryFromReader);
      msg.setStakechangecandidate(value);
      break;
    case 46:
      var value = new proto_types_action_pb.StakeTransferOwnership;
      reader.readMessage(value,proto_types_action_pb.StakeTransferOwnership.deserializeBinaryFromReader);
      msg.setStaketransferownership(value);
      break;
    case 47:
      var value = new proto_types_action_pb.CandidateRegister;
      reader.readMessage(value,proto_types_action_pb.CandidateRegister.deserializeBinaryFromReader);
      msg.setCandidateregister(value);
      break;
    case 48:
      var value = new proto_types_action_pb.CandidateBasicInfo;
      reader.readMessage(value,proto_types_action_pb.CandidateBasicInfo.deserializeBinaryFromReader);
      msg.setCandidateupdate(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalleraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.EstimateActionGasConsumptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_types_action_pb.Execution.serializeBinaryToWriter
    );
  }
  f = message.getStakecreate();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto_types_action_pb.StakeCreate.serializeBinaryToWriter
    );
  }
  f = message.getStakeunstake();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto_types_action_pb.StakeReclaim.serializeBinaryToWriter
    );
  }
  f = message.getStakewithdraw();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto_types_action_pb.StakeReclaim.serializeBinaryToWriter
    );
  }
  f = message.getStakeadddeposit();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto_types_action_pb.StakeAddDeposit.serializeBinaryToWriter
    );
  }
  f = message.getStakerestake();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto_types_action_pb.StakeRestake.serializeBinaryToWriter
    );
  }
  f = message.getStakechangecandidate();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto_types_action_pb.StakeChangeCandidate.serializeBinaryToWriter
    );
  }
  f = message.getStaketransferownership();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto_types_action_pb.StakeTransferOwnership.serializeBinaryToWriter
    );
  }
  f = message.getCandidateregister();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto_types_action_pb.CandidateRegister.serializeBinaryToWriter
    );
  }
  f = message.getCandidateupdate();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto_types_action_pb.CandidateBasicInfo.serializeBinaryToWriter
    );
  }
  f = message.getCalleraddress();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional iotextypes.Transfer transfer = 1;
 * @return {?proto.iotextypes.Transfer}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getTransfer = function() {
  return /** @type{?proto.iotextypes.Transfer} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Transfer, 1));
};


/**
 * @param {?proto.iotextypes.Transfer|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional iotextypes.Execution execution = 2;
 * @return {?proto.iotextypes.Execution}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getExecution = function() {
  return /** @type{?proto.iotextypes.Execution} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Execution, 2));
};


/**
 * @param {?proto.iotextypes.Execution|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setExecution = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearExecution = function() {
  return this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional iotextypes.StakeCreate stakeCreate = 40;
 * @return {?proto.iotextypes.StakeCreate}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStakecreate = function() {
  return /** @type{?proto.iotextypes.StakeCreate} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeCreate, 40));
};


/**
 * @param {?proto.iotextypes.StakeCreate|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStakecreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStakecreate = function() {
  return this.setStakecreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStakecreate = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional iotextypes.StakeReclaim stakeUnstake = 41;
 * @return {?proto.iotextypes.StakeReclaim}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStakeunstake = function() {
  return /** @type{?proto.iotextypes.StakeReclaim} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeReclaim, 41));
};


/**
 * @param {?proto.iotextypes.StakeReclaim|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStakeunstake = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStakeunstake = function() {
  return this.setStakeunstake(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStakeunstake = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional iotextypes.StakeReclaim stakeWithdraw = 42;
 * @return {?proto.iotextypes.StakeReclaim}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStakewithdraw = function() {
  return /** @type{?proto.iotextypes.StakeReclaim} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeReclaim, 42));
};


/**
 * @param {?proto.iotextypes.StakeReclaim|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStakewithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStakewithdraw = function() {
  return this.setStakewithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStakewithdraw = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional iotextypes.StakeAddDeposit stakeAddDeposit = 43;
 * @return {?proto.iotextypes.StakeAddDeposit}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStakeadddeposit = function() {
  return /** @type{?proto.iotextypes.StakeAddDeposit} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeAddDeposit, 43));
};


/**
 * @param {?proto.iotextypes.StakeAddDeposit|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStakeadddeposit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStakeadddeposit = function() {
  return this.setStakeadddeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStakeadddeposit = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional iotextypes.StakeRestake stakeRestake = 44;
 * @return {?proto.iotextypes.StakeRestake}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStakerestake = function() {
  return /** @type{?proto.iotextypes.StakeRestake} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeRestake, 44));
};


/**
 * @param {?proto.iotextypes.StakeRestake|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStakerestake = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStakerestake = function() {
  return this.setStakerestake(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStakerestake = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional iotextypes.StakeChangeCandidate stakeChangeCandidate = 45;
 * @return {?proto.iotextypes.StakeChangeCandidate}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStakechangecandidate = function() {
  return /** @type{?proto.iotextypes.StakeChangeCandidate} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeChangeCandidate, 45));
};


/**
 * @param {?proto.iotextypes.StakeChangeCandidate|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStakechangecandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 45, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStakechangecandidate = function() {
  return this.setStakechangecandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStakechangecandidate = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional iotextypes.StakeTransferOwnership stakeTransferOwnership = 46;
 * @return {?proto.iotextypes.StakeTransferOwnership}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getStaketransferownership = function() {
  return /** @type{?proto.iotextypes.StakeTransferOwnership} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.StakeTransferOwnership, 46));
};


/**
 * @param {?proto.iotextypes.StakeTransferOwnership|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setStaketransferownership = function(value) {
  return jspb.Message.setOneofWrapperField(this, 46, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearStaketransferownership = function() {
  return this.setStaketransferownership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasStaketransferownership = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional iotextypes.CandidateRegister candidateRegister = 47;
 * @return {?proto.iotextypes.CandidateRegister}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getCandidateregister = function() {
  return /** @type{?proto.iotextypes.CandidateRegister} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.CandidateRegister, 47));
};


/**
 * @param {?proto.iotextypes.CandidateRegister|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setCandidateregister = function(value) {
  return jspb.Message.setOneofWrapperField(this, 47, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearCandidateregister = function() {
  return this.setCandidateregister(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasCandidateregister = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional iotextypes.CandidateBasicInfo candidateUpdate = 48;
 * @return {?proto.iotextypes.CandidateBasicInfo}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getCandidateupdate = function() {
  return /** @type{?proto.iotextypes.CandidateBasicInfo} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.CandidateBasicInfo, 48));
};


/**
 * @param {?proto.iotextypes.CandidateBasicInfo|undefined} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
*/
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setCandidateupdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 48, proto.iotexapi.EstimateActionGasConsumptionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.clearCandidateupdate = function() {
  return this.setCandidateupdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.hasCandidateupdate = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional string callerAddress = 100;
 * @return {string}
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.getCalleraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionRequest} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionRequest.prototype.setCalleraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.EstimateActionGasConsumptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.EstimateActionGasConsumptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gas: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionResponse}
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.EstimateActionGasConsumptionResponse;
  return proto.iotexapi.EstimateActionGasConsumptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.EstimateActionGasConsumptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.EstimateActionGasConsumptionResponse}
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.EstimateActionGasConsumptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.EstimateActionGasConsumptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 gas = 1;
 * @return {number}
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.prototype.getGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.EstimateActionGasConsumptionResponse} returns this
 */
proto.iotexapi.EstimateActionGasConsumptionResponse.prototype.setGas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.EstimateGasForActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.EstimateGasForActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.EstimateGasForActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateGasForActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gas: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.EstimateGasForActionResponse}
 */
proto.iotexapi.EstimateGasForActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.EstimateGasForActionResponse;
  return proto.iotexapi.EstimateGasForActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.EstimateGasForActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.EstimateGasForActionResponse}
 */
proto.iotexapi.EstimateGasForActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.EstimateGasForActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.EstimateGasForActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.EstimateGasForActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.EstimateGasForActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 gas = 1;
 * @return {number}
 */
proto.iotexapi.EstimateGasForActionResponse.prototype.getGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.EstimateGasForActionResponse} returns this
 */
proto.iotexapi.EstimateGasForActionResponse.prototype.setGas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.ReadStateRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.ReadStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.ReadStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.ReadStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolid: msg.getProtocolid_asB64(),
    methodname: msg.getMethodname_asB64(),
    argumentsList: msg.getArgumentsList_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.ReadStateRequest}
 */
proto.iotexapi.ReadStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.ReadStateRequest;
  return proto.iotexapi.ReadStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.ReadStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.ReadStateRequest}
 */
proto.iotexapi.ReadStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProtocolid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMethodname(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addArguments(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.ReadStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.ReadStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMethodname_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getArgumentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes protocolID = 1;
 * @return {string}
 */
proto.iotexapi.ReadStateRequest.prototype.getProtocolid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes protocolID = 1;
 * This is a type-conversion wrapper around `getProtocolid()`
 * @return {string}
 */
proto.iotexapi.ReadStateRequest.prototype.getProtocolid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProtocolid()));
};


/**
 * optional bytes protocolID = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProtocolid()`
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadStateRequest.prototype.getProtocolid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProtocolid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.iotexapi.ReadStateRequest} returns this
 */
proto.iotexapi.ReadStateRequest.prototype.setProtocolid = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes methodName = 2;
 * @return {string}
 */
proto.iotexapi.ReadStateRequest.prototype.getMethodname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes methodName = 2;
 * This is a type-conversion wrapper around `getMethodname()`
 * @return {string}
 */
proto.iotexapi.ReadStateRequest.prototype.getMethodname_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMethodname()));
};


/**
 * optional bytes methodName = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMethodname()`
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadStateRequest.prototype.getMethodname_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMethodname()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.iotexapi.ReadStateRequest} returns this
 */
proto.iotexapi.ReadStateRequest.prototype.setMethodname = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated bytes arguments = 3;
 * @return {!Array<string>}
 */
proto.iotexapi.ReadStateRequest.prototype.getArgumentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes arguments = 3;
 * This is a type-conversion wrapper around `getArgumentsList()`
 * @return {!Array<string>}
 */
proto.iotexapi.ReadStateRequest.prototype.getArgumentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getArgumentsList()));
};


/**
 * repeated bytes arguments = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getArgumentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.iotexapi.ReadStateRequest.prototype.getArgumentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getArgumentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.iotexapi.ReadStateRequest} returns this
 */
proto.iotexapi.ReadStateRequest.prototype.setArgumentsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.ReadStateRequest} returns this
 */
proto.iotexapi.ReadStateRequest.prototype.addArguments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.ReadStateRequest} returns this
 */
proto.iotexapi.ReadStateRequest.prototype.clearArgumentsList = function() {
  return this.setArgumentsList([]);
};


/**
 * optional string height = 4;
 * @return {string}
 */
proto.iotexapi.ReadStateRequest.prototype.getHeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.ReadStateRequest} returns this
 */
proto.iotexapi.ReadStateRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.ReadStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.ReadStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.ReadStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    blockidentifier: (f = msg.getBlockidentifier()) && proto_types_blockchain_pb.BlockIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.ReadStateResponse}
 */
proto.iotexapi.ReadStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.ReadStateResponse;
  return proto.iotexapi.ReadStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.ReadStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.ReadStateResponse}
 */
proto.iotexapi.ReadStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = new proto_types_blockchain_pb.BlockIdentifier;
      reader.readMessage(value,proto_types_blockchain_pb.BlockIdentifier.deserializeBinaryFromReader);
      msg.setBlockidentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.ReadStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.ReadStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.ReadStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBlockidentifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_types_blockchain_pb.BlockIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.iotexapi.ReadStateResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.iotexapi.ReadStateResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.iotexapi.ReadStateResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.iotexapi.ReadStateResponse} returns this
 */
proto.iotexapi.ReadStateResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional iotextypes.BlockIdentifier blockIdentifier = 2;
 * @return {?proto.iotextypes.BlockIdentifier}
 */
proto.iotexapi.ReadStateResponse.prototype.getBlockidentifier = function() {
  return /** @type{?proto.iotextypes.BlockIdentifier} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.BlockIdentifier, 2));
};


/**
 * @param {?proto.iotextypes.BlockIdentifier|undefined} value
 * @return {!proto.iotexapi.ReadStateResponse} returns this
*/
proto.iotexapi.ReadStateResponse.prototype.setBlockidentifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.ReadStateResponse} returns this
 */
proto.iotexapi.ReadStateResponse.prototype.clearBlockidentifier = function() {
  return this.setBlockidentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.ReadStateResponse.prototype.hasBlockidentifier = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetEpochMetaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetEpochMetaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetEpochMetaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEpochMetaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochnumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetEpochMetaRequest}
 */
proto.iotexapi.GetEpochMetaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetEpochMetaRequest;
  return proto.iotexapi.GetEpochMetaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetEpochMetaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetEpochMetaRequest}
 */
proto.iotexapi.GetEpochMetaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochnumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetEpochMetaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetEpochMetaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetEpochMetaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEpochMetaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochnumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 epochNumber = 1;
 * @return {number}
 */
proto.iotexapi.GetEpochMetaRequest.prototype.getEpochnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetEpochMetaRequest} returns this
 */
proto.iotexapi.GetEpochMetaRequest.prototype.setEpochnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetEpochMetaResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetEpochMetaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetEpochMetaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEpochMetaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochdata: (f = msg.getEpochdata()) && proto_types_blockchain_pb.EpochData.toObject(includeInstance, f),
    totalblocks: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockproducersinfoList: jspb.Message.toObjectList(msg.getBlockproducersinfoList(),
    proto.iotexapi.BlockProducerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetEpochMetaResponse}
 */
proto.iotexapi.GetEpochMetaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetEpochMetaResponse;
  return proto.iotexapi.GetEpochMetaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetEpochMetaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetEpochMetaResponse}
 */
proto.iotexapi.GetEpochMetaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_blockchain_pb.EpochData;
      reader.readMessage(value,proto_types_blockchain_pb.EpochData.deserializeBinaryFromReader);
      msg.setEpochdata(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalblocks(value);
      break;
    case 3:
      var value = new proto.iotexapi.BlockProducerInfo;
      reader.readMessage(value,proto.iotexapi.BlockProducerInfo.deserializeBinaryFromReader);
      msg.addBlockproducersinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetEpochMetaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetEpochMetaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEpochMetaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochdata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_blockchain_pb.EpochData.serializeBinaryToWriter
    );
  }
  f = message.getTotalblocks();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBlockproducersinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.iotexapi.BlockProducerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.EpochData epochData = 1;
 * @return {?proto.iotextypes.EpochData}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.getEpochdata = function() {
  return /** @type{?proto.iotextypes.EpochData} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.EpochData, 1));
};


/**
 * @param {?proto.iotextypes.EpochData|undefined} value
 * @return {!proto.iotexapi.GetEpochMetaResponse} returns this
*/
proto.iotexapi.GetEpochMetaResponse.prototype.setEpochdata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetEpochMetaResponse} returns this
 */
proto.iotexapi.GetEpochMetaResponse.prototype.clearEpochdata = function() {
  return this.setEpochdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.hasEpochdata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 totalBlocks = 2;
 * @return {number}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.getTotalblocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetEpochMetaResponse} returns this
 */
proto.iotexapi.GetEpochMetaResponse.prototype.setTotalblocks = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated BlockProducerInfo blockProducersInfo = 3;
 * @return {!Array<!proto.iotexapi.BlockProducerInfo>}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.getBlockproducersinfoList = function() {
  return /** @type{!Array<!proto.iotexapi.BlockProducerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iotexapi.BlockProducerInfo, 3));
};


/**
 * @param {!Array<!proto.iotexapi.BlockProducerInfo>} value
 * @return {!proto.iotexapi.GetEpochMetaResponse} returns this
*/
proto.iotexapi.GetEpochMetaResponse.prototype.setBlockproducersinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.iotexapi.BlockProducerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.BlockProducerInfo}
 */
proto.iotexapi.GetEpochMetaResponse.prototype.addBlockproducersinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.iotexapi.BlockProducerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetEpochMetaResponse} returns this
 */
proto.iotexapi.GetEpochMetaResponse.prototype.clearBlockproducersinfoList = function() {
  return this.setBlockproducersinfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetRawBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetRawBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetRawBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetRawBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startheight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    withreceipts: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    withtransactionlogs: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetRawBlocksRequest}
 */
proto.iotexapi.GetRawBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetRawBlocksRequest;
  return proto.iotexapi.GetRawBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetRawBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetRawBlocksRequest}
 */
proto.iotexapi.GetRawBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartheight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithreceipts(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithtransactionlogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetRawBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetRawBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetRawBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetRawBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartheight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getWithreceipts();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWithtransactionlogs();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 startHeight = 1;
 * @return {number}
 */
proto.iotexapi.GetRawBlocksRequest.prototype.getStartheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetRawBlocksRequest} returns this
 */
proto.iotexapi.GetRawBlocksRequest.prototype.setStartheight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.iotexapi.GetRawBlocksRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetRawBlocksRequest} returns this
 */
proto.iotexapi.GetRawBlocksRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool withReceipts = 3;
 * @return {boolean}
 */
proto.iotexapi.GetRawBlocksRequest.prototype.getWithreceipts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.iotexapi.GetRawBlocksRequest} returns this
 */
proto.iotexapi.GetRawBlocksRequest.prototype.setWithreceipts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool withTransactionLogs = 4;
 * @return {boolean}
 */
proto.iotexapi.GetRawBlocksRequest.prototype.getWithtransactionlogs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.iotexapi.GetRawBlocksRequest} returns this
 */
proto.iotexapi.GetRawBlocksRequest.prototype.setWithtransactionlogs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetRawBlocksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetRawBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetRawBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetRawBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetRawBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.iotexapi.BlockInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetRawBlocksResponse}
 */
proto.iotexapi.GetRawBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetRawBlocksResponse;
  return proto.iotexapi.GetRawBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetRawBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetRawBlocksResponse}
 */
proto.iotexapi.GetRawBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.BlockInfo;
      reader.readMessage(value,proto.iotexapi.BlockInfo.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetRawBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetRawBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetRawBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetRawBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.iotexapi.BlockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BlockInfo blocks = 1;
 * @return {!Array<!proto.iotexapi.BlockInfo>}
 */
proto.iotexapi.GetRawBlocksResponse.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.iotexapi.BlockInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iotexapi.BlockInfo, 1));
};


/**
 * @param {!Array<!proto.iotexapi.BlockInfo>} value
 * @return {!proto.iotexapi.GetRawBlocksResponse} returns this
*/
proto.iotexapi.GetRawBlocksResponse.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iotexapi.BlockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.BlockInfo}
 */
proto.iotexapi.GetRawBlocksResponse.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iotexapi.BlockInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetRawBlocksResponse} returns this
 */
proto.iotexapi.GetRawBlocksResponse.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetLogsByBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetLogsByBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetLogsByBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsByBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhash: msg.getBlockhash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetLogsByBlock}
 */
proto.iotexapi.GetLogsByBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetLogsByBlock;
  return proto.iotexapi.GetLogsByBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetLogsByBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetLogsByBlock}
 */
proto.iotexapi.GetLogsByBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetLogsByBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetLogsByBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetLogsByBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsByBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes blockHash = 1;
 * @return {string}
 */
proto.iotexapi.GetLogsByBlock.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blockHash = 1;
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {string}
 */
proto.iotexapi.GetLogsByBlock.prototype.getBlockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockhash()));
};


/**
 * optional bytes blockHash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {!Uint8Array}
 */
proto.iotexapi.GetLogsByBlock.prototype.getBlockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockhash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.iotexapi.GetLogsByBlock} returns this
 */
proto.iotexapi.GetLogsByBlock.prototype.setBlockhash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetLogsByRange.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetLogsByRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetLogsByRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsByRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromblock: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toblock: jspb.Message.getFieldWithDefault(msg, 2, 0),
    paginationsize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetLogsByRange}
 */
proto.iotexapi.GetLogsByRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetLogsByRange;
  return proto.iotexapi.GetLogsByRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetLogsByRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetLogsByRange}
 */
proto.iotexapi.GetLogsByRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromblock(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setToblock(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPaginationsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetLogsByRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetLogsByRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetLogsByRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsByRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromblock();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getToblock();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPaginationsize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 fromBlock = 1;
 * @return {number}
 */
proto.iotexapi.GetLogsByRange.prototype.getFromblock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetLogsByRange} returns this
 */
proto.iotexapi.GetLogsByRange.prototype.setFromblock = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 toBlock = 2;
 * @return {number}
 */
proto.iotexapi.GetLogsByRange.prototype.getToblock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetLogsByRange} returns this
 */
proto.iotexapi.GetLogsByRange.prototype.setToblock = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 paginationSize = 3;
 * @return {number}
 */
proto.iotexapi.GetLogsByRange.prototype.getPaginationsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetLogsByRange} returns this
 */
proto.iotexapi.GetLogsByRange.prototype.setPaginationsize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.Topics.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.Topics.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.Topics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.Topics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.Topics.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicList: msg.getTopicList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.Topics}
 */
proto.iotexapi.Topics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.Topics;
  return proto.iotexapi.Topics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.Topics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.Topics}
 */
proto.iotexapi.Topics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.Topics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.Topics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.Topics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.Topics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes topic = 1;
 * @return {!Array<string>}
 */
proto.iotexapi.Topics.prototype.getTopicList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes topic = 1;
 * This is a type-conversion wrapper around `getTopicList()`
 * @return {!Array<string>}
 */
proto.iotexapi.Topics.prototype.getTopicList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTopicList()));
};


/**
 * repeated bytes topic = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTopicList()`
 * @return {!Array<!Uint8Array>}
 */
proto.iotexapi.Topics.prototype.getTopicList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTopicList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.iotexapi.Topics} returns this
 */
proto.iotexapi.Topics.prototype.setTopicList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.Topics} returns this
 */
proto.iotexapi.Topics.prototype.addTopic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.Topics} returns this
 */
proto.iotexapi.Topics.prototype.clearTopicList = function() {
  return this.setTopicList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.LogsFilter.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.LogsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.LogsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.LogsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.LogsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    topicsList: jspb.Message.toObjectList(msg.getTopicsList(),
    proto.iotexapi.Topics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.LogsFilter}
 */
proto.iotexapi.LogsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.LogsFilter;
  return proto.iotexapi.LogsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.LogsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.LogsFilter}
 */
proto.iotexapi.LogsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddress(value);
      break;
    case 2:
      var value = new proto.iotexapi.Topics;
      reader.readMessage(value,proto.iotexapi.Topics.deserializeBinaryFromReader);
      msg.addTopics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.LogsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.LogsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.LogsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.LogsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.iotexapi.Topics.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string address = 1;
 * @return {!Array<string>}
 */
proto.iotexapi.LogsFilter.prototype.getAddressList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.iotexapi.LogsFilter} returns this
 */
proto.iotexapi.LogsFilter.prototype.setAddressList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.LogsFilter} returns this
 */
proto.iotexapi.LogsFilter.prototype.addAddress = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.LogsFilter} returns this
 */
proto.iotexapi.LogsFilter.prototype.clearAddressList = function() {
  return this.setAddressList([]);
};


/**
 * repeated Topics topics = 2;
 * @return {!Array<!proto.iotexapi.Topics>}
 */
proto.iotexapi.LogsFilter.prototype.getTopicsList = function() {
  return /** @type{!Array<!proto.iotexapi.Topics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iotexapi.Topics, 2));
};


/**
 * @param {!Array<!proto.iotexapi.Topics>} value
 * @return {!proto.iotexapi.LogsFilter} returns this
*/
proto.iotexapi.LogsFilter.prototype.setTopicsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.iotexapi.Topics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.Topics}
 */
proto.iotexapi.LogsFilter.prototype.addTopics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iotexapi.Topics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.LogsFilter} returns this
 */
proto.iotexapi.LogsFilter.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iotexapi.GetLogsRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.iotexapi.GetLogsRequest.LookupCase = {
  LOOKUP_NOT_SET: 0,
  BYBLOCK: 2,
  BYRANGE: 3
};

/**
 * @return {proto.iotexapi.GetLogsRequest.LookupCase}
 */
proto.iotexapi.GetLogsRequest.prototype.getLookupCase = function() {
  return /** @type {proto.iotexapi.GetLogsRequest.LookupCase} */(jspb.Message.computeOneofCase(this, proto.iotexapi.GetLogsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.iotexapi.LogsFilter.toObject(includeInstance, f),
    byblock: (f = msg.getByblock()) && proto.iotexapi.GetLogsByBlock.toObject(includeInstance, f),
    byrange: (f = msg.getByrange()) && proto.iotexapi.GetLogsByRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetLogsRequest}
 */
proto.iotexapi.GetLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetLogsRequest;
  return proto.iotexapi.GetLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetLogsRequest}
 */
proto.iotexapi.GetLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.LogsFilter;
      reader.readMessage(value,proto.iotexapi.LogsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.iotexapi.GetLogsByBlock;
      reader.readMessage(value,proto.iotexapi.GetLogsByBlock.deserializeBinaryFromReader);
      msg.setByblock(value);
      break;
    case 3:
      var value = new proto.iotexapi.GetLogsByRange;
      reader.readMessage(value,proto.iotexapi.GetLogsByRange.deserializeBinaryFromReader);
      msg.setByrange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.LogsFilter.serializeBinaryToWriter
    );
  }
  f = message.getByblock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.iotexapi.GetLogsByBlock.serializeBinaryToWriter
    );
  }
  f = message.getByrange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.iotexapi.GetLogsByRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional LogsFilter filter = 1;
 * @return {?proto.iotexapi.LogsFilter}
 */
proto.iotexapi.GetLogsRequest.prototype.getFilter = function() {
  return /** @type{?proto.iotexapi.LogsFilter} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.LogsFilter, 1));
};


/**
 * @param {?proto.iotexapi.LogsFilter|undefined} value
 * @return {!proto.iotexapi.GetLogsRequest} returns this
*/
proto.iotexapi.GetLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetLogsRequest} returns this
 */
proto.iotexapi.GetLogsRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetLogsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetLogsByBlock byBlock = 2;
 * @return {?proto.iotexapi.GetLogsByBlock}
 */
proto.iotexapi.GetLogsRequest.prototype.getByblock = function() {
  return /** @type{?proto.iotexapi.GetLogsByBlock} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetLogsByBlock, 2));
};


/**
 * @param {?proto.iotexapi.GetLogsByBlock|undefined} value
 * @return {!proto.iotexapi.GetLogsRequest} returns this
*/
proto.iotexapi.GetLogsRequest.prototype.setByblock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.iotexapi.GetLogsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetLogsRequest} returns this
 */
proto.iotexapi.GetLogsRequest.prototype.clearByblock = function() {
  return this.setByblock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetLogsRequest.prototype.hasByblock = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GetLogsByRange byRange = 3;
 * @return {?proto.iotexapi.GetLogsByRange}
 */
proto.iotexapi.GetLogsRequest.prototype.getByrange = function() {
  return /** @type{?proto.iotexapi.GetLogsByRange} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetLogsByRange, 3));
};


/**
 * @param {?proto.iotexapi.GetLogsByRange|undefined} value
 * @return {!proto.iotexapi.GetLogsRequest} returns this
*/
proto.iotexapi.GetLogsRequest.prototype.setByrange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.iotexapi.GetLogsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetLogsRequest} returns this
 */
proto.iotexapi.GetLogsRequest.prototype.clearByrange = function() {
  return this.setByrange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetLogsRequest.prototype.hasByrange = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetLogsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto_types_action_pb.Log.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetLogsResponse}
 */
proto.iotexapi.GetLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetLogsResponse;
  return proto.iotexapi.GetLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetLogsResponse}
 */
proto.iotexapi.GetLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Log;
      reader.readMessage(value,proto_types_action_pb.Log.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_types_action_pb.Log.serializeBinaryToWriter
    );
  }
};


/**
 * repeated iotextypes.Log logs = 1;
 * @return {!Array<!proto.iotextypes.Log>}
 */
proto.iotexapi.GetLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.iotextypes.Log>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_types_action_pb.Log, 1));
};


/**
 * @param {!Array<!proto.iotextypes.Log>} value
 * @return {!proto.iotexapi.GetLogsResponse} returns this
*/
proto.iotexapi.GetLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iotextypes.Log=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.Log}
 */
proto.iotexapi.GetLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iotextypes.Log, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetLogsResponse} returns this
 */
proto.iotexapi.GetLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetTransactionLogByActionHashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetTransactionLogByActionHashRequest}
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetTransactionLogByActionHashRequest;
  return proto.iotexapi.GetTransactionLogByActionHashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetTransactionLogByActionHashRequest}
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetTransactionLogByActionHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string actionHash = 1;
 * @return {string}
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.prototype.getActionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetTransactionLogByActionHashRequest} returns this
 */
proto.iotexapi.GetTransactionLogByActionHashRequest.prototype.setActionhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetTransactionLogByActionHashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetTransactionLogByActionHashResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionlog: (f = msg.getTransactionlog()) && proto_types_transaction_log_pb.TransactionLog.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetTransactionLogByActionHashResponse}
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetTransactionLogByActionHashResponse;
  return proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetTransactionLogByActionHashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetTransactionLogByActionHashResponse}
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_transaction_log_pb.TransactionLog;
      reader.readMessage(value,proto_types_transaction_log_pb.TransactionLog.deserializeBinaryFromReader);
      msg.setTransactionlog(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetTransactionLogByActionHashResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetTransactionLogByActionHashResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_transaction_log_pb.TransactionLog.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.TransactionLog transactionLog = 1;
 * @return {?proto.iotextypes.TransactionLog}
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.prototype.getTransactionlog = function() {
  return /** @type{?proto.iotextypes.TransactionLog} */ (
    jspb.Message.getWrapperField(this, proto_types_transaction_log_pb.TransactionLog, 1));
};


/**
 * @param {?proto.iotextypes.TransactionLog|undefined} value
 * @return {!proto.iotexapi.GetTransactionLogByActionHashResponse} returns this
*/
proto.iotexapi.GetTransactionLogByActionHashResponse.prototype.setTransactionlog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetTransactionLogByActionHashResponse} returns this
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.prototype.clearTransactionlog = function() {
  return this.setTransactionlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetTransactionLogByActionHashResponse.prototype.hasTransactionlog = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetTransactionLogByBlockHeightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockheight: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightRequest}
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetTransactionLogByBlockHeightRequest;
  return proto.iotexapi.GetTransactionLogByBlockHeightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightRequest}
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockheight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetTransactionLogByBlockHeightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 blockHeight = 1;
 * @return {number}
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} returns this
 */
proto.iotexapi.GetTransactionLogByBlockHeightRequest.prototype.setBlockheight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetTransactionLogByBlockHeightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionlogs: (f = msg.getTransactionlogs()) && proto_types_transaction_log_pb.TransactionLogs.toObject(includeInstance, f),
    blockidentifier: (f = msg.getBlockidentifier()) && proto_types_blockchain_pb.BlockIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightResponse}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetTransactionLogByBlockHeightResponse;
  return proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightResponse}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_transaction_log_pb.TransactionLogs;
      reader.readMessage(value,proto_types_transaction_log_pb.TransactionLogs.deserializeBinaryFromReader);
      msg.setTransactionlogs(value);
      break;
    case 2:
      var value = new proto_types_blockchain_pb.BlockIdentifier;
      reader.readMessage(value,proto_types_blockchain_pb.BlockIdentifier.deserializeBinaryFromReader);
      msg.setBlockidentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetTransactionLogByBlockHeightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionlogs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_transaction_log_pb.TransactionLogs.serializeBinaryToWriter
    );
  }
  f = message.getBlockidentifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_types_blockchain_pb.BlockIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.TransactionLogs transactionLogs = 1;
 * @return {?proto.iotextypes.TransactionLogs}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.getTransactionlogs = function() {
  return /** @type{?proto.iotextypes.TransactionLogs} */ (
    jspb.Message.getWrapperField(this, proto_types_transaction_log_pb.TransactionLogs, 1));
};


/**
 * @param {?proto.iotextypes.TransactionLogs|undefined} value
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} returns this
*/
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.setTransactionlogs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} returns this
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.clearTransactionlogs = function() {
  return this.setTransactionlogs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.hasTransactionlogs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional iotextypes.BlockIdentifier blockIdentifier = 2;
 * @return {?proto.iotextypes.BlockIdentifier}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.getBlockidentifier = function() {
  return /** @type{?proto.iotextypes.BlockIdentifier} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.BlockIdentifier, 2));
};


/**
 * @param {?proto.iotextypes.BlockIdentifier|undefined} value
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} returns this
*/
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.setBlockidentifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetTransactionLogByBlockHeightResponse} returns this
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.clearBlockidentifier = function() {
  return this.setBlockidentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetTransactionLogByBlockHeightResponse.prototype.hasBlockidentifier = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.StreamBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.StreamBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.StreamBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.StreamBlocksRequest}
 */
proto.iotexapi.StreamBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.StreamBlocksRequest;
  return proto.iotexapi.StreamBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.StreamBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.StreamBlocksRequest}
 */
proto.iotexapi.StreamBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.StreamBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.StreamBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.StreamBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.StreamBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.StreamBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.StreamBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto.iotexapi.BlockInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.StreamBlocksResponse}
 */
proto.iotexapi.StreamBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.StreamBlocksResponse;
  return proto.iotexapi.StreamBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.StreamBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.StreamBlocksResponse}
 */
proto.iotexapi.StreamBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.BlockInfo;
      reader.readMessage(value,proto.iotexapi.BlockInfo.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.StreamBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.StreamBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.StreamBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.BlockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockInfo block = 1;
 * @return {?proto.iotexapi.BlockInfo}
 */
proto.iotexapi.StreamBlocksResponse.prototype.getBlock = function() {
  return /** @type{?proto.iotexapi.BlockInfo} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.BlockInfo, 1));
};


/**
 * @param {?proto.iotexapi.BlockInfo|undefined} value
 * @return {!proto.iotexapi.StreamBlocksResponse} returns this
*/
proto.iotexapi.StreamBlocksResponse.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.StreamBlocksResponse} returns this
 */
proto.iotexapi.StreamBlocksResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.StreamBlocksResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.StreamLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.StreamLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.StreamLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.iotexapi.LogsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.StreamLogsRequest}
 */
proto.iotexapi.StreamLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.StreamLogsRequest;
  return proto.iotexapi.StreamLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.StreamLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.StreamLogsRequest}
 */
proto.iotexapi.StreamLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.LogsFilter;
      reader.readMessage(value,proto.iotexapi.LogsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.StreamLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.StreamLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.StreamLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.LogsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional LogsFilter filter = 1;
 * @return {?proto.iotexapi.LogsFilter}
 */
proto.iotexapi.StreamLogsRequest.prototype.getFilter = function() {
  return /** @type{?proto.iotexapi.LogsFilter} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.LogsFilter, 1));
};


/**
 * @param {?proto.iotexapi.LogsFilter|undefined} value
 * @return {!proto.iotexapi.StreamLogsRequest} returns this
*/
proto.iotexapi.StreamLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.StreamLogsRequest} returns this
 */
proto.iotexapi.StreamLogsRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.StreamLogsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.StreamLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.StreamLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.StreamLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    log: (f = msg.getLog()) && proto_types_action_pb.Log.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.StreamLogsResponse}
 */
proto.iotexapi.StreamLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.StreamLogsResponse;
  return proto.iotexapi.StreamLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.StreamLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.StreamLogsResponse}
 */
proto.iotexapi.StreamLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Log;
      reader.readMessage(value,proto_types_action_pb.Log.deserializeBinaryFromReader);
      msg.setLog(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.StreamLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.StreamLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.StreamLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.StreamLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.Log.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.Log log = 1;
 * @return {?proto.iotextypes.Log}
 */
proto.iotexapi.StreamLogsResponse.prototype.getLog = function() {
  return /** @type{?proto.iotextypes.Log} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.Log, 1));
};


/**
 * @param {?proto.iotextypes.Log|undefined} value
 * @return {!proto.iotexapi.StreamLogsResponse} returns this
*/
proto.iotexapi.StreamLogsResponse.prototype.setLog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.StreamLogsResponse} returns this
 */
proto.iotexapi.StreamLogsResponse.prototype.clearLog = function() {
  return this.setLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.StreamLogsResponse.prototype.hasLog = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetActPoolActionsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActPoolActionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActPoolActionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActPoolActionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActPoolActionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionhashesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActPoolActionsRequest}
 */
proto.iotexapi.GetActPoolActionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActPoolActionsRequest;
  return proto.iotexapi.GetActPoolActionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActPoolActionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActPoolActionsRequest}
 */
proto.iotexapi.GetActPoolActionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addActionhashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActPoolActionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActPoolActionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActPoolActionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActPoolActionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionhashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string actionHashes = 1;
 * @return {!Array<string>}
 */
proto.iotexapi.GetActPoolActionsRequest.prototype.getActionhashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.iotexapi.GetActPoolActionsRequest} returns this
 */
proto.iotexapi.GetActPoolActionsRequest.prototype.setActionhashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.iotexapi.GetActPoolActionsRequest} returns this
 */
proto.iotexapi.GetActPoolActionsRequest.prototype.addActionhashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetActPoolActionsRequest} returns this
 */
proto.iotexapi.GetActPoolActionsRequest.prototype.clearActionhashesList = function() {
  return this.setActionhashesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetActPoolActionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetActPoolActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActPoolActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActPoolActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActPoolActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto_types_action_pb.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetActPoolActionsResponse}
 */
proto.iotexapi.GetActPoolActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActPoolActionsResponse;
  return proto.iotexapi.GetActPoolActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActPoolActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActPoolActionsResponse}
 */
proto.iotexapi.GetActPoolActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.Action;
      reader.readMessage(value,proto_types_action_pb.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetActPoolActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActPoolActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActPoolActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActPoolActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_types_action_pb.Action.serializeBinaryToWriter
    );
  }
};


/**
 * repeated iotextypes.Action actions = 1;
 * @return {!Array<!proto.iotextypes.Action>}
 */
proto.iotexapi.GetActPoolActionsResponse.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.iotextypes.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_types_action_pb.Action, 1));
};


/**
 * @param {!Array<!proto.iotextypes.Action>} value
 * @return {!proto.iotexapi.GetActPoolActionsResponse} returns this
*/
proto.iotexapi.GetActPoolActionsResponse.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iotextypes.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.Action}
 */
proto.iotexapi.GetActPoolActionsResponse.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iotextypes.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetActPoolActionsResponse} returns this
 */
proto.iotexapi.GetActPoolActionsResponse.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetElectionBucketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetElectionBucketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetElectionBucketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetElectionBucketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochnum: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetElectionBucketsRequest}
 */
proto.iotexapi.GetElectionBucketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetElectionBucketsRequest;
  return proto.iotexapi.GetElectionBucketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetElectionBucketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetElectionBucketsRequest}
 */
proto.iotexapi.GetElectionBucketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetElectionBucketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetElectionBucketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetElectionBucketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetElectionBucketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochnum();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 epochNum = 1;
 * @return {number}
 */
proto.iotexapi.GetElectionBucketsRequest.prototype.getEpochnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetElectionBucketsRequest} returns this
 */
proto.iotexapi.GetElectionBucketsRequest.prototype.setEpochnum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetElectionBucketsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetElectionBucketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetElectionBucketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetElectionBucketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetElectionBucketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketsList: jspb.Message.toObjectList(msg.getBucketsList(),
    proto_types_election_pb.ElectionBucket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetElectionBucketsResponse}
 */
proto.iotexapi.GetElectionBucketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetElectionBucketsResponse;
  return proto.iotexapi.GetElectionBucketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetElectionBucketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetElectionBucketsResponse}
 */
proto.iotexapi.GetElectionBucketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_election_pb.ElectionBucket;
      reader.readMessage(value,proto_types_election_pb.ElectionBucket.deserializeBinaryFromReader);
      msg.addBuckets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetElectionBucketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetElectionBucketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetElectionBucketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetElectionBucketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_types_election_pb.ElectionBucket.serializeBinaryToWriter
    );
  }
};


/**
 * repeated iotextypes.ElectionBucket buckets = 1;
 * @return {!Array<!proto.iotextypes.ElectionBucket>}
 */
proto.iotexapi.GetElectionBucketsResponse.prototype.getBucketsList = function() {
  return /** @type{!Array<!proto.iotextypes.ElectionBucket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_types_election_pb.ElectionBucket, 1));
};


/**
 * @param {!Array<!proto.iotextypes.ElectionBucket>} value
 * @return {!proto.iotexapi.GetElectionBucketsResponse} returns this
*/
proto.iotexapi.GetElectionBucketsResponse.prototype.setBucketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iotextypes.ElectionBucket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.ElectionBucket}
 */
proto.iotexapi.GetElectionBucketsResponse.prototype.addBuckets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iotextypes.ElectionBucket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.iotexapi.GetElectionBucketsResponse} returns this
 */
proto.iotexapi.GetElectionBucketsResponse.prototype.clearBucketsList = function() {
  return this.setBucketsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetEvmTransfersByActionHashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionhash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashRequest}
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetEvmTransfersByActionHashRequest;
  return proto.iotexapi.GetEvmTransfersByActionHashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashRequest}
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetEvmTransfersByActionHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string actionHash = 1;
 * @return {string}
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.prototype.getActionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashRequest} returns this
 */
proto.iotexapi.GetEvmTransfersByActionHashRequest.prototype.setActionhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetEvmTransfersByActionHashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionevmtransfers: (f = msg.getActionevmtransfers()) && proto_types_action_pb.ActionEvmTransfer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashResponse}
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetEvmTransfersByActionHashResponse;
  return proto.iotexapi.GetEvmTransfersByActionHashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashResponse}
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.ActionEvmTransfer;
      reader.readMessage(value,proto_types_action_pb.ActionEvmTransfer.deserializeBinaryFromReader);
      msg.setActionevmtransfers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetEvmTransfersByActionHashResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionevmtransfers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.ActionEvmTransfer.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.ActionEvmTransfer actionEvmTransfers = 1;
 * @return {?proto.iotextypes.ActionEvmTransfer}
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.prototype.getActionevmtransfers = function() {
  return /** @type{?proto.iotextypes.ActionEvmTransfer} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.ActionEvmTransfer, 1));
};


/**
 * @param {?proto.iotextypes.ActionEvmTransfer|undefined} value
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashResponse} returns this
*/
proto.iotexapi.GetEvmTransfersByActionHashResponse.prototype.setActionevmtransfers = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetEvmTransfersByActionHashResponse} returns this
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.prototype.clearActionevmtransfers = function() {
  return this.setActionevmtransfers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetEvmTransfersByActionHashResponse.prototype.hasActionevmtransfers = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetEvmTransfersByBlockHeightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockheight: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetEvmTransfersByBlockHeightRequest;
  return proto.iotexapi.GetEvmTransfersByBlockHeightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockheight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetEvmTransfersByBlockHeightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 blockHeight = 1;
 * @return {number}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} returns this
 */
proto.iotexapi.GetEvmTransfersByBlockHeightRequest.prototype.setBlockheight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetEvmTransfersByBlockHeightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockevmtransfers: (f = msg.getBlockevmtransfers()) && proto_types_action_pb.BlockEvmTransfer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetEvmTransfersByBlockHeightResponse;
  return proto.iotexapi.GetEvmTransfersByBlockHeightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_types_action_pb.BlockEvmTransfer;
      reader.readMessage(value,proto_types_action_pb.BlockEvmTransfer.deserializeBinaryFromReader);
      msg.setBlockevmtransfers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetEvmTransfersByBlockHeightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockevmtransfers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_action_pb.BlockEvmTransfer.serializeBinaryToWriter
    );
  }
};


/**
 * optional iotextypes.BlockEvmTransfer blockEvmTransfers = 1;
 * @return {?proto.iotextypes.BlockEvmTransfer}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.prototype.getBlockevmtransfers = function() {
  return /** @type{?proto.iotextypes.BlockEvmTransfer} */ (
    jspb.Message.getWrapperField(this, proto_types_action_pb.BlockEvmTransfer, 1));
};


/**
 * @param {?proto.iotextypes.BlockEvmTransfer|undefined} value
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse} returns this
*/
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.prototype.setBlockevmtransfers = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.iotexapi.GetEvmTransfersByBlockHeightResponse} returns this
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.prototype.clearBlockevmtransfers = function() {
  return this.setBlockevmtransfers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.iotexapi.GetEvmTransfersByBlockHeightResponse.prototype.hasBlockevmtransfers = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.iotexapi);
