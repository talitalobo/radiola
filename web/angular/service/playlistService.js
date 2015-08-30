(function () {
    'use strict';

    angular.module("Radiola")
        .factory('playlist', ['$http', function($http){

            return {
                getData: function(ano){
                    return $http.get("http://appradiola.appspot.com/get_playlist/" + ano)
                        .success(function(data){
                        })
                        .error(function(err){
                        });
                }
            };
        }]);

}());