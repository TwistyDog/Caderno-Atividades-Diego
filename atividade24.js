let equipamentos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Mouse",
    "Headset",
    "Mouse",
    "Teclado"
];

let mouse = 0;
let teclado = 0;
let monitor = 0;

for (let i = 0; i < equipamentos.length; i++) {
    if (equipamentos[i] === "Mouse") {
        mouse++;
    } else if (equipamentos[i] === "Teclado") {
        teclado++;
    } else if (equipamentos[i] === "Monitor") {
        monitor++;
    }
}

console.log("Mouse: " + mouse);
console.log("Teclado: " + teclado);
console.log("Monitor: " + monitor);