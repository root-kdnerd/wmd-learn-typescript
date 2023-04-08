"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message "${message}"`);
}
make_shirt(); // Output: Making a large shirt with the message "I love TypeScript"
make_shirt("medium"); // Output: Making a medium shirt with the message "I love TypeScript"
make_shirt("small", "TypeScript is awesome!"); // Output: Making a small shirt with the message "TypeScript is awesome!"  
