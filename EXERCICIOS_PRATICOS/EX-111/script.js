/*VOCÊ TEM O TEXTO "PREÇO: R$ 250,00 REAIS". VERIFIQUE SE A STRING CONTÉM "R$" E EXTRAIA APENAS O VALOR NUMÉRICO "250,00" USANDO OS MÉTODOS QUE ACHAR MELHOR.*/

let frase = 'Preço: R$ 250,00 reais'
let posicao = frase.indexOf('R$')
let numero = frase.slice(posicao + 3, posicao + 9)

console.log(frase.includes('R$'));
console.log(numero);



