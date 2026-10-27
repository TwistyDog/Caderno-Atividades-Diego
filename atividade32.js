function validarNome(nome){
    nome = nome.trim();

    if (nome.length >= 3){
        return true;
    } else{
        return false;
    }
}

let nome1 = "Ana";
let nome2 = "Joao";
let nome3 = "Li";
let nome4 = "";

if (validarNome(nome1)){
    console.log(`${nome1} - Cadastro pode continuar`);
}else{
    console.log(`${nome1} - Cadastro invalido`);
}

if (validarNome(nome2)){
    console.log(`${nome2} - Cadastro pode continuar`);
} else{
    console.log(`${nome2} - Cadastro invalido`);
}

if (validarNome(nome3)){
    console.log(`${nome3} - Cadastro pode continuar`);
} else{
    console.log(`${nome3} - Cadastro invalido`);
}

if (validarNome(nome4)){
    console.log(`${nome4} - Cadastro pode continuar`);
} else{
    console.log(`${nome4} - Cadastro invalido`);
}