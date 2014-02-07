console.log('\'Allo \'Allo!');

function setup() {
	var buttonStream = $("#searchButton").asEventStream("click");
	buttonStream.onValue(function(e) {
		console.log("Hello from Bacon.js");
	});
}

$(document).ready(setup);