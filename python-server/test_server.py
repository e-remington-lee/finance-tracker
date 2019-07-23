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
    @patch("server.jsonify")
    @patch("server.jwt")
    @patch("server.request")
    @patch("server.login_account")
    def test_login_success(self, mock_login_account, mock_request, mock_jwt, mock_jsonify): 
        mock_request.headers = { 'x-email': 'fakeemail3@gmail.com',
                                'x-password': '1234'}
        mock_login_account.return_value = {'user_id': 1, 'account_id': 1, 'first_name': 'Remy'}
        server.login_user()
        mock_jsonify.assert_called_once()

    @patch("server.make_response")
    @patch("server.request")
    @patch("server.login_account")
    def test_login_failed(self, mock_login_account, mock_request, mock_make_response): 
        mock_request.headers = { 'x-email': 'fakeemail3@gmail.com',
                                'x-password': '1234'}

        mock_login_account.return_value = None
        result = server.login_user()
        mock_make_response.assert_called_once()

        
class Test_registration(unittest.TestCase):
    @patch("server.request")
    @patch("server.make_response")
    @patch("server.register_user_database")
    def test_registration_pass(self, mock_register_user_database, mock_make_response, mock_request):
        mock_register_user_database.return_value = {'key': 'value'}
        mock_request.get_json.return_value = {
        'firstName': 'Remy',
        'lastName': 'Lee',
        'email': 'fake@gmail.com',
        'password': 'password'
        }
        server.register_user()
        mock_make_response.assert_called_once()


if __name__ == '__main__':
    unittest.main()