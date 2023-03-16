var guestList = ["Albert Einstein", "Marie Curie", "Neil Armstrong"];
// Print the original guest list
console.log("Original guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// Remove a guest who can't make it and add a new guest
guestList[1] = "Stephen Hawking";
guestList.push("Ada Lovelace");
// Print the updated guest list
console.log("\nUpdated guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// Loop through the array and print a message inviting each person to dinner
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are cordially invited to dinner at my place!");
}
