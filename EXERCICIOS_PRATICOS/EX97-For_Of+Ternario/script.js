/*FUNÇÃO QUE RECEBE ARRAY DE STRINGS E USA FOR...OF E TERNÁRIO PARA RETORNAR ARRAY ONDE CADA STRING ESTÁ INVERTIDA SÓ SE
TIVER MAIS DE 5 LETRAS*/

let arr =(arr1)=>{
    let novoArr = []
    for (const elementos of arr1) { 
       novoArr.push( elementos.length >5 ? elementos.split("").reverse().join("") : elementos)
    }
    return novoArr
}

let resultado = arr(["giovanna","pedro"])
console.log(resultado);
