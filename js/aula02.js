procedimento(); // Chamada
//Essa função está sendo chamada e não precisa de argumentos
bemVindo("Ciro");
bemVindo(true);
bemVindo(33);
bemVindo(bemVindo);
bemVindo(1.35);

login("ciro", 1234);
maiorDeIdade(15);

let resultado = maiorDeIdade(16);
console.log(resultado);

console.log(maiorDeIdade(18));

let concatenado = maiorDeIdade(10);
console.log(concatenado);

console.log(calcularMedia(8, 7, 10));

console.log(verificarSituacao(6));

console.log(
    verificarSituacao(
        calcularMedia(8, 7, 10)
    )
);

function procedimento() { // Declaração

    console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parametros para deixar dinâmico.");

    console.warn("Essa função também não retorna nada.")

}

procedimento(); // Chamada

function bemVindo(nome) {

    console.log(typeof (nome));
    console.warn("Bem vindo " + nome); //Dessa forma é concatenada 
    console.warn(`Bem vindo ${nome}`); //Dessa forma é utilizando ``
}

function login(userName, password) {
    console.error("O usuário " + userName + " cuja senha é " + password + " está inadimplente, não pode conectar");
}

function maiorDeIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"

    } else {
        return "Maior de idade"
    }
}

function calcularMedia(nota01, nota02, nota03) {
    return (nota01 + nota02 + nota03) / 3
}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}
console.log("Somando", somar(4, 4));
console.log("Subtraindo", subtrair(7, 3));
console.log("Multiplicando", multiplicar(2, 3));
console.log("Dividindo", dividir(9, 3));

