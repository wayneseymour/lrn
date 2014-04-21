var stack = (function() {
  var obj = {
    array: [],
    index: -1,
    push: function(value) {
      return obj.array[obj.index += 1] = value
    },
    pop: function() {
      var value = obj.array[obj.index];
      obj.array[obj.index] = void 0;
      if (obj.index >= 0) {
        obj.index -= 1
      }
      return value
    },
    isEmpty: function() {
      return obj.index < 0
    }
  };

  return obj;
})();

stack.isEmpty() //=> true
stack.push('hello') //=> 'hello'
stack.push('JavaScript') //=> 'JavaScript'
stack.isEmpty() //=> false
stack.pop() //=> 'JavaScript'
stack.pop() //=> 'hello'
stack.isEmpty() //=> true
