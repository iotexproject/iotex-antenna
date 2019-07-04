"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;

var _crypto = require("../crypto/crypto");

var _hash = require("../crypto/hash");

var _utils = require("./utils");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class Account {
  constructor() {
    _defineProperty(this, "address", void 0);

    _defineProperty(this, "privateKey", void 0);

    _defineProperty(this, "publicKey", void 0);
  }

  static fromPrivateKey(privateKey) {
    const obj = (0, _crypto.privateKeyToAccount)(privateKey);
    const act = new Account();
    act.address = obj.address;
    act.privateKey = obj.privateKey;
    act.publicKey = obj.publicKey;
    return act;
  }

  sign(data) {
    const h = this.hashMessage(data);
    return Buffer.from(
      (0, _crypto.makeSigner)(0)(h.toString("hex"), this.privateKey),
      "hex"
    );
  }

  recover(message, signature, preFixed) {
    let bytes = message;

    if (!preFixed) {
      bytes = this.hashMessage(message);
    } // @ts-ignore

    return (0, _crypto.recover)(bytes, signature);
  }

  hashMessage(data) {
    let bytes = data;

    if (typeof data === "string" && (0, _utils.isHexStrict)(data)) {
      bytes = (0, _utils.hexToBytes)(data);
    } // @ts-ignore

    const messageBuffer = Buffer.from(bytes);
    const preamble = `\x16IoTeX Signed Message:\n${bytes.length}`;
    const preambleBuffer = Buffer.from(preamble);
    const iotexMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return (0, _hash.hash256b)(iotexMessage);
  }
}

