var constructor = function() { return null; };
var f = function() {
  return constructor();
};
f(); // {} (in nonconformant environments)


