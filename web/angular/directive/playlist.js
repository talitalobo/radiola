(function () {
    'use strict';

    angular.module("Radiola.directives")
        .directive("playlist", function(){
            return {
                restrict: "E",
                templateUrl: "angular/directive/playlist.html"
            };
        });
}());