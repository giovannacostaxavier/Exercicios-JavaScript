let botao = document.querySelector("#botao")
let res = document.querySelector("#res")

botao.addEventListener("click", () => {
    let valorAtual = Number(res.innerHTML)
    valorAtual++
    res.innerHTML = valorAtual
})