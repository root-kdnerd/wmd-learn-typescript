const prompt1 = require('prompt-sync')();
//const prompt2 = require('prompt-sync')();

const num1: number = parseFloat(prompt1('Enter 1st number: '));
const num2: number = parseFloat(prompt1('Enter 2nd number: '));

const averag1: number = (num1 + num2) / 2;

console.log(`The average of ${num1} and ${num2} is: ${averag1}`);