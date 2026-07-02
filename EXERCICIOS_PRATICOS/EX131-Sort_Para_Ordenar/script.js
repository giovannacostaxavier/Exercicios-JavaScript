/*DADO O ARRAY ["KIWI", "FIGO", "MELANCIA", "PERA", "MARACUJÁ"], USA SORT PARA ORDENAR ALFABETICAMENTE, DEPOIS USA FIND PARA ENCONTRAR A PRIMEIRA FRUTA COM MAIS DE 4 LETRAS, E POR FIM USA EVERY PARA VERIFICAR SE TODAS TÊM PELO MENOS 4 LETRAS. IMPRIME OS 3 RESULTADOS.*/

let frutas = ["KIWI", "FIGO", "MELANCIA", "PERA", "MARACUJÁ"]

frutas.sort()

console.log(frutas);

let primeira = frutas.find((el)=>{
    return el.length > 4
})

console.log(primeira);

let peloMenos4 = frutas.every((el)=>{
    return el.length >= 4
})

console.log(peloMenos4);