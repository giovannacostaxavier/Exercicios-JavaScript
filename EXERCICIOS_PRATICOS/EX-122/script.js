/*Crie um array com 5 números.
Remova o primeiro elemento.
Adicione um novo número no início.
Mostre o array final.*/

let n = [1,2,3,4,5]
n.shift()
console.log(n);

n.unshift(0)
console.log(n);


/*Crie um array com 5 nomes.
Remova 2 elementos a partir do índice 1.
Adicione um novo nome na posição removida.
Mostre o array final.*/

let nomes = ['Ana','Claudia','Carol','Luiza','Katia']
nomes.splice(1,2,'Suzana')
console.log(nomes);