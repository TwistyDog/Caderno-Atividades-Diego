let computador = {
    marca: "Lenovo",
    memoriaRAM: 8,
    armazenamento: 256,
    ligado: false
};

// apresentar a marca

console.log(computador.marca);

// alteracao da memoria
computador.memoriaRAM = 16;

// ligar computador

computador.ligado = true;


// Apresente todas as informações.
console.log(
`Marca: ${computador.marca}
RAM: ${computador.memoriaRAM} GB
Armazenamento: ${computador.armazenamento} GB
Ligado: ${computador.ligado}`
);