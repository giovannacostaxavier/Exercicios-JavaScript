//PEDIR DOIS NÚMEROS E MOSTRAR O MAIOR

const prompt = require('prompt-sync')(); 

let num1= parseInt(prompt(`Digite um número: `))
let num2= parseInt(prompt(`Digite outro número: `))
let maior
if (num1>num2){
     maior=num1
}else{
     maior=num2
}
console.log(`Entre ${num1} e ${num2} o maior valor digitado é o ${maior}`);
