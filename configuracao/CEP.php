<?php

class CEP {

    private $cep;
    private $urlViaCEP = "https://viacep.com.br/ws/";
    private $urlCorreios = "http://www.buscacep.correios.com.br/servicos/dnec/consultaLogradouroAction.do";
    //private $urlRepublica = "http://republicavirtual.com.br/web_cep.php?formato=query_string&cep="; //estava com erro, alterado para xml
    private $urlRepublica = "http://cep.republicavirtual.com.br/web_cep.php?formato=xml&cep="; //passar o valor do cep na url
    /**
     * 0=sucesso; 1=nao encontrado; 2=fora do ar; 3=formato invalido
     * @var int
     */
    private $tipoErro = 0;
    private $erro;

    public function __construct($cep) {
        $cep = str_replace('.', '', str_replace('-', '', $cep)); //retira o ponto e traco
        $this->cep = $cep;
    }

    public function buscar() {
        if (strlen($this->cep) <> 8) {
            $this->tipoErro = 3;
            $this->erro = "formato do cep invalido";
            return false;
        }

        $resultadoCEP = $this->CurlCorreios(); //primeira opcao
        if (!$resultadoCEP) {
            $resultadoCEP = $this->WebserviceViaCEP(); //contingencia da contingencia
             //var_dump($resultadoCEP);            var_dump($this);
            if (!$resultadoCEP) {
                $resultadoCEP = $this->WebserviceRepublica(); //contingencia
            }
        }
        
        return $this->limparEspacoEmBranco($resultadoCEP);
    }

