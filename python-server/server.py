from flask import Flask, render_template, request, jsonify
import requests
import api_tokens
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_page(path):
    return render_template('index.html')

@app.route('/api/stocks', methods=['GET', 'POST'])
def stock_info():
    if request.method == 'GET':
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        symbol = request.args.get('symbol')
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

if __name__ =='__main__':
    app.run(debug=True, port=7000)