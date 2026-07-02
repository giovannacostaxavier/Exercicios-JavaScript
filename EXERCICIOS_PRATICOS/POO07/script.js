/*CRIE UMA CLASSE PESSOA COM A PROPRIEDADE _IDADE. O GET DEVE RETORNAR A IDADE FORMATADA COM UMA FRASE. O SET DEVE BARRAR VALORES NEGATIVOS OU ACIMA DE 120*/

class Pessoa{
    constructor(idade){
        this.idade = idade
    }

    get idade(){
        return `A sua idade é ${this._idade} anos ! `
    }

    set idade(id){
        if(id < 0 || id > 120){
            console.log(`Idade inválida`);
            return
        }
        this._idade = id
    }
}

const minhaIdade = new Pessoa(20)

minhaIdade.idade = 125

console.log(minhaIdade.idade);
