var objectvalidators = require('../objectvalidators');
var checker = objectvalidators.checker;

describe("Functional javascript object validators.  ", function() {
  it("Should validate the veracity of an object based on arbitrary criteria.", function() {
    
    var alwaysPasses = checker(always(true), always(true));
alwaysPasses({});
    
  });
  it("Should report all of the errors found with any given command object.", function() {});
  
});