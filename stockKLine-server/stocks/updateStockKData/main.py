# -*- coding: utf-8 -*-
import tushare as ts
import json
from pymongo import MongoClient
import threading

TREAD_COUNT = 8
# 获取所有股票的列表
stockList = ts.get_stock_basics()
_stocks = stockList.index
count = 1
s = []
for i in range(TREAD_COUNT):
    s.append([])

for code in _stocks:
    p = count % TREAD_COUNT
    s[p].append(code)
    count+= 1

def fetch_stock_data(collection, code):
    _hist = ts.get_hist_data(code)
    _hist = _hist.reset_index()
    data = {
        "code": code,
        "data": _hist.to_csv()
    }
    collection.insert(data)

def updata_stocks(_i, codes):
    conn = MongoClient('mongodb://localhost:27017/')
    db = conn.StockKLineD
    collection = db.k
    total = len(codes)
    for i in range(total):
        print "[ Thread %d ]Fetch data: %s, %d / %d" % (_i, codes[i], i, total)
        fetch_stock_data(collection, codes[i])
    print "[ Thread %d]Finished!" % _i

for i in range(TREAD_COUNT):
    threading.Thread(target=updata_stocks, args=(i, s[i])).start()