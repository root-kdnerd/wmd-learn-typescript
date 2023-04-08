"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Step 1: Declare variables for marks
let englishMarks;
let mathsMarks;
let scienceMarks;
// Step 2: Get input from user for each subject
englishMarks = parseFloat(prompt('Enter English marks: '));
mathsMarks = parseFloat(prompt('Enter Maths marks: '));
scienceMarks = parseFloat(prompt('Enter Science marks: '));
// Step 3: Calculate the average marks
const average = (englishMarks + mathsMarks + scienceMarks) / 3;
// Step 4: Display the average marks to the user
console.log(`The average marks are ${average.toFixed(2)}`);
