<?php

$router = new Phalcon\Mvc\Router();

$router->add(
    '/success/([a-z0-9]+)/?',
    array(
        'controller' => 'click',
        'action' => 'success',
        'slug' => 1,
    )
);

$router->add(
    '/error/([a-z0-9]+)/?',
    array(
        'controller' => 'click',
        'action' => 'error',
        'slug' => 1,
    )
);

$router->add(
    '/api/get-all-clicks',
    array(
        'controller' => 'api',
        'action' => 'getAllClicks',
    )
);

$router->add(
    '/api/get-all-domains',
    array(
        'controller' => 'api',
        'action' => 'getAllDomains',
    )
);

$router->addPost(
    '/api/bad-domain/create',
    array(
        'controller' => 'api',
        'action' => 'badDomainCreate',
    )
);

