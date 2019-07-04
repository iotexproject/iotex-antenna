"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromBytes = fromBytes;
exports.fromString = fromString;

var _bech = _interopRequireDefault(require("bech32"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

class AddressV1 {
  constructor() {
    _defineProperty(this, "payload", void 0);
  }

  static prefix() {
    // TODO(tian): not sure how to deal with prefix for now
    return this.MAINNET_PREFIX;
  }

  string() {
    // @ts-ignore
    const grouped = _bech.default.toWords(this.payload);

    return _bech.default.encode(AddressV1.prefix(), grouped);
  }

  stringEth() {
    return `0x${Buffer.from(this.payload).toString("hex")}`;
  }

  bytes() {
    return this.payload;
  }
}

_defineProperty(AddressV1, "ADDRESS_LENGTH", 20);

_defineProperty(AddressV1, "MAINNET_PREFIX", "io");

_defineProperty(AddressV1, "TESTNET_PREFIX", "it");

function fromBytes(bytes) {
  if (bytes.length !== AddressV1.ADDRESS_LENGTH) {
    throw new Error(`invalid address length in bytes: ${bytes.length}`);
  }

  const addr = new AddressV1();
  addr.payload = bytes;
  return addr;
}

function fromString(addrStr) {
  const { prefix, words } = _bech.default.decode(addrStr);

  if (prefix !== AddressV1.prefix()) {
    throw new Error(
      `hrp ${prefix} and address prefix ${AddressV1.prefix()} don't match`
    );
  }

  const addr = new AddressV1();
  addr.payload = _bech.default.fromWords(words);
  return addr;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcnlwdG8vYWRkcmVzcy50cyJdLCJuYW1lcyI6WyJBZGRyZXNzVjEiLCJwcmVmaXgiLCJNQUlOTkVUX1BSRUZJWCIsInN0cmluZyIsImdyb3VwZWQiLCJiZWNoMzIiLCJ0b1dvcmRzIiwicGF5bG9hZCIsImVuY29kZSIsInN0cmluZ0V0aCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImJ5dGVzIiwiZnJvbUJ5dGVzIiwibGVuZ3RoIiwiQUREUkVTU19MRU5HVEgiLCJFcnJvciIsImFkZHIiLCJmcm9tU3RyaW5nIiwiYWRkclN0ciIsIndvcmRzIiwiZGVjb2RlIiwiZnJvbVdvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7QUFVQSxNQUFNQSxTQUFOLENBQW9DO0FBQUE7QUFBQTtBQUFBOztBQUtsQyxTQUFjQyxNQUFkLEdBQStCO0FBQzdCO0FBQ0EsV0FBTyxLQUFLQyxjQUFaO0FBQ0Q7O0FBSU1DLEVBQUFBLE1BQVAsR0FBd0I7QUFDdEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdDLGNBQU9DLE9BQVAsQ0FBZSxLQUFLQyxPQUFwQixDQUFoQjs7QUFDQSxXQUFPRixjQUFPRyxNQUFQLENBQWNSLFNBQVMsQ0FBQ0MsTUFBVixFQUFkLEVBQWtDRyxPQUFsQyxDQUFQO0FBQ0Q7O0FBRU1LLEVBQUFBLFNBQVAsR0FBMkI7QUFDekIsV0FBUSxLQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLSixPQUFqQixFQUEwQkssUUFBMUIsQ0FBbUMsS0FBbkMsQ0FBMEMsRUFBdEQ7QUFDRDs7QUFFTUMsRUFBQUEsS0FBUCxHQUEyQjtBQUN6QixXQUFPLEtBQUtOLE9BQVo7QUFDRDs7QUF4QmlDOztnQkFBOUJQLFMsb0JBQ21DLEU7O2dCQURuQ0EsUyxvQkFFbUMsSTs7Z0JBRm5DQSxTLG9CQUdtQyxJOztBQXdCbEMsU0FBU2MsU0FBVCxDQUFtQkQsS0FBbkIsRUFBZ0Q7QUFDckQsTUFBSUEsS0FBSyxDQUFDRSxNQUFOLEtBQWlCZixTQUFTLENBQUNnQixjQUEvQixFQUErQztBQUM3QyxVQUFNLElBQUlDLEtBQUosQ0FBVyxvQ0FBbUNKLEtBQUssQ0FBQ0UsTUFBTyxFQUEzRCxDQUFOO0FBQ0Q7O0FBQ0QsUUFBTUcsSUFBSSxHQUFHLElBQUlsQixTQUFKLEVBQWI7QUFDQWtCLEVBQUFBLElBQUksQ0FBQ1gsT0FBTCxHQUFlTSxLQUFmO0FBQ0EsU0FBT0ssSUFBUDtBQUNEOztBQUVNLFNBQVNDLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQStDO0FBQ3BELFFBQU07QUFBRW5CLElBQUFBLE1BQUY7QUFBVW9CLElBQUFBO0FBQVYsTUFBb0JoQixjQUFPaUIsTUFBUCxDQUFjRixPQUFkLENBQTFCOztBQUNBLE1BQUluQixNQUFNLEtBQUtELFNBQVMsQ0FBQ0MsTUFBVixFQUFmLEVBQW1DO0FBQ2pDLFVBQU0sSUFBSWdCLEtBQUosQ0FDSCxPQUFNaEIsTUFBTyx1QkFBc0JELFNBQVMsQ0FBQ0MsTUFBVixFQUFtQixjQURuRCxDQUFOO0FBR0Q7O0FBQ0QsUUFBTWlCLElBQUksR0FBRyxJQUFJbEIsU0FBSixFQUFiO0FBQ0FrQixFQUFBQSxJQUFJLENBQUNYLE9BQUwsR0FBZUYsY0FBT2tCLFNBQVAsQ0FBaUJGLEtBQWpCLENBQWY7QUFDQSxTQUFPSCxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVjaDMyIGZyb20gXCJiZWNoMzJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzcyB7XG4gIHN0cmluZygpOiBzdHJpbmc7XG5cbiAgc3RyaW5nRXRoKCk6IHN0cmluZztcblxuICBieXRlcygpOiBVaW50OEFycmF5O1xufVxuXG5jbGFzcyBBZGRyZXNzVjEgaW1wbGVtZW50cyBJQWRkcmVzcyB7XG4gIHB1YmxpYyBzdGF0aWMgQUREUkVTU19MRU5HVEg6IG51bWJlciA9IDIwO1xuICBwdWJsaWMgc3RhdGljIE1BSU5ORVRfUFJFRklYOiBzdHJpbmcgPSBcImlvXCI7XG4gIHB1YmxpYyBzdGF0aWMgVEVTVE5FVF9QUkVGSVg6IHN0cmluZyA9IFwiaXRcIjtcblxuICBwdWJsaWMgc3RhdGljIHByZWZpeCgpOiBzdHJpbmcge1xuICAgIC8vIFRPRE8odGlhbik6IG5vdCBzdXJlIGhvdyB0byBkZWFsIHdpdGggcHJlZml4IGZvciBub3dcbiAgICByZXR1cm4gdGhpcy5NQUlOTkVUX1BSRUZJWDtcbiAgfVxuXG4gIHB1YmxpYyBwYXlsb2FkOiBVaW50OEFycmF5O1xuXG4gIHB1YmxpYyBzdHJpbmcoKTogc3RyaW5nIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZ3JvdXBlZCA9IGJlY2gzMi50b1dvcmRzKHRoaXMucGF5bG9hZCk7XG4gICAgcmV0dXJuIGJlY2gzMi5lbmNvZGUoQWRkcmVzc1YxLnByZWZpeCgpLCBncm91cGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzdHJpbmdFdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDB4JHtCdWZmZXIuZnJvbSh0aGlzLnBheWxvYWQpLnRvU3RyaW5nKFwiaGV4XCIpfWA7XG4gIH1cblxuICBwdWJsaWMgYnl0ZXMoKTogVWludDhBcnJheSB7XG4gICAgcmV0dXJuIHRoaXMucGF5bG9hZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUJ5dGVzKGJ5dGVzOiBVaW50OEFycmF5KTogSUFkZHJlc3Mge1xuICBpZiAoYnl0ZXMubGVuZ3RoICE9PSBBZGRyZXNzVjEuQUREUkVTU19MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgYWRkcmVzcyBsZW5ndGggaW4gYnl0ZXM6ICR7Ynl0ZXMubGVuZ3RofWApO1xuICB9XG4gIGNvbnN0IGFkZHIgPSBuZXcgQWRkcmVzc1YxKCk7XG4gIGFkZHIucGF5bG9hZCA9IGJ5dGVzO1xuICByZXR1cm4gYWRkcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TdHJpbmcoYWRkclN0cjogc3RyaW5nKTogSUFkZHJlc3Mge1xuICBjb25zdCB7IHByZWZpeCwgd29yZHMgfSA9IGJlY2gzMi5kZWNvZGUoYWRkclN0cik7XG4gIGlmIChwcmVmaXggIT09IEFkZHJlc3NWMS5wcmVmaXgoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBocnAgJHtwcmVmaXh9IGFuZCBhZGRyZXNzIHByZWZpeCAke0FkZHJlc3NWMS5wcmVmaXgoKX0gZG9uJ3QgbWF0Y2hgXG4gICAgKTtcbiAgfVxuICBjb25zdCBhZGRyID0gbmV3IEFkZHJlc3NWMSgpO1xuICBhZGRyLnBheWxvYWQgPSBiZWNoMzIuZnJvbVdvcmRzKHdvcmRzKTtcbiAgcmV0dXJuIGFkZHI7XG59XG4iXX0=
