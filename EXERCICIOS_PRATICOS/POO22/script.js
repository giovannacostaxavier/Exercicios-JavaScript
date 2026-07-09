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

//POLIMORFISMO

const vec = [v2,v3]

vec.forEach((el)=>{
    console.log(el.acelerar(200).descricao());
})