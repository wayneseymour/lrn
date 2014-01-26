// More specific function generator.
function makeAdder(a) {
  return function(b) {
    console.log('\n### a[%d], b[%d]', a, b);
    return a + b;
  };
}

// More specific functions.
var addOne = makeAdder(1);
addOne(2);  // 3
addOne(3);  // 4}}
