//FUNÇÃO QUE RECEBE UM ARRAY DE NÚMEROS E USA FOR...OF PARA CALCULAR A SOMA

let somar = (...numeros)=>{
    let res = 0
    for (const numero of numeros) {
       res += numero
    }
    return res
}

console.log(somar(2,3,4,5));
