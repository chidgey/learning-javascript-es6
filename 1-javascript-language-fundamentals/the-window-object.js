// a look at the window object

// 1990s style dialogs! 
// alert
//alert('hello');

// prompt
//const input = prompt();
//alert(input);

// confirm
//if(confirm('Are you sure?')) {
//  console.log('YES');
//} else {
//  console.log('NO');
//};

let val;

// outside, including the chrome
val = window.outerHeight;
val = window.outerWidth;

// inside, minus the chrome
val = window.innerHeight;
val = window.innerWidth;

// scroll points, used to trigger animations for example.
val = window.scrollY;
val = window.scrollX;

// Very useful properties from this.
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirection
// window.location.href = 'http://google.com';

// reload - for a function
//window.location.reload();

// history object
//window.history.go(-2); // back 2 links
val = window.history.length;

// navigator object - the browser itself
// this object is a treasure chest of cool stuff! platform, browser details the lot!
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);