// console.log("Hello World"); // O Console aceita parametros para exibir em LOG
// console.log("Ciro " + 33); // É possível concatenar textos e variáveis igual ao JAVA
// console.log("Daniel", 33); // O console aceita infinitos parametros, basta separar por VÍRGULA

// let nome = "Ciro"; // LET cria uma variável com escopo limitado
// var sobrenome = "Ugalde"; // VAR cria uma variável que continua existindo mesmo depois do escopo

// console.log(nome);
// console.log("Meu nome é " + nome);
// console.log("Meu nome é", nome);
// console.log('Meu nome é ' + nome + ' mas me chamam também de \"Ugalde\"');
// console.log(`Meu nome é ${nome}`);
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = "";
// console.log("No momento nome é do tipo " + typeof (nome));

// let idade = 33;
// let altura = 1.80;
// console.log(`A variável idade é do tipo ${typeof (idade)} e a variável altura é do tipo ${typeof (altura)}`);

// // let mensagem = prompt("No que você está pensando, hein hein?")
// // let interromper = prompt("Estou interrompendo alguma coisa?")
// // console.log("Você está pensando em " + mensagem);
// // console.log("A informação capturada é do tipo " + typeof(mensagem));

// console.log("Os operadores aritmeticos são os mesmos do JAVA +,-,*,/,%");
// console.log("Somando " + (1 + 2));
// console.log("perdendo dinheiro " + (3 - 1));
// console.log("multiplicando " + (4 * 5));
// console.log("dividindo " + (10 / 2));

// if (idade < 18) {
//     console.log("é menor de idade");

// } else {
//     console.log("é maior de idade");
// }

// if (altura < 1.5) {
//     console.log("baixinho");
// } else if (altura < 1.7) {
//     console.log("mais ou menos");

// } else if (altura < 1.9) {
//     console.log("tu é grande hein bixoo");
// } else {
//     console.log("Giganton");
// }

// let resposta = (altura < 2 ? "nível Aragorn" : "nível Gandalf");

// switch (idade) {
//     case 1: 
//     console.log("um aninho");
//         break;

//     case 2:
//         console.log("dois aninhos");
//         break;

//     default:
//         console.log("chega!!");
//         break;
// }




let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let cidade = prompt("Qual a sua cidade?");

console.log("VAMOOOS ARRIIBAAA!!!");

console.log(`Faaaalaa ${nome}, você tem ${idade} anos, é isso mesmo? Ahhh! Você mora em ${cidade}.`);

console.log("");

console.log("As aulas de matemática do ensino fundamental, serviram para alguma coisa? Vamos ver!");

console.log(`153+74=${153 + 74}, 49-17=${49 - 17},
 26*81=${26 * 81}, 178/22=${88 / 22}`);
