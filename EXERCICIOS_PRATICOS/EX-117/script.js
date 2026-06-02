/*Number.isFinite()
Crie uma variável com o valor 10 e verifique se ela é um número finito.
Verifique se o valor Infinity é finito.
Verifique se o valor "50" (texto) é considerado um número finito.*/


let numero = 10
let infinita = Infinity
let outroNumero = '50'
console.log(Number.isFinite(outroNumero));
console.log(Number.isFinite(infinita));
console.log(Number.isFinite(numero));
