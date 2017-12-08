import { Document } from 'mongoose'

export declare namespace StockModel {
    interface IStock extends Document {
        code: string //代码
        name: string //名称
        industry: string //所属行业
        area: string //地区
        pe: number //市盈率
        outstanding: number //流通股本(亿)
        totals: number //总股本(亿)
        totalAssets: number //总资产(万)
        liquidAssets: number //流动资产
        fixedAssets: number //固定资产
        reserved: number //公积金
        reservedPerShare: number //每股公积金
        esp: number //每股收益
        bvps: number //每股净资
        pb: number //市净率
        timeToMarket: number //上市日期
        undp: number //未分利润
        perundp: number // 每股未分配
        rev: number //收入同比(%)
        profit: number //利润同比(%)
        gpr: number //毛利率(%)
        npr: number //净利润率(%)
        holders: number //股东人数
    }

    interface IStockMarket extends Document {
        code: string
        period: string
        data: string
    }
}