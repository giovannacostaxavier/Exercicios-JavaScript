
let botao = document.querySelector("#botao")


botao.addEventListener("click",()=>{
    let texto = document.querySelector("#texto").value
    let resp = document.querySelector("#resposta")
    resp.innerHTML = `Bem vindo, ${texto}!`
})