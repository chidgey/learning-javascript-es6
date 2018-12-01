// var, let and const demos

console.clear();

// Var allows reassignment
var firstName = 'Adam';
console.log(firstName);

// Let allows reassignment too
let fullName;
fullName = 'Adam Chidgey';
fullName = 'John Doe';
console.log(fullName);

// Const must be declared and assigned a value
// it cannot be re-assigned.
const name = 'Adam';
console.log(name);

// Oddly, here const means numbers cannot change
// however it's contents can mutate.
const numbers = [1,2,3];
numbers.push(4);
console.log(numbers);