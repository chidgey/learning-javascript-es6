// Local and session storage

// session storage will go away after closing the browser, local storage remains until browser cace is cleared out.

// NOTE: There is also IndexedDB storage - a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution. 

// set key value pairs, all values must be strings using
// json.stringify

// we can use this local storage to persist data across sessions for loading our apps.
// localStorage.setItem('name', 'Adam');
// localStorage.setItem('age', '36');

// session storage runs just for the current browser session.
//sessionStorage.setItem('name', 'in session storage');

// remove from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    // init
    tasks = [];
  }
  else {
    // get from storage
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const task = document.getElementById('task').value;
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));  
  e.preventDefault();
  alert('Task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));


tasks.forEach(function(task) {
  console.log(task);
})