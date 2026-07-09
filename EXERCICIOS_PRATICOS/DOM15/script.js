const cursoSel = document.getElementById("cursoSelecionado");
const removerbtn = document.getElementById("btnRemover");


const funcaoBTN =()=>{
return document.querySelector('input[type="radio"]:checked');
}
cursoSel.addEventListener("click", () => {
    const radioSelecionado=funcaoBTN()
    //if(!radioSelecionado){
    //    alert("Não existem cursos selecionados , por favor selecione um curso")
    //    return
    //}  
    try{const texto = radioSelecionado.previousElementSibling.textContent;
    alert(texto);
    }catch (erro){
        alert("Não existem cursos selecionados, por favor selecione um curso",erro)
    }
    
});

removerbtn.addEventListener("click",()=>{
    const btnRemovido=funcaoBTN()
    if(!btnRemovido){
        alert("Não existem cursos selecionados, por favor selecione um curso")
        return
    }
    btnRemovido.parentNode.remove()
})    
