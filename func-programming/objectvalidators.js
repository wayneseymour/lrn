/* Here I present a function named checker that takes a number of predicates (functions
returning true or false) and returns a validation function. The returned validation
function executes each predicate on a given object, and it adds a special error string to
an array for each predicate that returns false. If all of the predicates return true, then
the final return result is an empty array; otherwise, the result is a populated array of
error messages. The implementation of checker is as follows: */

function checker( /* validators */ ) {
  var validators = _.toArray(arguments);
  
  return function(obj) {
    
    return _.reduce(validators, function(errs, check) {
      if(check(obj)) return errs;
      else return _.chain(errs).push(check.message).value();
    }, []);
    
  };
}

module.exports = {
  checker: checker
};