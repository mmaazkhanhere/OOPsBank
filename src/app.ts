#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import { Customer } from "./customerClass.js" //importing classes that is to be used
import { bankAccount } from "./bankAccount.js"

async function Bank(){
    //main function that will get data from the user

    let getData= await inquirer.prompt([{
        name:'firstName',
        type:'input',
        message:'Enter your first name: '
    },{
        name:'lastName',
        type:'input',
        message:'Enter your last name: '
    },{
        name:'gender',
        type:'list',
        message:'Select your gender: ',
        choices:['Male','Female']
    },{
        name:'age',
        type:'number',
        message:'Enter your age: '
    },{
        name:'phoneNumber',
        type:'input',
        message:'Enter your phone number: '
    },{
        name:'amount',
        type:'input',
        message:'Enter amount to debit: '
    }])

    let newCustomer= new Customer(getData.firstName,getData.lastName,getData.gender,getData.age,getData.phoneNumber,)
    //a new customer object is created with personal information of the customer is passed
    console.log(newCustomer) //displaying the customer information

    let newAccount=new bankAccount(getData.amount)
    //a new new account is created to which amount to debit is passed  
    console.log(newAccount) //displaying the total balance and debit amount of the user
    console.log(newAccount.debit(getData.amount)) //debit function of the class is called to debit amount from the user
}
Bank(); //calling the function
