import * as mongoose from 'mongoose'
import { ClassifyModel } from './Classify';

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
})

const Classify = mongoose.model<ClassifyModel.IClassify>('Classify', model);
export default Classify;