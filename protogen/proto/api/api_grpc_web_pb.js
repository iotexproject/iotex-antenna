/**
 * @fileoverview gRPC-Web generated client stub for iotexapi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_types_action_pb = require('../../proto/types/action_pb.js')

var proto_types_blockchain_pb = require('../../proto/types/blockchain_pb.js')

var proto_types_node_pb = require('../../proto/types/node_pb.js')

var proto_types_election_pb = require('../../proto/types/election_pb.js')

var proto_types_transaction_log_pb = require('../../proto/types/transaction_log_pb.js')

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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetAccountRequest,
 *   !proto.iotexapi.GetAccountResponse>}
 */
const methodDescriptor_APIService_GetAccount = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetAccount',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetAccountRequest,
  proto.iotexapi.GetAccountResponse,
  /**
   * @param {!proto.iotexapi.GetAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetAccountRequest,
 *   !proto.iotexapi.GetAccountResponse>}
 */
const methodInfo_APIService_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetAccountResponse,
  /**
   * @param {!proto.iotexapi.GetAccountRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetAccount,
      callback);
};


/**
 * @param {!proto.iotexapi.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetAccountResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetAccount',
      request,
      metadata || {},
      methodDescriptor_APIService_GetAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetActionsRequest,
 *   !proto.iotexapi.GetActionsResponse>}
 */
const methodDescriptor_APIService_GetActions = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetActions',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetActionsRequest,
  proto.iotexapi.GetActionsResponse,
  /**
   * @param {!proto.iotexapi.GetActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetActionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetActionsRequest,
 *   !proto.iotexapi.GetActionsResponse>}
 */
const methodInfo_APIService_GetActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetActionsResponse,
  /**
   * @param {!proto.iotexapi.GetActionsRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetActions,
      callback);
};


/**
 * @param {!proto.iotexapi.GetActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetActionsResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetActions',
      request,
      metadata || {},
      methodDescriptor_APIService_GetActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetBlockMetasRequest,
 *   !proto.iotexapi.GetBlockMetasResponse>}
 */
const methodDescriptor_APIService_GetBlockMetas = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetBlockMetas',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetBlockMetasRequest,
  proto.iotexapi.GetBlockMetasResponse,
  /**
   * @param {!proto.iotexapi.GetBlockMetasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetBlockMetasResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetBlockMetasRequest,
 *   !proto.iotexapi.GetBlockMetasResponse>}
 */
const methodInfo_APIService_GetBlockMetas = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetBlockMetasResponse,
  /**
   * @param {!proto.iotexapi.GetBlockMetasRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetBlockMetas,
      callback);
};


/**
 * @param {!proto.iotexapi.GetBlockMetasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetBlockMetasResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getBlockMetas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetBlockMetas',
      request,
      metadata || {},
      methodDescriptor_APIService_GetBlockMetas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetChainMetaRequest,
 *   !proto.iotexapi.GetChainMetaResponse>}
 */
const methodDescriptor_APIService_GetChainMeta = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetChainMeta',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetChainMetaRequest,
  proto.iotexapi.GetChainMetaResponse,
  /**
   * @param {!proto.iotexapi.GetChainMetaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetChainMetaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetChainMetaRequest,
 *   !proto.iotexapi.GetChainMetaResponse>}
 */
const methodInfo_APIService_GetChainMeta = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetChainMetaResponse,
  /**
   * @param {!proto.iotexapi.GetChainMetaRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetChainMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetChainMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetChainMetaResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getChainMeta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetChainMeta',
      request,
      metadata || {},
      methodDescriptor_APIService_GetChainMeta);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetServerMetaRequest,
 *   !proto.iotexapi.GetServerMetaResponse>}
 */
const methodDescriptor_APIService_GetServerMeta = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetServerMeta',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetServerMetaRequest,
  proto.iotexapi.GetServerMetaResponse,
  /**
   * @param {!proto.iotexapi.GetServerMetaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetServerMetaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetServerMetaRequest,
 *   !proto.iotexapi.GetServerMetaResponse>}
 */
