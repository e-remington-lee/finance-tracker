import unittest
import server
import stock_calculator
import decimal

# print(stock_calculator.calculate_price(1,2))

class Test_calculator(unittest.TestCase):

    def test_add(self):
        result = stock_calculator.calculate_price(5.50, 10)
        self.assertIsInstance(type(result), type(float))
    
    # def test_decimals(self):
        #check to return a decimal?

class Test_endpoints(unittest.TestCase):
    def test_login(self):
        pass

if __name__ == '__main__':
    unittest.main()