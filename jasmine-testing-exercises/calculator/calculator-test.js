it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 10000,
    years: 2,
    rate: 10
  }
  expect(calculateMonthlyPayment(values)).not.toBe('1113');
  expect(calculateMonthlyPayment(values)).toBe('1113.00');
});

it('should calculate the monthly rate correctly', function () {
  let values1 = {
    amount: 1000,
    years: 2,
    rate: 10
  }
  
  let values2 = {
    amount: 2000,
    years: 4,
    rate: 10
  }
  expect(calculateMonthlyPayment(values1)).toBe('111.30');
  expect(calculateMonthlyPayment(values2)).toBe('202.08');
});

/// etc
