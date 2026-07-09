//FUNÇÃO QUE USA PARÂMETRO REST PARA RECEBER N NÚMEROS E RETORNA SÓ OS PARES

let pares = (...numeros)=>{
    return numeros.filter((el)=>{
        return el % 2 == 0 
    })
}

console.log(pares(2,5,6,8,7,4,9));
