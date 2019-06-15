from flask import Flask, render_template
import requests
import api_tokens
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_page(path):
    return render_template('index.html')

@app.route('/stocks', methods=['GET', 'POST'])
def stock_info():
    if requests.methods == 'GET':
        PT = api_tokens.public_token()
        payload = { 'token': 'pk_de4620b808c14be59ad8257623d8a6d2'}
        r=requests.get('https://cloud.iexapis.com/v1/stock/TSLA/quote', params=payload)
        r = requests.get('https://httpbin.org/get')
        print(r.json())
        # print(r.status_code)
        # print(r.json())
        return r.json()
    return None

if __name__ =='__main__':
    app.run(debug=True, port=7000)