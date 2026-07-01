//PEDIR A IDADE DO USUÁRIO E DIZER SE ELE É MAIOR OU MENOR DE IDADE

const prompt = require('prompt-sync')(); 

let idade = parseInt(prompt("Digite a sua idade: "));

while (isNaN(idade) || idade <= 0) {
    idade = parseInt(prompt("Idade inválida. Digite novamente sua idade: "));
}

if (idade >= 18){
    console.log(`Você tem ${idade} anos e é MAIOR DE IDADE`);
} else {
    console.log(`Você tem ${idade} anos e é MENOR DE IDADE`);
}