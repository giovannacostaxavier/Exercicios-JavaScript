//FUNÇÃO QUE CONTA QUANTOS ELEMENTOS DE UM ARRAY SÃO POSITIVOS

let num = [-1,10,5,-3,15,20];
let somaPositivos = 0

let positivos = num.forEach((el)=>{
        if(el > 0){
          somaPositivos+=1
        }
})
console.log(somaPositivos);
