//PEÇA O NOME DO USUÁRIO E MOSTRE NO CONSOLE “OLÁ, [NOME]!”

const prompt = require('prompt-sync')();

let nome= prompt(`Digite seu nome: `)

console.log(`Olá ${nome}!`);
