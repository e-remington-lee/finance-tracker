from flask import Flask, render_template, request, jsonify
import requests
import api_tokens
# from database import buy_stock, sell_stock, update_balance_buy, update_balance_sell, portfolio_symbols, transaction_list, check_account_balance, check_stock_holdings, portfolio_holdings
from database import *
from stock_calculator import calculate_price


app = Flask(__name__)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_page(path):
    return render_template('index.html')


@app.route('/api/stockData', methods=['GET'])
def stock_info():
    symbol = request.args.get('symbol')
    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)

    change_percent = round(float(r.json()['changePercent'])*100,3)
    latest_price = round(float(r.json()['latestPrice']),2)
    change = round(float(r.json()['change']),2)

    stock_data = [{
                    'price': latest_price,
                    'company': r.json()['companyName'],
                    'symbol': r.json()['symbol'],
                    'changePercent': change_percent,
                    'change': change
                     }]
    return jsonify(stock_data)


@app.route('/api/historicalData', methods=['GET'])
def historical_info():
    symbol = request.args.get('symbol')
    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/chart/1m', params=payload)

    historical_data = []
    count = 0

    for x in r.json():
        x = {'date': r.json()[count]['date'],
            'closing_price': r.json()[count]['close']}
        historical_data.append(x)
        count +=1
    return jsonify(historical_data)


@app.route('/api/updateBalanceBuy', methods=['POST'])
def balance_change_buy():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id  = response[0]['accountId']
    shares = int(response[0]['shares'])
        
    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    latest_price = float(r.text)

    balance_change = calculate_price(latest_price, shares)
    update_balance_buy(account_id, balance_change)
    return jsonify(balance_change)


@app.route('/api/updateBalanceSell', methods=['POST'])
def balance_change_sell():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id = response[0]['accountId']
    shares = int(response[0]['shares'])
        
    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    latest_price = float(r.text)

    balance_change = calculate_price(latest_price, shares)
    update_balance_sell(account_id, balance_change)
    return jsonify(balance_change)
 

@app.route('/api/transactions', methods=[ 'POST'])
def transactions():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id = response[0]['accountId']
    shares = response[0]['shares']
    transaction_type = response[0]['type']

    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    stock_price = r.text
        
    transaction_list(account_id, symbol, transaction_type, stock_price, shares)
    return jsonify(stock_price)



@app.route('/api/checkBalance', methods=['GET', 'POST'])
def check_balance():
    symbol = request.args.get('symbol')
    account_id = request.args.get('accountId')
    shares = int(request.args.get('shares'))

    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    latest_price = float(r.text)

    balance_change = calculate_price(latest_price, shares)

    balance = check_account_balance(account_id)
    float_balance = balance['account_balance']

    if float(float_balance) < balance_change:
        return "", 404
    return "", 200


@app.route('/api/checkStock', methods=['GET'])
def check_stock():
    symbol = request.args.get('symbol')
    account_id = request.args.get('accountId')
    shares = request.args.get('shares')
            
    holdings = check_stock_holdings(account_id, symbol)
    current_holdings = holdings['shares']

    if int(current_holdings) < int(shares):
        return "", 404
    return "", 200


@app.route('/api/buyStock', methods=['POST'])
def buy_stock_endpoint():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id  = response[0]['accountId']
    shares = response[0]['shares']
    company_name = response[0]['company']

    payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
    r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    latest_price = float(r.text)

    buy_stock(symbol, shares, account_id, company_name, latest_price)
    print(latest_price)
    return jsonify(company_name)


@app.route('/api/sellStock', methods=['POST'])
def sell_stock_endpoint():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id  = response[0]['accountId']
    shares = response[0]['shares']

    sell_stock(symbol, shares, account_id)
    return jsonify(account_id)


@app.route('/api/portfolioData', methods=['GET'])
def portfolio_data():
    account_id  = request.args.get('accountId')

    symbol_list = portfolio_symbols(account_id)

    latest_price_list = []
    for symbol in symbol_list:
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
        latest_price_list.append(float(r.text))

    portfolio_information = portfolio_holdings(account_id, latest_price_list)

    return jsonify(portfolio_information)


if __name__ =='__main__':
    app.run(debug=True, port=7000)