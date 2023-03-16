function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var i = 0; i < magicians.length; i++) {
        console.log("- ".concat(magicians[i]));
    }
}
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
