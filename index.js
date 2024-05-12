#! /usr/bin/env node
import inquirer from "inquirer";
// // computer will genrate a new random number - Done.
// // user input for guessing 
// // compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
console.log(randomnumber);
const randomNumber = 13;
const answer = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please gues a number between 1-10",
    },
]);
if (answer.userguessedNumber === randomNumber) {
    console.log("congradulations! you guessed right number.");
}
else {
    console.log("you guess a wrong number");
}
