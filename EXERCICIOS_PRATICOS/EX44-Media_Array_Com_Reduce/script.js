//FUNÇÃO QUE CALCULA MÉDIA DE UM ARRAY
let num = [10,15,25,37];
let media = 0;

let soma = num.reduce((ac,el)=>{
    return ac + el
},0)

media = soma / num.length;
console.log(media);
