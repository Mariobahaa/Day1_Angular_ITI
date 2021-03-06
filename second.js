class Account {
    constructor(_accNO, _balance) {
        this.AccNo = _accNO;
        this.Balance = _accNO;
    }
    get AccNum() {
        return this.AccNo;
    }
    set AccNum(acc) {
        this.AccNo = acc;
    }
    debitamount(amount) {
        ;
    }
    creditamount(amount) {
    }
    getbalance() {
        return this.Balance;
    }
}
class SavingAccount extends Account {
    constructor(_acc, _balance, mbalance, dop) {
        super(_acc, _balance);
        this.Min_balance = mbalance;
        this.DateOfOpening = dop;
    }
    addCustomer() {
        ;
    }
    removeCustomer() {
        ;
    }
}
class CurrentAccount extends Account {
    constructor(_acc, _balance, irate, dop) {
        super(_acc, _balance);
        this.InterestRate = irate;
        this.DateOfOpening = dop;
    }
    addCustomer() {
        ;
    }
    removeCustomer() {
        ;
    }
}
