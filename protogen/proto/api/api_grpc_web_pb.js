/**
 * @fileoverview gRPC-Web generated client stub for iotexapi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var proto_types_action_pb = require('../../proto/types/action_pb.js')

var proto_types_blockchain_pb = require('../../proto/types/blockchain_pb.js')

var proto_types_node_pb = require('../../proto/types/node_pb.js')

var proto_types_election_pb = require('../../proto/types/election_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.iotexapi = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.iotexapi.APIServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.iotexapi.APIServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetAccountRequest,
 *   !proto.iotexapi.GetAccountResponse>}
 */
const methodInfo_APIService_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetAccountResponse,
  /** @param {!proto.iotexapi.GetAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetAccountResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetAccount',
      request,
      metadata || {},
      methodInfo_APIService_GetAccount,
      callback);
};


/**
 * @param {!proto.iotexapi.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetAccount',
      request,
      metadata || {},
      methodInfo_APIService_GetAccount);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetActionsRequest,
 *   !proto.iotexapi.GetActionsResponse>}
 */
const methodInfo_APIService_GetActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetActionsResponse,
  /** @param {!proto.iotexapi.GetActionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetActionsResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetActionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetActionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetActions',
      request,
      metadata || {},
      methodInfo_APIService_GetActions,
      callback);
};


/**
 * @param {!proto.iotexapi.GetActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetActionsResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetActions',
      request,
      metadata || {},
      methodInfo_APIService_GetActions);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetBlockMetasRequest,
 *   !proto.iotexapi.GetBlockMetasResponse>}
 */
const methodInfo_APIService_GetBlockMetas = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetBlockMetasResponse,
  /** @param {!proto.iotexapi.GetBlockMetasRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetBlockMetasResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetBlockMetasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetBlockMetasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetBlockMetasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getBlockMetas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetBlockMetas',
      request,
      metadata || {},
      methodInfo_APIService_GetBlockMetas,
      callback);
};


/**
 * @param {!proto.iotexapi.GetBlockMetasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetBlockMetasResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getBlockMetas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetBlockMetas',
      request,
      metadata || {},
      methodInfo_APIService_GetBlockMetas);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetChainMetaRequest,
 *   !proto.iotexapi.GetChainMetaResponse>}
 */
const methodInfo_APIService_GetChainMeta = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetChainMetaResponse,
  /** @param {!proto.iotexapi.GetChainMetaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetChainMetaResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetChainMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetChainMetaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetChainMetaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getChainMeta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetChainMeta',
      request,
      metadata || {},
      methodInfo_APIService_GetChainMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetChainMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetChainMetaResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getChainMeta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetChainMeta',
      request,
      metadata || {},
      methodInfo_APIService_GetChainMeta);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetServerMetaRequest,
 *   !proto.iotexapi.GetServerMetaResponse>}
 */
const methodInfo_APIService_GetServerMeta = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetServerMetaResponse,
  /** @param {!proto.iotexapi.GetServerMetaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetServerMetaResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetServerMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetServerMetaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetServerMetaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getServerMeta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetServerMeta',
      request,
      metadata || {},
      methodInfo_APIService_GetServerMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetServerMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetServerMetaResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getServerMeta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetServerMeta',
      request,
      metadata || {},
      methodInfo_APIService_GetServerMeta);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.SendActionRequest,
 *   !proto.iotexapi.SendActionResponse>}
 */
const methodInfo_APIService_SendAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.SendActionResponse,
  /** @param {!proto.iotexapi.SendActionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.SendActionResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.SendActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.SendActionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.SendActionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.sendAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/SendAction',
      request,
      metadata || {},
      methodInfo_APIService_SendAction,
      callback);
};


/**
 * @param {!proto.iotexapi.SendActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.SendActionResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.sendAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/SendAction',
      request,
      metadata || {},
      methodInfo_APIService_SendAction);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetReceiptByActionRequest,
 *   !proto.iotexapi.GetReceiptByActionResponse>}
 */
