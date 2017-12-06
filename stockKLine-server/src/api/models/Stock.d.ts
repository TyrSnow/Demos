import { Document } from 'mongoose'

declare namespace StockModel {
    interface IStock extends Document {
        code: string
        name: string
    }
}