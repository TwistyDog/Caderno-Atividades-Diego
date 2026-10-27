10 > 5 | true;
8 === "8" | false;
8 === "8" | false 
!(5 > 9) | true
(10 > 5) && (3 < 8) | true
(4 > 10) || (7 === 7) | true
(6 !== 6) || (2 <= 2) | true
(9 > 3) && !(4 === "4") | false

// && (E): retorno de quando as duas condições são verdadeiras
// se um das condições for falsa, retornara como falsa...

// || (OU) retorno de uma condição quando apenas uma seja verdadeira, so retorna como falso se
// ambas as condições forem falsas.