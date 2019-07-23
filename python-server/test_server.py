import unittest
import server
import stock_calculator
import decimal
from unittest.mock import Mock

json = Mock()

print(json.loads('{"key": "value"}'))


class Test_calculator(unittest.TestCase):

    def test_add(self):
        result = stock_calculator.calculate_price(5.50, 10)
        self.assertIsInstance(type(result), type(float))
    
    # def test_decimals(self):
        #check to return a decimal?

class Test_endpoints(unittest.TestCase):
    def test_login(self):
        result = server.login_user()
        self.assertIsNotNone()

if __name__ == '__main__':
    unittest.main()