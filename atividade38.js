let jogo = { 
nome: "Hollow Knight", 
genero: "Aventura", 
ano: 2017 
}; 
console.log(jogo.nome); 
jogo.genero = "Ação e aventura"; 
jogo.anoLancamento = 2020; 
console.log(jogo); 

delete jogo.anoLancamento;

console.log(jogo);

// a) não existia definicao para o parametro titulo
// c) não provoca apenas estamos alterando o ano do lancamento do jogo
