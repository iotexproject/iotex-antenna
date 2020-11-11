// source: proto/types/node.proto
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

goog.exportSymbol('proto.iotextypes.ServerMeta', null, global);
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
proto.iotextypes.ServerMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotextypes.ServerMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.iotextypes.ServerMeta.displayName = 'proto.iotextypes.ServerMeta';
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
proto.iotextypes.ServerMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.ServerMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.ServerMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ServerMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    packageversion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    packagecommitid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gitstatus: jspb.Message.getFieldWithDefault(msg, 3, ""),
    goversion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buildtime: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.iotextypes.ServerMeta}
 */
proto.iotextypes.ServerMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.ServerMeta;
  return proto.iotextypes.ServerMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.ServerMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.ServerMeta}
 */
proto.iotextypes.ServerMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackageversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagecommitid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitstatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildtime(value);
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
proto.iotextypes.ServerMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.ServerMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.ServerMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ServerMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackageversion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPackagecommitid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGitstatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGoversion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuildtime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string packageVersion = 1;
 * @return {string}
 */
proto.iotextypes.ServerMeta.prototype.getPackageversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotextypes.ServerMeta} returns this
 */
proto.iotextypes.ServerMeta.prototype.setPackageversion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string packageCommitID = 2;
 * @return {string}
 */
proto.iotextypes.ServerMeta.prototype.getPackagecommitid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotextypes.ServerMeta} returns this
 */
proto.iotextypes.ServerMeta.prototype.setPackagecommitid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string gitStatus = 3;
 * @return {string}
 */
proto.iotextypes.ServerMeta.prototype.getGitstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotextypes.ServerMeta} returns this
 */
proto.iotextypes.ServerMeta.prototype.setGitstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string goVersion = 4;
 * @return {string}
 */
proto.iotextypes.ServerMeta.prototype.getGoversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotextypes.ServerMeta} returns this
 */
proto.iotextypes.ServerMeta.prototype.setGoversion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string buildTime = 5;
 * @return {string}
 */
proto.iotextypes.ServerMeta.prototype.getBuildtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.iotextypes.ServerMeta} returns this
 */
proto.iotextypes.ServerMeta.prototype.setBuildtime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.iotextypes);
