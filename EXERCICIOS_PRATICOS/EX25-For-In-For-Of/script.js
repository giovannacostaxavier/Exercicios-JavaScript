
//USO DO FOR...IN

let candidato = {
    nome: 'Aline',
    sobrenome: 'Costa',
    profissao: 'Manicure',
    idade: 22,

}
for (chave in candidato){
    //console.log(`A chave do objeto é ${chave} e a resposta é ${candidato[chave]}!`);
    
}

// FOR...OF PARA SOMAR OS NÚMEROS DE UM ARRAY

let numeros = [10,20,30,40,50]
let soma = 0
    for (n of numeros){
    soma = soma + n
}
    //console.log(soma);

// FOR OF PARA CONCATENAR PALAVRAS EM UMA FRASE 

let palavras = ['Eu', 'amo','minha','familia!']
let frase = ""  
for (let palavra of palavras) {
    frase += palavra + " "  
}
    //console.log(frase.trim()) 

        
    
