// arrays and array methods
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,56,34,56,77);
const fruit = ['Apple','Plum','Strawberry', 'Apricot'];
const mixed = [22,'moon',true,undefined, null, {a:1,b:2}, new Date()];

let val;

// Get array length
val = mixed.length;
// check if something is an array
val = Array.isArray(mixed);
val = Array.isArray('not an array');
// Get a single value, arrays are zero based
val = numbers[2];
// insert into array
numbers[2] = 66;
// find the index of a value
val = numbers.indexOf(66);
// Mutating arrays
// push to the back of the array
numbers.push(700);
// add to the front of the array
numbers.unshift(120);
// pop a value from the end, 700 comes off
numbers.pop();
// take off from the front, removes the 120
numbers.shift();
// splice elements out of the array - removes 56
numbers.splice(1,1);
// reverse
numbers.reverse();
// concat arrays
val = numbers.concat(mixed);
// sorting arrays
val = fruit.sort();
val = numbers.sort();
// using a compare callback function for sorting
val = numbers.sort(function(x,y)
{
  return x - y;
});
// reverese sort
val = numbers.sort(function(x,y) {
  return y - x;
});
// find function - find first number element under 50
val = numbers.find(function(num){
  return num < 50;
});

//console.log(numbers);
console.log(val);