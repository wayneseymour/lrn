
// var promise = require('es6-promise');
var promise = require('es6-promise');

var p = new promise.Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  
  if (true) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

p.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});