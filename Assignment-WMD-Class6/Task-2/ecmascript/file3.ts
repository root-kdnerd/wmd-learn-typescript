import { add, subtract, multiply, divide } from './file1.js';
import { calculateAreaOfCircle, calculateAreaOfRectangle } from './file2.js';

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the first number: ', (num1: string) => {
  rl.question('Enter the second number: ', (num2: string) => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    console.log(`\nAddition: ${add(number1, number2)}`);
    console.log(`Subtraction: ${subtract(number1, number2)}`);
    console.log(`Multiplication: ${multiply(number1, number2)}`);
    console.log(`Division: ${divide(number1, number2)}`);

    console.log(`\nArea of Circle: ${calculateAreaOfCircle(number1)}`);
    console.log(`Area of Rectangle: ${calculateAreaOfRectangle(number1, number2)}`);

    rl.close();
  });
});

