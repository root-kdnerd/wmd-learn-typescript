"use strict";
// Declare an array of locations
const locations = ["Bali", "New York", "Tokyo", "Paris", "Sydney"];
// Print the array in its original order
console.log("Original order:");
console.log(locations);
// Print the array in alphabetical order without modifying the original array
console.log("\nAlphabetical order:");
console.log([...locations].sort());
// Print the array to show that it's still in its original order
console.log("\nStill in original order:");
console.log(locations);
// Print the array in reverse alphabetical order without modifying the original array
console.log("\nReverse alphabetical order:");
console.log([...locations].sort().reverse());
// Print the array to show that it's still in its original order
console.log("\nStill in original order:");
console.log(locations);
// Reverse the order of the array
locations.reverse();
// Print the array to show that its order has changed
console.log("\nReversed order:");
console.log(locations);
// Reverse the order of the array again
locations.reverse();
// Print the array to show that it's back to its original order
console.log("\nBack to original order:");
console.log(locations);
// Sort the array in alphabetical order
locations.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in alphabetical order:");
console.log(locations);
// Sort the array in reverse alphabetical order
locations.sort().reverse();
// Print the array to show that its order has been changed
console.log("\nSorted in reverse alphabetical order:");
console.log(locations);
