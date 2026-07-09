//FUNÇÃO QUE RECEBE DOIS OBJETOS E USA FOR...IN PARA RETORNAR AS CHAVES QUE EXISTEM EM AMBOS


let ambos = (obj1, obj2) => {
    let chavesEmAmbos = [];

    for (const chave in obj1) {
        if (chave in obj2) {
            chavesEmAmbos.push(chave);
        }
    }

    return chavesEmAmbos;
}

let res = ambos(
    { nome: 'Giovanna', idade: 29, item: 'Celular' },
    { item: 'Celular', valor: 29.99, idade: 30 }
);

console.log(res); 