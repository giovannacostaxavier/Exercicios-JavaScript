/*DADO O ARRAY [1, 2, 3, 4, 5], USA REDUCE PARA SOMAR TODOS OS VALORES E IMPRIMIR O TOTAL.*/

let arr = [1, 2, 3, 4, 5]

let soma = arr.reduce((anterior,atual)=>{
    return anterior+atual
})

console.log(soma);