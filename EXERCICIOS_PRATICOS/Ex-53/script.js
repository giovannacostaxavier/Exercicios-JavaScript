//FUNÇÃO QUE RECEBE UMA NOTA (0–20) E USA TERNÁRIO PARA RETORNAR 'APROVADO', 'RECUPERAÇÃO' OU 'REPROVADO'
const prompt = require('prompt-sync')(); 

let nota; 

    do{
        nota = parseFloat(prompt("Digite uma nota: "))
        if (nota < 0 || nota > 20) {
        console.log("Nota inválida, tente novamente");
    }
        
    }while(nota < 0 || nota > 20);


    let classificacao = ()=>{
        return nota > 10 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado"



    }

    console.log(classificacao());
    