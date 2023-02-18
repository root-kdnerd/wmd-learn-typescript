var guestList = ["Albert Einstein", "Marie Curie", "Neil Armstrong", "Isaac Newton", "Ada Lovelace"];
// Print the original guest list
console.log("Original guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner at my place!"));
}
// Shrinking the guest list
console.log("I'm sorry to inform you that my new dinner table won't arrive in time, so I can only invite two guests.\n");
var removedGuests = [];
// Remove guests from the end of the list until we have only two guests left
while (guestList.length > 2) {
    removedGuests.push(guestList.pop());
}
// Print the updated guest list
console.log("Updated guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are still cordially invited to dinner at my place!"));
}
// Print a message to each removed guest
for (var i = 0; i < removedGuests.length; i++) {
    console.log("Dear ".concat(removedGuests[i], ", I'm sorry to inform you that my new dinner table won't arrive in time, so I won't be able to host you this time. I hope we can meet soon!"));
}
console.log("\n------------------------\nSorry, due to unforeseen circumstances, we can only invite two people for dinner.");
guestList.splice(2, 4);
// Print the updated guest list
console.log("\n-----------------\nUpdated guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
console.log("\nNew Invitations are:\n------------------------------\n");
// Loop through the array and print a message inviting each person to dinner
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are cordially invited to dinner at my place!");
}
// Add a message that only two people can be invited for dinner
console.log("\nSorry, due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Dear " + removedGuest + ", I'm sorry to inform you that we can't invite you to dinner.");
}
// Print the updated guest list
console.log("\nUpdated guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// Loop through the array and print a message inviting each person to dinner
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are cordially invited to dinner at my place!");
}
console.log("\nDear " + guestList[0] + ", you are still invited to dinner at my place!");
console.log("Dear " + guestList[1] + ", you are still invited to dinner at my place!");
guestList.pop();
guestList.pop();
console.log("\nFinal guest list:");
console.log(guestList);
