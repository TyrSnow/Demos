"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let model = new Schema({
    code: String,
    name: String,
    industry: String,
    area: String,
    pe: Number,
    outstanding: Number,
    totals: Number,
    totalAssets: Number,
    liquidAssets: Number,
    fixedAssets: Number,
    reserved: Number,
    reservedPerShare: Number,
    esp: Number,
    bvps: Number,
    pb: Number,
    timeToMarket: Number,
    undp: Number,
    perundp: Number,
    rev: Number,
    profit: Number,
    gpr: Number,
    npr: Number,
    holders: Number,
});
const Stock = mongoose.model('Stock', model);
exports.default = Stock;
//# sourceMappingURL=Stock.model.js.map