"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// Define the questions for the user
const questions = [
    {
        type: 'list',
        name: 'operation',
        message: 'Select an operation:',
        choices: ['addition', 'subtraction', 'multiplication', 'division'],
    },
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: (input) => {
            // Ensure the input is a valid number
            if (!Number(input)) {
                return 'Please enter a valid number';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: (input) => {
            // Ensure the input is a valid number
            if (!Number(input)) {
                return 'Please enter a valid number';
            }
            return true;
        },
    },
];
// Define a function to perform the selected operation
function performOperation(operation, num1, num2) {
    switch (operation) {
        case 'addition':
            return num1 + num2;
        case 'subtraction':
            return num1 - num2;
        case 'multiplication':
            return num1 * num2;
        case 'division':
            return num1 / num2;
        default:
            throw new Error('Invalid operation');
    }
}
// Prompt the user for input and perform the selected operation
inquirer_1.default.prompt(questions).then((answers) => {
    const result = performOperation(answers.operation, Number(answers.num1), Number(answers.num2));
    console.log(`Result: ${result}`);
});
