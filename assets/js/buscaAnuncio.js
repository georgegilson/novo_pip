function buscarAnuncio() {
    $(document).ready(function () {

        $("#divCaracteristicas").hide();
        $("#divValor").hide();
        
        $('.menu .item').tab();

        $("input[name=sltCidade]").change(function () {
            $("#defaultBairro").html("<option value=''>Procurando...</div>");
            $.post('index.php?hdnEntidade=Bairro&hdnAcao=selecionarBairro&idcidade=' + $('#sltCidade').val(),
                    function (resposta) {
                        $("#defaultBairro").html("Selecione o Bairro");
                        $("#menuBairro").html(resposta);
                    }
            );
        });
        
        $("input[name=sltCidadeAvancado]").change(function () {
            $("#defaultBairroAvancado").html("<option value=''>Procurando...</div>");
            $.post('index.php?hdnEntidade=Bairro&hdnAcao=selecionarBairro&idcidade=' + $('#sltCidadeAvancado').val(),
                    function (resposta) {
                        $("#defaultBairroAvancado").html("Selecione o Bairro");
                        $("#menuBairroAvancado").html(resposta);
                    }
            );
        });

        $("#spanValor").priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            centsLimit: 0,
            limit: 8,
            thousandsSeparator: '.'
        })

        $('.ui.dropdown')
                .dropdown({
                    on: 'hover'
                });
        $('.ui.checkbox')
                .checkbox();

        $('.special.cards .image').dimmer({
            on: 'hover'
        });

        /*Criar uma view especifica para tela inicial*/
        $('#divAnuncios').load("index.php", {hdnEntidade: 'Anuncio', hdnAcao: 'buscarAnuncio',
            tipoImovel: 'todos',
            valor: '',
            finalidade: '',
            cidade: '',
            bairro: '',
            quarto: '',
            banheiro: '',
            suite: '',
            condicao: '',
            unidadesandar: '',
            area: '',
            garagem: 'false'});


        $("#btnBuscarAnuncio").on('click', function () {
            
            $("#load").addClass('ui active inverted dimmer');
            if ($('#sltTipoImovel').val() == "") {
                tipoimovel = "todos"
            } else {
                tipoimovel = $('#sltTipoImovel').val()
            }
            ;
            $('#divAnuncios').load("index.php", {hdnEntidade: 'Anuncio', hdnAcao: 'buscarAnuncio',
                tipoImovel: tipoimovel,
                valor: $('#sltValor').val(),
                finalidade: $('#sltFinalidade').val(),
                idcidade: $('#sltCidade').val(),
                idbairro: $('#sltBairro').val(),
                quarto: $('#sltQuartos').val(),
                banheiro: $('#sltBanheiros').val(),
                suite: $('#sltSuites').val(),
                condicao: $('#sltCondicao').val(),
                unidadesandar: $('#sltUnidadesAndar').val(),
                area: $('#sltArea').val(),
                diferencial: $('#carregarDiferenciais').val(), 
                garagem: $('#checkgaragem').parent().checkbox('is checked')}, function () {
                $("#load").addClass('ui active inverted dimmer');
            });
            setTimeout(function () {
                $('#load').removeClass("ui active inverted dimmer");
            }, 1000);
        });
        
        
        $("#btnBuscarAnuncioAvancado").on('click', function () {
            
            $("#load").addClass('ui active inverted dimmer');
            if ($('#sltTipoImovelAvancado').val() == "") {
                tipoimovel = "todos"
            } else {
                tipoimovel = $('#sltTipoImovelAvancado').val()
            }
            ;
            $('#divAnuncios').load("index.php", {hdnEntidade: 'Anuncio', hdnAcao: 'buscarAnuncio',
                tipoImovel: tipoimovel,
                valor: $('#sltValor').val(),
                finalidade: $('#sltFinalidadeAvancado').val(),
                idcidade: $('#sltCidadeAvancado').val(),
                idbairro: $('#sltBairroAvancado').val(),
                quarto: $('#sltQuartos').val(),
                banheiro: $('#sltBanheiros').val(),
                suite: $('#sltSuites').val(),
                condicao: $('#sltCondicaoAvancado').val(),
                unidadesandar: $('#sltUnidadesAndar').val(),
                area: $('#sltArea').val(),
                diferencial: $('#carregarDiferenciais').val(), 
                garagem: $('#sltGaragem').val()}, 
            function () {
                $("#load").addClass('ui active inverted dimmer');
            });
            setTimeout(function () {
                $('#load').removeClass("ui active inverted dimmer");
            }, 1000);
        });
        
        
    });
}

