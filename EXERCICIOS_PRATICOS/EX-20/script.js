//FUNÇÃO QUE RETORNA VERDADEIRO SE NÚMERO FOR PAR

const prompt = require('prompt-sync')();


function isNum(num){
    return num%2==0
}

const numero=parseInt(prompt(`Digite um número: `))
console.log(isNum(numero));



