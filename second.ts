abstract class Account {
    AccNo:number;
    Balance:number;

    constructor(_accNO:number,_balance:number){
        this.AccNo = _accNO;
        this.Balance = _accNO
    }

    get AccNum(){
        return this.AccNo;
    }

    set AccNum(acc:number){
        this.AccNo = acc;
    }
    

    debitamount(amount:number):void{
            ;
    }

    creditamount(amount:number):void{

    }

    getbalance():number{
        return this.Balance;
    }
}

interface IAccount{
    DateOfOpening:Date;

    addCustomer();
    removeCustomer();
}

class SavingAccount  extends Account implements IAccount{
    Min_balance:number;
    DateOfOpening:Date;

    constructor(_acc:number, _balance:number, mbalance:number, dop:Date){
        super(_acc,_balance);
        this.Min_balance = mbalance;
        this.DateOfOpening = dop;
    }

    addCustomer(){
        ;
    }
    removeCustomer(){
        ;
    }
}

class CurrentAccount  extends Account implements IAccount{
    InterestRate:number;
    DateOfOpening:Date;

    constructor(_acc:number, _balance:number, irate:number, dop:Date){
        super(_acc,_balance);
        this.InterestRate = irate;
        this.DateOfOpening = dop;
    }

    addCustomer(){
        ;
    }
    removeCustomer(){
        ;
    }
}