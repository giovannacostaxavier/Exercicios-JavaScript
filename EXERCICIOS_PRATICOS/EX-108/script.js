/*DADA A STRING " OLÁ, MUNDO! ", REMOVA OS ESPAÇOS, CAPITALIZE A PRIMEIRA LETRA E EXIBA O RESULTADO E SEU TAMANHO — TUDO SEM CRIAR MAIS DE UMA VARIÁVEL AUXILIAR.*/

let frase = ' olá, mundo!'.trim()
let novaFrase = frase.slice(0,1).toUpperCase() + frase.slice(1)

console.log(novaFrase);
console.log(novaFrase.length);
