let soma = 0;
let quantidade = 0;

for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        soma = soma + i;
        quantidade++;
    }
}

console.log("Soma dos numeros pares: " + soma);
console.log("Quantidade de numeros pares: " + quantidade);