$("body").attr("class", "container-fluid mt-4 bg-dark");

$("<header>", { class: "row" })
    .append(
        $("<section>", { class: "col" }).append(
            $("<div>", { class: "card" }).append(
                $("<div>", { class: "card-body text-center" }).append(
                    $("<h1>", { text: "Página vertical" })
                )
            )
        )
    )
    .appendTo("body");

$("body")
    .append(
        $("<section>", { class: "row" }).append(
            $("<aside>", { class: "col-3 mt-4" }).append(
                $("<section>", { class: "col" }).append(
                    $("<div>", { class: "card" }).append(
                        $("<div>", { class: "card-body" }).append(
                            $("<nav>").append(
                                $("<a>", { href: "/horizontal.html", text: "Horizontal" }),
                                $("<a>", { href: "/crud.html", text: "CRUD", target: "_blank" })
                            )
                        )
                    )
                )
            ),
            $("<main>", { class: "col mt-4" }).append(
                $("<section>", { class: "col" }).append(
                    $("<div>", { class: "card" }).append(
                        $("<div>", { class: "card-body" }),
                        $("<div>", { class: "card-footer", text: "© Copyright - Todos os direitos reservados" })
                    )
                )
            )
        )
    )
    .appendTo("body");

$("aside nav a").attr(
    "class",
    "btn btn-outline-danger mb-1 btn-block form-control"
);

$("main .card-body").append(
    $("<table>", {
        class: "table table-bordered table-striped table-hover",
    }).append(
        $("<thead>").append(
            $("<th>", { text: "Nome" }),
            $("<th>", { text: "Idade" }),
            $("<th>", { text: "Cidade" })
        ),
        $("<tbody>").append(
            $("<tr>").append(
                $("<td>", { text: "Ciro" }),
                $("<td>", { text: "33" }),
                $("<td>", { text: "Porto Belo" })
            ),
            $("<tr>").append(
                $("<td>", { text: "Joãozinho" }),
                $("<td>", { text: "25" }),
                $("<td>", { text: "São José" })
            )
        )
    )
);