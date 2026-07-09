//FUNÇÃO QUE RECEBE UM OBJETO E USA SPREAD PARA ADICIONAR UMA PROPRIEDADE NOVA SEM MUTAR O ORIGINAL

let palavras = {
    nome:`Giovanna`,
    altura: 1.58,
    peso: 70.0
}

let adicionar = ()=>{
    return {...palavras, telefone: `954-584-589`}
}

console.log(adicionar());
