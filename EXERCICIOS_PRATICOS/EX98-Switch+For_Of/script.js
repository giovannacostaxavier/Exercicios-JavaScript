/*FUNÇÃO QUE RECEBE UM NÚMERO INTEIRO E USA SWITCH CASE E FOR...OF PARA RETORNAR OS SEUS DIVISORES NUMA FRASE
DESCRITIVA*/

   let encontrarDivisores = (num) => {
    let resultado = []
    let candidatos = Array.from({ length: num }, (_, i) => i + 1)
    for (let numero of candidatos) {
        switch (num % numero ) {
    case 0:
        resultado.push(numero) 
        break
    default:
        break
}
    }
    console.log(`Os divisores de ${num} são: ${resultado}`)
}

encontrarDivisores(8)