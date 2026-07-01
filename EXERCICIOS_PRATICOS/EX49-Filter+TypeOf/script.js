let aleatorios = [20,30,"Ana",15,"Paula","Carol"];

let palavras = aleatorios.filter((el)=>{

    return typeof el === "string"
})

console.log(palavras);
