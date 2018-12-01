// string and concatenation

const firstName = 'Adam';
const lastName = 'Chidgey';
const age = 37;
const str = 'Hello there my name is Adam';
const tags = 'design,development,marketing';

let val;

// Concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

// Appending
val = 'Adam ';
val += 'Chidgey'
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Indexof()
val = firstName.indexOf('A');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('0');
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,3);

// slice()
val = firstName.slice(0, 2);
val = firstName.slice(-2); // take last 2

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Adam','Kelly');

// includes()
val = str.includes('Adam');

console.log(val);