//PEÇA DOIS NÚMEROS E INFORME SE SÃO IGUAIS OU DIFERENTES

const prompt = require('prompt-sync')();

let num1=parseFloat(prompt(`Digite um número: `))
let num2=parseFloat(prompt(`Digite outro número: `))

if(num1===num2){
    console.log(`${num1} e ${num2} são iguais`);
    
}else{
    console.log(`${num1} e ${num2} são diferentes`);
}