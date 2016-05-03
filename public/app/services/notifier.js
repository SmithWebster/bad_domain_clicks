define(['./module'], function (services) {
    'use strict';

    services.factory('Notifier', [
        'noty',
        function(noty) {
            var notifier = {
                types: {
                    error: 'error',
                    warning: 'warning',
                    success: 'success',
                    message: 'information',
                },
            }

            notifier.notify = function(message, type) {
                if (!message) {
                    throw "message required"
                }
                type = type || this.types.message;

                noty.show(message, type)
            };

            return notifier;
        }]
    )
});

