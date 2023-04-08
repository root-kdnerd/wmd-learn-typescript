"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")({ sigint: true });
let alienColor = prompt("What is Alien's color? (Color is case-sensitive)");
console.log(`\n`);
if (alienColor === 'Green') {
    console.log('The player earned 5 points.');
}
else if (alienColor === 'Yellow') {
    console.log('The player earned 10 points.');
}
else if (alienColor === 'Red') {
    console.log('The player earned 15 points.');
}
else {
    console.log('Without appropriate color, points cant be determined');
}
