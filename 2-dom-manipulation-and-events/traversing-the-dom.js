// Traversing the DOM
// Navigating around the DOM - parent to child, etc...

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// child nodes - includes line break #text nodes for crlf
// most of the time we will filter these out using children.
// childnodes gives us the true structure of the html document
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get children - much tidier, returns a html collection - typically it's this we care about most of the time.
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello moon!';

// children of children, gives us a collection of the links
val = list.children[3].children[0].id = 'test-linkage';
val = list.children[3].children[0];

// get's the first node
val = list.firstChild;
// filter out text nodes, get the html element.
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// Getting parent nodes and elements, traversal
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// siblings, adjacent nodes / elements
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling

console.log(val);