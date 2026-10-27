const readline = require("readline-sync");

let distancia = 0;
let totalDistancia = 0;
let quantidadeTrechos = 0;
let maiorDistancia = 0;

while (true) {
    distancia = Number(readline.question("Digite a distancia percorrida em km (0 para encerrar): "));

    if (distancia === 0) {
        break;
    }

    if (distancia < 0) {
        console.log("Distancia invalida! Digite um valor positivo.");
        continue;
    }

    totalDistancia = totalDistancia + distancia;
    quantidadeTrechos++;

    if (distancia > maiorDistancia) {
        maiorDistancia = distancia;
    }
}

console.log("\n========== RESUMO DA VIAGEM ==========");
console.log("Quantidade de trechos: " + quantidadeTrechos);
console.log("Distancia total: " + totalDistancia + " km");
console.log("Maior distancia: " + maiorDistancia + " km");