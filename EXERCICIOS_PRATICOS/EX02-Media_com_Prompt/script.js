//PEDIR AO UTILIZADOR DOIS NÚMEROS E CALCULAR A MÉDIA

const prompt = require('prompt-sync')(); 

let num1= parseFloat(prompt("Digite um número: "))
let num2= parseFloat(prompt("Digite outro número: "))

let media= (num1+num2)/2

console.log(`A média entre ${num1} e ${num2} é igual a : ${media}`);
