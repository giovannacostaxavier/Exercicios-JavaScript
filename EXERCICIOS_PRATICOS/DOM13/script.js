let botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    let n1 = Number(prompt(`Digite um número`))
    let n2 = Number(prompt(`Digite outro número`))
    let res = document.querySelector("#res")
    res.innerHTML = n1+n2
})