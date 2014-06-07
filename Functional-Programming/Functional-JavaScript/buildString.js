'use strict';

function buildString(n, callback) {
  var result = '';

  for (var i = 0; i < n; i++) {
    result += callback(i);
  }
  return result;
}
var aIndex = "a".charCodeAt(0); // 97

var alphabet = buildString(26, function(i) {    
  return String.fromCharCode(aIndex + i);
});

alphabet;