const methodInfo_APIService_GetServerMeta = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetServerMetaResponse,
  /**
   * @param {!proto.iotexapi.GetServerMetaRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetServerMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetServerMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetServerMetaResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getServerMeta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetServerMeta',
      request,
      metadata || {},
      methodDescriptor_APIService_GetServerMeta);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.SendActionRequest,
 *   !proto.iotexapi.SendActionResponse>}
 */
const methodDescriptor_APIService_SendAction = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/SendAction',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.SendActionRequest,
  proto.iotexapi.SendActionResponse,
  /**
   * @param {!proto.iotexapi.SendActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.SendActionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.SendActionRequest,
 *   !proto.iotexapi.SendActionResponse>}
 */
const methodInfo_APIService_SendAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.SendActionResponse,
  /**
   * @param {!proto.iotexapi.SendActionRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_SendAction,
      callback);
};


/**
 * @param {!proto.iotexapi.SendActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.SendActionResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.sendAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/SendAction',
      request,
      metadata || {},
      methodDescriptor_APIService_SendAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetReceiptByActionRequest,
 *   !proto.iotexapi.GetReceiptByActionResponse>}
 */
const methodDescriptor_APIService_GetReceiptByAction = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetReceiptByAction',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetReceiptByActionRequest,
  proto.iotexapi.GetReceiptByActionResponse,
  /**
   * @param {!proto.iotexapi.GetReceiptByActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetReceiptByActionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetReceiptByActionRequest,
 *   !proto.iotexapi.GetReceiptByActionResponse>}
 */
const methodInfo_APIService_GetReceiptByAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetReceiptByActionResponse,
  /**
   * @param {!proto.iotexapi.GetReceiptByActionRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetReceiptByAction,
      callback);
};


/**
 * @param {!proto.iotexapi.GetReceiptByActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetReceiptByActionResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getReceiptByAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetReceiptByAction',
      request,
      metadata || {},
      methodDescriptor_APIService_GetReceiptByAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.ReadContractRequest,
 *   !proto.iotexapi.ReadContractResponse>}
 */
const methodDescriptor_APIService_ReadContract = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/ReadContract',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.ReadContractRequest,
  proto.iotexapi.ReadContractResponse,
  /**
   * @param {!proto.iotexapi.ReadContractRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.ReadContractResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.ReadContractRequest,
 *   !proto.iotexapi.ReadContractResponse>}
 */
const methodInfo_APIService_ReadContract = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.ReadContractResponse,
  /**
   * @param {!proto.iotexapi.ReadContractRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_ReadContract,
      callback);
};


/**
 * @param {!proto.iotexapi.ReadContractRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.ReadContractResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.readContract =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/ReadContract',
      request,
      metadata || {},
      methodDescriptor_APIService_ReadContract);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.SuggestGasPriceRequest,
 *   !proto.iotexapi.SuggestGasPriceResponse>}
 */
const methodDescriptor_APIService_SuggestGasPrice = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/SuggestGasPrice',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.SuggestGasPriceRequest,
  proto.iotexapi.SuggestGasPriceResponse,
  /**
   * @param {!proto.iotexapi.SuggestGasPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.SuggestGasPriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.SuggestGasPriceRequest,
 *   !proto.iotexapi.SuggestGasPriceResponse>}
 */
const methodInfo_APIService_SuggestGasPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.SuggestGasPriceResponse,
  /**
   * @param {!proto.iotexapi.SuggestGasPriceRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_SuggestGasPrice,
      callback);
};


/**
 * @param {!proto.iotexapi.SuggestGasPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.SuggestGasPriceResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.suggestGasPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/SuggestGasPrice',
      request,
      metadata || {},
      methodDescriptor_APIService_SuggestGasPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.EstimateGasForActionRequest,
 *   !proto.iotexapi.EstimateGasForActionResponse>}
 */
const methodDescriptor_APIService_EstimateGasForAction = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/EstimateGasForAction',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.EstimateGasForActionRequest,
  proto.iotexapi.EstimateGasForActionResponse,
  /**
   * @param {!proto.iotexapi.EstimateGasForActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.EstimateGasForActionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.EstimateGasForActionRequest,
 *   !proto.iotexapi.EstimateGasForActionResponse>}
 */
