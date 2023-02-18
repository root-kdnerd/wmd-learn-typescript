let string1 = 'apple';
let string2 = 'orange';

console.log("Is string1 equal to string2? I predict False.");
console.log(string1 == string2);

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2);

let string3 = 'Peach';
let string4 = 'peach';

console.log("Is string3 equal to string4 ignoring case? I predict True.");
console.log(string3.toLowerCase() == string4.toLowerCase());

console.log("Is string3 not equal to string4 ignoring case? I predict False.");
console.log(string3.toLowerCase() != string4.toLowerCase());

let num1 = 5;
let num2 = 10;

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);

console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);

console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);

let num3 = 15;

console.log("Is num1 less than num2 and num3 greater than num2? I predict True.");
console.log(num1 < num2 && num3 > num2);

console.log("Is num1 less than num2 and num3 less than num2? I predict False.");
console.log(num1 < num2 && num3 < num2);

console.log("Is num1 less than num2 or num3 less than num2? I predict True.");
console.log(num1 < num2 || num3 < num2);

console.log("Is num1 greater than num2 or num3 greater than num2? I predict False.");
console.log(num1 > num2 || num3 > num2);

let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in fruits? I predict True.");
console.log('apple' in fruits);

console.log("Is 'pear' in fruits? I predict False.");
console.log('pear' in fruits);

console.log("Is 'pear' not in fruits? I predict True.");
console.log(!('pear' in fruits));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!('apple' in fruits));
