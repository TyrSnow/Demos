import { Document } from 'mongoose'

declare namespace ClassifyModel {
    interface IClassify extends Document {
        name: string
        stocks: [string]
    }
}