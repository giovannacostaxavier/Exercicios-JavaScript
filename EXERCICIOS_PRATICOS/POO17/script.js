/*Crie uma classe Idade com campo privado #valor. O set valor deve impedir valores negativos (mostrando uma mensagem de erro). O get valor deve retornar a frase "Tenho X anos"*/

class Idade {
    #valor
    constructor(valor){
        this.valor = valor
    }

    get valor(){
        return `Tenho ${this.#valor} anos`
    }

    set valor(val){
        if (val < 0) {
            console.log(`Idade inválida!`);
            return
        }
        this.#valor = val
    }
}

const minhaIdade = new Idade(25)
minhaIdade.valor = -1
console.log(minhaIdade.valor);