(function () {
    'use strict';

    angular.module("Radiola")
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/result'); // por isso que tava iniciando no #avisos

            $stateProvider
                .state('result', {
                    url: '/result',
                    controller: 'MainController',
                    templateUrl: 'result.html'
                });
        });

}());