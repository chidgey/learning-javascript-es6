// removing and replacing elements

const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Tasking list'));

const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

// do the replacement
cardAction.replaceChild(newHeading, oldHeading);

// removing an element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
lis[0].remove();

// removing child elements
list.removeChild(lis[3]);

// classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0]; // picking element classes

// it's easy to decorate or remove classes from things
link.classList.add('test');
link.classList.remove('test');
val = link;

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
// now we can remove it
link.removeAttribute('title');

console.log(val);