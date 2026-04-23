//FUNÇÃO QUE RECEBE IDADE E RETORNA MAIOR/MENOR DE IDADE
const prompt = require('prompt-sync')(); 

let idadeUsuario=parseInt(prompt("Digite sua idade: "));

function mIdade(idade) {
    if(isNaN(idade)|| idade < 0){
        console.log("Idade inválida");
    }else if(idade >= 18){
        console.log("Maior de idade");
        
    }else{
        console.log("Menor de idade");
        
    }
}

mIdade(idadeUsuario);