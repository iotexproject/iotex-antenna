"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accounts = void 0;

var _account = _interopRequireDefault(require("eth-lib/lib/account"));

var _account2 = require("./account");

var _wallet = _interopRequireDefault(require("./wallet"));

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

class Accounts {
  // @ts-ignore
  constructor(rpcMethod) {
    _defineProperty(this, "rpcMethod", void 0);

    _defineProperty(this, "wallet", void 0);

    this.rpcMethod = rpcMethod;
    this.wallet = new _wallet.default();
  }

  create(entropy) {
    const acct = _account.default.create(entropy);

    const privateKey = acct.privateKey.substr(2);

    const realAccount = _account2.Account.fromPrivateKey(privateKey);

    this.wallet.add(realAccount);
    return realAccount;
  }

  privateKeyToAccount(privateKey) {
    const account = _account2.Account.fromPrivateKey(privateKey);

    this.wallet.add(account);
    return account;
  }

  getAccount(address) {
    return this.wallet.get(address);
  }

  removeAccount(address) {
    return this.wallet.remove(address);
  }

  sign(data, privateKey) {
    return _account2.Account.fromPrivateKey(privateKey).sign(data);
  }
}

exports.Accounts = Accounts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY2NvdW50L2FjY291bnRzLnRzIl0sIm5hbWVzIjpbIkFjY291bnRzIiwiY29uc3RydWN0b3IiLCJycGNNZXRob2QiLCJ3YWxsZXQiLCJXYWxsZXQiLCJjcmVhdGUiLCJlbnRyb3B5IiwiYWNjdCIsImFjY291bnQiLCJwcml2YXRlS2V5Iiwic3Vic3RyIiwicmVhbEFjY291bnQiLCJBY2NvdW50IiwiZnJvbVByaXZhdGVLZXkiLCJhZGQiLCJwcml2YXRlS2V5VG9BY2NvdW50IiwiZ2V0QWNjb3VudCIsImFkZHJlc3MiLCJnZXQiLCJyZW1vdmVBY2NvdW50IiwicmVtb3ZlIiwic2lnbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFHQTs7QUFFQTs7Ozs7O0FBRU8sTUFBTUEsUUFBTixDQUFlO0FBQ3BCO0FBSUFDLEVBQUFBLFdBQVcsQ0FBQ0MsU0FBRCxFQUF3QjtBQUFBOztBQUFBOztBQUNqQyxTQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDRDs7QUFFTUMsRUFBQUEsTUFBUCxDQUFjQyxPQUFkLEVBQTBDO0FBQ3hDLFVBQU1DLElBQUksR0FBR0MsaUJBQVFILE1BQVIsQ0FBZUMsT0FBZixDQUFiOztBQUNBLFVBQU1HLFVBQVUsR0FBR0YsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxNQUFoQixDQUF1QixDQUF2QixDQUFuQjs7QUFDQSxVQUFNQyxXQUFXLEdBQUdDLGtCQUFRQyxjQUFSLENBQXVCSixVQUF2QixDQUFwQjs7QUFDQSxTQUFLTixNQUFMLENBQVlXLEdBQVosQ0FBZ0JILFdBQWhCO0FBQ0EsV0FBT0EsV0FBUDtBQUNEOztBQUVNSSxFQUFBQSxtQkFBUCxDQUEyQk4sVUFBM0IsRUFBeUQ7QUFDdkQsVUFBTUQsT0FBTyxHQUFHSSxrQkFBUUMsY0FBUixDQUF1QkosVUFBdkIsQ0FBaEI7O0FBQ0EsU0FBS04sTUFBTCxDQUFZVyxHQUFaLENBQWdCTixPQUFoQjtBQUNBLFdBQU9BLE9BQVA7QUFDRDs7QUFFTVEsRUFBQUEsVUFBUCxDQUFrQkMsT0FBbEIsRUFBeUQ7QUFDdkQsV0FBTyxLQUFLZCxNQUFMLENBQVllLEdBQVosQ0FBZ0JELE9BQWhCLENBQVA7QUFDRDs7QUFFTUUsRUFBQUEsYUFBUCxDQUFxQkYsT0FBckIsRUFBNEM7QUFDMUMsV0FBTyxLQUFLZCxNQUFMLENBQVlpQixNQUFaLENBQW1CSCxPQUFuQixDQUFQO0FBQ0Q7O0FBRU1JLEVBQUFBLElBQVAsQ0FBWUMsSUFBWixFQUFnRGIsVUFBaEQsRUFBNEU7QUFDMUUsV0FBT0csa0JBQVFDLGNBQVIsQ0FBdUJKLFVBQXZCLEVBQW1DWSxJQUFuQyxDQUF3Q0MsSUFBeEMsQ0FBUDtBQUNEOztBQWxDbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBhY2NvdW50IGZyb20gXCJldGgtbGliL2xpYi9hY2NvdW50XCI7XG5cbmltcG9ydCB7IElScGNNZXRob2QgfSBmcm9tIFwiLi4vcnBjLW1ldGhvZC90eXBlc1wiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL2FjY291bnRcIjtcbmltcG9ydCB7IElBY2NvdW50IH0gZnJvbSBcIi4vYWNjb3VudFwiO1xuaW1wb3J0IFdhbGxldCBmcm9tIFwiLi93YWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY291bnRzIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBwcml2YXRlIHJlYWRvbmx5IHJwY01ldGhvZDogSVJwY01ldGhvZDtcbiAgcHJpdmF0ZSByZWFkb25seSB3YWxsZXQ6IFdhbGxldDtcblxuICBjb25zdHJ1Y3RvcihycGNNZXRob2Q6IElScGNNZXRob2QpIHtcbiAgICB0aGlzLnJwY01ldGhvZCA9IHJwY01ldGhvZDtcbiAgICB0aGlzLndhbGxldCA9IG5ldyBXYWxsZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoZW50cm9weT86IHN0cmluZyk6IElBY2NvdW50IHtcbiAgICBjb25zdCBhY2N0ID0gYWNjb3VudC5jcmVhdGUoZW50cm9weSk7XG4gICAgY29uc3QgcHJpdmF0ZUtleSA9IGFjY3QucHJpdmF0ZUtleS5zdWJzdHIoMik7XG4gICAgY29uc3QgcmVhbEFjY291bnQgPSBBY2NvdW50LmZyb21Qcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuICAgIHRoaXMud2FsbGV0LmFkZChyZWFsQWNjb3VudCk7XG4gICAgcmV0dXJuIHJlYWxBY2NvdW50O1xuICB9XG5cbiAgcHVibGljIHByaXZhdGVLZXlUb0FjY291bnQocHJpdmF0ZUtleTogc3RyaW5nKTogSUFjY291bnQge1xuICAgIGNvbnN0IGFjY291bnQgPSBBY2NvdW50LmZyb21Qcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuICAgIHRoaXMud2FsbGV0LmFkZChhY2NvdW50KTtcbiAgICByZXR1cm4gYWNjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY2NvdW50KGFkZHJlc3M6IHN0cmluZyk6IElBY2NvdW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53YWxsZXQuZ2V0KGFkZHJlc3MpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUFjY291bnQoYWRkcmVzczogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMud2FsbGV0LnJlbW92ZShhZGRyZXNzKTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduKGRhdGE6IHN0cmluZyB8IEJ1ZmZlciB8IFVpbnQ4QXJyYXksIHByaXZhdGVLZXk6IHN0cmluZyk6IEJ1ZmZlciB7XG4gICAgcmV0dXJuIEFjY291bnQuZnJvbVByaXZhdGVLZXkocHJpdmF0ZUtleSkuc2lnbihkYXRhKTtcbiAgfVxufVxuIl19
