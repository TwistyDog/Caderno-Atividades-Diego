const idade = 16;

if (idade < 0){
    console.log("Idade invalida!!");
}else if (idade < 13){
    console.log("Categoria infantil");
}else if (idade <= 17){
    console.log("Categoria juvenil");
}else{
    console.log("Categoria adulta");
}