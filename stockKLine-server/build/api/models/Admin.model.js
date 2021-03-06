"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let model = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    sault: {
        type: String,
        required: true
    },
    password: {
        email: String,
        name: String,
        phone: String
    },
    nickname: String,
    head: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
const Admin = mongoose.model('Admin', model);
exports.default = Admin;
