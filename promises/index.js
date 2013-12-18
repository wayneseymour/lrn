var promise = require('es6-promise');
var request = require('superagent');


var p = new promise.Promise(function(resolve, reject) {
	// do a thing, possibly async, then…
    var url = 'http://jsonip.com';
    
    console.log("\n### executing rest call to: \n\n\t'%s'", url);
    
	request
		.get(url)
		.end(function(res) {
			if (res) {
				resolve(res);
			} else {
				reject(Error("It broke"));
			}
		});

});

p.then(function(result) {
	console.log("\n### rest call result: \n\n\t%s\n", result.text); // "Stuff worked!"
}, function(err) {
	console.log(err); // Error: "It broke"
});
