//PEDIR 3 NÚMEROS E MOSTRAR O MENOR

const prompt = require('prompt-sync')(); 

let num1= parseInt(prompt(`Digite um número: `))
let num2= parseInt(prompt(`Digite outro número: `))
let num3= parseInt(prompt(`Digite outro número: `))
let menor
if (num1<num2&&num1<num3){
     menor=num1
}else if(num2<num1&&num2<num3){
     menor=num2
}else{
    menor=num3
}
console.log(`Entre ${num1}, ${num2} e ${num3} o menor valor digitado é o ${menor}`);