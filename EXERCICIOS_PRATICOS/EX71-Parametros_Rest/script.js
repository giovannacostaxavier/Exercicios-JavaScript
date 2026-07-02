//FUNÇÃO QUE USA PARÂMETRO REST PARA RECEBER UM PREFIXO FIXO E N PALAVRAS, E RETORNA TODAS COM O PREFIXO

let juntar = (fixo,...palavras)=>{
    return palavras.map((el)=>{
        return fixo + el
    })
}

console.log(juntar("Sra ","Maria","Joana"));