function buscarAnuncioUsuario() {
    $(document).ready(function () {

        $("#divCaracteristicas").hide();
        $("#divValorVenda").hide(); //oculta a div dos valores de venda 
        $("#divValorAluguel").hide(); //oculta a div dos valores de aluguel

        $("#sltTipoImovel").change(function () {
            if ($(this).val() == "casa") {
                $("#divCaracteristicas").show();
                $("#condicao").show();
            }
            if ($(this).val() == "apartamentoplanta") {
                $("#divCaracteristicas").show();
                $("#condicao").hide();
                //$("#divCaracteristicas").hide();
            }
            if ($(this).val() == "apartamento") {
                $("#divCaracteristicas").show();
                $("#condicao").hide();
            }
            if ($(this).val() == "salacomercial") {
                $("#divCaracteristicas").hide();
                $("#condicao").show();
            }
            if ($(this).val() == "terreno") {
                $("#divCaracteristicas").hide();
                $("#condicao").show();
            }
            if ($(this).val() == "") {
                $("#divCaracteristicas").hide();
                $("#condicao").hide();
            }
        })

        $("#sltFinalidade").change(function () {

            if ($(this).val() == "venda") {
                $("#divValorAluguel").hide();
                $("#divValorVenda").show();

            }
            if ($(this).val() == "aluguel") {
                $("#divValorVenda").hide();
                $("#divValorAluguel").show();
            }

        })

        $("input[name=sltCidade]").change(function () {
            $("#menuBairro").html("<div class='item'>Procurando...</div>");
            $.post('index.php?hdnEntidade=Bairro&hdnAcao=selecionarBairro&idcidade=' + $('#sltCidade').val(),
                    function (resposta) {
                        $("#menuBairro").html(resposta);
                    }
            );
        });

        $("#spanValor").priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            centsLimit: 0,
            limit: 8,
            thousandsSeparator: '.'
        })

        $('.ui.dropdown')
                .dropdown({
                    on: 'hover'
                });
        $('.ui.checkbox')
                .checkbox();

        $('.special.cards .image').dimmer({
            on: 'hover'
        });

        /*Criar uma view especifica para tela inicial*/
        $('#divAnuncios').load("index.php", {hdnEntidade: 'Anuncio', hdnAcao: 'buscarAnuncio',
            tipoImovel: 'todos',
            valor: '',
            finalidade: '',
            cidade: '',
            bairro: '',
            quarto: '',
            condicao: '',
            id: $('#hdUsuario').val(),
            garagem: 'false'});


        $("#btnBuscarAnuncioUsuario").on('click', function () {
            $("#load").addClass('ui active inverted dimmer');
            if ($('#sltTipoImovel').val() == "") {
                tipoimovel = "todos"
            } else {
                tipoimovel = $('#sltTipoImovel').val()
            }
            ;
            $('#divAnuncios').load("index.php", {hdnEntidade: 'Anuncio', hdnAcao: 'buscarAnuncio',
                tipoImovel: tipoimovel,
                valor: $('#sltValor').val(),
                finalidade: $('#sltFinalidade').val(),
                idcidade: $('#sltCidade').val(),
                idbairro: $('#sltBairro').val(),
                quarto: $('#sltQuartos').val(),
                banheiro: $('#sltBanheiros').val(),
                suite: $('#sltSuites').val(),
                condicao: $('#sltCondicao').val(),
                id: $('#hdUsuario').val(),
                garagem: $('#checkgaragem').parent().checkbox('is checked')}, function () {
                $("#load").addClass('ui active inverted dimmer');
            });
            setTimeout(function () {
                $('#load').removeClass("ui active inverted dimmer");
            }, 1000);
        });
    });
}

