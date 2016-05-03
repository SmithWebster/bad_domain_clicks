<?php

class ClickController extends ControllerBase
{
    public function indexAction() {
        $params = $this->request->get();
        unset($params['_url']);

        $ua = $_SERVER['HTTP_USER_AGENT'];
        $ip = $_SERVER['REMOTE_ADDR'];
        $ref = @$_SERVER['HTTP_REFERER'] ?: 'unknown';
        $param1 = $params['param1'];
        $param2 = $params['param2'];

        $clickObj = new Clicks();

        $clickExists = $clickObj->checkClickExists($clickObj->genSlug($ua, $ip, $ref, $param1));
        if (!$clickExists) {
            $clickObj->ua = $ua;
            $clickObj->ip = $ip;
            $clickObj->ref = $ref;
            $clickObj->param1 = $param1;
            $clickObj->param2 = $param2;
            $clickObj->slug = $clickObj->genSlug($ua, $ip, $ref, $param1);

            if (!$clickObj->save()) {
                throw Exception('object creation problem...');
            }

            $slug = $clickObj->slug;
            unset($clickObj);

            return $this->response->redirect('/success/' . $slug);
        } else {
            $click = $clickObj->findBySlug($clickObj->genSlug($ua, $ip, $ref, $param1));
            $slug = $click->slug;

            // increase error counter
            $click->error++;

            // check domain exists
            $domainFound = (bool) (new BadDomains())->findByName($click->getRefDomain());

            $redirectUrl = '/error/' . $slug;
            if ($domainFound) {
                $redirectUrl .= '?refresh=http://google.com/&seconds=5';
                $click->bad_domain = 1;
            }

            $click->save();
            return $this->response->redirect($redirectUrl);
        }
    }

    public function successAction() {
        $slug = $this->dispatcher->getParam("slug");

        $click = (new Clicks())->findBySlug($slug);
        if (!$click) {
            return $this->response->redirect('/');
        }

        $this->view->clickObj = $click;
    }

    public function errorAction() {
        $slug = $this->dispatcher->getParam("slug");

        $click = (new Clicks())->findBySlug($slug);
        if (!$click) {
            return $this->response->redirect('/');
        }
        $this->view->clickObj = $click;
    }
}

