from forex_python.converter import CurrencyRates, CurrencyCodes, RatesNotAvailableError

class Forex():

    def check_code_invalid(self, currency):
        c = CurrencyRates()
        try:
            c.get_rates(currency)
        except RatesNotAvailableError:
            return "Not a valid code: {}".format(currency)
    
    def get_converted_amount(self, from_curr, to_curr, amount):
        c = CurrencyRates()
        return round(c.convert(from_curr, to_curr, float(amount)), 2)

    def get_symbol(self, currency):
        c = CurrencyCodes()
        return c.get_symbol(currency)

    
    
