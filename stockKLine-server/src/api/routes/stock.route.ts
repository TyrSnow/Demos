import { Router } from 'express'
import { validate } from 'express-jsonschema'

import { requestUser } from '../tools/auth'
import StockCtrl from '../controllers/stock.controller'
// import DocSchemas from '../schemas/doc.schemas'

let routes = Router();

routes.get('/:code/Market', requestUser, StockCtrl.get_stock_market);
routes.get('/:code', requestUser, StockCtrl.get_one);
routes.get('/', requestUser, StockCtrl.query);
export default routes