'use strict';

describe('TodoController Test', function() {
  beforeEach(module('todoApp')); // will be run before each it() function
 
  // we don't need the real factory here. so, we will use a fake one.
  var mockService = {
    notes: ['note1', 'note2'], //just two elements initially
    get: function() {
      return this.notes;
    },
    put: function(content) {
      this.notes.push(content);
    }
  };
 
  // now the real thing: test spec
  it('should return notes array with two elements initially and then add one',
    inject(function($rootScope, $controller) { //injects the dependencies
      var scope = $rootScope.$new();
 
      // while creating the controller we have to inject the dependencies too.
      var ctrl = $controller('TodoController', {$scope: scope, notesFactory:mockService});
 
      // the initial count should be two
      expect(scope.notes.length).toBe(2);
 
      // enter a new note (Just like typing something into text box)
      scope.note = 'test3';
 
      // now run the function that adds a new note (the result of hitting the button in HTML)
      scope.createNote();
 
      // expect the count of notes to have been increased by one!
      expect(scope.notes.length).toBe(3);
    })
  );
});