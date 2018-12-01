// template literals
const name = 'Adam';
const age = 37;
const job = 'Software Engineer';
const city = 'Manchester';
let html;

// without template strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// cleaner, but still ES5.
html =
  '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
  '</ul>';

// now, some ES6 with template literals
// uses the backtick syntax, and is a lot cleaner with
// conditional rendering.
function hello() {
  return "hello";
}
html = `
  <ul>
    <li>Name: ${name} </li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>`;

// render to the DOM
document.body.innerHTML = html;