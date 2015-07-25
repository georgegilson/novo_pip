function buscarAnuncio() {
    $(document).ready(function () {

        $("#divCaracteristicas").hide();
        $("#divValor").hide();


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
        })

        $("#sltFinalidade").change(function () {
            if ($(this).val() == "venda") {
                $("#divValorAluguel").hide();
                $("#divPreenchimento2").hide();
                $("#divValor").show();
            }
            if ($(this).val() == "aluguel") {
                $("#divValorVenda").hide();
                $("#divPreenchimento2").hide();
                $("#divValor").show();
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
                condicao: $('#sltCondicao').val(),
                garagem: $('#checkgaragem').parent().checkbox('is checked')}, function () {
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
            var arr = [];
            $("input[type^='checkbox']:checked").each(function ()
            {
                $("#idAnuncios").append("<input type='hidden' name='anunciosSelecionados[]' value='" + $(this).val() + "'>");
                arr.push($(this).val())
            });

            //retira a vírgula do último elemento
            var anuncios = arr.join(", ");

            $("#idAnuncios").append("<div class='ui horizontal list'>\n\
                                        <div class='item'>\n\
                                        <div class='content'>\n\
                                        <div class='header'>Anuncios Selecionados: </div>" + anuncios + "</div>\n\
                         </div>\n\
                         </div>\n\
            <div class='ui hidden divider'></div>");

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
                }
            },
            messages: {
                txtEmailEmail: {
                    required: "Email Inválido",
                    email: "Informe um email válido"
                }
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
    <p>E-Mail enviado com Sucesso </p>\n\
    ');
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