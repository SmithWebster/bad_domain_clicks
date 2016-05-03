define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('Form_DialogCtrl', [
        '$scope',
        '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    ]);
});