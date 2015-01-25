<script src="assets/js/buscaAnuncio.js"></script>

<script>
    buscarAnuncio();
</script>

<!--<div class="ui grid">
    <div class="row">
        <div class="column padding-reset">-->

<div class="ui page menu grid">
    <div class="center aligned one column row"> 
        <div class="column">
            <div class="field">
                <div class="ten wide required field">
                    <label>Tipo:</label>
                    <br>
                    <div class="ui selection dropdown">
                        <input type="hidden" name="sltTipoImovel" id="sltTipoImovel">
                        <div class="default text"></div>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item" data-value="casa">Casa</div>
                            <div class="item" data-value="apnovo">Apartamento na Planta/Novo</div>
                            <div class="item" data-value="apusado">Apartamento Usado</div>
                            <div class="item" data-value="slcomercia">Sala Cormecial</div>
                            <div class="item" data-value="terreno">Terreno</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="center aligned one column row">
        <div class="column">
            <form class="ui form">
                <div class="fields">

                    <div class="three wide field">
                        <label>Finalidade</label>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="sltFinalidade" id="sltFinalidade">
                            <div class="default text"></div>
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item" data-value="venda">Venda</div>
                                <div class="item" data-value="aluguel">Aluguel</div>
                            </div>
                        </div>
                    </div>

                    <div class="three wide field">
                        <label>Valor</label>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="sltValor" id="sltValor">
                            <div class="default text"></div>
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item" data-value=1000>1000</div>
                                <div class="item" data-value=2000>2000</div>
                            </div>
                        </div>
                    </div>

                    <div class="three wide field">
                        <label>Cidade</label>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="sltCidade" id="sltCidade">
                            <div class="default text"></div>
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item" data-value="Belem">Belém</div>
                                <div class="item" data-value="Ananindeua">Ananindeua</div>
                                <div class="item" data-value="Marituba">Marituba</div>
                            </div>
                        </div>
                    </div>

                    <div class="three wide field">
                        <label>Bairro</label>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="sltBairro" id="sltBairro">
                            <div class="default text"></div>
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item" data-value="jurunas">Jurunas</div>
                                <div class="item" data-value="marco">Marco</div>
                                <div class="item" data-value="pratinha">Pratinha</div>
                                <div class="item" data-value="Água Boa">Água Boa</div>
                            </div>
                        </div>
                    </div>

                    <div class="three wide field">
                        <label>Quartos</label>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="sltQuartos" id="sltQuartos">
                            <div class="default text"></div>
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item" data-value="1">1</div>
                                <div class="item" data-value="2">2</div>
                                <div class="item" data-value="3">3</div>
                                <div class="item" data-value="4">4</div>
                                <div class="item" data-value="5">+5</div>
                            </div>
                        </div>
                    </div>

                    <div class="ui toggle checkbox">
                        <input type="checkbox" name="checkgaragem" id="checkgaragem">
                        <label>Garagem</label>
                    </div>

                </div>

            </form> 
        </div>
    </div>
    <div class="center aligned one column row">
        <div class="column">
            <div class="green ui icon button" id="btnBuscarAnuncio">
                <i class="search icon"></i> 
                PIP
            </div>
        </div>
    </div>

</div>



<div class="ui hidden divider"></div>


<div class="ui hidden divider"></div>


<div class="ui page grid">
    <div class="three column row">
        <div class="column">
            <h2 class="ui header">Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <button class="ui tiny button m-top-10">View details »</button>
        </div>
        <div class="column">
            <h2 class="ui header">Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <button class="ui tiny button m-top-10">View details »</button>
        </div>
        <div class="column">
            <h2 class="ui header">Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <button class="ui tiny button m-top-10">View details »</button>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <div class="ui divider"></div>  
            <span>© Company 2014</span>
        </div>
    </div>
</div>

<div class="container"> 
    <div class="ui page grid main">
        <div class="row">
            <div class="column padding-reset">
                <div class="ui large message">
                    <h1 class="ui huge header">Navbar example</h1>
                    <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                    <p>To see the difference between static and fixed top navbars, just scroll.</p>
                    <a href="" class="ui blue button">View navbar docs &raquo;</a>
                </div>
            </div>
        </div>
    </div> 
</div>


<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>


<script src="assets/js/diferencial.js"></script>

<script>

    chamarDiferencial(); //chama a função javascript diferencial.js, para chamar o diferencial de cada Tipo de Imóvel

    $(document).ready(function() {

        $("select[name=sltCidade]").change(function() {
            $('select[name=sltBairro]').html('<option value="">Procurando...</option>');
            $.post('index.php?hdnEntidade=Bairro&hdnAcao=selecionarBairro&idcidade=' + $('#sltCidade').val(),
                    function(resposta) {
                        $('select[name=sltBairro]').html(resposta);
                    }

            );
        });
    });

</script>

<script>

    $(document).ready(function() {
        $("select[name=sltCidadeAvancado]").change(function() {
            $('select[name=sltBairroAvancado]').html('<option value="">Procurando...</option>');
            $.post('index.php?hdnEntidade=Bairro&hdnAcao=selecionarBairro&idcidade=' + $('#sltCidadeAvancado').val(),
                    function(resposta) {
                        $('select[name=sltBairroAvancado]').html(resposta);
                    }

            );
        });
    });

</script>

<script>
    $(document).ready(function() {
        $("#divValorVenda").hide(); //oculta a div dos valores de venda 
        $("#divValorAluguel").hide(); //oculta a div dos valores de aluguel

        $("#sltFinalidade").change(function() {
            if ($(this).val() == "venda") {
                $("#divValorInicial").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorAluguel").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorVenda").fadeIn(); //oculta campos exclusivos do apartamento 
                //             $("#lblCpfCnpj").html("CPF")
                //             $("#txtCpfCnpj").attr("placeholder", "Informe o CPF");
            }
            if ($(this).val() == "aluguel") {
                $("#divValorInicial").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorVenda").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorAluguel").fadeIn(); //oculta campos exclusivos do apartamento 
                //             $("#lblCpfCnpj").html("CNPJ");
                //             $("#txtCpfCnpj").attr("placeholder", "Informe o CNPJ");
            }

            if ($(this).val() == "") {
                $("#divValorVenda").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorAluguel").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorInicial").fadeIn(); //oculta campos exclusivos do apartamento 
            }

        })
    });
</script>

<script>
    $(document).ready(function() {
        $("#divValorVendaAvancado").hide(); //oculta a div dos valores de venda 
        $("#divValorAluguelAvancado").hide(); //oculta a div dos valores de aluguel

        $("#sltFinalidadeAvancado").change(function() {
            if ($(this).val() == "venda") {
                $("#divValorInicialAvancado").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorAluguelAvancado").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorVendaAvancado").fadeIn(); //oculta campos exclusivos do apartamento 
                //             $("#lblCpfCnpj").html("CPF")
                //             $("#txtCpfCnpj").attr("placeholder", "Informe o CPF");
            }
            if ($(this).val() == "aluguel") {
                $("#divValorInicialAvancado").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorVendaAvancado").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorAluguelAvancado").fadeIn(); //oculta campos exclusivos do apartamento 
                //             $("#lblCpfCnpj").html("CNPJ");
                //             $("#txtCpfCnpj").attr("placeholder", "Informe o CNPJ");
            }

            if ($(this).val() == "") {
                $("#divValorVendaAvancado").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorAluguelAvancado").fadeOut(); //oculta campos exclusivos do apartamento 
                $("#divValorInicialAvancado").fadeIn(); //oculta campos exclusivos do apartamento 
            }

        })
    });
</script>