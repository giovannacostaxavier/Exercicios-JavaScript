/*6. CRIE UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNA UMA STRING FORMATADA ASSIM:

SE O NÚMERO FOR INTEIRO, RETORNA "INTEIRO: 7"
SE FOR DECIMAL, RETORNA "DECIMAL: 7.35" (COM 2 CASAS)
SE NÃO FOR UM NÚMERO VÁLIDO, RETORNA "VALOR INVÁLIDO"*/

let formatar =(n)=>{
    if (Number.isNaN(n) || typeof n !== 'number' || !Number.isFinite(n)) {
        return `Valor inválido`
    }else if(Number.isInteger(n)){
        return `Inteiro: ${n}`
    }else{
        return `Decimal: ${n.toFixed(2)}`
    }
}

let res = formatar('ahjkh')
console.log(res);