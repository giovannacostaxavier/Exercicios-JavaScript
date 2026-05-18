/*FUNÇÃO QUE RECEBE DOIS ARRAYS VIA REST E USA SPREAD E FOR...OF PARA RETORNAR A UNIÃO DOS DOIS SEM DUPLICADOS*/

let duploarr = (...arr) => {
    let set = new Set()
    
    for (const el of arr) {
        for (const num of el) {
            set.add(num)
        }
    }
    
    return [...set]
}

let res = duploarr([10,20,30],[30,50,40])

console.log(res);
