<!DOCTYPE HTML>
<html lang="pt-br">
    <head>
        <title>PIP - Procure Im&oacute;veis Pai D'Egua</title> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">         
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <!-- JQUERY --> 
        <script src="<?php echo PIPURL; ?>/assets/libs/jquery/jquery-2.1.3.min.js"></script> 
        <!-- SEMANTIC UI --> 
        <link href="<?php echo PIPURL; ?>/assets/libs/semantic-ui/semantic.min.css" rel="stylesheet" type="text/css" /> 
        <script src="<?php echo PIPURL; ?>/assets/libs/semantic-ui/semantic.min.js"></script> 
        <!-- Template PIP -->
        <link href="<?php echo PIPURL; ?>/assets/css/template-pip.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="http://www.pipbeta.com.br/assets/imagens/favicon.ico" type="image/x-icon"/>
        <!-- Scripts -->
        <script type="text/javascript" src="assets/js/cabecalho.js"></script>
        <script type="text/javascript" src="assets/libs/timeout-dialog/timeout-dialog.js"></script>

    </head>
    <body>

        <?php if (Sessao::verificarSessaoUsuario()) { ?>
            <script>
                $(document).ready(function () {
                    logout();
                })
            </script>
        <?php } ?>
            
<header>
    <h1 class="float-l">
        <a href="<?php echo PIPURL; ?>/index.php">
            <img  class="ui left floated image"  
                src="<?php echo PIPURL; ?>/assets/imagens/tituloCasaAzulChanfle.jpg" width="60px"/></a>
        <a href="<?php echo PIPURL; ?>/index.php">PIP - Imóveis em Belém-PA</a>

    </h1>
    
    <!-- início do código que exibe o botão de navegação no celular -->
    
    <input type="checkbox" id="control-nav" />
    <label for="control-nav" class="control-nav"></label>
    <label for="control-nav" class="control-nav-close"></label>
    
    <!-- fim do código que exibe o botão de navegação no celular -->
    
    <nav class="float-r">
        <ul class="list-auto">           
        <?php if (Sessao::verificarSessaoUsuario()) { ?>              
            <li id="divNome">
                <span href="">Seja Bem Vindo, 
                    <?php echo ucfirst(strtolower(explode(" ", $_SESSION['nome'])[0])); ?></span>
            </li>

            <li>               
               <a href="<?php echo PIPURL; ?>/index.php?entidade=Usuario&acao=meuPIP">
                   <i class="block layout blue icon"></i> Acessar Meu PIP </a>         
            </li>

            <li>
                <a id="btnLogout" href="#"><i class="power red icon"></i> Sair</a>  
            </li>

            <?php } else { ?>

            <li>  
                <a href="<?php echo PIPURL; ?>/index.php?entidade=Usuario&acao=form&tipo=login">Fazer Login</a>  
            </li>
            <li>
                <a href="<?php echo PIPURL; ?>/index.php?entidade=Usuario&acao=form&tipo=cadastro">Cadastrar-se</a>
            </li>         
                <?php } ?>        
        </ul>
    </nav>
</header>
<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>
        <!--  
        <div class="ui container"> 
            <div class="ui basic clearing segment">
                <div class="ui left floated header">
                    <a href="<?php //echo PIPURL; ?>/index.php"> 
                        <img  class="ui left floated  image"  src="<?php //echo PIPURL; ?>/assets/imagens/logo.png" width="120px"/>
                </div>

                <div class="ui right floated header">
                    <?php //if (Sessao::verificarSessaoUsuario()) { ?>
                        <div class="ui center aligned compact segment">
                            <div id="divNome"> <h3>Seja bem vindo, <?php // ucfirst(strtolower(explode(" ", $_SESSION['nome'])[0])); ?></h3> </div>
                            <div>
                                <a href="<?php echo PIPURL; ?>/index.php?entidade=Usuario&acao=meuPIP" class="ui primary button"> <i class="block layout icon"></i> Meu PIP </a>
                                <a id="btnLogout" href="#" class="ui red button"><i class="power icon"></i> Sair</a>  
                            </div>
                        </div>
                    <?php //} else { ?>
                        <a href="<?php //echo PIPURL; ?>/index.php?entidade=Usuario&acao=form&tipo=login" class="ui primary button" id="btnAcessar">LOGIN</a>
                        <a href="<?php //echo PIPURL; ?>/index.php?entidade=Usuario&acao=form&tipo=cadastro" class="ui button">CADASTRAR-SE</a>
                    <?php //} ?>
                </div>
            </div>
        </div>
        -->
        <div id="modalAlertaSessao" class="ui basic test small modal">                
            <div class="ui icon header">
                <i class="warning sign icon"></i>
                ATENÇÃO: Seu tempo de sessão irá expirar
            </div>
            <div class="content">
                <p>Você será deslogado e redirecionado automaticamente para a página inicial em  <span id="timeout-countdown">60</span> segundos.</p>
            </div>
            <div class="actions">
                <div class="ui red basic cancel inverted button">
                    <i class="remove icon"></i>
                    Encerrar sessão
                </div>
                <div class="ui green ok inverted button">
                    <i class="checkmark icon"></i>
                    Desejo continuar logado!
                </div>
            </div>

        </div>
        <div id="modalAlertaLogout" class="ui basic test small modal">
            <div class="ui icon header">
                <i class="sign out icon"></i>
                ATENÇÃO: Você foi deslogado por segurança devido a um longo período de inatividade
            </div>
        </div>

