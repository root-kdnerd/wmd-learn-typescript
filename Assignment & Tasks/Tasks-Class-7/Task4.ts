import promptSync from 'prompt-sync';

const prompt = promptSync();

// Get input from user for array of integers
const arr: number[] = [];
for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt(`Enter integer ${i+1}: `));
  arr.push(num);
}

// Find minimum and maximum sums
arr.sort((a, b) => a - b); // Sort array in ascending order
const minSum = arr[0] + arr[1] + arr[2] + arr[3];
const maxSum = arr[1] + arr[2] + arr[3] + arr[4];

// Display results to user
console.log(`${minSum} ${maxSum}`);
