/*Crie uma classe Veiculo com _marca e _velocidade (iniciando em 0), e um método acelerar() que aumenta a velocidade em 10 e imprime a velocidade atual. Crie uma classe Carro que herda de Veiculo, adiciona _modelo, e tem um método buzinar() que imprime "Beep beep!"*/

class Veiculo{
    constructor(marca=0,velocidade=0){
        this.marca = marca
        this.velocidade = velocidade
    }

    acelerar(){
        this.velocidade = this.velocidade+10
        console.log(this.velocidade);
    }
}

class Carro extends Veiculo{
    constructor(marca,velocidade,modelo){
        super(marca,velocidade)
        this.modelo=modelo
    }
    
    buzinar(){
        console.log(`Beep beep!`);
    }
}

const c1= new Veiculo(`Corola`, 100)
const c2= new Carro(`Renaut`, 120,`Sandero` )

c1.acelerar()
c2.acelerar()
c2.acelerar()
c2.acelerar()
c2.buzinar()