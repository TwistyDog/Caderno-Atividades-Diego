const readline = require("readline-sync");

let computadorLigado = readline.question("O computador esta ligado? (s/n): ").toLocaleLowerCase();
let redeFuncionando = readline.question("A rede esta funcionando? (s/n): ").toLocaleLowerCase();
let acessaSistema = readline.question("Consegue acessar o sistema? (s/n): ").toLocaleLowerCase();

if (computadorLigado === "n") {
    console.log("Verifique a alimentacao eletrica do computador.");
} else if (computadorLigado === "s" && redeFuncionando === "n") {
    console.log("Verifique a conexao de rede.");
} else if (computadorLigado === "s" && redeFuncionando === "s" && acessaSistema === "n") {
    console.log("Tente reiniciar o aplicativo.");
} else if (computadorLigado === "s" && redeFuncionando === "s" && acessaSistema === "s") {
    console.log("Tudo funcionando normalmente!");
} else {
    console.log("Resposta invalida. Digite apenas s ou n.");
}