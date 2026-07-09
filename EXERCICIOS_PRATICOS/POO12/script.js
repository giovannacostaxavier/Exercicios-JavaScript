/*CRIE UMA CLASSE PESSOA COM _NOME E _IDADE. O GET DE IDADE DEVE RETORNAR UMA FRASE. O SET DEVE BARRAR IDADES NEGATIVAS OU ACIMA DE 120.*/

class Pessoa {
    constructor(nome,idade){
        this.idade = idade
        this.nome = nome
    }

    get idade (){
        return `Sua idade é ${this._idade} anos`
    }
    get nome (){
        return `Seu nome é ${this._nome}`
    }

    set idade (idade){
        if (idade < 0 || idade > 120) {
            console.log(`Idade inválida`);
            return
        }
        this._idade=idade
    }

}

const n1 = new Pessoa('Giovanna',29)
console.log(n1.nome);
console.log(n1.idade);
n1.idade = 230
