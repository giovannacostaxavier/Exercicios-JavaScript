//FUNÇÃO QUE RECEBE DOIS OBJETOS E USA SPREAD PARA FAZER MERGE NUM TERCEIRO

let vFrutas = {
    banana: 9.99,
    uva: 5.99,
    manga: 8.99,
    maça: 4.99
}
let vVerduras = {
    batata: 5.99,
    cebola: 7.99,
    tomate: 8.99
}

let juntar = ()=>{
    let todas = {...vFrutas,...vVerduras}
    return todas
}

console.log(juntar());
