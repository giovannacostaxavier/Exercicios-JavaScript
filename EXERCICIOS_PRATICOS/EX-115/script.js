/*Dada a string 'eu amo estudar javascript todo dia':
Verifica se contém a palavra 'javascript'
Pega só a palavra 'estudar' usando slice (descubra a posição com indexOf)
Loga os dois resultados*/

let frase = 'eu amo estudar javascript todo dia'
console.log(frase.includes('javascript'));

let inicio = frase.indexOf('estudar')
let fim = inicio + 'estudar'.length
palavra = frase.slice(inicio,fim)
console.log(palavra);



