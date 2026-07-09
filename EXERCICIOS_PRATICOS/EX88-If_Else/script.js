/*FUNÇÃO QUE RECEBE USERNAME E PASSWORD (STRINGS) E USA IF/ELSE PARA VALIDAR: MÍNIMO 3 CHARS NO USERNAME E 6 NA
PASSWORD*/

let validacao = (user,pass)=>{
    if(user.length >= 3 && pass.length >= 6){
            
        console.log(`Válido`);
        
    }else{
        console.log(`Inválido`);
        
    }
}

validacao(`Giovanna`,`1256`)