const methodInfo_APIService_GetReceiptByAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetReceiptByActionResponse,
  /** @param {!proto.iotexapi.GetReceiptByActionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetReceiptByActionResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetReceiptByActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetReceiptByActionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetReceiptByActionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getReceiptByAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetReceiptByAction',
      request,
      metadata || {},
      methodInfo_APIService_GetReceiptByAction,
      callback);
};


/**
 * @param {!proto.iotexapi.GetReceiptByActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetReceiptByActionResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getReceiptByAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetReceiptByAction',
      request,
      metadata || {},
      methodInfo_APIService_GetReceiptByAction);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.ReadContractRequest,
 *   !proto.iotexapi.ReadContractResponse>}
 */
const methodInfo_APIService_ReadContract = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.ReadContractResponse,
  /** @param {!proto.iotexapi.ReadContractRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.ReadContractResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.ReadContractRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.ReadContractResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.ReadContractResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.readContract =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/ReadContract',
      request,
      metadata || {},
      methodInfo_APIService_ReadContract,
      callback);
};


/**
 * @param {!proto.iotexapi.ReadContractRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.ReadContractResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.readContract =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/ReadContract',
      request,
      metadata || {},
      methodInfo_APIService_ReadContract);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.SuggestGasPriceRequest,
 *   !proto.iotexapi.SuggestGasPriceResponse>}
 */
const methodInfo_APIService_SuggestGasPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.SuggestGasPriceResponse,
  /** @param {!proto.iotexapi.SuggestGasPriceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.SuggestGasPriceResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.SuggestGasPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.SuggestGasPriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.SuggestGasPriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.suggestGasPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/SuggestGasPrice',
      request,
      metadata || {},
      methodInfo_APIService_SuggestGasPrice,
      callback);
};


/**
 * @param {!proto.iotexapi.SuggestGasPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.SuggestGasPriceResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.suggestGasPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/SuggestGasPrice',
      request,
      metadata || {},
      methodInfo_APIService_SuggestGasPrice);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.EstimateGasForActionRequest,
 *   !proto.iotexapi.EstimateGasForActionResponse>}
 */
const methodInfo_APIService_EstimateGasForAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.EstimateGasForActionResponse,
  /** @param {!proto.iotexapi.EstimateGasForActionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.EstimateGasForActionResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.EstimateGasForActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.EstimateGasForActionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.EstimateGasForActionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.estimateGasForAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/EstimateGasForAction',
      request,
      metadata || {},
      methodInfo_APIService_EstimateGasForAction,
      callback);
};


/**
 * @param {!proto.iotexapi.EstimateGasForActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.EstimateGasForActionResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.estimateGasForAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/EstimateGasForAction',
      request,
      metadata || {},
      methodInfo_APIService_EstimateGasForAction);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.EstimateActionGasConsumptionRequest,
 *   !proto.iotexapi.EstimateActionGasConsumptionResponse>}
 */
const methodInfo_APIService_EstimateActionGasConsumption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.EstimateActionGasConsumptionResponse,
  /** @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.EstimateActionGasConsumptionResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.EstimateActionGasConsumptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.EstimateActionGasConsumptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.estimateActionGasConsumption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/EstimateActionGasConsumption',
      request,
      metadata || {},
      methodInfo_APIService_EstimateActionGasConsumption,
      callback);
};


/**
 * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.EstimateActionGasConsumptionResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.estimateActionGasConsumption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/EstimateActionGasConsumption',
      request,
      metadata || {},
      methodInfo_APIService_EstimateActionGasConsumption);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.ReadStateRequest,
 *   !proto.iotexapi.ReadStateResponse>}
 */
const methodInfo_APIService_ReadState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.ReadStateResponse,
  /** @param {!proto.iotexapi.ReadStateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.ReadStateResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.ReadStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.ReadStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.ReadStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.readState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/ReadState',
      request,
      metadata || {},
      methodInfo_APIService_ReadState,
      callback);
};


/**
 * @param {!proto.iotexapi.ReadStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.ReadStateResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.readState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/ReadState',
      request,
      metadata || {},
      methodInfo_APIService_ReadState);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetEpochMetaRequest,
 *   !proto.iotexapi.GetEpochMetaResponse>}
 */
