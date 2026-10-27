for (let i = 1; i <= 5; i++){
    let linha = "";

    for (let j = 1; j <= i; j++){
        linha += "*";
    }

    console.log(linha);
}


for (let i = 5; i >= 1; i--){
    let linha = "";

    for (let j = 1; j <= i; j++){
        linha += "*";
    }

    console.log(linha);
}

for (let i = 1; i <= 5; i++){
    let linha = "";

    for (let j = 1; j <= i; j++){
        linha += i;
    }

    console.log(linha);
}