const methodInfo_APIService_EstimateGasForAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.EstimateGasForActionResponse,
  /**
   * @param {!proto.iotexapi.EstimateGasForActionRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_EstimateGasForAction,
      callback);
};


/**
 * @param {!proto.iotexapi.EstimateGasForActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.EstimateGasForActionResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.estimateGasForAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/EstimateGasForAction',
      request,
      metadata || {},
      methodDescriptor_APIService_EstimateGasForAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.EstimateActionGasConsumptionRequest,
 *   !proto.iotexapi.EstimateActionGasConsumptionResponse>}
 */
const methodDescriptor_APIService_EstimateActionGasConsumption = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/EstimateActionGasConsumption',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.EstimateActionGasConsumptionRequest,
  proto.iotexapi.EstimateActionGasConsumptionResponse,
  /**
   * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.EstimateActionGasConsumptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.EstimateActionGasConsumptionRequest,
 *   !proto.iotexapi.EstimateActionGasConsumptionResponse>}
 */
const methodInfo_APIService_EstimateActionGasConsumption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.EstimateActionGasConsumptionResponse,
  /**
   * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_EstimateActionGasConsumption,
      callback);
};


/**
 * @param {!proto.iotexapi.EstimateActionGasConsumptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.EstimateActionGasConsumptionResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.estimateActionGasConsumption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/EstimateActionGasConsumption',
      request,
      metadata || {},
      methodDescriptor_APIService_EstimateActionGasConsumption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.ReadStateRequest,
 *   !proto.iotexapi.ReadStateResponse>}
 */
const methodDescriptor_APIService_ReadState = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/ReadState',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.ReadStateRequest,
  proto.iotexapi.ReadStateResponse,
  /**
   * @param {!proto.iotexapi.ReadStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.ReadStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.ReadStateRequest,
 *   !proto.iotexapi.ReadStateResponse>}
 */
const methodInfo_APIService_ReadState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.ReadStateResponse,
  /**
   * @param {!proto.iotexapi.ReadStateRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_ReadState,
      callback);
};


/**
 * @param {!proto.iotexapi.ReadStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.ReadStateResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.readState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/ReadState',
      request,
      metadata || {},
      methodDescriptor_APIService_ReadState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetEpochMetaRequest,
 *   !proto.iotexapi.GetEpochMetaResponse>}
 */
const methodDescriptor_APIService_GetEpochMeta = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetEpochMeta',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetEpochMetaRequest,
  proto.iotexapi.GetEpochMetaResponse,
  /**
   * @param {!proto.iotexapi.GetEpochMetaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetEpochMetaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetEpochMetaRequest,
 *   !proto.iotexapi.GetEpochMetaResponse>}
 */
const methodInfo_APIService_GetEpochMeta = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetEpochMetaResponse,
  /**
   * @param {!proto.iotexapi.GetEpochMetaRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetEpochMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetEpochMetaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetEpochMetaResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getEpochMeta =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetEpochMeta',
      request,
      metadata || {},
      methodDescriptor_APIService_GetEpochMeta);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetRawBlocksRequest,
 *   !proto.iotexapi.GetRawBlocksResponse>}
 */
const methodDescriptor_APIService_GetRawBlocks = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetRawBlocks',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetRawBlocksRequest,
  proto.iotexapi.GetRawBlocksResponse,
  /**
   * @param {!proto.iotexapi.GetRawBlocksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetRawBlocksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetRawBlocksRequest,
 *   !proto.iotexapi.GetRawBlocksResponse>}
 */
const methodInfo_APIService_GetRawBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetRawBlocksResponse,
  /**
   * @param {!proto.iotexapi.GetRawBlocksRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetRawBlocks,
      callback);
};


/**
 * @param {!proto.iotexapi.GetRawBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetRawBlocksResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getRawBlocks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetRawBlocks',
      request,
      metadata || {},
      methodDescriptor_APIService_GetRawBlocks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetLogsRequest,
 *   !proto.iotexapi.GetLogsResponse>}
 */
