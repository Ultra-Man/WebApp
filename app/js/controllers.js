/* Controllers */

var TcblControllers = angular.module('TcblControllers', []);

TcblControllers.controller('TeamCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/tables/player.json').success(
        function (data) {
            $scope.fSchedule = data
        });
    
}]);