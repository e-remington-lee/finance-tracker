import os
import psycopg2
import sqlalchemy

def create_connection():
    return psycopg2.connect(
            host = os.environ['db_host'],
            database = os.environ['stocks_database'],
            user = os.environ['db_username'],
            password = os.environ['db_password'])

def buy_stock(symbol, shares, account_id):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("INSERT INTO stocks (company, shares, account_id) VALUES (%(symbol)s, %(shares)s, %(account_id)s)", {'symbol': symbol, 'shares': shares, 'account_id': account_id})

    connection.commit()

    cur.close()
    connection.close()
    return None

def update_balance(balance, username):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("UPDATE bank SET balance = balance - %(balance)s::money WHERE username = %(username)s", {'balance': balance, 'username': username})

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