function carregarAnuncio() { //valor = quantidade de anuncios

    $(document).ready(function () {

        var selecionado = 0;

        $('.special.cards .image').dimmer({
            on: 'hover'
        });

        $('.ui.checkbox')
                .checkbox({
                    onChecked: function () { //ao clicar no anuncio, marcar de vermelho
                        $(this).closest('.card').attr("class", "red card");
                        selecionado = selecionado + 1;
                        var botaoEmailComparar = ("<div class='ui buttons'><button class='ui button' type='submit' id='btnEmail'>Enviar Por Email</button><div class='or' data-text='ou'></div><button class='ui positive button' type='submit' id='btnComparar'>Comparar</button></div>");

                        if (selecionado == 1) {
                            $("#divBotoes").append(botaoEmailComparar);
                            confirmarEmail();
                            $('#btnComparar').on('click', function () {
                                $("#hdnEntidade").val("Anuncio");
                                $("#hdnAcao").val("comparar");
                                $('#form').submit();
                            })
                        }
                    },
                    onUnchecked: function () { //ao desmarcar o anuncio, tirar o vermelho
                        $(this).closest('.card').attr("class", "card");
                        selecionado = selecionado - 1;
                        if (selecionado == 0) {
                            $("#divBotoes").empty();
                        }

                    }}
                );

        $("#spanValor").priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            centsLimit: 0,
            limit: 8,
            thousandsSeparator: '.'
        })

        $('.special.cards .image .button').on('click', function () {
            $("#hdnCodAnuncio").val($(this).siblings().val());
            $("#hdnTipoImovel").val($(this).siblings().next().val());
            $("#hdnEntidade").val("Anuncio");
            $("#hdnAcao").val("detalhar");
            $('#form').submit();
        })
        
        $("#hdnOrdTipoImovel").val($('#sltTipoImovel').val());
        $("#hdnOrdValor").val($('#sltValor').val());
        $("#hdnOrdFinalidade").val($('#sltFinalidade').val());
        $("#hdnOrdIdcidade").val($('#sltCidade').val());
        $("#hdnOrdIdbairro").val($('#sltBairro').val());
        $("#hdnOrdQuarto").val($('#sltQuartos').val());
        $("#hdnOrdCondicao").val($('#sltCondicao').val());
        $("#hdnOrdGaragem").val($('#checkgaragem').parent().checkbox('is checked'));

        $('#tabela').DataTable({
            "language": {
                "url": "assets/libs/datatables/js/Portuguese-Brasil.json",
            },
            "pageLength": 6,
            "lengthMenu": [[6, 12, 18, 24, -1], [6, 12, 18, 24, "Todos"]],
            "stateSave": true,
            "bSort": false
        });

    })

}

function carregarAnuncioUsuario() {

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $("#spanValor").priceFormat({
        prefix: 'R$ ',
        centsSeparator: ',',
        centsLimit: 0,
        limit: 8,
        thousandsSeparator: '.'
    })

    $('.special.cards .image .button').on('click', function () {
        $("#hdnCodAnuncio").val($(this).siblings().val());
        $("#hdnTipoImovel").val($(this).siblings().next().val());
        $('#form').submit();
    })
}

