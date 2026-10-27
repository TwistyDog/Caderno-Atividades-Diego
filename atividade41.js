const readline = require("readline-sync");

// Arrays das salas e suas reservas
let salas = ["Sala A", "Sala B", "Sala C", "Sala D"];
let reservadas = [false, true, false, false];

let opcao = 0;

// Menu principal
while (opcao !== 5) {
    console.log("\n===== SISTEMA DE RESERVA DE SALAS =====");
    console.log("1 - Consultar salas");
    console.log("2 - Reservar uma sala");
    console.log("3 - Cancelar uma reserva");
    console.log("4 - Consultar salas disponíveis");
    console.log("5 - Encerrar o sistema");

    opcao = Number(readline.question("Escolha uma opcao: "));

    switch (opcao) {

        case 1:
            // Consultar todas as salas
            console.log("\n===== SALAS =====");

            for (let i = 0; i < salas.length; i++) {
                if (reservadas[i] === true) {
                    console.log(`${i + 1} - ${salas[i]}: Reservada`);
                } else {
                    console.log(`${i + 1} - ${salas[i]}: Disponível`);
                }
            }
            break;

        case 2:
            // Reservar uma sala
            console.log("\n===== RESERVAR SALA =====");

            for (let i = 0; i < salas.length; i++) {
                console.log(`${i + 1} - ${salas[i]}`);
            }

            let escolhaReserva = Number(
                readline.question("Digite o numero da sala: ")
            );

            if (escolhaReserva < 1 || escolhaReserva > salas.length ||
                !Number.isInteger(escolhaReserva)) {
                console.log("Posicao invalida!");
            } else if (reservadas[escolhaReserva - 1] === true) {
                console.log("Essa sala ja esta reservada!");
            } else {
                reservadas[escolhaReserva - 1] = true;
                console.log(`${salas[escolhaReserva - 1]} reservada com sucesso!`);
            }
            break;

        case 3:
            // Cancelar uma reserva
            console.log("\n===== CANCELAR RESERVA =====");

            for (let i = 0; i < salas.length; i++) {
                console.log(`${i + 1} - ${salas[i]}`);
            }

            let escolhaCancelamento = Number(
                readline.question("Digite o numero da sala: ")
            );

            if (escolhaCancelamento < 1 ||
                escolhaCancelamento > salas.length ||
                !Number.isInteger(escolhaCancelamento)) {
                console.log("Posicao invalida!");
            } else if (reservadas[escolhaCancelamento - 1] === false) {
                console.log("Essa sala nao possui reserva!");
            } else {
                reservadas[escolhaCancelamento - 1] = false;
                console.log(`Reserva da ${salas[escolhaCancelamento - 1]} cancelada com sucesso!`);
            }
            break;

        case 4:
            // Contar salas disponíveis
            let quantidadeDisponiveis = 0;

            for (let i = 0; i < reservadas.length; i++) {
                if (reservadas[i] === false) {
                    quantidadeDisponiveis++;
                }
            }

            console.log(`\nQuantidade de salas disponíveis: ${quantidadeDisponiveis}`);
            break;

        case 5:
            console.log("Sistema encerrado. Até mais!");
            break;

        default:
            console.log("Opcao invalida! Escolha uma opcao de 1 a 5.");
            break;
    }
}