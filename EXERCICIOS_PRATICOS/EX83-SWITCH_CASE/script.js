//FUNÇÃO QUE RECEBE UMA LETRA E USA SWITCH CASE PARA RETORNAR SE É VOGAL, CONSOANTE OU OUTRO CARACTER

let letras = (letra)=>{
    switch (letra) {
        case `a`:
        case `e`:
        case `i`:
        case `o`:
        case `u`:
            return `VOGAL`
        case `b`:
        case `c`:
        case `d`:
        case `f`:
        case `g`:
        case `h`:
        case `j`:
        case `k`:
        case `l`:
        case `m`:
        case `n`:
        case `p`:
        case `q`:
        case `r`:
        case `s`:
        case `t`:
        case `v`:
        case `x`:
        case `y`:
        case `z`:
            return `CONSOANTE`
        default:
            return `OUTRO CARACTER`
            break;
    }
}

console.log(letras(`*`));
