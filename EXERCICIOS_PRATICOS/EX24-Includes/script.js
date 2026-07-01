//CRIE UMA FUNÇÃO QUE RECEBE UMA STRING E RETORNA TRUE SE ELA CONTÉM A PALAVRA "ERRO", E FALSE CASO CONTRÁRIO.
let erro =(palavra)=>{
   return palavra.includes('erro')
   
}
let res = erro('erro errado')
console.log(res);