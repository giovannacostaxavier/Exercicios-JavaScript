//VERIFICAR SE O NÚMERO INSERIDO PELO USUARIO É IMPAR OU PAR

const prompt = require('prompt-sync')(); 

let num1= parseInt(prompt("Digite um número: "))

if(num1%2==0){
    console.log(`O número ${num1} é PAR`);  
}else{
    console.log(`O número ${num1} é IMPAR`);
}

