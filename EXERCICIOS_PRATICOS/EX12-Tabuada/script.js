//PEDIR AO USUÁRIO UM NÚMERO E MOSTRE A TABUADA DESSE NÚMERO

const prompt = require('prompt-sync')(); 

let num=parseInt(prompt(`Digite um número: `))
 tab=1
for(i=1;i<=10;i++){
    tab= num*i
    console.log(`${num} X ${i} = ${tab}`);
    
}