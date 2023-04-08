"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*import inquirer from "inquirer";
import chalk from "chalk";
import animation from "chalk-animation";

console.log(chalk.green("Hello, welcome to my program!"));

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "color",
      message: "Choose a color:",
      choices: ["red", "green", "blue"],
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Are you ready to continue?",
      default: true,
    },
  ])
  .then((answers) => {
    console.log(
      chalk.bgAnsi256(answers.color)(
        `Nice to meet you, ${answers.name}!`
      )
    );
    if (answers.confirm) {
      console.log(
        chalk.blue("Great! Let's get started...")
      );
      const rainbow = animation.rainbow("Loading...");
      setTimeout(() => {
        rainbow.stop();
        console.log(chalk.yellow("Done!"));
      }, 2000);
    } else {
      console.log(chalk.red("Okay, goodbye!"));
    }
  }); */
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
function promptUser() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'list',
            name: 'color',
            message: 'Pick a color:',
            choices: ['red', 'green', 'blue'],
        },
        {
            type: 'confirm',
            name: 'exit',
            message: 'Do you want to exit?',
        },
    ];
    inquirer_1.default.prompt(questions).then((answers) => {
        const { name, color, exit } = answers;
        // Use chalk to log the name in the chosen color
        console.log(chalk_1.default.hex(getColorHexCode(color))(`Hello, ${name}!`));
        // Use chalk-animation to animate the color of the name
        const rainbow = chalk_animation_1.default.rainbow(`Hello, ${name}!`);
        setTimeout(() => {
            rainbow.stop();
        }, 5000);
        if (!exit) {
            promptUser();
        }
        else {
            console.log('Goodbye!');
        }
    });
    function getColorHexCode(color) {
        switch (color) {
            case 'red':
                return '#FF0000';
            case 'green':
                return '#00FF00';
            case 'blue':
                return '#0000FF';
            default:
                return '#FFFFFF';
        }
    }
}
promptUser();
