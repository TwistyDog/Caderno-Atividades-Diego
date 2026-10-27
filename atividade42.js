const readline = require("readline-sync");

let livros = [
    "O Hobbit",
    "Dom Casmurro",
    "A Revolucao dos Bichos",
    "O Pequeno Principe"
];

let emprestados = [false, true, false, false];

let opcao = 0;

while (opcao !== 6){
    console.log("\n========== SISTEMA DE BIBLIOTECA ========")
    console.log("1 - Listar todos os livros");
    console.log("2 - Pesquisar livro")
    console.log("3 - Realizar um emprestimo");
    console.log("4 - Registrar um devolucao");
    console.log("5 - Consultar livros disponiveis");
    console.log("6 - Encerrar o sistema");

    opcao = Number(readline.question("Escolha um opcao: "));

    switch (opcao){
        case 1:
            console.log("\n=========== CATALOGO DE LIVROS ============");

            for (let i = 0; i < livros.length; i++){
                if (emprestados[i] === true){
                    console.log(`${i + 1} - ${livros[i]} | Emprestado`);
                }else{
                    console.log(`${i + 1} - ${livros[i]} | Disponivel`)
                }
            }
        break;

        case 2:
            let titPesquisa = readline.question("Escreva o titulo do livro: ");

            let encotrado = false;

            for (let i = 0; i < livros.length; i ++){
                if (livros[i].toLocaleLowerCase() === titPesquisa.trim().toLocaleLowerCase()){
                    encotrado = true;

                    if (emprestados[i] === true){
                        console.log(`${livros[i]} esta emprestado.`);
                    } else{
                        console.log(`${livros[i]} esta disponivel`);
                    }

                    break;
                }
            }

        if (encotrado === false){
            console.log("Livro nao encontrado no catalogo");
        }
        break;

        case 3:
            let titEmprestimo = readline.question(
                "Digite o livro desejado: "
            );

            let livroEmpresEncontrado = false;

            for (let i = 0; i < livros.length; i++){
                if (livros[i].toLocaleLowerCase() === titEmprestimo.trim().toLocaleLowerCase())
                    livroEmpresEncontrado = true;

                if (emprestados[i] === true){
                    console.log("Este livro ja foi emprestado");
                } else{
                    emprestados[i] = true;
                    console.log(`Emprestimo de ${livros[i]} com sucesso`);
                }

                break;
            }
        
        case 4:
            let livroDevo = readline.question(
                "Informe o livro pra devolucao: "
            );

            let livroDevoEncontrado = false;

            for (let i = 0; i < livros.length; i++){
                if (livros[i].toLocaleLowerCase() === livroDevo.trim().toLocaleLowerCase()){
                    
                }
            }
    }
}