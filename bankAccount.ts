import {bankAccount} from "./bankAccountInterface.js";

class bankAccount implements bankAccount{

    public accountBalance:number;
    
    constructor(){
        this.accountBalance=100
    }

    debit(amount:number):string{
        let statement='Sorry, you have insufficient balance!';

        if(amount>0){
            statement='The amount you entered is wrong!'

            if(this.accountBalance>amount){
                this.accountBalance=this.accountBalance-amount;
                statement=`Transaction is successful! New balance is ${this.accountBalance}`;
            }
            else{
                statement=`You don't have enough money to do this transaction`
            }
        }
        return statement;
    }
    
    credit(amount:number):string{
        let statement:string='Transaction failed!'

        if(amount>0){
            this.accountBalance=this.accountBalance+amount;
            if(amount>100){
                this.accountBalance=this.accountBalance - 1;
            }

            statement='Your account has been credited successfully'
        }
        return statement;
    }
}