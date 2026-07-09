//FUNÇÃO QUE RECEBE QUALQUER VALOR E USA TYPEOF PARA VERIFICAR SE É UMA FUNÇÃO

let tipo = (a) => {
    return typeof a === "function" ? "É uma função" : "Não é uma função";
}

console.log(tipo(42));      
console.log(tipo(()=>{}));  