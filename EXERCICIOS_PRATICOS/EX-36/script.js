//ARRAY DE 10 NOMES → FILTRAR NOMES COM MAIS DE 4 LETRAS

let nomes = ['Cristine','Ana','Pedro','Raul','Angelica'];

let filtrar = nomes.filter((el)=>{
     if (el.length > 4) {
        return el
    }
})

console.log(filtrar);
