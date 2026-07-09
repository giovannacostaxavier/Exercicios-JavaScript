
//CONCATENA OS DOIS ARRAYS
let fruta1 = ['banana','maça','manga']
let fruta2 = ['uva','morango']
let todasAsFrutas = [...fruta1,...fruta2]
//console.log(todasAsFrutas);

//ADICIONA ITENS NA FRENTE E ATRAS DE UM ARRAY
let legumes = ['batata','cebola','beterraba']
let NovoLegumes = ['abobrinha',...legumes,'mandioca']
//console.log(NovoLegumes);

// COPIA AS PROPRIEDADES DE UM OBJETO 
let jogador1 = {nome:'Gabriela',energia:100,vidas:3}
let jogador2 = {...jogador1}
//console.log(jogador2);

//CONCATENA DOIS OBJETOS
const produtos1 = {
    geladeira:200,
    microondas:100,
    ferroDePassar:80
}
const produtos2 = {
    notebook:250,
    celular:350
}
const todosOsProdutos = {...produtos1,...produtos2}
//console.log(todosOsProdutos);

// COPIA AS PROPIEDADES DO OBJETO USUARIO1 E MUDA A CHAVE NOME
let usuario1 = {
    nome:'Vanessa',
    idade:25,
    telefone:969256452,
}
let usuario2 = {
    ...usuario1,
    nome:'Valeria'
}
//console.log(usuario2);

//ESPALHA A STRING E TRANSFORMA NUM NOVO ARRAY
let nome = 'Gabriela'
let separarNome = [...nome]
//console.log(separarNome);



