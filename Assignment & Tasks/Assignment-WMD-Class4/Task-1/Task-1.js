"use strict";
// Declare variables for exam scores
let englishMarks = 35;
let urduMarks = 25;
// Calculate average score
let average = (englishMarks + urduMarks) / 2;
// Determine grade based on average score using if-else conditionals
let grade;
if (average >= 90) {
    grade = "A+";
}
else if (average >= 80) {
    grade = "A";
}
else if (average >= 70) {
    grade = "B";
}
else if (average >= 60) {
    grade = "C";
}
else {
    grade = "F";
}
// Display the grade to the user
console.log(`Your grade is: ${grade}`);
