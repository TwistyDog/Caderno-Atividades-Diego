const readline = require("readline-sync");

let equip = {
    nome: "Notebook",
    marca: "Lenovo",
    preco: 2500,
    qtdsEstoque: 10,
    funcionando: true
};

equip.qtdsEstoque = Number(readline.question("Digite a nova quantidade em estoque: "));

let situacao = readline.question("O equipamento esta funcionando: (sim/nao): ");

if (situacao.toLocaleLowerCase() === "sim"){
    equip.funcionando = true;
} else{
    equip.funcionando = false;
}


// Apresentar todas as informações
console.log("\n===== INFORMAÇÕES DO EQUIPAMENTO =====");
console.log(`Nome: ${equip.nome}`);
console.log(`Marca: ${equip.marca}`);
console.log(`Preço: R$ ${equip.preco.toFixed(2)}`);
console.log(`Quantidade em estoque: ${equip.quantidadeEstoque}`);
console.log(`Funcionando: ${equip.funcionando ? "Sim" : "Não"}`);

