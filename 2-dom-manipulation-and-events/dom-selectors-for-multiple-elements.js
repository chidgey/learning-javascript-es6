// DOM selectors for multiple elements
// These selectors return html collections or nodelists, similar to arrays. Can be converted into arrays.

// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items); // all items
console.log(items[0]); // grab the first item
items[0].style.color = 'red';
items[3].textContent = 'Hello moon!';

// specify only collecton item classes within ul's
const unorderedListItemsWithCollectionItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(unorderedListItemsWithCollectionItems);

// document.getElementsByTagName
let listItems = document.getElementsByTagName('li');
console.log(listItems); // all list items
console.log(listItems[0]);

listItems[0].style.color = 'green';
listItems[3].textContent = 'mongo jerry';

// convert HTML collection of nodes into an array
listItems = Array.from(listItems);

// reverse them all and re-render
listItems.reverse();
listItems.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

// document.querySelectorAll
// perhaps a better way, as we don't need to cast to an array, like the above as we use a node list not a html collection.
const moreItems = document.querySelectorAll('ul.collection li.collection-item');
moreItems.forEach(function(item, index) {
  item.textContent = `${index}: wowzers!`;
});

console.log(moreItems);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// again, zebra sripes
liOdd.forEach(function(li,index) {
  li.style.background = '#aaa';
});

// zebra striping the background
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);