function confirmarEmail() {
    $(document).ready(function () {

        $('#btnEmail').click(function () {
            if ("#hdnMsgDuvida") {
                $("#txtMsgEmail").rules("add", {
                    required: true
                });
            }
            $("#camposEmail").show();
            $("#botaoEnviarEmail").show();
            $("#botaoCancelarEmail").show();
            $("#botaoFecharEmail").hide();
            $("#divRetorno").empty();

            $("#idAnuncios").empty();
            $("#idAnunciosCabecalho").empty();
            
            var arr = [];
            $("input[type^='checkbox']:checked").each(function ()
            {
                $("#idAnuncios").append("<input type='hidden' name='anunciosSelecionados[]' value='" + $(this).val() + "'>");
                arr.push($(this).val())
            });

            //retira a vírgula do último elemento
            var anuncios = arr.join(", ");

            $("#idAnunciosCabecalho").append("<div class='ui horizontal list'>\n\
                                        <div class='item'>\n\
                                        <div class='content'>" + anuncios + "</div>\n\
                         </div>\n\
                         </div>");

            $('#modalEmail').modal({
                closable: true,
                transition: "fade up",
                onDeny: function () {
                },
                onApprove: function () {
                    $("#formEmail").submit();
                    return false; //deixar o modal fixo
                }
            }).modal('show');


        })
    })
}

function formatarValor(valor){

    $("#spanValor"+valor).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            centsLimit: 0,
            limit: 8,
            thousandsSeparator: '.'
        })
}

function enviarEmail() {
    $(document).ready(function () {

        $("#botaoFecharEmail").hide();
        
        $('#txtNomeEmail').maxlength({
            alwaysShow: true,
            threshold: 50,
            warningClass: "ui small green circular label",
            limitReachedClass: "ui small red circular label",
            separator: ' de ',
            preText: 'Voc&ecirc; digitou ',
            postText: ' caracteres permitidos.',
            validate: true
        });
        $('#txtMsgEmail').maxlength({
            alwaysShow: true,
            threshold: 200,
            warningClass: "ui small green circular label",
            limitReachedClass: "ui small red circular label",
            separator: ' de ',
            preText: 'Voc&ecirc; digitou ',
            postText: ' caracteres permitidos.',
            validate: true
        });
        $('#txtEmailEmail').maxlength({
            alwaysShow: true,
            threshold: 100,
            warningClass: "ui small green circular label",
            limitReachedClass: "ui small red circular label",
            separator: ' de ',
            preText: 'Voc&ecirc; digitou ',
            postText: ' caracteres permitidos.',
            validate: true
        });

        $.validator.setDefaults({
            ignore: [],
            errorClass: 'errorField',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass("ui red pointing above ui label error").appendTo(element.closest('div.field'));
            },
            highlight: function (element, errorClass, validClass) {
                $(element).closest("div.field").addClass("error").removeClass("success");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest(".error").removeClass("error").addClass("success");
            }
        });

        $.validator.messages.required = 'Campo obrigatório';
        $('#formEmail').validate({
            onkeyup: false,
            focusInvalid: true,
            rules: {
                txtEmailEmail: {
                    required: true,
                    email: true
                },
                captcha_code: {
                    required: true,
                    remote:
                            {
                                url: "index.php",
                                dataType: "json",
                                type: "POST",
                                data: {
                                    hdnEntidade: "Usuario",
                                    hdnAcao: "validarCaptcha"
                                }
                            }
                }
            },
            
            messages: {
                txtEmailEmail: {
                    email: "Informe um email válido"
                },
                captcha_code: {
                    remote: "Código Inválido"
                },
                
            },
            submitHandler: function (form) {
                $.ajax({
                    url: "index.php",
                    dataType: "json",
                    type: "POST",
                    data: $('#formEmail').serialize(),
                    beforeSend: function () {
                        $("#botaoEnviarEmail").hide();
                        $("#botaoCancelarEmail").hide();
                        $("#camposEmail").hide();
                        $("#divRetorno").html("<div><div class='ui active inverted dimmer'><div class='ui text loader'>Enviando Email. Aguarde...</div></div></div>");
                    },
                    success: function (resposta) {
                        $("#divRetorno").empty();
                        $("#botaoCancelarEmail").hide();
                        $("#botaoFecharEmail").show();
                        if (resposta.resultado == 1) {
                            $("#divRetorno").html('<div class="ui inverted green center aligned segment">\n\
                        <p>E-Mail enviado com Sucesso </p>');
                            
                        } else {
                            $("#divRetorno").html('<div class="ui inverted red center aligned segment">\n\
    <h2 class="ui header">Tente novamente mais tarde!</h2><p>Houve um erro no processamento. </p></div>');
                        }
                    }
                })
                return false;
            }
        })

    });
}


