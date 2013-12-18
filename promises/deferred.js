var $ = require('jquery');

function doSomethingLater( fn, time ) {
  var dfd = $.Deferred();

  setTimeout(function() {
    dfd.resolve( fn() );
  }, time || 0);

  return dfd.promise();
}

var promise = doSomethingLater(function() {
  console.log( 'This function will be called in 1000ms' );
}, 1000);