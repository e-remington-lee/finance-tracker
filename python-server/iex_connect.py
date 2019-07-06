import requests

def iex_stock_data(symbol):
    payload = {
                'token': 'pk_de4620b808c14be59ad8257623d8a6d2',
                'filter': 'change,changePercent,companyName,symbol,latestPrice'
                }
    return requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)

def iex_chart_data(symbol):
    payload = {
                'token': 'pk_de4620b808c14be59ad8257623d8a6d2',
                'filter': 'label,close'
            }
    return requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/chart/1m', params=payload)

def iex_latest_price(symbol):
    payload = {'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r = requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    return float(r.text)