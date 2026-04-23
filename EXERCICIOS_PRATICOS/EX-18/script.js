//DIGITAR 5 NÚMEROS E MOSTRAR A SOMA DELES
const prompt = require('prompt-sync')();

let soma=0
for(let i=1;i<=5;i++){
    let numeros=parseInt(prompt(`Digite o ${i}º número: `))
    soma +=numeros
}
console.log(`A soma dos números digitados é ${soma}`);
