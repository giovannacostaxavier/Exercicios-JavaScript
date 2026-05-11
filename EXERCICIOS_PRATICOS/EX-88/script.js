/*FUNÇÃO QUE RECEBE UM ARRAY E USA SPREAD PARA RETORNAR O MAIOR E O MENOR ELEMENTO SEM USAR MATH.MAX/MIN
DIRETAMENTE EM LOOP*/



let maiorMenor =(arr)=>{
    let op = [...arr]
    let maior = op[0]
    let menor = op[0]
    op.forEach((el)=>{
        if(el > maior){
            maior = el
        }else if(el < menor){
            menor = el
        }
    })
    return [maior,menor]
}

let resultado = maiorMenor([10,20,30,40])
console.log(resultado);



