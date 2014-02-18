var checkUsersValid = require('../everysome');

describe("Functional javascript every and some functions", function() {
	it("Should return a fn that takes a list of valid users, " + 
		"and returns a fn that returns true if all of the supplied " + 
		"users exits in the orig list", function() {


		var users = [{
			id: 1
		}, {
			id: 2
		}, {
			id: 3
		}];
		
		expect(checkUsersValid(users)(users)).toBe(true);
	});
});