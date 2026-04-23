//FUNÇÃO QUE REMOVE O PRIMEIRO E O ÚLTIMO ELEMENTO DE UM ARRAY


let elementos = [10,20,30,40,50];

let remover = () => {
    elementos.shift();
    elementos.pop();
    return elementos;
}

console.log(remover()); 