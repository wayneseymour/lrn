function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function() {
    return "I'm " + this.name + " and I'm a " + this.occupation;
  }
}
var h1 = new Hero('Mike');
h1.whoAreYou()
var h2 = new Hero('Donatello');
h2.whoAreYou()
typeof h1
function H(name) {this.name = name;}
var h = H('Wayne');
typeof h
global.name
