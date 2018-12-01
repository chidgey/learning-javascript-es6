// event listeners and the event object


// using an anonymous function, to override the default click behaviour
// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('Click!');
//   e.preventDefault();
// });

// cleaner and more obvious like this.
function onClick(e) {
  //console.log('Clicked');
  
  let val;

  // event target element - the thing that generatred the event
  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = 'Hello moon!';

  // event type
  val = e.type;

  // when the even was raised
  val = e.timeStamp;

  // coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // coords relative to the element
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);

  e.preventDefault();
};

document.querySelector('.clear-tasks').addEventListener('click', onClick);