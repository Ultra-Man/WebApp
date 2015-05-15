var TcblApp = angular.module('TcblApp', [
  'ngRoute',
  'TcblControllers'
]);

TcblApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/', {
          templateUrl: 'views/home.html',
          controller: 'TeamCtrl'
      }).
      when('/team', {
          templateUrl: 'views/team.html',
          controller: 'TeamCtrl'
      }).
      otherwise({
          redirectTo: '/'  
      });
  } ]);