/*Função que recebe dois objetos e usa for...in e spread para retornar um objeto com apenas as propriedades
diferentes entre eles*/

let iguais = (obj1,obj2)=>{
    let el = {}
    for (const chave in obj1) {
        if(obj1[chave] !== obj2[chave]){
            el = { ...el, [chave]: obj1[chave] }
        }
    }

    for (const chave in obj2) {
        if(obj2[chave] !== obj1[chave]){
            el = { ...el, [chave]: obj2[chave] }
        }
    }
    return el
}

let resultado = iguais({nome:`Giovanna`,idade:29,altura:167},{nome:`Pamela`,cidade:`Brasilia`,altura:158}) 

console.log(resultado);
