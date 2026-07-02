let contador = 0
const regressiva = setInterval(()=>{
    console.log(`${contador}%`);
    if (contador == 100) {
       clearInterval(regressiva) 
       console.log("Download completo !")
    }
    contador += 10
},500);

