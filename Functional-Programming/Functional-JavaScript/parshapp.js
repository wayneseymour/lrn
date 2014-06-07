var f = (function() {
  return function(lang) {
    return lang + ' & JavaScript rock'
  }
})()('Node.js');

console.log(f);

function a() {
  return function(lang) {
    return lang + ' & JavaScript rock'
  }
}
console.log(a);
console.log(a());
var aa = a();

console.log(aa('nodejs'));
