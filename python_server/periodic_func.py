from database import *
from money import *
from iex_connect import *


def portfolio_data():
    all_users = get_all_users()
    dict1 = []
    for user_id in all_users:
        price_history = historical_data(user_id)
        dict1.append(price_history)
    
    return dict1

print(portfolio_data())

