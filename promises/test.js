var $ = require('jquery');

var getSomeData = function() {
  var data;
  var url = 'http://localhost:5900/';
  $.get({
    url: url,
    dataType: 'json',
    success: function(resp) {
      data = resp;
    }
  });

  return data;
}
var result = getSomeData();

console.log('### result: ' + result);