<?php

class BadDomains extends \Phalcon\Mvc\Model
{
    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'bad_domains';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return BadDomains[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return BadDomains
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

    public function findByName($name) {
        $res = self::query()
            ->where('name = :name:')
            ->bind(array(
                'name' => $name,
            ))->execute();

        return $res->getFirst();
    }
}

