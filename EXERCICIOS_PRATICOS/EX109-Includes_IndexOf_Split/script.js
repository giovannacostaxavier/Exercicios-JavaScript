/*Você tem a string "banana,maçã,uva,laranja,manga". Transforme-a em um array de frutas, verifique se "uva" está na lista e descubra em qual posição ela aparece na string original.*/

let frutas = 'banana,maçã,uva,laranja,manga'
let fruta = frutas.split(",")
console.log(fruta);
console.log(fruta.includes('uva'));
console.log(frutas.indexOf('uva'));

