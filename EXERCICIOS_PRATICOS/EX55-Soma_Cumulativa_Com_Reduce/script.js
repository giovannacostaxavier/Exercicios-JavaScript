//FUNÇÃO QUE RETORNA A SOMA CUMULATIVA DE UM ARRAY (RUNNING TOTAL)

let num = [12, 14, 15, 20];

let soma = num.reduce((ac, el) => {
    let ultimo = ac.length === 0 ? 0 : ac[ac.length - 1]  
    ac.push(ultimo + el)  
    return ac            
}, [])

console.log(soma) 