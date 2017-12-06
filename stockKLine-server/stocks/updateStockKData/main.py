# -*- coding: utf-8 -*-
import tushare as ts
import json
from pymongo import MongoClient


conn = MongoClient('mongodb://localhost:27017/')
db = conn.StockKLineD
collection = db.k
# 获取所有股票的列表
stockList = ts.get_stock_basics()
_stocks = stockList.index
total = len(_stocks)
count = 1

for code in _stocks:
    print "Fetching Stock Data: %s, %d / %d" % (code, count, total)
    _hist = ts.get_hist_data(code)
    _hist = _hist.reset_index()
    data = {
        "code": code,
        "data": _hist.to_csv()
    }

    print "Save into DB: %s, %d / %d" % (code, count, total)
    collection.insert(data)

    count+= 1