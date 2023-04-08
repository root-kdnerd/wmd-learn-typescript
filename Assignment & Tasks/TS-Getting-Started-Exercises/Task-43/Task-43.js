"use strict";
let magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller', 'Uncle Majboor'];
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push('Great ' + magician);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let great_magicians = make_great([...magicians]);
show_magicians(magicians);
console.log('');
show_magicians(great_magicians);
