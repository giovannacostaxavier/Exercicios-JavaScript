//FUNÇÃO QUE JUNTA DOIS ARRAYS SEM DUPLICADOS (UNION)

let a = [1,2,3,4,5,6]
let b = [1,6,7,8,9]

const uniao = (a,b)=>{
   return [...new Set([...a,...b])]
}
console.log(uniao(a,b));
