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

var proto_types_blockchain_pb = require('../../proto/types/blockchain_pb.js');
var proto_types_endorsement_pb = require('../../proto/types/endorsement_pb.js');
goog.exportSymbol('proto.iotextypes.BlockProposal', null, global);
goog.exportSymbol('proto.iotextypes.ConsensusMessage', null, global);
goog.exportSymbol('proto.iotextypes.ConsensusVote', null, global);
goog.exportSymbol('proto.iotextypes.ConsensusVote.Topic', null, global);

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
proto.iotextypes.BlockProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotextypes.BlockProposal.repeatedFields_, null);
};
goog.inherits(proto.iotextypes.BlockProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotextypes.BlockProposal.displayName = 'proto.iotextypes.BlockProposal';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotextypes.BlockProposal.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotextypes.BlockProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.BlockProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.BlockProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.BlockProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto_types_blockchain_pb.Block.toObject(includeInstance, f),
    endorsementsList: jspb.Message.toObjectList(msg.getEndorsementsList(),
    proto_types_endorsement_pb.Endorsement.toObject, includeInstance)
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
 * @return {!proto.iotextypes.BlockProposal}
 */
proto.iotextypes.BlockProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.BlockProposal;
  return proto.iotextypes.BlockProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.BlockProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.BlockProposal}
 */
proto.iotextypes.BlockProposal.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_types_endorsement_pb.Endorsement;
      reader.readMessage(value,proto_types_endorsement_pb.Endorsement.deserializeBinaryFromReader);
      msg.addEndorsements(value);
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
proto.iotextypes.BlockProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.BlockProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.BlockProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.BlockProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_types_blockchain_pb.Block.serializeBinaryToWriter
    );
  }
  f = message.getEndorsementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_types_endorsement_pb.Endorsement.serializeBinaryToWriter
    );
  }
};


/**
 * optional Block block = 1;
 * @return {?proto.iotextypes.Block}
 */
proto.iotextypes.BlockProposal.prototype.getBlock = function() {
  return /** @type{?proto.iotextypes.Block} */ (
    jspb.Message.getWrapperField(this, proto_types_blockchain_pb.Block, 1));
};


/** @param {?proto.iotextypes.Block|undefined} value */
proto.iotextypes.BlockProposal.prototype.setBlock = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.iotextypes.BlockProposal.prototype.clearBlock = function() {
  this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotextypes.BlockProposal.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Endorsement endorsements = 2;
 * @return {!Array<!proto.iotextypes.Endorsement>}
 */
proto.iotextypes.BlockProposal.prototype.getEndorsementsList = function() {
  return /** @type{!Array<!proto.iotextypes.Endorsement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_types_endorsement_pb.Endorsement, 2));
};


/** @param {!Array<!proto.iotextypes.Endorsement>} value */
proto.iotextypes.BlockProposal.prototype.setEndorsementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.iotextypes.Endorsement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iotextypes.Endorsement}
 */
proto.iotextypes.BlockProposal.prototype.addEndorsements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iotextypes.Endorsement, opt_index);
};


proto.iotextypes.BlockProposal.prototype.clearEndorsementsList = function() {
  this.setEndorsementsList([]);
};



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
proto.iotextypes.ConsensusVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotextypes.ConsensusVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotextypes.ConsensusVote.displayName = 'proto.iotextypes.ConsensusVote';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotextypes.ConsensusVote.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.ConsensusVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.ConsensusVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ConsensusVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockhash: msg.getBlockhash_asB64(),
    topic: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.iotextypes.ConsensusVote}
 */
proto.iotextypes.ConsensusVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.ConsensusVote;
  return proto.iotextypes.ConsensusVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.ConsensusVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.ConsensusVote}
 */
proto.iotextypes.ConsensusVote.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {!proto.iotextypes.ConsensusVote.Topic} */ (reader.readEnum());
      msg.setTopic(value);
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
proto.iotextypes.ConsensusVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.ConsensusVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.ConsensusVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ConsensusVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTopic();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.iotextypes.ConsensusVote.Topic = {
  PROPOSAL: 0,
  LOCK: 1,
  COMMIT: 2
};

/**
 * optional bytes blockHash = 1;
 * @return {string}
 */
proto.iotextypes.ConsensusVote.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blockHash = 1;
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {string}
 */
