//$.ajax() // jQuery usando Ajax

// $.ajax(
//     { // Configuração da chamada

//     }
// )

// $.ajax(
//     { // Configuração da chamada
//          url: insira sua url aqui + variáveis,
//          type: aqui o tipo de chamada: GET, POST, PUT, DELETE, PATH,
//          success: function (variável_de_retorno){
//             //use a variavel de retorno se der certo
//},
//          error: function(variável_retorno_ruim){
//             //use a variavel de retorno ruim para tentar acertar na proxima
//},           //ou saber o que motivou o erro
//     }
// )

$("#meu_ip").on("click", function () {
    $.ajax({
        url: "https://httpbin.org/ip",
        type: "get",
        success: function (retorno) {
            console.log("Funcionou", retorno);
        },
        error: function (motivo) {
            console.warn("Deu ruim", motivo);
        },
    });
});

$("#eco_get").on("click", function () {

    $.ajax({
        url: encodeURI("https://httpbin.org/get?nome=Ciro&idade=33&cidade=PB"),
        type: "get",
        success: function (retorno) {
            console.log("Deu certo", retorno.args);
        },
        error: function (Errou) {
            console.warn("Errouuuu", Errou);
        },
    });
});

$("#delay_get").on("click", () => {

    let numero = $("#tempo").val()

    $.ajax(
        {
            url: encodeURI("https://httpbin.org/delay/" + numero),
            type: "get",
            success: (retorno) => {
                console.log("Eu sou o cordeirinho, Jesus é meu pastor...🙏");
            },
            error: (Error) => {
                console.warn("Noticia ruim chega mais rápido", Error);
            },
        });
});

$("#eco_post").on("click", () => {

    let objeto = {
        nome: $("nome").val(),
        idade: $("idade").val()
    };
    console.log("Esse é o objeto", objeto);

    $.ajax(
        {
            url: "https://httpbin.org/post",
            type: "post",
            headers: {
                "Accept": "application/json",
                "Cpmtent-type": "application/json",
            },
            data: JSON.stringify(objeto),
            success: (retorno) => {
                console.log("É mentira da barata, ela tem uma perna só", retorno);
            },
            erro: (erro) => {
                console.warn("Errouuu"), erro;

            }
        }
    )
});

$("#buscar_pokemon").on("click", () => {
    console.log("Iniciando busca...");
    let chave = $("#pokemon").val();
    console.log("Iremos buscar por ", chave);

    $.ajax(
        {

            url: encodeURI("https://pokeapi.co/api/v2/pokemon/" + chave),

            type: "get",

            success: (retorno) => {

                console.log("Quem é esse pokemon?", retorno);

                $("body").append(

                    $("<div>", { class: "row" }).append(
                        $("<div>", { class: "col-1", text: retorno.id }),
                        $("<div>", { class: "col-3", text: retorno.name }),
                        $("<div>", { class: "col" }).append(
                            $("<img>", { src: retorno.sprites.front_default })
                        ),
                        $("<div>", { class: "col" }).append(
                            $("<img>", { src: retorno.sprites.back_default })
                        )
                    )
                )
            },
            error: (opa) => {
                console.warn("Opa oq aconteceu ?", opa);
            }
        }
    )
})