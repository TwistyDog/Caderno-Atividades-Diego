const readline = require("readline-sync");

let opcao = Number(
    readline.question("Escolha uma opcao: ")
);

switch (opcao){
    case 1:
        console.log("Reproduzir musica");
        break;
    
    case 2:
        console.log("Pausar reprodução");
        break;
    
    case 3:
        console.log("Avanca faixa");
        break;
    
    case 4:
        console.log("Encerra aplicacao");
        break;
    
    default:
        console.log("Opcao invalida");
}