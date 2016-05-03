define(['./module'], function (directives) {
    'use strict';
    directives.directive('clickRedirect', [
        function () {
            return {
                restrict: 'AE',
                scope: {
                    forId: '=',
                },
                link: function (scope, element, attrs) {
                    var forId = attrs.forId || null;
                    if (forId) {
                        element.bind('click', function(e) {
                            document.querySelector('#' + forId).click()
                        });
                    }
                }
            };
        }
    ]);
});

