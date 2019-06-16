import os
import psycopg2
import sqlalchemy

def create_connection():
    return psycopg2.connect(
            host = os.environ['Local_DB_host'],
            database = os.environ['Local_DB_database_stocks'],
            user = os.environ['Local_DB_username'],
            password = os.environ['Local_DB_PW'])

def buy_stock(symbol):
    connection = create_connection()
    cur = connection.cursor()

    cur.execute("INSERT INTO stocks (company, shares) VALUES (%(symbol)s, 1)", {'symbol': symbol})

    connection.commit()

    cur.close()
    connection.close()
    return None

