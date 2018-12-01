// dates and times

let val;
const today = new Date();
let birthday = new Date('1980-12-20T11:30:00');
//birthday = new Date('January 1- 1980');
val = today;
val = birthday;
// zero based months! keep that in mind! 
val = today.getMonth();
val = today.getDate();
// get the day of the week, sun(0), mon(1), tues(2), wed, thus
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// timestamp value, time passed since jan 1970
val = today.getTime();

// add some months, interestingly this doesn't increment the year when it rolls over.
birthday.setMonth(6);
// other operations in the series to work with dates.
birthday.setFullYear(1978);
birthday.setHours(10);
birthday.setMinutes(15);
birthday.setSeconds(55);
birthday.setMilliseconds(555);

val = birthday;

console.log(val);