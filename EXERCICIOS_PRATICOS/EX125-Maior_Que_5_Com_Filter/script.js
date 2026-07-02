/*DADO O ARRAY [8, 3, 15, 1, 9, 4], USA FILTER PARA RETORNAR APENAS OS NÚMEROS MAIORES QUE 5.*/

let arr = [8, 3, 15, 1, 9, 4]

let novoArr = arr.filter((el)=>{
    return el > 5
})

console.log(novoArr);