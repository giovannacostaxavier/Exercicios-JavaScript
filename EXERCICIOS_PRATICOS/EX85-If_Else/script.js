//FUNÇÃO QUE RECEBE IDADE E USA IF/ELSE ENCADEADO PARA CLASSIFICAR: CRIANÇA, ADOLESCENTE, ADULTO OU SÉNIOR

let idade = (id)=>{
    if(id >= 0 && id <= 12){
        console.log(`Criança`);
        
    }else if(id >=13 && id <= 17){
        console.log(`Adolescente`);
        
    }else if (id >= 18 && id <= 60){
        console.log(`Adulto`);
        
    }else if(id >= 61 ){
        console.log(`Sênior`);
        
    }
}
idade(70)