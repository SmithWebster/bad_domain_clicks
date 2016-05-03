define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('BadDomains_ListCtrl', [
        '$scope',
        '$http',
        function ($scope, $http) {
            $scope.sortType = 'name';
            $scope.searchDomain = '';

            $scope.domains = [];

            var domains = [];
            $http({
                url: '/api/get-all-domains',
                method: 'GET',
            }).then(function(result) {
                $scope.domains = result.data;
            });
        }
    ]);
});

