from flask import flash

def check_for_validation(forex, currency_from, currency_to, amount):
    """
    This method adds validation if the user enters any wrong type of currency or amount
    """
    errors = False
    currency_from_check = forex.check_code_invalid(currency_from)
    if currency_from_check:
        errors = True
        flash(currency_from_check)

    currency_to_check = forex.check_code_invalid(currency_to)
    if currency_to_check:
        errors = True
        flash(currency_to_check)

    try:
        float(amount)
    except(ValueError):
        errors = True
        flash("Invalid Number: {}".format(amount))
    
    return errors