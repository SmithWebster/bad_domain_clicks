define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('BadDomains_CreateCtrl', [
        '$scope',
        '$http',
        function ($scope, $http) {
            $scope.form = {
                domainName: null,
            };

            $scope.message = null;

            $scope.createDomain = function() {
                var created = false;
                $http({
                    url: '/api/bad-domain/create',
                    method: 'POST',
                    data: {
                        name: $scope.form.domainName
                    },
                }).then(function(result) {
                    if (result.data.status) {
                        $scope.message = result.data.message;
                    } else {
                        $scope.message = 'Domain created';
                    }
                });
                               
            };
        }
    ]);
});


