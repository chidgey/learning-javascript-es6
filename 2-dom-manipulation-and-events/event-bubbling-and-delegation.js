// event bubbling and event delegation

// event bubbling allows parent elements to handle the event too

// event delegation has the logic on the parent element, and processes the events for their children. So, it kinda centralises the event handling model.


// EVENT BUBBLING - all these events are registered, and they all get a chance to handle the events.
// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// EVENT DELEGATION
// can be considered the opposite
//const deleteItemElement = document.querySelector('.delete-item');

// document.body.addEventListener('click', deleteItem);
// function deleteItem(e) {
//   console.log('Delete item');
//   console.log(e.target);
// };

// event delegation needed when new elements are added to the DOM, in our case here, only the first element responds to the event. So we use event delegation to catch these events in a single place on the parent.
//deleteItemElement.addEventListener('click', deleteItem);

// here we attach to a parent element - bit extreme, but it's the document.
document.body.addEventListener('click', deleteItem);
function deleteItem(e) {

  // this isn't very robust, due to the exact class name matching needed.
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('Delete item');
  // }

  // better way to target, using classList doesn't require a verbatim match.
  if (e.target.parentElement.classList.contains('delete-item')){
    console.log('Delete item');

    // remove the entire item from the DOM
    e.target.parentElement.parentElement.remove();
  }

};
