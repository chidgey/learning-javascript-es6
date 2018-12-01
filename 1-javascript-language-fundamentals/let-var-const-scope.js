// block scope with let and const

// global scope
var a = 10;
let b = 20;
const c = 30;

function testing() {
  var a = 1;
  let b = 2;
  const c = 3;
  console.log('Function scope', a,b,c);
}

if(true) {
  // block scope
  var a = 4; // oh dear, this erased the global one! This is why we have let.
  let b = 5;
  const c = 6;
  console.log('Block scope',a,b,c);
};

// let and const stop us using global scope, and trashing stuff.
for(let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

testing();

console.log('Global scope', a,b,c);