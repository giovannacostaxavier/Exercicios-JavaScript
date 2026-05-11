/*FUNÇÃO QUE RECEBE DOIS ARRAYS DE NÚMEROS E USA SPREAD E FOR...OF PARA RETORNAR OS ELEMENTOS QUE EXISTEM NOS DOIS
(INTERSEÇÃO)*/

let verificacao =(arr1,arr2)=>{
    let el = []
    for (const elementos of arr1) {
        
        if(arr2.includes(elementos) == true){
            el.push(elementos)
        }
    }
    return [...el]
}

let res = verificacao([10,11,12,13],[13,14,15,10])

console.log(res);
