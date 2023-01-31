export class Customer {
    firstName = { get, set };
    lastName = { get, set };
    gender = { get, set };
    age = { get, set };
    mobileNumber = { set, get };
    bankAcc = { set, get };
    constructor() { }
}
function customerInfo() {
    return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}
Account Balance: ${this.bankAcc.accountBalance}   `;
}
