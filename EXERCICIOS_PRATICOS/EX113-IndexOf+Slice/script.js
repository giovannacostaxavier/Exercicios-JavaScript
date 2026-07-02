/*DADA A STRING "USUARIO@EMAIL.COM", EXTRAIA SEPARADAMENTE O NOME DO USUÁRIO (ANTES DO @) E O DOMÍNIO (DEPOIS DO @). EXIBA: "USUÁRIO: USUARIO | DOMÍNIO: EMAIL.COM".*/

let email = 'usuario@gmail.com'
let arroba = email.indexOf('@')
let usuario = email.slice(0,arroba)
let dominio = email.slice(arroba+1)
console.log(`Usuário: ${usuario} | Domínio: ${dominio}`);