const methodDescriptor_APIService_GetLogs = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetLogs',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetLogsRequest,
  proto.iotexapi.GetLogsResponse,
  /**
   * @param {!proto.iotexapi.GetLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetLogsRequest,
 *   !proto.iotexapi.GetLogsResponse>}
 */
const methodInfo_APIService_GetLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetLogsResponse,
  /**
   * @param {!proto.iotexapi.GetLogsRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetLogs,
      callback);
};


/**
 * @param {!proto.iotexapi.GetLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetLogsResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetLogs',
      request,
      metadata || {},
      methodDescriptor_APIService_GetLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetTransactionLogByActionHashRequest,
 *   !proto.iotexapi.GetTransactionLogByActionHashResponse>}
 */
const methodDescriptor_APIService_GetTransactionLogByActionHash = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetTransactionLogByActionHash',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetTransactionLogByActionHashRequest,
  proto.iotexapi.GetTransactionLogByActionHashResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetTransactionLogByActionHashRequest,
 *   !proto.iotexapi.GetTransactionLogByActionHashResponse>}
 */
const methodInfo_APIService_GetTransactionLogByActionHash = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetTransactionLogByActionHashResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetTransactionLogByActionHashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetTransactionLogByActionHashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getTransactionLogByActionHash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetTransactionLogByActionHash',
      request,
      metadata || {},
      methodDescriptor_APIService_GetTransactionLogByActionHash,
      callback);
};


/**
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetTransactionLogByActionHashResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getTransactionLogByActionHash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetTransactionLogByActionHash',
      request,
      metadata || {},
      methodDescriptor_APIService_GetTransactionLogByActionHash);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetTransactionLogByBlockHeightRequest,
 *   !proto.iotexapi.GetTransactionLogByBlockHeightResponse>}
 */
const methodDescriptor_APIService_GetTransactionLogByBlockHeight = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetTransactionLogByBlockHeight',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetTransactionLogByBlockHeightRequest,
  proto.iotexapi.GetTransactionLogByBlockHeightResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetTransactionLogByBlockHeightRequest,
 *   !proto.iotexapi.GetTransactionLogByBlockHeightResponse>}
 */
const methodInfo_APIService_GetTransactionLogByBlockHeight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetTransactionLogByBlockHeightResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetTransactionLogByBlockHeightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetTransactionLogByBlockHeightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getTransactionLogByBlockHeight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetTransactionLogByBlockHeight',
      request,
      metadata || {},
      methodDescriptor_APIService_GetTransactionLogByBlockHeight,
      callback);
};


/**
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetTransactionLogByBlockHeightResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getTransactionLogByBlockHeight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetTransactionLogByBlockHeight',
      request,
      metadata || {},
      methodDescriptor_APIService_GetTransactionLogByBlockHeight);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.StreamBlocksRequest,
 *   !proto.iotexapi.StreamBlocksResponse>}
 */
const methodDescriptor_APIService_StreamBlocks = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/StreamBlocks',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.iotexapi.StreamBlocksRequest,
  proto.iotexapi.StreamBlocksResponse,
  /**
   * @param {!proto.iotexapi.StreamBlocksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.StreamBlocksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.StreamBlocksRequest,
 *   !proto.iotexapi.StreamBlocksResponse>}
 */
const methodInfo_APIService_StreamBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.StreamBlocksResponse,
  /**
   * @param {!proto.iotexapi.StreamBlocksRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_StreamBlocks);
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
      methodDescriptor_APIService_StreamBlocks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.StreamLogsRequest,
 *   !proto.iotexapi.StreamLogsResponse>}
 */
const methodDescriptor_APIService_StreamLogs = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/StreamLogs',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.iotexapi.StreamLogsRequest,
  proto.iotexapi.StreamLogsResponse,
  /**
   * @param {!proto.iotexapi.StreamLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.StreamLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.StreamLogsRequest,
 *   !proto.iotexapi.StreamLogsResponse>}
 */
const methodInfo_APIService_StreamLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.StreamLogsResponse,
  /**
   * @param {!proto.iotexapi.StreamLogsRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_StreamLogs);
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
      methodDescriptor_APIService_StreamLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetActPoolActionsRequest,
 *   !proto.iotexapi.GetActPoolActionsResponse>}
 */
