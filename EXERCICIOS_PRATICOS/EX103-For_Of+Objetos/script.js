/*FUNÇÃO QUE RECEBE UMA STRING E USA FOR...OF PARA RETORNAR UM OBJETO COM A FREQUÊNCIA DE CADA CARACTER*/

let qtdLetras = (palavra)=>{
    let cont = {}

    for (const el of palavra) {
        cont[el] ? cont[el] += 1 : cont[el] = 1
    }
    return cont
}

let res = qtdLetras(`giovanna`)
console.log(res);

