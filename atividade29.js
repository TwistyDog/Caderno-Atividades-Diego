function calcularDobro(numero) {
    return numero * 2;
}

let resultado = calcularDobro(10);

function calcularTriplo(numero) {
    return numero * 3;
}

let numero = 10;

let dobro = calcularDobro(numero);
let triplo = calcularTriplo(numero);

console.log(`Número: ${numero}`);
console.log(`Dobro: ${dobro}`);
console.log(`Triplo: ${triplo}`);

// 20
// Resultado armazenado: undefined // o que iria apresentar, sem declarar o return