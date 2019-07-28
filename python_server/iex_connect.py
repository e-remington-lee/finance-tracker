import os 

import requests


def iex_stock_data(symbol):
    payload = {
                'token': str(os.environ['iex_public_key']),
                'filter': 'change,changePercent,companyName,symbol,latestPrice'
                }
    return requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)


def iex_chart_data(symbol):
    payload = {
                'token': str(os.environ['iex_public_key']),
                'filter': 'date,label,average',
                'chartInterval': 10
            }
    return requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/intraday-prices', params=payload)


def iex_latest_price(symbol):
    payload = {'token': str(os.environ['iex_public_key'])}
    r = requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    return float(r.text)