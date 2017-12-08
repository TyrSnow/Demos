import StockSrv from '../services/stock.service'

import { SUCCESS, ERROR } from '../tools/response'

export default class StockCtrl {
    static query(req, res) {
        let { i = 1, s = 10 } = req.query
        StockSrv.query({}, i, s).then(
            SUCCESS(req, res, '[StockCtrl.query]')
        ).catch(
            ERROR(req, res, '[StockCtrl.query]')
        )
    }

    static get_one(req, res) {
        let { code } = req.params;

        StockSrv.get_one(code).then(
            SUCCESS(req, res, '[StockCtrl.get_one]')
        ).catch(
            ERROR(req, res, '[StockCtrl.get_one]')
        )
    }

    static get_stock_market(req, res) {
        let { code } = req.params;

        StockSrv.get_market(code, 'd').then(
            SUCCESS(req, res, '[StockCtrl.get_stock_market]')
        ).catch(
            ERROR(req, res, '[StockCtrl.get_stock_market]')
        )
    }
}