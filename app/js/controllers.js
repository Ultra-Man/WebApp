/* Controllers */

var TcblControllers = angular.module('TcblControllers', []);

TcblControllers.controller('TeamCtrl', ['$scope', 'Schedule', function ($scope, Schedule) {

    $scope.fSchedules = Schedule.getName();
    
}]);