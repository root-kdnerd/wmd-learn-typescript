"use strict";
exports.__esModule = true;
/*let alienColor: string = 'green';
/*let alienColor: string = 'red';
let alienColor: string = 'yellow'; */
var prompt = require("prompt-sync")({ sigint: true });
var alienColor = prompt("What is Alien's color?");
console.log("\n");
if (alienColor === 'green') {
    console.log('The player earned 5 points.');
}
else if (alienColor === 'yellow') {
    console.log('The player earned 10 points.');
}
else {
    console.log('The player earned 15 points.');
}
