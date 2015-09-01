(function () {
    'use strict';

    // create the angular app
    angular.module("Radiola", [
        'ngRoute',
        'Radiola.controllers',
        'Radiola.directives'
    ]);

    // setup dependency injection
    angular.module('Radiola.controllers', []);
    angular.module('Radiola.directives', []);
}());