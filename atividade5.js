const entrada = require("readline-sync");

let totalSegundos = Number(entrada.question("Digite a quantidade em segundos: "));

let horas = Math.floor(totalSegundos / 3600);
let minutos = Math.floor((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;


console.log("\n=============== TEMPO CONVERTIDO ==============");
console.log("Horas: " + horas);
console.log("Minutos" + minutos);
console.log("Segundos" + segundos);