// var promise = require('es6-promise');
var promise = require('es6-promise');
var request = require('superagent');


var p = new promise.Promise(function(resolve, reject) {
	// do a thing, possibly async, then…

	request
		.get('http://localhost:4730')
		.end(function(res) {
			if (res) {
				resolve(res);
			} else {
				reject(Error("It broke"));
			}
		});

	// if (true) {
	//   resolve("Stuff worked!");
	// }
	// else {
	//   reject(Error("It broke"));
	// }
});

p.then(function(result) {
	console.log(result.text); // "Stuff worked!"
}, function(err) {
	console.log(err); // Error: "It broke"
});