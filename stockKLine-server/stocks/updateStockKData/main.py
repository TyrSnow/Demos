# -*- coding: utf-8 -*-
import tushare as ts
import json
import threading
import time
import Queue

stockList = ts.get_stock_basics()

stocks = stockList.index

THREADS_TOTAL = 16
divides_stocks = []
err_stocks = Queue.Queue()
for i in range(THREADS_TOTAL):
    divides_stocks.append([])
    
count = 0
for stock in stocks:
    shade_index = count % THREADS_TOTAL
    divides_stocks[shade_index].append(stock)
    count+= 1

def fetch_stock(stock):
    try:
        data = ts.get_hist_data(stock)
        data.to_csv("./Data/%s.csv" % stock)
    except:
        print "Fetch %s Error, retry after 5 seconds \n" % stock
        err_stocks.put(stock)
        time.sleep(5)
    
def fetch_stocks(name, stocks):
    l = len(stocks)
    l0 = l - 1
    for i in range(l):
        print "[Thread %s]Fetching %s, %d / %d \n" % (name, stocks[i], i, l0)
        fetch_stock(stocks[i])
    print "[Thread %s]Fetching Success. \n" % name
thrs = []
start_time = time.time()
for i in range(THREADS_TOTAL):
    thr = threading.Thread(target=fetch_stocks,args=(i, divides_stocks[i]))
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