//FUNÇÃO QUE RECEBE UM OBJETO {NOME, IDADE, CIDADE} E USA SPREAD PARA CRIAR CÓPIA COM A CIDADE ALTERADA
let id = {  name: `Hifza`,
            age: `36`,
            city: `lahore`}
let name = ()=>{
    let novo = {
        ...id,
        city: `Porto`
    }
    return novo
}

console.log(name());

