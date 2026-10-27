function calcularDistancia(velocidade, tempo) { 
let distancia = velocidade * tempo; 
return distancia;
} 

let resultado = calcularDistancia (60, 2);


console.log(`Distancia percorrida: ${resultado} km`);


// a) variavel distancia foi declarada dentro da função
// e esta sendo utilizada fora dela

//b) porque a variavel foi declarada com let dentro da função
//so pode ser acessada dentro do bloco declarada

