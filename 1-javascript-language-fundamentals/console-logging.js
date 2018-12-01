// Console log examples
console.clear();
console.log(123)
console.log(true);
console.log([1,2,3]);
console.log({a:1,b:2});
console.log('MyLabel :', "Hello banana!" );
console.table({ a:1,b:2});
console.error('Errorz');
console.warn('Warning, warning, warning...');

// Cool, for profiling how long it takes to execute something.
console.time('TimeProfile1');
  console.log('Operation1')
  console.log('Operation2')
  console.log('Operation3')
console.timeEnd('TimeProfile1', 'End of time profiling');  