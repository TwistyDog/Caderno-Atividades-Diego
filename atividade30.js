function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function quilometrosParaMetros(quilometros) {
    return quilometros * 1000;
}

function minutosParaSegundos(minutos) {
    return minutos * 60;
}

// Celsius para Fahrenheit
console.log(`20 °C = ${celsiusParaFahrenheit(20)} °F`);
console.log(`30 °C = ${celsiusParaFahrenheit(30)} °F`);
console.log(`100 °C = ${celsiusParaFahrenheit(100)} °F`);

// Quilômetros para metros
console.log(`2 km = ${quilometrosParaMetros(2)} metros`);
console.log(`5 km = ${quilometrosParaMetros(5)} metros`);
console.log(`10 km = ${quilometrosParaMetros(10)} metros`);

// Minutos para segundos
console.log(`1 minuto = ${minutosParaSegundos(1)} segundos`);
console.log(`5 minutos = ${minutosParaSegundos(5)} segundos`);
console.log(`10 minutos = ${minutosParaSegundos(10)} segundos`);