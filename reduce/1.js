'use strict'
var developers = [
  { name: 'Joe', age: 23 },
  { name: 'Sue', age: 28 },
  { name: 'Jon', age: 32 },
  { name: 'Bob', age: 24 }
];
var age = 0;

age = developers.reduce(function(_age, developer) {
  console.log('\n### before: _age: %d', _age);
  var result =  _age + developer.age; // return previous total plus current age
  console.log('\n\t### after: result: %d', result);

  return result; // return previous total plus current age
}, 0); // initialize age with 0 that will be passed as _age 

console.log('Sum of all developer ages is ' + age); 
// Output:   Sum of all developer ages is 107

