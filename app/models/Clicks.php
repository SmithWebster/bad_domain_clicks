<?php

class Clicks extends \Phalcon\Mvc\Model
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
    public $ua;

    /**
     *
     * @var string
     */
    public $ip;

    /**
     *
     * @var string
     */
    public $ref;

    /**
     *
     * @var string
     */
    public $param1;

    /**
     *
     * @var string
     */
    public $param2;

    /**
     *
     * @var integer
     */
    public $error;

    /**
     *
     * @var boolean
     */
    public $bad_domain;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'clicks';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Clicks[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Clicks
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

    public function checkClickExists($slug) {
        $click = self::query()
            ->where('slug = :slug:')
            ->bind(array(
                'slug' => $slug,
            ))->execute();

        if (!$click->getFirst()) {
            return false;
        }

        return true;
    }

    public function findBySlug($slug) {
        $click = self::query()
            ->where('slug = :slug:')
            ->bind(array(
                'slug' => $slug,
            ))->execute();

        return $click->getFirst();
    }

    public function genSlug($userAgent, $ip, $ref, $param1) {
        $parts = [
            $userAgent,
            $ip,
            $ref,
            $param1,
        ];
        return md5(join($parts, ''));
    }

    public function getRefDomain() {
        $domain = null;
        if (!$this->ref) {
            return null;
        }

        $uparts = parse_url($this->ref);
        $domain = @$uparts['host'] ?: $uparts['path'];

        return $domain;
    }
}

