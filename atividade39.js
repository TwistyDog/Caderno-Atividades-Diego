// personagem
let personagem = {
    nome: "Guerreiro",
    vida: 100,
    nivel: 1,
    experiencia: 0
};

// Receber dano
function receberDano(personagem, dano){
    personagem.vida -= dano;

    if (personagem.vida < 0){
        personagem.vida = 0;
    }

    if (personagem.vida === 0){
        console.log("Personagem derrotado!");
    } else{
        console.log(`Vida restante ${personagem.vida}`);
    }
    
}

// Testando diferentes quantidades de dano
receberDano(personagem, 30);
receberDano(personagem, 20);
receberDano(personagem, 60);