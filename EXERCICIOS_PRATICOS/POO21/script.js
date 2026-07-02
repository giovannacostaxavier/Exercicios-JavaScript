/*Crie uma classe Veiculo com #marca, #modelo e #velocidade (iniciando em 0). Ela deve ter um método acelerar(valor) que soma valor à velocidade, e um método descricao() que retorna uma string tipo "Marca Modelo - Xkm/h"*/

class Veiculo{
    #marca
    #modelo
    #velocidade = 0
    constructor(marca,modelo){
        this.#marca = marca
        this.#modelo = modelo
    }
    acelerar(valor){
        this.#velocidade += valor
        return this
    }

    descricao(){
        return `${this.#marca} ${this.#modelo} - ${this.#velocidade}Km/h`
    }
}

/*Crie uma classe Carro que estende Veiculo, adicionando #numPortas. Sobrescreva descricao() pra incluir o número de portas, mas reaproveitando o descricao() da classe pai com super.descricao()*/

class Carro extends Veiculo{
    #numPortas

    constructor(marca,modelo,numPortas){
        super(marca,modelo)
        this.#numPortas = numPortas
    }

    descricao(){
        return `${super.descricao()} - ${this.#numPortas} Portas`
    }
}

/*Crie uma classe Moto que estende Veiculo, adicionando #cilindradas, com a mesma lógica de override reaproveitando o pai*/

class Moto extends Veiculo{
    #cilindradas

    constructor(marca,modelo,cilindradas){
        super(marca,modelo)
        this.#cilindradas = cilindradas
    }

    descricao(){
        return `${super.descricao()} - ${this.#cilindradas} cilindradas`
    }

}

const v1 = new Veiculo ('chevrolet','Sandero',200)
const v2 = new Carro ('Tesla', 'S20', 4)
const v3 = new Moto ('Honda', 'Biz', 150)


console.log(v1.acelerar(200).descricao());
console.log(v2.acelerar(200).descricao());
console.log(v3.acelerar(200).descricao());