(function () {
    'use strict';

    angular.module("Radiola")
        .factory("youTubeApiService", function($q, $window) {

            var deferred = $q.defer();
            var apiReady = deferred.promise;

            $window.onYouTubeIframeAPIReady = function() {
                deferred.resolve();
            };

            return {
                onReady: function(callback) {
                    apiReady.then(callback);
                }
            }

        });

}());