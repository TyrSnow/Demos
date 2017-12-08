import Stock from '../models/Stock.model'
import StockMarket from '../models/Stock.Market.model'
import { StockModel } from '../models/Stock'
import {List, IList} from '../tools/list'
import CODE from '../constants/Code.enum'

class StockSrv {

    static query(
        query: object,
        index: number,
        pageSize: number
    ): Promise<IList<StockModel.IStock[]>> {
        let skipCount = (index - 1 ) * pageSize;
        return Stock.count(query).then(
            (total) => {
                if (skipCount > total) {
                    return Promise.resolve(new List([], index, pageSize, total))
                } else {
                    return Stock.find(query).skip(skipCount).limit(pageSize - 0).exec().then(
                        (list) => {
                            return Promise.resolve(new List(list, index, pageSize, total))
                        }
                    );
                }
            }
        )
    }

    static get_one(
        code: string
    ): Promise<StockModel.IStock> {
        return Stock.findOne({
            code
        }).then(
            (stock) => {
                if (stock) {
                    return Promise.resolve(stock)
                } else {
                    return Promise.reject(CODE.STOCK_NOT_EXIST)
                }
            }
        )
    }

    static get_market(
        code: string,
        period: string
    ): Promise<StockModel.IStockMarket> {
        return StockMarket.findOne({
            code
        }, {
            _id: 0,
            code: 1,
            data: 1
        }).then(
            (res) => {
                if (res) {
                    return Promise.resolve(res);
                } else {
                    return Promise.reject(CODE.STOCK_NOT_EXIST);
                }
            }
        )
    }
}

export default StockSrv