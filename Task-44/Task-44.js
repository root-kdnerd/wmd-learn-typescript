function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich will have: ".concat(items.join(', ')));
}
make_sandwich('turkey', 'cheddar cheese', 'lettuce', 'tomato');
make_sandwich('roast beef', 'swiss cheese', 'mayonnaise');
make_sandwich('peanut butter', 'jelly');
