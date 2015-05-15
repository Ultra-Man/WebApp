var TcblApp = angular.module('TcblApp', [
  'ngRoute',
  'TcblControllers'
]);

TcblApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/', {
          templateUrl: 'views/header.html',
          controller: 'HeaderCtrl'
      }).
      when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
      }).
      when('/team', {
          templateUrl: 'views/team.html',
          controller: 'TeamCtrl'
      }).
      when('/schedule', {
          templateUrl: 'views/schedule.html',
          controller: 'ScheduleCtrl'
      }).
      otherwise({
          redirectTo: '/'  
      });
  }]);