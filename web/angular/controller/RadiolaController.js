(function () {
    'use strict';

    angular.module("Radiola.controllers")
        .controller("MainController", ["$scope", "playlist", "$sce", function($scope, playlist, $sce){
            $scope.ano = "";
            $scope.playlist = [];
            $scope.video = {};
            $scope.srcVideo = "";
            $scope.dados = {};
            var inicioDados = 1958;
            var fimDados = 2014;
            $scope.index = true;


            //gambiarra, ajeitar api

            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            };


            $scope.update = function(){
                playlist.getData($scope.ano).success(function (data) {
                    $scope.dados = data;

                    var inicioAdl = parseInt( $scope.ano) + 13;
                    var fimAdl = parseInt( $scope.ano) + 20;

                    getAnosAdolescencia(data, inicioAdl, fimAdl);

                    $scope.video = $scope.playlist[0];
                    $scope.srcVideo = "https://www.youtube.com/embed/" + $scope.video.video_id + "?rel=0&autoplay=1";
                    $scope.index = false;

                });

            };

            $scope.setVideo = function(musica){
                $scope.video = musica;
                $scope.srcVideo = "https://www.youtube.com/embed/" + musica.video_id + "?rel=0&autoplay=1";
            };

            var getAnosAdolescencia = function(data, inicio, fim){

              for(var i=inicio; i<=fim; i++){
                  if(i<=fimDados && i>=inicioDados){
                      for(var j=0; j<3; j++){
                          var n = data[i][Math.floor(Math.random()*data[i].length)];
                          if($scope.playlist.indexOf(n) == -1 ){
                              $scope.playlist.push(n);
                          }
                      }

                  }
            }
        };
        }]);
}());