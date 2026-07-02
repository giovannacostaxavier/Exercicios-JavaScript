//FUNÇÃO QUE RECEBE UMA FRASE E USA FOR...OF PARA RETORNAR A FRASE COM CADA PALAVRA CAPITALIZADA

let cap = (frase) => {
    let resultado = []
    for (const palavra of frase.split(" ")) {
        let capitalizada = palavra[0].toUpperCase() + palavra.slice(1).toLowerCase()
        resultado.push(capitalizada)
    }
    console.log(resultado.join(" "))
}

cap(`meu nome é giovanna`)