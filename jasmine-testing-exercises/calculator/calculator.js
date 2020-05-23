window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById('loan-amount');
  amount.value = 1000;
  let term = document.getElementById('loan-years');
  term.value = 2;
  let rate = document.getElementById('loan-rate');
  rate.value = 10;
  let values = {
    amount: amount.value,
    years: term.value,
    rate: rate.value
  }
  monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let n = values.years * 12;
  let i = values.rate / 100;
  monthlyPayment = p * i/(1 - Math.pow(1/(1+i), n));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
}
