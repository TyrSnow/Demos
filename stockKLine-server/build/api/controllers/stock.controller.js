"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stock_service_1 = require("../services/stock.service");
const response_1 = require("../tools/response");
class StockCtrl {
    static query(req, res) {
        let { i = 1, s = 10 } = req.query;
        stock_service_1.default.query({}, i, s).then(response_1.SUCCESS(req, res, '[StockCtrl.query]')).catch(response_1.ERROR(req, res, '[StockCtrl.query]'));
    }
    static get_one(req, res) {
        let { code } = req.params;
        stock_service_1.default.get_one(code).then(response_1.SUCCESS(req, res, '[StockCtrl.get_one]')).catch(response_1.ERROR(req, res, '[StockCtrl.get_one]'));
    }
    static get_stock_market(req, res) {
        let { code } = req.params;
        stock_service_1.default.get_market(code, 'd').then(response_1.SUCCESS(req, res, '[StockCtrl.get_stock_market]')).catch(response_1.ERROR(req, res, '[StockCtrl.get_stock_market]'));
    }
}
exports.default = StockCtrl;
//# sourceMappingURL=stock.controller.js.map