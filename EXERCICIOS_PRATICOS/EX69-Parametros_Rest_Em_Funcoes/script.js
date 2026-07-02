//FUNÇÃO QUE USA PARÂMETRO REST PARA RECEBER N NÚMEROS E RETORNA A SUA SOMA

let soma = (...numeros)=>{
  return numeros.reduce((ant,atual)=>{
    return ant += atual
  })
}

console.log(soma(5,4,3));
