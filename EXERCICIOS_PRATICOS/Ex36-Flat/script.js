/*DADO O ARRAY [1, [2, 3], [4, [5, 6]]], USA FLAT PARA ACHATAR UM NÍVEL E DEPOIS FLAT(INFINITY) PARA ACHATAR TUDO. IMPRIME OS DOIS RESULTADOS.*/

let arr = [1, [2, 3], [4, [5, 6]]]

let nivel1 = arr.flat()

console.log(nivel1);

let tudo = arr.flat(Infinity)

console.log(tudo);