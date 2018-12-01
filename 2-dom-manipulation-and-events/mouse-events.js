// Specific mouse events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// event handler
function runEvent(e) {
  console.log(`Event type ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  e.preventDefault();

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
}

// // attach various events for mouse stuff
// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);

// // only fire on initial parent element
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);

// // these elements fire multiple times, as you enter and leave embedded elements within card
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

// noisy event type, any mouse movement in the element
card.addEventListener('mousemove', runEvent);