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
import inquirer from 'inquirer';
import chalk from 'chalk';
import animation from 'chalk-animation';
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
    inquirer.prompt(questions).then((answers) => {
        const { name, color, exit } = answers;
        // Use chalk to log the name in the chosen color
        console.log(chalk.hex(getColorHexCode(color))(`Hello, ${name}!`));
        // Use chalk-animation to animate the color of the name
        const rainbow = animation.rainbow(`Hello, ${name}!`);
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
