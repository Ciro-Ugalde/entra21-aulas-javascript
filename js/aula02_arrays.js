function definirArray() {
    console.log("Para criar um Array basta um LET NOME = []");
    console.log("Para criar um Array com itens basta um LET NOME = [4,8,6]");

    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ["Ciro", "Alexsandro", "Stephanie", "Lucas"];
    console.log(nomes);
}

definirArray();

function alertar(mensagem) {
    alert(mensagem)
}

var lista = ["Ciro", "Alexsandro", "Lucas", "Stephanie"];
function inserirArray(novoNome) {
    lista.push(novoNome)
    console.log(lista);
}

function listarFor() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com FOR o índice " + contador + " = " + lista[contador]);
    }
    console.log("============");
    for (const item of lista) {
        console.log("Repetindo com FOR inteligente, sem contar o índice " + item);
    }
    console.log("============");
    lista.forEach(item => {
        console.log("Repetindo com ForEach sem contar índice " + item);
    });
}
