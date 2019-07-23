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
    @classmethod
    def setupVariables(cls):
        cls.change_percent = 0.2

    @patch("server.money")
    @patch("server.jsonify")
    @patch("server.iex_stock_data")
    @patch("server.request")
    def test_stock_info(self, mock_request, mock_iex, mock_jsonify, mock_money):
        mock_request.args.get.return_value = 'BYND'
        mock_iex.return_value = None
        server.stock_info()
        mock_jsonify.assert_not_called()


        mock_iex.return_value = {'key': 'value'}
        # change_percent.return_value = .02
        stock_data = [{
                        'latestPrice': 200,
                        'companyName': 'Amazon',
                        'symbol': 'BYND',
                        'changePercent': 0.02,
                        'change': 6.00
                        }]

        mock_money.return_value = "$1.10"

        server.stock_info()
        mock_jsonify.assert_called_once()



if __name__ == '__main__':
    unittest.main()