// DOM selectors for single elements
// No need for JQuery, use native Js for selecting now.
// two types: single and multiple element selectors

// get things from the element
const taskTitleHeader = document.getElementById('task-title');
console.log(taskTitleHeader.id);
console.log(taskTitleHeader.className);

// change styles
taskTitleHeader.style.background = '#f00';
taskTitleHeader.style.color = '#00f';
taskTitleHeader.style.padding = '5px';
// taskTitleHeader.style.display = 'none';

// change content
taskTitleHeader.textContent = 'Task list';
taskTitleHeader.innerText = ' My taskings';
taskTitleHeader.innerHTML = '<span style="color:white">Testing...</span>';

// query selector - newer and more powerful
let querySelection = document.querySelector('#task-title');
querySelection = document.querySelector('.card-title');
querySelection = document.querySelector('h5');
console.log(querySelection);

// this is a single element selector, so, it actions the first it finds.
document.querySelector('li').style.color = 'red';

// can target nested elements like this
document.querySelector('ul li').style.color = 'blue';

// css 3 selectors
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'blue';
document.querySelector('li:nth-child(3)').textContent = 'CSS selecting...';

// NOTE: only the first odd has been styled! Not as intended.
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#eee';
 
