let novoTexto = document.querySelector('h1')

novoTexto.textContent = 'novo texto'

let imagem = document.querySelector('img')

console.log(imagem.getAttribute('alt'));
imagem.setAttribute('src','cachorro.jpg')
imagem.removeAttribute('alt')

console.log(imagem);