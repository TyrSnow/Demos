import * as mongoose from 'mongoose'
import { StockModel } from './Stock';

const Schema = mongoose.Schema;

let model = new Schema({
    code: {
        type: String,
        index: true
    },
    period: String,
    data: String
})

const StockMarket = mongoose.model<StockModel.IStockMarket>('StockMarket', model);
export default StockMarket;