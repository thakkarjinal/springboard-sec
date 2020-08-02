from flask import Flask, session, render_template, request, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from forex import Forex
from helper import check_for_validation

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = "SECRETKEY"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def currency_convert_form():
    return render_template('currency_convert.html')

@app.route('/calculate_new_currency', methods=['POST'])
def calculate_new_currency():
    currency_from = request.form['from-currency']
    currency_to = request.form['to-currency']
    amount = request.form['amount']

    forex = Forex()
    if check_for_validation(forex, currency_from, currency_to, amount):
        return redirect("/")
    new_amount = forex.get_converted_amount(currency_from, currency_to, amount)
    symbol = forex.get_symbol(currency_to)
    
    return render_template('show_currency.html', symbol=symbol, new_amount=new_amount)