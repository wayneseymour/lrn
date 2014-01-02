/*
 * cli-spike
 * https://github.com/wayneseymour/lrn
 *
 * Copyright (c) 2013 Wayne Kenneth Seymour III
 * Licensed under the MIT license.
 */

'use strict';
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World\n') // missing semi-colon will fail the build
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

exports.awesome = function() {
	return 'awesome';
};