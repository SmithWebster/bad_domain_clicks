/** attach controllers to this module 
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 * below, you can see we bring in our services and constants modules 
 * which avails each controller of, for example, the `config` constants object.
 **/

var list = [];

list.push('./errors/error-404-ctrl');
list.push('./errors/error-500-ctrl');
list.push('./global-ctrl');

list.push('./app-loading-ctrl');
list.push('./form/dialog-ctrl');
list.push('./toast-ctrl');

list.push('./index-ctrl');
list.push('./bad-domains/list-ctrl');
list.push('./bad-domains/create-ctrl');

define(list, function () {});