const methodDescriptor_APIService_GetActPoolActions = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetActPoolActions',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetActPoolActionsRequest,
  proto.iotexapi.GetActPoolActionsResponse,
  /**
   * @param {!proto.iotexapi.GetActPoolActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetActPoolActionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetActPoolActionsRequest,
 *   !proto.iotexapi.GetActPoolActionsResponse>}
 */
const methodInfo_APIService_GetActPoolActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetActPoolActionsResponse,
  /**
   * @param {!proto.iotexapi.GetActPoolActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetActPoolActionsResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetActPoolActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetActPoolActionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetActPoolActionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getActPoolActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetActPoolActions',
      request,
      metadata || {},
      methodDescriptor_APIService_GetActPoolActions,
      callback);
};


/**
 * @param {!proto.iotexapi.GetActPoolActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetActPoolActionsResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getActPoolActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetActPoolActions',
      request,
      metadata || {},
      methodDescriptor_APIService_GetActPoolActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetEvmTransfersByActionHashRequest,
 *   !proto.iotexapi.GetEvmTransfersByActionHashResponse>}
 */
const methodDescriptor_APIService_GetEvmTransfersByActionHash = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetEvmTransfersByActionHash',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetEvmTransfersByActionHashRequest,
  proto.iotexapi.GetEvmTransfersByActionHashResponse,
  /**
   * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetEvmTransfersByActionHashResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetEvmTransfersByActionHashRequest,
 *   !proto.iotexapi.GetEvmTransfersByActionHashResponse>}
 */
const methodInfo_APIService_GetEvmTransfersByActionHash = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetEvmTransfersByActionHashResponse,
  /**
   * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetEvmTransfersByActionHashResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetEvmTransfersByActionHashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetEvmTransfersByActionHashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getEvmTransfersByActionHash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetEvmTransfersByActionHash',
      request,
      metadata || {},
      methodDescriptor_APIService_GetEvmTransfersByActionHash,
      callback);
};


/**
 * @param {!proto.iotexapi.GetEvmTransfersByActionHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetEvmTransfersByActionHashResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getEvmTransfersByActionHash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetEvmTransfersByActionHash',
      request,
      metadata || {},
      methodDescriptor_APIService_GetEvmTransfersByActionHash);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetEvmTransfersByBlockHeightRequest,
 *   !proto.iotexapi.GetEvmTransfersByBlockHeightResponse>}
 */
const methodDescriptor_APIService_GetEvmTransfersByBlockHeight = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetEvmTransfersByBlockHeight',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetEvmTransfersByBlockHeightRequest,
  proto.iotexapi.GetEvmTransfersByBlockHeightResponse,
  /**
   * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetEvmTransfersByBlockHeightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetEvmTransfersByBlockHeightRequest,
 *   !proto.iotexapi.GetEvmTransfersByBlockHeightResponse>}
 */
const methodInfo_APIService_GetEvmTransfersByBlockHeight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetEvmTransfersByBlockHeightResponse,
  /**
   * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetEvmTransfersByBlockHeightResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetEvmTransfersByBlockHeightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetEvmTransfersByBlockHeightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServiceClient.prototype.getEvmTransfersByBlockHeight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.APIService/GetEvmTransfersByBlockHeight',
      request,
      metadata || {},
      methodDescriptor_APIService_GetEvmTransfersByBlockHeight,
      callback);
};


/**
 * @param {!proto.iotexapi.GetEvmTransfersByBlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetEvmTransfersByBlockHeightResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getEvmTransfersByBlockHeight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetEvmTransfersByBlockHeight',
      request,
      metadata || {},
      methodDescriptor_APIService_GetEvmTransfersByBlockHeight);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetElectionBucketsRequest,
 *   !proto.iotexapi.GetElectionBucketsResponse>}
 */
