export class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    // public firstName:string;
    // public lastName:string;
    // public gender:string;
    // public age:number;
    // public mobileNumber:number;
    constructor(firstName, lastName, gender, age, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
    customerInfo() {
        return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}   `;
    }
}
