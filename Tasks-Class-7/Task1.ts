import promptSync from 'prompt-sync';

const prompt = promptSync();

// Step 1: Declare variables for marks
let englishMarks: number;
let mathsMarks: number;
let scienceMarks: number;

// Step 2: Get input from user for each subject
englishMarks = parseFloat(prompt('Enter English marks: '));
mathsMarks = parseFloat(prompt('Enter Maths marks: '));
scienceMarks = parseFloat(prompt('Enter Science marks: '));

// Step 3: Calculate the average marks
const average = (englishMarks + mathsMarks + scienceMarks) / 3;

// Step 4: Display the average marks to the user
console.log(`The average marks are ${average.toFixed(2)}`); 