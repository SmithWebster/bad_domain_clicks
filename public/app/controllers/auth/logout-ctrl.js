define(['../module'], function (controllers) {
    'use strict';

    controllers.controller('Auth_LogoutCtrl', [
        '$scope', '$rootScope', 'DjangoAuthService', '$state',
        function ($scope, $rootScope, DjangoAuthService, $state) {
            var promise = DjangoAuthService.logout();
            promise.then(function(data) {
                $state.go('auth-login');
            });
        }
    ]);
});

