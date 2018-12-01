 // for loop, when you know how many iterations
 for (let i = 0; i < 8; i++) {
  if(i === 2) {
    console.log('2 is good!');
    continue; // next iteration
  }
  if(i == 5) {
    break; // break out, no more
  }
  
  console.log(i);
 }

 // while loop, when it's not clear when to stop
 let i = 0;
 while(i < 10){
   console.log('while: ' + i);
   i++;
 }

 // do while loops always run at least once.
 i = 0;
 do {
   console.log('do while: ' + i);
   i++;
 } while(i <10)

 // arrays with for loops
 const cars = ['Ford', 'Skoda', 'Volkswagon', 'Mercedes'];
 for(let i =0; i < cars.length; i++) {
   console.log(cars[i]);
 }

 // using the anonymous function to enumerate an array with forEach - cleaner code. Passes in some other useful details.
 cars.forEach(function(car, index, array) {
  console.log('forEach: ' + car + ' id: ' + index);
  // dump out the whole array on the last element only
  if (index === array.length-1) console.log(array);
 });

 // map method
 const users = [
   { id: 1, name: 'Jon'},
   { id: 2, name: 'Adam'},
   { id: 3, name: 'Kelly'},
   { id: 4, name: 'Anabel'},
   { id: 505, name : 'Jeff'}
 ];

 // maps values from an array of objects, into an array
 const ids = users.map(function(user) {
   return user.id;
 });

 console.log(ids);

 const user = {
   firstName: 'Adam',
   lastName: 'Chidgey',
   age: 36
 };

 for (let x in user) {
   console.log(`Key: ${x}, Value: ${user[x]}`);
 }