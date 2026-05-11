//FUNÇÃO QUE RECEBE UMA STRING E USA FOR...OF E SWITCH CASE PARA CONTAR QUANTAS LETRAS SÃO 'A', 'E', 'I', 'O' OU 'U'

let vogais =(str)=>{
    let vg = 0
    for (const vogais of str) {
        switch (vogais) {
            case "a":
                vg+=1
                break;
            case "e":
                vg+=1
                break;
            case "i":
                vg+=1
                break;
            case "o":
                vg+=1
                break;
            case "u":
                vg+=1
                break;
        
            default:
                break;
        }
    }
    return vg
}

let res = vogais("giovanna")

console.log(res);
