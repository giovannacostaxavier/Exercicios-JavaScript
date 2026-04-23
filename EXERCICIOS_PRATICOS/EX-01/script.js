// PEDIR AO UTILIZADOR 2 NÚMEROS, FAZER A SOMA E MOSTRAR NO TERMINAL 

const prompt = require('prompt-sync')(); 

let num1= parseInt(prompt("Digite um número: "))
let num2= parseInt(prompt("Digite outro número: "))

let soma= num1+num2
console.log(`A soma de ${num1} e ${num2} é igual a : ${soma}`);
