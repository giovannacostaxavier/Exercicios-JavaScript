let botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    let res = document.querySelector("#res")
    let texto = document.querySelector("#texto").value
    texto % 2 == 0 ? res.innerHTML=`Par` : res.innerHTML=`Impar`
})