'use strict';

var oarr = [{
	name: 'a',
	age: 9
}, {
	name: 'b',
	age: 15
}, {
	name: 'c',
	age: 35
}];

var result = oarr.filter(function(el, ind, arr) {
	console.log('\nel: ', el);
	console.log('\nind: ', ind);
	// console.log(arr);
	return (el.age >= 10);
});

console.log('\n### result: ', result);