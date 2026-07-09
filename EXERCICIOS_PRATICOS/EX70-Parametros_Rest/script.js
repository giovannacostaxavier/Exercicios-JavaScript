//FUNÇÃO QUE USA PARÂMETRO REST PARA RECEBER N STRINGS E RETORNA A MAIS LONGA

let palavras = (...p)=>{
    return p.reduce((maior,palavra)=>{
        return palavra.length > maior.length ? palavra : maior
    })
}

console.log(palavras("banana","goiabada","mel"));

