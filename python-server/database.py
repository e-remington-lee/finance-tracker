import os
import psycopg2
import sqlalchemy

connection = psycopg2.connect(
            host = os.environ['Local_DB_host'],
            database = os.environ['Local_DB_database_stocks'],
            user = os.environ['Local_DB_username'],
            password = os.environ['Local_DB_PW'])

def test_connection():
    cur = connection.cursor()

    cur.execute('CREATE TABLE test (company VARCHAR(255), price integer)')

    connection.commit()

    cur.close()
    connection.close()
    return None

test_connection()