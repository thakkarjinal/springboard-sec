from unittest import TestCase
from forex import Forex
from forex_python.converter import RatesNotAvailableError

class ForexTestCase(TestCase):
    def setUp(self):
        self.forex = Forex()

    def test_check_code_invalid(self):
        msg = self.forex.check_code_invalid('QWE')
        self.assertEqual(msg, "Not a valid code: QWE")
        msg = self.forex.check_code_invalid("INR")
        self.assertIsNone(msg)

    def test_get_converted_amount(self):
        from_currency = "INR"
        to_currency = "INR"
        amount = 1
        conv_amount = self.forex.get_converted_amount(from_currency, to_currency, amount)
        self.assertEqual(conv_amount, 1)

    def test_get_symbol(self):
        currency = 'INR'
        actual_symbol = self.forex.get_symbol(currency)
        self.assertEqual(actual_symbol, '₹')

        
