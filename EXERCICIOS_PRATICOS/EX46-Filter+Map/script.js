//10 NÚMEROS → MOSTRAR PARES MULTIPLICADOS POR 2

let num = [1,2,3,4,5,6,7,8,9,10];

let pares = num.filter((el)=>{
    return el % 2 == 0
})

let mult = pares.map((el)=>{
    return el*2
})
console.log(mult);
