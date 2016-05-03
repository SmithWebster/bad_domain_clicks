<?php

class ApiController extends ControllerBase
{
    public function getAllClicksAction()
    {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');

        $clicks = Clicks::find();
        $clicks = $clicks->toArray();
        $clicks = json_encode($clicks);

        echo $clicks;
    }

    public function getAllDomainsAction()
    {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');

        $domains = BadDomains::find();
        $domains = $domains->toArray();
        $domains = json_encode($domains);

        echo $domains;
    }

    public function badDomainCreateAction() {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');

        if ($this->request->isPost()) {
            $data = (array) $this->request->getJsonRawBody();
            $domainName = $data['name'];
            unset($data);

            $new = new BadDomains();
            $new->name = $domainName;
            
            try {
                $new->save();
                echo json_encode(array(
                    'status' => 0,
                    'data' => $new,
                    'message' => 'OK',
                ));
            } catch (Exception $e) {
                echo json_encode(array(
                    'status' => 1,
                    'message' => $e->getMessage(),
                ));
            }
        } else {
            echo json_encode(array(
                'status' => 1,
                'message' => 'Json post required',
            ));
        }
    }
}

