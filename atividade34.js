// 1 - Calculo cubo de um numero

const calcularCubo = (numero) => numero * numero * numero;

// 2 - Verifica se um numero é par

const verificarPar = (numero) => numero % 2 === 0;

// 3 - Cria uma mensagem de boas vindas

const criarMensagem = (nome) => `Bem vindo, ${nome} !!`;


// Chamadas das funções
console.log(calcularCubo(3));
console.log(verificarPar(8));
console.log(criarMensagem("Xavier"));


// a) - calcularCubo(3): calcula 3 × 3 × 3, retornando 27.
//verificarPar(8): verifica se 8 é divisível por 2, retornando true.
//criarMensagem("Xavier"): retorna a mensagem Bem-vindo, Xavier!.

// b) forma reduzida de criar a função selecionada 

// c) utiliza a palavra Fuction de forma tradicional e arrow fuction usa o =>