function enviarDuvidaAnuncio() {
    $(document).ready(function () {

        $("#botaoFecharDuvida").hide();
       
        $('#btnDuvida').click(function () {
        
        $('#txtNomeDuvida').maxlength({
            alwaysShow: true,
            threshold: 50,
            warningClass: "ui small green circular label",
            limitReachedClass: "ui small red circular label",
            separator: ' de ',
            preText: 'Voc&ecirc; digitou ',
            postText: ' caracteres permitidos.',
            validate: true
        });
        $('#txtMsgDuvida').maxlength({
            alwaysShow: true,
            threshold: 200,
            warningClass: "ui small green circular label",
            limitReachedClass: "ui small red circular label",
            separator: ' de ',
            preText: 'Voc&ecirc; digitou ',
            postText: ' caracteres permitidos.',
            validate: true
        });
        $('#txtEmailDuvida').maxlength({
            alwaysShow: true,
            threshold: 100,
            warningClass: "ui small green circular label",
            limitReachedClass: "ui small red circular label",
            separator: ' de ',
            preText: 'Voc&ecirc; digitou ',
            postText: ' caracteres permitidos.',
            validate: true
        });
        
        $('#modalDuvidaAnuncio').modal({
                closable: true,
                transition: "fade up",
                onDeny: function () {
                },
                onApprove: function () {
                    $("#formDuvidaAnuncio").submit();
                    return false; //deixar o modal fixo
                }
            }).modal('show');     

        $.validator.setDefaults({
            ignore: [],
            errorClass: 'errorField',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass("ui red pointing above ui label error").appendTo(element.closest('div.field'));
            },
            highlight: function (element, errorClass, validClass) {
                $(element).closest("div.field").addClass("error").removeClass("success");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest(".error").removeClass("error").addClass("success");
            }
        });

        $.validator.messages.required = 'Campo obrigatório';
        $('#formDuvidaAnuncio').validate({
            onkeyup: false,
            focusInvalid: true,
            rules: {
                txtEmailDuvida: {
                    required: true,
                    email: true
                },
                txtMsgDuvida: {
                    required: true
                },
                captcha_code: {
                    required: true,
                    remote:
                            {
                                url: "index.php",
                                dataType: "json",
                                type: "POST",
                                data: {
                                    hdnEntidade: "Usuario",
                                    hdnAcao: "validarCaptcha"
                                }
                            }
                }
            },
            
            messages: {
                txtEmailDuvida: {
                    email: "Informe um email válido"
                },
                captcha_code: {
                    remote: "Código Inválido"
                },
                
            },
            submitHandler: function (form) {
                $.ajax({
                    url: "index.php",
                    dataType: "json",
                    type: "POST",
                    data: $('#formDuvidaAnuncio').serialize(),
                    beforeSend: function () {
                        $("#botaoEnviarDuvida").hide();
                        $("#botaoCancelarDuvida").hide();
                        $("#camposDuvida").hide();
                        $("#divRetorno").html("<div><div class='ui active inverted dimmer'>\n\
                        <div class='ui text loader'>Enviando mensagem. Aguarde...</div></div></div>");
                    },
                    success: function (resposta) {
                        $("#divRetorno").empty();
                        $("#botaoCancelarDuvida").hide();
                        $("#botaoFecharDuvida").show();
                        if (resposta.resultado == 1) {
                            $("#divRetorno").html('<div class="ui inverted green center aligned segment">\n\
                        <p>Mensagem enviada com Sucesso </p>');
                            $("#btnDuvida").attr("disabled", "disabled");
                            
                        } else {
                            $("#divRetorno").html('<div class="ui inverted red center aligned segment">\n\
                        <h2 class="ui header">Tente novamente mais tarde. Houve um erro no processamento.</h2></div>');
                        }
                    }
                })
                return false;
            }
        })

       })
   })
}


