// Type conversion

let val;

// turning things to strings

// number to string
val = String(5+5);
// bool as a string
val = String(true);
// date to string
val = String(new Date());
// array to string
val = String([1,2,3,4]);
// toString() method
val = (5).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

// turning strings to numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hi!'); // NaN
val = Number([1,2,3])

// doesn't parse the decimals
val = parseInt('100.30');
val = parseFloat('100.35');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// Type cohersion - js changing types for us
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);