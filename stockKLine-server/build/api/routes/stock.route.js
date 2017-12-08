"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../tools/auth");
const stock_controller_1 = require("../controllers/stock.controller");
// import DocSchemas from '../schemas/doc.schemas'
let routes = express_1.Router();
routes.get('/:code/Market', auth_1.requestUser, stock_controller_1.default.get_stock_market);
routes.get('/:code', auth_1.requestUser, stock_controller_1.default.get_one);
routes.get('/', auth_1.requestUser, stock_controller_1.default.query);
exports.default = routes;
//# sourceMappingURL=stock.route.js.map