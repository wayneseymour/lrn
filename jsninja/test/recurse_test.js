'use strict';

module.exports = {
  setUp: function(callback) {
    callback();
  },

  tearDown: function(callback) {
    callback();
  },

  testJsRecursion: function(test) {

    function chirp(n) {
      return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
    }

    var actual = chirp(3);

    test.equal(actual, "chirp-chirp-chirp", "Calling the named function comes naturally.");
    test.ok(true, 'Works on my machine!');

    // End test.
    test.done();
  }
};