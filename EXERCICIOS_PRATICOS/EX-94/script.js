/*FUNÇÃO QUE RECEBE UM OBJETO COM PROPRIEDADES DE QUALQUER TIPO E USA FOR...IN E TYPEOF PARA RETORNAR SÓ AS
PROPRIEDADES NUMÉRICAS*/

let tipos = (obj)=>{
    let res = [];
    for (const chave in obj) {
       typeof obj[chave] == `number`? res.push(obj[chave]) : null
       
        
    }
    return res
}

let resultado = tipos({nome:`Giovanna`,idade:29, altura: 165})

console.log(resultado);
