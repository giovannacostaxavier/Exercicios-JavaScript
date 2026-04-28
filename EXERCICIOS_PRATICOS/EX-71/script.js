//FUNÇÃO QUE RECEBE UM ARRAY E USA FOR...OF PARA CONSTRUIR E RETORNAR UM NOVO ARRAY COM CADA ELEMENTO DUPLICADO
let construir = (...arr) => {
    let novoArr = []

    for (const elemento of arr) {
        novoArr.push(elemento)
        novoArr.push(elemento)
    }

    return novoArr
}

console.log(construir(1,2,3,4))