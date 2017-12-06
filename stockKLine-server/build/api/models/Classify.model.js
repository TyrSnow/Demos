"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let model = new Schema({
    name: {
        type: String,
        required: true
    },
    stocks: [{
            type: Schema.Types.ObjectId,
            rel: 'User'
        }]
});
const Classify = mongoose.model('Classify', model);
exports.default = Classify;
//# sourceMappingURL=Classify.model.js.map