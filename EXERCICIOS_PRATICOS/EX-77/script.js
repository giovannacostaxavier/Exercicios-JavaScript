/*Função que recebe uma string com nome de mês e usa switch case para retornar quantos dias esse mês tem
(ignora ano bissexto)*/

let meses = (mes)=>{
    switch (mes) {
        case `janeiro`:
            return `31 dias`
            
        case `fevereiro`:
            return `28 dias`
            
        case `março`:
            return `31 dias`
            
        case `abril`:
            return `30 dias`
            
        case `maio`:
            return `31 dias`
            
        case `junho`:
            return `30 dias`
            
        case `julho`:
            return `31 dias`
            
        case `agosto`:
            return `31 dias`
            
        case `setembro`:
            return `30 dias`
            
        case `outubro`:
            return `31 dias`
            
        case `novembro`:
            return `30 dias`
            
        case `dezembro`:
            return `31 dias`
            
    
        default:
            return `Mes invalido`
    }
}

console.log(meses(`janeiro`));
