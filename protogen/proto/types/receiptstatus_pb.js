// source: proto/types/receiptstatus.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.iotextypes.ReceiptStatus', null, global);
/**
 * @enum {number}
 */
proto.iotextypes.ReceiptStatus = {
  FAILURE: 0,
  SUCCESS: 1,
  ERRUNKNOWN: 100,
  ERROUTOFGAS: 101,
  ERRCODESTOREOUTOFGAS: 102,
  ERRDEPTH: 103,
  ERRCONTRACTADDRESSCOLLISION: 104,
  ERRNOCOMPATIBLEINTERPRETER: 105,
  ERREXECUTIONREVERTED: 106,
  ERRMAXCODESIZEEXCEEDED: 107,
  ERRWRITEPROTECTION: 108,
  ERRLOADACCOUNT: 200,
  ERRNOTENOUGHBALANCE: 201,
  ERRINVALIDBUCKETINDEX: 202,
  ERRUNAUTHORIZEDOPERATOR: 203,
  ERRINVALIDBUCKETTYPE: 204,
  ERRCANDIDATENOTEXIST: 205,
  ERRREDUCEDURATIONBEFOREMATURITY: 206,
  ERRUNSTAKEBEFOREMATURITY: 207,
  ERRWITHDRAWBEFOREUNSTAKE: 208,
  ERRWITHDRAWBEFOREMATURITY: 209,
  ERRCANDIDATEALREADYEXIST: 210,
  ERRCANDIDATECONFLICT: 211
};

goog.object.extend(exports, proto.iotextypes);
