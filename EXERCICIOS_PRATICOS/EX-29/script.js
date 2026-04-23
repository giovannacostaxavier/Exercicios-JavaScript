//SOMA DE NÚMEROS ATÉ DIGITAR 0

const prompt = require('prompt-sync')();

let soma = 0;
let numero;

while (true) {
  numero = parseFloat(prompt("Digite um número (0 para parar):"));
  
  if (numero === 0) break;
  
  soma += numero;
}

console.log("Soma total:", soma);