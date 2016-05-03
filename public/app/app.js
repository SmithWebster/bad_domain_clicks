/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'angular-ui-router',
    'angular-cookies',
    //'./models/index',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    var serverHost = "http://localhost:8000/";

    var systemSettings = {
        server: {
            host: serverHost,
            api: {
                url: serverHost + "api/"
            }
        },

        content: {
            server: {
                staticUrl: "http://localhost:8000/static/",
                mediaUrl: "http://localhost:8000/media/",
            }
        },

        session: {
            cookieName: "sessionid",
        }
    }

    var contentSettingsConstants = {
        staticDataServer: "http://localhost:8000/static/",
        mediaDataServer: "http://localhost:8000/media/",
    };

    return angular.module('app', [
        'ngProgress',
        //'app.models',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ui.router',
        'ngCookies',
        'angularLoad',
        'ngMaterial',
        'ngDialog',
        'notyModule',
        'angular-table',
        'ngResource',
        'ngSanitize',
    ])
    .constant('DEBUG_MODE', true)
    .constant("systemSettings", systemSettings)
    .constant("contentSettings", contentSettingsConstants)

    .config(function(
        $sceDelegateProvider, $httpProvider, $compileProvider,
        $logProvider, $cookiesProvider, $locationProvider,
        $stateProvider
    ) {
        //$locationProvider.html5Mode({
            //enabled: true,
            //requireBase: false,
        //});

        var currentLocation = angular.copy(window.location);
        if (!currentLocation.hash) {
            window.location.href = "/#/";
        }

        var cookieExpires = new Date();
        var cookieExpires = new Date(cookieExpires.setDate(cookieExpires.getDate() + 7));
        $cookiesProvider.defaults.expires = cookieExpires;

        var debug = true

        $compileProvider.debugInfoEnabled(debug);
        $logProvider.debugEnabled(debug);

        $sceDelegateProvider.resourceUrlWhitelist([
            '**'
        ]);

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })

    // Angular debug info
    .config(function ($compileProvider, DEBUG_MODE) {
        if (!DEBUG_MODE) {
            $compileProvider.debugInfoEnabled(false);
        }
    })
});

