"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number:'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number:'
    }
])
    .then((answers) => {
    const num1 = answers.num1;
    const num2 = answers.num2;
    const average = (num1 + num2) / 2;
    console.log(`The average of ${num1} and ${num2} is: ${average}`);
});
// .catch((error) => {
//   console.error(error);
// });
