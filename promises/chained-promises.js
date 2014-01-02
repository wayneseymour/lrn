var promise = require('es6-promise');
var request = require('superagent');


var p = new promise.Promise(function(resolve, reject) {
	// do a thing, possibly async, then…
	var url = 'http://jsonip.com/post/google';
// 	var url = 'http://jsonip.com';

	console.log("\n### executing rest call to: \n\n\t'%s'", url);

	if (url.indexOf("google") !== -1) {
		request
			.post(url)
			.set('Accept', 'application/json')
			.end(function(res) {
				if (res) {
					resolve(res);
				} else {
					reject(Error("It broke"));
				}
			});
	}
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

p.
catch (function(o) {
	console.log("### o: ", o);
});