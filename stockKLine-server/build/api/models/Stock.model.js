"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let model = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        index: true
    },
    delete: Boolean
});
const Stock = mongoose.model('Stock', model);
exports.default = Stock;
//# sourceMappingURL=Stock.model.js.map