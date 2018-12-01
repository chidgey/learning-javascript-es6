// Keyboard and input events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form submission, interferred with my materialise a little
// form.addEventListener('submit', runEvent);

// input based
taskInput.value = '';
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
 taskInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  console.log(`Event value: ${e.target.value}`);
  heading.innerText = e.target.value;
  //e.preventDefault(); // stop the submit
}