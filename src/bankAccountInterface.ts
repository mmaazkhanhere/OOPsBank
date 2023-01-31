export interface bankAccountInterface{
    accountBalance:number;
    debit(amount:number):string;
    credit(amount:number):string;
}