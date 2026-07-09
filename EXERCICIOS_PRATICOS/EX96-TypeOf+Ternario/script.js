/*FUNÇÃO QUE RECEBE UM VALOR E USA TYPEOF E TERNÁRIO COMBINADOS PARA RETORNAR O DOBRO SE FOR NÚMERO, O TEXTO EM
MAIÚSCULAS SE FOR STRING, OU 'INVÁLIDO' NOS OUTROS CASOS*/


let valores = (val)=>{
    let res = typeof val == "number" ? val*2 : typeof val == "string" ? val.toLocaleUpperCase() : "INVÁLIDO"
    return res
}

resultado = valores(true)
console.log(resultado);


