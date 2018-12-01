console.clear();

// PRIMATIVE VALUE TYPES
// ---------------------
// Store directly on the stack 
// Are directly in the location the variable accesses

// string
const name = 'Adam Chidgey';
console.log(typeof name);
// Number
const age = 37;
console.log(typeof age);
// Boolean
const hasKids = false;
console.log(typeof hasKids);
// Null
const car = null;
console.log(typeof car);
//Undefined
let test;
console.log(typeof car);
// Symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPES
// ---------------
// Accessed by reference
// Objects that are store on the heap
// A pointer to a location in memory

// arrays
const hobbies = ['scuba','sailing'];
console.log(typeof hobbies);
// object literals
const address = {
  city : 'Manchester',
  country: 'UK'
}
console.log(typeof address);
// dates 
const today = new Date();
console.log(typeof today);
// functions
// anything else... 