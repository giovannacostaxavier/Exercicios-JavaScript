/*Dado o número '7':
Formata ele pra aparecer como '007' usando padStart
Repete a string 'estudo ' 4 vezes e loga*/

let numero = '7'
let palavra = 'estudo '
let novo = numero.padStart(3,'0')
console.log(novo);
console.log(palavra.repeat(4));


