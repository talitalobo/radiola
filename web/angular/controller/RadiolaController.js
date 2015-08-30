(function () {
    'use strict';

    angular.module("Radiola.controllers")
        .controller("MainController", ["$scope", "playlist", function($scope, playlist){
            $scope.appName = "oi";
            $scope.ano = "";
            $scope.playlist = [];

            $scope.update = function(){
                playlist.getData($scope.ano).success(function (data) {
                    $scope.playlist = data;


                });
                console.log(playlist);

            }

        }]);
}());