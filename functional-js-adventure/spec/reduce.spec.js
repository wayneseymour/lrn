var countWords = require('../reduce');

describe("Functional javascript reduce fn.", function() {
	it("Should use Array.reduce to create an object that, " +
		"contains the number of times each string occured in the array.",
		function() {

			var expected = {
				Apple: 2,
				Banana: 1,
				Durian: 3
			};
			var inputWords = [
				'Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'
			];

			expect(countWords(inputWords)).toEqual(expected);
		});
});