const prompt = require("prompt-sync")({sigint:true});
let alienColor: string = prompt("What is Alien's color? (Color is case-sensitive)");
console.log(`\n`);
export{};

if (alienColor === 'Green') {
  console.log('The player earned 5 points.');
} else if (alienColor === 'Yellow') {
  console.log('The player earned 10 points.');
} else if (alienColor === 'Red') {
  console.log('The player earned 15 points.'); 
} else {
    console.log('Without appropriate color, points cant be determined');
}