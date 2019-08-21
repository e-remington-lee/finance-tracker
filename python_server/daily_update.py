import requests
import psycopg2


# def create_connection():
#     return psycopg2.connect(
#             host = db_host,
#             database = db_database_stocks,
#             user = db_username,
#             password = db_password
#             )


# def iex_latest_price(symbol):
#     payload = {'token': str(iex_public_key)}
#     r = requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
#     return float(r.text)

import os
def iex_latest_price(symbol):
    payload = {'token': str(os.environ['iex_public_key'])}
    r = requests.get(f'https://cloud.iexapis.com/v1/stock/{symbol}/quote/latestPrice', params=payload)
    
    return float(r.text)


def create_connection():
    return psycopg2.connect(
            host = os.environ['db_host'],
            database = os.environ['db_database_stocks'],
            user = os.environ['db_username'],
            password = os.environ['db_password'])


def portfolio_data():
    all_users = get_all_users()
    asset_list = []
    for user_id in all_users:
        price_history = historical_data(user_id)
        asset_list.append(price_history)

    return asset_list


def get_all_users():
     connection = create_connection()
     cur = connection.cursor()
     cur.execute('''SELECT user_id FROM user_accounts ORDER BY user_id ASC''') 
     rows = cur.fetchall()
     user_ids = []
     for row in rows:
          user_ids.append(row[0])
     cur.close()
     connection.close()

     return user_ids


def historical_data(account_id):
     connection = create_connection()
     cur = connection.cursor()
     cur.execute('''SELECT * FROM holdings 
                    INNER JOIN account_balance on holdings.account_id = account_balance.account_id
                    WHERE holdings.account_id = %(account_id)s ORDER BY holdings.holding_id ASC''', {'account_id': account_id})  
     rows = cur.fetchall()
     latest_price_list = []
     for row in rows:
         latest_price = iex_latest_price(row[2])
         latest_price_list.append(latest_price)
     holding_value = [row[3] * x for row, x in zip(rows, latest_price_list)]
     total_holding_value = sum(holding_value) 
     try:     
          total_cash = float(rows[0][9])
     except IndexError:
          cur.execute('''SELECT * FROM account_balance
                         WHERE account_id = %(account_id)s''', 
                         {'account_id': account_id})
          row = cur.fetchone()
          total_cash = row[2]
     total_asset = round(total_cash + total_holding_value, 2)
     cur.execute('''INSERT INTO historical_data (account_id, holding_value) 
                    VALUES (%(account_id)s, %(total_asset)s)''',
                    {'account_id': account_id, 'total_asset': total_asset})
     connection.commit()
     cur.close()
     connection.close()

     return total_asset

if __name__ == '__main__':
    print(portfolio_data())