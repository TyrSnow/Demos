"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stock_model_1 = require("../models/Stock.model");
class StockSrv {
    create(code) {
        let stock = new Stock_model_1.default({
            code: code
        });
        return stock.save();
    }
    create_list() {
    }
    query() {
    }
    update() {
    }
    delete() {
    }
}
exports.default = StockSrv;
//# sourceMappingURL=stock.service.js.map