proto.iotextypes.ConsensusVote.prototype.getBlockhash_asB64 = function() {
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
proto.iotextypes.ConsensusVote.prototype.getBlockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iotextypes.ConsensusVote.prototype.setBlockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Topic topic = 2;
 * @return {!proto.iotextypes.ConsensusVote.Topic}
 */
proto.iotextypes.ConsensusVote.prototype.getTopic = function() {
  return /** @type {!proto.iotextypes.ConsensusVote.Topic} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.iotextypes.ConsensusVote.Topic} value */
proto.iotextypes.ConsensusVote.prototype.setTopic = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



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
proto.iotextypes.ConsensusMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iotextypes.ConsensusMessage.oneofGroups_);
};
goog.inherits(proto.iotextypes.ConsensusMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotextypes.ConsensusMessage.displayName = 'proto.iotextypes.ConsensusMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iotextypes.ConsensusMessage.oneofGroups_ = [[100,101]];

/**
 * @enum {number}
 */
proto.iotextypes.ConsensusMessage.MsgCase = {
  MSG_NOT_SET: 0,
  BLOCKPROPOSAL: 100,
  VOTE: 101
};

/**
 * @return {proto.iotextypes.ConsensusMessage.MsgCase}
 */
proto.iotextypes.ConsensusMessage.prototype.getMsgCase = function() {
  return /** @type {proto.iotextypes.ConsensusMessage.MsgCase} */(jspb.Message.computeOneofCase(this, proto.iotextypes.ConsensusMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iotextypes.ConsensusMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.iotextypes.ConsensusMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotextypes.ConsensusMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ConsensusMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endorsement: (f = msg.getEndorsement()) && proto_types_endorsement_pb.Endorsement.toObject(includeInstance, f),
    blockproposal: (f = msg.getBlockproposal()) && proto.iotextypes.BlockProposal.toObject(includeInstance, f),
    vote: (f = msg.getVote()) && proto.iotextypes.ConsensusVote.toObject(includeInstance, f)
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
 * @return {!proto.iotextypes.ConsensusMessage}
 */
proto.iotextypes.ConsensusMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotextypes.ConsensusMessage;
  return proto.iotextypes.ConsensusMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotextypes.ConsensusMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotextypes.ConsensusMessage}
 */
proto.iotextypes.ConsensusMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = new proto_types_endorsement_pb.Endorsement;
      reader.readMessage(value,proto_types_endorsement_pb.Endorsement.deserializeBinaryFromReader);
      msg.setEndorsement(value);
      break;
    case 100:
      var value = new proto.iotextypes.BlockProposal;
      reader.readMessage(value,proto.iotextypes.BlockProposal.deserializeBinaryFromReader);
      msg.setBlockproposal(value);
      break;
    case 101:
      var value = new proto.iotextypes.ConsensusVote;
      reader.readMessage(value,proto.iotextypes.ConsensusVote.deserializeBinaryFromReader);
      msg.setVote(value);
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
proto.iotextypes.ConsensusMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotextypes.ConsensusMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotextypes.ConsensusMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotextypes.ConsensusMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEndorsement();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_types_endorsement_pb.Endorsement.serializeBinaryToWriter
    );
  }
  f = message.getBlockproposal();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.iotextypes.BlockProposal.serializeBinaryToWriter
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.iotextypes.ConsensusVote.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.iotextypes.ConsensusMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.iotextypes.ConsensusMessage.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Endorsement endorsement = 2;
 * @return {?proto.iotextypes.Endorsement}
 */
proto.iotextypes.ConsensusMessage.prototype.getEndorsement = function() {
  return /** @type{?proto.iotextypes.Endorsement} */ (
    jspb.Message.getWrapperField(this, proto_types_endorsement_pb.Endorsement, 2));
};


/** @param {?proto.iotextypes.Endorsement|undefined} value */
proto.iotextypes.ConsensusMessage.prototype.setEndorsement = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.iotextypes.ConsensusMessage.prototype.clearEndorsement = function() {
  this.setEndorsement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotextypes.ConsensusMessage.prototype.hasEndorsement = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BlockProposal blockProposal = 100;
 * @return {?proto.iotextypes.BlockProposal}
 */
proto.iotextypes.ConsensusMessage.prototype.getBlockproposal = function() {
  return /** @type{?proto.iotextypes.BlockProposal} */ (
    jspb.Message.getWrapperField(this, proto.iotextypes.BlockProposal, 100));
};


/** @param {?proto.iotextypes.BlockProposal|undefined} value */
proto.iotextypes.ConsensusMessage.prototype.setBlockproposal = function(value) {
  jspb.Message.setOneofWrapperField(this, 100, proto.iotextypes.ConsensusMessage.oneofGroups_[0], value);
};


proto.iotextypes.ConsensusMessage.prototype.clearBlockproposal = function() {
  this.setBlockproposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotextypes.ConsensusMessage.prototype.hasBlockproposal = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional ConsensusVote vote = 101;
 * @return {?proto.iotextypes.ConsensusVote}
 */
proto.iotextypes.ConsensusMessage.prototype.getVote = function() {
  return /** @type{?proto.iotextypes.ConsensusVote} */ (
    jspb.Message.getWrapperField(this, proto.iotextypes.ConsensusVote, 101));
};


/** @param {?proto.iotextypes.ConsensusVote|undefined} value */
proto.iotextypes.ConsensusMessage.prototype.setVote = function(value) {
  jspb.Message.setOneofWrapperField(this, 101, proto.iotextypes.ConsensusMessage.oneofGroups_[0], value);
};


proto.iotextypes.ConsensusMessage.prototype.clearVote = function() {
  this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotextypes.ConsensusMessage.prototype.hasVote = function() {
  return jspb.Message.getField(this, 101) != null;
};


goog.object.extend(exports, proto.iotextypes);
