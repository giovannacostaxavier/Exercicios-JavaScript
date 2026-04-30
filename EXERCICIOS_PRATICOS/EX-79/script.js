/*FUNÇÃO QUE RECEBE A VELOCIDADE DE UM CARRO E USA SWITCH CASE COM INTERVALOS PARA RETORNAR 'NORMAL', 'ATENÇÃO' OU
'MULTA'*/

let multa = (vel)=>{
    switch (true) {
        case vel >= 50 && vel <= 100:
            return `Velocidade normal`
        case vel >= 101 && vel <= 120:
            return `Atenção`
        case vel > 120:
            return `Multa`
        default:
            return `Velocidade inválida`
           
    }
}
