import * as mongoose from 'mongoose'
import { StockModel } from './Stock';

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
})

const Stock = mongoose.model<StockModel.IStock>('Stock', model);
export default Stock;