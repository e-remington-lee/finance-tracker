from flask import Flask, render_template
import requests
from api_tokens import public_token
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_page(path):
    return render_template('index.html')

@app.route('/stocks', methods=['GET', 'POST'])
def stock_info():
    if requests.methods == 'GET':
        PT = public_token()
        print(PT)
        payload = { 'token': PT}
        r=requests.get('https://cloud.iexapis.com/v1/stock/TSLA/quote', params=payload)
        print(r.status_code)
        print(r.json())
        return None
    return None




if __name__ =='__main__':
    app.run(debug=True, port=7000)