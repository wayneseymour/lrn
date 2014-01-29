'use strict';

angular.module('ngSpikeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/text', {
        templateUrl: 'views/text.html',
        controller: 'TextCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
