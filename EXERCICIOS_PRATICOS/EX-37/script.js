//ARRAY DE 10 NÚMEROS → CALCULAR MÉDIA COM REDUCE

let num = [10,20,30,40,50,60,70,80,90,100];

let soma = num.reduce((at,el)=>{
    return at+el

})

let media = soma/num.length
console.log(media);
