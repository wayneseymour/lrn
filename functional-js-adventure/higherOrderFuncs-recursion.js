function repeat(operation, num) {
  // SOLUTION GOES HERE
  if(num <= 0) return;

  operation();

  return repeat(operation, --num);
}


 module.exports = repeat;
