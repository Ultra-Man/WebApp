/* Controllers */

var TcblControllers = angular.module('TcblControllers', []);

TcblControllers.controller('TeamCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('http://jsonplaceholder.typicode.com/users').success(
        function (data) {
            $scope.fSchedule = data
        });
    
}]);