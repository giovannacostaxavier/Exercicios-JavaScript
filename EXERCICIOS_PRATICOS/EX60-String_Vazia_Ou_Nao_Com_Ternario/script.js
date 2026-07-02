//FUNÇÃO QUE RECEBE UMA STRING E USA TERNÁRIO PARA RETORNAR 'VAZIA' OU O PRÓPRIO TEXTO


let verificar = (palavra)=>{
    return palavra === "" ? "vazia" : palavra;
}

console.log(verificar(""));
