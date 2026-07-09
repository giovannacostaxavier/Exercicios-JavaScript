/*DADO O ARRAY [2, 4, 6, 8, 9], USA EVERY PARA VERIFICAR SE TODOS SÃO PARES E SOME PARA VERIFICAR SE ALGUM É ÍMPAR.*/

let arr = [2, 4, 6, 8, 9]

let pares = arr.every((el)=>{
    return el % 2 == 0
})

let impar = arr.some((el)=>{
    return el % 2 == 1
})

console.log(pares)
console.log(impar);