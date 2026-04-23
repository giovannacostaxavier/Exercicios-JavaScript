//SOMA DE NÚMEROS ATÉ DIGITAR 0 (LOOP + CONDIÇÃO DE PARADA)

const prompt = require('prompt-sync')(); 
let soma = 0
let num;

do{
    num=parseInt(prompt("Digite um número: "));
    soma += num
   
}while(num !== 0);
console.log("Soma acumulada:", soma);


