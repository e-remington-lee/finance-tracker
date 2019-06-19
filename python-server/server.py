from flask import Flask, render_template, request, jsonify
import requests
import api_tokens
from database import buy_stock, update_balance, transaction_list
from stock_calculator import calculate_price

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_page(path):
    return render_template('index.html')

@app.route('/api/stockData', methods=['GET', 'POST'])
def stock_info():
    if request.method == 'GET':
        symbol = request.args.get('symbol')
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)
        stock_data = [{
                        'price': r.json()['latestPrice'],
                        'company': r.json()['companyName'],
                        'symbol': r.json()['symbol'],
                        'changePercent': r.json()['changePercent'],
                        'change': r.json()['change']
                        }]
        return jsonify(stock_data)
    return None

@app.route('/api/balance', methods=['GET', 'POST'])
def balance_info():
    if request.method =='GET':
        symbol = request.args.get('symbol')
        account_id  = request.args.get('accountId')
        shares = request.args.get('shares')
        
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
        
        latest_price = r.text
        balance_change = calculate_price(float(latest_price), int(shares))
        update_balance(balance_change, username)
        print(balance_change)
        return jsonify(balance_change)

@app.route('/api/transactions', methods=['GET', 'POST'])
def transactions():
    if request.method == 'GET':
        symbol = request.args.get('symbol')
        account_id = request.args.get('accountId')
        shares = request.args.get('shares')
        transaction_type = request.args.get('type')

        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
        
        stock_price = r.text

        transaction_list(account_id, symbol, transaction_type, stock_price, shares)

        return jsonify(stock_price)
    return None
@app.route('/api/buyStock', methods=['GET', 'POST'])
def latest_price():
    if request.method == 'GET':
        symbol = request.args.get('symbol')
        account_id  = request.args.get('accountId')
        shares = request.args.get('shares')
        buy_stock(symbol, shares, account_id)
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)
        stock_price = [{
                        'price': r.json()['latestPrice']
                        }]
        return jsonify(stock_price)
    return None

if __name__ =='__main__':
    app.run(debug=True, port=7000)