/*DADO O ARRAY [4, 7, 2, 9, 1, 8, 3], USA REDUCE PARA SOMAR APENAS OS NÚMEROS ÍMPARES. ANTES DE SOMAR, USA SOME PARA VERIFICAR SE EXISTE ALGUM NÚMERO MAIOR QUE 8 E IMPRIME UMA MENSAGEM CONFORME O RESULTADO.*/

let arr = [4, 7, 2, 9, 1, 8, 3]

let temMaiorQue8 = arr.some((el) => {
    return el > 8
})

if (temMaiorQue8 == true) {
    console.log("Existem elementos maiores que 8")
} else {
    console.log("Não existem elementos maiores que 8")
}

let somaImpares = arr.reduce((acumulador, el) => {
    if (el % 2 == 1) {
        return acumulador + el
    }
    return acumulador
}, 0)

console.log(somaImpares)