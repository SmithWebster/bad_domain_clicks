<?php

use Phalcon\Di;
use Phalcon\Di\FactoryDefault;

ini_set('display_errors', 1);
error_reporting(E_ALL);

define('ROOT_PATH', __DIR__);
define('PATH_LIBRARY', __DIR__ . '/../app/library/');
define('PATH_SERVICES', __DIR__ . '/../app/services/');
define('PATH_RESOURCES', __DIR__ . '/../app/resources/');

define('APP_PATH', realpath('..'));

set_include_path(
    ROOT_PATH . PATH_SEPARATOR . get_include_path()
);

include __DIR__ . "/../vendor/autoload.php";

/**
 * Read the configuration
 */
$config = include APP_PATH . "/app/config/config.php";

/**
 * Read auto-loader
 */
include APP_PATH . "/app/config/loader.php";

/**
 * Read services
 */
include APP_PATH . "/app/config/services.php";

$di->set('router', function() {
    /**
     * Read routes
     */
    include APP_PATH . "/app/config/routes.php";
    return $router;
});

$di = new FactoryDefault();

$di->set(
    'modelsManager',
    function() {
        return new \Phalcon\Mvc\Model\Manager();
    }
);

Di::reset();
Di::setDefault($di);

