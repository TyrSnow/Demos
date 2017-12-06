import { Document } from 'mongoose'

declare namespace StockInfoModel {
    interface IStockInfo {
        code: string
        name: string
        industry: string
        area: string
        pe: string
        outstanding: number
        totals: number
        totalAssets: number
        liquidAssets: number
        fixedAssets: number
        reserved: number
        reservedPerShare: number
        esp: number
        bvps: number
        pb: number
        timeToMarket: Date
        undp: number
        perundp: number
        rev: number
        profit: number
        gpr: number
        npr: number
        holders: number
        status: number
        update_date: Date
    }
}