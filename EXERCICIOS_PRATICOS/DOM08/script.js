let btnmul = document.querySelector("#mul")

btnmul.addEventListener("click",()=>{
    let a = Number(document.querySelector("#a").value)
    let b = Number(document.querySelector("#b").value)
    let res = document.querySelector("#res")
    res.innerHTML= a*b
})