// function declarations and expressions

// function declarations, in ES5
function greetES5(firstName, lastName){
  // ES5 way of setting defaults
  if (typeof firstName === 'undefined') {firstName = 'Adam';}
  if (typeof lastName === 'undefined') {lastName = 'Chidgey';}
  return 'Hello ' + firstName + ' ' + lastName;
}

// function declarations, in ES6
function greetES6(firstName = 'John', lastName = 'Doe'){
  return `Hello ${firstName} ${lastName}`;
}

console.log(greetES5());
console.log(greetES6());

// function expressions
const square = function(x) {
  return x * x;
};
console.log(square(4));

// Immediately invokable function expressions - IIFEs
(function() {
    console.log('TADA!');
})();
// handy, used in the module pattern to keep scope 'private'
(function(name) {
  console.log(`Hello ${name}`);
})('Adam');

// Property methods
const todo = {
  add : function() {
    console.log('Add item...');
  },
  remove : function(id) {
    console.log(`Remove ${id}`);
  }
}
// there is this way to add functions too
todo.edit = function(id) {
  console.log(`Editing ${id}`);
}

todo.add();
todo.remove(23);