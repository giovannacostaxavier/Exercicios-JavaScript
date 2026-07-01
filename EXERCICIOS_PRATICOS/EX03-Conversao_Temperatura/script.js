//CONVERTER UMA TEMPERATURA DE FAHRENHEIT PARA CELSIUS

const prompt = require('prompt-sync')(); 

let f= parseInt(prompt("Digite a temperatura em FAHRENHEIT: "))

let c= (f - 32)/1.8

console.log(`A temperatura em CELSIUS é de: ${c.toFixed(2)}`);
