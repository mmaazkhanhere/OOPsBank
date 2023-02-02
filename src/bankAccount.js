//importing interface 
export class bankAccount {
    amount;
    //class bankAccount to follow interface bankAccountInterface
    accountBalance = 1000; //dummy accountBalance
    constructor(amount) {
        this.amount = amount;
        //amount to be debited provided by the user
        this.amount = amount;
    }
    debit(amount) {
        //function that takes amount and returns a statement based on the input
        let statement = 'Sorry, you have insufficient balance!';
        //default statement
        if (amount > 0) {
            //if amount is greater than 0 than run this code
            statement = 'The amount you entered is wrong!';
            //if input amount is not number, this statement will be showed
            if (this.accountBalance > amount) {
                // if account balance is enough to be debited than deduct the amount and display the new balance
                this.accountBalance = this.accountBalance - amount;
                statement = `Transaction is successful! New balance is ${this.accountBalance}`;
            }
            //if account balance is not enough to be debited, print the following message
            else {
                statement = `You don't have enough money to do this transaction`;
            }
        }
        return statement; //return default message if input is wrong
    }
    credit(amount) {
        //if user want to add more balance to account, credit function is to be used
        let statement = 'Transaction failed!';
        //default statement
        if (amount > 0) {
            //if amount greater than 0, add amount to balance
            this.accountBalance = this.accountBalance + amount;
            if (amount > 100) {
                this.accountBalance = this.accountBalance - 1;
            }
            statement = 'Your account has been credited successfully';
        }
        return statement; //default statement
    }
}
