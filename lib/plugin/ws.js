"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WsSignerPlugin = void 0;

var _window = _interopRequireDefault(require("global/window"));

var _isomorphicWs = _interopRequireDefault(require("isomorphic-ws"));

var _account = require("../account/account");

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

// tslint:disable-next-line:insecure-random
let reqId = Math.round(Math.random() * 10000);

class WsSignerPlugin {
  constructor(provider) {
    _defineProperty(this, "ws", void 0);

    this.ws = new _isomorphicWs.default(provider, {
      rejectUnauthorized: false
    });

    this.ws.onopen = () => {
      _window.default.console.log("[antenna-ws] connected");
    };

    this.ws.onclose = () => {
      _window.default.console.log("[antenna-ws] disconnected");
    };
  }

  async signAndSend(envelop) {
    const id = reqId++;
    const req = {
      reqId: id,
      envelop: Buffer.from(envelop.bytestream()).toString("hex")
    };
    this.ws.send(JSON.stringify(req));
    return new Promise(resolve => {
      this.ws.on("message", event => {
        const resp = JSON.parse(event);

        if (resp.reqId === id) {
          resolve(resp.actionHash);
        }
      });
    });
  }

  async getAccount(address) {
    const acct = new _account.Account();
    acct.address = address;
    return acct;
  }
}

exports.WsSignerPlugin = WsSignerPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vd3MudHMiXSwibmFtZXMiOlsicmVxSWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJXc1NpZ25lclBsdWdpbiIsImNvbnN0cnVjdG9yIiwicHJvdmlkZXIiLCJ3cyIsIldlYlNvY2tldCIsInJlamVjdFVuYXV0aG9yaXplZCIsIm9ub3BlbiIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwic2lnbkFuZFNlbmQiLCJlbnZlbG9wIiwiaWQiLCJyZXEiLCJCdWZmZXIiLCJmcm9tIiwiYnl0ZXN0cmVhbSIsInRvU3RyaW5nIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uIiwiZXZlbnQiLCJyZXNwIiwicGFyc2UiLCJhY3Rpb25IYXNoIiwiZ2V0QWNjb3VudCIsImFkZHJlc3MiLCJhY2N0IiwiQWNjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFJQTtBQUNBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUEzQixDQUFaOztBQUVPLE1BQU1DLGNBQU4sQ0FBNkM7QUFHbERDLEVBQUFBLFdBQVcsQ0FBQ0MsUUFBRCxFQUFtQjtBQUFBOztBQUM1QixTQUFLQyxFQUFMLEdBQVUsSUFBSUMscUJBQUosQ0FBY0YsUUFBZCxFQUF3QjtBQUNoQ0csTUFBQUEsa0JBQWtCLEVBQUU7QUFEWSxLQUF4QixDQUFWOztBQUdBLFNBQUtGLEVBQUwsQ0FBUUcsTUFBUixHQUFpQixNQUFZO0FBQzNCQyxzQkFBT0MsT0FBUCxDQUFlQyxHQUFmLENBQW1CLHdCQUFuQjtBQUNELEtBRkQ7O0FBR0EsU0FBS04sRUFBTCxDQUFRTyxPQUFSLEdBQWtCLE1BQVk7QUFDNUJILHNCQUFPQyxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsMkJBQW5CO0FBQ0QsS0FGRDtBQUdEOztBQUVELFFBQWFFLFdBQWIsQ0FBeUJDLE9BQXpCLEVBQTREO0FBQzFELFVBQU1DLEVBQUUsR0FBR2pCLEtBQUssRUFBaEI7QUFDQSxVQUFNa0IsR0FBRyxHQUFHO0FBQ1ZsQixNQUFBQSxLQUFLLEVBQUVpQixFQURHO0FBRVZELE1BQUFBLE9BQU8sRUFBRUcsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE9BQU8sQ0FBQ0ssVUFBUixFQUFaLEVBQWtDQyxRQUFsQyxDQUEyQyxLQUEzQztBQUZDLEtBQVo7QUFJQSxTQUFLZixFQUFMLENBQVFnQixJQUFSLENBQWFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxHQUFmLENBQWI7QUFDQSxXQUFPLElBQUlRLE9BQUosQ0FBb0JDLE9BQU8sSUFBSTtBQUNwQyxXQUFLcEIsRUFBTCxDQUFRcUIsRUFBUixDQUFXLFNBQVgsRUFBdUJDLEtBQUQsSUFBbUI7QUFDdkMsY0FBTUMsSUFBSSxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBV0YsS0FBWCxDQUFiOztBQUNBLFlBQUlDLElBQUksQ0FBQzlCLEtBQUwsS0FBZWlCLEVBQW5CLEVBQXVCO0FBQ3JCVSxVQUFBQSxPQUFPLENBQUNHLElBQUksQ0FBQ0UsVUFBTixDQUFQO0FBQ0Q7QUFDRixPQUxEO0FBTUQsS0FQTSxDQUFQO0FBUUQ7O0FBRUQsUUFBYUMsVUFBYixDQUF3QkMsT0FBeEIsRUFBMkQ7QUFDekQsVUFBTUMsSUFBSSxHQUFHLElBQUlDLGdCQUFKLEVBQWI7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFPQyxJQUFQO0FBQ0Q7O0FBcENpRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCB3aW5kb3cgZnJvbSBcImdsb2JhbC93aW5kb3dcIjtcbmltcG9ydCBXZWJTb2NrZXQgZnJvbSBcImlzb21vcnBoaWMtd3NcIjtcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi4vYWNjb3VudC9hY2NvdW50XCI7XG5pbXBvcnQgeyBFbnZlbG9wIH0gZnJvbSBcIi4uL2FjdGlvbi9lbnZlbG9wXCI7XG5pbXBvcnQgeyBTaWduZXJQbHVnaW4gfSBmcm9tIFwiLi4vYWN0aW9uL21ldGhvZFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW5zZWN1cmUtcmFuZG9tXG5sZXQgcmVxSWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG5cbmV4cG9ydCBjbGFzcyBXc1NpZ25lclBsdWdpbiBpbXBsZW1lbnRzIFNpZ25lclBsdWdpbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd3M6IFdlYlNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwcm92aWRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQocHJvdmlkZXIsIHtcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLndzLm9ub3BlbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhcIlthbnRlbm5hLXdzXSBjb25uZWN0ZWRcIik7XG4gICAgfTtcbiAgICB0aGlzLndzLm9uY2xvc2UgPSAoKTogdm9pZCA9PiB7XG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coXCJbYW50ZW5uYS13c10gZGlzY29ubmVjdGVkXCIpO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnbkFuZFNlbmQoZW52ZWxvcDogRW52ZWxvcCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgaWQgPSByZXFJZCsrO1xuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIHJlcUlkOiBpZCxcbiAgICAgIGVudmVsb3A6IEJ1ZmZlci5mcm9tKGVudmVsb3AuYnl0ZXN0cmVhbSgpKS50b1N0cmluZyhcImhleFwiKVxuICAgIH07XG4gICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHJlcSkpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy53cy5vbihcIm1lc3NhZ2VcIiwgKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IEpTT04ucGFyc2UoZXZlbnQpO1xuICAgICAgICBpZiAocmVzcC5yZXFJZCA9PT0gaWQpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3AuYWN0aW9uSGFzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFjY291bnQoYWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxBY2NvdW50PiB7XG4gICAgY29uc3QgYWNjdCA9IG5ldyBBY2NvdW50KCk7XG4gICAgYWNjdC5hZGRyZXNzID0gYWRkcmVzcztcbiAgICByZXR1cm4gYWNjdDtcbiAgfVxufVxuIl19
