/**
 * Takes an array of objects with '.message' properties
 * and prints any messages that are less than 50 characters long.
 * @param  {Array of Objects} messages [description]
 * @return {Array}          [description]
 */
module.exports = function getShortMessages(messages) {
  
  var result = messages.filter(function(m){
  	return m.message.length < 50;
  }).map(function(m){
  	return m.message;
  });

  return result;
};