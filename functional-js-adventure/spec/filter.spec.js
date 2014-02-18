var getShortMessages = require('../filter');

describe("functional javascript filter fn", function() {
	it("should only contain objecst with lt 50 chars", function() {

		var expected = ['Tempor quis esse consequat sunt ea eiusmod.',
			'Id culpa ad proident ad nulla laborum incididunt.'
		];
		var messages = [{
			message: 'Tempor quis esse consequat sunt ea eiusmod.'
		}, {
			message: 'Id culpa ad proident ad nulla laborum incididunt.'
		}, {
			message: 'afasfafafasdfasfasfsafsdfasdfasdfasfdfdfafafafasdfasfasfsafsdfasdfasdfasf nulla laborum incid'
		}];
		
		expect(getShortMessages(messages).length).toBe(2);
	});
});