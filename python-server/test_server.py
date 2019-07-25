import unittest
import server
import stock_calculator
import decimal
from flask import jsonify
from unittest.mock import Mock, patch


class Test_calculator(unittest.TestCase):
    def test_add(self):
        result = stock_calculator.calculate_price(5.50, 10)

        self.assertIsInstance(type(result), type(float))
    
    # def test_decimals(self):
        #check to return a decimal?


class Test_login(unittest.TestCase):
    @patch("server.make_response")
    @patch("server.jsonify")
    @patch("server.jwt")
    @patch("server.request")
    @patch("server.login_account")
    def test_login(self, mock_login_account, mock_request, mock_jwt, mock_jsonify, mock_make_response): 
        mock_request.headers = { 'x-email': 'fakeemail3@gmail.com',
                                'x-password': '1234'}
        mock_login_account.return_value = {'user_id': 1, 'account_id': 1, 'first_name': 'Remy'}
        
        server.login_user()
        mock_jsonify.assert_called_once()

        mock_login_account.return_value = None

        server.login_user()
        mock_make_response.assert_called_once()

        
class Test_registration(unittest.TestCase):
    @patch("server.jsonify")
    @patch("server.request")
    @patch("server.make_response")
    @patch("server.register_user_database")
    def test_registration(self, mock_register_user_database, mock_make_response, mock_request, mock_jsonify):
        mock_register_user_database.return_value = {'key': 'value'}
        mock_request.get_json.return_value = {
        'firstName': 'Remy',
        'lastName': 'Lee',
        'email': 'fake@gmail.com',
        'password': 'password'
        }
        
        server.register_user()
        mock_make_response.assert_called_once()

        mock_register_user_database.return_value = None
        server.register_user()
        mock_jsonify.assert_called_once()


class Test_stock_info(unittest.TestCase):
    @patch("server.money")
    @patch("server.jsonify")
    @patch("server.iex_stock_data")
    @patch("server.request")
    def test_stock_info(self, mock_request, mock_iex, mock_jsonify, mock_money):
        mock_request.args.get.return_value = 'BYND'
        mock_iex.return_value = None

        server.stock_info()
        mock_jsonify.assert_not_called()

        mock_iex.return_value = mock_request.json
        mock_request.json.return_value = {'key': 'value'}

        server.stock_info()
        mock_jsonify.assert_called_once()


class Test_historical_info(unittest.TestCase):
    @patch("server.money")
    @patch("server.jsonify")
    @patch("server.iex_stock_data")
    @patch("server.request")
    def test_historical_info(self, mock_request, mock_iex, mock_jsonify, mock_money):
        mock_request.args.get.return_value = 'BYND'
        mock_iex.return_value = mock_request.json
        mock_request.json.return_value = {'key': 'value'}

        server.historical_info()
        mock_jsonify.assert_called_once()


class Test_balance_change_buy(unittest.TestCase):
    @patch('server.update_balance_buy')
    @patch('server.calculate_price')
    @patch("server.jsonify")
    @patch("server.iex_latest_price")
    @patch("server.request")
    def test_balance_change_buy(self, mock_request, mock_iex, mock_jsonify, mock_calculate, mock_balance_buy):
        mock_request.get_json.return_value = [{
                                            'symbol': 'value',
                                            'accountId': 1,
                                            'shares': 5
                                            }]  
        
        mock_iex.return_value = 210.00
        mock_calculate.return_value = 21.0
        mock_balance_buy.return_value = 21.0

        server.balance_change_buy()
        mock_jsonify.assert_called_once()


class Test_balance_change_sell(unittest.TestCase):
    @patch('server.update_balance_sell')
    @patch('server.calculate_price')
    @patch("server.jsonify")
    @patch("server.iex_latest_price")
    @patch("server.request")
    def test_balance_change_sell(self, mock_request, mock_iex, mock_jsonify, mock_calculate, mock_balance_sell):
        mock_request.get_json.return_value = [{
                                            'symbol': 'value',
                                            'accountId': 1,
                                            'shares': 5
                                            }]  
        
        mock_iex.return_value = 210.00
        mock_calculate.return_value = 21.0
        mock_balance_sell.return_value = 21.0

        server.balance_change_sell()
        mock_jsonify.assert_called_once()


class Test_transactions(unittest.TestCase):
    @patch("server.transaction_list")
    @patch("server.jsonify")
    @patch("server.iex_latest_price")
    @patch("server.request")
    def test_transactions(self, mock_request, mock_iex, mock_jsonify, mock_transaction):
        mock_request.get_json.return_value = [{
                                            'symbol': 'value',
                                            'accountId': 1,
                                            'shares': 5,
                                            'type': 'buy'
                                            }]  
        
        mock_iex.return_value = 210.00
        mock_transaction.return_value = 'Test'

        server.transactions()
        mock_jsonify.assert_called_once()


class Test_check_balance(unittest.TestCase):
    @patch("server.check_account_balance")
    @patch("server.calculate_price")
    @patch("server.money")
    @patch("server.jsonify")
    @patch("server.iex_latest_price")
    @patch("server.request")
    def test_check_balance(self, mock_request, mock_iex, mock_jsonify, mock_money, mock_calculate, mock_account_balance):
        mock_request.args.get.return_value = '10'
        mock_iex.return_value = 21
        mock_calculate.return_value = 210
        mock_account_balance.return_value = {'account_balance': 1}
        result = server.check_balance()
        self.assertEqual(result, ("", 404))

        mock_calculate.return_value = 210
        mock_account_balance.return_value = {'account_balance': 300}
        result = server.check_balance()
        self.assertEqual(result, ("", 200))





if __name__ == '__main__':
    unittest.main()