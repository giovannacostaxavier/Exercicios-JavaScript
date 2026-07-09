/*DADO O ARRAY ["BANANA", "MAÇÃ", "LARANJA", "UVA"], USA FIND PARA ENCONTRAR A PRIMEIRA FRUTA COM MAIS DE 5 LETRAS.*/

let arrFrutas = ["BANANA", "MAÇÃ", "LARANJA", "UVA"]

let fruta = arrFrutas.find((el)=>{
    return el.length > 5
})
console.log(fruta);