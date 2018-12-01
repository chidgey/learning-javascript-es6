// Object literals
const person = {
  firstName : 'Adam',
  lastName: 'Chidgey',
  age: 36,
  email: 'myEmail@outlook.com',
  hobbies: ['scuba','sailing'],
  address: {
    city: 'Manchester',
    country: 'UK'
  },
  getBirthYear: function() {
    return new Date().getFullYear() - this.age;
  }
};

let val;
// get the whole object
val = person;
// get a specitic value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['country'];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Adam', age: 36},
  { name: 'Kelly', age: 40 },
  { name: 'Alan', age: 45 },  
];

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name);
};