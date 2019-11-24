<?php

class Conexao {

    public static $instance;

    private function __construct() {
        
    }

    public static function getInstance() {

        if (!isset(self::$instance)) {
            self::$instance = new PDO('mysql:host=sql214.main-hosting.eu;dbname=u644393490_pip', 'u644393490_usrbd', 'osestudantes1',
                array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$instance->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
        } return self::$instance;
    }

    function TestarConexao() {

        try {

            $conexao = new Conexao();
            print "Sucesso";
        } catch (Exception $erro) {

            print "Erro ao Conectar. " . $erro->getMessage();
        }
    }

}
