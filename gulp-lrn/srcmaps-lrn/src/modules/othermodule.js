(function() {
  /*global console*/
  'use strict';

  function OtherModule() {
    this.obj = {
      a: '1',
      b: '2'
    };
  }

  var sm = new OtherModule();
  console.log('\n### obj: ', sm.obj);
})();
