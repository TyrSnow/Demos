"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let model = new Schema({
    code: {
        type: String,
        index: true
    },
    period: String,
    data: String
});
const StockMarket = mongoose.model('StockMarket', model);
exports.default = StockMarket;
//# sourceMappingURL=Stock.Market.model.js.map