const methodDescriptor_APIService_GetElectionBuckets = new grpc.web.MethodDescriptor(
  '/iotexapi.APIService/GetElectionBuckets',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetElectionBucketsRequest,
  proto.iotexapi.GetElectionBucketsResponse,
  /**
   * @param {!proto.iotexapi.GetElectionBucketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetElectionBucketsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetElectionBucketsRequest,
 *   !proto.iotexapi.GetElectionBucketsResponse>}
 */
const methodInfo_APIService_GetElectionBuckets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetElectionBucketsResponse,
  /**
   * @param {!proto.iotexapi.GetElectionBucketsRequest} request
   * @return {!Uint8Array}
   */
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
      methodDescriptor_APIService_GetElectionBuckets,
      callback);
};


/**
 * @param {!proto.iotexapi.GetElectionBucketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetElectionBucketsResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.APIServicePromiseClient.prototype.getElectionBuckets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.APIService/GetElectionBuckets',
      request,
      metadata || {},
      methodDescriptor_APIService_GetElectionBuckets);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.iotexapi.TransactionLogServiceClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.iotexapi.TransactionLogServicePromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetTransactionLogByActionHashRequest,
 *   !proto.iotexapi.GetTransactionLogByActionHashResponse>}
 */
const methodDescriptor_TransactionLogService_GetTransactionLogByActionHash = new grpc.web.MethodDescriptor(
  '/iotexapi.TransactionLogService/GetTransactionLogByActionHash',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetTransactionLogByActionHashRequest,
  proto.iotexapi.GetTransactionLogByActionHashResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetTransactionLogByActionHashRequest,
 *   !proto.iotexapi.GetTransactionLogByActionHashResponse>}
 */
const methodInfo_TransactionLogService_GetTransactionLogByActionHash = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetTransactionLogByActionHashResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByActionHashResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetTransactionLogByActionHashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetTransactionLogByActionHashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.TransactionLogServiceClient.prototype.getTransactionLogByActionHash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.TransactionLogService/GetTransactionLogByActionHash',
      request,
      metadata || {},
      methodDescriptor_TransactionLogService_GetTransactionLogByActionHash,
      callback);
};


/**
 * @param {!proto.iotexapi.GetTransactionLogByActionHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetTransactionLogByActionHashResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.TransactionLogServicePromiseClient.prototype.getTransactionLogByActionHash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.TransactionLogService/GetTransactionLogByActionHash',
      request,
      metadata || {},
      methodDescriptor_TransactionLogService_GetTransactionLogByActionHash);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.iotexapi.GetTransactionLogByBlockHeightRequest,
 *   !proto.iotexapi.GetTransactionLogByBlockHeightResponse>}
 */
const methodDescriptor_TransactionLogService_GetTransactionLogByBlockHeight = new grpc.web.MethodDescriptor(
  '/iotexapi.TransactionLogService/GetTransactionLogByBlockHeight',
  grpc.web.MethodType.UNARY,
  proto.iotexapi.GetTransactionLogByBlockHeightRequest,
  proto.iotexapi.GetTransactionLogByBlockHeightResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.iotexapi.GetTransactionLogByBlockHeightRequest,
 *   !proto.iotexapi.GetTransactionLogByBlockHeightResponse>}
 */
const methodInfo_TransactionLogService_GetTransactionLogByBlockHeight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.iotexapi.GetTransactionLogByBlockHeightResponse,
  /**
   * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.iotexapi.GetTransactionLogByBlockHeightResponse.deserializeBinary
);


/**
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.iotexapi.GetTransactionLogByBlockHeightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.iotexapi.GetTransactionLogByBlockHeightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.TransactionLogServiceClient.prototype.getTransactionLogByBlockHeight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/iotexapi.TransactionLogService/GetTransactionLogByBlockHeight',
      request,
      metadata || {},
      methodDescriptor_TransactionLogService_GetTransactionLogByBlockHeight,
      callback);
};


/**
 * @param {!proto.iotexapi.GetTransactionLogByBlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetTransactionLogByBlockHeightResponse>}
 *     Promise that resolves to the response
 */
proto.iotexapi.TransactionLogServicePromiseClient.prototype.getTransactionLogByBlockHeight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/iotexapi.TransactionLogService/GetTransactionLogByBlockHeight',
      request,
      metadata || {},
      methodDescriptor_TransactionLogService_GetTransactionLogByBlockHeight);
};


module.exports = proto.iotexapi;

