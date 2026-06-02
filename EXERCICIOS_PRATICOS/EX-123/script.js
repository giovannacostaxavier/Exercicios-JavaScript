/*Crie um array com 4 palavras.
Inverta a ordem do array.
Junte todos os elementos em uma única string separada por espaço.
Mostre o resultado final.*/

let arr = ['rato','roel','roupa','rei']
arr.reverse()
console.log(arr);
let novo = arr.join(" ")
console.log(novo);


/*Crie um array com 5 números.
Verifique se o número 10 está no array.
Adicione um novo número no final.
Verifique novamente se o número 10 ainda está no array.
Mostre os dois resultados (antes e depois).*/

let num = [1,2,3,4,5]
console.log(num);
console.log(num.includes(10));
num.push(10)
console.log(num);
console.log(num.includes(10));