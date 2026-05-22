/*CRIE UMA VARIÁVEL COM O NOME DE UM PRODUTO E OUTRA COM O PREÇO (NÚMERO). USANDO TEMPLATE LITERAL, EXIBA: "O PRODUTO [NOME] CUSTA R$ [PREÇO]." — GARANTA QUE O PREÇO APAREÇA COM DUAS CASAS DECIMAIS.*/

let produto = 'Televisão'
let preco = 1500

console.log(`O produto ${produto} custa R$${preco.toFixed(2)}.`);
