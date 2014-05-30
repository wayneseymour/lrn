(function() {
  /*global console*/
  'use strict';

  function SomeModule() {
    this.obj = {
      a: 'a',
      b: 'b'
    };
  }

  var sm = new SomeModule();
  console.log('\n### obj: ', sm.obj);
})();
