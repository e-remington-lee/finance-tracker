import os
import psycopg2
import sqlalchemy
from money import *


def create_connection():
    return psycopg2.connect(
            host = os.environ['db_host'],
            database = os.environ['db_database_stocks'],
            user = os.environ['db_username'],
            password = os.environ['db_password'])



def buy_stock(symbol, shares, account_id, company_name, latest_price):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''INSERT INTO holdings (account_id, symbol, shares, value_at_purchase, company_name) 
               VALUES (%(account_id)s, %(symbol)s, %(shares)s, %(latest_price)s, %(company_name)s) 
               ON CONFLICT (account_id, symbol) DO UPDATE SET shares = holdings.shares + %(shares)s 
               WHERE holdings.account_id = %(account_id)s AND holdings.symbol = %(symbol)s''',
               {'symbol': symbol, 'shares': shares, 'account_id': account_id, 'company_name': company_name, 'latest_price': latest_price})

     cur.execute('''UPDATE HOLDINGS 
                    SET value_at_purchase = %(latest_price)s 
                    WHERE holdings.account_id = %(account_id)s AND holdings.symbol = %(symbol)s''', 
                    {'symbol': symbol, 'account_id': account_id,'latest_price': latest_price})
    
     connection.commit()
     cur.close()
     connection.close()
     return None


def sell_stock(symbol, shares, account_id):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''UPDATE holdings 
                    SET shares = holdings.shares - %(shares)s 
                    WHERE account_id = %(account_id)s AND symbol = %(symbol)s''',
                    {'symbol': symbol, 'shares': shares, 'account_id': account_id})
     
     connection.commit()
     cur.close()
     connection.close()
     return None


def update_balance_buy(account_id, balance_change):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute('''UPDATE account_balance 
                    SET account_balance = account_balance - %(balance_change)s 
                    WHERE account_id = %(account_id)s''', 
                    {'balance_change': balance_change, 'account_id': account_id})

    connection.commit()
    cur.close()
    connection.close()
    return None


def update_balance_sell(account_id, balance_change):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute('''UPDATE account_balance 
               SET account_balance = account_balance + %(balance_change)s 
               WHERE account_id = %(account_id)s''', 
               {'balance_change': balance_change, 'account_id': account_id})

    connection.commit()
    cur.close()
    connection.close()
    return None


def transaction_list(account_id, symbol, transaction_type, stock_price, shares):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute('''INSERT INTO transactions 
               (account_id, symbol, type, stock_price, shares) 
               values (%(account_id)s, %(symbol)s, %(type)s, %(stock_price)s, %(shares)s)''',
               {'account_id': account_id, 'symbol': symbol, 'type': transaction_type, 'stock_price': stock_price, 'shares': shares})

    connection.commit()
    cur.close()
    connection.close()
    return None


def check_account_balance(account_id):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''SELECT * FROM account_balance 
                    WHERE account_id = %(account_id)s''', 
                    {'account_id': account_id})

     row = cur.fetchone()

     connection.commit()
     cur.close()
     connection.close()
     return {'account_id': row[1], 'account_balance': row[2]}


def check_stock_holdings(account_id, symbol):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''SELECT * FROM holdings 
                    WHERE account_id = %(account_id)s AND symbol = %(symbol)s''', 
                    {'account_id': account_id, 'symbol': symbol})

     row = cur.fetchone()

     connection.commit()
     cur.close()
     connection.close()
     return {'shares': row[3]}


def portfolio_holdings(account_id, latest_price_list):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''SELECT * FROM holdings 
                    INNER JOIN account_balance on holdings.account_id = account_balance.account_id
                    WHERE holdings.account_id = %(account_id)s ORDER BY holdings.holding_id ASC''', {'account_id': account_id})
     
     rows = cur.fetchall()

     holding_value = [round(row[3]*x,2) for row,x in zip(rows,latest_price_list)]
     percent_change = [round(((float(x)-float(row[5]))/float(row[5]))*100,3) for row,x in zip(rows, latest_price_list)]
     total_holding_value = round(sum(holding_value),2)
     total_holding_value_money= money(total_holding_value)

     asset_data = []
     i=0
     for row in rows:
          asset_data.append({
                    'company': row[6],
                    'symbol': row[2],
                    'shares': row[3], 
                    'holding_value': money(holding_value[i]),
                    'holding_value_float': holding_value[i],
                    'percent_change': percent_change[i],
                    'current_price': money(latest_price_list[i])
                    })
          i+=1
     try:     
          total_cash = float(rows[0][9])
     except IndexError:
          total_cash = 100000.00
          
     total_cash_money = money(total_cash)
     total_asset = round(total_cash + total_holding_value,2)
     total_asset_money = money(total_asset)
     asset_values = [{
                    'total_holding_value': total_holding_value_money,
                    'total_cash': total_cash_money,
                    'total_asset_value': total_asset_money
                    }]

     cur.close()
     connection.close()
     return {'asset_data': asset_data, 'asset_values': asset_values}


def portfolio_symbols(account_id):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''SELECT * FROM holdings 
                    WHERE account_id = %(account_id)s 
                    ORDER BY holding_id ASC''', 
                    {'account_id': account_id})

     rows = cur.fetchall()

     price_data = []
     for row in rows:
          price_data.append(row[2])

     cur.close()
     connection.close()
     return price_data

def login_account(email, password):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''SELECT * FROM user_accounts 
                    INNER JOIN account_balance on user_accounts.user_id = account_balance.user_id
                    WHERE email = %(email)s AND password = %(password)s''', 
                    {'email': email, 'password': password})

     row = cur.fetchone()

     if row == None:
          return None

     cur.close()
     connection.close()
     return {'user_id': row[0], 'account_id': row[7], 'first_name': row[1]}

def register_user_database(first_name, last_name, email, password):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute('''WITH new_user AS (
                    INSERT INTO user_accounts
                    (first_name, last_name, email, password)
                    VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s)
                    returning user_id
                    )
                    INSERT INTO account_balance (user_id, account_id, account_balance)
                    VALUES (
                    (select user_id from new_user), (select user_id from new_user), 100000.00::numeric
                    );''',
                    {'first_name': first_name, 'last_name':last_name, 'email': email, 'password': password})
     connection.commit()
     cur.close()
     connection.close()
     return None