/*VOCÊ TEM O ARRAY [12.5, 0, -3, 99.9, NAN, 150]. USE UM LOOP PARA CONSTRUIR UM NOVO ARRAY CONTENDO APENAS OS PREÇOS VÁLIDOS (MAIORES QUE 0 E QUE SEJAM NÚMEROS FINITOS)*/

let numeros = [12.5, 0, -3, 99.9, NaN, 150]
let novo = []
for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] > 0 && Number.isFinite(numeros[i])) {
       novo.push(numeros[i])
   }
    
}
console.log(novo);