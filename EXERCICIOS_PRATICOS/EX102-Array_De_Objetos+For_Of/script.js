/*FUNÇÃO QUE RECEBE UM ARRAY DE OBJETOS {PRODUTO, PRECO} E USA FOR...OF E TERNÁRIO PARA APLICAR 10% DE DESCONTO SÓ
NOS ACIMA DE 50*/

let desconto = (obj)=>{
    for (const el of obj) {
        el.preco>50 ? el.preco = el.preco *0.9 : null
        el.preco = el.preco.toFixed(2)
    }
    return obj
}

let res = desconto([
    {produto: `Televisao`, preco: 100},
    {produto: `Geladeira`, preco: 500},
    {produto: `Abajur`, preco: 20},
    {produto: `Caneta`, preco: 10}

]);

console.log(res);

