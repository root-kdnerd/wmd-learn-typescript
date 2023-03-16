var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Declare an array of locations
var locations = ["Bali", "New York", "Tokyo", "Paris", "Sydney"];
// Print the array in its original order
console.log("Original order:");
console.log(locations);
// Print the array in alphabetical order without modifying the original array
console.log("\nAlphabetical order:");
console.log(__spreadArray([], locations, true).sort());
// Print the array to show that it's still in its original order
console.log("\nStill in original order:");
console.log(locations);
// Print the array in reverse alphabetical order without modifying the original array
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], locations, true).sort().reverse());
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
