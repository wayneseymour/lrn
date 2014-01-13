[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  var result = previousValue + currentValue;
  console.log('\n### result: %d', result);
  return result;
});
