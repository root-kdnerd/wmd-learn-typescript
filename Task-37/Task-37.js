function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " shirt with the message \"").concat(message, "\""));
}
make_shirt(); // Output: Making a large shirt with the message "I love TypeScript"
make_shirt("medium"); // Output: Making a medium shirt with the message "I love TypeScript"
make_shirt("small", "TypeScript is awesome!"); // Output: Making a small shirt with the message "TypeScript is awesome!"  
