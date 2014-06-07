function Stack() {
  'use strict';
  this.data = [];
  this.pop = function pop() {
    if (this.data.length > 0) this.data--;
  };
  this.push = function push(item) {
    this.data[this.data.length + 1] = item;
  };
  this.size = function size() {
    return this.data.length;
  };
}
