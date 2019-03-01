/**
 * @fileoverview gRPC-Web generated client stub for iotexapi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var action_pb = require('./action_pb.js')

var blockchain_pb = require('./blockchain_pb.js')
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
   * @private @const {!proto.iotexapi.APIServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.iotexapi.APIServiceClient(
      hostname, credentials, options);

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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_GetAccount,
      callback);
};


/**
 * @param {!proto.iotexapi.GetAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetAccountResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.getAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_GetActions,
      callback);
};


/**
 * @param {!proto.iotexapi.GetActionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetActionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.getActions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getActions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_GetBlockMetas,
      callback);
};


/**
 * @param {!proto.iotexapi.GetBlockMetasRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetBlockMetasResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.getBlockMetas =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getBlockMetas(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_GetChainMeta,
      callback);
};


/**
 * @param {!proto.iotexapi.GetChainMetaRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetChainMetaResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.getChainMeta =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getChainMeta(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_SendAction,
      callback);
};


/**
 * @param {!proto.iotexapi.SendActionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.SendActionResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.sendAction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sendAction(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_GetReceiptByAction,
      callback);
};


/**
 * @param {!proto.iotexapi.GetReceiptByActionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.GetReceiptByActionResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.getReceiptByAction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getReceiptByAction(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_ReadContract,
      callback);
};


/**
 * @param {!proto.iotexapi.ReadContractRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.ReadContractResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.readContract =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readContract(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_SuggestGasPrice,
      callback);
};


/**
 * @param {!proto.iotexapi.SuggestGasPriceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.SuggestGasPriceResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.suggestGasPrice =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.suggestGasPrice(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_EstimateGasForAction,
      callback);
};


/**
 * @param {!proto.iotexapi.EstimateGasForActionRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.EstimateGasForActionResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.estimateGasForAction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.estimateGasForAction(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_APIService_ReadState,
      callback);
};


/**
 * @param {!proto.iotexapi.ReadStateRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.iotexapi.ReadStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.iotexapi.APIServicePromiseClient.prototype.readState =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readState(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.iotexapi;

