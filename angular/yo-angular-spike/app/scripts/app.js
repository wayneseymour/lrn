'use strict';

var todoApp = angular.module('todoApp',[]);
 
todoApp.controller('TodoController', function($scope, notesFactory) {
  $scope.notes = notesFactory.get();
  $scope.createNote = function() {
    notesFactory.put($scope.note);
    $scope.note = '';
    $scope.notes = notesFactory.get();
  };
});
 
todoApp.factory('notesFactory', function() {
  return {
    put: function(note) {
      localStorage.setItem('todo' + (Object.keys(localStorage).length + 1), note);
    },
    get: function() {
      var notes = [];
      var keys = Object.keys(localStorage);
 
      for(var i = 0; i < keys.length; i++) {
        notes.push(localStorage.getItem(keys[i]));
      }
 
      return notes;
    }
  };
});