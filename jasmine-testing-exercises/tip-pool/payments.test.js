describe('submitPaymentInfo method', function() {
    const summaryTbody = document.querySelectorAll('#summaryTable tbody');
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    })

    it('should add a new payment entry in allPayments', function() {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('10');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
    })
    it('should reset billAmtInput and tipAmtInput', function() {
        submitPaymentInfo();
        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    })

    afterEach(function() {
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTbody.innerHTML = '';
    })
})