let contador = 5
const regressiva = setInterval(()=>{
    console.log(contador);
    if (contador == 0) {
       clearInterval(regressiva) 
       console.log("Lançamento!")
    }
    contador --
},2000);

