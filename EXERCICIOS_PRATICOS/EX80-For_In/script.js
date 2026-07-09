//FUNÇÃO QUE RECEBE UM OBJETO DE NOTAS {MATERIA: NOTA} E USA FOR...IN PARA CALCULAR A MÉDIA

let media = 0
let medias = (obj)=>{
    let soma = 0

    for (const chave in obj) {
        soma += obj[chave]
    }
    media = soma / Object.keys(obj).length
}





medias({portugues:19.9,algoritimo:20,c:18.5});
console.log(media.toFixed(2));

