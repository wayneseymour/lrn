var developers = [
    { name: "Joe", age: 23 },
    { name: "Sue", age: 28 },
    { name: "Jon", age: 32 },
    { name: "Bob", age: 24 }
], age = 0;
 
age = developers.reduce(function(memo, developer) {
    return memo + developer.age; // return previous total plus current age
}, age); // initialize age with 0 that will be passed as memo
 
console.log("Sum of all developer ages is " + age); 
// Output:   Sum of all developer ages is 107
// 

console.log('\n### [0,1,2,3,4] reduced with 10 as initial value is: ', [0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  console.log('\n\t### prev[ %d ], curr[ %d ]', previousValue, currentValue);
  return previousValue + currentValue;
}, 10));