//ARRAY DE 10 NÚMEROS → FILTER PARA PARES

let numeros = [1,2,3,4,5,6,7,8,9,10]

const pares = numeros.filter((el)=>{
    return el%2===0
})
console.log(pares); 
