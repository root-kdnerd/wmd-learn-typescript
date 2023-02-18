let a: number = 5;
let b: number = 10;

console.log(`Is ${a} equal to ${b}? I predict False.`);
console.log(a == b);

console.log(`Is ${a} not equal to ${b}? I predict True.`);
console.log(a != b);

console.log(`Is ${a} less than ${b}? I predict True.`);
console.log(a < b);

console.log(`Is ${a} greater than ${b}? I predict False.`);
console.log(a > b);

console.log(`Is ${a} less than or equal to ${b}? I predict True.`);
console.log(a <= b);

console.log(`Is ${a} greater than or equal to ${b}? I predict False.`);
console.log(a >= b);

let str1: string = "hello";
let str2: string = "HELLO";

console.log(`Is ${str1} equal to ${str2} ignoring case? I predict True.`);
console.log(str1.toUpperCase() == str2.toUpperCase());

console.log(`Is ${str1} equal to ${str2}? I predict False.`);
console.log(str1 == str2);

let bool1: boolean = true;
let bool2: boolean = false;

console.log(`Is ${bool1} AND ${bool2} true? I predict False.`);
console.log(bool1 && bool2);

console.log(`Is ${bool1} OR ${bool2} true? I predict True.`);
console.log(bool1 || bool2);