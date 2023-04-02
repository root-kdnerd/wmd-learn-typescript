import inquirer from 'inquirer';

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
    validate: (input: string) => {
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
    validate: (input: string) => {
      // Ensure the input is a valid number
      if (!Number(input)) {
        return 'Please enter a valid number';
      }
      return true;
    },
  },
];

// Define a function to perform the selected operation
function performOperation(operation: string, num1: number, num2: number): number {
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
inquirer.prompt(questions).then((answers:any) => {
  const result = performOperation(answers.operation, Number(answers.num1), Number(answers.num2));
  console.log(`Result: ${result}`);
});
