//FUNÇÃO QUE RECEBE UM ANO E USA IF/ELSE PARA DETERMINAR SE É BISSEXTO

let bissexto = (ano) => {
    if(ano % 400 == 0){
        console.log(`Bissexto`)
    } else if(ano % 100 == 0){
        console.log(`Não Bissexto`)
    } else if(ano % 4 == 0){
        console.log(`Bissexto`)
    } else {
        console.log(`Não Bissexto`)
    }
}

bissexto(1996)

