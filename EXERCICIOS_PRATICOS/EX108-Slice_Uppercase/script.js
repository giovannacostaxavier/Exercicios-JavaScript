/*DADA A STRING "PROGRAMAÇÃO", EXIBA-A EM MINÚSCULO E DEPOIS MOSTRE UMA VERSÃO ONDE APENAS A PRIMEIRA LETRA É MAIÚSCULA — SEM USAR NENHUMA BIBLIOTECA, SÓ MÉTODOS DE STRING.*/

let prog = 'PROGRAMAÇÃO'
let minuscula = prog.toLowerCase()

console.log(minuscula);
console.log(minuscula.slice(0, 1).toUpperCase() + minuscula.slice(1));


