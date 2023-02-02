
export class Customer{
    //a class that stores the customer information

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
        //a constructor that will take name, age, gender, and phone number of the user
    
        customerInfo():string{ // a function that returns the customer information
        return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}   `
    }
}