const entrada = require("readline-sync");

let nome = entrada.question("Digite seu nome: ");
let horas = Number(entrada.question("Horas de treinamento concluidas: "));

if (nome.trim() === ""){
    console.log("Acesso negado: nome nao informado.");
} else if(horas < 4){
    console.log("Acesso negado: treinamento insuficiente");
}
else{
    console.log("Acesso liberado! Bem vindo, " + nome + "!!");
}