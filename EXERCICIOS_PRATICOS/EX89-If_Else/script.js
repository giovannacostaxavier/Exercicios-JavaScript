//FUNÇÃO QUE RECEBE ARRAY DE NÚMEROS E USA FOR...OF COM IF/ELSE PARA SEPARAR EM DOIS ARRAYS: POSITIVOS E NEGATIVOS

let separar = (arr)=>{
    let positivo = []
    let negativo = []
    for (const numeros of arr) {
        if (numeros < 0) {
            negativo.push(numeros)
        }else{
            positivo.push(numeros)
        }
    }
    console.log(positivo);
    console.log(negativo);
}
separar([-1,-20,3,4,7])


