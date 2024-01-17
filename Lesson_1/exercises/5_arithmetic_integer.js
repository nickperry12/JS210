/*

Write a program that prompts the user for two positive integers, and then prints
the results of the following operations on those two numbers: addition,
subtraction, product, quotient, remainder, and power. Do not worry about
validating the input.

*/

let rlSync = require('readline-sync');
let numberOne = parseInt(rlSync.question("What's the first number?\n"), 10);
let numberTwo = parseInt(rlSync.question("What's the second number?\n"), 10);

console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne % numberTwo);
console.log(numberOne ** numberTwo);
