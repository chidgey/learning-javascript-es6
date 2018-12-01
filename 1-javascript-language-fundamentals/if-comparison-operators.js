// if statements and comparison operators

const id = 100;

// equal to
if (id == 100) {
  console.log('CORRECT');
}
else {
  console.log('INCORRECT');
}

// not equal to
if (id != 101) {
  console.log('CORRECT');
}
else {
  console.log('INCORRECT');
}

// equal to a value & type, x3 equals
if (id === 100) {
  console.log('CORRECT');
}
else {
  console.log('INCORRECT');
}

// ensures that the id is defined  before rendering
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
}
else {
  console.log('NO ID');
}

// greater than, or equal to, likewise, less than or equal to
if (id >= 100) {
  console.log('CORRECT');
}
else {
  console.log('INCORRECT');
}

// if, else if, else
const colour = 'yellow';
if (colour === 'red') {
  console.log('Colour is red');
}
else if (colour === 'blue'){
  console.log('Colour is blue');
}
else {
  console.log('Colour is not red or blue');
}

// logical operators
const name = 'Adam';
const age = 36;

// logical and operation
if (age > 0 && age < 12){
  console.log(`${name} is a child`);
}
else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
}
else {
  console.log(`${name} is an adult`);
}

// logical or operation
if (age < 16 || age > 65){
  console.log(`${name} cannot run in race`);
}
else {
  console.log(`${name} is registered for the race`);
}

// ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// optional curly braces
if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');