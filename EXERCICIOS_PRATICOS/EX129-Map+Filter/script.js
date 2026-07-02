/*DADO O ARRAY [12, 5, 8, 20, 3, 17, 6], USA FILTER PARA FICAR SÓ COM OS NÚMEROS MAIORES QUE 10, DEPOIS USA MAP NO RESULTADO PARA MULTIPLICAR CADA UM POR 3. IMPRIME O ARRAY FINAL.*/

let arr = [12, 5, 8, 20, 3, 17, 6]

let resultado = arr.filter((el)=>{
    return el > 10
}).map((el)=>{
    return el * 3
})

console.log(resultado);