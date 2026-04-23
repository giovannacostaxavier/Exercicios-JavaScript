//FUNÇÃO QUE RECEBE DOIS VALORES E USA TYPEOF PARA VERIFICAR SE AMBOS SÃO DO MESMO TIPO

let mesmotipo = (a, b) => {
    return typeof a === typeof b ? "São do mesmo tipo" : "São de tipos diferentes";
}

console.log(mesmotipo(42, 10));       
console.log(mesmotipo(42, "olá"));   