function inserirAnuncioModal() {

    var idAnuncio;

    $('.ui.checkbox')
            .checkbox({
                onChecked: function () {
                    idAnuncio = ("<input type='hidden' name='idAnuncio[]' id='idAnuncio'" + $(this) + ">");
                    $("#divBotoes").append(idAnuncio);
                },
                onUnchecked: function () {
                    // idAnuncio.remove();

                }})

}

function marcarMapa(logradouro, numero, bairro, tituloAnuncio, valor, finalidade, altura, largura, aprox){
    
$(document).ready(function() {

$("#mapaGmaps").hide();

$("#mapaGmapsBusca").width(altura).height(largura).gmap3();

$("#mapaGmapsBusca").gmap3({
 map:{
    options:{
     center:[-1.37178665, -48.45176697],
     zoom: aprox,
     draggable: true
    }
 },
 marker:{
    values:[
        
        {address:logradouro +", "+ numero+" - "+ bairro, data: tituloAnuncio+" - R$ "+valor+"<br>"+ "FInalidade: "+finalidade},
               
    ],
    options:{
      draggable: false
    },
    events:{
      mouseover: function(marker, event, context){
        var map = $(this).gmap3("get"),
          infowindow = $(this).gmap3({get:{name:"infowindow"}});
        if (infowindow){
          infowindow.open(map, marker);
          infowindow.setContent(context.data);
        } else {
          $(this).gmap3({
            infowindow:{
              anchor:marker, 
              options:{content: context.data}
            }
          });
        }
      },
      mouseout: function(){
        var infowindow = $(this).gmap3({get:{name:"infowindow"}});
        if (infowindow){
          infowindow.close();
        }
    }
    }
  }
});
                              
});
    
}

function carregarDiferencial(){
    
    $(document).ready(function() {

        $("#sltTipoImovelAvancado").change(function () {
            
            $.ajax({
                        url: "index.php",
                        type: "POST",
                        data: {
                            hdnEntidade: "TipoImovelDiferencial",
                            hdnAcao: "buscarDiferencialLista",
                            sltTipoImovel: $('#sltTipoImovelAvancado').val()
                        },
                        success: function (resposta) {
                            
                            $('#carregarDiferenciais').html(resposta);

                        }
            })
        })
    })
}

