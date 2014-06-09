'use strict';

var asCircle = function() {

  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
  this.grow = function() {
    this.radiuts++;
  };
  this.shrink = function() {
    this.radius--;
  };
  return this;
};

var Circle = function(radius) {
  this.radius = radius;
};

asCircle.call(Circle.prototype);
var circle1 = new Circle(5);
circle1.area(); //78.5
