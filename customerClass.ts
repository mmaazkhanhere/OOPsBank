import { bankAccount } from "./bankAccountInterface.js";

export class Customer{

    public firstName:string={get,set}
    public lastName:string={get,set}
    public gender:string={get,set};
    public age:number={get,set};
    public mobileNumber:number={set,get};

    public bankAcc:bankAccount={set,get};

    constructor(){}

    customerInfo():string{
        return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}
Account Balance: ${this.bankAcc.accountBalance}   `
    }
    
    // constructor(){
        
    // }
}