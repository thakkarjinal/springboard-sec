from app import app
import json
from unittest import TestCase

class CurrencyConvertTest(TestCase):
    def test_currency_convert_form(self):
       with app.test_client() as client:
           res = client.get('/')
           html = res.get_data(as_text=True)
           self.assertEqual(res.status_code, 200)
           self.assertIn('<title>Currency Convert Form</title>', html)

    def test_currency_convert_post(self):
        with app.test_client() as client:
            data = {
                "from-currency": "INR",
                "to-currency": "INR",
                "amount": "10"
            }
            res = client.post('/calculate_new_currency', data)
            html = res.get_data(as_text=True)
            self.assertEqual(res.status_code, 200)
            self.assertIn("The result is ₹ 1", html)