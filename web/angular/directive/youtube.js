(function () {
    'use strict';

    angular.module("Radiola.directives")
        .directive('youtube', function($window, youTubeApiService) {
            return {
                restrict: "E",

                scope: {
                    height: "@",
                    width: "@",
                    videoid: "@",
                    onChange: '&'
                },

                template: '<div></div>',

                link: function(scope, element, attrs, $rootScope) {
                    var tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                    var player;

                    youTubeApiService.onReady(function() {
                        player = setupPlayer(scope, element);
                    });

                    function setupPlayer(scope, element) {
                        return new YT.Player(element.children()[0], {
                            playerVars: {
                                autoplay: 1,
                                html5: 1,
                                theme: "light",
                                modesbranding: 0,
                                color: "white",
                                iv_load_policy: 3,
                                showinfo: 1,
                                controls: 1
                            },

                            height: scope.height,
                            width: scope.width,
                            videoId: scope.videoid,

                            events: {
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    }

                    scope.$watch('videoid', function(newValue, oldValue) {
                        if (newValue == oldValue) {
                            return;
                        }

                            //carrega o video pela id: https://developers.google.com/youtube/js_api_reference
                            player.loadVideoById(scope.videoid);
                    });

                    // when video ends
                    function onPlayerStateChange(event) {
                        if (event.data === 0) {
                            scope.onChange();

                        }
                    }

                }
            };
        });
}());