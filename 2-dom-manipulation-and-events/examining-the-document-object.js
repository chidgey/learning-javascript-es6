// Examining the Document Object

let val;
// accessing nodes within the document
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// playing with forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// playing with all the links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// fun with the images of a page
val = document.images;

// fun with the script tags
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// get all the scripts in the page, loop over and inspect
// as an array.
let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script) {
  console.log(script);
})

console.log(val);