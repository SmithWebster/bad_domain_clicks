define(['../module'], function (controllers) {
    'use strict';

    controllers.controller('Auth_LoginCtrl', [
        '$scope', '$rootScope', '$location', 'DjangoAuthService', 'ValidateService',
        function ($scope, $rootScope, $location, DjangoAuthService, ValidateService) {
            $scope.model = {
                email: '',
                password: ''
            };
            $scope.complete = false;

            $scope.login = function(formData) {
                $scope.errors = [];
                ValidateService.form_validation(formData, $scope.errors);

                if (!formData.$invalid) {
                    DjangoAuthService.login($scope.model.email, $scope.model.password)
                    .then(function(data) {
                        // success case
                        $location.path("/");
                    }, function(data) {
                        // error case
                        $scope.errors = data;
                    });
                }
            }
        }
    ]);
});

