const readline = require("readline-sync");

let jogos = [
    "Minecraft",
    "Terraria",
    "Stardew Valley",
    "Hollow Knight",
    "Celeste"
];

let nomeJogo = readline.question("Digite o nome do jogo: ");
let encontrado = false;

for (let i = 0; i < jogos.length; i++) {
    if (nomeJogo === jogos[i]) {
        console.log("Jogo encontrado!");
        console.log("Posicao na lista: " + (i + 1));
        encontrado = true;
        break;
    }
}

if (encontrado === false) {
    console.log("Jogo nao encontrado!");
}