exports.Account = Account;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY2NvdW50L2FjY291bnQudHMiXSwibmFtZXMiOlsiQWNjb3VudCIsImZyb21Qcml2YXRlS2V5IiwicHJpdmF0ZUtleSIsIm9iaiIsImFjdCIsImFkZHJlc3MiLCJwdWJsaWNLZXkiLCJzaWduIiwiZGF0YSIsImgiLCJoYXNoTWVzc2FnZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInJlY292ZXIiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwicHJlRml4ZWQiLCJieXRlcyIsIm1lc3NhZ2VCdWZmZXIiLCJwcmVhbWJsZSIsImxlbmd0aCIsInByZWFtYmxlQnVmZmVyIiwiaW90ZXhNZXNzYWdlIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFZTyxNQUFNQSxPQUFOLENBQWtDO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUt2QyxTQUFjQyxjQUFkLENBQTZCQyxVQUE3QixFQUEyRDtBQUN6RCxVQUFNQyxHQUFHLEdBQUcsaUNBQW9CRCxVQUFwQixDQUFaO0FBQ0EsVUFBTUUsR0FBRyxHQUFHLElBQUlKLE9BQUosRUFBWjtBQUNBSSxJQUFBQSxHQUFHLENBQUNDLE9BQUosR0FBY0YsR0FBRyxDQUFDRSxPQUFsQjtBQUNBRCxJQUFBQSxHQUFHLENBQUNGLFVBQUosR0FBaUJDLEdBQUcsQ0FBQ0QsVUFBckI7QUFDQUUsSUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCSCxHQUFHLENBQUNHLFNBQXBCO0FBQ0EsV0FBT0YsR0FBUDtBQUNEOztBQUVNRyxFQUFBQSxJQUFQLENBQVlDLElBQVosRUFBd0Q7QUFDdEQsVUFBTUMsQ0FBQyxHQUFHLEtBQUtDLFdBQUwsQ0FBaUJGLElBQWpCLENBQVY7QUFDQSxXQUFPRyxNQUFNLENBQUNDLElBQVAsQ0FDTCx3QkFBVyxDQUFYLEVBQWNILENBQUMsQ0FBQ0ksUUFBRixDQUFXLEtBQVgsQ0FBZCxFQUFpQyxLQUFLWCxVQUF0QyxDQURLLEVBRUwsS0FGSyxDQUFQO0FBSUQ7O0FBRU1ZLEVBQUFBLE9BQVAsQ0FDRUMsT0FERixFQUVFQyxTQUZGLEVBR0VDLFFBSEYsRUFJVTtBQUNSLFFBQUlDLEtBQUssR0FBR0gsT0FBWjs7QUFDQSxRQUFJLENBQUNFLFFBQUwsRUFBZTtBQUNiQyxNQUFBQSxLQUFLLEdBQUcsS0FBS1IsV0FBTCxDQUFpQkssT0FBakIsQ0FBUjtBQUNELEtBSk8sQ0FLUjs7O0FBQ0EsV0FBTyxxQkFBUUcsS0FBUixFQUFlRixTQUFmLENBQVA7QUFDRDs7QUFFTU4sRUFBQUEsV0FBUCxDQUFtQkYsSUFBbkIsRUFBK0Q7QUFDN0QsUUFBSVUsS0FBSyxHQUFHVixJQUFaOztBQUNBLFFBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0Qix3QkFBWUEsSUFBWixDQUFoQyxFQUFtRDtBQUNqRFUsTUFBQUEsS0FBSyxHQUFHLHVCQUFXVixJQUFYLENBQVI7QUFDRCxLQUo0RCxDQU03RDs7O0FBQ0EsVUFBTVcsYUFBYSxHQUFHUixNQUFNLENBQUNDLElBQVAsQ0FBWU0sS0FBWixDQUF0QjtBQUNBLFVBQU1FLFFBQVEsR0FBSSw4QkFBNkJGLEtBQUssQ0FBQ0csTUFBTyxFQUE1RDtBQUNBLFVBQU1DLGNBQWMsR0FBR1gsTUFBTSxDQUFDQyxJQUFQLENBQVlRLFFBQVosQ0FBdkI7QUFDQSxVQUFNRyxZQUFZLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLENBQUNGLGNBQUQsRUFBaUJILGFBQWpCLENBQWQsQ0FBckI7QUFDQSxXQUFPLG9CQUFTSSxZQUFULENBQVA7QUFDRDs7QUEvQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVNpZ25lciwgcHJpdmF0ZUtleVRvQWNjb3VudCwgcmVjb3ZlciB9IGZyb20gXCIuLi9jcnlwdG8vY3J5cHRvXCI7XG5pbXBvcnQgeyBoYXNoMjU2YiB9IGZyb20gXCIuLi9jcnlwdG8vaGFzaFwiO1xuaW1wb3J0IHsgaGV4VG9CeXRlcywgaXNIZXhTdHJpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwcml2YXRlS2V5OiBzdHJpbmc7XG4gIHB1YmxpY0tleTogc3RyaW5nO1xuXG4gIHNpZ24oZGF0YTogc3RyaW5nIHwgQnVmZmVyIHwgVWludDhBcnJheSk6IEJ1ZmZlcjtcbiAgcmVjb3ZlcihtZXNzYWdlOiBzdHJpbmcsIHNpZ25hdHVyZTogQnVmZmVyLCBwcmVGaXhlZDogYm9vbGVhbik6IFN0cmluZztcbiAgaGFzaE1lc3NhZ2UoZGF0YTogc3RyaW5nIHwgQnVmZmVyIHwgVWludDhBcnJheSk6IEJ1ZmZlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEFjY291bnQgaW1wbGVtZW50cyBJQWNjb3VudCB7XG4gIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBwcml2YXRlS2V5OiBzdHJpbmc7XG4gIHB1YmxpYyBwdWJsaWNLZXk6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGljIGZyb21Qcml2YXRlS2V5KHByaXZhdGVLZXk6IHN0cmluZyk6IElBY2NvdW50IHtcbiAgICBjb25zdCBvYmogPSBwcml2YXRlS2V5VG9BY2NvdW50KHByaXZhdGVLZXkpO1xuICAgIGNvbnN0IGFjdCA9IG5ldyBBY2NvdW50KCk7XG4gICAgYWN0LmFkZHJlc3MgPSBvYmouYWRkcmVzcztcbiAgICBhY3QucHJpdmF0ZUtleSA9IG9iai5wcml2YXRlS2V5O1xuICAgIGFjdC5wdWJsaWNLZXkgPSBvYmoucHVibGljS2V5O1xuICAgIHJldHVybiBhY3Q7XG4gIH1cblxuICBwdWJsaWMgc2lnbihkYXRhOiBzdHJpbmcgfCBCdWZmZXIgfCBVaW50OEFycmF5KTogQnVmZmVyIHtcbiAgICBjb25zdCBoID0gdGhpcy5oYXNoTWVzc2FnZShkYXRhKTtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oXG4gICAgICBtYWtlU2lnbmVyKDApKGgudG9TdHJpbmcoXCJoZXhcIiksIHRoaXMucHJpdmF0ZUtleSksXG4gICAgICBcImhleFwiXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZWNvdmVyKFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IEJ1ZmZlciB8IFVpbnQ4QXJyYXksXG4gICAgc2lnbmF0dXJlOiBCdWZmZXIsXG4gICAgcHJlRml4ZWQ6IGJvb2xlYW5cbiAgKTogU3RyaW5nIHtcbiAgICBsZXQgYnl0ZXMgPSBtZXNzYWdlO1xuICAgIGlmICghcHJlRml4ZWQpIHtcbiAgICAgIGJ5dGVzID0gdGhpcy5oYXNoTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiByZWNvdmVyKGJ5dGVzLCBzaWduYXR1cmUpO1xuICB9XG5cbiAgcHVibGljIGhhc2hNZXNzYWdlKGRhdGE6IHN0cmluZyB8IEJ1ZmZlciB8IFVpbnQ4QXJyYXkpOiBCdWZmZXIge1xuICAgIGxldCBieXRlcyA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICYmIGlzSGV4U3RyaWN0KGRhdGEpKSB7XG4gICAgICBieXRlcyA9IGhleFRvQnl0ZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IG1lc3NhZ2VCdWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgY29uc3QgcHJlYW1ibGUgPSBgXFx4MTZJb1RlWCBTaWduZWQgTWVzc2FnZTpcXG4ke2J5dGVzLmxlbmd0aH1gO1xuICAgIGNvbnN0IHByZWFtYmxlQnVmZmVyID0gQnVmZmVyLmZyb20ocHJlYW1ibGUpO1xuICAgIGNvbnN0IGlvdGV4TWVzc2FnZSA9IEJ1ZmZlci5jb25jYXQoW3ByZWFtYmxlQnVmZmVyLCBtZXNzYWdlQnVmZmVyXSk7XG4gICAgcmV0dXJuIGhhc2gyNTZiKGlvdGV4TWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==
