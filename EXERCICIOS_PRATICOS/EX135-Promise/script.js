const minhaPromessa = new Promise((resolve,reject)=>{
    let num = 1+1

    if (num == 2) {
        resolve("Deu tudo certo!")
    } else {
        reject("Deu tudo errado!")
    }
})
minhaPromessa.then((resultado)=>{
    console.log(`Resultado: ${resultado}`);
    
}).catch((err)=>{
    console.log(`Deu errado : ${err}`);
    
})