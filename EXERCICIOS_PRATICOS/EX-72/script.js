//FUNÇÃO QUE RECEBE UM OBJETO E USA FOR...IN PARA LISTAR TODAS AS CHAVES NO CONSOLE

let listagem = (obj)=>{
    for (const chave in obj) {
    console.log(chave);
    
    }
}
listagem({nome: `Giovanna`, idade:29})

