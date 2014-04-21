// function doSomething(callback) {
//   var value = 42;
//   callback(value);
// }

function Promise(fn) {
  var callback = null;
  this.then = function(cb) {
    callback = cb;
  };

  function resolve(value) {
    callback(value);
  }

  fn(resolve);
}

function doSomething() {
  return {
    then: function(callback) {
      var value = 42;
      callback(value);
    }
  };
}

doSomething(function(value) {
  console.log('Got a value:', value);
});
