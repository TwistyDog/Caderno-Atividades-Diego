const readline = require("readline-sync");

// 1 - Funcao para exibir mensagem de boas vindas

function boasVindas(){
    let nome = readline.question("Digite seu nome: ");

    return `Bem vindo ${nome}`;
}

// 2 - Funcao para converter funcao de minutos para segundos
function converterSegundos(minutos){
    return minutos * 60;
}

// 3 - Funcao para verificar se o numero é par

function verificarPar(numero){
    return numero % 2 === 0;
}

// 4 - Função principal do menu

function menu(){
    let opcao = 0;

    while (opcao !== 4){
        console.log("\n============ ORGANIZAÇAO PESSOAL ==========");
        console.log("1 - Mensagem de boas vindas");
        console.log("2 - Converter minutos em segundos");
        console.log("3 - Verificar se um número é par");
        console.log("4 - Encerrar aplicação");

        opcao = Number(readline.question("Escolha uma opcao"));

        switch (opcao){
            case 1:
                console.log(boasVindas);
                break;
            case 2:
                let minutos = Number(readline.question("Digite os minutos: "));
                let segundos = converterSegundos(minutos);

                console.log(`${minutos} minutos equivalem a ${segundos} segundos`);
                break;
            case 3:
                let numero = Number(readline.question("Digite um numero"));

                if (verificarPar(numero)){
                    console.log(`${numero} e um numero par`)
                } else{
                    console.log(`${numero} e um numero impar`);
                }

                break;
            case 4:
                console.log("Aplicacao encerrada");
                break;
            
                default:
                    console.log("Opcao Invalida");
                    break;
                
        }
    }
}

menu();