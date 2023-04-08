"use strict";
const guestList = ["Albert Einstein", "Marie Curie", "Neil Armstrong", "Ada Lovelace", "Stephen Hawking", "Isaac Newton"];
// Print the original guest list
console.log("Original guest list:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// Add one new guest to the beginning of the array
guestList.unshift("Galileo Galilei");
// Add one new guest to the middle of the array using splice()
guestList.splice(4, 0, "Charles Darwin");
// Use push() to add one new guest to the end of the list
guestList.push("Nikola Tesla");
// Print a message indicating the number of people invited to dinner
console.log("\nNumber of people invited to dinner: " + guestList.length);
// Loop through the array and print a message inviting each person to dinner
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are cordially invited to dinner at my place!");
}
