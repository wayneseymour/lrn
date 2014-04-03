// http://flippinawesome.org/2014/02/10/replacing-callbacks-with-es6-generators/

function * ticketGenerator() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) {
      i = -1;
    }
  }
}

var takeANumber = ticketGenerator();

console.log(takeANumber.next().value); //0
console.log(takeANumber.next().value); //1
console.log(takeANumber.next().value); //2
console.log(takeANumber.next(true).value); //0
console.log(takeANumber.next().value); //1