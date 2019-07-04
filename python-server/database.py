import os
import psycopg2
import sqlalchemy

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

     cur.execute("UPDATE HOLDINGS SET value_at_purchase = %(latest_price)s WHERE holdings.account_id = %(account_id)s AND holdings.symbol = %(symbol)s", {'symbol': symbol, 'account_id': account_id,'latest_price': latest_price})
     connection.commit()

     cur.close()
     connection.close()
     return None

def sell_stock(symbol, shares, account_id):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute("UPDATE holdings SET shares = holdings.shares - %(shares)s WHERE account_id = %(account_id)s AND symbol = %(symbol)s", {'symbol': symbol, 'shares': shares, 'account_id': account_id})
     connection.commit()

     cur.close()
     connection.close()
     return None

def update_balance_buy(account_id, balance_change):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("UPDATE account_balance SET account_balance = account_balance - %(balance_change)s::money WHERE account_id = %(account_id)s", {'balance_change': balance_change, 'account_id': account_id})

    connection.commit()

    cur.close()
    connection.close()
    return None

def update_balance_sell(account_id, balance_change):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("UPDATE account_balance SET account_balance = account_balance + %(balance_change)s::money WHERE account_id = %(account_id)s", {'balance_change': balance_change, 'account_id': account_id})

    connection.commit()

    cur.close()
    connection.close()
    return None

def transaction_list(account_id, symbol, transaction_type, stock_price, shares):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("INSERT INTO transactions (account_id, symbol, type, stock_price, shares) values (%(account_id)s, %(symbol)s, %(type)s, %(stock_price)s, %(shares)s)",
     {'account_id': account_id, 'symbol': symbol, 'type': transaction_type, 'stock_price': stock_price, 'shares': shares})


    connection.commit()

    cur.close()
    connection.close()
    return None

def check_account_balance(account_id):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute("SELECT * FROM account_balance WHERE account_id = %(account_id)s", {'account_id': account_id})

     row = cur.fetchone()

     connection.commit()

     cur.close()
     connection.close()
     return {'account_id': row[1], 'account_balance': row[2]}

def check_stock_holdings(account_id, symbol):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute("SELECT * FROM holdings WHERE account_id = %(account_id)s AND symbol = %(symbol)s", {'account_id': account_id, 'symbol': symbol})

     row = cur.fetchone()

     connection.commit()

     cur.close()
     connection.close()
     return {'shares': row[3]}


def portfolio_holdings(account_id, latest_price):
     connection = create_connection()
     cur = connection.cursor()

     cur.execute("SELECT * FROM holdings WHERE account_id = %(account_id)s", {'account_id': account_id})

     rows = cur.fetchall()

     y = []
     for row in rows:
          y.append({'symbol': row[2],
           'shares': row[3],
            'percent_change': round(100*((latest_price - float(row[5].replace('$', '').replace(',','')))/float(row[5].replace('$', '').replace(',',''))),2)
            })

     cur.close()
     connection.close()

     return y