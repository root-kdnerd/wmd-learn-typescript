"use strict";
function add(a, b, res) {
    const sum = a + b;
    res(sum);
}
function subtract(a, b, res) {
    const difference = a - b;
    res(difference);
}
add(15, 0.23567, (result) => {
    console.log("The sum is: " + result);
});
subtract(10, 4, (result) => {
    console.log("The difference is: " + result);
});
