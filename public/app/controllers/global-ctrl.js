define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('GlobalCtrl', [
        '$rootScope',
        '$scope',
        '$location',
        '$state',
        '$document',
        function ($rootScope, $scope, $location, $state, $document) {
            $scope.siteLoading = true;

            $scope.$location = $location;

            $scope.menuIsActive = function(pathRegExpression) {
                var re = new RegExp(pathRegExpression);
                return $location.path().match(re);
            }

            $scope.go = $state.go

            $scope.init = function() {
                $scope.siteLoading = false;
                $document.find('body').removeClass('site-loading');
            }

            var currentState = null;
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                currentState = toState;
            });
        }
    ]);
});
