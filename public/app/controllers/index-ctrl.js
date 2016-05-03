define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('IndexCtrl', [
        '$scope',
        '$http',
        function ($scope, $http) {
            $scope.sortType = 'ip';
            $scope.searchClick = '';

            $scope.clicks = [];

            var clicks = [];
            $http({
                url: '/api/get-all-clicks',
                method: 'GET',
            }).then(function(result) {
                $scope.clicks = result.data;
            });
        }
    ]);
});
