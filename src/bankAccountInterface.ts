export interface bankAccountInterface{ //interface
    accountBalance:number; //property of type number
    debit(amount:number):string; //function taking number type parameter and returning string
    credit(amount:number):string; //function taking number type parameter and returning string
}