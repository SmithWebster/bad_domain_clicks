<?php

namespace Test;

use Phalcon\Di;

class UnitTest extends \Phalcon\Test\UnitTestCase
{
    protected $_cache;

    protected $_config;

    private $_loaded = false;

    public function setUp() {
        parent::setUp();

        $di = Di::getDefault();
        $this->setDi($di);
        $this->_loaded = true;
    }

    public function __destruct() {
        if (!$this->_loaded) {
            throw new \PHPUnit_Framework_IncompleteTestError('Please run parent::setUp().');
        }
    }

    public function test() {
        // Phalcon\Di\Exception: Service 'modelsManager' wasn't found in the dependency injection container
        $res = (new \Clicks)->find();
    }
}

