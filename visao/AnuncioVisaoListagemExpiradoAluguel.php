
<script src="assets/libs/jquery/bootstrap-maxlength.js"></script>
<script src="assets/libs/jquery/jquery.validate.min.js" type="text/javascript"></script>
<script src="assets/libs/jquery/jquery.price_format.min.js"></script>
<script src="assets/libs/datatables/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" type="text/css" href="assets/libs/datatables/css/jquery.dataTables.min.css">
<script src="assets/js/anuncio.js"></script>

<script>
    $(document).ready(function () {

        $('#tabela').DataTable({
            "language": {
                "url": "assets/libs/datatables/js/Portuguese-Brasil.json",
            },
            "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"]],
            "stateSave": true,
            "columnDefs": [
                {"width": "20%", "orderable": false, "targets": 6}
            ]
        });

    })

</script>

<div class="ui middle aligned stackable grid container">
    <div class="column">
        <div class="ui large breadcrumb">
            <a class="section" href="index.php">Início</a>
            <i class="right chevron icon divider"></i>
            <i class="block layout small icon"></i><a class="section" href="index.php?entidade=Usuario&acao=meuPIP">Meu PIP</a>
            <i class="right chevron icon divider"></i>
            <a class="active section">Reativar Anúncios (aluguel)</a>
        </div>
    </div>
</div>

<div class="ui hidden divider"></div>

<?php
Sessao::gerarToken();

$item = $this->getItem();

//var_dump($item);

$totalAnunciosExpirados = count($item["listaAnuncioExpirado"]);

