let botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    let res = document.querySelector("#res")
    let texto = document.querySelector("#texto").value
    res.innerHTML = texto.toUpperCase()
    
})