/*Crie uma classe Termometro com campo privado #graus. O set graus deve impedir temperaturas abaixo de -50 (impossível na prática). O get graus deve retornar "X°C"*/

class Termometro{
    #graus
    constructor(graus){
        this.graus = graus
    }


    get graus(){
        return `${this.#graus}°C`
    }

    set graus(graus){
        if (graus < -50) {
            console.log(`Temperatura inválida`);
            return
        }
        this.#graus = graus
    }
}

const temperatura = new Termometro(15)
temperatura.graus = -70
console.log(temperatura.graus);