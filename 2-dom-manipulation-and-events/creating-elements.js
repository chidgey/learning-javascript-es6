// creating elements - adding to the DOM

const li = document.createElement('li');

// add properties
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

// add a label
li.appendChild(document.createTextNode('Hello moon'));

// create the delete link
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<li class="fa fa-remove"></i>';
li.appendChild(link);

// insert it into the DOM
document.querySelector('ul.collection').appendChild(li);

console.log(li);