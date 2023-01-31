import { bankAccount } from "./bankAccountInterface.js";

export class Customer{

    // public firstName:string;
    // public lastName:string;
    // public gender:string;
    // public age:number;
    // public mobileNumber:number;

    constructor(public firstName:string,
        public lastName:string,
        public gender:string,
        public age:number,
        public mobileNumber:number){
            this.firstName=firstName;
            this.lastName=lastName;
            this.gender=gender;
            this.age=age;
            this.mobileNumber=mobileNumber;
        }

    customerInfo():string{
        return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}   `
    }
}