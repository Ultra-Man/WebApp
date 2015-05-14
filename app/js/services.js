/* Services */

var TcblServices = angular.module('TcblServices', []);

TcblServices.service('Schedule', ['$http', function ($http) {

    this.getName = function () {
        var d = 'first';
        $http.get('data/tables/team.json').success(function (data) { d = "done" });
        return d;
    }
} ]);