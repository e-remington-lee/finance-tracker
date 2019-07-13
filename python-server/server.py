from flask import Flask, render_template, request, jsonify, make_response
import requests
from database import *
from iex_connect import *
from money import *
from stock_calculator import calculate_price
import jwt
import datetime
from functools import wraps


app = Flask(__name__)
secret_key = 'bob'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_page(path):
    return render_template('index.html')


def login_token(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'access-token' in request.headers:
            token = request.headers['access-token']

        try:
            jwt.decode(token, secret_key, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return "Expired token"
        except: 
            return "Return to login page"

        return f(*args, **kwargs)
    return decorated


@app.route('/api/login', methods=['GET'])
def login_user():
    #make this secure??
    email = request.headers['x-email']
    password = request.headers['x-password']
    login_response = login_account(email, password)
    print(login_response)

    if login_response == None:
        return make_response('Login failed', 401, {'WWW-Authentication.route' : 'Login required!'})

    user = {'user_id': login_response['user_id'],
            'account_id': login_response['account_id'],
            'username': login_response['first_name'],
            'email': email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)  
            }   

    print(user)

    x = jwt.encode(user, secret_key, algorithm='HS256')
    token = {'token': x.decode('UTF-8')}
    
    return jsonify(token), 200


@app.route('/api/register', methods=['POST'])
def register_user():

    return None


@app.route('/account')
@login_token
def something():
    print('logged in!')
    return "logged in"


@app.route('/api/stockData', methods=['GET'])
def stock_info():
    symbol = request.args.get('symbol')
    r = iex_stock_data(symbol)
    print(r)
    if r != None:
        change_percent = round(float(r.json()['changePercent'])*100,3)
        latest_price = money(round(float(r.json()['latestPrice']),2))
        change = money(round(float(r.json()['change']),2))

        stock_data = [{
                        'price': latest_price,
                        'company': r.json()['companyName'],
                        'symbol': r.json()['symbol'],
                        'changePercent': change_percent,
                        'change': change
                        }]
        return jsonify(stock_data), 200
    return "", 404

@app.route('/api/historicalData', methods=['GET'])
def historical_info():
    symbol = request.args.get('symbol')
    r = iex_chart_data(symbol)
    historical_data = []
    count = 0
    for x in r.json():
        x = {'date': r.json()[count]['label'],
            'closing_price': r.json()[count]['close']}
        historical_data.append(x)
        count +=1
    return jsonify(historical_data), 200


@app.route('/api/updateBalanceBuy', methods=['POST'])
def balance_change_buy():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id  = response[0]['accountId']
    shares = int(response[0]['shares'])
        
    latest_price = iex_latest_price(symbol)
    print(latest_price)
    balance_change = calculate_price(latest_price, shares)
    update_balance_buy(account_id, balance_change)
    return jsonify(balance_change), 201


@app.route('/api/updateBalanceSell', methods=['POST'])
def balance_change_sell():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id = response[0]['accountId']
    shares = int(response[0]['shares'])

    latest_price = iex_latest_price(symbol)
    balance_change = calculate_price(latest_price, shares)
    update_balance_sell(account_id, balance_change)
    return jsonify(balance_change), 201
 

@app.route('/api/transactions', methods=[ 'POST'])
def transactions():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id = response[0]['accountId']
    shares = response[0]['shares']
    transaction_type = response[0]['type']

    stock_price = iex_latest_price(symbol)
        
    transaction_list(account_id, symbol, transaction_type, stock_price, shares)
    return jsonify(stock_price), 201



@app.route('/api/checkBalance', methods=['GET'])
def check_balance():
    symbol = request.args.get('symbol')
    account_id = request.args.get('accountId')
    shares = int(request.args.get('shares'))

    latest_price = iex_latest_price(symbol)
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

    latest_price = iex_latest_price(symbol)

    buy_stock(symbol, shares, account_id, company_name, latest_price)
    print(latest_price)
    return jsonify(company_name), 201


@app.route('/api/sellStock', methods=['POST'])
def sell_stock_endpoint():
    response = request.get_json()

    symbol = response[0]['symbol']
    account_id  = response[0]['accountId']
    shares = response[0]['shares']

    sell_stock(symbol, shares, account_id)
    return jsonify(account_id), 201


@app.route('/api/portfolioData', methods=['GET'])
def portfolio_data():
    account_id  = request.args.get('accountId')

    symbol_list = portfolio_symbols(account_id)

    latest_price_list = []
    for symbol in symbol_list:
        latest_price = iex_latest_price(symbol)
        latest_price_list.append(latest_price)

    portfolio_information = portfolio_holdings(account_id, latest_price_list)

    return jsonify(portfolio_information), 200


if __name__ =='__main__':
    app.run(debug=True, port=7000)