if ($totalAnunciosFinalizados < 1 && $totalAnunciosExpirados < 1) {
    ?>

    <div class="ui middle aligned stackable grid container">

        <div class="column">

            <div class="ui warning compact message">
                <div class="header">Atenção</div>
                <ul class="list">
                    <li>Você não possui anúncios do tipo aluguel expirados. Clique em voltar para retornar ao MEUPIP</li>
                </ul>
            </div>

            <div class="row">
                <a href="index.php?entidade=Usuario&acao=meuPIP">
                    <button class="ui orange button">Voltar</button>
                </a>
            </div>

            <div class="row"></div>     

        </div>   
    </div>    

<?php } else { //caso exista ao menos 1 anuncio cadastrado, exibir o datatable?>
    <div class="ui middle aligned stackable grid container">
        <div class="column">

            <table class="ui brown table" id="tabela">

                <thead>
                    <tr>
                        <th>Cód. Anúncio</th>
                        <th>Tipo</th>
                        <th>Titulo</th>
                        <th>Descrição</th> 
                        <th>Valor</th>
                        <th>Data Cadastro</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if ($item) {
                        foreach ($item["listaAnuncioExpirado"] as $anuncio) {

                            switch ($anuncio->getImovel()->getIdTipoImovel()) {

                                case 1: $tipoImovel = "casa";
                                    break;
                                case 2: $tipoImovel = "apartamentoplanta";
                                    break;
                                case 3: $tipoImovel = "apartamento";
                                    break;
                                case 4: $tipoImovel = "salacomercial";
                                    break;
                                case 5: $tipoImovel = "prediocomercial";
                                    break;
                                case 6: $tipoImovel = "terreno";
                                    break;
                            }
                            ?>
                        <script>
                            $(document).ready(function () {
                                formatarValor(<?php echo $anuncio->getId() ?>);
                            })
                        </script>
                        <tr>
                            <td>

                                <form id="form" action="index.php" method="post" target='_blank'>
                                    <input type="hidden" id="hdnEntidade" name="hdnEntidade" value="Anuncio" />
                                    <input type="hidden" id="hdnAcao" name="hdnAcao" value="detalhar"/>
                                    <input type="hidden" id="hdnCodAnuncio" name="hdnCodAnuncio" value="<?php echo $anuncio->getId() ?>"/>
                                    <input type="hidden" id="hdnTipoImovel" name="hdnTipoImovel" value="<?php echo $tipoImovel ?>"/>

                                    <button class="ui labeled icon button">
                                        <i class="zoom icon"></i>
                                        <?php echo $anuncio->getIdAnuncio(); ?>
                                    </button>                   

                                </form>

                            </td>
                            <td><?php
                                switch ($anuncio->getImovel()->getIdTipoImovel()) {

                                    case 1: echo "Casa";
                                        break;
                                    case 2: echo "Apartamento na Planta";
                                        break;
                                    case 3: echo "Apartamento";
                                        break;
                                    case 4: echo "Sala Comercial";
                                        break;
                                    case 5: echo "Prédio Comercial";
                                        break;
                                    case 6: echo "Terreno";
                                        break;
                                }
                                ?>
                            </td>
                            <td><?php echo $anuncio->getTituloAnuncio(); ?></td>
                            <td><?php echo $anuncio->getDescricaoAnuncio(); ?></td>
                            <td id="tdValor<?php echo $anuncio->getId(); ?>"><?php echo $anuncio->getValorMin(); ?></td>
                            <td><?php echo $anuncio->getDataHoraCadastro(); ?></td>
                            <td> <?php
                                echo "<i class='large remove circle red icon'></i>Expirado em " . $anuncio->getDataHoraDesativacao();
                                ?>
                            </td>
                            <td><?php echo "<a id='btnReativar" . $anuncio->getId() . "' class='ui green button'><i class='thumbs up icon'></i>Reativar Anúncio</a>" ?></td>

                        </tr>

                        <?php
                    }
                }
                ?>           

                </tbody>
            </table>

        </div>
    </div>

    <div class="ui hidden divider"></div>


    <?php
    if ($item) {
        foreach ($item["listaAnuncioExpirado"] as $anuncio) {
            ?>

            <script>
                reativar(<?php echo $anuncio->getId() ?>);
                formatarValor(<?php echo $anuncio->getId() ?>);
            </script>

            <!-- Modal do Reativar Aluguel -->
            <div class="ui standart modal" id="modalReativar<?php echo $anuncio->getId() ?>">
                <i class="close icon"></i>
                <div class="header">
                    Informações Básicas 
                </div>
                <div class="content" id="camposEmail">
                    <div class="description">
                        <!--                        <div class="ui piled segment">-->
                        <p id="textoConfirmacao"></p>
                        <form class="ui form" id="formReativar<?php echo $anuncio->getId() ?>" action="index.php" method="post">
                            <input type="hidden" id="hdnEntidade" name="hdnEntidade" value="Anuncio"  />
                            <input type="hidden" id="hdnAcao" name="hdnAcao" value="reativar" />  
                            <input type="hidden" id="hdnAnuncio" name="hdnAnuncio" value="<?php echo $anuncio->getId() ?>" />
                            <input type="hidden" id="hdnToken" name="hdnToken" value="<?php echo $_SESSION['token']; ?>" />

                            <!--                <h3 class="ui dividing header">Informações Básicas</h3>-->
                            <div class="ui form segment">
                                <div class="fields">

                                    <div class="eight wide required field">
                                        <label>Plano</label>
                                        <div class="ui selection dropdown">
                                            <input type="hidden" name="sltPlano" id="sltPlano">
                                            <i class="dropdown icon"></i>
                                            <?php
                                            if ($item && count($item["usuarioPlano"]) > 0) {
                                                ?>
                                                <div class="text">Escolha um plano</div>
                                                <div class="menu">                            
                                                    <?php
                                                    foreach ($item["usuarioPlano"] as $usuarioPlano) {
                                                        ?>
                                                        <div class="item" data-value="<?php echo $usuarioPlano->getId() ?>"><?php echo $usuarioPlano->getPlano()->getTitulo() . " (" . $usuarioPlano->getPlano()->getValidadepublicacao() . " dias) - Expira em: " . $usuarioPlano->DataExpiracao($usuarioPlano->getPlano()->getValidadeativacao()); ?></div>
                                                        <?php
                                                    }
                                                    ?>
                                                </div>
                                                <?php
                                            } else {
                                                ?>
                                                <div class="text">Você ainda não possui planos ativos.</div>
                                                <?php
                                            }
                                            ?>
                                        </div>
                                    </div>
                                    <div class="eight wide required field">
                                        <div class="ui orange dividing header">
                                            <i class="add to cart icon"></i>
                                            <div class="content">
                                                Comprar planos!
                                                <div class="sub header">  <a href="index.php?entidade=Plano&acao=listar"> Para anunciar é preciso ter planos ativos! </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="dadosAnuncio<?php echo $anuncio->getId() ?>">
                                <div class="fields">
                                    <div class="four wide required field">
                                        <label>Finalidade</label>
                                        <div class="ui selection dropdown">
                                            <div class="default text">Aluguel ou Venda</div>
                                            <i class="dropdown icon"></i>
                                            <input name="sltFinalidade" id="sltFinalidade" type="hidden">
                                            <div class="menu">
                                                <div class="item" data-value="Aluguel">Aluguel</div>
                                                <div class="item" data-value="Venda">Venda</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="twelve wide required field">
                                        <label>Título do Anúncio</label>
                                        <input name="txtTitulo" id="txtTitulo" type="text" placeholder="Informe o Título" maxlength="50">
                                    </div>
                                </div>
                                <div class="required field">
                                    <label>Descrição</label>
                                    <textarea name="txtDescricao" id="txtDescricao" placeholder="Informe uma Descrição do Imóvel" maxlength="150"></textarea>
                                </div>
                                <div class="three fields">
                                    <div class="field">
                                        <div class="ui toggle checkbox">
                                            <input name="chkValor" id="chkValor" type="checkbox" value="SIM">
                                            <label>Deseja informar um valor para o imóvel?</label>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="ui toggle checkbox">
                                            <input name="chkMapa" id="chkMapa" type="checkbox" value="SIM">
                                            <label>Exibir o mapa do endereço?</label>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="ui toggle checkbox">
                                            <input name="chkContato" id="chkContato" type="checkbox" value="SIM">
                                            <label>Exibir suas informações de contato?</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="one fields" id="divInformarValor">
                                    <div class="field">
                                        <label>Valor (não informar os centavos)</label>
                                        <input name="txtValor" id="txtValor" class="txtValor" placeholder="Valor do Imóvel" >
                                    </div>
                                </div>
                                </div>        
                            </div>
                        </form>
                        <!--                    </div>-->
                    </div>
                </div>

                <div id="divRetorno"></div>
                <div class="actions">
                    <div  id="botaoCancelarEmail" class="ui orange deny button">
                        Cancelar
                    </div>
                    <div  id="botaoEnviarEmail" class="ui positive right labeled icon button">
                        Reativar
                        <i class="checkmark icon"></i>
                    </div>
                </div>
            </div>

            <?php
        }
    }
    ?>

<?php } //fim do else, caso haja anuncios ativos ?> 