"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iotx = require("./iotx");

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

class Antenna {
  constructor(provider, opts) {
    _defineProperty(this, "iotx", void 0);

    this.iotx = new _iotx.Iotx(provider, {
      signer: opts && opts.signer
    });
  }

  setProvider(provider) {
    if (typeof provider === "object") {
      if (provider === this.iotx.currentProvider()) {
        return;
      }
    }

    this.iotx.setProvider(provider);
  }

  currentProvider() {
    return this.iotx.currentProvider();
  }
}

exports.default = Antenna;

_defineProperty(Antenna, "modules", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbnRlbm5hLnRzIl0sIm5hbWVzIjpbIkFudGVubmEiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwib3B0cyIsImlvdHgiLCJJb3R4Iiwic2lnbmVyIiwic2V0UHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQU9lLE1BQU1BLE9BQU4sQ0FBYztBQUczQkMsRUFBQUEsV0FBVyxDQUFDQyxRQUFELEVBQW1CQyxJQUFuQixFQUFnQztBQUFBOztBQUN6QyxTQUFLQyxJQUFMLEdBQVksSUFBSUMsVUFBSixDQUFTSCxRQUFULEVBQW1CO0FBQUVJLE1BQUFBLE1BQU0sRUFBRUgsSUFBSSxJQUFJQSxJQUFJLENBQUNHO0FBQXZCLEtBQW5CLENBQVo7QUFDRDs7QUFNTUMsRUFBQUEsV0FBUCxDQUFtQkwsUUFBbkIsRUFBd0Q7QUFDdEQsUUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLFVBQUlBLFFBQVEsS0FBSyxLQUFLRSxJQUFMLENBQVVJLGVBQVYsRUFBakIsRUFBOEM7QUFDNUM7QUFDRDtBQUNGOztBQUNELFNBQUtKLElBQUwsQ0FBVUcsV0FBVixDQUFzQkwsUUFBdEI7QUFDRDs7QUFFTU0sRUFBQUEsZUFBUCxHQUFxQztBQUNuQyxXQUFPLEtBQUtKLElBQUwsQ0FBVUksZUFBVixFQUFQO0FBQ0Q7O0FBdEIwQjs7OztnQkFBUlIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25lclBsdWdpbiB9IGZyb20gXCIuL2FjdGlvbi9tZXRob2RcIjtcbmltcG9ydCB7IElvdHggfSBmcm9tIFwiLi9pb3R4XCI7XG5pbXBvcnQgeyBJUnBjTWV0aG9kIH0gZnJvbSBcIi4vcnBjLW1ldGhvZC90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBPcHRzID0ge1xuICBzaWduZXI/OiBTaWduZXJQbHVnaW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbnRlbm5hIHtcbiAgcHVibGljIGlvdHg6IElvdHg7XG5cbiAgY29uc3RydWN0b3IocHJvdmlkZXI6IHN0cmluZywgb3B0cz86IE9wdHMpIHtcbiAgICB0aGlzLmlvdHggPSBuZXcgSW90eChwcm92aWRlciwgeyBzaWduZXI6IG9wdHMgJiYgb3B0cy5zaWduZXIgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1vZHVsZXM6IHtcbiAgICBJb3R4OiBuZXcgKGhvc3RuYW1lOiBzdHJpbmcpID0+IElvdHg7XG4gIH07XG5cbiAgcHVibGljIHNldFByb3ZpZGVyKHByb3ZpZGVyOiBzdHJpbmcgfCBJUnBjTWV0aG9kKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBwcm92aWRlciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaWYgKHByb3ZpZGVyID09PSB0aGlzLmlvdHguY3VycmVudFByb3ZpZGVyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlvdHguc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuICB9XG5cbiAgcHVibGljIGN1cnJlbnRQcm92aWRlcigpOiBJUnBjTWV0aG9kIHtcbiAgICByZXR1cm4gdGhpcy5pb3R4LmN1cnJlbnRQcm92aWRlcigpO1xuICB9XG59XG4iXX0=
