console.warn("READ")
let leitura = document.getElementById("paragrafo_ler")
console.log(leitura);
console.log("Apenas o conteúdo ou textContent", leitura.textContent);
console.log("Apenas o conteúdo + elementos internos com HTML", leitura.innerHTML);

let aprendendo_leitura = document.getElementById("teste_01")
console.log(aprendendo_leitura.textContent);
console.log(aprendendo_leitura.innerHTML);

console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")]
console.log("Lendo todos os paragrafos", paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.innerHTML);
});

console.warn("write");
let escrita = document.getElementById("paragrafo_escrever");
escrita.title = "www.google.com"
escrita.textContent = "Esse paragrafo foi escrito com JavaScript";

document.getElementById("clique_aqui").textContent = "Botão alterado com JS";

let modificar_texto = document.getElementById("alterar_01");
modificar_texto.title = "O botão mudou?"
modificar_texto.textContent = "E agora, mudou?"

let modificando_texto = document.getElementById("alterar_02");
modificando_texto.title = "E aí garotinho, mudou o botão?"
modificando_texto.textContent = "Testanto 1, 2..."

function mudarTexto(conteudo) {
    let elemento = document.getElementById("qualquer");
    elemento.title = conteudo;
    elemento.textContent = conteudo;
}

function addConteudo(conteudo) {
    let enter = document.createElement("br");
    document.body.append(enter);
    
    let elemento = document.createElement("div");
    elemento.textContent = conteudo;

    document.body.append(elemento);
}