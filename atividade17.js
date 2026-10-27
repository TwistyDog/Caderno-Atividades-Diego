for (let i = 1; i <= 5; i++){
    console.log(i);
}

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

let ii = 1;

do{
    console.log(ii);
    ii++;
}while (ii <= 5);


// for: quando sabemos quantas vezes queremos repetir algo, como apresentar os números de 1 a 5.
// while: quando queremos repetir algo enquanto uma condição for verdadeira, como solicitar uma senha até que o usuário acerte.
// do...while: quando queremos executar o código pelo menos uma vez antes de verificar a condição, como exibir um menu para o usuário.


// O código dentro do do é executado pelo menos uma vez, mesmo que a condição seja falsa na primeira verificação. 
// Depois dessa primeira execução, a condição é verificada e, se for falsa, o laço termina