/*FUNÇÃO QUE RECEBE N FUNÇÕES VIA REST E RETORNA UMA NOVA FUNÇÃO QUE AS CHAMA TODAS EM SEQUÊNCIA COM O MESMO
ARGUMENTO*/

let soma =(a,b)=>{
    console.log(a+b);
    
}


let subtracao =(a,b)=>{
    console.log(a-b);
}


let divisao =(a,b)=>{
    console.log(a/b);
}


let multiplicacao =(a,b)=>{
   console.log(a*b);
}



let chamaTodas =(...func)=>{
    
let auxiliar =(a,b)=>{
    func.forEach(el => {
        el(a,b)
    });
    
}
    return auxiliar
}

let resultado = chamaTodas(soma, subtracao, divisao, multiplicacao)
resultado(5,10)