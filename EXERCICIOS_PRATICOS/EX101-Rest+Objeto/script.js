/*FUNÇÃO QUE USA REST PARA RECEBER N PALAVRAS E RETORNA O OBJETO COM A CONTAGEM DE CADA LETRA ÚNICA EM TODAS AS
PALAVRAS*/

let contagem = (...palavras)=>{
    let cont = {}
    for (let i = 0; i < palavras.length; i++) {
        for (let j = 0; j < palavras[i].length; j++) {
            let letra = palavras[i][j]
            cont[letra] ? cont[letra] += 1 : cont[letra] = 1
        }
        
    }
    return cont


}

let res = contagem(`gato`,`cachorro`,`papagaio`)

console.log(res);



