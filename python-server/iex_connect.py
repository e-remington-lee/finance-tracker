import requests
import os 

def iex_stock_data(symbol):
    payload = {
                'token': os.environ['iex_public_key'],
                'filter': 'change,changePercent,companyName,symbol,latestPrice'
                }
    return requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)

def iex_chart_data(symbol):
    payload = {
                'token': os.environ['iex_public_key'],
                'filter': 'label,close'
            }
    return requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/chart/1m', params=payload)

def iex_latest_price(symbol):
    payload = {'token': os.environ['iex_public_key']}
    r = requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    return float(r.text)