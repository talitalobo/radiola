(function () {
    'use strict';

    angular.module("Radiola")
        .factory('playlist', ['$http', function($http){

            return {
                getData: function(ano){
                    return $http.get("data/ano_musicas.json")
                        .success(function(data){
                        })
                        .error(function(err){
                        });
                }
            };
        }]);

}());