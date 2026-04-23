//FUNÇÃO QUE VERIFICA SE ARRAY ESTÁ ORDENADO DE FORMA CRESCENTE

let num = [1,2,3,5,6];

let ord = num.every((el,i)=>{
        return i === num.length -1 || el < num[i+1]
    
})

console.log(ord);
