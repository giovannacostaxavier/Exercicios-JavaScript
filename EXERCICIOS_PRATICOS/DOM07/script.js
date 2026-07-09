let botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    let res = document.querySelector("#res")
    let idade = document.querySelector("#idade").value 
    idade >= 18 ? res.innerHTML=`Maior de idade` : res.innerHTML=`Menor de idade`
})
