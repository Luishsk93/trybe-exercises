// Parte II - Funções

// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(palavra){
    let palavraInvertida = "";
    for (i = palavra.length - 1; i >= 0; i -= 1){
        palavraInvertida = palavraInvertida + palavra[i];
    }

    if (palavra == palavraInvertida){
        return true;
    } else{
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

console.log('\n');

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.