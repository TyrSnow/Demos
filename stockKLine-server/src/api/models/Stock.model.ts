import * as mongoose from 'mongoose'
import { StockModel } from './Stock';

const Schema = mongoose.Schema;

let model = new Schema({
    code: String, //代码
    name: String, //名称
    industry: String, //所属行业
    area: String, //地区
    pe: Number, //市盈率
    outstanding: Number, //流通股本(亿)
    totals: Number, //总股本(亿)
    totalAssets: Number, //总资产(万)
    liquidAssets: Number, //流动资产
    fixedAssets: Number, //固定资产
    reserved: Number, //公积金
    reservedPerShare: Number, //每股公积金
    esp: Number, //每股收益
    bvps: Number, //每股净资
    pb: Number, //市净率
    timeToMarket: Number, //上市日期
    undp: Number, //未分利润
    perundp: Number, // 每股未分配
    rev: Number, //收入同比(%)
    profit: Number, //利润同比(%)
    gpr: Number, //毛利率(%)
    npr: Number, //净利润率(%)
    holders: Number, //股东人数
})

const Stock = mongoose.model<StockModel.IStock>('Stock', model);
export default Stock;