// criado o objeto livro
let livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1937,
    disponivel: true
};

// a) Apresentar o título
console.log("Título:", livro.titulo);

// b) Apresentar o nome do autor
console.log("Autor:", livro.autor);

// c) Alterar o ano de publicação
livro.anoPublicacao = 1938;

// d) Alterar a disponibilidade
livro.disponivel = false;

// e) Apresentar uma mensagem com as informações atualizadas
console.log(
    `O livro "${livro.titulo}", escrito por ${livro.autor}, está ${livro.disponivel ? "disponível" : "indisponível"} para empréstimo.`
);


// Criar o objeto: livro armazena as quatro propriedades: título, autor, ano de publicação e disponibilidade.
// Acessar propriedades: livro.titulo e livro.autor obtêm os valores usando a notação de ponto.
// Modificar propriedades: livro.anoPublicacao = 1938 e livro.disponivel = false atualizam os valores.
// Verificar a disponibilidade: livro.disponivel ? "disponível" : "indisponível" utiliza o operador ternário para escolher a mensagem conforme o valor booleano.
//