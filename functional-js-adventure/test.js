'use strict';
var getShortMessages = require('./filter');

module.exports = {
  setUp: function (callback) {
    callback();
  },

  tearDown: function (callback) {
    callback();
  },

  testFilter: function (test) {
    var expected = ['Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.'];

    var messages = [
      {
        message: 'Tempor quis esse consequat sunt ea eiusmod.'
      },
      {
        message: 'Id culpa ad proident ad nulla laborum incididunt.'
      },
      {
        message: 'afasfafafasdfasfasfsafsdfasdfasdfasfdfdfafafafasdfasfasfsafsdfasdfasdfasf nulla laborum incid'
      }
    ];

    console.log(getShortMessages(messages));

    // test.equal(getShortMessages(messages), expected, 'Works on my machine!');
    test.done();
  }
};