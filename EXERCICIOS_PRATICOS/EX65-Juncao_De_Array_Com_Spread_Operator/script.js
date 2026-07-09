//FUNÇÃO QUE RECEBE DOIS ARRAYS E USA SPREAD PARA JUNTÁ-LOS NUM ARRAY ÚNICO

let todasAsFrutas = (frutas1,frutas2)=>{
    return [...frutas1,...frutas2]
}
console.log(todasAsFrutas(["maça","banana","uva"],["melao","melancia","pera"]));
