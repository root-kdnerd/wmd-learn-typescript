/*let alienColor: string = 'green';
/*let alienColor: string = 'red';
let alienColor: string = 'yellow'; */
const prompt = require("prompt-sync")({sigint:true});
let alienColor: string = prompt("What is Alien's color?");
console.log(`\n`);
export{};

if (alienColor === 'green') {
  console.log('The player earned 5 points.');
} else if (alienColor === 'yellow') {
  console.log('The player earned 10 points.');
} else {
  console.log('The player earned 15 points.');
}