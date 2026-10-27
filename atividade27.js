const readline = require("readline-sync");

let filmes = [];
let opcao = 0;

while (opcao !== 5) {
    console.log("\n===== FILMES FAVORITOS =====");
    console.log("1. Adicionar filme");
    console.log("2. Listar filmes");
    console.log("3. Remover filme por posicao");
    console.log("4. Pesquisar filme");
    console.log("5. Encerrar programa");

    opcao = Number(readline.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            let titulo = readline.question("Digite o titulo do filme: ");

            if (titulo.trim() === "") {
                console.log("Erro: o titulo nao pode ser vazio.");
            } else {
                filmes.push(titulo);
                console.log("Filme adicionado com sucesso!");
            }
            break;

        case 2:
            if (filmes.length === 0) {
                console.log("A lista de filmes esta vazia.");
            } else {
                console.log("\n===== LISTA DE FILMES =====");

                for (let i = 0; i < filmes.length; i++) {
                    console.log((i + 1) + " - " + filmes[i]);
                }
            }
            break;

        case 3:
            if (filmes.length === 0) {
                console.log("Nao ha filmes para remover.");
            } else {
                console.log("\n===== LISTA DE FILMES =====");

                for (let i = 0; i < filmes.length; i++) {
                    console.log((i + 1) + " - " + filmes[i]);
                }

                let posicao = Number(
                    readline.question("Digite a posicao do filme que deseja remover: ")
                );

                if (
                    Number.isInteger(posicao) &&
                    posicao >= 1 &&
                    posicao <= filmes.length
                ) {
                    let removido = filmes.splice(posicao - 1, 1);
                    console.log("Filme removido: " + removido[0]);
                } else {
                    console.log("Posicao invalida!");
                }
            }
            break;

        case 4:
            if (filmes.length === 0) {
                console.log("A lista de filmes esta vazia.");
            } else {
                let pesquisa = readline.question("Digite o titulo do filme: ");
                let encontrado = false;

                for (let i = 0; i < filmes.length; i++) {
                    if (pesquisa === filmes[i]) {
                        console.log("Filme encontrado na posicao " + (i + 1) + ".");
                        encontrado = true;
                        break;
                    }
                }

                if (encontrado === false) {
                    console.log("Filme nao encontrado.");
                }
            }
            break;

        case 5:
            console.log("Programa encerrado. Ate mais!");
            break;

        default:
            console.log("Opcao invalida! Escolha de 1 a 5.");
            break;
    }

}