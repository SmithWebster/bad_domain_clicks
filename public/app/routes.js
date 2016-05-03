/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';

    return app.config([
        '$stateProvider', 
        '$urlRouterProvider', 
        '$locationProvider', 
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/error-404');

            $stateProvider
                .state('error-404', {
                    url: '/error-404',
                    views: {
                        '@' : {
                            templateUrl: 'app/layouts/error.html',
                            controller: 'Error404Ctrl'
                        },
                        'content@error-404' : {
                            templateUrl: 'app/views/errors/404.html'
                        }
                    },
                })
                .state('index', {
                    url: '/',
                    views: {
                        '@' : {
                            templateUrl: 'app/layouts/main.html',
                            controller: 'IndexCtrl'
                        },
                        'content@index' : {
                            templateUrl: 'app/views/index.html'
                        }
                    },
                })
                .state('bad-domains', {
                    url: '/bad-domains',
                    views: {
                        '@' : {
                            templateUrl: 'app/layouts/main.html',
                            controller: 'BadDomains_ListCtrl'
                        },
                        'content@bad-domains' : {
                            templateUrl: 'app/views/bad-domains/list.html'
                        }
                    },
                })
                .state('bad-domain-add', {
                    url: '/bad-domain/add',
                    views: {
                        '@' : {
                            templateUrl: 'app/layouts/main.html',
                            //controller: 'BadDomains_CreateCtrl'
                        },
                        'content@bad-domain-add' : {
                            templateUrl: 'app/views/bad-domains/create.html'
                        }
                    },
                })
        }
    ])
    .run([
        '$rootScope', '$cookieStore',
        function(
            $rootScope, $cookieStore
        ) {
            $rootScope.$on("$stateChangeStart", function(event, toState, toParams) {
            });
            $rootScope.$on('$stateChangeSuccess', function() {
            });

            $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
                // changing page title
                //$rootScope.title = current.$$route.data.title;
            });

            //keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
        }
    ])
});

