//IMPRIMIR OS NÚMEROS ÍMPARES ENTRE 1 E 20 USANDO WHILE

const prompt = require('prompt-sync')(); 

let i=1

while (i<=20){
    if (i%2==1){
        console.log(i);
    }
    i++
}