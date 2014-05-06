//function MovieCharacter (firstName, lastName) {
  //this.firstName = firstName;
  //this.lastName = lastName;
//};

//var MovieCharacterPrototype = MovieCharacter.prototype;

//MovieCharacterPrototype.fullName = function () {
  //return this.firstName + " " + this.lastName;
//};
//
function MovieCharacter (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

MovieCharacter.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};


Object.keys(MovieCharacterPrototype).filter(function (key) {
  return typeof(MovieCharacter.prototype[key]) === 'function'
});
  //=> [ 'fullName' ]
