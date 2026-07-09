//FUNÇÃO QUE RECEBE UM ARRAY DE OBJETOS {NOME, TIPO} E USA FOR...OF PARA IMPRIMIR CADA NOME NO CONSOLE

let pessoas = [
    { nome: "Giovanna" },
    { nome: "Pedro" },
    { nome: "Koll" },
    { nome: "Finn" }
]

for (const elemento of pessoas) {
    console.log(elemento.nome)
}