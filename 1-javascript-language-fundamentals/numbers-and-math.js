// numbers & the math object
const num1 = 100;
const num2 = 50;
let val;

// simple math
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 % num2;

// using the math object
val = Math.PI;
val = Math.E;
val = Math.round(3.8);
val = Math.ceil(6.4);
val = Math.floor(6.9);
val = Math.sqrt(64);
val = Math.abs(-40);
val = Math.pow(8, 2);
val = Math.min(2,43,66,67,23,1,-5);
val = Math.max(2,43,66,67,23,1,-5);
// random number from 1 to 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);