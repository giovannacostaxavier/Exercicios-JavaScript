/*CRIE UMA CLASSE PRODUTO COM A PROPRIEDADE _NOME. O GET DEVE RETORNAR O NOME FORMATADO COM UMA FRASE. O SET DEVE BARRAR STRINGS VAZIAS OU COM MENOS DE 3 CARACTERES*/

class Produto {

    constructor(nome){
        this.nome = nome
    }

    get nome (){
        return `Nome do produto : ${this._nome}`
    }

    set nome (nome){
        if (nome.length < 3) {
          console.log(`O nome do produto não pode ter menos que 3 letras!`);  
          return
        }
        this._nome = nome
    }
}

const p1 = new Produto(`Geladeira`)
console.log(p1.nome);
p1.nome = `c`