const methodInfo_APIService_GetEpochMeta = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetEpochMetaResponse,
  /** @param {!proto.iotexapi.GetEpochMetaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetEpochMetaResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetEpochMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetEpochMetaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetEpochMetaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getEpochMeta =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetEpochMeta',
      request,
      metadata || {},
      methodInfo_APIService_GetEpochMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetEpochMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetEpochMetaResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getEpochMeta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetEpochMeta',
      request,
      metadata || {},
      methodInfo_APIService_GetEpochMeta);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetRawBlocksRequest,
 *   !proto.iotexapi.GetRawBlocksResponse>}
 */
const methodInfo_APIService_GetRawBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetRawBlocksResponse,
  /** @param {!proto.iotexapi.GetRawBlocksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetRawBlocksResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetRawBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetRawBlocksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetRawBlocksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getRawBlocks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetRawBlocks',
      request,
      metadata || {},
      methodInfo_APIService_GetRawBlocks,
      callback);
};


/**
 * @param {!proto.iotexapi.GetRawBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetRawBlocksResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getRawBlocks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetRawBlocks',
      request,
      metadata || {},
      methodInfo_APIService_GetRawBlocks);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetLogsRequest,
 *   !proto.iotexapi.GetLogsResponse>}
 */
const methodInfo_APIService_GetLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetLogsResponse,
  /** @param {!proto.iotexapi.GetLogsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetLogsResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetLogs',
      request,
      metadata || {},
      methodInfo_APIService_GetLogs,
      callback);
};


/**
 * @param {!proto.iotexapi.GetLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetLogs',
      request,
      metadata || {},
      methodInfo_APIService_GetLogs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetVotesRequest,
 *   !proto.iotexapi.GetVotesResponse>}
 */
const methodInfo_APIService_GetVotes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetVotesResponse,
  /** @param {!proto.iotexapi.GetVotesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetVotesResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetVotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetVotesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetVotesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getVotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetVotes',
      request,
      metadata || {},
      methodInfo_APIService_GetVotes,
      callback);
};


/**
 * @param {!proto.iotexapi.GetVotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetVotesResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getVotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetVotes',
      request,
      metadata || {},
      methodInfo_APIService_GetVotes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.StreamBlocksRequest,
 *   !proto.iotexapi.StreamBlocksResponse>}
 */
const methodInfo_APIService_StreamBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.StreamBlocksResponse,
  /** @param {!proto.iotexapi.StreamBlocksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.StreamBlocksResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.StreamBlocksRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.StreamBlocksResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.streamBlocks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/iotexapi.APIService/StreamBlocks',
      request,
      metadata || {},
      methodInfo_APIService_StreamBlocks);
};


/**
 * @param {!proto.iotexapi.StreamBlocksRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.StreamBlocksResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.streamBlocks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/iotexapi.APIService/StreamBlocks',
      request,
      metadata || {},
      methodInfo_APIService_StreamBlocks);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.StreamLogsRequest,
 *   !proto.iotexapi.StreamLogsResponse>}
 */
const methodInfo_APIService_StreamLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.StreamLogsResponse,
  /** @param {!proto.iotexapi.StreamLogsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.StreamLogsResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.StreamLogsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.StreamLogsResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.streamLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/iotexapi.APIService/StreamLogs',
      request,
      metadata || {},
      methodInfo_APIService_StreamLogs);
};


/**
 * @param {!proto.iotexapi.StreamLogsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.StreamLogsResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.streamLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/iotexapi.APIService/StreamLogs',
      request,
      metadata || {},
      methodInfo_APIService_StreamLogs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetElectionBucketsRequest,
 *   !proto.iotexapi.GetElectionBucketsResponse>}
 */
const methodInfo_APIService_GetElectionBuckets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetElectionBucketsResponse,
  /** @param {!proto.iotexapi.GetElectionBucketsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetElectionBucketsResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetElectionBucketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetElectionBucketsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetElectionBucketsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getElectionBuckets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetElectionBuckets',
      request,
      metadata || {},
      methodInfo_APIService_GetElectionBuckets,
      callback);
};


/**
 * @param {!proto.iotexapi.GetElectionBucketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetElectionBucketsResponse>}
 *     A native promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getElectionBuckets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetElectionBuckets',
      request,
      metadata || {},
      methodInfo_APIService_GetElectionBuckets);
};


module.exports = proto.iotexapi;

