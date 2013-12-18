
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