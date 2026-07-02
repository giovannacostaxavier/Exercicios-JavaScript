let frutas = ["Maça","Banana","Laranja","Melancia","Uva"]
let listaUl = document.createElement('ul')
let body = document.getElementsByTagName('body')

body[0].appendChild(listaUl)

let listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0]);

for(let i = 0; i < frutas.length; i++){
  let liFor = document.createElement('li')
  let textoLi = document.createTextNode(frutas[i])
  liFor.appendChild(textoLi)
  console.log(liFor);
  listaNoBody[0].appendChild(liFor)
  
}