function inicio(){
    
    $(document).ready(function () {
        $("#divValorVenda").hide(); 
        $("#divValorAluguel").hide(); 
        $("#divQuarto").hide(); 
        $("#divCondicao").hide(); 
        $("#divCondicaoAvancado").hide(); 
        $("#divQuarto").hide();
        $("#divBanheiro").hide();
        $("#divSuite").hide();
        $("#divAreaApartamento").hide();
        $("#divAreaCasaTerreno").hide();
        $("#divUnidadesAndar").hide();
        $("#divDiferencial").hide();
        $("#divGaragem").hide();
        $("#divGaragemAvancado").hide();

        $("#sltFinalidade").change(function () {
            if ($(this).val() == "venda") {
                $("#divValorInicial").hide(); 
                $("#divValorAluguel").hide(); 
                $("#divValorVenda").show(); 
   
            }
            if ($(this).val() == "aluguel") {
                $("#divValorInicial").hide(); 
                $("#divValorVenda").hide(); 
                $("#divValorAluguel").show(); 
                
            }

            if ($(this).val() == "") {
                $("#divValorVenda").hide(); 
                $("#divValorAluguel").hide(); 
                $("#divValorInicial").show(); 
            }

        })
        
        $("#sltTipoImovel").change(function () {
            
            switch($(this).val()){
                
                case "casa":
                $("#divGaragem").show();
                $("#divCondicao").show();
                break;
                
                case "apartamentoplanta":
                $("#divGaragem").show();
                $("#divCondicao").hide();
                break;
                
                case "apartamento":
                $("#divGaragem").show();
                $("#divCondicao").show();
                break;
                
                case "salacomercial":
                $("#divGaragem").show();
                $("#divCondicao").show();
                break;
                
                case "prediocomercial":
                $("#divGaragem").hide();
                $("#divCondicao").hide();
                break;
                
                case "terreno":
                $("#divGaragem").hide();
                $("#divCondicao").hide();
                break;
                
            }
            
        })
        
        $("#sltTipoImovelAvancado").change(function () {

           $('#carregarDiferenciais').dropdown('restore defaults'); //resetar os diferenciais selecionados ao trocar o tipo
           
           switch($(this).val()){
               
            case "casa":
                
                $("#divQuarto").show(); 
                $("#divCondicaoAvancado").show(); 
                $("#divGaragemAvancado").show();
                $("#divBanheiro").show();
                $("#divSuite").show();
                $("#divAreaCasaTerreno").show();
                $("#divDiferencial").show();
                $("#divAreaApartamento").hide();              
                $("#divUnidadesAndar").hide();
            break;   
            
            case "apartamento":
                
                $("#divAreaCasaTerreno").hide();
                $("#divQuarto").show(); 
                $("#divCondicaoAvancado").show(); 
                $("#divGaragemAvancado").show();
                $("#divBanheiro").show();
                $("#divSuite").show();
                $("#divAreaApartamento").show();
                $("#divUnidadesAndar").show();
                $("#divDiferencial").show();
                
            break;
            
            case "apartamentoplanta":
                
                $("#divCondicaoAvancado").hide();
                $("#divAreaCasaTerreno").hide();
                $("#divQuarto").show();                
                $("#divGaragemAvancado").show();
                $("#divBanheiro").show();
                $("#divSuite").show();
                $("#divAreaApartamento").show();
                $("#divUnidadesAndar").show();
                $("#divDiferencial").show();
                
            break;
            
            case "salacomercial":
                
                $("#divQuarto").hide(); 
                $("#divSuite").hide();              
                $("#divAreaCasaTerreno").hide();
                $("#divAreaTerreno").hide();
                $("#divUnidadesAndar").hide();
                $("#divAreaApartamento").show();
                $("#divCondicaoAvancado").show();
                $("#divGaragemAvancado").show();
                $("#divBanheiro").show();
                
            break;
            
            case "prediocomercial":
                
                $("#divQuarto").hide(); 
                $("#divCondicaoAvancado").hide(); 
                $("#divSuite").hide();
                $("#divGaragemAvancado").hide();
                $("#divUnidadesAndar").hide();
                $("#divAreaCasaTerreno").hide();
                $("#divAreaApartamento").hide();
                $("#divArea").show();               
                $("#divBanheiro").show();
                
            break;
            
            case "terreno":
                
                $("#divQuarto").hide(); 
                $("#divCondicaoAvancado").hide(); 
                $("#divSuite").hide();
                $("#divGaragemAvancado").hide();
                $("#divBanheiro").hide();
                $("#divUnidadesAndar").hide();               
                $("#divAreaApartamento").hide();
                $("#divAreaCasaTerreno").show();
                               
            break;
           }
          
        })
        
    });
}

function ordemInicio(){
    
    $(document).ready(function () {
        $("#sltOrdenacao").change(function () {
            $("#load").addClass('ui active inverted dimmer');
            if ($('#hdnOrdTipoImovel').val() == "") {
                tipoimovel = "todos";
            } else {
                tipoimovel = $('#sltTipoImovel').val();
            }
            $('#divAnuncios').load("index.php", {hdnEntidade: 'Anuncio', hdnAcao: 'buscarAnuncio',
                tipoImovel: tipoimovel,
                valor: $('#hdnOrdValor').val(),
                finalidade: $('#hdnOrdFinalidade').val(),
                idcidade: $('#hdnOrdCidade').val(),
                idbairro: $('#hdnOrdBairro').val(),
                quarto: $('#hdnOrdQuartos').val(),
                condicao: $('#hdnOrdCondicao').val(),
                garagem: $('#hdnOrdGaragem').val(),
                ordem: $(this).val()}, function () {
                $("#load").addClass('ui active inverted dimmer');
            });
            setTimeout(function () {
                $('#load').removeClass("ui active inverted dimmer");
            }, 1000);
        })
    });
}