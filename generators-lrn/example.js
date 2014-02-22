function* ticketGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

var takeANumber = ticketGenerator();
console.log(takeANumber.next()); 
// > { value(: 1, done: false }
console.log(takeANumber.next()); 
// > { value: 2, done: false }
console.log(takeANumber.next()); 
// > { value: 3, done: false }
console.log(takeANumber.next()); 
// > { value: undefined, done: true }