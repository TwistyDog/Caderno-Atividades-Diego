let numeros = [12, 7, 24, 9, 31, 18, 5, 42];

// 1 - Calcular a soma dos numeros

function calcularSoma(numeros){
    let soma = 0;

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }

    return soma;
}

// 2 - Contar os numeros pares

function contarPares(numeros){
    let quantidade = 0;

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            quantidade++;
        }
    }

    return quantidade;
}

// 3 - Encontrar o maior numero

function encontrarMaior(numeros){
    let maior = numeros[0];

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > maior){
            maior = numeros[i];
        }
    }

    return maior;
}

// 4 - Buscar um numero no array

function buscarNumero(numeros, valor){
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] === valor){
            return true;
        }
    }

    return false;
}


// Testando as funções
console.log("Soma dos números:", calcularSoma(numeros));
console.log("Quantidade de números pares:", contarPares(numeros));
console.log("Maior número:", encontrarMaior(numeros));
console.log("O número 18 existe?", buscarNumero(numeros, 18));
console.log("O número 50 existe?", buscarNumero(numeros, 50));