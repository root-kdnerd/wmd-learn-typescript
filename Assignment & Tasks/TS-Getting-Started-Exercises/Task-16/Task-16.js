"use strict";
let guestList = ["Albert Einstein", "Marie Curie", "Neil Armstrong"];
// Print the original guest list
console.log("Original guest list:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// Add a new guest to the middle of the array
guestList.splice(1, 0, "Isaac Newton");
// Add a new guest to the end of the array
guestList.push("Ada Lovelace");
// Print the updated guest list
console.log("\nUpdated guest list:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place!`);
}
// Inform people that a bigger dinner table has been found
console.log("Great news! I found a bigger dinner table, so we can invite even more people!");
