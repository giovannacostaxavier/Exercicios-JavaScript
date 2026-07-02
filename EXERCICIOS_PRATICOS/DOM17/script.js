let pai = document.querySelector('#container')
let primeiroFilho = document.querySelector('#primeiro')

console.log(primeiroFilho.nextElementSibling);
console.log(primeiroFilho.nodeType);
console.log(primeiroFilho.firstChild.nodeType);
console.log(pai.nodeName);
console.log(pai.firstElementChild);
console.log(pai.lastElementChild);
console.log(pai.lastElementChild.parentElement);

