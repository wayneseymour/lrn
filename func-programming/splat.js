function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  };
}


