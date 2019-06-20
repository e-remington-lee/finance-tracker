import os
import psycopg2
import sqlalchemy

def create_connection():
    return psycopg2.connect(
            host = os.environ['db_host'],
            database = os.environ['db_database_stocks'],
            user = os.environ['db_username'],
            password = os.environ['db_password'])

def buy_stock(symbol, shares, account_id):
     connection = create_connection()
     cur = connection.cursor()

#     cur.execute("INSERT INTO holdings (account_id, symbol, shares) VALUES (%(account_id)s, %(symbol)s, %(shares)s)", {'symbol': symbol, 'shares': shares, 'account_id': account_id})
     cur.execute("UPDATE holdings SET shares = shares + %(shares)s WHERE account_id = %(account_id)s AND symbol = %(symbol)s", {'symbol': symbol, 'shares': shares, 'account_id': account_id})
     connection.commit()

     cur.close()
     connection.close()
     return None

def update_balance(account_id, balance_change):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("UPDATE account_balance SET account_balance = account_balance - %(balance_change)s::money WHERE account_id = %(account_id)s", {'balance_change': balance_change, 'account_id': account_id})

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
