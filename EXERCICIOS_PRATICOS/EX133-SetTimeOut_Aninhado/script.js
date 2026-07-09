const semaforo = setTimeout(()=>{
    console.log('Vermelho')
    setTimeout(()=>{
        console.log('Amarelo')
        setTimeout(()=>{
            console.log('Verde')
        },3000);
    },1000);
},3000);