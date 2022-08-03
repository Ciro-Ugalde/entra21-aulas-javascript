console.group("Ler conteúdos com jQuery")

console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());

console.groupEnd()

console.group("Alterar conteúdo com jQuery")
$("#paragrafo_2").text("Conteúdo escrito com jQuery")
console.log($("#paragrafo_2").text());
console.groupEnd()

console.group("Ler vários conteúdos com jQuery")
let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd()

console.group("Escrever vários conteúdos com jQuery")
$("li").text("LI escrito com jQuery")
console.groupEnd()

console.group("Criar elementos com jQuery")
$("<button>", {
    text: "Click aqui",
    class: "btn btn-outline-primary"
}).appendTo("body")

$("body").append(
    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto itálico" }),
)
console.groupEnd()

console.group('Mais itens com jQuery');
$("<ul>").append(
    $("<li>", {
        text: "item 1"
    }),

    $("<li>", {
        text: "item 2"
    }),

    $("<li>", {
        text: "item 3"
    })
).appendTo("body")

console.groupEnd();

console.group('Exercicio: Escrever mais um item');

// Table
// Thead
// th
// th
// th
// Tbody
//tr
// td
// td
// td
//tr
// td
// td
// td

$("<table>", { class: "table table-gray table-striped table-bordered table-hover" }).append(
    $("<thead>").append(
        $("<th>", { text: "nome" }),
        $("<th>", { text: "idade" }),
        $("<th>", { text: "cidade" })
    ),
    $("<tbody>").append(
        $("<tr>").append(
            $("<td>", { text: "Mariazinha" }),
            $("<td>", { text: "23" }),
            $("<td>", { text: "Porto Belo" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Joãozinho" }),
            $("<td>", { text: "33" }),
            $("<td>", { text: "Florianópolis" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Jonas" }),
            $("<td>", { text: "35" }),
            $("<td>", { text: "Itapema" }),
        ) ,
    )
).appendTo("body")
console.groupEnd()

console.group('Eventos de clicks em qualquer lugar');

$("p").on("click", function () {
    alert("opa!")
})

$("li").on("click", function () {
    console.warn("opa, opa!")

})

$("#ok").on("click", function () {
    alert("Tudo belezinha!")

})
console.groupEnd();

console.group('Exercício com button');

$("#add").on("click", function () {
    $("<p>", {
        text: "Qual o problema?", class: "alert alert-danger"

    }).appendTo("body")

})

$("#alert").on("click", function () {
    $(".alert").remove()
})
console.groupEnd();


