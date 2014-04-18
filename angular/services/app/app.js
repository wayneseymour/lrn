'use strict';

var todoApp = angular.module('todoApp', []);

todoApp.controller('FirstController', function($scope) {
  $scope.data = {
    message: "Hello"
  };
});

todoApp.controller('GoodbyeController',
  function($scope, testService) {
    $scope.fromService = testService.sayHello("Wayne");
  });

todoApp.service('testService', function() {
  this.sayHello = function(text) {
    return "Service says \"Hello " + text + "\"";
  };
  this.sayGoodbye = function(text) {
    return "Service says \"Goodbye " + text + "\"";
  };
});
