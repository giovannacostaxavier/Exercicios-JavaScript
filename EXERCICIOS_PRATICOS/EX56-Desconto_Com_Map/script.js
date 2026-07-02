//FUNÇÃO QUE RECEBE ARRAY DE PREÇOS E APLICA DESCONTO PERCENTUAL A TODOS

let preco = [10.99,9.99,21.00];

let desconto = preco.map((el)=>{
       return (el*0.8).toFixed(2)
       
    
})

console.log(desconto);
