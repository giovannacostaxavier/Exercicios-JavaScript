//FUNÇÃO QUE RECEBE UM OBJETO E USA FOR...IN PARA RETORNAR ARRAY COM TODOS OS VALORES

let valores =(pessoas)=>{
    let obj = []

    for (const chave in pessoas) {
        obj.push(pessoas[chave])
    }
        return obj

}

let res = valores({ nome: "Giovanna", idade: 29 })

console.log(res);
