"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iotx_1 = require("./iotx");
class Antenna {
  constructor(provider) {
    this.iotx = new iotx_1.Iotx(provider);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50ZW5uYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hbnRlbm5hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBRzlCLE1BQXFCLE9BQU87SUFHMUIsWUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFNTSxXQUFXLENBQUMsUUFBNkI7UUFDOUMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDNUMsT0FBTzthQUNSO1NBQ0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBdkJELDBCQXVCQyJ9
