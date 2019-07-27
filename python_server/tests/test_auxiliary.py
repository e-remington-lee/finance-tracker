from python_server import money
import unittest


class Test_money(unittest.TestCase):
    def test_money(self):
        money1 = 12.3334454
        self.assertEqual(str(12.33), money.money(money1))
        money2 = 14.11115324
        self.assertNotEqual(str(14.12), money.money(money2))


if __name__ == '__main__':
    unittest.main()