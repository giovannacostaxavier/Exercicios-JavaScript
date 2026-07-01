//PEÇA AO USUÁRIO (USE UMA VARIÁVEL DIRETAMENTE NO CÓDIGO) UM NOME COM ESPAÇOS EXTRAS NAS BORDAS, EX: "  ANA LIMA  ". EXIBA O NOME COM A PRIMEIRA LETRA MAIÚSCULA E SEM ESPAÇOS.

let nome = ' ana lima '
let n = nome.trim()

console.log(n.slice(0,1).toUpperCase() + n.slice(1).toLocaleLowerCase());