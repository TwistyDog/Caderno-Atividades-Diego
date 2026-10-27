const readline = require("readline-sync");

let tarefas = [
    "Estudar JavaScript",
    "Praticar arrays",
    "Revisar funções",
    "Estudar objetos",
    "Resolver exercícios"
];

// 1. Apresentar as tarefas cadastradas
console.log("===== LISTA DE TAREFAS =====");

for (let i = 0; i < tarefas.length; i++) {
    console.log(i + " - " + tarefas[i]);
}

// 2. Solicitar o índice da tarefa
let indice = Number(readline.question("Digite o indice da tarefa que deseja remover: "));

// 3. Verificar se o índice é válido
if (indice >= 0 && indice < tarefas.length && Number.isInteger(indice)) {

    // 4. Remover a tarefa selecionada
    let tarefaRemovida = tarefas[indice];
    tarefas.splice(indice, 1);

    console.log("Tarefa removida: " + tarefaRemovida);

} else {
    console.log("Indice invalido! Nenhuma tarefa foi removida.");
}

// 5. Apresentar o array atualizado
console.log("\n===== LISTA ATUALIZADA =====");

for (let i = 0; i < tarefas.length; i++) {
    console.log(i + " - " + tarefas[i]);
}