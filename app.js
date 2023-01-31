#! /usr/bin/env node
import inquirer from "inquirer";
import { Customer } from "./customerClass.js";
import { bankAccount } from "./bankAccount.js";
async function Bank() {
    let getData = await inquirer.prompt([{
            name: 'firstName',
            type: 'input',
            message: 'Enter your first name: '
        }, {
            name: 'lastName',
            type: 'input',
            message: 'Enter your last name: '
        }, {
            name: 'gender',
            type: 'list',
            message: 'Select your gender: ',
            choices: ['Male', 'Female']
        }, {
            name: 'age',
            type: 'number',
            message: 'Enter your age: '
        }, {
            name: 'phoneNumber',
            type: 'input',
            message: 'Enter your phone number: '
        }, {
            name: 'amount',
            type: 'input',
            message: 'Enter amount to debit: '
        }]);
    let newCustomer = new Customer(getData.firstName, getData.lastName, getData.gender, getData.age, getData.phoneNumber);
    console.log(newCustomer);
    let newAccount = new bankAccount(getData.amount);
    console.log(newAccount);
    console.log(newAccount.debit(getData.amount));
}
Bank();
