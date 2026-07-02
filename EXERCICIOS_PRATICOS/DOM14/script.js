let botao = document.querySelector("#botao")

botao.addEventListener("click",()=>{
    let verificar;
    let nome = document.querySelector("#nome").value
    let idade = document.querySelector("#idade").value
    let res = document.querySelector("#res")
    idade >= 18 ? verificar = "maior de idade" : verificar = "menor de idade"
    res.innerHTML = `Olá ${nome}, tens ${idade} anos e es ${verificar}!`
})