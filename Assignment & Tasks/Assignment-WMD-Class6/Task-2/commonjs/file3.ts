const readline = require('readline');
const { add, subtract, multiply, divide } = require('./file1');
const { getCircleArea, getRectangleArea } = require('./file2');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (num1: any) => {
  rl.question('Enter another number: ', (num2: any) => {
    console.log(`\nPerforming calculations using ${num1} and ${num2}:`);

    console.log(`\nAddition: ${add(num1, num2)}`);
    console.log(`Subtraction: ${subtract(num1, num2)}`);
    console.log(`Multiplication: ${multiply(num1, num2)}`);
    console.log(`Division: ${divide(num1, num2)}`);

    console.log(`\nCalculating areas using ${num1} as base and ${num2} as height:`);
    console.log(`Circle area: ${getCircleArea(num1)}`);
    console.log(`Rectangle area: ${getRectangleArea(num1, num2)}`);

    rl.close();
  });
});



