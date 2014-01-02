var $ = require('jquery');
var promise = require('es6-promise');

var url = 'http://localhost:5900/';
var data;

// function successCallback(data, msg, response ) {
// 	console.log('### msg: ' + msg);
// 	data = JSON.stringify(data);
// 	console.log('### data: ' + data);

// 	// for(var i = 0; i < arguments.length; i++) {
// 	// 	console.log('### index: ' + i);
// 	// 	console.log(arguments[i]);
// 	// }
// }

// var fetchingData = $.get(url);
// fetchingData.done(successCallback);

var jqd = $.get(url);

jqd.then(function(data, msg, response) {
	data = JSON.stringify(data);
	console.log('### data: ' + data);

}, function(data, msg, err){
	console.log(msg); 

});




var Me = function() {
	var field = '';

	return function() {
		return {
			getField: function() {
				return field;
			},
			setField: function(field) {
				field = field;
			}
		}
	}
}




