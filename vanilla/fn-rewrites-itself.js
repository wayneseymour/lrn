function a() {
  console.log('A!');
  a = function(){
    console.log('B!');
  };
}

