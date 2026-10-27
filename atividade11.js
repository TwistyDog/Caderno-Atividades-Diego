const readline = require("readline-sync");

let compra = Number(
    readline.question("Digite o valor da compra: R$ ")
);

let frete;
let total;


if (compra < 0){
    console.log("Valor da compra invalido");
}
else if (compra < 100){
    frete = 20;
    total = compra + frete

    console.log("Frete: R$ " + frete.toFixed(2));
    console.log("Valor total: R$ " + total.toFixed(2));
} else if (compra < 250){
    frete = 12;
    total = compra + frete;

    console.log("Frete: R$ " + frete.toFixed(2));
    console.log("Valor total: R$ " + total.toFixed(2));
}else{
    frete = 0;
    total = compra + frete;

    console.log("Frete gratis");
    console.log("Frete: R$ " + frete.toFixed(2));
    console.log("Valor total: R$ " + total.toFixed(2));
}