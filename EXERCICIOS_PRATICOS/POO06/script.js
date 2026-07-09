/*Classe Produto com proteção de preço
Crie uma classe Produto com _preco. O get preco deve retornar o valor formatado com "R$ ". O set preco deve barrar valores negativos ou zero.*/

class Produto{
    constructor(preco){
        this.preco = preco
    }

    get preco(){
        return `R$ ${this._preco.toFixed(2)}`
        
    }

    set preco(valor){
        if(valor <=0){
            console.log(`O valor não pode ser menor que zero!`);
            return
        }
        this._preco = valor
    }

}

const tv = new Produto(0)


tv.preco = 150
console.log(tv.preco);


