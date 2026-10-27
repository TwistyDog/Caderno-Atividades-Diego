function calcularAreaRetangulo(largura, altura) {
    let area = largura * altura;
    return area;
}

function calcularPerimetroRetangulo(largura, altura) {
    let perimetro = 2 * (largura + altura);
    return perimetro;
}

let areaCalculada = calcularAreaRetangulo(8, 5);
let perimetroCalculado = calcularPerimetroRetangulo(8, 5);

console.log(`Área: ${areaCalculada}`);
console.log(`Perímetro: ${perimetroCalculado}`);


// parâmetros são os nomes definidos na função; argumentos são os valores passados na chamada