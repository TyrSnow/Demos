# -*- coding: utf-8 -*-
import tushare as ts
import json
import threading
import time
import Queue

stockList = ts.get_stock_basics()

stocks = stockList.index

THREADS_TOTAL = 8
stocks_count = len(stocks)
stocksQueue = Queue.Queue()
err_stocks = Queue.Queue()
for i in range(stocks_count):
    stocksQueue.put(stocks[i]);

def fetch_stock(stock):
    try:
        data = ts.get_hist_data(stock)
        data.to_csv("/Data/%s.csv" % stock)
    except:
        print "Fetch %s Error, retry after 5 seconds \n" % stock
        err_stocks.put(stock)
        time.sleep(5)
    
def fetch_stocks(name):
    while stocksQueue.not_empty:
        stock = stocksQueue.get(False)
        print "[Thread %s]Fetching %s, and %d stocks last.\n" % (name, stock, stocksQueue.qsize())
        fetch_stock(stock)
    print "[Thread %s]Fetching Success. \n" % name
thrs = []
start_time = time.time()
for i in range(THREADS_TOTAL):
    thr = threading.Thread(target=fetch_stocks,args=(i,))
    thr.start()
    thrs.append(thr)

for i in range(THREADS_TOTAL):
    thrs[i].join()
    
end_time = time.time()

print "--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--"
print "All %d Threads Process End." % THREADS_TOTAL
print "It use %d s." % (end_time - start_time)
print "%d errors occured." % err_stocks.qsize()
print "Follow Stocks Fetch Failed: "
while err_stocks.qsize() > 0:
    print err_stocks.get()
print "--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--"