"use strict";
var readline = require('readline');
var _a = require('./file1'), add = _a.add, subtract = _a.subtract, multiply = _a.multiply, divide = _a.divide;
var _b = require('./file2'), getCircleArea = _b.getCircleArea, getRectangleArea = _b.getRectangleArea;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number: ', function (num1) {
    rl.question('Enter another number: ', function (num2) {
        console.log("\nPerforming calculations using ".concat(num1, " and ").concat(num2, ":"));
        console.log("\nAddition: ".concat(add(num1, num2)));
        console.log("Subtraction: ".concat(subtract(num1, num2)));
        console.log("Multiplication: ".concat(multiply(num1, num2)));
        console.log("Division: ".concat(divide(num1, num2)));
        console.log("\nCalculating areas using ".concat(num1, " as base and ").concat(num2, " as height:"));
        console.log("Circle area: ".concat(getCircleArea(num1)));
        console.log("Rectangle area: ".concat(getRectangleArea(num1, num2)));
        rl.close();
    });
});
