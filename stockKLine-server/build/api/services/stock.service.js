"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stock_model_1 = require("../models/Stock.model");
const Stock_Market_model_1 = require("../models/Stock.Market.model");
const list_1 = require("../tools/list");
const Code_enum_1 = require("../constants/Code.enum");
class StockSrv {
    static query(query, index, pageSize) {
        let skipCount = (index - 1) * pageSize;
        return Stock_model_1.default.count(query).then((total) => {
            if (skipCount > total) {
                return Promise.resolve(new list_1.List([], index, pageSize, total));
            }
            else {
                return Stock_model_1.default.find(query).skip(skipCount).limit(pageSize - 0).exec().then((list) => {
                    return Promise.resolve(new list_1.List(list, index, pageSize, total));
                });
            }
        });
    }
    static get_one(code) {
        return Stock_model_1.default.findOne({
            code
        }).then((stock) => {
            if (stock) {
                return Promise.resolve(stock);
            }
            else {
                return Promise.reject(Code_enum_1.default.STOCK_NOT_EXIST);
            }
        });
    }
    static get_market(code, period) {
        return Stock_Market_model_1.default.findOne({
            code
        }, {
            _id: 0,
            code: 1,
            data: 1
        }).then((res) => {
            if (res) {
                return Promise.resolve(res);
            }
            else {
                return Promise.reject(Code_enum_1.default.STOCK_NOT_EXIST);
            }
        });
    }
}
exports.default = StockSrv;
//# sourceMappingURL=stock.service.js.map