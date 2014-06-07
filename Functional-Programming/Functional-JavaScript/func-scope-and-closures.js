'use strict';

for (var i in numbers) {
  (function() {
    var j = i;
    setTimeout(function() {
      console.log(numbers[j]);
    }, 0);
  })();
}
