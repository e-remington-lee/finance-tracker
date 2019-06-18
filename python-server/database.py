import os
import psycopg2
import sqlalchemy

def create_connection():
    return psycopg2.connect(
            host = os.environ['db_host'],
            database = os.environ['stocks_database'],
            user = os.environ['db_username'],
            password = os.environ['db_password'])

def buy_stock(symbol, shares, username):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("INSERT INTO stocks (company, shares, username) VALUES (%(symbol)s, %(shares)s, %(username)s)", {'symbol': symbol, 'shares': shares, 'username': username})

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

