//FUNÇÃO QUE RECEBE UM NÚMERO DE DIA (1–7) E USA SWITCH CASE PARA RETORNAR O NOME DO DIA DA SEMANA

let dias = (num)=>{
    switch (num) {
            case 1:
                return `Segunda`;
            case 2:
                return`Terça`;
            case 3:
                return`Quarta`;
            case 4:
                return`Quinta`;
            case 5:
                return`Sexta`;
            case 6:
                return`Sábado`;
            case 7:
                return`Domingo`;
        default:
                return`Opção inválida`;
            
    }

}

let res = dias(8)
console.log(res);