    public function CurlCorreios() {
        if (function_exists("curl_init")) {
            $cURL = curl_init($this->urlCorreios);
            if (is_resource($cURL)) {
                $post = 'CEP=' . $this->cep . '&Metodo=listaLogradouro&TipoConsulta=cep';
                curl_setopt($cURL, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($cURL, CURLOPT_HEADER, 0);
                curl_setopt($cURL, CURLOPT_POST, 1);
                curl_setopt($cURL, CURLOPT_POSTFIELDS, $post);
                curl_setopt($cURL, CURLOPT_ENCODING, "UTF-8");
                $saida = curl_exec($cURL);
                curl_close($cURL);
                $saida = utf8_encode($saida);
                preg_match_all('@<td (.*?)<\/td>@i', $saida, $tabela);
                $tabela = $tabela[0];
                //echo "<pre>";            print_r($tabela);            echo "</pre>";
                if (is_array($tabela) && !empty($tabela)) {
                    $resultado['logradouro'] = $this->retirarTracoLogradouro(strip_tags($tabela[0]));
                    $resultado['bairro'] = strip_tags($tabela[1]);
                    $resultado['cidade'] = strip_tags($tabela[2]);
                    $resultado['uf'] = strip_tags($tabela[3]);
                    $resultado['fonte'] = 'correios';
                    //var_dump($resultado);
                    return $resultado;
                } elseif (empty($tabela)) {
                    $this->tipoErro = 1;
                    $this->erro = "CEP nao encontrado";
                    return false;
                } else {
                    $this->tipoErro = 2;
                    $this->erro = "Correios fora do ar";
                    return false;
                }
            }
            $this->tipoErro = 2;
            $this->erro = "Curl nao e um recurso";
            return $cURL;
        } else {
            $this->tipoErro = 2;
            $this->erro = "Funcao de CURL nao habilitada";
            return false;
        }
    }

    public function WebserviceRepublica() {
        //$codificado = array_map('htmlentities',$retorno);//transcodifica para mostrar a acentuacao em HTML como vai ser em um campo de formulario nao precisa
        $endereco = $this->urlRepublica . $this->cep; //webservice que retorna os dados do endereco
        $xml = @simplexml_load_file($endereco);
        if (is_a($xml, "SimpleXMLElement")) {
            if ($xml->resultado == 1) {
                $resultado['logradouro'] = $this->retirarTracoLogradouro($xml->tipo_logradouro . ' ' . $xml->logradouro);
                $resultado['bairro'] = $xml->bairro;
                $resultado['cidade'] = $xml->cidade;
                $resultado['uf'] = $xml->uf;
                $resultado['fonte'] = 'republica';
                $codificado = array_map('htmlentities', $resultado); //codifica para mostrar a acentuacao em HTML 
                $recodificado = array_map('html_entity_decode', $codificado); //recodifica para mostrar a acentuacao normal
                return $recodificado; //retorna o resultado da pesquisa CEP
            } else {
                $this->tipoErro = 1;
                $this->erro .= " + CEP nao encontrado";
                return false;
            }
        } else {
            $this->tipoErro = 2;
            $this->erro .= " + republica fora do ar";
            return false;
        }
    }

    public function WebserviceViaCEP() {
        $endereco = $this->urlViaCEP . $this->cep . "/json/"; //webservice que retorna os dados do endereco
        if (function_exists("curl_init")) {
            $ch = curl_init();
            if (is_resource($ch)) {
                // define url
                curl_setopt($ch, CURLOPT_URL, $endereco);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                // executa o post
                $json = curl_exec($ch);
                if ($json === false) {
                    $this->tipoErro = 2;
                    $this->erro = curl_error($ch);
                    return false;
                } else {
                    curl_close($ch);
                    $resposta = json_decode($json);
                    if (!isset($resposta->erro) && isset($resposta->cep)) {
                        $resultado['logradouro'] = $resposta->logradouro;
                        $resultado['bairro'] = $resposta->bairro;
                        $resultado['cidade'] = $resposta->localidade;
                        $resultado['uf'] = $resposta->uf;
                        $resultado['fonte'] = 'viaCEP';
                        return $resultado;
                    } else {
                        $this->tipoErro = 1;
                        $this->erro = "CEP nao encontrado";
                        return false;
                    }
                }
            } else {
                $this->tipoErro = 2;
                $this->erro = "Curl nao e um recurso";
                return false;
            }
        } else {
            $this->tipoErro = 2;
            $this->erro = "Funcao de CURL nao habilitada";
            return false;
        }
    }

    /*
      $resultado = @file_get_contents($this->urlRepublica . $this->cep); //webservice que retorna os dados do endereco
      foreach ($xml->webservicecep as $resultado) {
      var_dump($resultado);
      }

      exit();
      if (is_string($resultado)) {
      $resultado = utf8_encode(urldecode($resultado)); //faz a conversao de urlcoding para utf8
      parse_str($resultado, $retorno); //armazear o resultado em uma string $retorno
      }

      //var_dump($retorno);
      if (is_array($resultado) && !empty($resultado)) {
      $resultado['logradouro'] = $retorno['tipo_logradouro'] . ' ' . $retorno['logradouro'];
      $resultado['bairro'] = $retorno['bairro'];
      $resultado['cidade'] = $retorno['cidade'];
      $resultado['uf'] = $retorno['uf'];
      return $resultado; //retorna o resultado da pesquisa CEP
      } else {
      $this->erro .= " + republica fora do ar";
      return false;
      } */

    private function retirarTracoLogradouro($logradouro) {
        $trata_endereco = explode("-", strip_tags($logradouro));
        if ($trata_endereco[0] != "Travessa WE") {
            $logradouro = $trata_endereco[0];
        }
        return $logradouro;
    }

    private function limparEspacoEmBranco($resultado) {
        if (isset($resultado['logradouro'])) {
            $resultado['logradouro'] = trim(preg_replace('/\xc2\xa0/', '', $resultado['logradouro']));
        }
        if (isset($resultado['bairro'])) {
            $resultado['bairro'] = trim(preg_replace('/\xc2\xa0/', '', $resultado['bairro']));
        }
        if (isset($resultado['cidade'])) {
            $resultado['cidade'] = trim(preg_replace('/\xc2\xa0/', '', $resultado['cidade']));
        }
        if (isset($resultado['uf'])) {
            $resultado['uf'] = trim(preg_replace('/\xc2\xa0/', '', $resultado['uf']));
        }
        return $resultado;
    }

    public function getTipoErro() {
        return $this->tipoErro;
    }

    public function getErro() {
        return $this->erro;
    }

}

?>
