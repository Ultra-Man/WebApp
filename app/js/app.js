var TcblApp = angular.module('TcblApp', [
  'ngRoute',
  'TcblServices',
  'TcblControllers'
]);

TcblApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/', {
          templateUrl: 'views/team.html',
          controller: 'TeamCtrl'
      }).
      otherwise({
          redirectTo: '/'  
      });
  } ]);