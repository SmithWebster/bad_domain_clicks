/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular-route/angular-route.min',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router.min',
        'angular-cookies': '../lib/angular-cookies/angular-cookies.min',
        'angular-material': '../lib/angular-material/angular-material.min',
        'angular-animate': '../lib/angular-animate/angular-animate.min',
        'angular-aria': '../lib/angular-aria/angular-aria.min',
        'angular-messages': '../lib/angular-messages/angular-messages.min',
        'angular-load': '../lib/angular-load/angular-load.min',
        'ngDialog': '../lib/ngDialog/js/ngDialog.min',
        'angular-noty': '../lib/angular-noty/dist/angular-noty.dist',
        'angular-table': '../lib/at-table/dist/angular-table',
        'ngprogress': '../lib/ngprogress/build/ngprogress.min',

        'angular-resource': '../lib/angular-resource/angular-resource.min',
        'angular-sanitize': '../lib/angular-sanitize/angular-sanitize.min',
        'angular-touch': '../lib/angular-touch/angular-touch.min',

        'domReady': '../lib/requirejs-domready/domReady',
        'jquery': '../lib/jquery/dist/jquery',
        'jquery-ui': '../lib/jquery-ui/jquery-ui',
        'jquery-maskedinput': '../static/js/plugins/maskedinput/jquery.maskedinput.min',
        'jquery.validate': '../static/js/plugins/jquery-validation/jquery.validate',
    },

    /*y
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': { exports: 'angular' },
        'angular-route': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-cookies': { deps: ['angular'] },
        'angular-material': { deps: [ 'angular', 'angular-animate', 'angular-aria', 'angular-messages', ], },
        'ngDialog': { deps: [ 'angular', ], },
        'angular-noty': { deps: [ 'angular', 'jquery', ], },
        'jquery': { exports: 'jQuery', deps: [ 'angular' ] },
        'jquery-ui': { deps: ['jquery'], exports: 'jQuery' },
        'jquery-maskedinput': { deps: ['jquery'], },
        'jquery.validate': { deps: ['jquery'], },
        'bootstrap-css': { deps: ['jquery'], },
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});

