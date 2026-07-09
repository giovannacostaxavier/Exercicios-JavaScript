//FUNÇÃO QUE RECEBE UMA STRING E USA FOR...OF PARA CONTAR QUANTAS VOGAIS TEM

function contarVogais(texto) {
    let contador = 0

    for (const letra of texto) {
        if (
            letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u"
        ) {
            contador++
        }
    }

    return contador
}

console.log(contarVogais("Giovanna"))