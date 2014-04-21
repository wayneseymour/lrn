var a = function() {
  function someSetup(){
    var setup = 'done';
  }
  function actualWork() {
    console.log('Worky-worky');
  }
  someSetup();
  return actualWork;
   /*return function() {
    console.log('anon worky');
   };
  */
}();
