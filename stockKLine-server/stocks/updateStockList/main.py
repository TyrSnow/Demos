# -*- coding: utf-8 -*-
import tushare as ts
import json
from pymongo import MongoClient

# 请求数据
stockList = ts.get_stock_basics()

# 存入数据库
conn = MongoClient('mongodb://localhost:27017/')
db = conn.StockKLineD
collection = db.stocks
stockList = stockList.reset_index()
collection.insert(json.loads(stockList.to_json(orient='records')))