/*DADO O ARRAY [3, 1, 4, 1, 5, 9, 2, 6], USA SORT COM COMPARATOR FUNCTION PARA ORDENAR DO MENOR PARA O MAIOR.*/

let arr = [3, 1, 4, 1, 5, 9, 2, 6]

arr.sort((a,b)=>{
    return a - b
})

console.log(arr);