from flask import Flask, render_template, request, jsonify
import requests
import api_tokens
from database import buy_stock, sell_stock, update_balance_buy, update_balance_sell, transaction_list, check_account_balance, check_stock_holdings, portfolio_holdings
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
    return None


@app.route('/api/historicalData', methods=['GET', 'POST'])
def historical_info():
    if request.method == 'GET':
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
    return None


@app.route('/api/updateBalanceBuy', methods=['GET', 'POST'])
def balance_change_buy():
    if request.method =='GET':
        symbol = request.args.get('symbol')
        account_id  = request.args.get('accountId')
        shares = request.args.get('shares')
        
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
        
        latest_price = r.text
        balance_change = calculate_price(float(latest_price), int(shares))
        update_balance_buy(account_id, balance_change)
        print(balance_change)
        return jsonify(balance_change)
    return None


@app.route('/api/updateBalanceSell', methods=['GET', 'POST'])
def balance_change_sell():
    if request.method =='GET':
        symbol = request.args.get('symbol')
        account_id  = request.args.get('accountId')
        shares = request.args.get('shares')
        
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
        
        latest_price = r.text
        balance_change = calculate_price(float(latest_price), int(shares))
        update_balance_sell(account_id, balance_change)
        return jsonify(balance_change)
    return None


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


@app.route('/api/checkBalance', methods=['GET', 'POST'])
def check_balance():
        if request.method == 'GET':
            symbol = request.args.get('symbol')
            account_id = request.args.get('accountId')
            shares = request.args.get('shares')

            payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
            r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
            latest_price = r.text

            balance_change = calculate_price(float(latest_price), int(shares))

            balance = check_account_balance(account_id)
            float_balance = balance['account_balance']
            float_balance = float_balance.replace('$', '').replace(',','')

            if float(float_balance) < balance_change:
                return "", 404
            return "", 200
        return None


@app.route('/api/checkStock', methods=['GET', 'POST'])
def check_stock():
        if request.method == 'GET':
            symbol = request.args.get('symbol')
            account_id = request.args.get('accountId')
            shares = request.args.get('shares')
            
            holdings = check_stock_holdings(account_id, symbol)
            current_holdings = holdings['shares']

            if int(current_holdings) < int(shares):
                return "", 404
            return "", 200
        return None


@app.route('/api/buyStock', methods=['GET', 'POST'])
def buy_stock_endpoint():
    if request.method == 'GET':
        symbol = request.args.get('symbol')
        account_id  = request.args.get('accountId')
        shares = request.args.get('shares')

        # payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        # r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote', params=payload)
        latest_price = float(r.json()['latestPrice'])
        company_name = r.json()['companyName']

        latest_price = r.text
        buy_stock(symbol, shares, account_id, company_name, latest_price)
        return jsonify(latest_price)
    return None


@app.route('/api/sellStock', methods=['GET', 'POST'])
def sell_stock_endpoint():
    if request.method == 'GET':
        symbol = request.args.get('symbol')
        account_id  = request.args.get('accountId')
        shares = request.args.get('shares')
        sell_stock(symbol, shares, account_id)
        return jsonify(shares)
    return None


@app.route('/api/portfolioData', methods=['GET', 'POST'])
def portfolio_data():
        if request.method == 'GET':
            account_id  = request.args.get('accountId')
            # payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
            # r=requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
            latest_price = 125.50
            x = portfolio_holdings(account_id, latest_price)
            return jsonify(x)
        return None


if __name__ =='__main__':
    app.run(debug=True, port=7000)