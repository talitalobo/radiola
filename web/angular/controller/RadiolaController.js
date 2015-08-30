(function () {
    'use strict';

    angular.module("Radiola.controllers")
        .controller("MainController", ["$scope", function($scope){
            $scope.appName = "oi";
            $scope.ano = "";
            $scope.playlist = [];

            $scope.update = function(){

            }

        }]);
}());