"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file1_js_1 = require("./file1.js");
const file2_js_1 = require("./file2.js");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        const number1 = parseInt(num1);
        const number2 = parseInt(num2);
        console.log(`\nAddition: ${(0, file1_js_1.add)(number1, number2)}`);
        console.log(`Subtraction: ${(0, file1_js_1.subtract)(number1, number2)}`);
        console.log(`Multiplication: ${(0, file1_js_1.multiply)(number1, number2)}`);
        console.log(`Division: ${(0, file1_js_1.divide)(number1, number2)}`);
        console.log(`\nArea of Circle: ${(0, file2_js_1.calculateAreaOfCircle)(number1)}`);
        console.log(`Area of Rectangle: ${(0, file2_js_1.calculateAreaOfRectangle)(number1, number2)}`);
        rl.close();
    });
});
