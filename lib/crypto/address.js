"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const bech32_1 = __importDefault(require("bech32"));
class AddressV1 {
  static prefix() {
    // TODO(tian): not sure how to deal with prefix for now
    return this.MAINNET_PREFIX;
  }
  string() {
    // @ts-ignore
    const grouped = bech32_1.default.toWords(this.payload);
    return bech32_1.default.encode(AddressV1.prefix(), grouped);
  }
  stringEth() {
    return `0x${Buffer.from(this.payload).toString("hex")}`;
  }
  bytes() {
    return this.payload;
  }
}
AddressV1.ADDRESS_LENGTH = 20;
AddressV1.MAINNET_PREFIX = "io";
AddressV1.TESTNET_PREFIX = "it";
function fromBytes(bytes) {
  if (bytes.length !== AddressV1.ADDRESS_LENGTH) {
    throw new Error(`invalid address length in bytes: ${bytes.length}`);
  }
  const addr = new AddressV1();
  addr.payload = bytes;
  return addr;
}
exports.fromBytes = fromBytes;
function fromString(addrStr) {
  const { prefix, words } = bech32_1.default.decode(addrStr);
  if (prefix !== AddressV1.prefix()) {
    throw new Error(
      `hrp ${prefix} and address prefix ${AddressV1.prefix()} don't match`
    );
  }
  const addr = new AddressV1();
  addr.payload = bech32_1.default.fromWords(words);
  return addr;
}
exports.fromString = fromString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcnlwdG8vYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQVU1QixNQUFNLFNBQVM7SUFLTixNQUFNLENBQUMsTUFBTTtRQUNsQix1REFBdUQ7UUFDdkQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFJTSxNQUFNO1FBQ1gsYUFBYTtRQUNiLE1BQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU0sS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOztBQXZCYSx3QkFBYyxHQUFXLEVBQUUsQ0FBQztBQUM1Qix3QkFBYyxHQUFXLElBQUksQ0FBQztBQUM5Qix3QkFBYyxHQUFXLElBQUksQ0FBQztBQXdCOUMsU0FBZ0IsU0FBUyxDQUFDLEtBQWlCO0lBQ3pDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsY0FBYyxFQUFFO1FBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNyQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFQRCw4QkFPQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxPQUFlO0lBQ3hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsSUFBSSxNQUFNLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQ2IsT0FBTyxNQUFNLHVCQUF1QixTQUFTLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FDckUsQ0FBQztLQUNIO0lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQVZELGdDQVVDIn0=
