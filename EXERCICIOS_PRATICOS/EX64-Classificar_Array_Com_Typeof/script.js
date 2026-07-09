//FUNÇÃO QUE USA TYPEOF PARA CLASSIFICAR UM ARRAY DE VALORES MISTOS E RETORNAR QUANTOS SÃO DE CADA TIPO

let classificar = (arr) => {
    let contagem = {};
    arr.forEach(valor => {
        let tipo = typeof valor;
        contagem[tipo] = (contagem[tipo] || 0) + 1;
    });
    return contagem;
}

console.log(classificar([1, "olá", true, 42, "mundo", false, ()=>{}]));
