export interface bankAccount{
    accountBalance:number;
    debit(amount:number):string;
    credit(amount:number):string;
}