from database import *
from money import *
from iex_connect import *

def historical_data():
    return get_all_users()


def portfolio_data():
    for user_id in historical_data():

        symbol_list = portfolio_symbols(user_id)

        latest_price_list = []
        for symbol in symbol_list:
            latest_price = iex_latest_price(symbol)
            latest_price_list.append(latest_price)

        portfolio_information = portfolio_holdings(user_id, latest_price_list)
        return portfolio_information


print(portfolio_data())