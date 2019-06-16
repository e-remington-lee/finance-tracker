from flask import Flask, render_template, request, jsonify
import requests
import api_tokens
import database
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

@app.route('/api/latestPrice', methods=['GET', 'POST'])
def latest_price():
    if request.method == 'GET':
        symbol = request.args.get('symbol')
        username = request.args.get('username')
        shares = request.args.get('shares')
        database.buy_stock(symbol, shares, username)
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)
        latest_price = [{
                        'price': r.json()['latestPrice']
                        }]
        return jsonify(latest_price)
    return None

if __name__ =='__main__':
    app.run(debug=True, port=7000)