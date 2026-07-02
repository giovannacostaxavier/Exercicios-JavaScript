//FUNÇÃO QUE RECEBE UM ARRAY E USA SPREAD PARA CRIAR UMA CÓPIA SEM MODIFICAR O ORIGINAL
let copiar = (arr1) => {
    return [...arr1];
}

let arr1 = [1, 2, 3];
let arr2 = copiar(arr1);  
console.log(arr2);