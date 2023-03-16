"use strict";
// Declare an array of strings
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// Display the original array
console.log("Original array:", fruits);
// Append a string to the end of the array
fruits.push("fig");
// Display the array after appending a string
console.log("Array after appending:", fruits);
// Prepend a string to the beginning of the array
fruits.unshift("apricot");
// Display the array after prepending a string
console.log("Array after prepending:", fruits);
// Remove a string from a specific index in the array and replace it with another string
fruits.splice(2, 1, "grapefruit");
// Display the array after replacing a string
console.log("Array after replacing:", fruits);
