from flask import Flask, session, render_template, request, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from forex import Forex

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = "SECRETKEY"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

def check_for_validation(currency_from, currency_to, amount):
    forex = Forex()
    currency_from_check = forex.check_code_invalid(currency_from)
    import pdb;pdb.set_trace()
    if currency_from_check:
        flash(currency_from_check)
        return redirect('/')

    currency_to_check = forex.check_code_invalid(currency_from)
    if currency_to_check:
        flash(currency_to_check)
        return redirect('/')

    if not(isinstance(amount, int) or isinstance(amount, float)):
        flash("Invalid number: {}".format(amount))
        return redirect('/')

@app.route('/')
def currency_convert_form():
    return render_template('currency_convert.html')

@app.route('/calculate_new_currency', methods=['POST'])
def calculate_new_currency():
    currency_from = request.form['from-currency']
    currency_to = request.form['to-currency']
    amount = request.form['amount']

    forex = Forex()
    check_for_validation(currency_from, currency_to, amount)
    new_amount = forex.get_converted_amount(currency_from, currency_to, amount)
    symbol = forex.get_symbol(currency_to)
    
    return render_template('show_currency.html', symbol=symbol, new_amount=new_amount)



# Check if flash stops submission
# Tests