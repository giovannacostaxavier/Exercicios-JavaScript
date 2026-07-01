//DADO O ARRAY ["BANANA", "UVA", "MELANCIA", "KIWI", "ABACATE"], USE FOR...OF PARA EXIBIR APENAS AS FRUTAS CUJO NOME TEM MAIS DE 4 LETRAS, EM MAIÚSCULAS.

let frutas = ["banana", "uva", "melancia", "kiwi", "abacate"]

for (const fruta of frutas) {
    if (fruta.length > 4){
        console.log(fruta.toLocaleUpperCase());
    }
    
}


