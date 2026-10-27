let temperaturas = [28, 31, 29, 34, 27, 33, 30];

let maior = temperaturas[0];
let menor = temperaturas[0];
let soma = 0;
let quantidadeAcima30 = 0;

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }

    soma = soma + temperaturas[i];

    if (temperaturas[i] > 30) {
        quantidadeAcima30++;
    }
}

let media = soma / temperaturas.length;

console.log("Maior temperatura: " + maior + " °C");
console.log("Menor temperatura: " + menor + " °C");
console.log("Soma das temperaturas: " + soma + " °C");
console.log("Media das temperaturas: " + media.toFixed(2) + " °C");
console.log("Temperaturas acima de 30 °C: " + quantidadeAcima30);