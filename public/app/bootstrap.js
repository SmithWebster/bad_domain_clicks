/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!',
        'angular-material',
        'ngprogress',
        'jquery',
        'jquery-ui',
        'angular-load',
        'ngDialog',
        'angular-noty',
        'angular-table',
        'angular-resource',
        'angular-sanitize',
    ], function (document, jQuery) {
        ng.bootstrap(document, ['app']);
    });
});
