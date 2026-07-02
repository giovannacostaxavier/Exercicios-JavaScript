let botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    let n1 = Number(document.querySelector("#n1").value)
    let n2 = Number(document.querySelector("#n2").value)
    let selecao = document.querySelector("#selecao")
    let res = document.querySelector("#res")

    selecao.value == "+" ? res.innerHTML= n1+n2 : res.innerHTML = n1-n2

    

})